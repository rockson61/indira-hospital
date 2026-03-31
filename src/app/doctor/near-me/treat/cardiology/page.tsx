'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { Heart, Shield, Zap, Award, Clock, Users, Microscope, Timer, Activity, CheckCircle2 } from "lucide-react"
import { SEED_DATA } from '@/lib/data/seed-data'

export default function CardiologyDepartmentPage() {
    const cardioDoctors = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.includes('Cardiology') || dr.department === 'Cardiology' || dr.specialties?.includes('Interventional Cardiology')
    );

    const quickFacts = [
        { label: 'Technology', value: 'Flat Panel Cath Lab', icon: 'Zap' },
        { label: 'Emergency', value: '24/7 Primary PCI', icon: 'Timer' },
        { label: 'Care Unit', value: 'Intensive CCU', icon: 'Shield' },
        { label: 'Success', value: '99% STEMI Success', icon: 'Award' },
    ]

    return (
        <DepartmentTemplate
            title="Elite Integrated Cardiac Sciences Hub"
            slug="cardiology"
            shortDescription="Advanced 24/7 Cardiology & Interventional Heart Care in Vellore. We specialize in Emergency Angioplasty (STEMI), Pacemakers, and complex Valve Repairs."
            fullDescription={(
                <div className="cardiology-pillar-content space-y-20 text-left">
                    {/* ── 1. The Clinical Heart of Vellore ───────────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-primary italic border-l-8 border-rose-600 pl-6 mb-8 uppercase tracking-tight text-left">
                            The Heart Authority: Precision Interventional Cardiology
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <p>
                                Your heart is the engine of your life. The <strong>Department of Cardiac Sciences</strong> at Indira Super Speciality Hospital is a premier hub for world-class cardiovascular medicine. We blend <strong>Precision Interventions</strong> with <strong>Advanced Diagnostics</strong> to treat everything from life-threatening heart attacks to complex arrhythmias.
                            </p>
                            <p className="mt-4">
                                Our facility is anchored by a state-of-the-art <strong>Flat Panel Digital Cath Lab</strong>, providing ultra-high-definition imaging for precision-guided coronary interventions. Whether you are seeking a <strong>Primary PCI during the Golden Hour</strong> or evaluation for a permanent pacemaker, our clinical pathways are designed for <strong>Muscle Preservation</strong> and <strong>Rapid Hemodynamic Stabilization.</strong>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
                            <div className="p-8 bg-rose-50 dark:bg-rose-900/20 rounded-[2.5rem] border border-rose-100 dark:border-rose-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-3xl group-hover:bg-rose-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-rose-900 dark:text-rose-200 mb-4 flex items-center gap-2 italic">
                                    The Golden Hour Protocol
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    In a heart attack, "Time is Muscle." Our <strong>STEMI (Heart Attack) Team</strong> is on 24/7 standby, performing life-saving <strong>Primary Angioplasty</strong> within 60 minutes of your arrival.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-rose-100 dark:border-rose-700 shadow-sm">Door-to-Balloon &lt; 60 Min</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-rose-100 dark:border-rose-700 shadow-sm">Dedicated CCU Hub</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-rose-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-rose-300 mb-4 italic uppercase tracking-tighter text-left">Interventional Radiology-Cath Lab</h4>
                                <p className="text-rose-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    Precision visualization beyond human limits. Our 4K digital lab allows for <strong>Radial Access (Wrist)</strong> procedures, resulting in zero bleeding and faster post-op mobilization.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-rose-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> IVUS &amp; FFR Ready</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-rose-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> CTO Recanalization</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialized Cardiac Verticals ─────────────────── */}
                    <section className="cardio-verticals space-y-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Cardiac Excellence Domains</h2>
                            <div className="h-1 w-24 bg-rose-600 dark:bg-rose-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {/* Vertical 1: Interventional */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Interventional Unit</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">High-precision artery clearing using drug-eluting stents (DES) and advanced imaging (IVUS/OCT).</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Primary PCI Angioplasty", "Complex Stenting", "Bifurcation Lesion Unit", "Peripheral Vascular Rep"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 2: Pacing & Heart Failure */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between border-b-4 border-rose-600">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Pacing Hub</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Integrated management of heart rhythm disorders and advanced heart failure stabilization.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Pacemaker Implantation", "ICD (Defibrillator) Unit", "CRT Resynchronization", "LVEF Recovery Program"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 3: Non-Invasive Diagnostics */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Diagnostic Imaging</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Gold-standard detection of valve issues and plaque accumulation before a crisis occurs.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Advanced 4D Echo Lab", "Dobutamine Stress Echo", "Holter 48-Hour Rhythm", "CT Coronary Angio Hub"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── 3. Educational Deep-Dive: Anatomy of a Heart Attack ───────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-slate-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-rose-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-rose-900 dark:text-rose-400 font-black uppercase text-3xl tracking-tighter not-italic font-primary italic text-left">Clinical Insight: Understanding STEMI</h3>
                        <p>
                            A heart attack occurs when a plaque in the artery wall ruptures, causing a blood clot to form. This clot completely blocks blood flow, and the dependent heart muscle begins to die within minutes. This is why cardiologists say <strong>"Time is Muscle."</strong>
                        </p>
                        <p className="mt-4">
                            At Indira Hospital, our <strong>Muscle-Saving Protocols</strong> ensured via:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "DES", v: "High-Grade Stents" },
                                { k: "PCI", v: "Percutaneous Fix" },
                                { k: "IVUS", v: "Intra-Artery View" },
                                { k: "RADIAL", v: "Wrist-Access Hub" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-rose-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-rose-600">
                                    <p className="text-4xl font-black text-rose-600 mb-2 font-primary italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic">
                            By utilizing the Radial Route (Wrist), we ensure near-zero bleeding risk and allow patients to be mobile and take meals within just 2 hours after their procedure.
                        </p>
                    </section>

                    {/* ── 4. Cardiology FAQs: The Clinical Deep-Dive ─────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-primary uppercase tracking-tighter text-rose-400 text-left">
                           Cardiac Sciences: Specialist Clinical FAQs
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "What is many people call a 'Silent' Heart Attack?",
                                    a: "Nearly 30% of heart attacks occur without crushing chest pain (especially in women and elderly). Symptoms include deep fatigue, sudden cold sweats, and overwhelming indigestion. If you feel these suddenly, a 12-lead ECG is the only way to confirm safety."
                                },
                                {
                                    q: "Is Angioplasty a permanent cure for heart disease?",
                                    a: "Angioplasty fixes the 'Emergency' blockage. However, Atherosclerosis (plaque buildup) is a chronic disease. Life-long medication and strict metabolic control are essential to ensure the restenosis risk is kept below 5%."
                                },
                                {
                                    q: "What is the difference between an ICD and a Pacemaker?",
                                    a: "A Pacemaker 'kicks in' when the heart beats too slowly. An ICD (Defibrillator) is more complex—it monitors for deadly 'fast' rhythms and delivers a life-saving 'internal shock' to restart the heart's rhythm if it stops."
                                },
                                {
                                    q: "How long does a modern drug-eluting stent last?",
                                    a: "Modern USFDA-approved stents are designed to stays permanently integrated with the artery wall for the rest of your life. They provide permanent scaffolding once they have 'eluted' their anti-scarring drug."
                                },
                                {
                                    q: "Can I exercise after having a stent or heart attack?",
                                    a: "Absolutely. In fact, structured exercise is the cornerstone of <strong>Cardiac Rehabilitation.</strong> Once your cardiologist clarifies you (usually 2-4 weeks after procedure), a graduated walking/swimming program is vital for heart muscle remodeling."
                                },
                                {
                                    q: "Is Bypass (CABG) surgery better than Angioplasty?",
                                    a: "This depends on the 'Syntax Score' – the complexity of your blockages. For single/double vessel disease, Angioplasty is usually better (less invasive). For complex triple-vessel or Left-Main disease, Bypass may offer superior 10-year survival rates."
                                },
                                {
                                    q: "What is the IVUS imaging used for in the Cath Lab?",
                                    a: "IVUS (Intravascular Ultrasound) is a tiny camera that goes inside your artery. It ensures that the stent is perfectly sized and fully expanded against the artery wall—this reduces the risk of stent failure/clotting to nearly zero."
                                },
                                {
                                    q: "Why is the Radial (Wrist) route preferred globally?",
                                    a: "Accessing the heart via the wrist involves a much smaller artery than the thigh. It allows for immediate mobilization, eliminates the risk of major groin hematomas, and significantly increases patient comfort and safety."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-rose-400 transition-colors text-lg text-left">
                                        <span className="text-rose-500 text-2xl font-serif">Q.</span>
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
            )}
            procedures={[
                { name: "Primary PCI (Angioplasty)", link: "/doctor/near-me/treat/cardiology" },
                { name: "Permanent Pacemaker Hub", link: "/doctor/near-me/treat/cardiology" },
                { name: "2D/4D Echocardiography", link: "/doctor/near-me/treat/cardiology" },
                { name: "TMT & Stress Testing", link: "/doctor/near-me/treat/cardiology" },
                { name: "IVUS-Guided Stenting", link: "/doctor/near-me/treat/cardiology" },
                { name: "Heart Failure Stabilization", link: "/doctor/near-me/treat/cardiology" }
            ]}
            relatedDoctors={cardioDoctors}
            quickFacts={quickFacts}
        />
    )
}
