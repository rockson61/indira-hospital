#!/usr/bin/env node
/**
 * RockSEO Script 2c — Blog Post Link Injector
 * 
 * Purpose:
 * - Specifically targets blog posts (largest orphan category)
 * - Adds "Related Services" section to blog posts
 * - Injects hub links based on content analysis
 * 
 * Usage: node rockseo/inject-blog-links.mjs [--dry-run]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "app/[locale]/blog");

const DRY_RUN = process.argv.includes("--dry-run");

// Topic to service mapping
const TOPIC_MAPPINGS = [
    {
        topics: ["implant", "implants", "all-on-4", "all-on-6", "missing teeth", "titanium", "osseointegration", "bone graft"],
        service: { path: "/services/dental-implants", name: "Dental Implants" },
        condition: { path: "/conditions/missing-teeth", name: "Missing Teeth" }
    },
    {
        topics: ["root canal", "rct", "endodontic", "pulp", "abscess", "tooth infection", "pulpitis"],
        service: { path: "/services/root-canal-treatment", name: "Root Canal Treatment" },
        condition: { path: "/conditions/toothache", name: "Toothache" }
    },
    {
        topics: ["braces", "invisalign", "aligners", "orthodontic", "crooked", "malocclusion", "overbite", "underbite"],
        service: { path: "/services/orthodontics", name: "Orthodontics" },
        condition: { path: "/conditions/malocclusion", name: "Crooked Teeth" }
    },
    {
        topics: ["gum disease", "gingivitis", "periodontitis", "bleeding gums", "gum recession", "gum pocket", "scaling"],
        service: { path: "/services/gum-treatment", name: "Gum Treatment" },
        condition: { path: "/conditions/bleeding-gums", name: "Bleeding Gums" }
    },
    {
        topics: ["whitening", "bleaching", "yellow teeth", "stained teeth", "discolored"],
        service: { path: "/services/cosmetic-dentistry/teeth-whitening", name: "Teeth Whitening" },
        condition: null
    },
    {
        topics: ["veneer", "veneers", "smile makeover", "cosmetic"],
        service: { path: "/services/cosmetic-dentistry", name: "Cosmetic Dentistry" },
        condition: null
    },
    {
        topics: ["crown", "crowns", "cap", "ceramic", "zirconia", "pfm"],
        service: { path: "/services/restorative-dentistry/dental-crowns", name: "Dental Crowns" },
        condition: null
    },
    {
        topics: ["filling", "fillings", "cavity", "cavities", "decay", "caries"],
        service: { path: "/services/restorative-dentistry/dental-fillings", name: "Dental Fillings" },
        condition: { path: "/conditions/cavities", name: "Cavities" }
    },
    {
        topics: ["extraction", "wisdom tooth", "impacted", "third molar"],
        service: { path: "/services/oral-surgery/tooth-extraction", name: "Tooth Extraction" },
        condition: { path: "/conditions/wisdom-teeth-issues", name: "Wisdom Teeth Problems" }
    },
    {
        topics: ["emergency", "urgent", "pain", "swelling", "broken tooth", "knocked out"],
        service: { path: "/services/emergency-dentistry", name: "Emergency Dentistry" },
        condition: null
    },
    {
        topics: ["child", "children", "kid", "pediatric", "baby teeth", "toddler"],
        service: { path: "/services/pediatric-dentistry", name: "Pediatric Dentistry" },
        condition: null
    }
];

let modifiedCount = 0;
let skippedCount = 0;
const modifiedFiles = [];

/**
 * Determine which topics match the content
 */
function findMatchingTopics(content) {
    const contentLower = content.toLowerCase();
    const matches = [];

    for (const mapping of TOPIC_MAPPINGS) {
        const matchCount = mapping.topics.filter(t => contentLower.includes(t)).length;
        if (matchCount >= 2) {
            matches.push({ ...mapping, matchCount });
        }
    }

    // Sort by match count, return top 2
    return matches.sort((a, b) => b.matchCount - a.matchCount).slice(0, 2);
}

/**
 * Generate the Related Services section
 */
function generateRelatedSection(matches) {
    if (matches.length === 0) return null;

    let section = `\n\n## Related Services at Indira Dental Clinic\n\n`;
    section += `Looking for treatment in Vellore? Dr. Rockson Samuel offers:\n\n`;

    for (const match of matches) {
        section += `- **[${match.service.name}](${match.service.path})**: Expert treatment with 95%+ success rate. 50% lower cost than Chennai.\n`;
        if (match.condition) {
            section += `- **[${match.condition.name} Treatment](${match.condition.path})**: Comprehensive care for this condition.\n`;
        }
    }

    section += `\n📞 Book consultation: [Contact Us](/contact) | WhatsApp: +91-7010650063\n`;

    return section;
}

