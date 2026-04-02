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
    AlertCircle
} from 'lucide-react'

export default function LipidProfilePage() {
    return (
        <DiagnosticTemplate
            title="Elite Lipid Profile (Heart Risk)"
            slug="lipid-profile"
            category="Pathology & Metabolic Health"
            description={
                <>
                    <p>
                        A Lipid Profile is more than just a cholesterol check; it is a clinical assessment of your future cardiovascular risk. At Indira Super Speciality Hospital, we provide **Elite Metabolic Profiling**. Using **Roche COBAS Automated Analyzers**, we deliver high-precision measurements of Total Cholesterol, HDL (Good), LDL (Bad), VLDL, and Triglycerides, paired with calculated **ASCVD Risk Ratios** for a complete picture of your heart health.
                    </p>
                    <p className="mt-4 text-amber-600 dark:text-amber-400 font-semibold italic border-l-4 border-amber-500 pl-4 uppercase tracking-tighter">
                        "Metabolic Precision: Mapping the silent markers of cardiovascular longevity."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Technology', value: 'Roche COBAS C501', icon: Beaker },
                { label: 'Sample', value: 'Venous Blood (3ml)', icon: Droplets },
                { label: 'Fasting', value: '10-12 Hours', icon: Clock },
                { label: 'Accreditation', value: 'NABL Certified', icon: Award }
            ]}
            reportTime="6-12 Hours"
            homeCollection={true}
            fastingRequired={true}
            price="Elite Standard"
            fullDescription={
                <div className="space-y-16">
                    {/* Mechanism: Automated Spectrophotometry & Calculations */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/50 text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-amber-500 pl-4 font-heading uppercase tracking-tighter italic">
                            Mechanism: The Lipid Fractionation Advantage
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    A simple "Total Cholesterol" number is often misleading. Some patients have high total cholesterol but high levels of protective HDL, placing them at low risk. Others show "Normal" total cholesterol but have dangerously high triglycerides and small, dense LDL particles.
                                </p>
                                <p className="mt-4 text-emerald-600 font-semibold italic">
                                    Our **Elite Lipid Profile** uses **Roche Enzymatic Colorimetry** to fractionate your blood fats into specific diagnostic components:
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-amber-600" />
                                        <span><strong>LDL Calculation (Friedewald)</strong>: Precise mapping of "bad" cholesterol that deposits in artery walls.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-amber-600" />
                                        <span><strong>VLDL Fraction</strong>: Identifying Very Low-Density Lipoproteins that are high in triglycerides and indicate metabolic syndrome.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-amber-600" />
                                        <span><strong>Non-HDL Cholesterol</strong>: A newer, more accurate marker of plaque-building particles compared to LDL alone.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-amber-100 dark:border-amber-800 shadow-xl flex flex-col justify-center">
                                <Scale className="w-16 h-16 text-amber-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">Cardiovascular Risk Benchmarks</h4>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                                        <span className="text-sm"><strong>Atherogenic Index</strong>: Automated calculation of the ratio between LDL and HDL.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                                        <span className="text-sm"><strong>TC/HDL Ratio</strong>: The strongest traditional predictor of ischemic heart disease.</span>
                                    </li>
                                </ul>
                                <div className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Metabolic Integrity Verified
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Metabolic Insights Grid */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 italic font-heading text-amber-300 uppercase tracking-widest leading-none italic leading-none">The Lipid Spectrum</h3>
                        <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
                            {[
                                { title: "Triglycerides", desc: "Measuring the fats used for energy; high levels indicate sugar/alcohol metabolic stress.", icon: Activity },
                                { title: "HDL (Good)", desc: "The 'scavenger' cholesterol that removes plaque from artery walls.", icon: HeartPulse },
                                { title: "LDL (Bad)", desc: "The primary driver of atherosclerosis and coronary heart blockages.", icon: AlertCircle },
                                { title: "VLDL Mapping", desc: "Identifying triglycerides carried in the blood for metabolic disease screening.", icon: Search }
                            ].map((item: any, i: number) => (
                                <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-amber-500/50 transition-all">
                                    <item.icon className="w-8 h-8 text-amber-400 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-[10px] text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Preparing for Your Test Section */}
                    <section className="text-left">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-heading tracking-tighter uppercase uppercase">Preparing for Your Lipid Profile</h3>
                            <p className="text-slate-600 dark:text-slate-400">Strict adherence to fasting is critical for accurate results.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "The 12-Hour Fast", desc: "Finish dinner by 8 PM and provide the sample at 8 AM. Only plain water is allowed during the fast. No tea, coffee, or milk." },
                                { title: "Alcohol Restriction", desc: "Do not consume alcohol for at least 24 hours before the test, as it significantly elevates Triglyceride levels temporarily." },
                                { title: "Medication Audit", desc: "Inform our phlebotomist if you are on statins (Cholesterol medication) or blood thinners before sample collection." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-2xl transition-all border-b-4 border-amber-500">
                                    <h4 className="font-heading text-xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic italic leading-relaxed antialiased">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-amber-500" />
                            Elite Clinical FAQs: Lipid Profile
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Can I drink water during my 12-hour fast?",
                                    a: "Yes. Plain water is highly recommended to stay hydrated, which makes sample collection easier. However, you must avoid any other liquids, including sugarless tea or black coffee, as these can affect triglyceride levels."
                                },
                                {
                                    q: "What is 'Good' vs 'Bad' cholesterol?",
                                    a: "HDL (High-Density Lipoprotein) is 'Good' because it carries cholesterol away from your heart and back to the liver. LDL (Low-Density Lipoprotein) is 'Bad' because high levels lead to plaque buildup (atherosclerosis) in your arteries."
                                },
                                {
                                    q: "My Total Cholesterol is normal, but my Triglycerides are high. Should I worry?",
                                    a: "Yes. High triglycerides are an independent risk factor for heart disease and pancreatitis. They are often a marker of 'insulin resistance' or excessive carbohydrate intake and require lifestyle modifications even if LDL is normal."
                                },
                                {
                                    q: "How often should I get a Lipid Profile done?",
                                    a: "Healthy adults over 30 should get one annually. If you have existing heart disease, diabetes, or a strong family history, your doctor may recommend a check every 3 to 6 months to monitor treatment efficacy."
                                },
                                {
                                    q: "Can I skip fasting for a 'Non-Fasting' Lipid Profile?",
                                    a: "Some modern guidelines allow non-fasting tests for basic screening, but the most accurate 'Calculated LDL' and 'Triglyceride' levels still require a 12-hour fast for clinical precision."
                                },
                                {
                                    q: "How do I lower my 'Bad' Cholesterol?",
                                    a: "A combination of a low-saturated fat diet (Mediterranean style), 30 minutes of daily aerobic exercise, and weight management are the primary steps. If these fail after 3 months, medical intervention (statins) is usually considered."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-1 text-amber-500 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 antialiased italic leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            }
        />
    )
}
