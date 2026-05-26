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
 Camera,
 Mic2,
 Volume2
} from 'lucide-react'

export function ENTDiagnosticsClient() {
 return (
 <DiagnosticTemplate
 title="Elite ENT, Head & Neck Diagnostics"
 slug="ent"
 category="Microsurgery & Endoscopy Hub"
 description={
 <>
 <p>
 Diseases of the Ear, Nose, and Throat often hide deep within complex cavities. At Indira Super Speciality Hospital, we provide **Elite ENT Diagnostics**. Utilizing **4K Ultra-HD Endoscopy** and **Carl Zeiss Microscopic Visualization**, we perform "Optical Biopsies" of the vocal cords, sinuses, and middle ear, ensuring sub-millimeter diagnostic accuracy before any microsurgical intervention.
 </p>
 <p className="mt-4 text-sky-600 dark:text-sky-400 font-semibold italic border-l-4 border-sky-500 pl-4 uppercase tracking-tighter">
 "Visualizing the Depths: Precision endoscopy for sensory excellence."
 </p>
 </>
 }
 quickFacts={[
 { label: 'Technology', value: '4K Ultra-HD / Zeiss', icon: Camera },
 { label: 'Specialist', value: 'Micro-Surgeon Led', icon: Stethoscope },
 { label: 'Result Time', value: 'Instant / Video', icon: PlayCircle },
 { label: 'Accreditation', value: 'NABH Standards', icon: Award }
 ]}
 reportTime="Instant / 12 Hours"
 homeCollection={false}
 fastingRequired={false}
 price="Elite Diagnostic Hub"
 fullDescription={
 <div className="space-y-16">
 {/* Mechanism: 4K Endoscopic Visualization */}
 <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/50 text-left">
 <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 blur-3xl -z-10" />
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-sky-500 pl-4 font-heading uppercase tracking-tighter italic">
 Mechanism: The 'Optical Biopsy' Protocol
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 <div className="prose prose-slate dark:prose-invert">
 <p className="text-lg leading-relaxed antialiased font-medium uppercase italic text-slate-700 dark:text-slate-200 tracking-tight">
 Standard physical exams with mirrors and flashlights cannot see the details of a vocal cord nodule or a deep sinus blockage.
 </p>
 <p className="mt-4">
 Our **Elite ENT Assessment** utilizes **4K Wide-Angle Rigid and Flexible Endoscopes**. This allows us to perform a "Diagnostic Fly-Through" of the nasal passages (Diagnostic Nasal Endoscopy) or the larynx (Rigid Laryngoscopy). By seeing the tissue in ultra-high resolution, our surgeons can differentiate between simple inflammation and early-stage tumors (Dysplasia) without needing surgery.
 </p>
 <p className="mt-4">
 This visual clarity is paired with **Pure Tone Audiometry (PTA)** and **Impedance Audiometry** in our soundproof audiology suite. We measure not just the 'volume' you hear, but the specific frequencies of your hearing loss and the 'pressure' behind your eardrum, allowing us to identify fluid buildup or nerve damage with mathematical certainty.
 </p>
 <div className="mt-8 space-y-4">
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-sky-600" />
 <span><strong>Zeiss Microscopy</strong>: Deep ear canal inspection to detect eardrum perforations or cholesteatoma.</span>
 </div>
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-sky-600" />
 <span><strong>Polysomnography (Sleep Study)</strong>: Identifying obstructive sleep apnea triggers in chronic snorers.</span>
 </div>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-sky-100 dark:border-sky-800 shadow-xl flex flex-col justify-center">
 <Volume2 className="w-16 h-16 text-sky-500 mb-6 font-heading uppercase tracking-widest italic" />
 <h4 className="text-xl font-bold mb-2">ENT Diagnostic Benchmarks</h4>
 <ul className="space-y-4 mb-6">
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 italic antialiased leading-relaxed tracking-normal text-slate-800 dark:text-slate-200 uppercase font-black tracking-widest" />
 <span className="text-sm font-bold uppercase italic font-black tracking-widest text-slate-800 dark:text-slate-200"><strong>Vocal Cord Stroboscopy</strong>: Slow-motion analysis of vocal fold vibration.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
 <span className="text-sm"><strong>Tympanometry Grids</strong>: Mapping middle-ear pressure for pediatric hearing blocks.</span>
 </li>
 </ul>
 <div className="inline-flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-widest">
 <Shield className="w-4 h-4" />
 Microscopic Integrity Verified
 </div>
 </div>
 </div>
 </section>

 {/* Diagnostic Spectrum Grid */}
 <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-sky-950/30 to-transparent" />
 <h3 className="text-3xl font-bold mb-8 italic font-heading text-sky-300 uppercase tracking-widest leading-none">The ENT Diagnostic Spectrum</h3>
 <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
 {[
 { title: "4K Nasal Endoscopy", desc: "Detailed mapping for Sinusitis, Nasal Polyps, and Septal defects.", icon: Camera },
 { title: "Audiometry Suite", desc: "Digital hearing assessments for infants, children, and adults.", icon: Mic2 },
 { title: "Microscopic Otoscopy", desc: "Early detection of ear infections and eardrum pathologies.", icon: Microscope },
 { title: "Laryngeal Strobo", desc: "Advanced voice lab for singers and professional voice users.", icon: Activity }
 ].map((item: any, i: number) => (
 <div key={i} className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group hover:border-sky-500/50 transition-all">
 <item.icon className="w-8 h-8 text-sky-400 mb-4" />
 <h4 className="font-bold text-lg mb-2">{item.title}</h4>
 <p className="text-[10px] text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Transition to Treatment */}
 <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 uppercase font-heading italic">From Diagnosis to Sensory Recovery</h3>
 <p className="mb-10 text-slate-600 dark:text-slate-400 italic">Our diagnostics pave the way for precise, life-changing ENT procedures:</p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {[
 { name: "Functional Endoscopic Sinus Surgery (FESS)", href: "/doctor/near-me/treat/ent/functional-endoscopic-sinus-surgery-fess" },
 { name: "Microlaryngeal Voice Surgery", href: "/doctor/near-me/treat/ent/microlaryngeal-surgery-voice-care" },
 { name: "Coblation Tonsillectomy", href: "/doctor/near-me/treat/ent/coblation-tonsillectomy-and-adenoidectomy" },
 { name: "Micro-Ear Surgery (Tympanoplasty)", href: "/doctor/near-me/treat/ent/tympanoplasty" }
 ].map((item, i) => (
 <a 
 key={i} 
 href={item.href}
 className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 hover:border-sky-500 transition-all group"
 >
 <span className="text-md font-bold text-slate-900 dark:text-white">{item.name}</span>
 <ArrowRightCircle className="w-5 h-5 text-slate-300 group-hover:text-sky-500 group-hover:scale-110 transition-all" />
 </a>
 ))}
 </div>
 </section>
 </div>
 }
 />
 )
}
