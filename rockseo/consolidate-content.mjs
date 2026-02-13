#!/usr/bin/env node
/**
 * RockSEO Script 6 — Content Consolidation Helper
 * 
 * Purpose:
 * - Reads SERP overlap report
 * - Groups overlapping pages by topic
 * - Recommends merge/delete/differentiate actions
 * - Generates consolidated content structure
 * 
 * Usage: node rockseo/consolidate-content.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");

const CONFIG = {
    overlapReport: path.join(__dirname, "reports/serp-overlap-report.json"),
    outputReport: path.join(__dirname, "reports/consolidation-plan.json"),
    outputText: path.join(__dirname, "reports/consolidation-plan.txt"),

    // Similarity threshold for grouping
    groupThreshold: 70,

    // Priority topics (keep the canonical page)
    canonicalPaths: {
        "gum": "/services/gum-treatment",
        "implant": "/services/dental-implants",
        "root canal": "/services/root-canal-treatment",
        "orthodontic": "/services/orthodontics",
        "braces": "/services/orthodontics",
        "whitening": "/services/cosmetic-dentistry/teeth-whitening",
        "crown": "/services/restorative-dentistry/dental-crowns",
        "extraction": "/services/oral-surgery/tooth-extraction",
        "emergency": "/services/emergency-dentistry",
        "filling": "/services/restorative-dentistry/dental-fillings"
    }
};

const results = {
    timestamp: new Date().toISOString(),
    totalOverlaps: 0,
    groupsIdentified: 0,
    mergeRecommendations: [],
    deleteRecommendations: [],
    differentiateRecommendations: [],
    consolidationGroups: []
};

/**
 * Group overlapping pages by similarity
 */
function groupOverlaps(overlaps) {
    const groups = new Map();

    for (const overlap of overlaps) {
        // Create a group key based on the pages
        const key1 = overlap.page1;
        const key2 = overlap.page2;

        // Find existing group or create new
        let foundGroup = null;
        for (const [groupId, group] of groups) {
            if (group.pages.has(key1) || group.pages.has(key2)) {
                foundGroup = groupId;
                break;
            }
        }

        if (foundGroup) {
            groups.get(foundGroup).pages.add(key1);
            groups.get(foundGroup).pages.add(key2);
            groups.get(foundGroup).overlaps.push(overlap);
        } else {
            const groupId = `group-${groups.size + 1}`;
            groups.set(groupId, {
                pages: new Set([key1, key2]),
                overlaps: [overlap],
                topic: overlap.topic,
                maxSimilarity: overlap.similarity
            });
        }
    }

    // Convert to array and sort by size
    return Array.from(groups.values())
        .map(g => ({
            ...g,
            pages: Array.from(g.pages),
            pageCount: g.pages.size
        }))
        .sort((a, b) => b.pageCount - a.pageCount);
}

/**
 * Determine canonical page for a group
 */
function findCanonicalPage(pages, topic) {
    // Check if any page is a service/condition page (not blog)
    const servicePage = pages.find(p =>
        p.startsWith("/services/") || p.startsWith("/conditions/")
    );
    if (servicePage) return servicePage;

    // Check canonical paths
    for (const [keyword, canonical] of Object.entries(CONFIG.canonicalPaths)) {
        if (topic && topic.includes(keyword)) {
            const match = pages.find(p => p === canonical);
            if (match) return match;
        }
    }

    // Prefer shorter slugs (more general)
    const sorted = [...pages].sort((a, b) => a.length - b.length);
    return sorted[0];
}

/**
 * Generate action recommendation
 */
function generateRecommendation(group) {
    const { pages, topic, maxSimilarity, pageCount } = group;

    const canonical = findCanonicalPage(pages, topic);
    const others = pages.filter(p => p !== canonical);

    // Determine action based on similarity and page types
    let action = "DIFFERENTIATE";
    let reason = "";

    if (maxSimilarity >= 85) {
        // Very high similarity - likely duplicates
        const allBlogs = pages.every(p => p.startsWith("/blog/"));
        if (allBlogs) {
            action = "MERGE";
            reason = `${pageCount} blog posts cover same topic. Merge into comprehensive guide.`;
        } else {
            action = "REDIRECT";
            reason = `High overlap (${maxSimilarity}%). Redirect weaker pages to ${canonical}`;
        }
    } else if (maxSimilarity >= 70) {
        action = "DIFFERENTIATE";
        reason = `Moderate overlap (${maxSimilarity}%). Add unique angles to each page.`;
    } else {
        action = "MONITOR";
        reason = `Lower overlap (${maxSimilarity}%). Monitor for ranking competition.`;
    }

    return {
        action,
        reason,
        canonical,
        pagesToConsolidate: others,
        totalPages: pageCount,
        topic,
        similarity: maxSimilarity
    };
}

/**
 * Main execution
 */
