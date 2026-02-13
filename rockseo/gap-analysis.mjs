import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "../app");

// Scan all pages to find links
const links = new Set();
const pages = new Set();

function scan(dir) {
    if (!fs.existsSync(dir)) return;

    for (const f of fs.readdirSync(dir)) {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) {
            scan(full);
        } else if (f.endsWith(".tsx") || f.endsWith(".md") || f.endsWith(".mdx")) {
            // Register this page as existing
            // Convert file path to URL path
            // e.g. /app/[locale]/services/page.tsx -> /services
            // /app/[locale]/services/foo/page.tsx -> /services/foo
            let urlPath = full.replace(ROOT, "").replace("/[locale]", "").replace("/page.tsx", "").replace(".tsx", "");
            if (urlPath === "") urlPath = "/";
            pages.add(urlPath);

            // Extract links
            const content = fs.readFileSync(full, "utf8");

            // Hrefs
            const hrefMatches = [...content.matchAll(/href=["'](\/[^"']+)["']/g)].map(m => m[1]);
            // Links may have search params or hashes, strip them
            hrefMatches.forEach(l => links.add(l.split('#')[0].split('?')[0]));

            // Markdown links [text](/url)
            const mdMatches = [...content.matchAll(/\]\((\/[^)]+)\)/g)].map(m => m[1]);
            mdMatches.forEach(l => links.add(l.split('#')[0].split('?')[0]));
        }
    }
}

console.log("🔍 Scanning for links and pages...");
scan(ROOT);

console.log(`✅ Found ${pages.size} existing pages.`);
console.log(`found ${links.size} unique internal links.`);

// Check links
const missing = [];
const deepMissing = [];

for (const link of links) {
    // Ignore root, special paths
    if (link === "/" || link.startsWith("/api") || link.startsWith("/_next")) continue;

    // Check if page exists
    // We need to match exact path
    // link: /services/foo
    // pages has: /services/foo

    let exists = pages.has(link);

    // Also check if dynamic routes allow it
    if (!exists) {
        // Check if parent has [slug] or [...slug]
        // Simple check: This script doesn't know fully about dynamic routing logic, 
        // but we assume if exact match misses, it's potentially missing unless dynamic.
        // However, the user explicitly said "all pages are 404".
        // So let's list them.

        // Filter out likely dynamic matches if we want, but for now list all.
        // Exception: /blog/slug is handled by [slug].
        if (link.startsWith("/blog/")) {
            // Assume blog exists if we scanned it? 
            // We scanned generated blogs. So if it's in pages, it exists.
            // If not in pages, it's missing.
        }
    }

    if (!exists) {
        missing.push(link);
        if (link.split("/").length >= 5) { // /a/b/c/d (5 parts including empty start)
            deepMissing.push(link);
        }
    }
}

console.log(`❌ Found ${missing.length} broken links.`);
console.log(`❌ Found ${deepMissing.length} DEEP broken links (Level 4+).`);

const REPORT_FILE = path.join(__dirname, "reports/gap-analysis.txt");
const report = deepMissing.join("\n");
fs.writeFileSync(REPORT_FILE, report);
console.log(`💾 Saved deep broken links to ${REPORT_FILE}`);

// Auto-generate missing pages?
// The user asked to "add missing pages".
// We can generate a shell script or perform creation here.
