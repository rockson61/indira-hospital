#!/usr/bin/env node
/**
 * RockSEO Script 8 — Enhanced Blog Merger
 * 
 * Purpose:
 * - Converts enhanced .md blogs to TSX format
 * - Merges with existing blog directory
 * - Prefers enhanced content where duplicates exist
 * - Generates proper Next.js page structure
 * 
 * Usage: node rockseo/merge-enhanced-blogs.mjs [--dry-run]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");

const CONFIG = {
  enhancedDir: path.join(ROOT, "lib/data/blog-content-enhanced"),
  blogDir: path.join(ROOT, "app/[locale]/blog"),
  outputReport: path.join(__dirname, "reports/blog-merge-report.json"),

  // Blog categories for routing
  categoryMap: {
    "Implantology": "extractions-implants",
    "Orthodontics": "orthodontics",
    "Cosmetic Dentistry": "cosmetic-restorative",
    "Preventive Care": "preventive-care",
    "Gum Health": "gum-health",
    "Emergency Dentistry": "emergency-care",
    "General Dentistry": "general-dentistry",
    "Pediatric": "pediatric-dentistry",
    "TMJ": "tmj-disorders",
    "Oral Surgery": "oral-surgery",
    "Restorative": "cosmetic-restorative"
  }
};

const DRY_RUN = process.argv.includes("--dry-run");
const FORCE = process.argv.includes("--force");

const results = {
  timestamp: new Date().toISOString(),
  enhancedFound: 0,
  existingBlogs: 0,
  newBlogsCreated: 0,
  blogsMerged: 0,
  blogsSkipped: 0,
  errors: []
};

/**
 * Parse markdown frontmatter
 */
function parseFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return { metadata: {}, content };

  const frontmatter = frontmatterMatch[1];
  const metadata = {};

  // Parse YAML-like frontmatter
  for (const line of frontmatter.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      metadata[key] = value;
    }
  }

  const bodyContent = content.slice(frontmatterMatch[0].length).trim();
  return { metadata, content: bodyContent };
}

/**
 * Convert markdown to JSX-safe content
 */
