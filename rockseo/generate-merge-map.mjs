
import fs from "fs";
import path from "path";

const BLOG_DIR = "app/[locale]/blog";
const OUTPUT = "rockseo/reports/merge-map.txt";
const BASE_URL = "https://www.velloredental.com/blog/";

if (!fs.existsSync(BLOG_DIR)) {
    console.error(`❌ Blog directory not found: ${BLOG_DIR}`);
    process.exit(1);
}

const blogs = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

const mergeEntries = [];

console.log(`🔍 Scanning ${blogs.length} blogs for canonical redirects...`);

blogs.forEach(slug => {
    const pagePath = path.join(BLOG_DIR, slug, "page.tsx");
    if (fs.existsSync(pagePath)) {
        const content = fs.readFileSync(pagePath, "utf8");

        // Extract canonical URL using regex
        const canonicalMatch = content.match(/canonical:\s*['"]([^'"]+)['"]/);

        if (canonicalMatch) {
            const canonicalUrl = canonicalMatch[1];
            const canonicalSlug = canonicalUrl.replace(BASE_URL, "");

            // If canonical slug is different from current slug -> It's a redirect candidate (Satellite -> Hub)
            if (canonicalSlug !== slug && canonicalSlug.includes("vellore")) {
                // Create entry: /blog/old-slug -> /blog/new-slug
                // The requested format in prompt was: oldA + oldB -> /app/merged/new-page.mdx (or roughly that)
                // But the prompt example was: "oldA + oldB -> /app/merged/new-page.mdx"
                // And the script does: const [left, right] = line.split(" → ");

                // Let's standarize to relative paths for the input script to handle
                const fromPath = `/blog/${slug}`;
                const toPath = `/blog/${canonicalSlug}`;

                mergeEntries.push(`${fromPath} → ${toPath}`);
            }
        }
    }
});

fs.writeFileSync(OUTPUT, mergeEntries.join("\n"));

console.log(`✅ Generated merge-map.txt with ${mergeEntries.length} entries.`);
console.log(`💾 Saved to: ${OUTPUT}`);
