import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '../../');
const BLOG_DIR = path.join(ROOT, 'lib/data/blog-content-enhanced');

function cleanContent(content) {
    let enhanced = content;

    // 1. Fix JSX Links: <Link href="...">Text</Link> -> [Text](href)
    // Needs to handle double quotes in href and className etc.
    // Regex: <Link\s+href="([^"]+)"[^>]*>(.*?)<\/Link>
    enhanced = enhanced.replace(/<Link\s+href="([^"]+)"[^>]*>(.*?)<\/Link>/g, '[$2]($1)');

    // 2. Fix Malformed Links like: /services/orthodontics/invisalign" className="...">Aligners attachments</Link>
    // This looks like a partial replacement or missed opening tag.
    // Pattern: ([^(\s]+)"\s+className="[^"]+">(.*?)<\/Link>
    // This usually follows a URL pattern in a text context.
    // Example from report: /services/orthodontics/invisalign" className="text-teal-600 hover:underline">Aligners attachments</Link>
    // We should turn this into [Aligners attachments](/services/orthodontics/invisalign)
    // But we need to capture the URL preceding the quote.
    // Be careful not to match valid HTML attributes.
    // Look for: `(\S+)" className="[^"]+">(.*?)<\/Link>` where \S+ is the url.
    enhanced = enhanced.replace(/(\/[^\s"]+)"\s+className="[^"]+">(.*?)<\/Link>/g, '[$2]($1)');

    // 3. Fix Nested Links in URLs: [Text](/path/[Inner](InnerUrl))
    // We want to flatten the inner link to just its text.
    // Recursive regex is hard, but we can match the specific pattern seen.
    // Pattern: `\[([^\]]+)\]\(([^)]*?)\[([^\]]+)\]\(([^)]+)\)(.*?)\)`
    // Captures: 1=Text, 2=Prefix path, 3=Inner Text, 4=Inner URL, 5=Suffix path
    // Replacement: [$1]($2$3$5)
    enhanced = enhanced.replace(/\[([^\]]+)\]\(([^)]*?)\[([^\]]+)\]\(([^)]+)\)(.*?)\)/g, '[$1]($2$3$5)');

    // Run it twice in case of double nesting?
    enhanced = enhanced.replace(/\[([^\]]+)\]\(([^)]*?)\[([^\]]+)\]\(([^)]+)\)(.*?)\)/g, '[$1]($2$3$5)');

    return enhanced;
}

async function run() {
    if (!fs.existsSync(BLOG_DIR)) {
        console.error("Blog directory not found:", BLOG_DIR);
        return;
    }

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    console.log(`Scanning ${files.length} files for malformed links...`);

    let fixedCount = 0;

    for (const file of files) {
        const filePath = path.join(BLOG_DIR, file);
        const original = fs.readFileSync(filePath, 'utf8');
        const cleaned = cleanContent(original);

        if (original !== cleaned) {
            fs.writeFileSync(filePath, cleaned, 'utf8');
            fixedCount++;
            // console.log(`Fixed: ${file}`);
        }
    }

    console.log(`✅ Fixed malformed links in ${fixedCount} files.`);
}

run();
