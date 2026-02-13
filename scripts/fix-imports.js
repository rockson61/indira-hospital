const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walk(filePath, fileList);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

const componentsDir = path.resolve(__dirname, '../src/components');
const files = walk(componentsDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Replace import { Link } from '@/i18n/navigation' -> import Link from 'next/link'
    // Handling optional spaces around Link
    content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]@\/i18n\/navigation['"]/g, "import Link from 'next/link'");

    // Replace import {Link} from '@/i18n/navigation'
    content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]@\/i18n\/navigation['"];?/g, "import Link from 'next/link';");

    // Handle cases where other things might be imported? (unlikely from grep, but safety check)
    // If usePathname is there: import { Link, usePathname } ...
    // This simple regex won't catch mixed imports easily, but based on grep they seem isolated.

    if (content !== originalContent) {
        console.log(`Fixing imports in ${file}`);
        fs.writeFileSync(file, content, 'utf8');
    }
});
