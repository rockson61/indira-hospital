import { readFileSync } from 'fs';

const content = readFileSync('./src/lib/data/tamilnadu-locations.ts', 'utf-8');
const nameRegex = /name:\s*'([^']+)'/g;
const districtRegex = /district:\s*'([^']+)'/g;

const locations = [];
let matchName, matchDistrict;
while ((matchName = nameRegex.exec(content)) !== null && (matchDistrict = districtRegex.exec(content)) !== null) {
  locations.push({ name: matchName[1], district: matchDistrict[1] });
}

const districts = {};
for (const loc of locations) {
  if (!districts[loc.district]) districts[loc.district] = [];
  districts[loc.district].push(loc.name);
}

for (const [district, locs] of Object.entries(districts)) {
  console.log(`${district}: ${locs.length} locations`);
}
