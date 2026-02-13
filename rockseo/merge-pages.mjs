import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");

// Load env
dotenv.config({ path: path.join(ROOT, ".env") });
dotenv.config({ path: path.join(ROOT, ".env.local") });

const OVERLAP_FILE = path.join(__dirname, "reports/serp-overlap.txt");
const MERGED_DIR = path.join(ROOT, "lib/data/blog-content-enhanced/merged");

if (!fs.existsSync(MERGED_DIR)) fs.mkdirSync(MERGED_DIR, { recursive: true });

async function runAI({ system, prompt }) {
    if (process.env.OPENAI_API_KEY) {
        try {
            const { text } = await generateText({
                model: openai('gpt-4o'), // Use recent model
                system: system,
                prompt: prompt,
            });
            return text;
        } catch (e) {
            console.error("❌ AI Error:", e.message);
            return null;
        }
    }
    // console.log("⚠️ No OPENAI_API_KEY found.");
    return null;
}

function resolvePath(urlPath) {
    if (urlPath.startsWith("/blog/")) {
        const slug = urlPath.replace("/blog/", "").trim();
        return path.join(ROOT, "lib/data/blog-content-enhanced", `${slug}.md`);
    }
    return null;
}

async function mergePair(a, b) {
    const fileA = resolvePath(a);
    const fileB = resolvePath(b);

    if (!fileA || !fileB) {
        console.log(`⚠️ Invalid paths: ${a} or ${b}`);
        return;
    }

    if (!fs.existsSync(fileA)) {
        console.log(`⚠️ File not found (A): ${fileA}`);
        return;
    }
    if (!fs.existsSync(fileB)) {
        console.log(`⚠️ File not found (B): ${fileB}`);
        return;
    }

    const contentA = fs.readFileSync(fileA, "utf8");
    const contentB = fs.readFileSync(fileB, "utf8");

    const name = path.basename(fileA).replace(".md", "-merged.md");
    const mergedPath = path.join(MERGED_DIR, name);

    if (fs.existsSync(mergedPath)) {
        console.log(`⏩ Skipping (Already merged): ${name}`);
        return;
    }

    const mergedContent = await runAI({
        system: `
You are RockSEO.
Merge multiple pages targeting the same search intent.

Rules:
- Preserve unique information
- Remove redundancy
- One macro topic
- Definition-first
- 40-word featured snippet
- Entity-first
- No fluff
- No opinions
- Stronger than either original page
- Output valid Markdown with Frontmatter
`,
        prompt: `
PAGE A:
${contentA}

PAGE B:
${contentB}
`
    });

    if (mergedContent) {
        fs.writeFileSync(mergedPath, mergedContent);
        console.log(`🧬 Merged: ${a} + ${b} -> ${name}`);
    } else {
        console.log(`⚠️ AI failed to generate merge for ${a} + ${b} (Check API Key)`);
    }
}

(async () => {
    if (!fs.existsSync(OVERLAP_FILE)) {
        console.log("❌ Overlap file not found.");
        return;
    }

    const report = fs.readFileSync(OVERLAP_FILE, "utf8");
    const blocks = report.split("\n\n");
    let mergeCount = 0;

    console.log("🔍 Scanning support for merge candidates...");

    for (const block of blocks) {
        if (block.includes("Action: MERGE")) {
            const lines = block.split("\n");
            if (lines.length > 0 && lines[0].includes("↔")) {
                const [a, b] = lines[0].trim().split(" ↔ ");
                await mergePair(a.trim(), b.trim());
                mergeCount++;
            }
        }
    }

    if (mergeCount === 0) {
        console.log("ℹ️ No MERGE actions found.");
    } else {
        console.log(`✅ Scanned ${mergeCount} pairs.`);
    }
})();
