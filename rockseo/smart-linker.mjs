import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../lib/data/blog-content-enhanced');
const DRY_RUN = process.argv.includes('--dry-run');

// Order matters! Longer phrases first to avoid partial matches.
const ENTITY_MAP = [
    {
        keywords: ["Dr. Rockson Samuel", "Dr. Rockson"],
        url: "/about-us/dr-rockson-samuel"
    },
    {
        keywords: ["Indira Dental Clinic"],
        url: "/about-us"
    },
    {
        keywords: ["wisdom teeth removal", "wisdom tooth extraction", "impacted wisdom tooth", "wisdom teeth"],
        url: "/services/oral-surgery/wisdom-tooth-extraction"
    },
    {
        keywords: ["root canal treatment", "single sitting RCT", "root canal therapy", "endodontic treatment", "root canal"],
        url: "/services/root-canal-treatment"
    },
    {
        keywords: ["dental implants", "tooth implant", "titanium implant", "dental implant"],
        url: "/services/dental-implants"
    },
    {
        keywords: ["Invisalign treatment", "clear aligners", "invisible braces", "Invisalign"],
        url: "/services/orthodontics/invisalign"
    },
    {
        keywords: ["orthodontic treatment", "metal braces", "ceramic braces", "orthodontics"],
        url: "/services/orthodontics"
    },
    {
        keywords: ["dental veneers", "porcelain veneers", "smile makeover", "veneers"],
        url: "/services/cosmetic-dentistry/dental-veneers"
    },
    {
        keywords: ["teeth whitening", "tooth whitening", "dental bleaching"],
        url: "/services/cosmetic-dentistry/teeth-whitening"
    },
    {
        keywords: ["dental crowns", "zirconia crown", "tooth cap", "dental cap"],
        url: "/services/restorative-dentistry/dental-crowns"
    },
    {
        keywords: ["gum treatment", "bleeding gums", "gum disease", "periodontitis", "gingivitis"],
        url: "/services/gum-treatment"
    },
    {
        keywords: ["tooth extraction", "dental extraction", "pulling a tooth"],
        url: "/services/oral-surgery/tooth-extraction"
    }
];

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function processContent(content, filePath) {
    let newContent = content;
    let modifications = 0;

    // 1. Protect existing links and HTML tags by replacing them with placeholders
    const protectionMap = new Map();
    let counter = 0;

    // Protect Markdown links: [text](url)
    newContent = newContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match) => {
        const key = `__PROTECTED_MD_LINK_${counter++}__`;
        protectionMap.set(key, match);
        return key;
    });

    // Protect HTML tags and attributes: <a href="...">...</a>
    newContent = newContent.replace(/<[^>]+>/g, (match) => {
        const key = `__PROTECTED_HTML_${counter++}__`;
        protectionMap.set(key, match);
        return key;
    });

    // 2. Iterate entities and try to link ONLY ONCE per entity
    ENTITY_MAP.forEach(entity => {
        // Skip if the file is the target page (prevent self-linking)
        // Heuristic: check if the file name roughly matches the URL slug
        const filename = path.basename(filePath, '.md');
        const slug = entity.url.split('/').pop();
        if (filename.includes(slug)) return;

        let linked = false;

        // Try each keyword for this entity
        for (const keyword of entity.keywords) {
            if (linked) break; // Already linked this entity

            // Case-insensitive regex with word boundaries
            // Note: Replaced "g" with just "i" to only replace the FIRST occurrence
            // But we need to be careful. The first occurrence might be in a header or early paragraph.
            // We accept that.

            const regex = new RegExp(`\\b${escapeRegExp(keyword)}\\b`, 'i');

            if (regex.test(newContent)) {
                // Perform replacement
                newContent = newContent.replace(regex, (match) => {
                    linked = true;
                    modifications++;
                    // Preserve original case in link text
                    return `[${match}](${entity.url})`;
                });
            }
        }
    });

    // 3. Restore protected segments
    // We need to loop because placeholders might (theoretically) be nested or we want to be safe
    // But our regex was simple. Just global replace back.
    // Actually, random replacement order is fine as keys are unique.
    protectionMap.forEach((value, key) => {
        newContent = newContent.replace(key, value);
    });

    return { newContent, modifications };
}

async function main() {
    console.log(`🚀 RockSEO Smart Linker`);
    console.log(`-----------------------`);
    console.log(`Target: ${BLOG_DIR}`);
    console.log(`Entities: ${ENTITY_MAP.length}`);
    if (DRY_RUN) console.log(`⚠️  DRY RUN MODE`);

    if (!fs.existsSync(BLOG_DIR)) {
        console.error(`❌ Directory not found: ${BLOG_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    console.log(`Found ${files.length} markdown files.`);

    let totalFilesMod = 0;
    let totalLinks = 0;

    for (const file of files) {
        const filePath = path.join(BLOG_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        // Skip if frontmatter only? No, process entire text.

        const { newContent, modifications } = processContent(content, filePath);

        if (modifications > 0) {
            if (!DRY_RUN) {
                fs.writeFileSync(filePath, newContent, 'utf-8');
            }
            // console.log(`  ✅ ${file}: +${modifications} links`);
            totalFilesMod++;
            totalLinks += modifications;
        }

        // Log progress every 100 files
        if (files.indexOf(file) % 100 === 0 && files.indexOf(file) > 0) {
            process.stdout.write('.');
        }
    }

    console.log(`\n\n🎉 Done!`);
    console.log(`Files modified: ${totalFilesMod}`);
    console.log(`Links created: ${totalLinks}`);
}

main().catch(console.error);
