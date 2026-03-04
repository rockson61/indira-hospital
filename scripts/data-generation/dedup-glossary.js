import fs from 'fs';
import path from 'path';

// Read the typescript file as string to parse it out
const glossaryPath = path.join(process.cwd(), 'src/lib/data/glossary-data.ts');
let content = fs.readFileSync(glossaryPath, 'utf8');

// Use a simple mechanism: extract the array
const arrayStartIndex = content.indexOf('[');
const arrayEndIndex = content.lastIndexOf(']');
const arrayContent = content.slice(arrayStartIndex, arrayEndIndex + 1);

try {
    // This is a bit unsafe if there are complex JS objects, but glossaryData usually consists of strings.
    // Let's use `eval` securely locally to parse the object since it's just plain JS structures
    const data = eval(arrayContent);
    const seen = new Set();
    const unique = [];

    for (const item of data) {
        if (!seen.has(item.term)) {
            seen.add(item.term);
            unique.push(item);
        } else {
            console.log(`Removed duplicate: ${item.term}`);
        }
    }

    // Write the deduplicated array back
    const formattedArray = JSON.stringify(unique, null, 4)
        // clean up quotes on keys to match TS style if possible, or just leave as JSON inside TS export
        .replace(/"([^"]+)":/g, '$1:');

    const newContent = content.slice(0, arrayStartIndex) + formattedArray + content.slice(arrayEndIndex + 1);
    fs.writeFileSync(glossaryPath, newContent, 'utf8');

    console.log(`Deduplication complete. Reduced from ${data.length} to ${unique.length} terms.`);
} catch (e) {
    console.error("Failed to parse array with eval. Error:", e);
}
