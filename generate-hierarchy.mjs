import { readFileSync, writeFileSync } from 'fs';
const content = readFileSync('./src/lib/data/tamilnadu-locations.ts', 'utf-8');

const slugs = [];
let matchSlug, matchDistrict, matchName;

const lines = content.split('\n');
let currentSlug = null;
let currentDistrict = null;
let currentName = null;

for (const line of lines) {
  const n = /name:\s*'([^']+)'/.exec(line);
  if (n) currentName = n[1];
  const s = /slug:\s*'([^']+)'/.exec(line);
  if (s) currentSlug = s[1];
  const d = /district:\s*'([^']+)'/.exec(line);
  if (d) currentDistrict = d[1];
  
  if (currentSlug && currentDistrict && currentName) {
      slugs.push({ name: currentName, slug: currentSlug, district: currentDistrict });
      currentSlug = null;
      currentDistrict = null;
      currentName = null;
  }
}

const regions = {
  "Vellore & Surrounding": ["Vellore", "Ranipet", "Tirupattur", "Tiruvannamalai", "Kanchipuram"],
  "North Tamil Nadu": ["Chennai", "Chengalpattu", "Tiruvallur", "Villupuram", "Kallakurichi", "Cuddalore", "Puducherry"],
  "West Tamil Nadu": ["Krishnagiri", "Dharmapuri", "Salem", "Namakkal", "Erode", "Tiruppur", "Coimbatore", "Nilgiris", "Karur"],
  "Central Tamil Nadu": ["Tiruchirappalli", "Perambalur", "Ariyalur", "Pudukkottai", "Thanjavur", "Tiruvarur", "Thiruvarur", "Nagapattinam", "Mayiladuthurai"],
  "South Tamil Nadu": ["Madurai", "Dindigul", "Theni", "Sivaganga", "Virudhunagar", "Ramanathapuram", "Tirunelveli", "Thoothukudi", "Kanyakumari", "Tenkasi", "Tirupathur"]
};

// Map each slug to a region based on its district
const groupedLocations = Object.keys(regions).map(regionName => {
  const districtList = regions[regionName];
  const regionLocations = slugs.filter(loc => districtList.includes(loc.district));
  
  // Deduplicate by slug
  const uniqueLocsMap = new Map();
  regionLocations.forEach(loc => uniqueLocsMap.set(loc.slug, loc));
  const uniqueLocs = Array.from(uniqueLocsMap.values());
  
  return {
    region: regionName,
    locations: uniqueLocs.map(loc => ({ name: loc.name, url: `/doctor/near-me/${loc.slug}`}))
  };
});

writeFileSync('./src/lib/data/location-hierarchy.ts', `export const LOCATION_HIERARCHY = ${JSON.stringify(groupedLocations, null, 4)};\n`);
console.log('Generated location-hierarchy.ts successfully.');
