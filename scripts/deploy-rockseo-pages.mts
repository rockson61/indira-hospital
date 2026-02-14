
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const GENERATED_DIR = path.join(ROOT, 'rockseo/generated-pages');
const APP_DIR = path.join(ROOT, 'src/app');

function main() {
    if (!fs.existsSync(GENERATED_DIR)) {
        console.error(`Generated directory not found: ${GENERATED_DIR}`);
        return;
    }

    const files = fs.readdirSync(GENERATED_DIR).filter(f => f.endsWith('.tsx'));
    console.log(`Found ${files.length} generated pages.`);

    for (const file of files) {
        const filePath = path.join(GENERATED_DIR, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        // Extract Hub path from comment
        const hubMatch = content.match(/\/\/ Hub: (.*)/);
        if (!hubMatch) {
            console.warn(`Skipping ${file}: No Hub path found.`);
            continue;
        }

        const hubPath = hubMatch[1].trim(); // e.g., /services/dental-implants
        const slug = file.replace('.tsx', '');

        // Construct target directory
        // hubPath is relative to site root. We map it to src/app
        // e.g. /services/dental-implants -> src/app/services/dental-implants
        const relativeDir = hubPath.startsWith('/') ? hubPath.slice(1) : hubPath;
        const targetDir = path.join(APP_DIR, relativeDir, slug);

        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        const targetFile = path.join(targetDir, 'page.tsx');

        // Check if file exists to prevent overwriting populated content
        if (fs.existsSync(targetFile)) {
            console.log(`Skipping existing file: ${targetFile}`);
            continue;
        }

        // Fix imports
        content = content.replace(
            'import { Link } from "@/i18n/navigation";',
            'import Link from "next/link";'
        );

        // Fix Link usage if needed (Next.js Link doesn't need <a> child in recent versions, 
        // but the template uses <Link ...>text</Link> which is fine)

        fs.writeFileSync(targetFile, content);
        console.log(`Deployed ${file} -> ${targetDir}/page.tsx`);
    }
}

main();
