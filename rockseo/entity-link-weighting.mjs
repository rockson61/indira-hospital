#!/usr/bin/env node
/**
 * RockSEO Script 4 — Entity-Level Internal Link Weighting
 * 
 * Purpose:
 * - Builds entity graph across all pages
 * - Assigns link priority based on entity overlap
 * - Prevents random internal links
 * - Strengthens hub authority through semantic relationships
 * 
 * This is better than simple hub-spoke linking.
 * 
 * Usage: node rockseo/entity-link-weighting.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");

const CONFIG = {
    appDir: path.join(ROOT, "app/[locale]"),
    contentDirs: [
        "components/healthcare/services",
        "components/condition",
        "lib"
    ],
    extensions: [".tsx", ".ts"],
    outputReport: path.join(__dirname, "reports/entity-graph-report.json"),

    // Core dental entities for the clinic
    coreEntities: {
        // People
        "Dr. Rockson Samuel": { type: "person", weight: 10 },
        "dentist": { type: "role", weight: 5 },

        // Places
        "Indira Dental Clinic": { type: "organization", weight: 10 },
        "Vellore": { type: "location", weight: 8 },
        "Gandhi Nagar": { type: "location", weight: 5 },
        "Katpadi": { type: "location", weight: 5 },
        "Tamil Nadu": { type: "location", weight: 5 },

        // Treatments (high weight)
        "dental implants": { type: "treatment", weight: 9 },
        "implant": { type: "treatment", weight: 9 },
        "root canal": { type: "treatment", weight: 9 },
        "RCT": { type: "treatment", weight: 9 },
        "orthodontics": { type: "treatment", weight: 8 },
        "braces": { type: "treatment", weight: 8 },
        "invisalign": { type: "treatment", weight: 8 },
        "teeth whitening": { type: "treatment", weight: 7 },
        "dental crowns": { type: "treatment", weight: 7 },
        "veneers": { type: "treatment", weight: 7 },
        "gum treatment": { type: "treatment", weight: 8 },
        "tooth extraction": { type: "treatment", weight: 7 },

        // Conditions
        "toothache": { type: "condition", weight: 6 },
        "cavity": { type: "condition", weight: 6 },
        "gum disease": { type: "condition", weight: 6 },
        "gingivitis": { type: "condition", weight: 6 },
        "periodontitis": { type: "condition", weight: 6 },
        "bleeding gums": { type: "condition", weight: 6 },
        "sensitive teeth": { type: "condition", weight: 5 },
        "bad breath": { type: "condition", weight: 5 },

        // Features
        "CBCT": { type: "technology", weight: 7 },
        "digital X-ray": { type: "technology", weight: 6 },
        "laser": { type: "technology", weight: 7 },

        // Price signals
        "EMI": { type: "financial", weight: 5 },
        "Bajaj Finserv": { type: "financial", weight: 4 },
        "HDFC": { type: "financial", weight: 4 },
        "ICICI": { type: "financial", weight: 4 }
    }
};

const results = {
    timestamp: new Date().toISOString(),
    pagesAnalyzed: 0,
    entityGraph: {},
    pageEntities: {},
    linkRecommendations: [],
    hubPages: [],
    entityDistribution: {}
};

/**
 * Extract entities from content
 */
function extractEntities(content) {
    const contentLower = content.toLowerCase();
    const foundEntities = [];

    // Check for core entities
    for (const [entity, data] of Object.entries(CONFIG.coreEntities)) {
        const entityLower = entity.toLowerCase();
        if (contentLower.includes(entityLower)) {
            // Count occurrences
            const regex = new RegExp(entityLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
            const matches = content.match(regex) || [];

            foundEntities.push({
                entity,
                type: data.type,
                weight: data.weight,
                occurrences: matches.length
            });
        }
    }

    // Also extract bold text as potential entities
    const boldMatches = content.match(/\*\*([^*]+)\*\*/g) || [];
    for (const match of boldMatches) {
        const text = match.replace(/\*\*/g, "").trim();
        if (text.length > 3 && text.length < 50) {
            const existing = foundEntities.find(e =>
                e.entity.toLowerCase() === text.toLowerCase()
            );
            if (!existing) {
                foundEntities.push({
                    entity: text,
                    type: "highlighted",
                    weight: 3,
                    occurrences: 1
                });
            }
        }
    }

    return foundEntities;
}

/**
 * Calculate entity overlap score between two pages
 */
function calculateEntityOverlap(entities1, entities2) {
    let score = 0;
    const sharedEntities = [];

    for (const e1 of entities1) {
        for (const e2 of entities2) {
            if (e1.entity.toLowerCase() === e2.entity.toLowerCase()) {
                // Weight by entity importance and occurrence
                const entityScore = e1.weight * Math.min(e1.occurrences, 3);
                score += entityScore;
                sharedEntities.push(e1.entity);
            }
        }
    }

    return { score, sharedEntities };
}

/**
 * Get slug from file path
 */
function getSlug(filePath) {
    return filePath
        .replace(CONFIG.appDir, "")
        .replace("/page.tsx", "")
        .replace("/page.ts", "")
        .replace(ROOT + "/", "");
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
            if (!f.startsWith(".") && f !== "node_modules") {
                getPages(full, list);
            }
        } else if (CONFIG.extensions.includes(path.extname(f))) {
            list.push(full);
        }
    }
    return list;
}