/**
 * Process a single blog post
 */
function processBlogPost(dirPath) {
    const pagePath = path.join(dirPath, "page.tsx");

    if (!fs.existsSync(pagePath)) {
        return false;
    }

    try {
        const content = fs.readFileSync(pagePath, "utf8");

        // Skip if already has Related Services section
        if (content.includes("Related Services at Indira") || content.includes("## Related Services")) {
            skippedCount++;
            return false;
        }

        // Find matching topics
        const matches = findMatchingTopics(content);

        if (matches.length === 0) {
            skippedCount++;
            return false;
        }

        // Generate the section
        const relatedSection = generateRelatedSection(matches);

        if (!relatedSection) {
            skippedCount++;
            return false;
        }

        // Find insertion point - look for the content section end
        // In MDX/blog posts, we want to add before the closing of main content

        // Look for patterns that indicate end of content
        const insertPatterns = [
            /(export\s+default\s+function)/,
            /(<\/article>)/,
            /(<\/main>)/,
            /(## (Conclusion|Summary|Final Thoughts))/i
        ];

        let insertIndex = -1;
        for (const pattern of insertPatterns) {
            const match = content.match(pattern);
            if (match && match.index) {
                insertIndex = match.index;
                break;
            }
        }

        if (insertIndex === -1) {
            // Try to find a good spot near the end
            const lines = content.split("\n");
            // Find last paragraph or heading
            for (let i = lines.length - 1; i >= 0; i--) {
                if (lines[i].trim().startsWith("<p") || lines[i].trim().startsWith("##")) {
                    insertIndex = content.indexOf(lines[i]);
                    break;
                }
            }
        }

        if (insertIndex === -1) {
            skippedCount++;
            return false;
        }

        // For blog posts, we need to inject as a component or markdown
        // Check if this is an MDX file or TSX
        const isMDX = content.includes("---") && content.includes("title:");

        let newContent;
        if (isMDX) {
            // MDX style - inject markdown
            newContent = content.slice(0, insertIndex) + relatedSection + content.slice(insertIndex);
        } else {
            // TSX style - inject as JSX comment for now (manual review needed)
            const jsxSection = `\n{/* AUTO-INJECT: Related Services */}\n{/* ${relatedSection.replace(/\n/g, " ").slice(0, 200)}... */}\n`;
            newContent = content.slice(0, insertIndex) + jsxSection + content.slice(insertIndex);
        }

        const blogName = path.basename(dirPath);

        if (DRY_RUN) {
            console.log(`  [DRY RUN] Would modify: ${blogName} (${matches.map(m => m.service.name).join(", ")})`);
        } else {
            fs.writeFileSync(pagePath, newContent);
            console.log(`  ✅ Modified: ${blogName}`);
        }

        modifiedCount++;
        modifiedFiles.push({
            path: pagePath,
            topics: matches.map(m => m.service.name)
        });

        return true;

    } catch (err) {
        console.error(`  ❌ Error: ${path.basename(dirPath)}: ${err.message}`);
        return false;
    }
}

/**
 * Main execution
 */
async function main() {
    console.log("📝 RockSEO Blog Post Link Injector");
    console.log("=".repeat(50));

    if (DRY_RUN) {
        console.log("⚠️  DRY RUN MODE - No files will be modified\n");
    }

    // Get all blog post directories
    if (!fs.existsSync(BLOG_DIR)) {
        console.error("❌ Blog directory not found:", BLOG_DIR);
        process.exit(1);
    }

    const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
    const blogDirs = entries.filter(e => e.isDirectory() && !e.name.startsWith("["));

    console.log(`📁 Blog posts found: ${blogDirs.length}\n`);

    // Process each blog post
    for (const dir of blogDirs) {
        processBlogPost(path.join(BLOG_DIR, dir.name));
    }

    // Summary
    console.log("\n" + "=".repeat(50));
    console.log("📈 SUMMARY\n");
    console.log(`   Posts processed: ${blogDirs.length}`);
    console.log(`   Posts modified: ${modifiedCount}`);
    console.log(`   Posts skipped: ${skippedCount}`);

    if (modifiedCount > 0) {
        console.log("\n🔗 Topic Coverage:");
        const topicCounts = {};
        for (const file of modifiedFiles) {
            for (const topic of file.topics) {
                topicCounts[topic] = (topicCounts[topic] || 0) + 1;
            }
        }
        for (const [topic, count] of Object.entries(topicCounts).sort((a, b) => b[1] - a[1])) {
            console.log(`   ${topic}: ${count} posts`);
        }
    }

    if (DRY_RUN) {
        console.log("\n💡 Run without --dry-run to apply changes");
    } else {
        console.log("\n✅ Blog link injection complete!");
        console.log("🔄 Run 'npm run build' to verify changes");
    }
}

main().catch(console.error);
