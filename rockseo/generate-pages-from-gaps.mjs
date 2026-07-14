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
            { name: 'Laser Piles Treatment', slug: 'laser-piles-treatment', icon: 'Zap', duration: '30 Mins', hospitalStay: 'Daycare (6 hrs)', recoveryTime: '48 Hours', anesthesia: 'Local/Spinal' },
            { name: 'Laser Fistula Surgery (FiLaC)', slug: 'laser-fistula-surgery-filac', icon: 'Shield', duration: '45 Mins', hospitalStay: '24 Hours', recoveryTime: '72 Hours', anesthesia: 'Spinal' },
            { name: 'Laser Fissure Treatment', slug: 'laser-fissure-treatment', icon: 'Sparkles', duration: '20 Mins', hospitalStay: 'Daycare (4 hrs)', recoveryTime: '24 Hours', anesthesia: 'Local/Spinal' },
            { name: 'Laser Pilonidal Sinus Surgery (SiLaC)', slug: 'laser-pilonidal-sinus-surgery', icon: 'Siren', duration: '30 Mins', hospitalStay: 'Daycare (6 hrs)', recoveryTime: '48 Hours', anesthesia: 'Local/Spinal' }
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
    },
    {
        category: 'General Surgery',
        slug: 'general-surgery',
        treatments: [
            { name: 'Laparoscopic Cholecystectomy', slug: 'laparoscopic-cholecystectomy-gallbladder-removal', icon: 'Zap', duration: '45-60 Mins', hospitalStay: '24 Hours', recoveryTime: '3-5 Days', anesthesia: 'General' },
            { name: 'Laparoscopic Hernia Repair', slug: 'laparoscopic-hernia-repair-surgery', icon: 'Shield', duration: '30-45 Mins', hospitalStay: '24 Hours', recoveryTime: '2-3 Days', anesthesia: 'Spinal/General' },
            { name: 'Emergency Appendectomy', slug: 'emergency-laparoscopic-appendectomy', icon: 'Clock', duration: '45 Mins', hospitalStay: '24-48 Hours', recoveryTime: '1 Week', anesthesia: 'General' },
            { name: 'Laser Varicose Veins', slug: 'varicose-veins-laser-treatment', icon: 'Zap', duration: '30 Mins', hospitalStay: 'Daycare (6 hrs)', recoveryTime: '48 Hours', anesthesia: 'Local/Spinal' },
            { name: 'Diabetic Foot Care', slug: 'diabetic-foot-ulcer-care', icon: 'Activity', duration: 'Varies', hospitalStay: 'As needed', recoveryTime: 'Varies', anesthesia: 'Local' },
            { name: 'Lipoma Removal', slug: 'lipoma-excision-surgery', icon: 'Sparkles', duration: '15-20 Mins', hospitalStay: 'Daycare (2 hrs)', recoveryTime: '24 Hours', anesthesia: 'Local' },
            { name: 'Cyst Excision', slug: 'sebaceous-cyst-removal', icon: 'Target', duration: '15 Mins', hospitalStay: 'Daycare (1 hr)', recoveryTime: '12 Hours', anesthesia: 'Local' },
            { name: 'Thyroid Surgery', slug: 'thyroid-and-endocrine-surgery', icon: 'Microscope', duration: '90 Mins', hospitalStay: '48 Hours', recoveryTime: '1-2 Weeks', anesthesia: 'General' },
            { name: 'Breast Surgery', slug: 'breast-surgery-and-oncology', icon: 'Shield', duration: '60 Mins', hospitalStay: '24-48 Hours', recoveryTime: '1-2 Weeks', anesthesia: 'General' },
            { name: 'Trauma & Emergency', slug: 'trauma-and-emergency-care', icon: 'Siren', duration: 'Emergency', hospitalStay: 'Varies', recoveryTime: 'Varies', anesthesia: 'General' }
        ]
    }
];

function generatePageTemplate(treatment, silo) {
    const eyebrow = `Elite ${silo.category} Solutions`;
    
    const pagePath = `/doctor/near-me/treat/${silo.slug}/${treatment.slug}`;
    const metaTitle = `${treatment.name} in Vellore | Indira Super Speciality Hospital`;
    const metaDescription = `${treatment.name} at Indira Super Speciality Hospital, Vellore. NABH-accredited ${silo.category.toLowerCase()} care with advanced technology, experienced specialists, and fast recovery. Book a consultation today.`;

    return `import React from 'react'
import type { Metadata } from 'next'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Zap, Shield, Clock, UserCheck, CheckCircle2, Info, Star, MapPin } from 'lucide-react'

export const metadata: Metadata = {
    title: ${JSON.stringify(metaTitle)},
    description: ${JSON.stringify(metaDescription)},
    alternates: {
        canonical: ${JSON.stringify(pagePath)},
    },
    openGraph: {
        title: ${JSON.stringify(metaTitle)},
        description: ${JSON.stringify(metaDescription)},
        url: ${JSON.stringify(pagePath)},
        type: 'website',
    },
}

export default function SEOPage() {
    return (
        <SubServiceTemplate
            title="${treatment.name} in Vellore"
            eyebrow="${eyebrow}"
            departmentName="${silo.category}"
            departmentSlug="${silo.slug}"
            description={
                <article>
                    <p className="text-lg leading-relaxed">
                        <strong>${treatment.name}</strong> at Indira Super Speciality Hospital, Vellore, is a precision-driven clinical procedure. Our surgical experts utilize advanced medical protocols to ensure <strong>painless outcomes</strong> and <strong>accelerated patient recovery</strong> for all procedures.
                    </p>
                </article>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            reviews={{
                entityType: 'service',
                entityName: '${treatment.name}',
                entitySlug: '${treatment.slug}'
            }}
            showAvailabilityCTA={true}
            showVideoBank={true}
            duration="${treatment.duration || '30-45 Mins'}"
            hospitalStay="${treatment.hospitalStay || 'Daycare (6 hrs)'}"
            recoveryTime="${treatment.recoveryTime || '48 Hours'}"
            anesthesia="${treatment.anesthesia || 'Local/Spinal'}"
            showComparison={true}
        >
            <div className="space-y-16">
                {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
                <AioKnowledgeBlock 
                    title="Quick Facts: ${treatment.name} in Vellore"
                    items={[
                        { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
                        { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
                        { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
                        { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
                    ]}
                />

                <article className="space-y-12">
                    <section>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">What are the Benefits of ${treatment.name} Surgery?</h2>
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
                        <h2 className="text-3xl font-black text-white mb-6">How Does ${silo.category} Treatment Work?</h2>
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
                </article>
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