/**
 * Main execution
 */
async function main() {
    console.log("🕸️ RockSEO Entity-Level Internal Link Weighting");
    console.log("=".repeat(55));
    console.log("\nBuilding entity graph for semantic link recommendations\n");

    // Collect all files
    const allFiles = [];
    allFiles.push(...getPages(CONFIG.appDir));
    for (const dir of CONFIG.contentDirs) {
        allFiles.push(...getPages(path.join(ROOT, dir)));
    }

    console.log(`📁 Files scanned: ${allFiles.length}`);

    // Extract entities from each file
    const pages = [];
    for (const file of allFiles) {
        try {
            const content = fs.readFileSync(file, "utf8");
            const entities = extractEntities(content);

            if (entities.length > 0) {
                const slug = getSlug(file);
                pages.push({
                    file,
                    slug,
                    entities,
                    entityCount: entities.length,
                    totalWeight: entities.reduce((sum, e) => sum + e.weight * e.occurrences, 0)
                });

                results.pageEntities[slug] = entities.map(e => e.entity);

                // Track entity distribution
                for (const e of entities) {
                    if (!results.entityDistribution[e.entity]) {
                        results.entityDistribution[e.entity] = { count: 0, pages: [] };
                    }
                    results.entityDistribution[e.entity].count++;
                    results.entityDistribution[e.entity].pages.push(slug);
                }
            }
        } catch (err) {
            // Skip files that can't be read
        }
    }

    results.pagesAnalyzed = pages.length;
    console.log(`📊 Pages with entities: ${pages.length}\n`);

    // Identify hub pages (high entity weight)
    const sortedByWeight = [...pages].sort((a, b) => b.totalWeight - a.totalWeight);
    results.hubPages = sortedByWeight.slice(0, 20).map(p => ({
        slug: p.slug,
        weight: p.totalWeight,
        entityCount: p.entityCount
    }));

    console.log("🏛️ Top Hub Pages (by entity weight):");
    for (const hub of results.hubPages.slice(0, 10)) {
        console.log(`   ${hub.slug} (weight: ${hub.weight}, entities: ${hub.entityCount})`);
    }

    // Calculate entity overlap between all page pairs
    console.log("\n🔄 Calculating entity relationships...");

    const linkScores = [];
    for (let i = 0; i < pages.length; i++) {
        for (let j = i + 1; j < pages.length; j++) {
            const overlap = calculateEntityOverlap(pages[i].entities, pages[j].entities);

            if (overlap.score >= 10 && overlap.sharedEntities.length >= 2) {
                linkScores.push({
                    from: pages[i].slug,
                    to: pages[j].slug,
                    score: overlap.score,
                    sharedEntities: overlap.sharedEntities
                });
            }
        }
    }

    // Sort by score and generate recommendations
    linkScores.sort((a, b) => b.score - a.score);

    // Build link recommendations (top links for each page)
    const pageLinks = {};
    for (const link of linkScores) {
        // Add to 'from' page
        if (!pageLinks[link.from]) pageLinks[link.from] = [];
        if (pageLinks[link.from].length < 5) {
            pageLinks[link.from].push({
                target: link.to,
                score: link.score,
                entities: link.sharedEntities.slice(0, 3)
            });
        }

        // Add to 'to' page (bidirectional)
        if (!pageLinks[link.to]) pageLinks[link.to] = [];
        if (pageLinks[link.to].length < 5) {
            pageLinks[link.to].push({
                target: link.from,
                score: link.score,
                entities: link.sharedEntities.slice(0, 3)
            });
        }
    }

    results.linkRecommendations = Object.entries(pageLinks).map(([page, links]) => ({
        page,
        recommendedLinks: links
    }));

    // Build entity graph for visualization
    const topEntities = Object.entries(results.entityDistribution)
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 30);

    console.log("\n📊 Top Entities Across Site:");
    for (const [entity, data] of topEntities.slice(0, 15)) {
        console.log(`   ${entity}: ${data.count} pages`);
    }

    // Save report
    const reportDir = path.dirname(CONFIG.outputReport);
    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
    }

    fs.writeFileSync(CONFIG.outputReport, JSON.stringify(results, null, 2));

    // Summary
    console.log("\n" + "=".repeat(55));
    console.log("📈 ENTITY GRAPH SUMMARY\n");
    console.log(`   Pages analyzed: ${results.pagesAnalyzed}`);
    console.log(`   Unique entities: ${Object.keys(results.entityDistribution).length}`);
    console.log(`   Link recommendations: ${results.linkRecommendations.length} pages`);
    console.log(`   Total relationship pairs: ${linkScores.length}`);

    console.log(`\n💾 Report saved: ${CONFIG.outputReport}`);

    console.log("\n✅ Entity graph complete. Use for semantic link building.");
}

main().catch(console.error);
