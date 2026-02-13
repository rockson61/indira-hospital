import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../../lib/data/blog-content-enhanced');

function cleanFrontmatter() {
    console.log('🧹 Cleaning Frontmatter (Author, Excerpt, Description)...');

    if (!fs.existsSync(BLOG_DIR)) {
        console.error('Directory not found:', BLOG_DIR);
        return;
    }

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    let modifiedCount = 0;

    files.forEach(file => {
        const filePath = path.join(BLOG_DIR, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        let originalContent = content;

        // 1. Fix Author: "author: [Name](/link)" -> "author: Name"
        const authorRegex = /^author:\s*\[([^\]]+)\]\([^)]+\)/m;
        if (authorRegex.test(content)) {
            content = content.replace(authorRegex, 'author: $1');
        }

        // 2. Fix Excerpt/Description: Remove markdown links "[text](url)" -> "text"
        // We process lines starting with "excerpt:" or "description:"
        // We use a replacer function to handle multiple links in one line
        const fieldRegex = /^(excerpt|description|category):\s*(.+)$/gm;

        content = content.replace(fieldRegex, (match, key, value) => {
            // Replace markdown links in the value part
            const cleanValue = value.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
            return `${key}: ${cleanValue}`;
        });

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            modifiedCount++;
        }
    });

    console.log(`✅ Cleaned frontmatter in ${modifiedCount} files.`);
}

cleanFrontmatter();
