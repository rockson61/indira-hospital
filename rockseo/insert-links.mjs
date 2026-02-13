#!/usr/bin/env node
/**
 * RockSEO Script 2b — Automatic Link Inserter
 * 
 * Purpose:
 * - Reads the internal-links-report.json
 * - Automatically adds high-priority links to content files
 * - Maintains proper JSX/TSX syntax
 * 
 * Usage: node rockseo/insert-links.mjs [--dry-run]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");

const DRY_RUN = process.argv.includes("--dry-run");
const REPORT_PATH = path.join(__dirname, "reports/internal-links-report.json");

// Hub pages that need to be linked from spoke pages
const HUB_LINKS = {
    "dental-implants": {
        hubPath: "/services/dental-implants",
        anchorText: "dental implants",
        topics: ["implant", "all-on-4", "missing teeth", "titanium"]
    },
    "root-canal": {
        hubPath: "/services/root-canal-treatment",
        anchorText: "root canal treatment",
        topics: ["root canal", "rct", "endodontic", "tooth infection"]
    },
    "orthodontics": {
        hubPath: "/services/orthodontics",
        anchorText: "orthodontic treatment",
        topics: ["braces", "invisalign", "teeth straightening"]
    },
    "gum-treatment": {
        hubPath: "/services/gum-treatment",
        anchorText: "gum treatment",
        topics: ["gum disease", "gingivitis", "periodontitis", "bleeding gums"]
    }
};

let modifiedCount = 0;
let skippedCount = 0;

/**
 * Check if file already has a link to the target
 */
function hasLinkTo(content, targetPath) {
    const patterns = [
        new RegExp(`href=["'\`]${targetPath}["'\`]`, "i"),
        new RegExp(`href=["'\`]${targetPath}\\?`, "i"),
        new RegExp(`href=["'\`]${targetPath}#`, "i")
    ];
    return patterns.some(p => p.test(content));
}

/**
 * Find the best insertion point in the content
 */
function findInsertionPoint(content, clusterTopics) {
    // Look for a paragraph that mentions cluster topics
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].toLowerCase();
        const hasClosingP = line.includes("</p>");
        const hasTopic = clusterTopics.some(t => line.includes(t.toLowerCase()));

        if (hasClosingP && hasTopic) {
            return {
                lineIndex: i,
                position: lines[i].indexOf("</p>")
            };
        }
    }

    return null;
}

/**
 * Insert a link into content at the specified position
 */
function insertLink(content, lineIndex, position, linkHtml) {
    const lines = content.split("\n");
    const line = lines[lineIndex];

    // Insert before </p>
    const newLine = line.slice(0, position) + " " + linkHtml + line.slice(position);
    lines[lineIndex] = newLine;

    return lines.join("\n");
}

/**
 * Process a single file to add hub links
 */
function processFile(filePath, cluster, hubData) {
    try {
        let content = fs.readFileSync(filePath, "utf8");

        // Skip if already has link to hub
        if (hasLinkTo(content, hubData.hubPath)) {
            skippedCount++;
            return false;
        }

        // Find insertion point
        const insertPoint = findInsertionPoint(content, hubData.topics);

        if (!insertPoint) {
            // Try adding to a "Related Links" section if it exists
            if (content.includes("Related") || content.includes("Learn more")) {
                // Skip - need manual review
                skippedCount++;
                return false;
            }
            skippedCount++;
            return false;
        }

        // Create the link HTML
        const linkHtml = `<Link href="${hubData.hubPath}" className="text-teal-600 hover:text-teal-700 font-medium">${hubData.anchorText}</Link>`;

        // Check if Link is imported
        if (!content.includes("import") || !content.includes("Link")) {
            // Need to add import - skip for safety
            skippedCount++;
            return false;
        }

        // Insert the link
        const newContent = insertLink(content, insertPoint.lineIndex, insertPoint.position, ` Learn more about ${linkHtml}.`);

        if (DRY_RUN) {
            console.log(`  [DRY RUN] Would modify: ${path.relative(ROOT, filePath)}`);
        } else {
            fs.writeFileSync(filePath, newContent);
            console.log(`  ✅ Modified: ${path.relative(ROOT, filePath)}`);
        }

        modifiedCount++;
        return true;

    } catch (err) {
        console.error(`  ❌ Error processing ${filePath}: ${err.message}`);
        return false;
    }
}

/**
 * Main execution
 */
async function main() {
    console.log("🔗 RockSEO Automatic Link Inserter");
    console.log("=".repeat(50));

    if (DRY_RUN) {
        console.log("⚠️  DRY RUN MODE - No files will be modified\n");
    }

    // Load report
    if (!fs.existsSync(REPORT_PATH)) {
        console.error("❌ Report not found. Run internal-links.mjs first.");
        process.exit(1);
    }

    const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));

    console.log(`\n📊 Report loaded: ${report.linkSuggestions.length} suggestions`);

    // Process high priority suggestions
    const highPriority = report.linkSuggestions.filter(s => s.priority === "high");
    console.log(`🎯 High priority suggestions: ${highPriority.length}\n`);

    // Group by cluster
    const byCluster = {};
    for (const suggestion of highPriority) {
        // Find which cluster this belongs to
        for (const [cluster, hubData] of Object.entries(HUB_LINKS)) {
            if (suggestion.to === hubData.hubPath) {
                if (!byCluster[cluster]) byCluster[cluster] = [];
                byCluster[cluster].push(suggestion);
                break;
            }
        }
    }

    // Process each cluster
    for (const [cluster, suggestions] of Object.entries(byCluster)) {
        console.log(`\n📁 Cluster: ${cluster} (${suggestions.length} pages)`);

        const hubData = HUB_LINKS[cluster];
        let clusterModified = 0;

        for (const suggestion of suggestions.slice(0, 20)) { // Limit per cluster
            const filePath = suggestion.from.startsWith("/")
                ? path.join(ROOT, "app/[locale]", suggestion.from, "page.tsx")
                : path.join(ROOT, suggestion.from);

            if (fs.existsSync(filePath)) {
                if (processFile(filePath, cluster, hubData)) {
                    clusterModified++;
                }
            }
        }

        console.log(`   Modified: ${clusterModified} files`);
    }

    // Summary
    console.log("\n" + "=".repeat(50));
    console.log("📈 SUMMARY\n");
    console.log(`   Files modified: ${modifiedCount}`);
    console.log(`   Files skipped: ${skippedCount}`);

    if (DRY_RUN) {
        console.log("\n💡 Run without --dry-run to apply changes");
    } else {
        console.log("\n✅ Link insertion complete!");
        console.log("🔄 Run 'npm run build' to verify changes");
    }
}

main().catch(console.error);
