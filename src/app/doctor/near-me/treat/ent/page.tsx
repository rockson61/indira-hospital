'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { 
    Activity, 
    Shield, 
    Info, 
    Zap, 
    Clock, 
    Award, 
    CheckCircle2, 
    History, 
    HeartPulse, 
    Sparkles, 
    Scale, 
    GraduationCap, 
    Microscope, 
    HelpCircle,
    Mic,
    Ear,
    Wind,
    MessageSquare,
    Search
} from 'lucide-react'
import { Stethoscope, ClipboardCheck, Users, Scissors } from 'lucide-react'
import { SEED_DATA } from '@/lib/data/seed-data'
import { TREATMENT_DATA } from '@/lib/data/treatment-data'
import Link from 'next/link'

export default function ENTPillarPage() {
    // Filter ENT specialists
    const entDoctors = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.includes('ENT') || dr.department === 'ENT'
    );

    // Filter ENT treatments
    const entTreatments = TREATMENT_DATA.filter(t => t.parentServiceSlug === 'ent');

    return (
        <DepartmentTemplate
            title="ENT, Head & Neck Centre of Excellence in Vellore"
            slug="ent"
            shortDescription="Advanced Microsurgery, HD Endoscopy, and Coblation technology for Ear, Nose, and Throat care. Led by senior specialists for precision outcomes."
            fullDescription=""
            procedures={entTreatments.map(t => ({ name: t.title, link: `/doctor/near-me/treat/ent/${t.slug}` }))}
            relatedDoctors={entDoctors}
            quickFacts={[
                { label: 'Technique', value: 'Microsurgical & Endoscopic', icon: 'Zap' },
                { label: 'Technology', value: 'Coblation II', icon: 'Shield' },
                { label: 'Experience', value: 'Lead Consultant HOD', icon: 'Award' },
                { label: 'Availability', value: '24/7 Emergencies', icon: 'Clock' }
            ]}
        >
            <div className="space-y-16">
                {/* Intro Section */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <p>
                        The **ENT (Otolaryngology) Department** at Indira Super Speciality Hospital stands at the forefront of surgical innovation in North Tamil Nadu. We specialize in the diagnosis and surgical management of diverse conditions ranging from chronic sinusitis and hearing loss to complex thyroid and salivary gland tumors.
                    </p>
                    <p>
                        Under the expert guidance of **Dr. Gayathri**, our center integrates high-resolution microscopy and 4K endoscopy to perform life-changing microsurgeries. We are one of the few centers in the region to offer **Coblation-assisted ENT surgeries**, ensuring a pain-free experience for both pediatric and adult patients.
                    </p>
                </div>

                {/* Sub-Speciality Grid */}
                <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 font-primary">
                        <Activity className="text-[#005f73]" />
                        Our ENT Clinical Pillars
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Otology (Ear Care)",
                                icon: Ear,
                                desc: "Precision microscopic surgery for ear drum repair (Tympanoplasty), hearing loss, and chronic ear discharge (Mastoidectomy).",
                                slug: "tympanoplasty-and-mastoidectomy",
                                color: "blue"
                            },
                            {
                                title: "Rhinology (Nasal)",
                                icon: Wind,
                                desc: "Advanced Endoscopic Sinus Surgery (FESS) for chronic sinusitis, polyps, and Septoplasty for airway correction.",
                                slug: "functional-endoscopic-sinus-surgery-fess",
                                color: "emerald"
                            },
                            {
                                title: "Laryngology (Voice)",
                                icon: MessageSquare,
                                desc: "Phonosurgery for voice polyps, nodules, and chronic hoarseness using endo-laryngeal microscopic techniques.",
                                slug: "microlaryngeal-surgery-voice-care",
                                color: "fuchsia"
                            }
                        ].map((pillar, idx) => (
                            <Link 
                                href={`/doctor/near-me/treat/ent/${pillar.slug}`}
                                key={idx}
                                className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`inline-flex p-4 rounded-2xl bg-${pillar.color}-50 dark:bg-${pillar.color}-900/20 text-${pillar.color}-600 dark:text-${pillar.color}-400 mb-6 group-hover:scale-110 transition-transform`}>
                                    <pillar.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-primary">{pillar.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    {pillar.desc}
                                </p>
                                <div className="flex items-center text-sm font-bold text-[#005f73] dark:text-fuchsia-400">
                                    Explore Treatments <Sparkles className="ml-2 w-4 h-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#B794F4]/10 blur-[100px] -mr-32 -mt-32" />
                    
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3 font-primary">
                        <HelpCircle className="text-[#005f73]" />
                        ENT Mastery: Frequently Asked Questions
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                        {[
                            {
                                q: "When should I see an ENT specialist?",
                                a: "You should consult an ENT if you experience persistent ear pain, recurring sinus infections, chronic hoarseness, sudden hearing loss, or swellings in the neck."
                            },
                            {
                                q: "What are the advantages of Coblation surgery?",
                                a: "Coblation uses low-temperature energy to dissolve tissue with minimal damage to surrounding areas, leading to much less pain and faster recovery compared to traditional techniques."
                            },
                            {
                                q: "Can FESS be performed without external scars?",
                                a: "Yes, Functional Endoscopic Sinus Surgery is entirely internal. No external cuts are made as the endoscopes go through the natural nasal openings."
                            },
                            {
                                q: "Is thyroid surgery handled by ENT specialists?",
                                a: "Yes, ENT surgeons are specialized in Head & Neck surgery, giving them expertise in the delicate nerves of the neck associated with the thyroid and salivary glands."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                                    <Info className="w-5 h-5 text-[#005f73] mt-0.5 shrink-0" />
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed antialiased">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DepartmentTemplate>
    );
}
