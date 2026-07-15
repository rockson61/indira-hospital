import { Metadata } from "next";
import {
 Briefcase, GraduationCap, Sparkles,
 CheckCircle2, ArrowRight, Mail,
 Globe, HeartHandshake, ShieldPlus
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import Link from "next/link";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";

export const metadata: Metadata = {
 title: "Careers | Join Our Team | Indira Super Speciality Hospital",
 description: "Join the team at Indira Hospital, Vellore. Find job openings for doctors, nurses, paramedics, and healthcare professionals in a world-class infrastructure.",
 alternates: {
 canonical: "/careers"
 }
};

const BENEFITS = [
 {
 title: "World-Class Tech",
 desc: "Work with the latest robotic surgical systems, 3T MRI, and fully modular OTs.",
 icon: <ShieldPlus className="w-6 h-6 text-fuchsia-600 group-hover:scale-110 transition-transform duration-500" />
 },
 {
 title: "Growth Opportunities",
 desc: "Regular CPD programs, workshops, and support for clinical research papers.",
 icon: <GraduationCap className="w-6 h-6 text-fuchsia-600 group-hover:scale-110 transition-transform duration-500" />
 },
 {
 title: "Work-Life Balance",
 desc: "Structured shifts, competitive compensation, and a supportive medical community.",
 icon: <Sparkles className="w-6 h-6 text-fuchsia-600 group-hover:scale-110 transition-transform duration-500" />
 }
];

export default function CareersPage() {
 return (
 <main className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-24">
 {/* ELITE RECRUITMENT HERO */}
 <section className="bg-slate-900 pt-48 pb-48 lg:pt-60 lg:pb-64 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none" />
 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu opacity-50 pointer-events-none" />

 <SectionContainer className="relative z-10 text-center">
 <div className="max-w-4xl mx-auto">
 <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
 <div className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></div>
 Join our Clinical Legacy
 </div>
 <h1 className="elite-hero-title mb-8">
 Build Your Career in <br className="hidden sm:block" />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Excellence.</span>
 </h1>
 <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
 We are looking for passionate healthcare professionals who want to
 shape the future of patient care in Tamil Nadu.
 </p>
 </div>
 </SectionContainer>
 </section>

 {/* BENEFITS BENTO GRID */}
 <SectionContainer className="relative z-20 -mt-24 sm:-mt-32 max-w-6xl mx-auto px-4 mb-24">
 <div className="grid md:grid-cols-3 gap-6">
 {BENEFITS.map((item, i) => (
 <div key={i} className="group bg-white dark:bg-slate-900 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(20,184,166,0.1)] p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
 {/* Hover light sheen */}
 <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

 <div className="mb-8 w-16 h-16 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-2xl flex items-center justify-center group-hover:bg-fuchsia-100 transition-colors duration-500 relative z-10">
 {item.icon}
 </div>
 <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white relative z-10 tracking-tight">{item.title}</h3>
 <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium relative z-10">
 {item.desc}
 </p>
 </div>
 ))}
 </div>
 </SectionContainer>

 {/* OPEN POSITIONS PREVIEW */}
 <section className="bg-slate-50 dark:bg-slate-800 py-16">
 <SectionContainer>
 <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
 <div className="max-w-2xl">
 <h2 className="elite-section-title mb-6 text-slate-900 dark:text-white">Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">Opportunities</span></h2>
 <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
 We are actively hiring for the following departments. Even if you don't see your
 exact role listed, we would love to hear from talented professionals.
 </p>
 </div>
 <Link href="mailto:careers@indirahospitals.com" className="group/btn relative flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-2xl font-black hover:border-slate-300 transition-all shadow-sm overflow-hidden whitespace-nowrap">
 <span className="relative z-10">Send General Application</span>
 <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
 <div className="absolute inset-0 bg-slate-50 dark:bg-slate-800 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-0" />
 </Link>
 </div>

 <div className="grid gap-4">
 {[
 { title: "Consultant Cardiologist", dept: "Interventional Cardiology", type: "Full-Time" },
 { title: "Senior OT Staff Nurse", dept: "Surgery / Pre-Op", type: "Shift-Based" },
 { title: "Advanced Radiology Technician", dept: "Diagnostics / 3T MRI", type: "Full-Time" },
 { title: "Patient Relation Executive", dept: "Administration", type: "Regular" }
 ].map((job, i) => (
 <div key={i} className="group flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-fuchsia-300 hover:shadow-[0_8px_30px_rgba(20,184,166,0.15)] hover:ring-2 hover:ring-fuchsia-500/20 transition-all duration-300 cursor-pointer hover:-translate-y-1 relative overflow-hidden">
 <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-fuchsia-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

 <div className="mb-6 sm:mb-0 sm:pl-4">
 <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-fuchsia-700 transition-colors tracking-tight">{job.title}</h4>
 <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">
 <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md"><Globe className="w-4 h-4 text-fuchsia-600" /> {job.dept}</span>
 <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md"><HeartHandshake className="w-4 h-4 text-pink-600" /> {job.type}</span>
 </div>
 </div>
 <Link href="mailto:careers@indirahospitals.com" className="sm:mr-2 w-full sm:w-auto text-center px-8 py-3.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-black text-sm uppercase tracking-widest group-hover:bg-gradient-to-r group-hover:from-fuchsia-500 group-hover:to-pink-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-fuchsia-500/30 transition-all duration-300 transform group-hover:scale-105">
 Apply Now
 </Link>
 </div>
 ))}
 </div>
 </SectionContainer>
 </section>

 {/* MASSIVE CTA BENTO */}
 <SectionContainer className="py-24">
 <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-fuchsia-950 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl group/cta">
 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu group-hover/cta:bg-fuchsia-500/20 transition-colors duration-700" />
 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu" />

 <div className="max-w-3xl mx-auto relative z-10">
 <div className="w-24 h-24 mx-auto bg-white dark:bg-slate-900 rounded-full flex items-center justify-center mb-8 shadow-inner border border-slate-200 dark:border-slate-800 group-hover/cta:scale-110 transition-transform duration-500">
 <Mail className="w-10 h-10 text-fuchsia-300" />
 </div>
 <h2 className="elite-section-title mb-8">
 Ready to join the <br /> best team in Vellore?
 </h2>
 <p className="text-xl text-fuchsia-100/80 mb-12 font-light leading-relaxed">
 Send your comprehensive CV and a brief cover letter to our Human Resources department.
 We review elite applications on a rolling basis.
 </p>
 <div className="flex justify-center">
 <Link href="mailto:careers@indirahospitals.com" className="elite-button-primary w-full sm:w-auto">
 <span className="relative z-10 tracking-wide">careers@indirahospitals.com</span>
 <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
 </Link>
 </div>
 </div>
 </div>
 </SectionContainer>
 <SectionContainer className="pb-24">
 <InternalLinkGrid type="departments" title="Clinical Specialties" subtitle="Where You Will Work" limit={12} className="bg-white dark:bg-slate-950 rounded-[4rem] border" />
 </SectionContainer>
 </main>
 );
}
