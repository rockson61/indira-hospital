import { readFileSync } from 'fs';

const content = readFileSync('./src/lib/data/tamilnadu-locations.ts', 'utf-8');
const slugRegex = /slug:\s*'([^']+)'/g;

const slugs = [];
let match;
while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
}
console.log(slugs.sort().join(', '));
