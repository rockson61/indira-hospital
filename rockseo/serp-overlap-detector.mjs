#!/usr/bin/env node
/**
 * RockSEO Script 3 — SERP Overlap & Cannibalization Detector
 * 
 * Purpose:
 * - Detects multiple pages answering the same search intent
 * - Flags pages that need merge/delete/differentiation
 * - Prevents ranking dilution from cannibalization
 * 
 * CRITICAL: Run this FIRST before any other optimization
 * 
 * Usage: node rockseo/serp-overlap-detector.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");

const CONFIG = {
    appDir: path.join(ROOT, "src/app"),
    blogDir: path.join(ROOT, "src/app/blog"),
    extensions: [".tsx", ".ts", ".mdx", ".md"],
    outputReport: path.join(__dirname, "reports/serp-overlap-report.json"),
    outputText: path.join(__dirname, "reports/serp-overlap.txt"),

    // Similarity thresholds
    highSimilarity: 0.7,   // Definite cannibalization
    mediumSimilarity: 0.5, // Potential overlap

    // Topic keywords for dental site
    topicKeywords: {
        "root-canal": ["root canal", "rct", "endodontic", "pulp", "tooth infection"],
        "dental-implants": ["implant", "implants", "all-on-4", "all-on-6", "titanium", "osseointegration"],
        "orthodontics": ["braces", "invisalign", "aligners", "orthodontic", "teeth straightening"],
        "gum-disease": ["gum disease", "gingivitis", "periodontitis", "bleeding gums", "gum treatment"],
        "teeth-whitening": ["whitening", "bleaching", "yellow teeth", "stained teeth"],
        "dental-crowns": ["crown", "crowns", "cap", "zirconia", "ceramic crown"],
        "tooth-extraction": ["extraction", "wisdom tooth", "remove tooth", "pulled tooth"],
        "dental-fillings": ["filling", "fillings", "cavity", "cavities", "decay"],
        "cosmetic-dentistry": ["veneer", "veneers", "smile makeover", "cosmetic"],
        "emergency-dentistry": ["emergency", "pain", "urgent", "toothache", "broken tooth"]
    }
};

const results = {
    timestamp: new Date().toISOString(),
    pagesAnalyzed: 0,
    highOverlaps: [],
    mediumOverlaps: [],
    topicClusters: {},
    recommendations: []
};

/**
 * Extract page content and metadata
 */
function extractPageData(filePath) {
    try {
        const content = fs.readFileSync(filePath, "utf8");
        const contentLower = content.toLowerCase();

        // Extract title
        let title = null;
        const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
        if (titleMatch) title = titleMatch[1];

        // Extract h1
        const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
        const heading = h1Match ? h1Match[1].trim() : null;

        // Extract first paragraph (intro)
        const introMatch = content.match(/<p[^>]*>([^<]{50,300})/);
        const intro = introMatch ? introMatch[1].trim() : "";

        // Extract all text content (simplified)
        const textContent = content
            .replace(/<[^>]+>/g, " ")
            .replace(/\s+/g, " ")
            .toLowerCase()
            .slice(0, 2000);

        // Determine topic
        let topic = null;
        let topicScore = 0;
        for (const [topicName, keywords] of Object.entries(CONFIG.topicKeywords)) {
            const score = keywords.filter(k => contentLower.includes(k)).length;
            if (score > topicScore) {
                topicScore = score;
                topic = topicName;
            }
        }

        // Get slug from path
        const slug = filePath
            .replace(CONFIG.appDir, "")
            .replace("/page.tsx", "")
            .replace("/page.ts", "");

        return {
            file: filePath,
            slug,
            title,
            heading,
            intro,
            textContent,
            topic,
            topicScore
        };
    } catch (err) {
        return null;
    }
}

/**
 * Calculate similarity between two pages
 */
