#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Map of directory name to [display name, URL slug]
const DEPT_MAP = {
    'cardiology': ['Cardiology', 'cardiology'],
    'gastroenterology': ['Gastroenterology', 'gastroenterology'],
    'general-surgery': ['General Surgery', 'general-surgery'],
    'nephrology': ['Nephrology', 'nephrology'],
    'neurology': ['Neurology', 'neurology'],
    'obstetrics-gynaecology': ['Obstetrics & Gynaecology', 'obstetrics-gynaecology'],
    'oncology': ['Oncology', 'oncology'],
    'orthopaedics': ['Orthopaedics', 'orthopaedics'],
    'urology': ['Urology', 'urology'],
    'ent': ['ENT', 'ent'],
    'dermatology': ['Dermatology & Cosmetology', 'dermatology'],
    'paediatrics': ['Paediatrics', 'paediatrics'],
    'psychiatry': ['Psychiatry', 'psychiatry'],
};

const SERVICES_DIR = '/Users/rockson61/Downloads/Indira Hospital/src/app/services';

let fixed = 0;
let skipped = 0;

const depts = fs.readdirSync(SERVICES_DIR).filter(d =>
    fs.statSync(path.join(SERVICES_DIR, d)).isDirectory()
);

for (const dept of depts) {
    const deptPath = path.join(SERVICES_DIR, dept);
    const info = DEPT_MAP[dept];
    if (!info) {
        console.log(`SKIP (no mapping): ${dept}`);
        continue;
    }
    const [deptDisplayName, deptSlug] = info;

    const subs = fs.readdirSync(deptPath).filter(d =>
        fs.statSync(path.join(deptPath, d)).isDirectory()
    );

    for (const sub of subs) {
        const pageFile = path.join(deptPath, sub, 'page.tsx');
        if (!fs.existsSync(pageFile)) continue;

        let content = fs.readFileSync(pageFile, 'utf8');

        // Already has departmentName? skip
        if (content.includes('departmentName=')) {
            console.log(`SKIP (already has departmentName): ${dept}/${sub}`);
            skipped++;
            continue;
        }

        // Find <SubServiceTemplate and inject after it
        const marker = '<SubServiceTemplate';
        const idx = content.indexOf(marker);
        if (idx === -1) {
            console.log(`SKIP (no SubServiceTemplate): ${dept}/${sub}`);
            skipped++;
            continue;
        }

        // Insert departmentName and departmentSlug right after <SubServiceTemplate
        const insertAfter = idx + marker.length;
        const propsStr = `\n      departmentName="${deptDisplayName}"\n      departmentSlug="${deptSlug}"`;
        content = content.slice(0, insertAfter) + propsStr + content.slice(insertAfter);

        fs.writeFileSync(pageFile, content, 'utf8');
        console.log(`FIXED: ${dept}/${sub}`);
        fixed++;
    }
}

console.log(`\nDone: ${fixed} fixed, ${skipped} skipped`);
