'use client'

import React from 'react'
import { DoctorTemplate } from '@/components/healthcare/DoctorTemplate'
import { 
 Zap, 
 Shield, 
 Clock, 
 Award, 
 Activity,
 HeartPulse,
 Search,
 Microscope,
 Target,
 CheckCircle2,
 ArrowRightCircle,
 Star,
 Monitor,
 ZapOff,
 Wind,
 Sparkles,
 Scale,
 AlertCircle,
 Mic2,
 Volume2,
 Ear
} from 'lucide-react'

export default function DrGayathriProfile() {
 const doctor = {
 name: "Dr. Gayathri",
 slug: "dr-gayathri",
 designation: "Consultant – ENT, Head & Neck Surgery",
 department: "ENT",
 image: "/images/doctors/dr-gayathri.png",
 experience_years: 8,
 education: [
 { degree: "MBBS", institution: "Saveetha Medical College" },
 { degree: "MS (Otorhinolaryngology)", institution: "KMCH, Coimbatore" }
 ],
 procedures: [
 "Functional Endoscopic Sinus Surgery (FESS)",
 "Micro-Ear Surgery (Tympanoplasty/Mastoidectomy)",
 "CSF Rhinorrhoea Repair",
 "Coblation-Assisted Tonsillectomy",
 "Septoplasty Keyhole Surgery",
 "Thyroidectomy & Salivary Gland Surgery"
 ],
 memberships: [
 "Association of Otolaryngologists of India (AOI)",
 "Indian Society of Otology"
 ],
 languages: ["English", "Tamil"]
 };

 const faqItems = [
 {
 question: "What is Coblation technology in ENT surgery?",
 answer: "Dr. Gayathri uses Coblation, a low-temperature radiofrequency technique, for tonsil and adenoid removal. This results in significantly less pain and faster recovery compared to traditional heat-based methods."
 },
 {
 question: "Does Dr. Gayathri treat chronic sinus issues?",
 answer: "Yes, she specializes in FESS (Functional Endoscopic Sinus Surgery) using 4K endoscopy to treat chronic sinusitis and nasal polyps with high precision."
 }
 ];

 const reviewItems = [
 {
 id: "rev-gay-1",
 patient_name: "Arjun Murugan",
 treatment_received: "FESS / Sinus Surgery",
 rating: 5,
 content: "Dr. Gayathri performed my sinus surgery with precision. The ENT department has state-of-the-art equipment and the post-operative recovery was smooth. Very satisfied with the results.",
 date_of_visit: "2024-03-20"
 },
 {
 id: "rev-gay-2",
 patient_name: "Suresh M.",
 treatment_received: "Coblation Tonsillectomy",
 rating: 5,
 content: "My son had his tonsils removed by Dr. Gayathri using the laser/coblation method. He was eating normally by the second day! Very grateful for the advanced care.",
 date_of_visit: "2024-04-05"
 }
 ];

 return (
 <DoctorTemplate
 doctor={doctor}
 deptName="Ear, Nose & Throat (ENT)"
 deptSlug="ent"
 WHATSAPP_NUMBER="919443224213"
 faqItems={faqItems}
 reviewItems={reviewItems}
 fullDescription={
 <div className="space-y-16">
 {/* Section: Micro-Surgical Precision */}
 <section id="philosophy" className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/50 text-left">
 <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 blur-3xl -z-10" />
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-sky-500 pl-4 font-heading uppercase tracking-tighter">
 ENT Mastery: The Micro-Surgical Edge
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 <div className="prose prose-slate dark:prose-invert">
 <p className="text-lg leading-relaxed antialiased font-medium uppercase text-slate-700 dark:text-slate-200 tracking-tight">
 "Restoring the clarity of hearing and the ease of breathing requires a sub-millimeter focus and advanced operative visualization."
 </p>
 <p className="mt-4">
 As a specialist in **Micro-Surgical Otorhinolaryngology**, Dr. Gayathri has established a center of excellence for ENT care at Indira Hospital. Her surgical approach leverages **High-Magnification Zeiss Microscopes** and **4K UHD Endoscopy** to treat chronic ear infections and complex sinus pathologies with extreme precision. 
 </p>
 <p className="mt-4">
 She is a pioneer in **Coblation Technology** for tonsil and adenoid removal, a technique that uses low-temperature radiofrequency energy. This ensures significantly less post-operative pain and a rapid return to normal diet compared to traditional cautery methods.
 </p>
 <div className="mt-8 space-y-4">
 <div className="flex items-center gap-3">
 <Microscope className="w-5 h-5 text-sky-600" />
 <span><strong>Micro-Ear Precision</strong>: Repairing eardrums and middle-ear bones with 20x magnification.</span>
 </div>
 <div className="flex items-center gap-3">
 <Wind className="w-5 h-5 text-sky-600" />
 <span><strong>Endoscopic Sinus Mastery</strong>: Clearing polyps and resolving chronic sinusitis via FESS.</span>
 </div>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-sky-100 dark:border-sky-800 shadow-xl flex flex-col justify-center">
 <Activity className="w-16 h-16 text-sky-500 mb-6 font-heading uppercase tracking-widest" />
 <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">ENT Clinical Benchmarks</h4>
 <ul className="space-y-4 mb-6">
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
 <span className="text-sm"><strong>Coblation Excellence</strong>: Minimizing thermal damage for Pediatric ENT surgery.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
 <span className="text-sm"><strong>Sinus Navigation</strong>: Safely managing difficult CSF leaks and sinus tumors.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
 <span className="text-sm"><strong>Vocal Cord Microsurgery</strong>: Restoring voice quality for professionals.</span>
 </li>
 </ul>
 <div className="inline-flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-widest">
 <Award className="w-4 h-4" />
 Elite ENT Standards Verified
 </div>
 </div>
 </div>
 </section>

 {/* ENT Modality row */}
 <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-sky-950/30 to-transparent" />
 <h3 className="text-3xl font-bold mb-8 font-heading text-sky-300 uppercase tracking-widest leading-none">Diagnostic & Surgical Modality Range</h3>
 <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
 {[
 { title: "4K Nasal Endoscopy", desc: "Digital mapping of the nasal passage and sinus ostia.", icon: Monitor },
 { title: "Coblation Plasma", desc: "Low-temperature tissue removal for tonsillitis.", icon: Zap },
 { title: "Micro-Ear Suite", desc: "Zeiss microscopy for tympanic membrane repair.", icon: Microscope },
 { title: "Audiometric Lab", desc: "High-precision hearing and balance assessment.", icon: Volume2 }
 ].map((item: any, i: number) => (
 <div key={i} className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group hover:border-sky-500/50 transition-all">
 <item.icon className="w-8 h-8 text-sky-400 mb-4" />
 <h4 className="font-bold text-lg mb-2">{item.title}</h4>
 <p className="text-[10px] text-slate-400 leading-relaxed antialiased">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>
 </div>
 }
 />
 )
}