function calculateSimilarity(page1, page2) {
    // Check title similarity
    const titleSim = stringOverlap(page1.title || "", page2.title || "");

    // Check heading similarity
    const headingSim = stringOverlap(page1.heading || "", page2.heading || "");

    // Check intro similarity
    const introSim = stringOverlap(page1.intro, page2.intro);

    // Check content similarity (word overlap)
    const contentSim = wordOverlap(page1.textContent, page2.textContent);

    // Check topic match
    const topicMatch = page1.topic && page1.topic === page2.topic ? 0.2 : 0;

    // Weighted score
    const similarity = (
        titleSim * 0.3 +
        headingSim * 0.25 +
        introSim * 0.2 +
        contentSim * 0.15 +
        topicMatch
    );

    return {
        overall: similarity,
        title: titleSim,
        heading: headingSim,
        intro: introSim,
        content: contentSim,
        sameTopic: page1.topic === page2.topic
    };
}

/**
 * String overlap calculation
 */
function stringOverlap(str1, str2) {
    if (!str1 || !str2) return 0;

    const words1 = str1.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    const words2 = str2.toLowerCase().split(/\s+/).filter(w => w.length > 3);

    if (words1.length === 0 || words2.length === 0) return 0;

    const overlap = words1.filter(w => words2.includes(w)).length;
    return overlap / Math.max(words1.length, words2.length);
}

/**
 * Word overlap for content
 */
function wordOverlap(text1, text2) {
    const words1 = new Set(text1.split(/\s+/).filter(w => w.length > 4));
    const words2 = new Set(text2.split(/\s+/).filter(w => w.length > 4));

    if (words1.size === 0 || words2.size === 0) return 0;

    let overlap = 0;
    for (const word of words1) {
        if (words2.has(word)) overlap++;
    }

    return overlap / Math.max(words1.size, words2.size);
}

/**
 * Recursively get all page files
 */
function getPages(dir, list = []) {
    if (!fs.existsSync(dir)) return list;

    for (const f of fs.readdirSync(dir)) {
        const full = path.join(dir, f);
        const stat = fs.statSync(full);

        if (stat.isDirectory()) {
            if (!f.startsWith(".") && !f.startsWith("[") && f !== "node_modules") {
                getPages(full, list);
            }
        } else if (f === "page.tsx" || f === "page.ts") {
            list.push(full);
        }
    }
    return list;
}

/**
 * Generate recommendation based on overlap type
 */
function generateRecommendation(page1, page2, similarity) {
    if (similarity.overall >= CONFIG.highSimilarity) {
        if (similarity.title > 0.8) {
            return {
                action: "MERGE",
                reason: "Near-identical titles - combine into single comprehensive page",
                priority: "high"
            };
        } else if (similarity.sameTopic) {
            return {
                action: "DIFFERENTIATE",
                reason: "Same topic, high content overlap - add unique angles",
                priority: "high"
            };
        } else {
            return {
                action: "REVIEW",
                reason: "High similarity but different topics - verify intent",
                priority: "medium"
            };
        }
    } else {
        return {
            action: "MONITOR",
            reason: "Moderate overlap - ensure distinct value propositions",
            priority: "low"
        };
    }
}

/**
 * Main execution
 */
