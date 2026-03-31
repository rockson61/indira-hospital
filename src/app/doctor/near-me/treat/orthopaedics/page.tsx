'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { Bone, Shield, Zap, Award, Clock, Users, Microscope, Heart, Activity, CheckCircle2 } from "lucide-react"
import { SEED_DATA } from '@/lib/data/seed-data'

export default function OrthopaedicsDepartmentPage() {
    const orthoDoctors = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.includes('Orthopaedics') || dr.department === 'Orthopaedics' || dr.specialties?.includes('Orthopaedic Surgery')
    );

    const quickFacts = [
        { label: 'Technique', value: 'Robotic Precision', icon: 'Zap' },
        { label: 'Care Type', value: 'Muscle-Sparing', icon: 'Shield' },
        { label: 'Emergency', value: '24/7 Level 1 Trauma', icon: 'Clock' },
        { label: 'Experience', value: '10,000+ Case Hub', icon: 'Award' },
    ]

    return (
        <DepartmentTemplate
            title="Elite Orthopaedics & Joint Replacement Hub"
            slug="orthopaedics"
            shortDescription="Advanced Bone & Joint Sciences in Vellore. We specialize in Robotic Knee Replacement, HD Sports Arthroscopy, and Complex Spinal Trauma reconstruction."
            fullDescription={`
                <div className="orthopaedics-pillar-content space-y-20 text-left">
                    {/* ── 1. The Mobility Revolution ───────────────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-primary italic border-l-8 border-blue-600 pl-6 mb-8 uppercase tracking-tight">
                            Regain Your Reach: The Golden Standard in Orthopaedic Surgery
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <p>
                                Mobility is the hallmark of independence. The **Department of Orthopaedics & Joint Sciences** at Indira Super Speciality Hospital is a regional center of excellence dedicated to the science of movement. We blend **Robotic Precision** with **Minimal Traumatic Access** to treat everything from age-related joint degeneration to catastrophic sports injuries.
                            </p>
                            <p className="mt-4">
                                Our facility is a "High-Volume Joint Replacement Center," utilizing advanced computer-assisted navigation and 3D preoperative planning. Whether you are seeking a **Robotic Knee Replacement** or complex **Spinal Decompression**, our clinical pathways are designed for **Anatomic Restoration** and **Rapid Milestone Recovery.**
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose">
                            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[2.5rem] border border-blue-100 dark:border-blue-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4 flex items-center gap-2 italic">
                                    Robotic Joint Replacement
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    Precision is measured in microns. Our robotic systems ensure perfect implant alignment, virtually eliminating the risk of dislocation and ensuring a "Natural Feel" post-surgery.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-blue-100 dark:border-blue-700">Digital Alignment</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-blue-100 dark:border-blue-700">Extended Wear Life</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-blue-300 mb-4 italic uppercase tracking-tighter">Sports Arthroscopy Unit</h4>
                                <p className="text-blue-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    Reclaiming the field. We perform **HD Arthroscopic (Keyhole)** ligament repairs (ACL/PCL/Meniscus) that minimize scarring and accelerate your return to high-performance sports.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Rapid Recovery Lab</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Nerve-Sparing Technique</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialized Orthopaedic Verticals ────────────────── */}
                    <section className="ortho-verticals space-y-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Orthopaedic Excellence Domains</h2>
                            <div className="h-1 w-24 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Vertical 1: Arthroplasty */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Arthroplasty</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Advanced joint replacement for hips, knees, and shoulders using muscle-sparing approaches and gold-standard implants.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Total Knee (TKR)", "Total Hip (THR)", "Shoulder Replacement", "Revision Arthroplasty"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 2: Spine Surgery */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between border-b-4 border-blue-600">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Spine & Trauma</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">High-precision management of spinal fractures, slip discs, and multi-fracture trauma emergencies.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Microdiscectomy", "Spinal Fusion", "Scoliotic Repair", "Pelvic Acetabular Trauma"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px) font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 3: Hand & Micro-Surgery */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Hand & Foot</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Micro-surgical restoration of hand tendons, peripheral nerves, and complex diabetic foot reconstructions.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Tendon Repair", "Nerve Grafting", "Diabetic Offloading", "Flat-Foot Correction"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px) font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── 3. Educational Deep-Dive: Robotic vs. Manual ─────────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-slate-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-blue-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-blue-900 dark:text-blue-400 font-black uppercase text-3xl tracking-tighter not-italic font-primary italic">Clinical Insight: The Robotic Advantage</h3>
                        <p>
                            Orthopaedic surgery is transitioning from "subjective art" to "objective science." In manual knee replacement, the surgeon rely on visual cues and traditional mechanical jigs. In **Robotic-Assisted Surgery**, a 3D digital map of your unique knee is created before the first cut.
                        </p>
                        <p className="mt-4">
                            At Indira Hospital, our **Accuracy Hub** ensuring:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "MICRON", v: "Sub-MM Accuracy" },
                                { k: "NAV", v: "Real-time Tracking" },
                                { k: "SAVE", v: "Bone Preservation" },
                                { k: "FAST", v: "Walk in 24 Hours" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-blue-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-blue-600">
                                    <p className="text-4xl font-black text-blue-600 mb-2 font-primary italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic">
                            By utilizing high-precision computer navigation, we ensure that your implant is perfectly balanced, reducing the risk of premature wear and ensuring you walk with a completely natural gait.
                        </p>
                    </section>

                    {/* ── 4. Orthopaedics FAQs: The Clinical Deep-Dive ─────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-primary uppercase tracking-tighter text-blue-400 text-left">
                           Orthopaedics: Specialist Clinical FAQs
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "What is robotic-assisted knee replacement vs. manual?",
                                    a: "Manual surgery uses standard tools and visual alignment. Robotic surgery uses a 3D digital model of your knee to guide the surgeon's hands, ensuring the bone cuts are accurate to within 0.5mm. This results in better balance, less pain, and a more natural feel to the new joint."
                                },
                                {
                                    q: "How soon can I walk after a Total Knee Replacement (TKR)?",
                                    a: "With our 'Rapid Recovery' protocols and muscle-sparing techniques, most patients are able to take their first assisted steps within 24 hours of surgery. Full independence with a walker is usually achieved by Day 3."
                                },
                                {
                                    q: "Is Keyhole (Arthroscopic) surgery better for sports injuries?",
                                    a: "Yes. Arthroscopy involves 2-3 tiny incisions (less than 1cm) through which a camera and micro-tools are passed. It avoids cutting major muscles, leading to near-zero blood loss and a much faster return to training compared to open surgery."
                                },
                                {
                                    q: "What are the common signs of a slip disc in the spine?",
                                    a: "Persistent low back pain that 'radiates' down the leg (Sciatica), numbness in the foot, or weakness in the toes are classic signs. While 80% of cases heal with physical therapy, persistent symptoms may require micro-discectomy."
                                },
                                {
                                    q: "Is Osteoporosis reversible after menopause?",
                                    a: "It can be effectively managed. Through targeted bone-remodeling drugs (Bisphosphonates/Biologics) and customized weight-bearing exercises, we can increase bone mineral density and significantly reduce fracture risk."
                                },
                                {
                                    q: "Does a pelvic fracture always require major surgery?",
                                    a: "Not always. Minor fractures can heal with bed rest. However, displaced pelvic injuries are high-stakes medical emergencies that require stabilization with specialized titanium plates (MIPPO technique) to allow for mobilization."
                                },
                                {
                                    q: "At what age should one consider a joint replacement?",
                                    a: "Age is secondary to 'Quality of Life.' If pain prevents you from sleeping, walking 50 meters, or performing daily activities, and conservative treatments have failed, you are a candidate, regardless of whether you are 55 or 75."
                                },
                                {
                                    q: "Why is a dedicated Orthopaedic OT important?",
                                    a: "Orthopaedic implants are extremely sensitive to infection. A dedicated 'Laminar Flow' OT with HEPA filtration ensures the cleanest possible air environment, reducing the risk of implant infection to less than 1%."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-blue-400 transition-colors text-lg">
                                        <span className="text-blue-500 text-2xl font-serif">Q.</span>
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
                { name: "Robotic Knee Replacement", link: "/doctor/near-me/treat/orthopaedics" },
                { name: "Arthroscopic ACL Repair", link: "/doctor/near-me/treat/orthopaedics" },
                { name: "Microscopic Spine Surgery", link: "/doctor/near-me/treat/orthopaedics" },
                { name: "Total Hip Reconstruction", link: "/doctor/near-me/treat/orthopaedics" },
                { name: "Complex Trauma Fixation", link: "/doctor/near-me/treat/orthopaedics" },
                { name: "Pediatric Ortho Unit", link: "/doctor/near-me/treat/orthopaedics" }
            ]}
            relatedDoctors={orthoDoctors}
            quickFacts={quickFacts}
        />
    )
}
