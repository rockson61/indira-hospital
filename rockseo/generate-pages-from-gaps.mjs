#!/usr/bin/env node
/**
 * RockSEO Script 5 — Topical Gap Detector & Page Generator
 * 
 * Purpose:
 * - Detects missing subtopics for topical authority
 * - Generates RockSEO-ready page templates
 * - Ensures no cannibalization with existing content
 * - Uses entity-first structure
 * 
 * This is how you scale topical authority safely.
 * 
 * Usage: node rockseo/generate-pages-from-gaps.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { generateUniqueContent } from "./content-engine.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");const CONFIG = {
  appDir: path.join(ROOT, "src/app"),
  outputDir: path.join(ROOT, "src/app/seo"),
  outputReport: path.join(__dirname, "reports/topical-gaps-report.json"),

  // Complete topic taxonomy for Indira Elite Hospital
  topicTaxonomy: {
    "proctology": {
      hub: "/services/proctology",
      requiredSubtopics: [
        "laser piles treatment cost vellore",
        "painless fistula surgery recovery",
        "fissure laser treatment benefits",
        "pilonidal sinus robotic surgery",
        "advanced proctology diagnostics",
        "laser piles specialist vellore",
        "haemorrhoids treatment options",
        "chronic constipation management",
        "anal fistula laser closure FILAC",
        "sphincter sparing surgery",
        "proctology post-op care guide",
        "robotic piles surgery advantages"
      ]
    },
    "orthopaedics": {
      hub: "/services/orthopaedics",
      requiredSubtopics: [
        "robotic knee replacement vellore",
        "total hip replacement recovery",
        "acl reconstruction rehab guide",
        "spine surgery for disc prolapse",
        "robotic joint replacement benefits",
        "orthopaedic sports medicine vellore",
        "minimally invasive hip surgery",
        "knee replacement cost estimate",
        "physiotherapy after joint surgery",
        "bone health screening vellore",
        "arthritis management plan",
        "pediatric orthopaedics vellore"
      ]
    },
    "ophthalmology": {
      hub: "/services/ophthalmology",
      requiredSubtopics: [
        "robotic cataract surgery vellore",
        "contoura vision lasik benefits",
        "mics cataract surgery recovery",
        "glaucoma screening and treatment",
        "diabetic retinopathy management",
        "eye specialist doctor vellore",
        "pediatric ophthalmology clinic",
        "lasik eye surgery cost vellore",
        "dry eye syndrome treatment",
        "phacoemulsification cataract surgery",
        "icl eye surgery guide",
        "keratoconus treatment options"
      ]
    },
    "cardiology": {
      hub: "/services/cardiology",
      requiredSubtopics: [
        "preventive heart checkup vellore",
        "angioplasty recovery and care",
        "heart attack warning signs guide",
        "echocardiogram screening vellore",
        "cardiology specialist doctor vellore",
        "hypertension management plan",
        "cholesterol control tips",
        "non-invasive heart tests",
        "tmt test vellore cost",
        "heart health diet guide"
      ]
    }
  }
};
;

const results = {
  timestamp: new Date().toISOString(),
  existingPages: [],
  missingTopics: [],
  generatedPages: [],
  recommendations: []
};

/**
 * Slugify a topic title
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Check if a topic is already covered
 */
function isTopicCovered(topic, existingPages, existingContent) {
  const topicLower = topic.toLowerCase();
  const topicWords = topicLower.split(/\s+/).filter(w => w.length > 2);

  // Check if any existing page covers this topic
  for (const page of existingPages) {
    const pageLower = page.toLowerCase();

    // Direct match
    if (pageLower.includes(slugify(topic))) {
      return { covered: true, by: page, type: "direct" };
    }

    // Word overlap check
    const matchingWords = topicWords.filter(w => pageLower.includes(w));
    if (matchingWords.length >= Math.ceil(topicWords.length * 0.7)) {
      return { covered: true, by: page, type: "overlap" };
    }
  }

  // Check content for topic coverage
  const searchTerms = topicWords.join("|");
  const contentMatches = existingContent.filter(c => {
    const regex = new RegExp(searchTerms, "gi");
    return (c.match(regex) || []).length >= 3;
  });

  if (contentMatches.length > 0) {
    return { covered: true, by: "content", type: "content" };
  }

  return { covered: false };
}

/**
 * Generate RockSEO-ready page template
 */
function generatePageTemplate(topic, cluster) {
  const title = topic.split(" ").map(w =>
    w.charAt(0).toUpperCase() + w.slice(1)
  ).join(" ");

  const slug = slugify(topic);
  const hubPath = CONFIG.topicTaxonomy[cluster].hub;
  const deptName = cluster.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const content = generateUniqueContent(title, cluster);

  const template = `// RockSEO Auto-Generated Elite Page Template
// Topic: ${title}
// Cluster: ${cluster}
// Hub: ${hubPath}
// Generated: ${new Date().toISOString()}

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate";

export const metadata: Metadata = {
  title: "${title} | Indira Elite Hospital Vellore",
  description: "Learn about ${title} at Indira Elite Super Speciality Hospital. Experience robotic-assisted clinical mastery with transparent pricing and premium recovery suites."
};

export default function ${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("")}Page() {
  return (
    <SubServiceTemplate
      title="${title}"
      eyebrow="Indira Elite ${deptName}"
      description={
        <span>
          <strong>${title} is a clinical core competency at Indira Elite Hospital.</strong> Our senior consultants utilize advanced robotic-assisted technology to ensure maximum precision and rapid patient recovery.
        </span>
      }
      departmentName="${deptName}"
      departmentSlug="${cluster}"
      quickFacts={[
        { label: "Elite Pricing", value: "₹${content.price}", icon: "IndianRupee" },
        { label: "Robotic Precision", value: "99.8%", icon: "Zap" },
        { label: "Elite Recovery", value: "${content.recTime}", icon: "Bed" },
        { label: "Clinical Success", value: "${content.succRate}%", icon: "CheckCircle" }
      ]}
      timeline={{
        title: "Your Elite Pathway",
        description: "The structured journey for ${title} at Indira Elite",
        steps: [
          { title: "Elite Consultation", description: "In-depth clinical evaluation with robotic diagnostic mapping." },
          { title: "Robotic-Assisted Procedure", description: "Minimally invasive intervention ensuring surgical mastery." },
          { title: "Premium Recovery", description: "Post-op care in our Elite suites with dedicated clinical monitoring." }
        ]
      }}
      reviews={{
        entityType: "service",
        entityName: "${title}",
        entitySlug: "seo/${slug}"
      }}
    >
        {/* Procedural Unique Main Content (Elite Information Gain) */}
${content.mainContent}
    </SubServiceTemplate>
  );
}
`;

  return {
    slug,
    title,
    cluster,
    hubPath,
    template
  };
}

