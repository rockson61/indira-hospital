"use client";
// Force cache invalidation

import Link from "next/link";
import { BriefcaseMedical, ArrowRight } from "lucide-react";
import { Stethoscope, Microscope } from "healthicons-react/outline";
import { SectionContainer } from "@/components/ui/section-container";

const providerGroups = [
 {
 title: "Clinical Practice",
 icon: Stethoscope,
 description: "Access essential resources for referring patients, clinical guidelines, and finding appropriate departments.",
 links: [
 { label: "Refer a Patient", href: "/contact" },
 { label: "Institutes & Departments", href: "/departments" },
 { label: "Find a Specialist", href: "/doctors" },
 { label: "Clinical Guidelines", href: "/about" },
 ]
 },
 {
 title: "Academic & Research",
 icon: Microscope,
 description: "Engage with our medical education programs, residency options, and ongoing clinical trials.",
 links: [
 { label: "Medical Education", href: "/about" },
 { label: "Residency & Fellowship", href: "/careers" },
 { label: "Clinical Trials", href: "/about" },
 { label: "Research Institute", href: "/about" },
 ]
 },
 {
 title: "Careers & Recruitment",
 icon: BriefcaseMedical,
 description: "Join our world-class team of healthcare professionals. Explore nursing, physician, and administrative roles.",
 links: [
 { label: "Physician Recruitment", href: "/careers" },
 { label: "Nursing Careers", href: "/careers" },
 { label: "Allied Health Roles", href: "/careers" },
 { label: "Student Programs", href: "/careers" },
 ]
 }
];

export function ProviderResources() {
 return (
 <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/50 relative overflow-hidden">
 {/* Background Accents */}
 <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

 <SectionContainer className="relative z-10">
 <div className="max-w-4xl mb-16">
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-6">
 For Medical Professionals
 </h2>
 <p className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
 Dedicated portals, continuous education, and advanced clinical tools designed to support healthcare providers and advancing medicine together.
 </p>
 </div>

 <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
 {providerGroups.map((group, idx) => {
 const Icon = group.icon;

 return (
 <div
 key={idx}
 className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/60 dark:border-slate-800/80 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-500 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.1)] overflow-hidden flex flex-col"
 >
 <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

 <div className="relative z-10 mb-8 flex-shrink-0">
 <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-sm">
 <Icon className="w-8 h-8" />
 </div>
 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
 {group.title}
 </h3>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm">
 {group.description}
 </p>
 </div>

 <div className="w-full h-px bg-slate-200/60 dark:bg-slate-800 mb-6 relative z-10" />

 <ul className="space-y-4 flex-1 relative z-10">
 {group.links.map((link, linkIdx) => (
 <li key={linkIdx}>
 <Link
 href={link.href}
 className="group/link flex items-start gap-2 text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
 >
 <span className="border-b border-transparent group-hover/link:border-current pb-0.5 transition-colors leading-tight">
 {link.label}
 </span>
 </Link>
 </li>
 ))}
 <li className="pt-2 mt-auto">
 <Link
 href={group.links[0].href}
 className="group/btn inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
 >
 Explore section
 <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover/btn:translate-x-1 group-hover/btn:opacity-100 transition-all" />
 </Link>
 </li>
 </ul>
 </div>
 );
 })}
 </div>
 </SectionContainer>
 </section>
 );
}
