import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../../lib/data/blog-content-enhanced');

function cleanFrontmatter() {
    console.log('🧹 Cleaning Frontmatter Author Links...');

    if (!fs.existsSync(BLOG_DIR)) {
        console.error('Directory not found:', BLOG_DIR);
        return;
    }

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    let modifiedCount = 0;

    files.forEach(file => {
        const filePath = path.join(BLOG_DIR, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        // Regex to find "author: [Name](/link)" and replace with "author: Name"
        // Only target lines starting with "author:" (YAML key)
        const regex = /^author:\s*\[([^\]]+)\]\([^)]+\)/m;

        if (regex.test(content)) {
            content = content.replace(regex, 'author: $1');
            fs.writeFileSync(filePath, content, 'utf-8');
            modifiedCount++;
            // console.log(`Fixed author in: ${file}`);
        }
    });

    console.log(`✅ Restored author fields in ${modifiedCount} files.`);
}

cleanFrontmatter();
