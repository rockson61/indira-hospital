#!/usr/bin/env node
/**
 * RockSEO Script 2 — Internal Linking & Topical Graph Optimizer
 * 
 * Purpose:
 * - Fixes orphan pages
 * - Strengthens topical authority
 * - Optimizes anchor text
 * - Builds proper hub ↔ spoke structure
 * 
 * Usage: node rockseo/internal-links.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");

// Configuration
const CONFIG = {
    appDir: path.join(ROOT, "app"),
    contentDirs: [
        "components/healthcare/services",
        "components/condition",
        "components/location",
        "components/seo",
        "components/marketing"
    ],
    extensions: [".tsx", ".ts", ".mdx", ".md"],
    outputReport: path.join(__dirname, "reports/internal-links-report.json"),

    // Topical clusters for dental clinic
    clusters: {
        "dental-implants": {
            hub: "/services/dental-implants",
            topics: ["implant", "all-on-4", "all-on-6", "bone graft", "sinus lift", "missing teeth", "titanium", "zirconia", "osseointegration"],
            relatedConditions: ["missing-teeth", "bone-loss", "loose-dentures"],
            relatedServices: ["bone-grafting", "full-mouth-rehabilitation"]
        },
        "root-canal": {
            hub: "/services/root-canal-treatment",
            topics: ["root canal", "rct", "endodontic", "pulp", "abscess", "tooth infection", "single sitting", "laser rct"],
            relatedConditions: ["toothache", "abscessed-tooth", "sensitive-teeth"],
            relatedServices: ["dental-crowns", "emergency-dentistry"]
        },
        "orthodontics": {
            hub: "/services/orthodontics",
            topics: ["braces", "invisalign", "aligners", "teeth straightening", "malocclusion", "crooked teeth", "overbite", "underbite"],
            relatedConditions: ["malocclusion", "crooked-teeth"],
            relatedServices: ["cosmetic-dentistry", "smile-makeover"]
        },
        "cosmetic-dentistry": {
            hub: "/services/cosmetic-dentistry",
            topics: ["veneers", "teeth whitening", "smile makeover", "bonding", "cosmetic", "aesthetic"],
            relatedConditions: ["discolored-teeth", "chipped-teeth"],
            relatedServices: ["dental-veneers", "teeth-whitening", "orthodontics"]
        },
        "gum-treatment": {
            hub: "/services/gum-treatment",
            topics: ["gum disease", "gingivitis", "periodontitis", "bleeding gums", "gum recession", "scaling", "root planing"],
            relatedConditions: ["bleeding-gums", "gum-disease", "gum-recession", "bad-breath"],
            relatedServices: ["teeth-cleaning", "laser-dentistry"]
        },
        "preventive-dentistry": {
            hub: "/services/preventive-dentistry",
            topics: ["cleaning", "checkup", "fluoride", "sealant", "prevention", "oral hygiene"],
            relatedConditions: ["cavities", "bad-breath"],
            relatedServices: ["teeth-cleaning", "dental-exam"]
        },
        "emergency-dentistry": {
            hub: "/services/emergency-dentistry",
            topics: ["emergency", "urgent", "same-day", "pain", "swelling", "knocked out", "broken tooth"],
            relatedConditions: ["toothache", "abscessed-tooth", "cracked-teeth", "broken-jaw"],
            relatedServices: ["root-canal-treatment", "tooth-extraction"]
        }
    },

    // Entity definitions
    entities: {
        clinic: "Indira Dental Clinic",
        doctor: "Dr. Rockson Samuel",
        location: "Vellore",
        phone: "+91-7010650063"
    }
};

// Results storage
const results = {
    timestamp: new Date().toISOString(),
    pagesScanned: 0,
    linksFound: [],
    orphanPages: [],
    hubPages: [],
    spokePages: [],
    linkSuggestions: [],
    clusterAnalysis: {}
};

/**
 * Recursively get all files with specified extensions
 */
function getFiles(dir, list = []) {
    if (!fs.existsSync(dir)) return list;

    for (const f of fs.readdirSync(dir)) {
        const full = path.join(dir, f);
        const stat = fs.statSync(full);

        if (stat.isDirectory()) {
            // Skip node_modules and hidden directories
            if (!f.startsWith(".") && f !== "node_modules") {
                getFiles(full, list);
            }
        } else if (CONFIG.extensions.includes(path.extname(f))) {
            list.push(full);
        }
    }
    return list;
}

/**
 * Extract page metadata from file content
 */
