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
 Users,
 Globe,
 Building2
} from 'lucide-react'

export default function DrSoniyaShankarProfile() {
 const doctor = {
 name: "Dr. Soniya Shankar",
 slug: "dr-soniya-shankar",
 designation: "Chief Executive Officer (CEO) | Director – Patient Advocacy & Quality",
 department: "Administration",
 image: "/images/doctors/dr-soniya-shankar.png",
 experience_years: 15,
 education: [
 { degree: "BDS", institution: "Saveetha Medical College" },
 { degree: "Masters in Healthcare Administration", institution: "Apollo Institute" }
 ],
 specialties: [
 "Healthcare Strategy",
 "Clinical Quality Assurance",
 "Patient Experience Design",
 "Medical Tourism Operations",
 "Hospital Accreditation (NABH/NABL)"
 ],
 procedures: [
 "Clinical Protocol Design",
 "Quality Audit Oversight",
 "Patient Safety Frameworks",
 "International Patient Desk Operations",
 "Multi-Specialty Coordination"
 ],
 memberships: [
 "Quality Council of India (QCI)",
 "Hospital Administrators Association"
 ],
 languages: ["English", "Tamil", "Hindi"]
 };

 const faqItems = [
 {
 question: "What is Dr. Soniya Shankar's role in hospital quality?",
 answer: "As the Director of Patient Advocacy & Quality, Dr. Soniya oversees the hospital's NABH and NABL compliance, ensuring that all clinical and surgical procedures meet international safety standards."
 },
 {
 question: "How does she ensure a positive patient experience?",
 answer: "Dr. Soniya designs patient-centric workflows that minimize wait times and maximize comfort, while also spearheading the international patient desk for medical tourism."
 }
 ];

 const reviewItems = [
 {
 id: "rev-son-1",
 patient_name: "Vijayalakshmi S.",
 treatment_received: "Patient Coordination",
 rating: 5,
 content: "The level of organization at Indira Hospital is impressive. Dr. Soniya's leadership in patient advocacy ensures that every concern is addressed promptly. A truly premium hospital experience.",
 date_of_visit: "2024-03-25"
 },
 {
 id: "rev-son-2",
 patient_name: "Ravi Shankar",
 treatment_received: "Insurance Assistance",
 rating: 5,
 content: "The CMCHIS desk at Indira Hospital is very efficient. They handled all the paperwork for my father's surgery, and the cashless process was completely smooth. Kudos to the management team.",
 date_of_visit: "2024-04-15"
 }
 ];

 return (
 <DoctorTemplate
 doctor={doctor}
 deptName="Executive Leadership"
 deptSlug="administration"
 WHATSAPP_NUMBER="919443224213"
 faqItems={faqItems}
 reviewItems={reviewItems}
 fullDescription={
 <div className="space-y-16">
 {/* Section: Visionary Leadership */}
 <section id="philosophy" className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 text-left">
 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/10 blur-3xl -z-10" />
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-indigo-500 pl-4 font-heading uppercase tracking-tighter">
 Leadership Philosophy: The Patient-First Mandate
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 <div className="prose prose-slate dark:prose-invert">
 <p className="text-lg leading-relaxed antialiased font-medium uppercase text-slate-700 dark:text-slate-200 tracking-tight">
 "Quality is not an act, it is a habit. In healthcare, it is the fundamental promise we make to every patient who walks through our doors."
 </p>
 <p className="mt-4">
 As the **Chief Executive Officer (CEO)** of Indira Super Speciality Hospital, Dr. Soniya Shankar is the architect of the platform's clinical quality and patient-experience frameworks. Her specialized background in healthcare administration ensures that the hospital operates at international standards, balancing high-end medical technology with human-centric care.
 </p>
 <p className="mt-4">
 She has been instrumental in securing and maintaining **NABH and NABL accreditations**, ensuring that every surgical and diagnostic department adheres to the world's most stringent safety and quality protocols. Her vision is to make Indira Hospital the premier destination for regional and international patients seeking clinical excellence in Tamil Nadu.
 </p>
 <div className="mt-8 space-y-4">
 <div className="flex items-center gap-3">
 <Shield className="w-5 h-5 text-indigo-600" />
 <span><strong>Quality Custodian</strong>: Overseeing the implementation of evidence-based clinical safety standards.</span>
 </div>
 <div className="flex items-center gap-3">
 <Globe className="w-5 h-5 text-indigo-600" />
 <span><strong>Global Vision</strong>: Scaling medical tourism operations for an international patient footprint.</span>
 </div>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800 shadow-xl flex flex-col justify-center">
 <Building2 className="w-16 h-16 text-indigo-500 mb-6 font-heading uppercase tracking-widest" />
 <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Institutional Excellence Markers</h4>
 <ul className="space-y-4 mb-6">
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
 <span className="text-sm"><strong>NABH Mastery</strong>: Continuous audit-readiness across 20+ specialized clinical units.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
 <span className="text-sm"><strong>Patient Experience</strong>: Designing workflows that minimize wait times and maximize comfort.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
 <span className="text-sm"><strong>Technological Scaling</strong>: Spearheading the procurement of AI-driven surgical robotics.</span>
 </li>
 </ul>
 <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest">
 <Award className="w-4 h-4" />
 Chief Executive’s Quality Assurance
 </div>
 </div>
 </div>
 </section>

 {/* Operational Modalities row */}
 <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 to-transparent" />
 <h3 className="text-3xl font-bold mb-8 font-heading text-indigo-300 uppercase tracking-widest leading-none">Global Operational Mandates</h3>
 <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
 {[
 { title: "NABH Compliance", desc: "100% adherence to national accreditation benchmarks.", icon: Shield },
 { title: "Digital Integration", desc: "Leading the transition to a paperless, cloud-based clinical ecosystem.", icon: Monitor },
 { title: "Patient Advocacy", desc: "Zero-barrier communication between clinicans and patients.", icon: Users },
 { title: "Clinical Governance", desc: "Oversight of ethical and outcome-driven surgical practice.", icon: Scale }
 ].map((item: any, i: number) => (
 <div key={i} className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group hover:border-indigo-500/50 transition-all">
 <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
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
