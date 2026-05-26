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

export function GeneralSurgeryDiagnosticsClient() {
 return (
 <DiagnosticTemplate
 title="Elite General Surgery Diagnostics"
 slug="general-surgery"
 category="Surgical & Oncology Hub"
 description={
 <>
 <p>
 Precision surgery is impossible without a definitive diagnostic foundation. At Indira Super Speciality Hospital, we provide **Elite Pre-Surgical Diagnostics**. From **High-Definition Ultrasonography (HD-USG)** for hernia mapping to **Ultrasound-Guided FNAC** for breast and thyroid lesions, we ensure every surgical procedure is backed by microscopic and radiological certainty.
 </p>
 <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold italic border-l-4 border-emerald-500 pl-4 uppercase tracking-tighter italic">
 "Surgical Mapping: Visualizing the path to precision recovery."
 </p>
 </>
 }
 quickFacts={[
 { label: 'Technology', value: '4K HD-USG / FNAC', icon: Microscope },
 { label: 'Specialist', value: 'Surgeon-Led Audit', icon: Stethoscope },
 { label: 'Result Time', value: '24-48 Hours', icon: Clock },
 { label: 'Accreditation', value: 'NABH Standards', icon: Award }
 ]}
 reportTime="24-48 Hours"
 homeCollection={false}
 fastingRequired={false}
 price="Precision Assessment"
 fullDescription={
 <div className="space-y-16">
 {/* Mechanism: The Pre-Surgical Audit */}
 <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 text-left">
 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-3xl -z-10" />
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4 font-heading uppercase tracking-tighter italic">
 Mechanism: Pre-Operative Mapping Protocol
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 <div className="prose prose-slate dark:prose-invert">
 <p className="text-lg leading-relaxed antialiased font-medium uppercase italic text-slate-700 dark:text-slate-200 tracking-tight">
 A general surgical consult is only as strong as the imaging that supports it.
 </p>
 <p className="mt-4">
 Our **Elite General Surgery Assessment** utilizes a dual-layered mapping strategy. First, we use **4K High-Definition Ultrasound (HD-USG)** to visualize the abdominal wall for hernias or the gallbladder for stone size and wall thickness. This allows us to predict the 'difficulty level' of a laparoscopic procedure before the patient enters the operating theater.
 </p>
 <p className="mt-4">
 Secondly, for oncology-focused cases (Breast, Thyroid), we utilize **Ultrasound-Guided FNAC (Fine Needle Aspiration Cytology)**. This "Liquid Biopsy" allows us to extract microscopic cellular samples from a suspicious lump with minimal discomfort. These cells are then analyzed by our senior pathologists to differentiate between benign tissue and malignant growth, ensuring surgical intervention is only performed when medically necessary.
 </p>
 <div className="mt-8 space-y-4">
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
 <span><strong>Vascular Mapping</strong>: Evaluating blood flow (Doppler) for diabetic foot and varicose vein staging.</span>
 </div>
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
 <span><strong>Oncology Biopsy</strong>: Precision tissue extraction for histopathological validation.</span>
 </div>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-xl flex flex-col justify-center">
 <HeartPulse className="w-16 h-16 text-emerald-500 mb-6 font-heading uppercase tracking-widest italic" />
 <h4 className="text-xl font-bold mb-2">Surgical Safety Benchmarks</h4>
 <ul className="space-y-4 mb-6">
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 italic antialiased leading-relaxed tracking-normal text-slate-800 dark:text-slate-200 uppercase font-black tracking-widest" />
 <span className="text-sm font-bold uppercase italic font-black tracking-widest text-slate-800 dark:text-slate-200"><strong>Hernia Site Analysis</strong>: Measuring the fascial defect size for 3D mesh planning.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
 <span className="text-sm"><strong>Gallbladder Wall Audit</strong>: Detecting inflammation zones for silent cholecystitis triage.</span>
 </li>
 </ul>
 <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
 <Shield className="w-4 h-4" />
 Surgical Integrity Verified
 </div>
 </div>
 </div>
 </section>

 {/* Diagnostic Spectrum Grid */}
 <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-transparent" />
 <h3 className="text-3xl font-bold mb-8 italic font-heading text-emerald-300 uppercase tracking-widest leading-none">Surgical Diagnostics Spectrum</h3>
 <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
 {[
 { title: "HD Abdominal USG", desc: "Expert mapping for Appendicitis, Gallstones, and Hernia defects.", icon: Camera },
 { title: "Ultrasound FNAC", desc: "Precision tissue sampling for Thyroid nodules and Breast lumps.", icon: Microscope },
 { title: "Varicose Doppler", desc: "Venous mapping for Laser (EVLA) vein ablation planning.", icon: Waves },
 { title: "Soft Tissue USG", desc: "Evaluating Lipomas, Sebaceous cysts, and deep-seated swellings.", icon: Activity }
 ].map((item: any, i: number) => (
 <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-2xl transition-all border-b-4 border-emerald-500">
 <h4 className="font-heading text-xl font-bold mb-3 italic">{item.title}</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Transition to Treatment */}
 <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 uppercase font-heading italic">From Diagnosis to Laparoscopic Cure</h3>
 <p className="mb-10 text-slate-600 dark:text-slate-400 italic">Explore our advanced general surgical procedures supported by these diagnostics:</p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {[
 { name: "Laparoscopic Cholecystectomy (Gallbladder)", href: "/doctor/near-me/treat/general-surgery/laparoscopic-cholecystectomy-gallbladder-removal" },
 { name: "Laparoscopic Hernia Repair", href: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair-surgery" },
 { name: "Thyroidectomy (Thyroid Surgery)", href: "/doctor/near-me/treat/general-surgery/thyroidectomy" },
 { name: "Laser Varicose Veins Treatment", href: "/doctor/near-me/treat/general-surgery/laser-varicose-veins-treatment" }
 ].map((item, i) => (
 <a 
 key={i} 
 href={item.href}
 className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 hover:border-emerald-500 transition-all group"
 >
 <span className="text-md font-bold text-slate-900 dark:text-white">{item.name}</span>
 <ArrowRightCircle className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:scale-110 transition-all" />
 </a>
 ))}
 </div>
 </section>
 </div>
 }
 />
 )
}
