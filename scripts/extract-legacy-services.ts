import fs from "fs";
import path from "path";

const servicesDir = path.join(process.cwd(), "src/app/services");
const outputData: any[] = [];
let idCounter = 300;

function toCamelCase(str: string) {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

if (fs.existsSync(servicesDir)) {
    const items = fs.readdirSync(servicesDir);
    for (const item of items) {
        const itemPath = path.join(servicesDir, item);
        const stat = fs.statSync(itemPath);
        if (stat.isDirectory()) {
            const pagePath = path.join(itemPath, "page.tsx");
            if (fs.existsSync(pagePath)) {
                const content = fs.readFileSync(pagePath, "utf8");

                // Extract title
                const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
                const title = titleMatch ? titleMatch[1].trim() : item.replace(/-/g, ' ');

                // Extract description/shortDescription
                const descMatch = content.match(/<p[^>]*description[^>]*>([\s\S]*?)<\/p>/i) || content.match(/<p[^>]*text-[^>]*\s+leading-[^>]*>([\s\S]*?)<\/p>/i);
                const fullDescription = descMatch ? descMatch[1].replace(/<[^>]*>/g, '').trim() : `Comprehensive care and treatment for ${title}.`;
                const shortDescription = fullDescription.slice(0, 80) + '...';

                // Try to infer parent service (department) from imports or common keywords
                let parentServiceSlug = "general-surgery";
                if (content.toLowerCase().includes("heart") || content.toLowerCase().includes("cardiac") || content.toLowerCase().includes("ecg") || item.includes("cardio") || item.includes("heart")) parentServiceSlug = "cardiology";
                else if (content.toLowerCase().includes("tooth") || content.toLowerCase().includes("dental") || content.toLowerCase().includes("braces") || content.toLowerCase().includes("root-canal") || item.includes("teeth") || item.includes("jaw")) parentServiceSlug = "dentistry";
                else if (content.toLowerCase().includes("brain") || content.toLowerCase().includes("neuro") || content.toLowerCase().includes("stroke") || item.includes("migraine") || item.includes("sclerosis")) parentServiceSlug = "neurology";
                else if (content.toLowerCase().includes("bone") || content.toLowerCase().includes("joint") || content.toLowerCase().includes("knee") || content.toLowerCase().includes("spine") || content.toLowerCase().includes("fracture") || item.includes("shoulder") || item.includes("ortho")) parentServiceSlug = "orthopaedics";
                else if (content.toLowerCase().includes("kidney") || content.toLowerCase().includes("dialysis") || content.toLowerCase().includes("urine") || item.includes("renal") || item.includes("nephro")) parentServiceSlug = "nephrology";
                else if (content.toLowerCase().includes("stomach") || content.toLowerCase().includes("liver") || content.toLowerCase().includes("gi") || content.toLowerCase().includes("ulcer") || content.toLowerCase().includes("endoscopy") || item.includes("gastro") || item.includes("colon") || item.includes("bowel")) parentServiceSlug = "gastroenterology";
                else if (content.toLowerCase().includes("baby") || content.toLowerCase().includes("pregnancy") || content.toLowerCase().includes("women") || content.toLowerCase().includes("delivery") || item.includes("gynae") || item.includes("uterus") || item.includes("ovarian") || item.includes("pcos") || item.includes("menopause")) parentServiceSlug = "obstetrics-gynaecology";
                else if (content.toLowerCase().includes("prostate") || content.toLowerCase().includes("bladder") || content.toLowerCase().includes("urinary") || item.includes("urology") || item.includes("circumcision") || item.includes("testicular")) parentServiceSlug = "urology";
                else if (content.toLowerCase().includes("cancer") || content.toLowerCase().includes("tumor") || content.toLowerCase().includes("chemo") || content.toLowerCase().includes("oncology")) parentServiceSlug = "oncology";
                else if (content.toLowerCase().includes("skin") || content.toLowerCase().includes("hair") || content.toLowerCase().includes("laser") || item.includes("dermatology")) parentServiceSlug = "dermatology";

                outputData.push({
                    id: `t-${idCounter++}`,
                    slug: item,
                    parentServiceSlug,
                    title,
                    shortDescription,
                    fullDescription,
                    features: ["Advanced Medical Technology", "Expert Specialists", "Compassionate Care", "High Success Rates"],
                    benefits: ["Faster Recovery", "Minimal Pain", "Premium Hospital Facilities", "Dedicated Support"]
                });
            }
        }
    }
}

// Read treatment-data.ts, replace the closing array bracket ']' with the new JSON items, then add the bracket back
const targetFile = path.join(process.cwd(), "src/lib/data/treatment-data.ts");
let currentTreatmentData = fs.readFileSync(targetFile, "utf8");

// Try to parse out the array portion using regex or just look for the last ']' before the last function
const lastBracketIndex = currentTreatmentData.lastIndexOf(']');
if (lastBracketIndex !== -1) {
    const newItemsStr = outputData.map(item => `,\n    {\n        id: "${item.id}",\n        slug: "${item.slug}",\n        parentServiceSlug: "${item.parentServiceSlug}",\n        title: "${item.title}",\n        shortDescription: "${item.shortDescription}",\n        fullDescription: "${item.fullDescription}",\n        features: ${JSON.stringify(item.features)},\n        benefits: ${JSON.stringify(item.benefits)}\n    }`).join("");

    // Inject right before the closing bracket of the array
    const parts = currentTreatmentData.split(/\]\s*;\s*\/\/\s*Auto-generated/i);
    if (parts.length > 1) {
        // we can't easily rely on the exact split unless we are very careful. let's just use string replacement.
    }
}

fs.writeFileSync(path.join(process.cwd(), "extracted-treatments.json"), JSON.stringify(outputData, null, 2));
console.log(`Extracted ${outputData.length} treatments to extracted-treatments.json`);
