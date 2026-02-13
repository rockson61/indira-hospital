
import fs from "fs";

const BASE_URL = "https://www.velloredental.com";
const RANK_FILE = "rockseo/reports/entity-pagerank.txt";
const OUTPUT = "public/sitemap.xml";

if (!fs.existsSync(RANK_FILE)) {
    console.error("❌ entity-pagerank.txt not found");
    process.exit(1);
}

const lines = fs.readFileSync(RANK_FILE, "utf8")
    .split("\n")
    .filter(Boolean);

console.log(`📊 Processing ${lines.length} pages for sitemap weighting...`);

const pages = lines.map(l => {
    // Format: "./app/page.tsx → EntityRank: 47"
    const parts = l.split(" → EntityRank: ");
    if (parts.length !== 2) return null;

    const [file, scoreRaw] = parts;
    const score = Number(scoreRaw);

    // Clean up URL
    let url = file;

    // 1. Invalid/Internal paths to IGNORE
    if (url.includes("lib/data") || url.includes("components/")) return null;

    // 2. Clean prefixes
    url = url
        .replace(/^(\.\/)?app\/\[locale\]/, "")
        .replace(/^(\.\/)?app/, "")
        .replace(/\.mdx?$/, "")
        .replace(/\/page\.tsx$/, "")
        .replace(/\/page\.js$/, "")
        .replace(/\/page$/, "");

    // 3. Ensure leading slash
    if (!url.startsWith("/")) url = "/" + url;

    if (url === "/index") url = "/";
    if (url === "//") url = "/";

    return { url, score };
}).filter(p => p !== null);

// Calculate max score for normalization
const max = Math.max(...pages.map(p => p.score)) || 1;

function priority(score) {
    // Normalize score to 0.1 - 1.0 range
    // Formula: (score / max_score) * 0.9 + 0.1
    const p = (score / max) * 0.9 + 0.1;
    return p.toFixed(2);
}

const currentDate = new Date().toISOString();

const urls = pages.map(p => `
  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority(p.score)}</priority>
  </url>`).join("");

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync(OUTPUT, sitemapContent);

console.log(`🗺 Entity-weighted sitemap generated with ${pages.length} URLs.`);
console.log(`💾 Saved to: ${OUTPUT}`);
