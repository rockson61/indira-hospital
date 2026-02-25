const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function updatePaddingReplace(filePath) {
    if (!filePath.endsWith('.tsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Previous values in grep were:
    // pt-36 pb-48 lg:pt-48
    // pt-36 pb-16
    // pt-44 pb-32 lg:pt-56
    // pt-36 pb-32 lg:pt-48
    // pt-36 pb-40 lg:pt-48
    // pt-32 pb-20 lg:pt-48
    // pt-44 pb-20 lg:pt-52 (SubServiceTemplate)
    // pt-32 pb-56 (FAQ)
    // pt-32 pb-20 lg:pt-48 (Location Dept)

    content = content.replace(/pt-(32|36|40|44|48|52)\s+pb-([0-9]+)\s+lg:pt-[0-9]+/g, (match, p1, p2) => {
        return `pt-16 pb-${p2} lg:pt-24`;
    });
    
    // For ones without lg:pt
    content = content.replace(/pt-(32|36|40|44|48|52)\s+pb-([0-9]+)(\s|")/g, (match, p1, p2, p3) => {
        // Only replace if they don't have lg:pt right after (which should be caught by above, but just in case)
        if (match.includes('lg:pt')) return match;
        return `pt-16 pb-${p2}${p3}`;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Reduced padding in: " + filePath);
    }
}

walkDir('./src/app', updatePaddingReplace);
walkDir('./src/components', updatePaddingReplace);
console.log("Padding reduction complete.");
