import { readFileSync } from 'fs';
const content = readFileSync('./src/lib/data/tamilnadu-locations.ts', 'utf-8');
const slugRegex = /slug:\s*'([^']+)'/g;
const districtRegex = /district:\s*'([^']+)'/g;

const locations = [];
let matchSlug, matchDistrict;

const lines = content.split('\n');
let currentSlug = null;
let currentDistrict = null;

for (const line of lines) {
    const s = /slug:\s*'([^']+)'/.exec(line);
    if (s) currentSlug = s[1];
    const d = /district:\s*'([^']+)'/.exec(line);
    if (d) currentDistrict = d[1];

    if (currentSlug && currentDistrict) {
        locations.push({ slug: currentSlug, district: currentDistrict });
        currentSlug = null;
        currentDistrict = null;
    }
}

const districts = {};
for (const loc of locations) {
    if (!districts[loc.district]) districts[loc.district] = [];
    districts[loc.district].push(loc.slug);
}

for (const [district, locs] of Object.entries(districts)) {
    console.log(`${district}: ${locs.length} locations`);
}