async function main() {
    console.log("📋 RockSEO Content Consolidation Helper");
    console.log("=".repeat(55));

    // Load overlap report
    if (!fs.existsSync(CONFIG.overlapReport)) {
        console.error("❌ Overlap report not found. Run serp-overlap-detector.mjs first.");
        process.exit(1);
    }

    const report = JSON.parse(fs.readFileSync(CONFIG.overlapReport, "utf8"));

    console.log(`\n📊 Loaded overlap report:`);
    console.log(`   High overlaps: ${report.highOverlaps.length}`);
    console.log(`   Medium overlaps: ${report.mediumOverlaps.length}`);

    results.totalOverlaps = report.highOverlaps.length + report.mediumOverlaps.length;

    // Group high-priority overlaps
    console.log("\n🔄 Grouping overlapping pages...");

    const highGroups = groupOverlaps(report.highOverlaps);

    console.log(`   Groups identified: ${highGroups.length}`);
    results.groupsIdentified = highGroups.length;

    // Generate recommendations for top groups
    console.log("\n📝 Generating consolidation recommendations...\n");

    const topGroups = highGroups.slice(0, 50); // Focus on top 50 groups

    for (const group of topGroups) {
        const recommendation = generateRecommendation(group);

        results.consolidationGroups.push({
            ...recommendation,
            allPages: group.pages
        });

        // Categorize
        if (recommendation.action === "MERGE") {
            results.mergeRecommendations.push(recommendation);
        } else if (recommendation.action === "REDIRECT") {
            results.deleteRecommendations.push(recommendation);
        } else {
            results.differentiateRecommendations.push(recommendation);
        }
    }

    // Generate text report
    let textReport = `CONTENT CONSOLIDATION PLAN\n`;
    textReport += `Generated: ${new Date().toISOString()}\n`;
    textReport += "=".repeat(60) + "\n\n";

    textReport += `SUMMARY\n`;
    textReport += `-`.repeat(40) + "\n";
    textReport += `Total overlaps analyzed: ${results.totalOverlaps}\n`;
    textReport += `Groups identified: ${results.groupsIdentified}\n`;
    textReport += `Merge recommendations: ${results.mergeRecommendations.length}\n`;
    textReport += `Redirect recommendations: ${results.deleteRecommendations.length}\n`;
    textReport += `Differentiate recommendations: ${results.differentiateRecommendations.length}\n\n`;

    // Merge recommendations
    if (results.mergeRecommendations.length > 0) {
        textReport += `\n🔀 MERGE THESE PAGES\n`;
        textReport += `(Combine into single comprehensive guide)\n`;
        textReport += "-".repeat(40) + "\n\n";

        for (const rec of results.mergeRecommendations.slice(0, 20)) {
            textReport += `Topic: ${rec.topic || "Mixed"}\n`;
            textReport += `Canonical: ${rec.canonical}\n`;
            textReport += `Merge from: ${rec.pagesToConsolidate.slice(0, 5).join(", ")}\n`;
            if (rec.pagesToConsolidate.length > 5) {
                textReport += `           ... and ${rec.pagesToConsolidate.length - 5} more\n`;
            }
            textReport += `Reason: ${rec.reason}\n\n`;
        }
    }

    // Redirect recommendations
    if (results.deleteRecommendations.length > 0) {
        textReport += `\n🔄 REDIRECT THESE PAGES\n`;
        textReport += `(301 redirect to canonical page)\n`;
        textReport += "-".repeat(40) + "\n\n";

        for (const rec of results.deleteRecommendations.slice(0, 10)) {
            textReport += `Redirect TO: ${rec.canonical}\n`;
            textReport += `Redirect FROM:\n`;
            for (const page of rec.pagesToConsolidate.slice(0, 5)) {
                textReport += `  - ${page}\n`;
            }
            textReport += `Reason: ${rec.reason}\n\n`;
        }
    }

    // Differentiate recommendations
    textReport += `\n✏️ DIFFERENTIATE THESE PAGES\n`;
    textReport += `(Add unique value to each)\n`;
    textReport += "-".repeat(40) + "\n\n";

    for (const rec of results.differentiateRecommendations.slice(0, 10)) {
        textReport += `Topic: ${rec.topic || "Mixed"} (${rec.similarity}% similar)\n`;
        textReport += `Pages:\n`;
        for (const page of rec.allPages?.slice(0, 5) || []) {
            textReport += `  - ${page}\n`;
        }
        textReport += `Action: ${rec.reason}\n\n`;
    }

    // Save reports
    fs.writeFileSync(CONFIG.outputReport, JSON.stringify(results, null, 2));
    fs.writeFileSync(CONFIG.outputText, textReport);

    // Console summary
    console.log("=".repeat(55));
    console.log("📈 CONSOLIDATION SUMMARY\n");

    console.log(`🔀 MERGE: ${results.mergeRecommendations.length} groups`);
    for (const rec of results.mergeRecommendations.slice(0, 5)) {
        console.log(`   ${rec.canonical} ← ${rec.totalPages} pages`);
    }

    console.log(`\n🔄 REDIRECT: ${results.deleteRecommendations.length} groups`);
    for (const rec of results.deleteRecommendations.slice(0, 3)) {
        console.log(`   ${rec.canonical} ← ${rec.pagesToConsolidate.length} pages`);
    }

    console.log(`\n✏️ DIFFERENTIATE: ${results.differentiateRecommendations.length} groups`);

    console.log(`\n💾 Reports saved:`);
    console.log(`   ${CONFIG.outputReport}`);
    console.log(`   ${CONFIG.outputText}`);

    console.log("\n⚠️ NEXT STEPS:");
    console.log("   1. Review consolidation-plan.txt");
    console.log("   2. Manually merge/redirect pages as recommended");
    console.log("   3. Re-run overlap detector to verify");
}

main().catch(console.error);
