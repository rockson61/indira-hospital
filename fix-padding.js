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

    // We only want to bump pt- in large chunks that look like page heroes.
    // Usually they are: pt-36, pt-32, pt-44 combined with lg:pt-48, lg:pt-56 etc.
    // Let's explicitly target the combinations found in the grep.

    content = content.replace(/pt-36 pb-48 lg:pt-48/g, "pt-48 pb-48 lg:pt-60");
    content = content.replace(/pt-36 pb-16 overflow-hidden/g, "pt-48 pb-16 overflow-hidden");
    content = content.replace(/pt-44 pb-32 lg:pt-56/g, "pt-56 pb-32 lg:pt-64");
    content = content.replace(/pt-36 pb-32 lg:pt-48/g, "pt-48 pb-32 lg:pt-60");
    content = content.replace(/pt-36 pb-40 lg:pt-48/g, "pt-48 pb-40 lg:pt-60");
    content = content.replace(/pt-32 pb-20 lg:pt-48/g, "pt-44 pb-20 lg:pt-60");

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Updated padding in: " + filePath);
    }
}

walkDir('./src/app', updatePaddingReplace);
walkDir('./src/components', updatePaddingReplace);
console.log("Padding update complete.");
