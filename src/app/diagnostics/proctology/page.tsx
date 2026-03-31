'use client'

import React from 'react'
import { DiagnosticTemplate } from '@/components/healthcare/DiagnosticTemplate'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Info, 
    Activity,
    CheckCircle2,
    Search,
    History,
    Flame,
    Target,
    ArrowRightCircle,
    Microscope,
    Radiation,
    Navigation,
    ThermometerSnowflake,
    PlayCircle,
    Eye,
    MapPin,
    UserCheck,
    Dna,
    Layers,
    Waves,
    Users,
    Users2,
    Stethoscope,
    HeartPulse,
    Sparkles,
    Wind,
    Star,
    Monitor,
    ZapOff,
    Beaker,
    Droplets,
    PieChart,
    Scale,
    LineChart,
    Trash2,
    Table,
    FileText,
    Camera
} from 'lucide-react'

export default function ProctologyDiagnosticsPage() {
    return (
        <DiagnosticTemplate
            title="Elite Proctology Diagnostics"
            slug="proctology"
            category="Colorectal & Proctology Hub"
            description={
                <>
                    <p>
                        Effective proctological treatment begins with a microscopic understanding of the anal canal and rectal anatomy. At Indira Laser Proctology Center, we provide **Elite Colorectal Diagnostics**. Utilizing **High-Definition Digital Anoscopy (DA)** and **Endorectal Ultrasonography (ERUS)**, we map the complexity of Piles, Fissures, and Fistula tracts with sub-millimeter precision before any laser intervention.
                    </p>
                    <p className="mt-4 text-fuchsia-600 dark:text-fuchsia-400 font-semibold italic border-l-4 border-fuchsia-500 pl-4 uppercase tracking-tighter">
                        "Diagnostic Clarity: Mapping the anatomy of comfort and recovery."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Technology', value: 'HD Digital Anoscopy', icon: Camera },
                { label: 'Specialist', value: 'Surgeon Over-viewed', icon: Stethoscope },
                { label: 'Result Time', value: 'Instant Analysis', icon: Clock },
                { label: 'Accreditation', value: 'NABH Standards', icon: Award }
            ]}
            reportTime="Instant / 24 Hours"
            homeCollection={false}
            fastingRequired={false}
            price="Precision Assessment"
            fullDescription={
                <div className="space-y-16">
                    {/* Mechanism: HD Digital Anoscopy */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-fuchsia-50/50 dark:bg-fuchsia-950/20 border border-fuchsia-100 dark:border-fuchsia-900/50 text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-fuchsia-500 pl-4 font-primary uppercase tracking-tighter italic">
                            Mechanism: Digital Proctological Mapping
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed antialiased font-medium uppercase italic text-slate-700 dark:text-slate-200 tracking-tight">
                                    Visual inspections using standard anoscope devices often fail to see 'internal hemorrhoids' or 'hidden' fistula tracts.
                                </p>
                                <p className="mt-4">
                                    Our **Elite Proctology Assessment** utilizes high-magnification **Digital Proctoscopes**. This technology captures real-time video of the anal canal, allowing our surgeons to identify internal bleeding points, the specific 'degree' of piles (Grade 1-4), and the exact location of the primary internal opening in a fistula. 
                                </p>
                                <p className="mt-4">
                                    This visual mapping is critical for building a **Laser Surgical Roadmap (FiLaC/SiLaC)**. By knowing the precise anatomy, we can ensure the laser fiber is delivered only to the diseased tissue, preserving the healthy sphincter muscle and ensuring a 100% success rate with zero risk of incontinence.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-fuchsia-600" />
                                        <span><strong>Sphincter Bio-Feedback</strong>: Assessing muscle tone to ensure safety during future procedures.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-fuchsia-600" />
                                        <span><strong>ERUS Integration</strong>: 360-degree ultrasound mapping for Horseshoe or complex fistulas.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-fuchsia-100 dark:border-fuchsia-800 shadow-xl flex flex-col justify-center">
                                <Activity className="w-16 h-16 text-fuchsia-500 mb-6 font-primary uppercase tracking-widest italic" />
                                <h4 className="text-xl font-bold mb-2">Surgical Mapping Benchmarks</h4>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0 italic antialiased leading-relaxed tracking-normal text-slate-800 dark:text-slate-200 uppercase font-black tracking-widest" />
                                        <span className="text-sm font-bold uppercase italic font-black tracking-widest text-slate-800 dark:text-slate-200"><strong>Hemorrhoid Grading</strong>: Categorizing Grade 1 to 4 for laser eligibility.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" />
                                        <span className="text-sm"><strong>Fistula Tract Audit</strong>: Identifying 'Silent' secondary tracts to prevent recurrence.</span>
                                    </li>
                                </ul>
                                <div className="inline-flex items-center gap-2 text-fuchsia-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Colorectal Integrity Verified
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Proctology Diagnostic Hubs Row */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 italic font-primary text-fuchsia-300 uppercase tracking-widest leading-none">Diagnostic Modality Spectrum</h3>
                        <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
                            {[
                                { title: "HD Digital Anoscopy", desc: "Real-time video evaluation of internal hemorrhoids and fissures.", icon: Camera },
                                { title: "Endorectal USG", desc: "Mapping deep fistula tracts and rectal wall integrity with ultrasound.", icon: Waves },
                                { title: "Manometry Audit", desc: "Precisely measuring anal sphincter pressure for functional assessments.", icon: Activity },
                                { title: "Biopsy Screening", desc: "Differentiating between benign tissue and suspicious rectal lesions.", icon: Microscope }
                            ].map((item: any, i: number) => (
                                <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-fuchsia-500/50 transition-all">
                                    <item.icon className="w-8 h-8 text-fuchsia-400 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-[10px] text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical Strategy Section */}
                    <section className="text-left">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-primary tracking-tighter uppercase uppercase uppercase">The Proctology Consultation Hub</h3>
                            <p className="text-slate-600 dark:text-slate-400 italic font-medium antialiased text-sm uppercase italic uppercase">Your roadmap to a permanent colorectal solution.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Discrete Audit", desc: "We provide Absolute Privacy (Male/Female staff assistance) throughout the diagnostic journey." },
                                { title: "Pain Management", desc: "We use specialized 'Topical Anesthetic Gels' before any internal digital inspection to ensure zero discomfort." },
                                { title: "Instant Verity", desc: "Most findings (Anoscopy) are shared with the patient instantly via high-definition screens." }
                            ].map((item: any, i: number) => (
                                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-2xl transition-all border-b-4 border-fuchsia-500">
                                    <h4 className="font-primary text-xl font-bold mb-3 italic">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Transition to Treatment */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 uppercase font-primary italic">From Diagnosis to Laser Cure</h3>
                        <p className="mb-10 text-slate-600 dark:text-slate-400 italic">Once our elite diagnostics are complete, we build a customized surgical roadmap. Explore our advanced laser treatments for these conditions:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { name: "Laser Piles Treatment", href: "/doctor/near-me/treat/proctology/laser-piles-treatment" },
                                { name: "Laser Fistula Closure (FiLaC)", href: "/doctor/near-me/treat/proctology/laser-fistula-fistula-in-ano-treatment" },
                                { name: "Laser Fissure Surgery (LIS)", href: "/doctor/near-me/treat/proctology/laser-fissure-surgery" },
                                { name: "Laser Pilonidal Sinus (SiLaC)", href: "/doctor/near-me/treat/proctology/laser-pilonidal-sinus-surgery" }
                            ].map((item, i) => (
                                <a 
                                    key={i} 
                                    href={item.href}
                                    className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 hover:border-fuchsia-500 transition-all group"
                                >
                                    <span className="text-md font-bold text-slate-900 dark:text-white">{item.name}</span>
                                    <ArrowRightCircle className="w-5 h-5 text-slate-300 group-hover:text-fuchsia-500 group-hover:scale-110 transition-all" />
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            }
        />
    )
}