function markdownToJSX(markdown) {
  // 1. Clean up 'rn' artifacts, ID anchors, code fences, and shortcodes
  let content = markdown
    // Remove code block markers if present (common in LLM output)
    .replace(/^```markdown\s*$/gm, "")
    .replace(/^```\s*$/gm, "")
    // Remove 'rn' artifacts
    .replace(/^rn/gm, "")
    .replace(/rnrn$/gm, "")
    .replace(/rn\s*$/gm, "")
    // Remove ID anchors from headers like {#my-id}
    .replace(/\{#.*?\}/g, "")
    // Remove shortcodes [shortcode ...]
    .replace(/\[\w+-.*?\].*?\[\/\w+.*?\]/g, "")
    .replace(/\[\w+-.*?\]/g, "");

  // 2. Escape braces for JSX (but NOT < >)
  content = content
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;");

  // 3. Convert markdown syntax to JSX strings

  // Headers
  content = content.replace(/^## (.*?)$/gm, '<h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">$1</h2>');
  content = content.replace(/^### (.*?)$/gm, '<h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h3>');
  content = content.replace(/^# (.*?)$/gm, '<h1 className="text-4xl font-bold text-gray-900 mb-6">$1</h1>');

  // Lists - Handle * bullets too (must be before italics)
  content = content.replace(/^[-*] (.+)$/gm, '<li className="flex items-start gap-3 mb-2"><span className="text-teal-600">•</span><span>$1</span></li>');

  // Bold/Italic
  // Fix: Italic should not match bullet points (require no space after *)
  content = content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  content = content.replace(/(?<!\*)\*(?!\s)([^*]+?)\*(?!\*)/g, '<em>$1</em>');

  // Links
  content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<Link href="$2" className="text-teal-600 hover:underline">$1</Link>');

  // Paragraphs (Skip block elements)
  content = content.replace(/^(?!<(?:h\d|li))(?!\s*$)(.+)$/gm, '<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">$1</p>');

  return content;
}

/**
 * Get slug from filename
 */
function getSlug(filename) {
  return filename.replace(/\.md$/, "");
}

/**
 * Get category from metadata
 */
function getCategory(metadata) {
  const cat = metadata.category || metadata.Category || "General Dentistry";
  return CONFIG.categoryMap[cat] || "general-dentistry";
}

/**
 * Determine canonical slug
 * Maps geo-variants (e.g. -in-chennai) to the main hub (e.g. -in-vellore)
 */
function getCanonicalSlug(slug) {
  // List of known major cities/locations that are "satellites" (not the hub)
  // We identify them by the pattern "-in-[location]" at the end of the slug

  const geoPattern = /-in-([a-z-]+)$/;
  const match = slug.match(geoPattern);

  if (match) {
    const location = match[1];
    // If it's already vellore, it is the canonical (self-referencing)
    if (location === 'vellore') return slug;

    // Construct the potential canonical slug
    const hubSlug = slug.replace(geoPattern, '-in-vellore');

    // Check if the hub page actually exists in our generated blogs OR enhanced source
    // Since we are running this script, we can check the CONFIG.enhancedDir for the source .md file
    const hubSourcePath = path.join(CONFIG.enhancedDir, `${hubSlug}.md`);

    if (fs.existsSync(hubSourcePath)) {
      return hubSlug;
    }
  }

  // Default to self-referencing if no hub is found or not a geo-variant
  return slug;
}

/**
 * Generate TSX blog page
 */
function generateTSXPage(metadata, content, slug, canonicalSlug) {
  const title = metadata.title || slug.replace(/-/g, " ");
  const description = metadata.excerpt || metadata.description || `Learn about ${title} from Dr. Rockson Samuel at Indira Dental Clinic, Vellore.`;
  const date = metadata.date || new Date().toISOString().split("T")[0];
  const category = getCategory(metadata);
  const readTime = metadata.readTime || "8 min";
  const author = metadata.author || "Dr. Rockson Samuel";
  const image = metadata.image || "/dental-clinic-vellore.jpg";

  // Extract body content without TOC and scripts
  let bodyContent = content
    .replace(/^## Table of Contents[\s\S]*?(?=## )/m, "")
    .replace(/<script[\s\S]*?<\/script>/g, "");

  // Convert markdown to safe JSX segments
  const jsxContent = markdownToJSX(bodyContent);

  return `import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { Calendar, Clock, User, Tag, ArrowRight, Phone } from 'lucide-react'
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from '@/components/ui/modern-card'
import { Breadcrumb } from '@/components/layout/Breadcrumbs'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: "${title.replace(/"/g, '\\"')}",
  description: "${description.replace(/"/g, '\\"').slice(0, 160)}",
  authors: [{ name: '${author}' }],
  openGraph: {
    title: "${title.replace(/"/g, '\\"')}",
    description: "${description.replace(/"/g, '\\"').slice(0, 160)}",
    type: 'article',
    publishedTime: '${date}T00:00:00.000Z',
    authors: ['${author}'],
    images: [{ url: '${image}' }],
  },
  alternates: {
    canonical: 'https://www.velloredental.com/blog/${canonicalSlug || slug}'
  }
}

export default function ${/^\d/.test(slug) ? "Blog" : ""}${slug.replace(/-/g, "_").split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("")}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <div className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Blog', href: '/blog' },
              { title: '${title.replace(/'/g, "\\'")}', href: '#' }
            ]}
          />
        </div>
      </div>

      <article className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-teal-100 text-teal-700">
              <Tag className="w-3 h-3 mr-1" />
              ${category.replace(/-/g, " ").replace(/\\b\\w/g, l => l.toUpperCase())}
            </Badge>
            <Badge variant="outline">
              <Clock className="w-3 h-3 mr-1" />
              ${readTime} read
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            ${title.replace(/"/g, "&quot;")}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-teal-600" />
              <span>${author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-600" />
              <time>${new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-xl">
            <img 
              src="${image}" 
              alt="${title.replace(/"/g, '\\"')}"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
            ${description}
          </p>
          
          {/* Enhanced Content from RockSEO */}
          <div className="mt-8 space-y-6">
            ${jsxContent}
          </div>
        </div>

        {/* Related Services CTA */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Expert Dental Care in Vellore</h2>
          <p className="text-xl mb-6 opacity-90">
            Book your consultation with Dr. Rockson Samuel today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-lg font-bold"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href="tel:7010650063"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-700 text-white rounded-lg font-bold border-2 border-white"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
`;
}

/**
 * Process a single enhanced blog file
 */
function processEnhancedBlog(filename) {
  const slug = getSlug(filename);
  const enhancedPath = path.join(CONFIG.enhancedDir, filename);
  const blogPath = path.join(CONFIG.blogDir, slug);
  const pagePath = path.join(blogPath, "page.tsx");

  try {
    // Read enhanced content
    let enhancedContent = fs.readFileSync(enhancedPath, "utf8");
    // Strip code fence wrappers if present (common in LLM output)
    enhancedContent = enhancedContent
      .replace(/^```markdown\s*$/gm, "")
      .replace(/^```\s*$/gm, "")
      .trim();

    const { metadata, content } = parseFrontmatter(enhancedContent);

    // Check if blog already exists
    const exists = fs.existsSync(pagePath);

    if (exists && !FORCE) {
      // Check if existing blog is "generic" (auto-generated) vs custom
      const existingContent = fs.readFileSync(pagePath, "utf8");
      const isGeneric = existingContent.includes("Understanding") &&
        existingContent.includes("is crucial for maintaining optimal oral health");

      if (!isGeneric) {
        // Skip if existing blog appears to be custom/high-quality
        results.blogsSkipped++;
        return { action: "skipped", slug, reason: "existing-custom" };
      }
    }

    // Determine canonical slug
    const canonicalSlug = getCanonicalSlug(slug);

    // Generate new TSX page
    const tsxContent = generateTSXPage(metadata, content, slug, canonicalSlug);

    if (DRY_RUN) {
      if (exists) {
        console.log(`  [DRY RUN] Would replace: ${slug}`);
      } else {
        console.log(`  [DRY RUN] Would create: ${slug}`);
      }
    } else {
      // Create directory if needed
      if (!fs.existsSync(blogPath)) {
        fs.mkdirSync(blogPath, { recursive: true });
      }

      // Write the TSX file
      fs.writeFileSync(pagePath, tsxContent);

      if (exists) {
        console.log(`  ✅ Merged: ${slug}`);
        results.blogsMerged++;
      } else {
        console.log(`  🆕 Created: ${slug}`);
        results.newBlogsCreated++;
      }
    }

    return { action: exists ? "merged" : "created", slug };

  } catch (err) {
    results.errors.push({ file: filename, error: err.message });
    console.error(`  ❌ Error: ${filename}: ${err.message}`);
    return { action: "error", slug, error: err.message };
  }
}

/**
 * Main execution
 */
async function main() {
  console.log("📝 RockSEO Enhanced Blog Merger");
  console.log("=".repeat(55));

  if (DRY_RUN) {
    console.log("⚠️  DRY RUN MODE - No files will be modified\n");
  }

  // Get all enhanced blogs
  const enhancedFiles = fs.readdirSync(CONFIG.enhancedDir)
    .filter(f => f.endsWith(".md"));

  results.enhancedFound = enhancedFiles.length;
  console.log(`📁 Enhanced blogs found: ${enhancedFiles.length}`);

  // Get existing blogs
  const existingBlogs = fs.readdirSync(CONFIG.blogDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith("["))
    .map(d => d.name);

  results.existingBlogs = existingBlogs.length;
  console.log(`📁 Existing blogs: ${existingBlogs.length}\n`);

  // Process each enhanced blog
  console.log("🔄 Processing enhanced blogs...\n");

  let processed = 0;
  for (const file of enhancedFiles) {
    processEnhancedBlog(file);
    processed++;

    // Progress indicator every 100 files
    if (processed % 100 === 0) {
      console.log(`   ... processed ${processed}/${enhancedFiles.length}`);
    }
  }

  // Save report
  const reportDir = path.dirname(CONFIG.outputReport);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  fs.writeFileSync(CONFIG.outputReport, JSON.stringify(results, null, 2));

  // Summary
  console.log("\n" + "=".repeat(55));
  console.log("📈 MERGE SUMMARY\n");
  console.log(`   Enhanced blogs: ${results.enhancedFound}`);
  console.log(`   Existing blogs: ${results.existingBlogs}`);
  console.log(`   New blogs created: ${results.newBlogsCreated}`);
  console.log(`   Blogs merged: ${results.blogsMerged}`);
  console.log(`   Blogs skipped: ${results.blogsSkipped}`);
  console.log(`   Errors: ${results.errors.length}`);

  console.log(`\n💾 Report saved: ${CONFIG.outputReport}`);

  if (DRY_RUN) {
    console.log("\n💡 Run without --dry-run to apply changes");
  } else {
    console.log("\n✅ Blog merge complete!");
    console.log("🔄 Run 'npm run build' to verify changes");
  }
}

main().catch(console.error);
