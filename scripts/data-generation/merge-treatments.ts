import fs from "fs";
import path from "path";

const treatmentFile = path.join(process.cwd(), "src/lib/data/treatment-data.ts");
const extractedFile = path.join(process.cwd(), "extracted-treatments.json");

let code = fs.readFileSync(treatmentFile, "utf8");
const extracted = JSON.parse(fs.readFileSync(extractedFile, "utf8"));

// Extract slashes of existing treatments to avoid duplicates
const existingSlugs = new Set();
const slugRegex = /slug:\s*"([^"]+)"/g;
let match;
while ((match = slugRegex.exec(code)) !== null) {
    existingSlugs.add(match[1]);
}

const newItems = extracted.filter((item: any) => !existingSlugs.has(item.slug));

if (newItems.length > 0) {
    const toAppend = newItems.map((item: any) => `    {
        id: "${item.id}",
        slug: "${item.slug}",
        parentServiceSlug: "${item.parentServiceSlug}",
        title: "${item.title.replace(/"/g, '\\"')}",
        shortDescription: "${item.shortDescription.replace(/"/g, '\\"')}",
        fullDescription: "${item.fullDescription.replace(/"/g, '\\"')}",
        features: ${JSON.stringify(item.features)},
        benefits: ${JSON.stringify(item.benefits)}
    }`).join(",\n");

    const lastBracketIndex = code.lastIndexOf(']');
    if (lastBracketIndex !== -1) {
        code = code.substring(0, lastBracketIndex) + ",\n" + toAppend + "\n" + code.substring(lastBracketIndex);
        fs.writeFileSync(treatmentFile, code);
        console.log(`Successfully appended ${newItems.length} new treatments.`);
    } else {
        console.log("Could not find closing bracket in array.");
    }
} else {
    console.log("No new unique treatments to add.");
}
