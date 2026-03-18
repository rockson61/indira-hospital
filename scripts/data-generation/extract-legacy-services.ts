import fs from "fs";
import path from "path";

const servicesDir = path.join(process.cwd(), "rockseo/generated-pages");
const outputData: any[] = [];
let idCounter = 500; // Starting from a higher range to avoid conflicts

if (fs.existsSync(servicesDir)) {
    const items = fs.readdirSync(servicesDir);
    for (const item of items) {
        if (!item.endsWith(".tsx")) continue;
        const itemPath = path.join(servicesDir, item);
        const content = fs.readFileSync(itemPath, "utf8");

        // Extract title from SubServiceTemplate or metadata
        const titleMatch = content.match(/title="([^"]+)"/) || content.match(/title: "([^"]+)"/);
        const title = titleMatch ? titleMatch[1] : item.replace(".tsx", "").replace(/-/g, " ");

        // Extract description
        const descMatch = content.match(/description=\{([\s\S]*?)\}/);
        let fullDescription = "";
        if (descMatch) {
            fullDescription = descMatch[1].replace(/<[^>]*>/g, "").replace(/\{/g, "").replace(/\}/g, "").replace(/\n/g, " ").replace(/\s+/g, " ").trim();
        } else {
            const metaDescMatch = content.match(/description: "([^"]+)"/);
            fullDescription = metaDescMatch ? metaDescMatch[1] : `Specialized care for ${title} at Indira Hospital.`;
        }
        const shortDescription = fullDescription.split(".")[0] + ".";

        // Extract parentServiceSlug / department
        const deptMatch = content.match(/departmentSlug="([^"]+)"/) || content.match(/\/\/ Cluster: ([^\n]+)/);
        const parentServiceSlug = deptMatch ? deptMatch[1].trim() : "general-surgery";

        outputData.push({
            id: `t-${idCounter++}`,
            slug: item.replace(".tsx", ""),
            parentServiceSlug,
            title,
            shortDescription,
            fullDescription,
            features: ["Advanced Medical Technology", "Expert Specialists", "Compassionate Care", "High Success Rates"],
            benefits: ["Faster Recovery", "Minimal Pain", "Premium Hospital Facilities", "Dedicated Support"]
        });
    }
}

const outputPath = path.join(process.cwd(), "extracted-treatments.json");
fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
console.log(`Extracted ${outputData.length} treatments to extracted-treatments.json`);

