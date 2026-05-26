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
 Trash2
} from 'lucide-react'

export function UrinalysisClient() {
 return (
 <DiagnosticTemplate
 title="Elite Complete Urinalysis"
 slug="urinalysis"
 category="Pathology & Renal Health"
 description={
 <>
 <p>
 A Urinalysis is a critical metabolic "window" into your kidney function and internal health. At Indira Super Speciality Hospital, we provide **Elite Complete Urinalysis Diagnostics**. Integrating **Automated Chemical Strip Analysis** with **High-Resolution Microscopic Sediment Evaluation**, we identify silent markers of kidney decline, metabolic disorders, and occult infectious loads with clinical precision.
 </p>
 <p className="mt-4 text-indigo-600 dark:text-indigo-400 font-semibold italic border-l-4 border-indigo-500 pl-4 uppercase tracking-tighter">
 "Renal Intelligence: Beyond the dipstick, visualizing microscopic health."
 </p>
 </>
 }
 quickFacts={[
 { label: 'Technology', value: 'Automated + Micro', icon: Microscope },
 { label: 'Sample', value: 'Urine (Mid-Stream)', icon: Droplets },
 { label: 'Report Time', value: 'Same Day', icon: Clock },
 { label: 'Accreditation', value: 'NABL Certified', icon: Award }
 ]}
 reportTime="Same Day"
 homeCollection={true}
 fastingRequired={false}
 price="Elite Standard"
 fullDescription={
 <div className="space-y-16">
 {/* Mechanism: Chemical vs Microscopic */}
 <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 text-left">
 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/10 blur-3xl -z-10" />
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-indigo-500 pl-4 font-heading uppercase tracking-tighter italic">
 Mechanism: The Tri-Phasic Urinalysis
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 <div className="prose prose-slate dark:prose-invert">
 <p className="text-lg leading-relaxed antialiased font-medium uppercase italic text-slate-700 dark:text-slate-200 tracking-tight">
 Simple home 'dipstick' tests can tell you if there is glucose or nitrites, but they fail to explain *why* or identify the severity of cellular damage.
 </p>
 <p className="mt-4">
 Our **Elite Urinalysis** follows a rigorous three-step protocol:
 </p>
 <div className="mt-8 space-y-4">
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-indigo-600" />
 <span><strong>Automated Biochemistry</strong>: Testing for 10 parameters (pH, Specific Gravity, Protein, Ketones, Bilirubin) using precision photo-electric reflection.</span>
 </div>
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-indigo-600" />
 <span><strong>Sediment Microscopy</strong>: The 'Liquid Biopsy' where we look for microscopic blood (RBCs), pus (WBCs), epithelial cells, and high-risk crystals.</span>
 </div>
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-indigo-600" />
 <span><strong>Cast Analysis</strong>: Identifying 'Hyaline' or 'Waxy' casts that are the earliest indicators of chronic kidney disease (CKD).</span>
 </div>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800 shadow-xl flex flex-col justify-center">
 <Beaker className="w-16 h-16 text-indigo-500 mb-6" />
 <h4 className="text-xl font-bold mb-2">Renal Clarity Benchmarks</h4>
 <ul className="space-y-4 mb-6">
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 italic antialiased leading-relaxed tracking-normal text-slate-800 dark:text-slate-200 uppercase font-black tracking-widest" />
 <span className="text-sm font-bold uppercase italic font-black tracking-widest text-slate-800 dark:text-slate-200"><strong>Occult Blood Triage</strong>: Detecting microscopic hematuria in asymptomatic patients.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
 <span className="text-sm"><strong>Specific Gravity Audit</strong>: Assessing the kidney&apos;s ability to concentrate urine to detect dehydration or diabetes insipidus.</span>
 </li>
 </ul>
 <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest">
 <Shield className="w-4 h-4" />
 Diagnostic Integrity Verified
 </div>
 </div>
 </div>
 </section>

 {/* Cellular Insights Grid */}
 <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 to-transparent" />
 <h3 className="text-3xl font-bold mb-8 italic font-heading text-indigo-300 uppercase tracking-widest leading-none">Diagnostic Marker Spectrum</h3>
 <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
 {[
 { title: "Proteinuria Check", desc: "Early detection of 'leaky' kidney filters, critical for diabetic management.", icon: Layers },
 { title: "Crystal ID", desc: "Identifying Calcium Oxalate or Uric Acid markers for stone prevention.", icon: Search },
 { title: "Ketone Detection", desc: "Critical monitoring for fasting, diabetes management, or high-sugar metabolic stress.", icon: Activity },
 { title: "Leukocyte Esterase", desc: "Rapid confirmation of urinary tract infections (UTI) before symptoms emerge.", icon: Shield }
 ].map((item: any, i: number) => (
 <div key={i} className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group hover:border-indigo-500/50 transition-all">
 <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
 <h4 className="font-bold text-lg mb-2">{item.title}</h4>
 <p className="text-[10px] text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Home Collection & Safety Section */}
 <section className="text-left">
 <div className="mb-12">
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-heading tracking-tighter uppercase uppercase uppercase">Urinalysis Sample Guidelines</h3>
 <p className="text-slate-600 dark:text-slate-400 italic font-medium antialiased text-sm uppercase italic uppercase">Ensuring sample purity from collection to analysis.</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {[
 { title: "The 'Mid-Stream' Rule", desc: "Collect the middle portion of the urine stream. Discard the first few drops to ensure bacteria from the skin doesn&apos;t contaminate the sample." },
 { title: "Freshness Benchmark", desc: "Urine samples degrade quickly. Deliver to the lab within 1 hour, or keep refrigerated (2-8°C) if collecting at home." },
 { title: "Medication Audit", desc: "Some compounds like Vitamin C or certain antibiotics can cause 'False Negative' glucose or blood results. Inform us of any current meds." }
 ].map((item: any, i: number) => (
 <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-2xl transition-all border-b-4 border-indigo-500">
 <h4 className="font-heading text-xl font-bold mb-3 italic">{item.title}</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Clinical FAQ Hub */}
 <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3 italic">
 <Info className="text-indigo-500" />
 Elite Clinical FAQs: Complete Urinalysis
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
 {[
 {
 q: "What is 'Protein' doing in my urine report?",
 a: "Healthy kidneys do not leak protein. If protein (Albumin) appears in your urine, it suggests that the kidney&apos;s filtering units (glomeruli) are damaged, often due to high blood pressure or diabetes."
 },
 {
 q: "Can urinalysis detect a UTI?",
 a: "Yes. The presence of Leukocytes (WBCs), Nitrites (from bacteria), and Bacteria themselves in the sediment is highly suggestive of a Urinary Tract Infection, even if you don&apos;t feel burning or pain yet."
 },
 {
 q: "What are 'Crystals' in the urine?",
 a: "Crystals are solid substances formed by excessive amounts of certain chemicals like calcium or uric acid. Their presence suggests you may be dehydrated or at high risk for kidney stones."
 },
 {
 q: "Why is the color of urine important?",
 a: "Dark yellow urine usually indicates dehydration. Red or pink urine suggests blood (hematuria). Cloudiness often points to an infection or the presence of crystals."
 },
 {
 q: "Do I need to fast for a urinalysis?",
 a: "No fasting is required. However, the 'First Morning Sample' is the most concentrated and provides the most diagnostic detail for identifying minor abnormalities."
 },
 {
 q: "Can menstruation affect the urinalysis?",
 a: "Yes. Menstrual blood can cause a false-positive result for blood in the urine. It is best to wait until your cycle is over to provide a sample for a routine check-up."
 }
 ].map((faq, i) => (
 <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
 <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2 italic">
 <Zap className="w-4 h-4 mt-1 text-indigo-500 shrink-0 italic" />
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
