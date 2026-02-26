import { readFileSync } from 'fs';

const content = readFileSync('./src/lib/data/tamilnadu-locations.ts', 'utf-8');
const slugRegex = /slug:\s*'([^']+)'/g;
const slugs = new Set<string>();
let match;
while ((match = slugRegex.exec(content)) !== null) {
  slugs.add(match[1]);
}

const expectedDistricts = [
  'chennai', 'coimbatore', 'madurai', 'tiruchirappalli', 'salem', 'tirunelveli',
  'tiruppur', 'ranipet', 'kancheepuram', 'erode', 'vellore', 'thoothukudi',
  'dindigul', 'thanjavur', 'ranipet', 'chengalpattu', 'krishnagiri',
  'dharmapuri', 'cuddalore', 'kanyakumari', 'tiruvannamalai', 'villupuram',
  'namakkal', 'pudukkottai', 'nagapattinam', 'ramanathapuram', 'sivaganga',
  'virudhunagar', 'nilgiris', 'karur', 'perambalur', 'ariyalur', 'thiruvarur',
  'theni', 'kallakurichi', 'tirupattur', 'tenkasi', 'mayiladuthurai'
];

const missing = expectedDistricts.filter(d => !slugs.has(d));
console.log('Total Locations:', slugs.size);
console.log('Missing Major Districts/Cities:', missing);
