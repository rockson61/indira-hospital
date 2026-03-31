'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { SEED_DATA } from '@/lib/data/seed-data'
import { TREATMENT_DATA } from '@/lib/data/treatment-data'
import { 
    Baby, 
    Shield, 
    Target, 
    Zap, 
    Activity, 
    Heart, 
    Clock, 
    Award, 
    Star, 
    Search, 
    ChevronRight, 
    ArrowRightCircle, 
    ShieldCheck, 
    Microscope, 
    Flame, 
    Droplets, 
    Wind, 
    Eye, 
    Info, 
    Move, 
    Radiation, 
    Navigation, 
    ThermometerSnowflake, 
    PlayCircle, 
    Stethoscope, 
    Users2, 
    HeartPulse, 
    Sparkles, 
    MapPin, 
    UserCheck,
    Waves,
    Scale
} from 'lucide-react'

export default function UrologyPillarPage() {
    return (
        <DepartmentTemplate
            title="Elite Urology & Laser Stone Center"
            slug="urology"
            shortDescription="India's leading center for 100W Holmium Laser enucleation, retrograde intrarenal surgery (RIRS), and comprehensive male fertility excellence."
            fullDescription={(
                <div className="space-y-16 text-left">
                    {/* Mechanism: The Laser Revolution in Urology */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-blue-500 pl-4 font-primary uppercase tracking-tighter italic text-left">
                            The Laser Frontier: Precision Excellence in Urology
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-xl font-medium leading-relaxed text-slate-900 dark:text-white">
                                    The <strong>Department of Urology</strong> at Indira Super Speciality Hospital is a regional benchmark for the sophisticated management of renal calculi, prostate health, and complex reconstructive urology.
                                </p>
                                <p className="mt-4 text-lg leading-relaxed">
                                    Utilizing advanced <strong>100W Holmium &amp; Thulium Lasers</strong> and ultra-thin <strong>Digital Flexible Ureteroscopes</strong>, we reach deep into the human anatomy through natural orifices, providing "dusting" solutions for even the most complex stones with zero blood loss and a 24-hour return to normal life.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-blue-600" />
                                        <span><strong>Stone 'Dusting'</strong>: Turning hard minerals into micron-sized powder for natural passing.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-blue-600" />
                                        <span><strong>HoLEP Mastery</strong>: The ultimate bloodless cure for large prostates (BPH).</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group border border-slate-800">
                                <div className="absolute inset-0 bg-blue-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-blue-300 mb-4 italic text-left">Kidney Stone Hub</h4>
                                <p className="text-blue-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    "No Stent, No Pain, No Recurrence." Our <strong>RIRS (Retrograde Intrarenal Surgery)</strong> technique uses a laser fiber as thin as a hair to turn physical stones into microscopic dust.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> 99% Stone Clearance</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Incision-Less Procedures</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Specialist Urology Verticals */}
                    <section className="text-left">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-tighter italic border-b-2 border-blue-100 inline-block text-left">Clinical Specialization Hubs</h3>
                            <p className="text-slate-600 dark:text-slate-400 mt-2">From oncological resections to male reconstructive science.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            {[
                                {
                                    title: "Endourology Hub",
                                    desc: "Minimally invasive management of kidney and ureteric stones using advanced flexible ureteroscopy and stone dusting.",
                                    sub: ["RIRS (Retrograde Surgery)", "Mini-PCNL (Laser Percutaneous)", "URSL (Stone Laser)"],
                                    icon: Target
                                },
                                {
                                    title: "Uro-Oncology Unit",
                                    desc: "Curative management for cancers of the Prostate, Bladder, and Kidney using laparoscopic and open resections.",
                                    sub: ["Radical Nephrectomy", "Radical Cystectomy", "TURBT (Bladder Tumor)"],
                                    icon: Microscope
                                },
                                {
                                    title: "Andrology Center",
                                    desc: "Specialized and confidential care for male infertility and erectile health issues using microsurgical techniques.",
                                    sub: ["Microsurgical Varicocelectomy", "Male Infertility Evaluation", "Vasectomy Reversal"],
                                    icon: HeartPulse
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all overflow-hidden group">
                                    <div className="p-10 flex-1 flex flex-col justify-between">
                                        <div>
                                            <item.icon className="w-12 h-12 text-blue-600 mb-6" />
                                            <h4 className="text-2xl font-bold mb-4 italic tracking-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 italic">{item.desc}</p>
                                            <ul className="space-y-3 mb-8">
                                                {item.sub.map(s => (
                                                    <li key={s} className="flex items-center gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div> {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Trust Infrastructure Section */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden text-left">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-4 italic font-primary text-blue-300 text-left">Beyond Surgery: The Stone Prevention Meta-Game</h3>
                        <p className="text-slate-400 max-w-2xl text-left mb-12">
                            Treating a stone is a technical event; preventing its recurrence is a lifestyle mission. Recurrence rates can be as high as 50% within 5 years without metabolic management.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left relative z-10">
                            {[
                                { k: "Hydration", v: "2.5L+ Daily Output" },
                                { k: "Sodium", v: "Low Salt Audit" },
                                { k: "Citrate", v: "Natural Inhibitors" },
                                { k: "Potassium", v: "Metabolic Balance" }
                            ].map((step, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center shadow-lg">
                                    <p className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">{step.k}</p>
                                    <p className="text-xl font-bold text-white mb-2">{step.v}</p>
                                    <div className="h-1 w-full bg-blue-500/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-[70%]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 p-6 rounded-3xl bg-blue-600/10 border border-blue-500/30 text-blue-300 italic text-sm text-left">
                            At Indira Hospital, every stone patient receives a <strong>Stone Analysis &amp; Metabolic Workup</strong> to identify their stone's chemical signature.
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3 text-left">
                            <Info className="text-blue-500" />
                            Elite Clinical FAQs: Comprehensive Urology
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "What is the recovery timeline for Laser Stone surgery?",
                                    a: "RIRS is a zero-incision procedure. Our patients typically go home within 24 hours. Normal activities can be resumed in 48-72 hours. A temporary Double-J (JJ) stent is used to ensure perfect kidney drainage during initial healing."
                                },
                                {
                                    q: "Is Laser Prostate (HoLEP) surgery safer for cardiac patients?",
                                    a: "Yes. HoLEP is virtually bloodless, making it safe for patients on blood thinners or with pacemakers. It allows for shorter catheterization times and significantly lower stress on the circulatory system compared to traditional TURP."
                                },
                                {
                                    q: "Can kidney stones be dissolved with medication?",
                                    a: "Only Uric Acid stones (5-10% of cases) can be dissolved. Most common stones (Calcium Oxalate) require laser fragmentation if they are causing pain or blockage."
                                },
                                {
                                    q: "How does smoking affect Urological health?",
                                    a: "Smoking is a primary risk factor for bladder cancer and erectile dysfunction. It causes micro-vascular damage that impairs urinary function and significantly increases the recurrence of bladder tumors."
                                },
                                {
                                    q: "How safe is a Vasectomy surgery?",
                                    a: "Extremely safe. A Vasectomy is a 15-minute daycare procedure performed under local anesthesia. It has zero impact on sexual function or hormonal levels and is considered the most reliable form of permanent contraception."
                                },
                                {
                                    q: "Is male infertility reversible?",
                                    a: "Many cases caused by structural issues, like Varicoceles, are surgically reversible with success rates over 70% in improving sperm count and pregnancy rates."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group text-left">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2 italic text-left">
                                        <Zap className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 antialiased">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )}
            procedures={[
                { name: "Laser Stone Removal (RIRS)", link: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
                { name: "Prostate Surgery (HoLEP)", link: "/doctor/near-me/treat/urology/laser-prostate-surgery" },
                { name: "Keyhole Stone Surgery (PCNL)", link: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
                { name: "Male Fertility Surgery", link: "/doctor/near-me/treat/urology/laser-prostate-surgery" },
                { name: "Bladder Tumor Removal", link: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
                { name: "Reconstructive Urology", link: "/doctor/near-me/treat/urology/laser-prostate-surgery" }
            ]}
            technology={[
                {
                    name: "100W Holmium Laser",
                    description: "High-power laser for precision enucleation and ultra-fine stone dusting.",
                    icon: "Zap"
                },
                {
                    name: "Flexible Digital Scopes",
                    description: "Micro-telescopes for incision-less access to the deep renal system.",
                    icon: "Microscope"
                }
            ]}
            relatedServices={[
                {
                    title: "Clinical Nephrology",
                    description: "Medical management of kidney failure and dialysis support.",
                    slug: "../nephrology"
                },
                {
                    title: "Advanced Onco-Care",
                    description: "Multidisciplinary management for urological tumors.",
                    slug: "../oncology"
                }
            ]}
            quickFacts={[
                { label: 'Specialists', value: 'Senior Urologists', icon: 'Users2' },
                { label: 'Stone Unit', value: 'Laser Excellence', icon: 'Target' },
                { label: 'Patient Safety', value: 'NABH Accredited', icon: 'ShieldCheck' },
                { label: 'Beds', value: '100+ Suites', icon: 'MapPin' },
            ]}
            relatedDoctors={[]}
        />
    )
}
