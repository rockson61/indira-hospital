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
 Baby,
 Dna,
 Stethoscope
} from 'lucide-react'

export default function DrPraharshithaProfile() {
 const doctor = {
 name: "Dr. Praharshitha Sagiraju",
 slug: "dr-praharshitha-sagiraju",
 designation: "Consultant – Obstetrics, Gynaecology & Fetal Medicine Specialist",
 department: "Obstetrics & Gynaecology",
 image: "/images/doctors/dr-praharshitha.png",
 experience_years: 7,
 education: [
 { degree: "MBBS", institution: "Rangaraya Medical College" },
 { degree: "MD - Obstetrics & Gynaecology", institution: "AIIMS, New Delhi", year: "2020" },
 { degree: "DNB - Obstetrics & Gynaecology", institution: "National Board of Examinations", year: "2021" }
 ],
 procedures: [
 "High-Risk Pregnancy Management",
 "Advanced Laparoscopic Gynae Surgery",
 "Hysteroscopic Myomectomy & Polypectomy",
 "Painless Labour (Epidural Monitoring)",
 "PCOS & Infertility Management",
 "Pelvic Floor Reconstruction",
 "Obstetric Ultrasound & Fetal Screening"
 ],
 memberships: [
 "Federation of Obstetric and Gynaecological Societies of India (FOGSI)",
 "Association of Gynaec Surgeons of India (AGSI)"
 ],
 languages: ["English", "Telugu", "Hindi", "Tamil"]
 };

 const faqItems = [
 {
 question: "What is Dr. Praharshitha's approach to high-risk pregnancy?",
 answer: "Dr. Praharshitha utilizes her AIIMS-standard training to provide advanced fetal monitoring and evidence-based clinical protocols for complex pregnancies, ensuring the highest safety standards for both mother and child."
 },
 {
 question: "Does she perform laparoscopic gynecology surgery?",
 answer: "Yes, she specializes in minimally invasive gynae-endoscopy, including laparoscopic cystectomies and hysteroscopic procedures to treat fibroids and PCOS while preserving fertility."
 }
 ];

 const reviewItems = [
 {
 id: "rev-pra-1",
 patient_name: "Priya Krishnan",
 treatment_received: "Maternity / Delivery",
 rating: 5,
 content: "Had my delivery at Indira Hospital. Dr. Praharshitha was wonderful and the fetal monitoring gave us great peace of mind. Her AIIMS background clearly shows in her professional approach.",
 date_of_visit: "2024-03-12"
 },
 {
 id: "rev-pra-2",
 patient_name: "Meenakshi R.",
 treatment_received: "High-Risk Pregnancy Care",
 rating: 5,
 content: "I had a high-risk pregnancy and Dr. Praharshitha monitored me closely. Her expertise in fetal medicine is unmatched in Vellore. Healthy baby and a very positive experience.",
 date_of_visit: "2024-04-02"
 }
 ];

 return (
 <DoctorTemplate
 doctor={doctor}
 deptName="Obstetrics & Gynaecology"
 deptSlug="obstetrics-gynaecology"
 WHATSAPP_NUMBER="919443224213"
 faqItems={faqItems}
 reviewItems={reviewItems}
 fullDescription={
 <div className="space-y-16">
 {/* Section: Academic Excellence from AIIMS */}
 <section id="philosophy" className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50 text-left">
 <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400/10 blur-3xl -z-10" />
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-rose-500 pl-4 font-heading uppercase tracking-tighter">
 Women’s Health: AIIMS-Standard Fetal Medicine
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 <div className="prose prose-slate dark:prose-invert">
 <p className="text-lg leading-relaxed antialiased font-medium uppercase text-slate-700 dark:text-slate-200 tracking-tight">
 "Excellence in maternity care today is about combining clinical intuition with advanced fetal diagnostics and minimally invasive gynae-solutions."
 </p>
 <p className="mt-4">
 With a residency from **AIIMS, New Delhi**, India's premier medical institution, Dr. Praharshitha Sagiraju brings a level of academic rigour and clinical excellence to Indira Hospital that is unmatched in the region. She specializes in **High-Risk Obstetrics** and **Advanced Fetal Monitoring**, ensuring both mother and baby receive tertiary-level care. 
 </p>
 <p className="mt-4">
 Beyond maternity, she is a master of **Gynae-Endoscopy (Laparoscopy & Hysteroscopy)**. Her surgical philosophy focuses on preserving fertility and minimizing recovery times for procedures like ovarian cystectomies and fibroid removals through precise keyhole techniques.
 </p>
 <div className="mt-8 space-y-4">
 <div className="flex items-center gap-3">
 <Baby className="w-5 h-5 text-rose-600" />
 <span><strong>Fetal Medicine Specialist</strong>: Expert in NT/Target scans and management of complex pregnancies.</span>
 </div>
 <div className="flex items-center gap-3">
 <HeartPulse className="w-5 h-5 text-rose-600" />
 <span><strong>Gynae-Endoscopy</strong>: Minimally invasive solutions for PCOS, Endometriosis, and Fibroids.</span>
 </div>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-rose-100 dark:border-rose-800 shadow-xl flex flex-col justify-center">
 <Activity className="w-16 h-16 text-rose-500 mb-6 font-heading uppercase tracking-widest" />
 <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">OBGY Clinical Benchmarks</h4>
 <ul className="space-y-4 mb-6">
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
 <span className="text-sm"><strong>AIIMS Academic Lineage</strong>: Adhering to the world's most rigorous medical protocols.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
 <span className="text-sm"><strong>Hysteroscopic Specialist</strong>: Resolving uterine issues without abdominal incisions.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
 <span className="text-sm"><strong>Painless Labour</strong>: Expertise in safe epidural-supported delivery management.</span>
 </li>
 </ul>
 <div className="inline-flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-widest">
 <Award className="w-4 h-4" />
 Tertiary OBGY Standard Verified
 </div>
 </div>
 </div>
 </section>

 {/* OBGY Technology row */}
 <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 to-transparent" />
 <h3 className="text-3xl font-bold mb-8 font-heading text-rose-300 uppercase tracking-widest leading-none">Diagnostic & Surgical modality Spectrum</h3>
 <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
 {[
 { title: "HD Hysteroscopy", desc: "Digital visualization of the uterine cavity for diagnosis and therapy.", icon: Monitor },
 { title: "Obstetric Ultrasound", desc: "High-resolution fetal screening and organ monitoring.", icon: Search },
 { title: "3D Laparoscopy", desc: "Depth-perception for complex gynecological reconstructions.", icon: Microscope },
 { title: "Electronic Fetal Monitoring", desc: "Continuous antepartum and intrapartum fetal heart tracking.", icon: HeartPulse }
 ].map((item: any, i: number) => (
 <div key={i} className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group hover:border-rose-500/50 transition-all">
 <item.icon className="w-8 h-8 text-rose-400 mb-4" />
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