async function main() {
    console.log("🔍 RockSEO SERP Overlap & Cannibalization Detector");
    console.log("=".repeat(55));
    console.log("\nThis is STEP 1 - Run before any other optimization\n");

    // Get all pages
    const pageFiles = getPages(CONFIG.appDir);
    console.log(`📁 Pages found: ${pageFiles.length}`);

    // Extract data from all pages
    const pages = [];
    for (const file of pageFiles) {
        const data = extractPageData(file);
        if (data) {
            pages.push(data);
        }
    }

    results.pagesAnalyzed = pages.length;
    console.log(`📊 Pages analyzed: ${pages.length}\n`);

    // Group by topic
    for (const page of pages) {
        if (page.topic) {
            if (!results.topicClusters[page.topic]) {
                results.topicClusters[page.topic] = [];
            }
            results.topicClusters[page.topic].push(page.slug);
        }
    }

    // Compare all pairs
    console.log("🔄 Analyzing page pairs for overlap...\n");

    for (let i = 0; i < pages.length; i++) {
        for (let j = i + 1; j < pages.length; j++) {
            const similarity = calculateSimilarity(pages[i], pages[j]);

            if (similarity.overall >= CONFIG.mediumSimilarity) {
                const recommendation = generateRecommendation(pages[i], pages[j], similarity);

                const overlap = {
                    page1: pages[i].slug,
                    page2: pages[j].slug,
                    title1: pages[i].title,
                    title2: pages[j].title,
                    topic: pages[i].topic || pages[j].topic,
                    similarity: Math.round(similarity.overall * 100),
                    ...recommendation
                };

                if (similarity.overall >= CONFIG.highSimilarity) {
                    results.highOverlaps.push(overlap);
                } else {
                    results.mediumOverlaps.push(overlap);
                }
            }
        }
    }

    // Generate text report
    let textReport = `SERP OVERLAP REPORT - ${new Date().toISOString()}\n`;
    textReport += "=".repeat(50) + "\n\n";

    textReport += `Pages Analyzed: ${results.pagesAnalyzed}\n`;
    textReport += `High Overlaps: ${results.highOverlaps.length}\n`;
    textReport += `Medium Overlaps: ${results.mediumOverlaps.length}\n\n`;

    if (results.highOverlaps.length > 0) {
        textReport += "⚠️ HIGH PRIORITY OVERLAPS (Cannibalization Risk)\n";
        textReport += "-".repeat(50) + "\n\n";

        for (const o of results.highOverlaps) {
            textReport += `${o.page1} ↔ ${o.page2}\n`;
            textReport += `  Similarity: ${o.similarity}% | Topic: ${o.topic}\n`;
            textReport += `  Action: ${o.action} - ${o.reason}\n\n`;
        }
    }

    if (results.mediumOverlaps.length > 0) {
        textReport += "\n⚡ MEDIUM PRIORITY OVERLAPS\n";
        textReport += "-".repeat(50) + "\n\n";

        for (const o of results.mediumOverlaps.slice(0, 20)) {
            textReport += `${o.page1} ↔ ${o.page2} (${o.similarity}%)\n`;
        }
        if (results.mediumOverlaps.length > 20) {
            textReport += `... and ${results.mediumOverlaps.length - 20} more\n`;
        }
    }

    // Save reports
    const reportDir = path.dirname(CONFIG.outputReport);
    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
    }

    fs.writeFileSync(CONFIG.outputReport, JSON.stringify(results, null, 2));
    fs.writeFileSync(CONFIG.outputText, textReport);

    // Summary
    console.log("=".repeat(55));
    console.log("📈 OVERLAP ANALYSIS SUMMARY\n");

    console.log(`🚨 High Priority Overlaps: ${results.highOverlaps.length}`);
    for (const o of results.highOverlaps.slice(0, 5)) {
        console.log(`   ${o.action}: ${o.page1} ↔ ${o.page2} (${o.similarity}%)`);
    }

    console.log(`\n⚡ Medium Priority Overlaps: ${results.mediumOverlaps.length}`);

    console.log("\n📊 Topic Clusters:");
    for (const [topic, pages] of Object.entries(results.topicClusters)) {
        console.log(`   ${topic}: ${pages.length} pages`);
    }

    console.log(`\n💾 Reports saved:`);
    console.log(`   ${CONFIG.outputReport}`);
    console.log(`   ${CONFIG.outputText}`);

    if (results.highOverlaps.length > 0) {
        console.log("\n⚠️ ACTION REQUIRED: Review high-priority overlaps before continuing!");
    } else {
        console.log("\n✅ No critical cannibalization detected. Safe to proceed.");
    }
}

main().catch(console.error);