function extractPageData(filePath, content) {
    const data = {
        file: filePath,
        relativePath: path.relative(ROOT, filePath),
        slug: null,
        title: null,
        topics: [],
        internalLinks: [],
        externalLinks: [],
        anchors: [],
        cluster: null,
        isHub: false,
        isOrphan: false
    };

    // Extract slug from file path
    const pathMatch = filePath.match(/app\/\[locale\]\/(.+?)\/page\.tsx$/);
    if (pathMatch) {
        data.slug = "/" + pathMatch[1];
    }

    // Extract title from metadata or h1
    const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
    if (titleMatch) {
        data.title = titleMatch[1];
    } else {
        const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
        if (h1Match) {
            data.title = h1Match[1].trim();
        }
    }

    // Extract internal links
    const linkPatterns = [
        /href=["'`](\/[^"'`]+)["'`]/g,  // Standard href
        /<Link\s+href=["'`](\/[^"'`]+)["'`]/g,  // Next.js Link
    ];

    for (const pattern of linkPatterns) {
        let match;
        while ((match = pattern.exec(content)) !== null) {
            const link = match[1];
            if (!link.startsWith("/#") && !data.internalLinks.includes(link)) {
                data.internalLinks.push(link);

                // Extract anchor text
                const anchorMatch = content.slice(match.index).match(/>([^<]+)</);
                if (anchorMatch) {
                    data.anchors.push({
                        href: link,
                        text: anchorMatch[1].trim().slice(0, 50)
                    });
                }
            }
        }
    }

    // Identify cluster membership
    const contentLower = content.toLowerCase();
    for (const [clusterName, clusterData] of Object.entries(CONFIG.clusters)) {
        const topicMatches = clusterData.topics.filter(topic =>
            contentLower.includes(topic.toLowerCase())
        );

        if (topicMatches.length >= 2) {
            data.cluster = clusterName;
            data.topics = topicMatches;

            // Check if this is a hub page
            if (data.slug === clusterData.hub) {
                data.isHub = true;
            }
            break;
        }
    }

    return data;
}

/**
 * Analyze topical graph and find optimization opportunities
 */
function analyzeTopicalGraph(pages) {
    const clusterPages = {};
    const allSlugs = new Set(pages.map(p => p.slug).filter(Boolean));

    // Group pages by cluster
    for (const page of pages) {
        if (page.cluster) {
            if (!clusterPages[page.cluster]) {
                clusterPages[page.cluster] = [];
            }
            clusterPages[page.cluster].push(page);
        }
    }

    // Analyze each cluster
    for (const [clusterName, clusterData] of Object.entries(CONFIG.clusters)) {
        const pagesInCluster = clusterPages[clusterName] || [];
        const hubExists = pagesInCluster.some(p => p.isHub);

        results.clusterAnalysis[clusterName] = {
            hubPage: clusterData.hub,
            hubExists,
            spokeCount: pagesInCluster.length,
            pages: pagesInCluster.map(p => p.slug),
            suggestions: []
        };

        // Find pages that should link to this cluster
        for (const page of pages) {
            if (!page.cluster || page.cluster !== clusterName) continue;

            // Check if page links to hub
            const linksToHub = page.internalLinks.includes(clusterData.hub);
            if (!linksToHub && !page.isHub) {
                results.linkSuggestions.push({
                    from: page.slug || page.relativePath,
                    to: clusterData.hub,
                    reason: `Spoke page should link to cluster hub`,
                    priority: "high"
                });
            }

            // Check if page links to related conditions
            for (const condition of clusterData.relatedConditions) {
                const conditionPath = `/conditions/${condition}`;
                if (!page.internalLinks.includes(conditionPath)) {
                    results.linkSuggestions.push({
                        from: page.slug || page.relativePath,
                        to: conditionPath,
                        reason: `Related condition for topical authority`,
                        priority: "medium"
                    });
                }
            }

            // Check if page links to related services
            for (const service of clusterData.relatedServices) {
                const servicePath = `/services/${service}`;
                if (!page.internalLinks.includes(servicePath) && page.slug !== servicePath) {
                    results.linkSuggestions.push({
                        from: page.slug || page.relativePath,
                        to: servicePath,
                        reason: `Related service for topical authority`,
                        priority: "medium"
                    });
                }
            }
        }
    }

    // Find orphan pages (pages with no incoming links)
    const incomingLinks = {};
    for (const page of pages) {
        for (const link of page.internalLinks) {
            if (!incomingLinks[link]) {
                incomingLinks[link] = [];
            }
            incomingLinks[link].push(page.slug || page.relativePath);
        }
    }

    for (const page of pages) {
        if (page.slug && (!incomingLinks[page.slug] || incomingLinks[page.slug].length === 0)) {
            page.isOrphan = true;
            results.orphanPages.push({
                slug: page.slug,
                title: page.title,
                cluster: page.cluster
            });
        }
    }

    return pages;
}

/**
 * Generate link insertion code suggestions
 */
function generateLinkInsertions(pages) {
    const insertions = [];

    for (const suggestion of results.linkSuggestions) {
        const fromPage = pages.find(p => p.slug === suggestion.from || p.relativePath === suggestion.from);
        if (!fromPage) continue;

        // Generate appropriate anchor text
        const toSlug = suggestion.to.split("/").pop();
        const clusterInfo = Object.entries(CONFIG.clusters).find(([_, data]) =>
            data.hub === suggestion.to || data.relatedConditions.includes(toSlug) || data.relatedServices.includes(toSlug)
        );

        let anchorText = toSlug.replace(/-/g, " ");
        if (clusterInfo) {
            // Use topic keyword for anchor
            const topics = clusterInfo[1].topics;
            if (topics.length > 0) {
                anchorText = topics[0];
            }
        }

        insertions.push({
            file: fromPage.file,
            linkComponent: `<Link href="${suggestion.to}">${anchorText}</Link>`,
            reason: suggestion.reason,
            priority: suggestion.priority
        });
    }

    return insertions;
}

/**
 * Main execution
 */
async function main() {
    console.log("🔗 RockSEO Internal Linking & Topical Graph Optimizer\n");
    console.log("=".repeat(60));

    // Collect all files
    const allFiles = [];

    // App directory pages
    allFiles.push(...getFiles(CONFIG.appDir));

    // Content component files
    for (const dir of CONFIG.contentDirs) {
        allFiles.push(...getFiles(path.join(ROOT, dir)));
    }

    console.log(`\n📁 Files scanned: ${allFiles.length}`);
    results.pagesScanned = allFiles.length;

    // Extract data from each file
    const pages = [];
    for (const file of allFiles) {
        try {
            const content = fs.readFileSync(file, "utf8");
            const pageData = extractPageData(file, content);
            pages.push(pageData);

            if (pageData.internalLinks.length > 0) {
                results.linksFound.push({
                    page: pageData.slug || pageData.relativePath,
                    linkCount: pageData.internalLinks.length
                });
            }
        } catch (err) {
            console.error(`❌ Error reading ${file}: ${err.message}`);
        }
    }

    // Analyze topical graph
    console.log("\n📊 Analyzing topical graph...");
    analyzeTopicalGraph(pages);

    // Generate link insertions
    const insertions = generateLinkInsertions(pages);

    // Summary
    console.log("\n" + "=".repeat(60));
    console.log("📈 ANALYSIS SUMMARY\n");

    // Cluster analysis
    console.log("🎯 Topical Clusters:");
    for (const [cluster, data] of Object.entries(results.clusterAnalysis)) {
        const status = data.hubExists ? "✅" : "❌";
        console.log(`   ${status} ${cluster}: ${data.spokeCount} pages`);
    }

    // Orphan pages
    console.log(`\n🏝️  Orphan Pages: ${results.orphanPages.length}`);
    for (const orphan of results.orphanPages.slice(0, 10)) {
        console.log(`   - ${orphan.slug} (${orphan.cluster || "unclustered"})`);
    }
    if (results.orphanPages.length > 10) {
        console.log(`   ... and ${results.orphanPages.length - 10} more`);
    }

    // Link suggestions
    console.log(`\n🔗 Link Suggestions: ${results.linkSuggestions.length}`);
    const highPriority = results.linkSuggestions.filter(s => s.priority === "high");
    console.log(`   High priority: ${highPriority.length}`);
    for (const suggestion of highPriority.slice(0, 5)) {
        console.log(`   📌 ${suggestion.from} → ${suggestion.to}`);
    }

    // Save report
    const reportDir = path.dirname(CONFIG.outputReport);
    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
    }

    const report = {
        ...results,
        insertions: insertions.slice(0, 50) // Limit for readability
    };

    fs.writeFileSync(CONFIG.outputReport, JSON.stringify(report, null, 2));
    console.log(`\n💾 Full report saved: ${CONFIG.outputReport}`);

    // Action items
    console.log("\n" + "=".repeat(60));
    console.log("🎬 RECOMMENDED ACTIONS:\n");

    if (results.orphanPages.length > 0) {
        console.log("1. Fix orphan pages - add incoming links from related pages");
    }

    if (highPriority.length > 0) {
        console.log("2. Add hub links - spoke pages should link to cluster hubs");
    }

    console.log("3. Review report for detailed link insertions");
    console.log("\n✅ Analysis complete!");
}

main().catch(console.error);
