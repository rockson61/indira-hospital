import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import Link from 'next/link'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Oncology & Cancer Center in Vellore, Tamil in Vellore | I...",
 description: "Advanced Oncology & Cancer Center in Vellore, Tamil Nadu surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care,...",
 path: "/doctor/near-me/treat/oncology"
});

export default function OncologyDepartmentPage() {
 return (
 <DepartmentTemplate
 title="Oncology & Cancer Center in Vellore, Tamil Nadu"
 slug="oncology"
 shortDescription="Multidisciplinary cancer care combining radical surgical precision with the latest targeted medical therapies."
 fullDescription={(
 <div className="oncology-pillar-content space-y-20 text-left">
 {/* ── 1. The Oncology Mission: A Multidisciplinary Approach ───── */}
 <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
 <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic border-l-8 border-rose-600 pl-6 mb-8 uppercase tracking-tight text-left">
 Radical Precision: Excellence in Comprehensive Cancer Care
 </h2>
 <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
 <p>
 The <strong>Department of Oncology</strong> at Indira Super Speciality Hospital is a dedicated Regional Center for the diagnosis and management of solid tumors and hematological malignancies. We operate on a fundamental clinical philosophy: <strong>No cancer patient fights alone.</strong> Our hospital utilizes a <strong>Multidisciplinary Tumor Board (MTB)</strong>, where surgical oncologists, medical oncologists, clinical nutritionists, and pain management specialists come together to architect a personalized curative roadmap for every patient.
 </p>
 <p className="mt-4">
 Our facility is designed to provide high-authority oncology services including radical curative resections in HEPA-filtered operating theaters and systemic chemotherapy in a specialized, nurse-monitored day-care unit.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
 <div className="p-8 bg-rose-50 dark:bg-rose-900/20 rounded-[2.5rem] border border-rose-100 dark:border-rose-800 shadow-sm relative overflow-hidden group">
 <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-3xl group-hover:bg-rose-500/20 transition-all"></div>
 <h4 className="text-2xl font-bold text-rose-900 dark:text-rose-200 mb-4 flex items-center gap-2 italic">
 The Tumor Board Synergy
 </h4>
 <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
 "A second opinion is built into our standard of care." Every major curative plan is reviewed by our cross-specialty board to ensure all therapeutic angles—surgical, systemic, and supportive—are optimized for the best possible outcome.
 </p>
 <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter shadow-sm">
 <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-rose-100 dark:border-rose-700">MTB Governance</span>
 <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-rose-100 dark:border-rose-700">Personalized Protocols</span>
 </div>
 </div>
 <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
 <div className="absolute inset-0 bg-rose-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
 <h4 className="text-2xl font-bold text-rose-300 mb-4 italic uppercase tracking-tighter">Radical Surgical Oncology</h4>
 <p className="text-rose-100/60 text-sm leading-relaxed mb-6 italic font-medium">
 Leading the region in curative resections for Breast, Oral, and GI cancers. We focus on <strong>R0 Resection</strong>—achieving microscopic negative margins to ensure total tumor clearance.
 </p>
 <ul className="space-y-2">
 <li className="flex items-center gap-2 text-[10px] font-black text-rose-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> HEPA-Filtered Radical OTs</li>
 <li className="flex items-center gap-2 text-[10px] font-black text-rose-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> Sentinel Node Mapping</li>
 </ul>
 </div>
 </div>
 </section>

 {/* ── 2. Specialized Oncology Verticals ────────────────────────── */}
 <section className="oncology-verticals space-y-16">
 <div className="text-center max-w-3xl mx-auto">
 <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">The 3 Pillars of Curative Intent</h2>
 <div className="h-1 w-24 bg-rose-600 dark:bg-rose-500 mx-auto mt-4 rounded-full"></div>
 </div>

 <div className="grid md:grid-cols-3 gap-8 text-left">
 {/* Vertical 1: Surgical Oncology */}
 <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
 <div className="p-8 flex-1 flex flex-col justify-between">
 <div>
 <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Surgical Onco</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">High-precision radical resections using advanced energy devices and magnified visualization for complex tumors.</p>
 <ul className="space-y-3 mb-8">
 {["Modified Radical Mastectomy", "Whipple&apos;s Procedure (GI)", "Commando Surgery (Oral Cancers)", "Colorectal Rectopexy & Resection"].map(i => (
 <li key={i} className="flex items-start gap-2 text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
 <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></div> {i}
 </li>
 ))}
 </ul>
 </div>
 <Link href="/doctor/near-me/treat/oncology/surgical-oncology-center" className="p-4 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white text-center text-[10px] font-black hover:bg-rose-600 transition-colors uppercase tracking-widest italic">
 View Surgical Unit
 </Link>
 </div>
 </div>

 {/* Vertical 2: Medical Oncology */}
 <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
 <div className="p-8 flex-1 flex flex-col justify-between">
 <div>
 <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Medical Onco</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Systemic management of cancer through targeted molecular therapy and world-class immune-oncology protocols.</p>
 <ul className="space-y-3 mb-8">
 {["Day-Care Chemotherapy Unit", "Monoclonal Antibody Infusion", "Targeted Oral TKI Therapy", "Biological Response Modifiers"].map(i => (
 <li key={i} className="flex items-start gap-2 text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
 <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></div> {i}
 </li>
 ))}
 </ul>
 </div>
 <Link href="/doctor/near-me/treat/oncology/medical-oncology-chemotherapy" className="p-4 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white text-center text-[10px] font-black hover:bg-rose-600 transition-colors uppercase tracking-widest italic">
 View Systemic Unit
 </Link>
 </div>
 </div>

 {/* Vertical 3: Supportive Care */}
 <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
 <div className="p-8 flex-1 flex flex-col justify-between">
 <div>
 <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Onco-Rehab</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Dignified pain management, nutritional support, and psychological counseling to enhance quality of life.</p>
 <ul className="space-y-3 mb-8">
 {["Pain Management Protocols", "Cancer Nutrition Mapping", "Physiotherapy for Lymphedema", "Counseling & Caregiver Support"].map(i => (
 <li key={i} className="flex items-start gap-2 text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
 <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></div> {i}
 </li>
 ))}
 </ul>
 </div>
 <Link href="/doctor/near-me/treat/oncology/medical-oncology-chemotherapy" className="p-4 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white text-center text-[10px] font-black hover:bg-rose-600 transition-colors uppercase tracking-widest italic">
 View Support Unit
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* ── 3. Educational Deep-Dive: Recognizing & Screening ────────── */}
 <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-rose-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-rose-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
 <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px] -mr-32 -mt-32"></div>
 <h3 className="text-rose-900 dark:text-rose-400 font-black uppercase text-3xl tracking-tighter not-italic font-heading italic">Early Detection: The Silent Shield</h3>
 <p>
 Cancer is most curable when detected before symptoms even manifest. At Indira Hospital, we empower the community with specialized screening packages. Early diagnosis through mammography, pap smears, and colposcopy turns "Life-Threatening" conditions into "Manageable" clinical events.
 </p>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
 {[
 { k: "Breast", v: "Mammography @40" },
 { k: "Cervix", v: "Pap Smear @25" },
 { k: "Oral", v: "Biopsy Screening" },
 { k: "Colon", v: "Colonoscopy @45" }
 ].map(item => (
 <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-rose-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-rose-600">
 <p className="text-4xl font-black text-rose-600 mb-2 font-heading italic uppercase tracking-tighter">{item.k}</p>
 <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
 </div>
 ))}
 </div>
 <p className="font-bold text-slate-900 dark:text-slate-100 italic">
 A diagnosis is just a word, not a sentence. Our <strong>Tumor Board Protocols</strong> are designed to ensure that psychological healing occurs alongside physiological recovery.
 </p>
 </section>

 {/* ── 4. Advanced Oncology FAQs ───────────────────────────────── */}
 <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
 <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 blur-[150px] -ml-48 -mb-48"></div>
 
 <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-heading uppercase tracking-tighter text-rose-400 text-left">
 Oncology Excellence: Clinical FAQ Guide
 </h3>
 
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
 {[
 {
 q: "What is the benefit of a 'Day-Care' Chemotherapy Unit?",
 a: "Chemotherapy doesn&apos;t always require long hospitalizations. Our 24/7 Day-Care Unit allows patients to receive their infusible targeted therapy or immunotherapy in a comfortable environment and return home the same day, maintaining their family support structure."
 },
 {
 q: "Is surgery always the first step in cancer treatment?",
 a: "Not necessarily. Depending on the tumor type and stage, our Tumor Board may recommend 'Neoadjuvant' Therapy (Chemotherapy or Radiation before surgery) to shrink the tumor and make surgical removal safer and more effective."
 },
 {
 q: "What are the common side effects of modern targeted chemotherapy?",
 a: "Unlike traditional chemotherapy which impacts all fast-growing cells, modern 'Targeted Therapy' specific molecules in the cancer cells. Side-effects are often more manageable, though they require careful monitoring of cardiac, liver, and skin health by our onco-medical team."
 },
 {
 q: "Are cancer biopsies safe? Do they 'spread' the cancer?",
 a: "This is a common myth. Clinical evidence proves that a controlled, medically performed biopsy (FNAC or Core Biopsy) is the ONLY way to definitively diagnose cancer and determine its molecular type. It does not spread the cancer when performed by experts."
 },
 {
 q: "What is Palliative Oncology?",
 a: "Palliative care isn&apos;t just for 'end-of-life.' It&apos;s about optimizing quality of life from day one of diagnosis. We focus on controlling pain, managing fatigue, and providing nutritional and psychological support alongside curative treatments."
 },
 {
 q: "Does Indira Hospital treat pediatric (childhood) cancers?",
 a: "We provide diagnostic screening and supportive care for pediatric oncology. Curative systemic treatment for complex childhood cancers is usually coordinated with our academic partner institutions for the highest level of specialized pediatric care."
 }
 ].map((faq, i) => (
 <div key={i} className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-white dark:bg-slate-900 transition-all group">
 <h4 className="font-black text-rose-100 mb-6 flex items-start gap-4 italic group-hover:text-rose-400 transition-colors text-lg">
 <span className="text-rose-500 text-2xl font-serif">Q.</span>
 <span>{faq.q}</span>
 </h4>
 <p className="text-slate-400 text-sm leading-relaxed antialiased pl-8 font-medium font-heading">
 {faq.a}
 </p>
 </div>
 ))}
 </div>
 </section>
 </div>
 )}
 procedures={[
 { name: "Surgical Resection", link: "/doctor/near-me/treat/oncology/surgical-oncology-center" },
 { name: "Targeted Chemotherapy", link: "/doctor/near-me/treat/oncology/medical-oncology-chemotherapy" },
 { name: "Precision Immunotherapy", link: "/doctor/near-me/treat/oncology/medical-oncology-chemotherapy" },
 { name: "Breast Cancer Surgery", link: "/doctor/near-me/treat/oncology/surgical-oncology-center" },
 { name: "Colorectal Onco-Surgery", link: "/doctor/near-me/treat/oncology/surgical-oncology-center" },
 { name: "Supportive Cancer Care", link: "/doctor/near-me/treat/oncology/medical-oncology-chemotherapy" }
 ]}
 technology={[
 {
 name: "HEPA-Filtered Oncology OT",
 description: "Specialized ultra-clean theater system that minimizes infection risk during major curative resections.",
 icon: "Shield"
 },
 {
 name: "Oncology Drug Safety Bench",
 description: "Advanced Bio-Safety cabinet for the precise and safe preparation of chemotherapy and targeted drugs.",
 icon: "Microscope"
 }
 ]}
 relatedServices={[
 {
 title: "Surgical Oncology Center",
 description: "Expert curative resections for solid tumors using both open and minimally invasive methods.",
 slug: "surgical-oncology-center"
 },
 {
 title: "Medical Oncology Unit",
 description: "Elite unit for targeted systemic therapy, immunotherapy, and pain management focus.",
 slug: "medical-oncology-chemotherapy"
 }
 ]}
 quickFacts={[
 { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
 { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
 { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
 { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
 ]}
 relatedDoctors={[]} // Auto-population from template
 />
 )
}