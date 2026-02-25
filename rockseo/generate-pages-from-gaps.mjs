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
        "breast lump removal",
        "fistula laser treatment",
        "fissure surgery recovery",
        "pilonidal sinus laser surgery",
        "diabetic foot ulcer care",
        "lipoma excision surgery",
        "sebaceous cyst removal",
        "circumcision surgery guide",
        "hydrocele surgery cost"
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
        "h-pylori infection cure",
        "peptic ulcer disease treatment",
        "irritable bowel syndrome IBS relief",
        "inflammatory bowel disease IBD care",
        "crohns disease management",
        "ulcerative colitis treatment",
        "liver cirrhosis care plan",
        "hepatitis B treatment options",
        "gastric balloon weight loss",
        "upper GI endoscopy prep"
      ]
    },
    "urology": {
      hub: "/services/urology",
      requiredSubtopics: [
        "kidney stone laser surgery",
        "prostate TURP surgery",
        "urinary tract infection treatment",
        "male infertility causes",
        "kidney stone prevention tips",
        "bladder cancer treatment options",
        "prostate cancer screening",
        "erectile dysfunction treatment",
        "varicocele surgery guide",
        "urethral stricture repair",
        "overactive bladder relief",
        "urinary incontinence treatment",
        "laser prostatectomy HOLEP",
        "testicular torsion emergency",
        "phimosis treatment options"
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
        "infertility evaluation steps",
        "fibroid removal surgery",
        "endometriosis pain management",
        "ovarian cyst laparoscopy",
        "cervical cancer screening PAP",
        "menopause symptom relief",
        "tubal ligation procedure",
        "ectopic pregnancy treatment",
        "myomectomy surgery cost",
        "colposcopy procedure details"
      ]
    },
    "orthopaedics": {
      hub: "/services/orthopaedics",
      requiredSubtopics: [
        "total knee replacement cost",
        "acl reconstruction recovery",
        "hip replacement surgery guide",
        "spine surgery disc prolapse",
        "fracture care rehabilitation",
        "shoulder arthroscopy guide",
        "rotator cuff repair surgery",
        "carpal tunnel release",
        "knee arthroscopy recovery",
        "sports injury treatment",
        "knee cartilage repair",
        "joint pain relief injections",
        "osteoporosis management plan",
        "total shoulder replacement",
        "trigger finger release"
      ]
    },
    "cardiology": {
      hub: "/services/cardiology",
      requiredSubtopics: [
        "heart angioplasty procedure",
        "coronary angiography guide",
        "pacemaker implantation steps",
        "heart attack warning signs",
        "preventive heart checkup",
        "bypass surgery CABG",
        "heart valve replacement",
        "arrhythmia treatment options",
        "echocardiogram test details",
        "tmt test for heart",
        "heart failure management",
        "pediatric cardiology care",
        "hypertension control diet",
        "cholesterol management plan",
        "holter monitor test"
      ]
    },
    "neurology": {
      hub: "/services/neurology",
      requiredSubtopics: [
        "stroke recovery exercises",
        "epilepsy treatment options",
        "migraine relief management",
        "parkinsons disease care",
        "eeg test procedure",
        "alzheimers dementia care",
        "multiple sclerosis treatment",
        "neuropathy pain relief",
        "brain tumor surgery guide",
        "spinal cord injury rehab",
        "sleep apnea study",
        "vertigo dizziness treatment",
        "myasthenia gravis care",
        "bell palsy recovery",
        "ncs emg test guide"
      ]
    },
    "oncology": {
      hub: "/services/oncology",
      requiredSubtopics: [
        "chemotherapy side effects",
        "breast cancer screening guide",
        "surgical oncology overview",
        "palliative care services",
        "radiation therapy guide",
        "targeted therapy for cancer",
        "immunotherapy treatment options",
        "pet scan for cancer",
        "colon cancer treatment",
        "lung cancer early signs",
        "prostate cancer treatment options",
        "cervical cancer vaccines",
        "head and neck cancer care",
        "bone marrow transplant prep",
        "cancer pain management"
      ]
    },
    "nephrology": {
      hub: "/services/nephrology",
      requiredSubtopics: [
        "dialysis procedure guide",
        "chronic kidney disease stages",
        "diabetic nephropathy prevention",
        "av fistula surgery",
        "kidney biopsy procedure",
        "acute kidney injury care",
        "kidney transplant preparation",
        "glomerulonephritis treatment",
        "polycystic kidney disease management",
        "nephrotic syndrome cure",
        "proteinuria treatment options",
        "hemodialysis vs peritoneal dialysis",
        "kidney diet plan",
        "high creatinine levels causes",
        "fluid restriction guidelines"
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
  const deptName = cluster.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const template = `// RockSEO Auto-Generated Page Template
// Topic: ${title}
// Cluster: ${cluster}
// Hub: ${hubPath}
// Generated: ${new Date().toISOString()}

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate";

export const metadata: Metadata = {
  title: "${title} | Indira Hospital Vellore",
  description: "Learn about ${title} at Indira Super Speciality Hospital. Expert care by senior doctors with affordable cost, premium facilities, and 0% EMIs available."
};

export default function ${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("")}Page() {
  return (
    <SubServiceTemplate
      title="${title}"
      eyebrow="${deptName}"
      description={
        <span>
          <strong>${title} is a specialized treatment provided at Indira Super Speciality Hospital in Vellore.</strong> The procedure offers long-lasting results with affordable pricing, bringing you premium care at up to 50% lower cost than Chennai and Bangalore.
        </span>
      }
      departmentName="${deptName}"
      departmentSlug="${cluster}"
      quickFacts={[
        { label: "Cost Estimate", value: "₹X,XXX", icon: "IndianRupee" },
        { label: "Procedure Time", value: "X hours", icon: "Clock" },
        { label: "Recovery", value: "X days", icon: "Activity" },
        { label: "Success Rate", value: "X%", icon: "Star" }
      ]}
      timeline={{
        title: "Treatment Process",
        description: "Our streamlined approach to ${title}",
        steps: [
          { title: "Consultation & Diagnostics", description: "Comprehensive evaluation and digital diagnostics." },
          { title: "Procedure", description: "Minimally invasive treatment using advanced technology." },
          { title: "Recovery & Follow-up", description: "Post-operative care and dedicated monitoring." }
        ]
      }}
      reviews={{
        entityType: "service",
        entityName: "${title}",
        entitySlug: "${cluster}/${slug}"
      }}
    >
        {/* Main Content (Information Gain) */}
        <h2>What is ${title}?</h2>
        <p>${title} is a specialized, advanced medical procedure designed to address specific clinical symptoms, restore function, and improve patient health. At Indira Hospital, our distinguished professionals employ state-of-the-art diagnostic and treatment modalities to deliver an exceptional standard of care.</p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>Patients experiencing persistent discomfort, reduced functionality, or those advised by a specialist may require ${title}. Ideal candidates typically exhibit clinical indications that warrant proactive intervention to prevent further deterioration and ensure long-term health stabilization.</p>
        
        <h2>The Procedure at Indira Hospital</h2>
        <p>The course of ${title} involves an initial consultation, comprehensive digital diagnostics, and a personalized treatment roadmap. The actual process is minimally invasive where possible, utilizing modern anesthetics and advanced surgical precision to ensure patient comfort, usually taking a few hours to complete with a highly predictable recovery phase.</p>
        
        <h2>Cost & Payment Options</h2>
        <p>
          <strong>Cost: ₹X,XXX – ₹X,XXX</strong> at Indira Hospital, Vellore.
          This is significantly lower than tier-1 cities while maintaining world-class standards.
          0% EMI available via Bajaj Finserv, HDFC, ICICI.
        </p>
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
