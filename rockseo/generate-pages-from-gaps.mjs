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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");

const CONFIG = {
  appDir: path.join(ROOT, "src/app"),
  outputDir: path.join(__dirname, "generated-pages"),
  outputReport: path.join(__dirname, "reports/topical-gaps-report.json"),

  // Complete topic taxonomy for dental clinic
  topicTaxonomy: {
    "dental-implants": {
      hub: "/services/dental-implants",
      requiredSubtopics: [
        "single tooth implant cost",
        "all-on-4 implants guide",
        "all-on-6 implants guide",
        "dental implant procedure steps",
        "dental implant recovery time",
        "dental implant failure signs",
        "bone grafting for implants",
        "sinus lift before implants",
        "immediate load implants",
        "implant vs bridge comparison",
        "implant aftercare instructions",
        "dental implant pain management",
        "zirconia vs titanium implants",
        "implant cost in vellore",
        "implant warranty policy"
      ]
    },
    "root-canal": {
      hub: "/services/root-canal-treatment",
      requiredSubtopics: [
        "single sitting root canal",
        "root canal pain during treatment",
        "root canal vs extraction",
        "root canal aftercare",
        "root canal crown needed",
        "root canal cost breakdown",
        "root canal failure symptoms",
        "re-root canal treatment",
        "apicoectomy procedure",
        "root canal during pregnancy",
        "root canal for children",
        "laser root canal benefits"
      ]
    },
    "orthodontics": {
      hub: "/services/orthodontics",
      requiredSubtopics: [
        "metal braces guide",
        "ceramic braces vs metal",
        "invisalign treatment guide",
        "braces for adults",
        "braces age limit",
        "braces cost in vellore",
        "braces treatment duration",
        "braces pain management",
        "retainer after braces",
        "overbite correction",
        "underbite treatment",
        "crossbite correction",
        "teeth gaps treatment"
      ]
    },
    "gum-treatment": {
      hub: "/services/gum-treatment",
      requiredSubtopics: [
        "gingivitis treatment guide",
        "periodontitis stages",
        "deep cleaning scaling",
        "laser gum treatment",
        "gum grafting procedure",
        "gum recession treatment",
        "gum pocket treatment",
        "bleeding gums causes",
        "gum disease prevention",
        "gum surgery recovery"
      ]
    },
    "cosmetic-dentistry": {
      hub: "/services/cosmetic-dentistry",
      requiredSubtopics: [
        "teeth whitening guide",
        "dental veneers types",
        "smile makeover process",
        "composite bonding guide",
        "gummy smile correction",
        "teeth contouring reshaping",
        "dental bonding vs veneers"
      ]
    },
    "general-surgery": {
      hub: "/services/general-surgery",
      requiredSubtopics: [
        "laser piles treatment cost",
        "laparoscopic hernia repair",
        "thyroid surgery guide",
        "varicose veins laser treatment",
        "gallbladder removal recovery",
        "appendix surgery steps",
        "breast lump removal"
      ]
    },
    "gastroenterology": {
      hub: "/services/gastroenterology",
      requiredSubtopics: [
        "endoscopy procedure guide",
        "colonoscopy screening cost",
        "fatty liver treatment diet",
        "acid reflux Gerd management",
        "pancreatitis treatment steps",
        "h-pylori infection cure"
      ]
    },
    "urology": {
      hub: "/services/urology",
      requiredSubtopics: [
        "kidney stone laser surgery",
        "prostate TURP surgery",
        "urinary tract infection treatment",
        "male infertility causes",
        "kidney stone prevention tips"
      ]
    },
    "obstetrics-gynaecology": {
      hub: "/services/obstetrics-gynaecology",
      requiredSubtopics: [
        "normal delivery vs c-section",
        "high risk pregnancy care",
        "pcod pcos treatment guide",
        "painless delivery epidural",
        "laparoscopic hysterectomy guide",
        "infertility evaluation steps"
      ]
    },
    "orthopaedics": {
      hub: "/services/orthopaedics",
      requiredSubtopics: [
        "total knee replacement cost",
        "acl reconstruction recovery",
        "hip replacement surgery guide",
        "spine surgery disc prolapse",
        "fracture care rehabilitation"
      ]
    },
    "cardiology": {
      hub: "/services/cardiology",
      requiredSubtopics: [
        "heart angioplasty procedure",
        "coronary angiography guide",
        "pacemaker implantation steps",
        "heart attack warning signs",
        "preventive heart checkup"
      ]
    },
    "neurology": {
      hub: "/services/neurology",
      requiredSubtopics: [
        "stroke recovery exercises",
        "epilepsy treatment options",
        "migraine relief management",
        "parkinsons disease care",
        "eeg test procedure"
      ]
    },
    "oncology": {
      hub: "/services/oncology",
      requiredSubtopics: [
        "chemotherapy side effects",
        "breast cancer screening guide",
        "surgical oncology overview",
        "palliative care services"
      ]
    },
    "nephrology": {
      hub: "/services/nephrology",
      requiredSubtopics: [
        "dialysis procedure guide",
        "chronic kidney disease stages",
        "diabetic nephropathy prevention",
        "av fistula surgery"
      ]
    }
  }
};

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

  const template = `// RockSEO Auto-Generated Page Template
// Topic: ${title}
// Cluster: ${cluster}
// Hub: ${hubPath}
// Generated: ${new Date().toISOString()}

import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/section-container";
import Link from "next/link";
import EntityReviews from "@/components/trust/EntityReviews";

export const metadata: Metadata = {
  title: "${title} | Indira Dental Clinic Vellore",
  description: "TODO: Add 150-160 character description with primary keyword in first 60 characters."
};

export default function ${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("")}Page() {
  return (
    <main className="min-h-screen">
      <SectionContainer>
        {/* ROCKSEO STRUCTURE - DO NOT CHANGE ORDER */}
        
        {/* 1. Definition/Answer First (Featured Snippet Target) */}
        <section className="py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            ${title} at Indira Dental Clinic
          </h1>
          
          {/* 40-word featured snippet answer */}
          <p className="text-xl text-foreground/80 mb-8">
            <strong>TODO: Answer the query directly in 40 words.</strong>{" "}
            Include primary entity (Dr. Rockson Samuel), cost range (₹X,XXX–₹X,XXX), 
            and key differentiator (e.g., "50% lower cost than Chennai").
          </p>
        </section>
        
        {/* 2. Key Facts Table (Entity Graph) */}
        <section className="py-8 bg-muted rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div><strong>Cost:</strong> ₹X,XXX – ₹X,XXX</div>
            <div><strong>Duration:</strong> X minutes/hours</div>
            <div><strong>Recovery:</strong> X days</div>
            <div><strong>Success Rate:</strong> X%</div>
          </div>
        </section>
        
        {/* 3. Main Content (Information Gain) */}
        <section className="py-8 prose prose-lg max-w-none">
          <h2>What is ${title}?</h2>
          <p>TODO: Comprehensive explanation with entity references.</p>
          
          <h2>Who Needs This Treatment?</h2>
          <p>TODO: Patient criteria with specific symptoms.</p>
          
          <h2>The Procedure at Indira Dental Clinic</h2>
          <p>TODO: Step-by-step with durations and what to expect.</p>
          
          <h2>Cost & Payment Options</h2>
          <p>
            <strong>Cost: ₹X,XXX – ₹X,XXX</strong> at Indira Dental Clinic, Vellore.
            This is 50% lower than Chennai/Bangalore.
            0% EMI available via Bajaj Finserv, HDFC, ICICI.
          </p>
        </section>
        
        {/* 4. Related Services (Hub Link) */}
        <section className="py-8 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Related Services</h2>
          <ul className="space-y-2">
            <li>
              <Link href="${hubPath}" className="text-teal-600 hover:underline">
                ← Back to ${cluster.replace("-", " ")} main page
              </Link>
            </li>
            {/* TODO: Add 2-3 sibling service links */}
          </ul>
        </section>
        
        {/* 5. CTA Section */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Book Your Consultation</h2>
          <p className="mb-6">
            Dr. Rockson Samuel • 15+ years experience • 5,000+ patients
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700"
          >
            Schedule Appointment
          </Link>
          <p className="mt-4 text-muted-foreground">
            WhatsApp: +91-7010650063
          </p>
        </section>

        {/* 6. Reviews Section */}
        <EntityReviews 
          entityType="service" 
          entityName="${title}" 
          entitySlug="${cluster}/${slug}"
          title="Patient Experiences with ${title}"
          description="Read verified experiences from patients who underwent ${title} at Indira Dental Clinic."
        />
      </SectionContainer>
    </main>
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

  for (const missing of allMissing.slice(0, 100)) { // Increased for medical coverage
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
  console.log("   2. Fill in TODO sections with actual content");
  console.log("   3. Run SERP overlap detector after adding pages");
  console.log("   4. Move approved pages to app/[locale]/ directory");
}

main().catch(console.error);
