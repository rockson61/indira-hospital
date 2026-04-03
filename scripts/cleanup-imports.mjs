import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../src/app/doctor/near-me/treat');

async function cleanupImports(filePath) {
    let content = await fs.readFile(filePath, 'utf-8');

    // 1. Find all imports from 'lucide-react'
    const lucideMatchAll = Array.from(content.matchAll(/import\s+\{([\s\S]+?)\}\s+from\s+'lucide-react'/g));
    
    if (lucideMatchAll.length > 1) {
        console.log(`🧹 Deduplicating imports in ${filePath}`);
        
        const allIcons = new Set();
        lucideMatchAll.forEach(match => {
            const icons = match[1].split(',').map(i => i.trim()).filter(Boolean);
            icons.forEach(icon => allIcons.add(icon));
        });

        const sortedIcons = Array.from(allIcons).sort();
        const newImport = `import { ${sortedIcons.join(', ')} } from 'lucide-react'`;

        // Replace all original imports with the single consolidated one
        let replaced = false;
        content = content.replace(/import\s+\{([\s\S]+?)\}\s+from\s+'lucide-react'/g, (match) => {
            if (!replaced) {
                replaced = true;
                return newImport;
            }
            return ''; // Remove subsequent ones
        });

        // Clean up any double/triple newlines left behind
        content = content.replace(/\n{3,}/g, '\n\n');

        await fs.writeFile(filePath, content, 'utf-8');
        console.log(`✅ Cleaned: ${filePath}`);
    }
}

async function walk(dir) {
    const files = await fs.readdir(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = await fs.stat(fullPath);
        if (stat.isDirectory()) {
            await walk(fullPath);
        } else if (file === 'page.tsx') {
            await cleanupImports(fullPath);
        }
    }
}

walk(ROOT_DIR).then(() => {
    console.log('🚀 Import Cleanup Complete.');
}).catch(err => {
    console.error('❌ Error during cleanup:', err);
});
