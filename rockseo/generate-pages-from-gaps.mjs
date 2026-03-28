import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_DIR = path.join(__dirname, '../src/app/doctor/near-me/treat');

// Elite Surgical Silos Taxonomy
const SURGICAL_SILOS = [
    {
        category: 'Proctology',
        slug: 'proctology',
        treatments: [
            { name: 'Laser Piles Treatment', slug: 'laser-piles-treatment', icon: 'Zap' },
            { name: 'Laser Fistula Surgery (FiLaC)', slug: 'laser-fistula-surgery-filac', icon: 'Shield' },
            { name: 'Laser Fissure Treatment', slug: 'laser-fissure-treatment', icon: 'Sparkles' },
            { name: 'Laser Pilonidal Sinus Surgery (SiLaC)', slug: 'laser-pilonidal-sinus-surgery', icon: 'Siren' }
        ]
    },
    {
        category: 'Orthopaedics',
        slug: 'orthopaedics',
        treatments: [
            { name: 'Robotic Knee Replacement', slug: 'robotic-knee-replacement', icon: 'Activity' },
            { name: 'Total Hip Replacement', slug: 'total-hip-replacement', icon: 'Shield' },
            { name: 'ACL Reconstruction Surgery', slug: 'acl-reconstruction-surgery', icon: 'Zap' },
            { name: 'Advanced Fracture Care', slug: 'advanced-fracture-care', icon: 'Siren' }
        ]
    },
    {
        category: 'Ophthalmology',
        slug: 'ophthalmology',
        treatments: [
            { name: 'Micro-Incision Cataract Surgery (MICS)', slug: 'cataract-surgery-mics', icon: 'Eye' },
            { name: 'LASIK Eye Surgery', slug: 'lasik-eye-surgery', icon: 'Zap' },
            { name: 'Glaucoma Management', slug: 'glaucoma-management', icon: 'Shield' },
            { name: 'Diabetic Retinopathy Treatment', slug: 'diabetic-retinopathy-treatment', icon: 'Microscope' }
        ]
    },
    {
        category: 'Cardiology',
        slug: 'cardiology',
        treatments: [
            { name: 'Angioplasty & Stenting', slug: 'angioplasty-stenting', icon: 'Heart' },
            { name: 'Permanent Pacemaker Implantation', slug: 'pacemaker-implantation', icon: 'Zap' },
            { name: 'Interventional Cardiology', slug: 'interventional-cardiology', icon: 'Activity' },
            { name: 'Heart Valve Repair', slug: 'heart-valve-repair', icon: 'Shield' }
        ]
    }
];

function generatePageTemplate(treatment, silo) {
    const title = `${treatment.name} in Vellore | Best ${silo.category} Surgeon`;
    const eyebrow = `Elite ${silo.category} Solutions`;
    const description = `Indira Super Speciality Hospital offers world-class ${treatment.name} in Vellore, Tamil Nadu. Our expert ${silo.category.toLowerCase()} team utilizes advanced minimally invasive technology for faster recovery and superior clinical outcomes.`;
    
    return `'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'

export default function SEOPage() {
    return (
        <SubServiceTemplate
            title="${treatment.name} in Vellore"
            eyebrow="${eyebrow}"
            departmentName="${silo.category}"
            departmentSlug="${silo.slug}"
            description={
                <>
                    <p>
                        Searching for the <strong>best ${treatment.name.toLowerCase()} in Vellore</strong>? Indira Super Speciality Hospital is a center of excellence for advanced ${silo.category.toLowerCase()} care, providing precision-driven surgical solutions with a focus on patient safety and rapid healing.
                    </p>
                    <p className="mt-4">
                        Our facility is equipped with state-of-the-art diagnostic and surgical infrastructure, including high-definition imaging and modular OTs, ensuring that every patient receives international-standard medical care right here in Tamil Nadu.
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: 'Advanced', icon: '${treatment.icon}' },
                { label: 'Care Type', value: 'Surgical', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            reviews={{
                entityType: 'service',
                entityName: '${treatment.name}',
                entitySlug: '${treatment.slug}'
            }}
            showAvailabilityCTA={true}
            showVideoBank={true}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Indira for ${treatment.name}?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        At Indira Hospital, we combine decades of surgical expertise with the latest medical breakthroughs. Our ${silo.category.toLowerCase()} specialists are pioneers in minimally invasive techniques, ensuring:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 mt-8">
                        {[
                            'NABH Accredited Safety Standards',
                            'Expert Senior Surgeons',
                            'Modern Diagnostic Imaging',
                            'Transparent & Affordable Pricing',
                            'Comprehensive Post-Operative Care',
                            '24/7 Emergency Support'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-6 h-6 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 text-xs font-bold">✓</div>
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="bg-slate-900 rounded-[3rem] p-12 text-white">
                    <h2 className="text-3xl font-bold mb-6">Advanced ${silo.category} Infrastructure</h2>
                    <p className="text-fuchsia-200/80 text-lg mb-8">
                        Our hospital is equipped with high-end medical technology to support complex ${silo.category.toLowerCase()} procedures, reducing surgical time and enhancing precision.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'High-Def Imaging', desc: 'Precision diagnosis with 128-Slice CT & 3T MRI.' },
                            { title: 'Modular OTs', desc: 'Infection-free surgical environments for safety.' },
                            { title: 'Expert Team', desc: 'Multidisciplinary approach to complex cases.' }
                        ].map((box, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <h3 className="font-bold text-xl mb-2">{box.title}</h3>
                                <p className="text-sm text-fuchsia-100/60">{box.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </SubServiceTemplate>
    )
}
`;
}

async function run() {
    console.log('🚀 RockSEO: Starting hierarchical generation...');
    let count = 0;

    for (const silo of SURGICAL_SILOS) {
        for (const treatment of silo.treatments) {
            const pageDir = path.join(APP_DIR, silo.slug, treatment.slug);
            if (!fs.existsSync(pageDir)) {
                fs.mkdirSync(pageDir, { recursive: true });
            }
            
            const content = generatePageTemplate(treatment, silo);
            fs.writeFileSync(path.join(pageDir, 'page.tsx'), content);
            count++;
        }
    }

    console.log(`✅ RockSEO: Successfully generated ${count} elite landing pages in ${APP_DIR}`);
}

run().catch(console.error);
