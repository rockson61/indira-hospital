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
    Droplets
} from 'lucide-react'

export function CBCClient() {
    return (
        <DiagnosticTemplate
            title="Elite Complete Blood Count (CBC)"
            slug="complete-blood-count"
            category="Pathology & Hematology"
            description={
                <>
                    <p>
                        The Complete Blood Count (CBC) is the single most valuable screening tool in modern medicine. At Indira Super Speciality Hospital, we provide **Elite 6-Part Differential CBC Diagnostics**. Utilizing advanced **Sysmex Volumetric Impedance** and **Flo-Cytometry**, we move beyond basic counts to provide microscopic insights into cellular morphology, immature granulocytes (IG), and absolute cell fractions for more precise diagnostic triage.
                    </p>
                    <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold italic border-l-4 border-emerald-500 pl-4 uppercase tracking-tighter">
                        "Sysmex 6-Part Precision: Cellular intelligence for rapid clinical insight."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Technology', value: 'Sysmex 6-Part Diff', icon: Microscope },
                { label: 'Sample', value: 'Venous Blood (2ml)', icon: Droplets },
                { label: 'Report Time', value: '4-6 Hours', icon: Clock },
                { label: 'Accreditation', value: 'NABL Certified', icon: Award }
            ]}
            reportTime="4-6 Hours"
            homeCollection={true}
            fastingRequired={false}
            price="Elite Standard"
            fullDescription={
                <div className="space-y-16">
                    {/* Mechanism: Automated 6-Part Differential */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4 font-heading uppercase tracking-tighter italic">
                            Mechanism: 6-Part Differential Hematology
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    Standard laboratories often provide a 3-part or basic 5-part differential blood count. This often misses critical diagnostic clues—like the presence of "Immature Granulocytes" (IG)—which can indicate early-stage bacterial sepsis or bone marrow stress long before the total white blood cell (WBC) count rises.
                                </p>
                                <p className="mt-4">
                                    Our **Elite CBC Protocol** utilizes **Sysmex Automated Hematology** to analyze every cell in 3 dimensions: Volume, Conductivity, and Laser Scatter. This "6-Part" analysis separates Neutrophils, Lymphocytes, Monocytes, Eosinophils, and Basophils, while also measuring the **IG (Immature Granulocyte)** fraction. This allows our clinicians to identify bacterial infections, parasitic loads, or allergic triggers with significantly higher sensitivity than traditional manual methods.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Cellular Morphology</strong>: Identifying Abnormality Flags for early leukemia or nutritional anemia.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Absolute Counts</strong>: Providing ANC (Absolute Neutrophil Count) for oncology safety monitoring.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-xl flex flex-col justify-center">
                                <Beaker className="w-16 h-16 text-emerald-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">Hematology Precision Benchmarks</h4>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span className="text-sm"><strong>IPU Rules Engine</strong>: Automated double-checking of atypical results.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span className="text-sm"><strong>NRBC Detection</strong>: Identifying Nucleated Red Blood Cells for neonatal/critical care safety.</span>
                                    </li>
                                </ul>
                                <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    NABL Quality Audit Verified
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Cellular Insights Grid */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 italic font-heading text-emerald-300 uppercase tracking-widest leading-none">The 24-Parameter CBC Spectrum</h3>
                        <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
                            {[
                                { title: "RBC Indices (MCV/MCH)", desc: "Differentiating between Iron Deficiency, Vitamin B12 deficiency, and Thalassemia.", icon: Dna },
                                { title: "WBC Differential", desc: "Identifying bacterial (ANC) vs viral (ALC) infection dominance.", icon: Activity },
                                { title: "Platelet Parameters", desc: "Detecting clotting risks or Dengue-related thrombocytopenia early.", icon: Layers },
                                { title: "RDW Detail", desc: "Measuring Red Cell Distribution Width to identify early-stage malnutrition.", icon: Waves }
                            ].map((item: any, i: number) => (
                                <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-emerald-500/50 transition-all">
                                    <item.icon className="w-8 h-8 text-emerald-400 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-[10px] text-slate-400 leading-relaxed italic antialiased leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Home Collection & Safety Section */}
                    <section className="text-left">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-heading tracking-tighter uppercase">Home Collection Benchmarks</h3>
                            <p className="text-slate-600 dark:text-slate-400">Ensuring sample integrity from your doorstep to our laboratory.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Cold-Chain Integrity", desc: "Samples are transported in temperature-controlled kits (2-8°C) to prevent cellular degradation." },
                                { title: "Vacutainer Precision", desc: "We use hospital-grade EDTA tubes to preserve cell morphology for high-resolution analysis." },
                                { title: "Same-Day Reporting", desc: "Automated analysis ensures verified results are uploaded to your patient portal within 6 hours." }
                            ].map((item: any, i: number) => (
                                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-2xl transition-all border-b-4 border-emerald-500">
                                    <h4 className="font-heading text-xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3 italic">
                            <Info className="text-emerald-500" />
                            Elite Clinical FAQs: Complete Blood Count
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Do I need to fast before a CBC test?",
                                    a: "No. A basic CBC test does not require fasting. You can eat and drink normally before your sample is taken. However, if your CBC is part of a larger panel (like a Lipid Profile), fasting may be required for the other tests."
                                },
                                {
                                    q: "What does 'Immature Granulocytes (IG)' mean in my report?",
                                    a: "The presence of IGs suggests that the bone marrow is releasing young white blood cells prematurely. This is an early warning sign of bacterial infection or inflammatory stress that older hematology machines often miss."
                                },
                                {
                                    q: "Can a CBC test detect cancer?",
                                    a: "A CBC is not a definitive test for cancer, but it can show abnormalities in white blood cells (Leukemia flags) or persistent anemia that may warrant further investigations like Bone Marrow Biopsies or CT Scans."
                                },
                                {
                                    q: "Why is the RDW (Red Cell Distribution Width) important?",
                                    a: "RDW measures the variation in the size of your red blood cells. A high RDW can be an early indicator of iron deficiency anemia or Vitamin B12 deficiency even before your Hemoglobin level starts to drop."
                                },
                                {
                                    q: "Should I be worried if my Platelet count is slightly low?",
                                    a: "Low platelets (Thrombocytopenia) can be caused by viral infections (like Dengue), certain medications, or vitamin deficiencies. Our specialists always correlate these results with your clinical symptoms for a definitive diagnosis."
                                },
                                {
                                    q: "How does Sysmex technology improve my diagnosis?",
                                    a: "Sysmex is the global leader in hematology. Their 6-part diff systems use laser flow cytometry to count and categorize cells with nearly 100% precision, significantly reducing the 'manual error' common in smaller local labs."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2 italic font-medium antialiased">
                                        <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0 uppercase" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 antialiased italic">
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
