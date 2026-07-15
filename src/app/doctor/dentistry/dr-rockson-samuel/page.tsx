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
 Smile,
 Camera,
 Layers
} from 'lucide-react'

export default function DrRocksonSamuelProfile() {
 const doctor = {
 name: "Dr. Rockson Samuel",
 slug: "dr-rockson-samuel",
 designation: "Chief Dentist & Implantologist | Ultimate Smile Design Specialist",
 department: "Dentistry",
 image: "/images/doctors/dr-rockson-samuel.png",
 experience_years: 15,
 education: [
 { degree: "BDS", institution: "Saveetha Dental College", year: "2010" },
 { degree: "Advanced Training in Digital Dentistry", institution: "Osstem Implants", year: "2015" }
 ],
 specialties: [
 "Digital Smile Design (DSD)",
 "Cosmetic Dentistry",
 "Implantology",
 "Full Mouth Rehabilitation",
 "Laser Dentistry"
 ],
 procedures: [
 "Single Day Dental Implants",
 "All-on-4 / All-on-6 Implant Reconstruction",
 "Veneers & Laminates (Smile Makeover)",
 "Laser Root Canal Treatment",
 "Teeth Whitening (Zoom Technology)",
 "Invisalign - Clear Aligner Therapy",
 "Painless Dental Extractions"
 ],
 memberships: [
 "Indian Dental Association (IDA)",
 "International Congress of Oral Implantologists (ICOI)"
 ],
 languages: ["English", "Tamil", "Hindi"]
 };

 const faqItems = [
 {
 question: "What is Digital Smile Design (DSD)?",
 answer: "DSD is a cutting-edge technology that allows us to digitally plan and visualize your new smile before we start any procedure. This ensures anatomical perfection and allows you to 'test-drive' your smile."
 },
 {
 question: "Do you offer single-day dental implants?",
 answer: "Yes, Dr. Rockson specializes in 'Immediate Loading' implants, where we can often replace a missing tooth in a single day using digital intraoral scanning and CAD/CAM technology."
 }
 ];

 const reviewItems = [
 {
 id: "rev-rock-1",
 patient_name: "Suresh Mani",
 treatment_received: "Dental Implants",
 rating: 5,
 content: "I was hesitant about implants, but Dr. Rockson Samuel made it easy. The digital scanning was so much better than traditional molds. The result looks completely natural.",
 date_of_visit: "2024-03-28"
 },
 {
 id: "rev-rock-2",
 patient_name: "Divya Bhaskar",
 treatment_received: "Smile Makeover / Veneers",
 rating: 5,
 content: "Got my veneers done at the Ultimate Smile Design center. The 3D preview allowed me to see the result beforehand. Dr. Rockson's attention to detail is amazing.",
 date_of_visit: "2024-04-10"
 }
 ];

 return (
 <DoctorTemplate
 doctor={doctor}
 deptName="Advanced Dentistry & Implantology"
 deptSlug="dentistry"
 WHATSAPP_NUMBER="917010650063"
 faqItems={faqItems}
 reviewItems={reviewItems}
 fullDescription={
 <div className="space-y-16">
 {/* Section: Digital Smile Design Philosophy */}
 <section id="philosophy" className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 text-left">
 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/10 blur-3xl -z-10" />
 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-indigo-500 pl-4 font-heading uppercase tracking-tighter">
 Smile Architecture: The Digital Difference
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 <div className="prose prose-slate dark:prose-invert">
 <p className="text-lg leading-relaxed antialiased font-medium uppercase text-slate-700 dark:text-slate-200 tracking-tight">
 "A perfect smile is a blend of facial harmony, structural strength, and digital precision. We don't just treat teeth; we design confidence."
 </p>
 <p className="mt-4">
 As the **Chief Dentist and Implantologist** at Indira Hospital's Ultimate Smile Design center, Dr. Rockson Samuel has pioneered **Digital Smile Design (DSD)** in Vellore. This technology allows patients to "test-drive" their new smile before a single procedure begins, ensuring predictable and aesthetically superior outcomes.
 </p>
 <p className="mt-4">
 His expertise in **Implantology** focuses on "Immediate Loading" techniques, allowing for single-day tooth replacements. By utilizing **Intraoral Scanners** and 3D imaging, he eliminates the need for messy traditional impressions, making the dental journey entirely digital and frictionless.
 </p>
 <div className="mt-8 space-y-4">
 <div className="flex items-center gap-3">
 <Camera className="w-5 h-5 text-indigo-600" />
 <span><strong>DSD Protocol</strong>: Digital mapping for anatomically perfect smile makeovers.</span>
 </div>
 <div className="flex items-center gap-3">
 <Zap className="w-5 h-5 text-indigo-600" />
 <span><strong>Laser Dentistry</strong>: Painless soft-tissue therapy and laser-assisted RCT.</span>
 </div>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800 shadow-xl flex flex-col justify-center">
 <Smile className="w-16 h-16 text-indigo-500 mb-6 font-heading uppercase tracking-widest" />
 <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Dental Excellence Benchmarks</h4>
 <ul className="space-y-4 mb-6">
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
 <span className="text-sm"><strong>Painless Experience</strong>: Utilizing advanced local anaesthesia and laser protocols.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
 <span className="text-sm"><strong>Zero-Impression Tech</strong>: Using Itero intraoral scanners for 100% accuracy.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
 <span className="text-sm"><strong>Biocompatible Materials</strong>: Using only premium E-Max and Zirconia for restorations.</span>
 </li>
 </ul>
 <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest">
 <Award className="w-4 h-4" />
 Vellore’s Highest Rated Dental Center
 </div>
 </div>
 </div>
 </section>

 {/* Dental Technology Row */}
 <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 to-transparent" />
 <h3 className="text-3xl font-bold mb-8 font-heading text-indigo-300 uppercase tracking-widest leading-none">The Digital Dental Ecosystem</h3>
 <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
 {[
 { title: "Itero 3D Scanner", desc: "Digital intraoral mapping with 100% precision.", icon: Monitor },
 { title: "Diode Dental Laser", desc: "Bloodless gum contouring and disinfection.", icon: Zap },
 { title: "D-Max CAD/CAM", desc: "In-house design for rapid ceramic crown manufacturing.", icon: Layers },
 { title: "Digital X-Ray (RVG)", desc: "Low-radiation instant imaging for diagnostic clarity.", icon: Search }
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
