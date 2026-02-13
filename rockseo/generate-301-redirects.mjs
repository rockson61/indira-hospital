
import fs from "fs";
import path from "path";

const MERGE_MAP = "rockseo/reports/merge-map.txt";
const OUTPUT = "rockseo/reports/redirects.txt";
const NEXT_OUTPUT = "rockseo/reports/nextjs-redirects.js";

if (!fs.existsSync(MERGE_MAP)) {
  console.error("❌ merge-map.txt not found");
  process.exit(1);
}

const lines = fs.readFileSync(MERGE_MAP, "utf8")
  .split("\n")
  .filter(Boolean);

const redirects = [];
const nextRedirects = [];

function toUrl(filePath) {
  // Normalize paths if they come as file paths vs URLs
  return filePath
    .replace("./app", "")
    .replace(".mdx", "")
    .replace(".md", "")
    .replace("/page", "") // Remove page if it exists
    .trim();
}

console.log(`🔄 Processing ${lines.length} merge entries...`);

lines.forEach(line => {
  // Expected format: "source_path → target_path"
  const parts = line.split(" → ");
  if (parts.length !== 2) return;

  const [left, right] = parts;
  const target = toUrl(right.trim());

  // Left side might be multiple sources separated by " + "
  left.split(" + ").forEach(src => {
    let from = toUrl(src.trim());
    let to = target;

    // Remove trailing slashes for comparison
    if (from.endsWith('/')) from = from.slice(0, -1);
    if (to.endsWith('/')) to = to.slice(0, -1);

    // Avoid self-redirects
    if (from === to) return;

    // Use original values for the rule, but we verified they aren't the same
    const finalFrom = toUrl(src.trim());
    const finalTo = target;

    // Double check exact match just in case
    if (finalFrom === finalTo) return;

    // Apache/Nginx Format
    redirects.push(`Redirect 301 ${finalFrom} ${finalTo}`);

    // Next.js Format
    nextRedirects.push(`
  {
    source: "${finalFrom}",
    destination: "${finalTo}",
    permanent: true
  }`);
  });
});

// Write generic redirects
fs.writeFileSync(OUTPUT, redirects.join("\n"));

// Write Next.js specific config
fs.writeFileSync(
  NEXT_OUTPUT,
  `// Paste inside next.config.js
module.exports = {
  async redirects() {
    return [${nextRedirects.join(",")}
    ]
  }
}`
);

console.log(`✅ Generated ${redirects.length} 301 redirect rules.`);
console.log(`💾 Generic rules: ${OUTPUT}`);
console.log(`💾 Next.js config: ${NEXT_OUTPUT}`);
