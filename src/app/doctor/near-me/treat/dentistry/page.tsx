'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { Smile, Shield, Zap, Award, Clock, Users, Microscope, Heart, Sparkles, Activity } from "lucide-react"

export default function DentistryDepartmentPage() {
    const dentalDoctors = [
        {
            name: "Dr. Rockson Samuel",
            specialty: "Chief Dentist - Cosmetic & Oral Surgery",
            image: "/images/doctors/dr-rockson-samuel.jpg",
            slug: "dr-rockson-samuel"
        },
        {
            name: "Dr. T. S. Dhanushmi",
            specialty: "Specialist Dentist - Restorative & Preventive",
            image: "/images/doctors/dr-dhanushmi.jpg",
            slug: "dr-t-s-dhanushmi"
        }
    ]

    const quickFacts = [
        { label: 'Technology', value: 'Modern Dental Hub', icon: 'Sparkles' },
        { label: 'Procedures', value: 'RCT & Implants', icon: 'Zap' },
        { label: 'Sterility', value: '100% Autoclave', icon: 'Shield' },
        { label: 'Care Focus', value: 'Painless Dentistry', icon: 'Clock' },
    ]

    return (
        <DepartmentTemplate
            title="Elite Dentistry & Smile Design Hub"
            slug="dentistry"
            shortDescription="Transforming smiles through advanced Implantology, precision Root Canal treatments, and high-definition Cosmetic Veneers."
            fullDescription={`
                <div className="dentistry-pillar-content space-y-20 text-left">
                    {/* ── 1. The Art & Science of a Perfect Smile ───────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-primary italic border-l-8 border-cyan-600 pl-6 mb-8 uppercase tracking-tight">
                            The Smile Revolution: Advanced Dental Sciences
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <p>
                                The **Department of Dentistry & Oral-Maxillofacial Bio-Science** at Indira Super Speciality Hospital is where clinical precision meets aesthetic artistry. We believe a smile is more than just teeth—it is your identity. Our mission is to restore this identity through **Painless Interventions**, **Biocompatible Implants**, and **Digital Smile Mapping.**
                            </p>
                            <p className="mt-4">
                                Led by **Dr. Rockson Samuel**, our facility is equipped with modern ergonomic chairs, low-radiation digital radiography, and a 100% sterile environment. From managing complex wisdom tooth impactions to delivering high-definition ceramic veneers, we provide **Tertiary Dental Solutions** that prioritize your comfort and confidence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose">
                            <div className="p-8 bg-cyan-50 dark:bg-cyan-900/20 rounded-[2.5rem] border border-cyan-100 dark:border-cyan-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-cyan-900 dark:text-cyan-200 mb-4 flex items-center gap-2 italic">
                                    Precision Implantology
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    "The Permanent Replacement." We utilize high-grade Titanium implants with Osseointegration precision, restoring your bite force and facial structure instantly.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-cyan-100 dark:border-cyan-700">Lifetime Stability</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-cyan-100 dark:border-cyan-700">Bone Preservation</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-cyan-300 mb-4 italic uppercase tracking-tighter">Single-Visit Root Canal</h4>
                                <p className="text-cyan-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    Say goodbye to pain. Our automated rotary endodontics allows for efficient, painless nerve-root cleaning in a single sitting.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-cyan-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Micro-Precision Apex Locators</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-cyan-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Digital Canal Mapping</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialized Dental Verticals ─────────────────────── */}
                    <section className="dentistry-verticals space-y-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Smile Specialization Pillars</h2>
                            <div className="h-1 w-24 bg-cyan-600 dark:bg-cyan-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Vertical 1: Aesthetics */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Aesthetics</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Advanced "Hollywood Smile" designs using E-Max veneers, laser teeth whitening, and gum contouring.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["E-Max Veneers", "Gopal Gum Reshaping", "Laser Whitening", "Invisalign/Braces"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 2: Oral Surgery */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between border-b-4 border-cyan-600">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Oral Surgery</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">High-precision management of impacted wisdom teeth, jaw fractures, and cystic lesions.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Wisdom Tooth Ext.", "Fracture Fixation", "Sinus Lift Support", "Bone Grafting"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px) font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 3: Restorative Hub */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Restoration</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">High-durability Zirconia crowns, bridges, and flexible dentures for restored functional chewing.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Zirconia Crowns", "Single-Visit RCT", "Bridge Work", "Pediatric Dentistry"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px) font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── 3. Educational Deep-Dive: The RCT Evolution ─────────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-slate-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-cyan-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-cyan-900 dark:text-cyan-400 font-black uppercase text-3xl tracking-tighter not-italic font-primary italic">Clinical Insight: RCT Without the Pain</h3>
                        <p>
                            Historically, a Root Canal Treatment (RCT) was a multiple-visit process feared by patients. Modern **Endodontic Evolution** has changed this. By using high-torque rotary motors and electronic apex locators, we can clean, shape, and fill the root canals in just one hour.
                        </p>
                        <p className="mt-4">
                            At Indira Hospital, our **Endo-Protocol** ensures:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "Precision", v: "Apex Mapping" },
                                { k: "Sterility", v: "Class B Protocol" },
                                { k: "Time", v: "Single-Sit Done" },
                                { k: "Durability", v: "Fiber Posts" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-cyan-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-cyan-600">
                                    <p className="text-4xl font-black text-cyan-600 mb-2 font-primary italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic">
                            By utilizing high-magnification dentistry, we protect more of your natural tooth structure, ensuring your teeth remain functional and beautiful for decades to come.
                        </p>
                    </section>

                    {/* ── 4. Dental FAQs: The Clinical Deep-Dive ─────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-primary uppercase tracking-tighter text-cyan-400 text-left">
                           Dentistry Excellence: Clinical FAQ Hub
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "Are dental implants better than bridges?",
                                    a: "Clinically, yes. Implants do not require grinding of adjacent healthy teeth (which bridges do). They stimulate the jawbone and prevent bone loss, offering a lifetime solution compared to the 10-15 year lifespan of a bridge."
                                },
                                {
                                    q: "How many sittings are required for a Root Canal?",
                                    a: "With our advanced rotary system, 90% of RCT cases are completed in a **Single Sitting** of 45-60 minutes. Complex infections or redo-RCTs may require a second visit to ensure complete sterilization."
                                },
                                {
                                    q: "Is teeth whitening safe for enamel?",
                                    a: "Yes. Professional in-office whitening uses pH-neutral gels and LED activation to lift deep stains without damaging the enamel structure. Over-the-counter kits, however, can be abrasive and should be avoided."
                                },
                                {
                                    q: "At what age should a child have their first dental visit?",
                                    a: "As soon as the first tooth appears, or by their first birthday. Early visits prevent 'Nursing Bottle Decay' and help children build a positive, fear-free relationship with their dentist."
                                },
                                {
                                    q: "What is Invisalign, and is it better than braces?",
                                    a: "Invisalign uses clear, removable aligners to straighten teeth. They are invisible, more comfortable than metal braces, and allow for better oral hygiene as you can remove them while eating and brushing."
                                },
                                {
                                    q: "Can bleeding gums be treatedpermanently?",
                                    a: "Certainly. Bleeding is a sign of Gingivitis (gum inflammation). A thorough **Ultrasonic Scaling** followed by specialized gum therapy can restore health. If left untreated, it progresses to bone loss (Periodontitis)."
                                },
                                {
                                    q: "What is a Zirconia Crown?",
                                    a: "Zirconia is a metal-free ceramic that is incredibly strong and translucent, mimicking natural tooth enamel. It is biocompatible, meaning it won't cause gray lines near the gums, unlike traditional metal-based crowns."
                                },
                                {
                                    q: "Why do wisdom teeth need extraction?",
                                    a: "Most jaws don't have enough space for wisdom teeth, causing them to become 'impacted' (stuck). This leads to severe pain, facial swelling, and damage to the adjacent 17th molar. Early extraction is a safe, painless day-care procedure."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-cyan-400 transition-colors text-lg">
                                        <span className="text-cyan-500 text-2xl font-serif">Q.</span>
                                        <span>{faq.q}</span>
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed antialiased pl-8 font-medium font-primary">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            `}
            procedures={[
                { name: "Single-Visit Root Canal", link: "/doctor/near-me/treat/dentistry" },
                { name: "Laser Teeth Whitening", link: "/doctor/near-me/treat/dentistry" },
                { name: "Dental Implant Unit", link: "/doctor/near-me/treat/dentistry" },
                { name: "Invisible Aligners Hub", link: "/doctor/near-me/treat/dentistry" },
                { name: "Pediatric Dental Clinic", link: "/doctor/near-me/treat/dentistry" },
                { name: "Gum Surgery & Laser Hub", link: "/doctor/near-me/treat/dentistry" }
            ]}
            relatedDoctors={dentalDoctors}
            quickFacts={quickFacts}
        />
    )
}
