import fs from 'fs';
import path from 'path';

const glossaryPath = path.join(process.cwd(), 'src/lib/data/glossary-data.ts');
const content = fs.readFileSync(glossaryPath, 'utf8');

// A simple regex approach or AST might be complex for 6700 lines.
// But since the file just exports an array `export const glossaryData = [ ... ];`
// Let's use ts-node or just simple node execution to import, dedup, and rewrite.

