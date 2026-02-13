import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "../app"); // Point to app directory
const CONTENT_ROOT = path.join(__dirname, "../lib/data/blog-content-enhanced"); // Point to markdown blogs

const EXT = [".md", ".mdx", ".tsx", ".js", ".ts"];

function extractEntities(content, ext) {
    const entities = [];

    // Markdown style **bold**
    const boldMatches = [...content.matchAll(/\*\*(.*?)\*\*/g)].map(m => m[1]);
    entities.push(...boldMatches);

    // JSX/HTML style <strong>bold</strong>
    const strongMatches = [...content.matchAll(/<strong[^>]*>(.*?)<\/strong>/gs)].map(m => m[1]);
    entities.push(...strongMatches);

    return entities.map(e => e.trim()).filter(Boolean);
}

const pages = [];

function scan(dir) {
    if (!fs.existsSync(dir)) return;

    for (const f of fs.readdirSync(dir)) {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) {
            scan(full);
        } else if (EXT.includes(path.extname(f))) {
            const content = fs.readFileSync(full, "utf8");
            const entities = extractEntities(content, path.extname(f));

            // Only count pages that have entities (meaning they are content pages)
            if (entities.length > 0) {
                pages.push({
                    file: full,
                    relativePath: path.relative(path.join(__dirname, ".."), full),
                    entities
                });
            }
        }
    }
}

console.log("🔍 Scanning for entities in app and blog content...");
scan(ROOT);
scan(CONTENT_ROOT);

console.log(`✅ Scanned ${pages.length} pages containing entities.`);

const entityFrequency = {};
pages.forEach(p => {
    p.entities.forEach(e => {
        // Normalize entity (lowercase)
        const normalized = e.toLowerCase();
        entityFrequency[normalized] = (entityFrequency[normalized] || 0) + 1;
    });
});

const pageRank = pages.map(p => {
    let score = 0;
    p.entities.forEach(e => {
        const normalized = e.toLowerCase();
        score += entityFrequency[normalized] || 0;
    });
    return { file: p.relativePath, score };
});

pageRank.sort((a, b) => b.score - a.score);

// Output report
const REPORT_FILE = path.join(__dirname, "reports/entity-pagerank.txt");
const reportDir = path.dirname(REPORT_FILE);
if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

const report = pageRank
    .map(p => `${p.file} → EntityRank: ${p.score}`)
    .join("\n");

fs.writeFileSync(REPORT_FILE, report);

console.log(`📈 Entity-based PageRank simulation complete.`);
console.log(`💾 Report saved to ${REPORT_FILE}`);

// Top 10 Hubs
console.log("\n🏆 Top 10 Authority Hubs:");
pageRank.slice(0, 10).forEach((p, i) => {
    console.log(`${i + 1}. ${p.file} (Score: ${p.score})`);
});
