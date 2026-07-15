import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Elite Laparoscopic Hysterectomy (TLH) in V in Vellore | I...",
 description: "Advanced Elite Laparoscopic Hysterectomy (TLH) surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care, and same-...",
 path: "/doctor/near-me/treat/obstetrics-gynaecology/laparoscopic-hysterectomy-guide"
});

export default function LaparoscopicHysterectomyPage() {
 return (
 <SubServiceTemplate
 title="Elite Laparoscopic Hysterectomy (TLH)"
 slug="laparoscopic-hysterectomy-guide"
 parentServiceSlug="obstetrics-gynaecology"
 departmentName="Indira Elite Women's Care"
 description={
 <article>
 <p className="text-lg leading-relaxed">
 <strong>Elite Laparoscopic Hysterectomy (TLH)</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
 </p>
 </article>
 }
 quickFacts={[
 { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
 { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
 { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
 { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
 ]}
 duration="60-90 Minutes"
 hospitalStay="24 Hours"
 recoveryTime="7-10 Days"
 anesthesia="General Anesthesia"
 reviews={{
 entityType: 'service',
 entityName: 'Laparoscopic Hysterectomy',
 entitySlug: 'laparoscopic-hysterectomy-guide'
 }}
 fullDescription={
 <div className="space-y-16">
 {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
 <AioKnowledgeBlock 
 title="Quick Facts: Elite Laparoscopic Hysterectomy (TLH) in Vellore"
 items={[
 { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
 { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
 { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
 { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
 ]}
 />

 <article className="space-y-12">
 {/* The Surgical Edge Section */}
 <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50">
 <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400/10 blur-3xl -z-10"/>
 <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-rose-500 pl-4 font-heading">
 Mechanism: 4K Visualization & Vessel-Sealing
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 <div className="prose prose-slate dark:prose-invert">
 <p className="text-lg leading-relaxed">
 Traditional "open"hysterectomies require a large abdominal incision to visualize the uterus. In **Elite TLH**, we use a 4K Endoscope that provides 10x magnification. This allow our surgeons to see sub-millimeter nerves and blood vessels, drastically reducing the risk of bladder or bowel injury.
 </p>
 <div className="mt-8 space-y-4">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md shrink-0">
 <Zap className="w-5 h-5 text-rose-500"/>
 </div>
 <div>
 <p className="font-bold">Ultrasonic Energy Sealing</p>
 <p className="text-sm text-slate-500">Instead of traditional stitches (sutures), we use Harmonic Scalpels to seal blood vessels, leading to near-zero blood loss.</p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md shrink-0">
 <Move className="w-5 h-5 text-rose-500"/>
 </div>
 <div>
 <p className="font-bold">Vault Microsurgery</p>
 <p className="text-sm text-slate-500">Intra-corporeal suturing of the vaginal vault ensures the strongest possible pelvic floor support post-surgery.</p>
 </div>
 </div>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-rose-100 dark:border-rose-800 shadow-xl">
 <h4 className="text-xl font-bold mb-4 flex items-center gap-2">Hysterectomy Comparison Matrix</h4>
 <div className="space-y-4">
 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800">
 <span className="text-sm font-medium">Incision Size</span>
 <span className="text-sm font-bold text-rose-500">5mm (Laparoscopic)</span>
 </div>
 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800">
 <span className="text-sm font-medium">Infection Risk</span>
 <span className="text-sm font-bold text-rose-500">Minimal (Elite)</span>
 </div>
 <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800">
 <span className="text-sm font-medium">Full Recovery</span>
 <span className="text-sm font-bold text-rose-500">10-14 Days</span>
 </div>
 <div className="flex justify-between items-center text-xs text-subtle-on-light">
 *Data based on clinical protocols at our Vellore center.
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Conditions and Indications */}
 <section>
 <div className="text-center max-w-3xl mx-auto mb-12">
 <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4">When is an Elite Hysterectomy Indicated?</h3>
 <p className="text-slate-600 dark:text-subtle-on-light">While we prioritize organ-sparing treatments, a hysterectomy is the definitive solution for several chronic conditions.</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
 {[
 { title: "Large Fibroids", desc: "Uterine growths that cause heavy bleeding and pelvic pressure."},
 { title: "Endometriosis", desc: "Severe endometrial tissue growth causing debilitating pain."},
 { title: "Adenomyosis", desc: "Uterine wall thickening leading to painful and heavy periods."},
 { title: "Pelvic Prolapse", desc: "When the uterus drops into the vaginal canal due to weak support."}
 ].map((item, i) => (
 <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center">
 <h4 className="font-bold mb-2 text-rose-600">{item.title}</h4>
 <p className="text-sm text-slate-500">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* The Recovery Roadmap */}
 <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
 <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 to-transparent"/>
 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
 <div className="space-y-6">
 <h3 className="font-heading text-3xl font-bold font-heading">The "Home-in-24h"Recovery Framework</h3>
 <p className="text-subtle-on-light leading-relaxed">
 Our recovery protocol is built around **Early Mobilization**. Because we avoid large abdominal cuts, our patients experience significantly less pain and are often walking within hours of surgery.
 </p>
 <ul className="space-y-4">
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0"/>
 <span><strong>ERAS (Enhanced Recovery) Protocols</strong>: Specialized anaesthesia to reduce post-op nausea.</span>
 </li>
 <li className="flex gap-3">
 <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0"/>
 <span><strong>Post-Op Nutrition</strong>: Early transition to light diet to restart bowel motility immediately.</span>
 </li>
 </ul>
 </div>
 <div className="grid grid-cols-2 gap-4">
 <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center">
 <p className="text-sm text-rose-300 font-bold uppercase tracking-widest mb-1 font-heading">Pain Level</p>
 <p className="font-heading text-3xl font-bold text-white">LOW</p>
 </div>
 <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center">
 <p className="text-sm text-rose-300 font-bold uppercase tracking-widest mb-1 font-heading">Incision Size</p>
 <p className="font-heading text-3xl font-bold text-white">5MM</p>
 </div>
 </div>
 </div>
 </section>

 {/* Clinical FAQ Hub */}
 <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
 <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
 <Info className="text-rose-500"/>
 Elite Clinical FAQs: Laparoscopic Hysterectomy
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
 {[
 {
 q: "Are the ovaries also removed during a TLH?",
 a: "Not necessarily. In pre-menopausal women with healthy ovaries, we typically preserve the ovaries to maintain natural hormone levels. The uterus is removed, but your 'hormonal engine' remains intact."
 },
 {
 q: "Will I enter menopause immediately after surgery?",
 a: "If your ovaries are preserved, you will NOT enter menopause immediately. You will stop having periods, but your body will undergo the normal hormonal transition according to your biological age."
 },
 {
 q: "Is laparoscopy possible for very large fibroids?",
 a: "Yes. Our senior surgical team specializes in 'Laparoscopic Myomectomy and Hysterectomy' for even the largest fibroids by utilizing specialized morcellation techniques inside a protective bag."
 },
 {
 q: "What are the long-term changes in intimacy?",
 a: "Clinically, there is no adverse impact on intimacy once full healing has occurred (usually 6-8 weeks). In fact, many women report improved quality of life as their chronic pelvic pain and bleeding are resolved."
 },
 {
 q: "How soon can I return to heavy exercise?",
 a: "While you can walk and do light household work within 7 days, we recommend avoiding heavy weightlifting or high-impact cardio for at least 6 weeks to ensure the internal vault has healed perfectly."
 },
 {
 q: "Is the surgery very risky?",
 a: "TLH is remarkably safe at high-volume centers. By using 4K magnification, the risk of injury to the bladder or ureters is drastically lower than in traditional 'blind' open surgery."
 }
 ].map((faq, i) => (
 <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
 <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
 <Zap className="w-4 h-4 mt-1 text-rose-500 shrink-0"/>
 {faq.q}
 </h4>
 <p className="text-slate-600 dark:text-subtle-on-light text-sm leading-relaxed pl-6">
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