/**
 * Get all existing page slugs
 */
function getExistingPages(dir, list = []) {
  if (!fs.existsSync(dir)) return list;

  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);

    // Ignore doctor/near-me to force generation of medical hub pages
    if (full.includes("doctor/near-me")) continue;

    if (stat.isDirectory() && !f.startsWith(".") && !f.startsWith("[")) {
      list.push(f);
      getExistingPages(full, list);
    }
  }
  return list;
}

/**
 * Get content samples from blog posts
 */
function getBlogContentSamples(dir) {
  const samples = [];
  if (!fs.existsSync(dir)) return samples;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries.filter(e => e.isDirectory()).slice(0, 100)) {
    const pagePath = path.join(dir, entry.name, "page.tsx");
    if (fs.existsSync(pagePath)) {
      try {
        const content = fs.readFileSync(pagePath, "utf8").slice(0, 1000);
        samples.push(content);
      } catch (e) { }
    }
  }
  return samples;
}

/**
 * Main execution
 */
async function main() {
  console.log("🆕 RockSEO Topical Gap Detector & Page Generator");
  console.log("=".repeat(55));
  console.log("\nAnalyzing topic coverage and identifying gaps\n");

  // Get existing pages
  const existingPages = getExistingPages(CONFIG.appDir);
  const blogContent = getBlogContentSamples(path.join(CONFIG.appDir, "blog"));

  console.log(`📁 Existing pages: ${existingPages.length}`);
  console.log(`📝 Blog samples analyzed: ${blogContent.length}\n`);

  results.existingPages = existingPages;

  // Analyze each topic cluster
  const allMissing = [];

  for (const [cluster, data] of Object.entries(CONFIG.topicTaxonomy)) {
    console.log(`\n📊 Cluster: ${cluster.toUpperCase()}`);
    console.log(`   Hub: ${data.hub}`);

    const clusterMissing = [];
    const clusterCovered = [];

    for (const topic of data.requiredSubtopics) {
      const coverage = isTopicCovered(topic, existingPages, blogContent);

      if (coverage.covered) {
        clusterCovered.push({ topic, ...coverage });
      } else {
        clusterMissing.push({ topic, cluster });
        allMissing.push({ topic, cluster });
      }
    }

    console.log(`   ✅ Covered: ${clusterCovered.length}/${data.requiredSubtopics.length}`);
    console.log(`   ❌ Missing: ${clusterMissing.length}`);

    if (clusterMissing.length > 0) {
      for (const m of clusterMissing.slice(0, 3)) {
        console.log(`      - ${m.topic}`);
      }
      if (clusterMissing.length > 3) {
        console.log(`      ... and ${clusterMissing.length - 3} more`);
      }
    }
  }

  results.missingTopics = allMissing;

  // Generate page templates for missing topics
  console.log("\n" + "=".repeat(55));
  console.log("📝 GENERATING PAGE TEMPLATES\n");

  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  for (const missing of allMissing.slice(0, 500)) { // Increased for medical coverage
    const page = generatePageTemplate(missing.topic, missing.cluster);

    const outputPath = path.join(CONFIG.outputDir, `${page.slug}.tsx`);
    fs.writeFileSync(outputPath, page.template);

    results.generatedPages.push({
      topic: page.title,
      slug: page.slug,
      cluster: page.cluster,
      path: outputPath
    });

    console.log(`   🆕 Generated: ${page.slug}.tsx`);
  }

  if (allMissing.length > 10) {
    console.log(`\n   ⚠️ ${allMissing.length - 10} more topics identified but not generated.`);
    console.log("   Run again to generate more, or edit the script limit.");
  }

  // Save report
  const reportDir = path.dirname(CONFIG.outputReport);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  fs.writeFileSync(CONFIG.outputReport, JSON.stringify(results, null, 2));

  // Summary
  console.log("\n" + "=".repeat(55));
  console.log("📈 TOPICAL GAP SUMMARY\n");
  console.log(`   Total required subtopics: ${Object.values(CONFIG.topicTaxonomy).reduce((s, c) => s + c.requiredSubtopics.length, 0)}`);
  console.log(`   Topics missing: ${allMissing.length}`);
  console.log(`   Templates generated: ${results.generatedPages.length}`);

  console.log(`\n💾 Generated pages saved to: ${CONFIG.outputDir}`);
  console.log(`💾 Report saved: ${CONFIG.outputReport}`);

  console.log("\n⚠️ IMPORTANT:");
  console.log("   1. Review generated templates before publishing");
  console.log("   2. Update placeholder texts and prices with specialized content");
  console.log("   3. Run SERP overlap detector after adding pages");
  console.log("   4. Move approved pages to app/[locale]/ directory");
}

main().catch(console.error);
