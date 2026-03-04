import fs from 'fs';
import { navigation } from '../../src/config/navigation';
import { TREATMENT_DATA } from '../../src/lib/data/treatment-data';

const existingSlugs = new Set(TREATMENT_DATA.map(t => t.slug));

const newItems: any[] = [];
let idCounter = 100;

for (const cat of navigation.specialtyNav) {
    if (cat.subServices) {
        for (const sub of cat.subServices) {
            const parts = sub.href.split('/');
            const slug = parts.pop();
            const parentSlug = parts.pop();

            if (slug && parentSlug && !existingSlugs.has(slug)) {
                newItems.push({
                    id: `t-${idCounter++}`,
                    slug: slug,
                    parentServiceSlug: parentSlug,
                    title: sub.title,
                    shortDescription: `Advanced ${sub.title.toLowerCase()} at Indira Hospital with experienced specialists.`,
                    fullDescription: `We provide comprehensive care and expert treatment for ${sub.title.toLowerCase()}, ensuring the best outcomes for our patients using state-of-the-art medical technology and personalized treatment plans at Indira Super Speciality Hospital.`,
                    features: [
                        "Expert Specialists",
                        "Advanced Technology",
                        "Comprehensive Care",
                        "Fast Recovery"
                    ],
                    benefits: [
                        "Improved Quality of Life",
                        "Personalized Treatment Plan",
                        "Minimal Discomfort",
                        "Safe & Effective"
                    ]
                });
                existingSlugs.add(slug);
            }
        }
    }
}

console.log("Found " + newItems.length + " new items.");

if (newItems.length > 0) {
    let fileContent = fs.readFileSync('src/lib/data/treatment-data.ts', 'utf8');
    const insertIndex = fileContent.lastIndexOf('];');
    if (insertIndex !== -1) {
        const itemsStr = ",\n    // Auto-generated from navigation route gap analysis\n" + newItems.map(item => `    {
        id: "${item.id}",
        slug: "${item.slug}",
        parentServiceSlug: "${item.parentServiceSlug}",
        title: "${item.title.replace(/"/g, '\\"')}",
        shortDescription: "${item.shortDescription.replace(/"/g, '\\"')}",
        fullDescription: "${item.fullDescription.replace(/"/g, '\\"')}",
        features: ${JSON.stringify(item.features)},
        benefits: ${JSON.stringify(item.benefits)}
    }`).join(',\n') + "\n";

        fileContent = fileContent.slice(0, insertIndex) + itemsStr + fileContent.slice(insertIndex);
        fs.writeFileSync('src/lib/data/treatment-data.ts', fileContent);
        console.log("Successfully appended new items.");
    }
}
