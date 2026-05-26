const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.tsx');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;
    
    // Replace common contractions outside of quotes/tags (heuristically)
    // We only replace if surrounded by letters: [a-zA-Z]'[a-zA-Z]
    content = content.replace(/([a-zA-Z])'([a-zA-Z])/g, "$1&apos;$2");
    
    // Some specific cases like end of word (doctors')
    content = content.replace(/doctors'/g, "doctors&apos;");
    content = content.replace(/patients'/g, "patients&apos;");
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log("Fixed entities in:", file);
    }
});
