import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../src/app/doctor/near-me/treat');

const ICONS = [
    'Activity', 'ArrowRight', 'ArrowRightCircle', 'Award', 'Baby', 'Brain', 
    'CheckCircle2', 'ChevronRight', 'Clock', 'Dna', 'Droplets', 'Flame', 
    'GraduationCap', 'HandCoins', 'HeartPulse', 'Info', 'LayoutGrid', 'Leaf', 
    'MapPin', 'MessageCircle', 'Microscope', 'Move', 'Phone', 'Radio', 
    'Ribbon', 'Salad', 'Scale', 'Search', 'Shield', 'ShieldCheck', 'ShieldPlus', 
    'Siren', 'Sparkles', 'Target', 'ThermometerSnowflake', 'Users', 'Volume2', 
    'Waves', 'Wind', 'Zap', 'Mic', 'UserCheck', 'Star', 'Ear', 'Apple', 'Layers', 
    'Navigation', 'Users2', 'Utensils', 'Eye', 'Heart', 'Stethoscope'
];

async function hardenPage(filePath) {
    if (filePath.endsWith('laser-piles-treatment/page.tsx')) return;
    if (filePath.endsWith('[...slug]/page.tsx')) return; // SKIPPING DYNAMIC CORE
    if (filePath.includes('department')) return; // SKIPPING DEPARTMENTS FOR NOW IF RISKY

    let content = await fs.readFile(filePath, 'utf-8');

    // 1. Reset Imports (Nuke all lucide and Template imports to start fresh)
    content = content.replace(/import\s+\{([\s\S]+?)\}\s+from\s+['"]lucide-react['"]\s*/gm, '');
    content = content.replace(/import\s+\{([\s\S]+?)\}\s+from\s+['"]@\/components\/healthcare\/SubServiceTemplate['"]\s*/gm, '');
    content = content.replace(/import\s+\{CheckCircle2,\s*Clock,\s*Info,\s*MapPin,\s*Shield,\s*Star,\s*UserCheck,\s*Zap\}\s+from\s+['"]@\/components\/healthcare\/SubServiceTemplate['"]\s*/gm, ''); 
    content = content.replace(/import\s+AioKnowledgeBlock\s+from\s+['"]@\/components\/seo\/AioKnowledgeBlock['"]\s*/gm, '');
    content = content.replace(/import\s+\{([\s\S]+?)\}\s+from\s+['"]@\/lib\/data\/treatments['"]\s*/gm, '');
    content = content.replace(/import\s+\{([\s\S]+?)\}\s+from\s+['"]@\/lib\/data\/treatment-data['"]\s*/gm, '');
    content = content.replace(/import\s+\{([\s\S]+?)\}\s+from\s+['"]@\/lib\/data\/pricing-data['"]\s*/gm, '');
    content = content.replace(/import\s+\{([\s\S]+?)\}\s+from\s+['"]@\/lib\/data\/seed-data['"]\s*/gm, '');
    content = content.replace(/import\s+\{([\s\S]+?)\}\s+from\s+['"]@\/config\/site['"]\s*/gm, '');
    content = content.replace(/import\s+(type\s+)?\{\s*Metadata\s*\}\s+from\s+['"]next['"]\s*/gm, '');
    content = content.replace(/import\s+Link\s+from\s+['"]next\/link['"]\s*/gm, '');
    
    // 2. Add Clean Imports
    const icons = Array.from(new Set(ICONS)).sort();
    const isDept = content.includes('DepartmentTemplate');
    const hasTreatments = content.includes('getTreatmentBySlug') || content.includes('getAllTreatments') || content.includes('TREATMENT_DATA');
    const hasPricing = content.includes('PRICING_DATA');
    const hasSeed = content.includes('SEED_DATA');
    const hasSiteConfig = content.includes('siteConfig');
    const hasMetadata = content.includes(': Metadata');
    const hasLink = content.includes('<Link');

    const nextImport = hasMetadata ? "import type { Metadata } from 'next'\n" : "";
    const linkImport = hasLink ? "import Link from 'next/link'\n" : "";
    const templateImport = isDept 
        ? "import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'"
        : "import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'";

    let cleanImports = `import React from 'react'\n${nextImport}${linkImport}${templateImport}\nimport AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'`;
    if (hasTreatments) cleanImports += `\nimport { getTreatmentBySlug, getAllTreatments, TREATMENT_DATA } from '@/lib/data/treatment-data'`;
    if (hasPricing) cleanImports += `\nimport { PRICING_DATA } from '@/lib/data/pricing-data'`;
    if (hasSeed) cleanImports += `\nimport { SEED_DATA } from '@/lib/data/seed-data'`;
    if (hasSiteConfig) cleanImports += `\nimport { siteConfig } from '@/config/site'`;
    cleanImports += `\nimport { ${icons.join(', ')} } from 'lucide-react'\n`;

    content = content.replace(/import\s+React\s+from\s+['"]react['"]/, '').trim();
    
    // Ensure we don't duplicate Template import if it was elsewhere
    if (isDept) {
        content = content.replace(/import\s+\{\s*DepartmentTemplate\s*\}\s+from\s+['"]@\/components\/healthcare\/DepartmentTemplate['"]\s*/gm, '');
    }
    content = cleanImports + content;

    // 3. Title Extraction
    const titleMatch = content.match(/title="([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : 'Procedure';
    const cleanTitle = title.replace(/ in Vellore.*/g, '');

    // 4. Description & QuickFacts Hardening
    content = content.replace(/description=\{([\s\S]+?)\}\s+quickFacts/m, `description={
                <article>
                    <p className="text-lg leading-relaxed">
                        <strong>${cleanTitle}</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
                    </p>
                </article>
            }\n            quickFacts`);

    content = content.replace(/quickFacts=\{\[\s*([\s\S]+?)\s*\]\}/, `quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}`);

    // 5. Injection
    if (!content.includes('<AioKnowledgeBlock')) {
        const knowledgeBlock = `
                {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
                <AioKnowledgeBlock 
                    title="Quick Facts: ${cleanTitle} in Vellore"
                    items={[
                        { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
                        { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
                        { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
                        { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
                    ]}
                />

                <article className="space-y-12">`;

        // Flexible detection for different structures
        const divMatch = content.match(/<div className="space-y-(12|16|20)">/);
        if (divMatch) {
            content = content.replace(divMatch[0], divMatch[0] + knowledgeBlock);
            
            // Safe closing
            if (content.match(/fullDescription=\{/)) {
                content = content.replace(/<\/div>\s*\}\s*\/>/m, '</article>\n                </div>\n            }\n        />');
            } else {
                content = content.replace(/<\/div>\s*<\/SubServiceTemplate>/m, '</article>\n            </div>\n        </SubServiceTemplate>');
            }
        }
    }

    // 6. Headers
    content = content.replace(/Why Choose Indira for ([^?]+)\?/g, 'What are the Benefits of $1 Surgery?');
    content = content.replace(/Advanced ([^I]+) Infrastructure/g, 'How Does $1 Treatment Work?');

    await fs.writeFile(filePath, content, 'utf-8');
}

async function walk(dir) {
    const files = await fs.readdir(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = await fs.stat(fullPath);
        if (stat.isDirectory()) {
            await walk(fullPath);
        } else if (file === 'page.tsx') {
            await hardenPage(fullPath).catch(e => console.error(`Error on ${fullPath}:`, e));
        }
    }
}

console.log('🔥 Final AEO Hardening Pass...');
walk(ROOT_DIR).then(() => {
    console.log('🚀 Mass AEO Hardening Success.');
});
