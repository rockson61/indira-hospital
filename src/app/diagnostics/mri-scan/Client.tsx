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
 ZapOff
} from 'lucide-react'

export function MRIScanClient() {
 return (
 <DiagnosticTemplate
 title="Elite 3T Silent MRI Scan"
 slug="mri-scan"
 category="Radiology & Advanced Imaging"
 description={
 <>
 <p>
 Magnetic Resonance Imaging (MRI) is the gold standard for visualizing soft tissues, the brain, and complex joint structures. At Indira Super Speciality Hospital, we provide **Elite 3T MRI Diagnostics**. Using our **Wide-Bore, Silent 3.0 Tesla Magnet**, we deliver double the signal strength of standard 1.5T machines, allowing for ultra-fine slice thickness, reduced scan times, and unparalleled diagnostic clarity.
 </p>
 <p className="mt-4 text-fuchsia-600 dark:text-fuchsia-400 font-semibold border-l-4 border-fuchsia-500 pl-4 uppercase tracking-tighter">
 "3.0 Tesla Precision: Visualizing the invisible with silent comfort."
 </p>
 </>
 }
 quickFacts={[
 { label: 'Technology', value: '3.0T Wide-Bore', icon: MagnetIcon },
 { label: 'Standard', value: 'NABL Accredited', icon: Award },
 { label: 'Report Time', value: '12-24 Hours', icon: Clock },
 { label: 'Vellore Hub', value: 'Indira', icon: MapPin }
 ]}
 reportTime="12-24 Hours"
 homeCollection={false}
 fastingRequired={false}
 price="Elite Standard"
 fullDescription={
 <div className="space-y-16">
 {/* Mechanism: 3T vs 1.5T */}
 <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-fuchsia-50/50 dark:bg-fuchsia-950/20 border border-fuchsia-100 dark:border-fuchsia-900/50 text-left">
 <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-400/10 blur-3xl -z-10"/>
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-fuchsia-500 pl-4 font-heading uppercase tracking-tighter">
 Mechanism: The 3.0 Tesla Signal Advantage
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 <div className="prose prose-slate dark:prose-invert">
 <p className="text-lg leading-relaxed">
 Traditional MRI machines operate at 1.5 Tesla (T) of magnetic field strength. While effective, they often struggle to visualize microscopic nerve fibers or early-stage lesions in dense organs. 
 </p>
 <p className="mt-4">
 Our **Elite 3T MRI System** generates a magnetic field twice as strong, resulting in a significantly higher Signal-to-Noise Ratio (SNR). This allows our radiologists to zoom in on complex areas—like the hippocampus for memory loss or the spinal cord for micro-compressions—with microscopic detail that standard machines simply miss. Furthermore, our **Wide-Bore Design** eliminates the claustrophobic "tunnel"feeling, providing a spacious and ventilated environment for patient comfort.
 </p>
 <div className="mt-8 space-y-4">
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-fuchsia-600"/>
 <span><strong>Silent Sequences</strong>: Acoustic noise reduction technology for a quieter, stress-free scan experience.</span>
 </div>
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-fuchsia-600"/>
 <span><strong>Diffusion Tensor Imaging (DTI)</strong>: Mapping the brain's white matter pathways for advanced neuro-diagnostics.</span>
 </div>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-fuchsia-100 dark:border-fuchsia-800 shadow-xl flex flex-col justify-center">
 <Monitor className="w-16 h-16 text-fuchsia-500 mb-6"/>
 <h4 className="text-xl font-bold mb-2">Radiological Accuracy Benchmarks</h4>
 <ul className="space-y-4 mb-6">
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0"/>
 <span className="text-sm"><strong>Sub-Millimeter Resolution</strong>: Identifying lesions as small as 0.2mm.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0"/>
 <span className="text-sm"><strong>Rapid Stroke Protocol</strong>: Full brain scan in under 10 minutes for emergency triage.</span>
 </li>
 </ul>
 <div className="inline-flex items-center gap-2 text-fuchsia-600 font-bold text-sm uppercase tracking-widest">
 <Shield className="w-4 h-4"/>
 Diagnostic Integrity Assured
 </div>
 </div>
 </div>
 </section>

 {/* Diagnostic Spectrum Grid */}
 <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950/30 to-transparent"/>
 <h3 className="text-3xl font-bold mb-8 font-heading text-fuchsia-300 uppercase tracking-widest leading-none">Specialized MRI Modalities</h3>
 <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
 {[
 { title: "Neuro Excellence", desc: "Expert imaging for Brain Tumors, Multiple Sclerosis, and Epilepsy mapping.", icon: Eye },
 { title: "Musculoskeletal", desc: "Detailed visualization of Tendons, Ligaments, and Cartilage for sports injuries.", icon: Activity },
 { title: "Whole-Body MRI", desc: "Radiation-free screening for occult tumors and systemic conditions.", icon: Users2 },
 { title: "MRI Angiography", desc: "Non-invasive visualization of blood vessels without the need for iodine dye.", icon: HeartPulse }
 ].map((item: any, i: number) => (
 <div key={i} className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group hover:border-fuchsia-500/50 transition-all">
 <item.icon className="w-8 h-8 text-fuchsia-400 mb-4"/>
 <h4 className="font-bold text-lg mb-2">{item.title}</h4>
 <p className="text-xs text-subtle-on-light leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Preparing for Your MRI Section */}
 <section className="text-left">
 <div className="mb-12">
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-heading tracking-tighter uppercase uppercase">Preparing for Your 3T MRI</h3>
 <p className="text-slate-600 dark:text-subtle-on-light">Essential benchmarks for a safe and accurate scan.</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {[
 { title: "Metal Safety Audit", desc: "All metallic objects (jewelry, hairpins) must be removed. Please notify us if you have pacemakers or implants."},
 { title: "Comfort Alignment", desc: "Wear loose, comfortable clothing without metal zippers. We provide specialized gowns if required."},
 { title: "Creatinine Check", desc: "For 'Contrast MRI' scans, a recent blood test (Serum Creatinine) is mandatory to ensure kidney safety."}
 ].map((item: any, i: number) => (
 <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-2xl transition-all border-b-4 border-fuchsia-500">
 <h4 className="font-heading text-xl font-bold mb-3">{item.title}</h4>
 <p className="text-sm text-slate-600 dark:text-subtle-on-light leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Clinical FAQ Hub */}
 <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
 <Info className="text-fuchsia-500"/>
 Elite Clinical FAQs: 3T MRI Scan
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
 {[
 {
 q: "Is an MRI Scan painful or radiation-based?",
 a: "No. MRI uses strong magnetic fields and radio waves, not radiation (X-rays). The test is completely painless, though you will hear various 'knocking' or 'buzzing' sounds as the magnet sequences cycle. Our silent technology minimizes this noise significantly."
 },
 {
 q: "What is a 'Contrast' MRI?",
 a: "In some cases, a special gadolinium-based dye is injected into a vein to highlight specific tissues or blood vessels. This provides superior detail for tumors and inflammatory conditions. It is generally very safe and quickly cleared by the kidneys."
 },
 {
 q: "Can I have an MRI if I have a metal implant?",
 a: "It depends on the type and material of the implant. Most modern orthopedic implants (titanium) are MRI-safe. However, older pacemakers, cochlear implants, and certain aneurism clips are strictly prohibited. Our safety officer conducts a thorough screening before every scan."
 },
 {
 q: "How long does a typical MRI scan take?",
 a: "Depending on the body part, a scan can take 20 to 45 minutes. Multiple body parts or contrast scans may take longer. Our 3T magnet is significantly faster than standard machines, reducing table time by up to 30%."
 },
 {
 q: "What is 'Wide-Bore' MRI?",
 a: "Traditional MRI machines have a narrow tunnel. Our wide-bore system has a larger diameter (70cm), providing much more space and air circulation, making it ideal for large-framed patients or those with claustrophobia."
 },
 {
 q: "Why do I need to keep still during the scan?",
 a: "MRI is like taking a long-exposure photograph. Any movement, even slight, can blur the 'slices' and lead to a lack of diagnostic clarity, potentially requiring a re-scan."
 }
 ].map((faq, i) => (
 <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
 <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
 <Zap className="w-4 h-4 mt-1 text-fuchsia-500 shrink-0"/>
 {faq.q}
 </h4>
 <p className="text-slate-600 dark:text-subtle-on-light text-sm leading-relaxed pl-6 antialiased">
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

function MagnetIcon() {
 return (
 <svg xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"className="lucide lucide-magnet"><path d="m6 15-4-4 6.75-6.75a7.75 7.75 0 0 1 10.96 10.96L13 22l-4-4 6.36-6.36a3.25 3.25 0 0 0-4.59-4.59L6 15z"/><path d="M15 10l-2.5-2.5"/><path d="M11 14l-2.5-2.5"/></svg>
 )
}
