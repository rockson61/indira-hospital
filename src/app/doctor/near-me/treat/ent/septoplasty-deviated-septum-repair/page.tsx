import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Elite Septoplasty: Deviated Septum Restora in Vellore | I...",
 description: "Advanced Elite Septoplasty: Deviated Septum Restoration surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care, ...",
 path: "/doctor/near-me/treat/ent/septoplasty-deviated-septum-repair"
});

export default function SeptoplastyPage() {
 return (
 <SubServiceTemplate
 title="Elite Septoplasty: Deviated Septum Restoration"
 slug="septoplasty-deviated-septum-repair"
 parentServiceSlug="ent"
 departmentName="Indira Elite ENT Hub"
 description={
 <article>
 <p className="text-lg leading-relaxed">
 <strong>Elite Septoplasty: Deviated Septum Restoration</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
 </p>
 </article>
 }
 quickFacts={[
 { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
 { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
 { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
 { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
 ]}
 duration="45-60 Minutes"
 hospitalStay="Daycare / 1 night"
 recoveryTime="5-7 Days"
 anesthesia="General Anesthesia"
 reviews={{
 entityType: 'service',
 entityName: 'Septoplasty',
 entitySlug: 'septoplasty-deviated-septum-repair'
 }}
 fullDescription={
 <div className="space-y-16">
 {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
 <AioKnowledgeBlock 
 title="Quick Facts: Elite Septoplasty: Deviated Septum Restoration in Vellore"
 items={[
 { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
 { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
 { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
 { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
 ]}
 />

 <article className="space-y-12">
 {/* Mechanism: Restoring Nasal Throughput */}
 <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-3xl -z-10" />
 <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4 font-heading">
 Mechanism: Restoring Nasal Throughput
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 <div className="prose prose-slate dark:prose-invert">
 <p className="text-lg leading-relaxed">
 The nasal septum is the central "pillar" of the nose. When it deviates, it creates a narrow bottleneck that increases airflow resistance. This forces the body into chronic mouth-breathing, which bypasses the nose's natural filtering and humidifying system.
 </p>
 <p className="mt-4">
 **Elite Septoplasty** at Indira is performed using high-power fiberoptic endoscopes. Unlike traditional surgery, which depends on external lighting, our surgeons can see "around the corner" to address posterior bone spurs and complex deviations that cause persistent blockages.
 </p>
 <div className="mt-8 space-y-4">
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
 <span><strong>Microsurgical Reshaping</strong>: Preservation of healthy cartilage while removing only the obstructed segments.</span>
 </div>
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
 <span><strong>Sub-perichondrial Dissection</strong>: Protecting the mucosal lining to prevent post-op dryness and scarring.</span>
 </div>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-xl flex flex-col justify-center">
 <Wind className="w-16 h-16 text-emerald-500 mb-6" />
 <h4 className="text-xl font-bold mb-2">The "No-Pack" Protocol</h4>
 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
 We have eliminated the "Dreaded Nasal Packing." We use internal silicone splints with built-in airways, allowing you to breathe through your nose immediately after waking up from surgery.
 </p>
 <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
 <Shield className="w-4 h-4" />
 Elite Recovery Assurance
 </div>
 </div>
 </div>
 </section>

 {/* Pre-Op Diagnostic Audit */}
 <section>
 <div className="text-center max-w-3xl mx-auto mb-12">
 <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4">Precision Pre-Surgical Audit</h3>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
 A successful septoplasty requires precise anatomical mapping. We investigate both the bone structure and the soft tissue (turbinates) to ensure maximum throughput.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {[
 {
 title: "DNE Mapping",
 desc: "Diagnostic Nasal Endoscopy to identify high-deviations and spurs that traditional exams might miss.",
 icon: Search
 },
 {
 title: "Turbinate Assessment",
 desc: "Evaluating the Inferior Turbinates for 'Compensatory Hypertrophy' which often accompanies a deviated septum.",
 icon: Activity
 },
 {
 title: "CT-Nasal Analysis",
 desc: "High-resolution imaging to rule out co-existing sinus conditions or Haller cells that impact breathing.",
 icon: Navigation
 }
 ].map((item, i) => (
 <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all">
 <item.icon className="w-12 h-12 text-emerald-600 mb-6" />
 <h4 className="text-xl font-bold mb-3">{item.title}</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Technical Deep Dive: Turbinate Reduction */}
 <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-transparent" />
 <h3 className="font-heading text-3xl font-bold mb-4">Synergy: Septoplasty + Turbinate Reduction</h3>
 <p className="text-slate-400 max-w-2xl mx-auto mb-12">
 When the septum is bent to one side, the other side often grows larger (Hypertrophy). At Indira, we automatically address both to ensure total breathing balance.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
 {[
 { day: "Day 0", title: "Micro-Dissection", text: "Endoscopic alignment of cartilage with zero external cuts." },
 { day: "Day 1", title: "Home Free", text: "Most patients discharged within 24 hours with minimal bruising." },
 { day: "Day 7", title: "Splint Removal", text: "Removing the silicone splints in the clinic. Immediate surge in airflow." },
 { day: "Week 4", title: "Peak Health", text: "Restoration of sense of smell and elimination of mouth-breathing." }
 ].map((step, i) => (
 <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
 <p className="text-emerald-400 font-bold mb-2">{step.day}</p>
 <h5 className="font-bold text-sm mb-2">{step.title}</h5>
 <p className="text-xs text-slate-400 leading-relaxed">{step.text}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Clinical FAQ Hub */}
 <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
 <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
 <Info className="text-emerald-500" />
 Elite Clinical FAQs: Septoplasty
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
 {[
 {
 q: "Will a Septoplasty change the shape of my nose?",
 a: "No. Septoplasty is a functional surgery performed entirely inside the nasal cavity. It focuses on the internal foundation and does not alter the external cosmetics of the nose unless combined with Rhinoplasty."
 },
 {
 q: "Is the surgery performed under General Anesthesia?",
 a: "Yes. To ensure absolute surgical precision and patient comfort, especially during endoscopic maneuvers, septoplasty is performed under GA with controlled monitoring."
 },
 {
 q: "How soon can I stop mouth-breathing?",
 a: "With our 'No-Pack' protocol using silicone splints, many patients can breathe through their nose immediately after surgery. However, total comfort is reached after splint removal on Day 7."
 },
 {
 q: "Can the deviation return?",
 a: "Cartilage has 'memory.' Our surgical team utilizes specialized 'cross-hatching' and 'scoring' techniques to break this memory and ensure the septum remains straight long-term."
 },
 {
 q: "What is the difference between Septoplasty and Rhinoplasty?",
 a: "Septoplasty is medical/functional (fixing a breathing block). Rhinoplasty is cosmetic (changing the external look). At Indira, we often perform 'Septo-Rhinoplasty' for patients who want both."
 },
 {
 q: "What should I avoid during recovery?",
 a: "Avoid lifting heavy weights, blowing your nose forcefully, and hot steam showers for at least 2 weeks to prevent post-op bleeding."
 }
 ].map((faq, i) => (
 <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800">
 <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
 <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
 {faq.q}
 </h4>
 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6">
 {faq.a}
 </p>
 </div>
 ))}
 </div>
 </section>
 </article>
 </div>
 }
 />
 )
}