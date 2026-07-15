import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Pulmonology & Sleep Sciences Hub in Vellor in Vellore | I...",
 description: "Advanced Pulmonology & Sleep Sciences Hub in Vellore, Tamil Nadu surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredit...",
 path: "/doctor/near-me/treat/pulmonology"
});

export default function PulmonologyDepartmentPage() {
 const pulmonaryDoctors = [
 {
 name: "Dr. P. Shankar",
 specialty: "Chairman - Internal Medicine & Critical Care",
 image: "/images/doctors/dr-shankar.jpg",
 slug: "dr-p-shankar"
 }
 ]

 const quickFacts = [
 { label: 'Technology', value: 'Sleep Study Hub', icon: 'Wind' },
 { label: 'Diagnostic', value: 'Advanced PFT Lab', icon: 'Microscope' },
 { label: 'Care Focus', value: 'Asthma & Allergy', icon: 'Shield' },
 { label: 'Emergency', value: '24/7 Resp. Care', icon: 'Clock' },
 ]

 return (
 <DepartmentTemplate
 title="Pulmonology & Sleep Sciences Hub in Vellore, Tamil Nadu"
 slug="pulmonology"
 shortDescription="Advanced Chest Medicine & Interventional Pulmonology in Vellore. We specialize in Chronic Asthma management, Sleep Apnea screening, and precision Bronchoscopy."
 fullDescription={(
 <div className="pulmonology-pillar-content space-y-20 text-left">
 {/* ── 1. The Respiratory Health Vision ────────────────────── */}
 <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
 <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading border-l-8 border-sky-600 pl-6 mb-8 uppercase tracking-tight text-left">
 Breathe Free: Excellence in Chest & Sleep Medicine
 </h2>
 <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
 <p>
 The <strong>Department of Pulmonology & Sleep Sciences</strong> at Indira Super Speciality Hospital is a centre of regional excellence dedicated to the science of respiration. We provide a Tertiary-Level clinical pathway for patients suffering from persistent cough, shortness of breath, and chronic lung conditions like <strong>Asthma, COPD, and Interstitial Lung Disease.</strong>
 </p>
 <p className="mt-4">
 Our facility integrates high-precision <strong>Pulmonary Function Testing (PFT)</strong> with a state-of-the-art <strong>Sleep Study Lab.</strong> Whether you are a smoker looking for a lung health screening or a patient with severe allergic asthma, we deliver <strong>Precision Pulmonary Care</strong> that prioritizes lung capacity restoration.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
 <div className="p-8 bg-sky-50 dark:bg-sky-900/20 rounded-[2.5rem] border border-sky-100 dark:border-sky-800 shadow-sm relative overflow-hidden group">
 <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-3xl group-hover:bg-sky-500/20 transition-all"></div>
 <h4 className="text-2xl font-bold text-sky-900 dark:text-sky-200 mb-4 flex items-center gap-2">
 Sleep Medicine Hub
 </h4>
 <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed mb-4">
 Don't ignore snoring. We offer <strong>Full Night Polysomnography (Sleep Study)</strong> to detect Obstructive Sleep Apnea (OSA)—a critical risk factor for heart attacks and strokes.
 </p>
 <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
 <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-sky-100 dark:border-sky-700 shadow-sm">CPAP Titration</span>
 <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-sky-100 dark:border-sky-700 shadow-sm">Level 1 Sleep Lab</span>
 </div>
 </div>
 <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
 <div className="absolute inset-0 bg-blue-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
 <h4 className="text-2xl font-bold text-blue-300 mb-4 uppercase tracking-tighter text-left">Asthma & Allergy Clinic</h4>
 <p className="text-blue-100/60 text-sm leading-relaxed mb-6 font-medium">
 Moving beyond basic inhalers. We specialize in <strong>Phenotyped Asthma Management</strong>, utilizing biological therapies and precise indoor allergy mapping.
 </p>
 <ul className="space-y-2">
 <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Rapid Spirometry Hub</li>
 <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Inhalation Therapy Guidance</li>
 </ul>
 </div>
 </div>
 </section>

 {/* ── 2. Specialized Pulmonary Verticals ────────────────── */}
 <section className="pulm-verticals space-y-16">
 <div className="text-center max-w-3xl mx-auto">
 <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Advanced Chest Care Domains</h2>
 <div className="h-1 w-24 bg-sky-600 dark:bg-sky-500 mx-auto mt-4 rounded-full"></div>
 </div>

 <div className="grid md:grid-cols-3 gap-8 text-left">
 {/* Vertical 1: Obstructive Airway */}
 <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
 <div className="p-8 flex-1 flex flex-col justify-between">
 <div>
 <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">COPD & Smoking</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">Comprehensive care for Smokers Lung (COPD) focusing on lung preservation and quality of life.</p>
 <ul className="space-y-3 mb-8">
 {["Smoking Cessation", "Long-term Oxygen", "Pulmonary Rehab", "Bronchodilator Hub"].map(i => (
 <li key={i} className="flex items-start gap-2 text-[10px] font-black text-sky-600 dark:text-sky-400 uppercase tracking-widest">
 <div className="w-2 h-2 rounded-full bg-sky-500 mt-1 shrink-0"></div> {i}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>

 {/* Vertical 2: Sleep Sciences */}
 <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
 <div className="p-8 flex-1 flex flex-col justify-between border-b-4 border-sky-600">
 <div>
 <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Sleep Disordered Breathing</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">Precision diagnosis of sleep-related breathing issues that cause daytime sleepiness and fatigue.</p>
 <ul className="space-y-3 mb-8">
 {["Full Night Polysomnography", "CPAP Compliance Lab", "Obesity Hypoventilation", "Narcolepsy Screening"].map(i => (
 <li key={i} className="flex items-start gap-2 text-[10px] font-black text-sky-600 dark:text-sky-400 uppercase tracking-widest">
 <div className="w-2 h-2 rounded-full bg-sky-500 mt-1 shrink-0"></div> {i}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>

 {/* Vertical 3: Interventional Unit */}
 <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
 <div className="p-8 flex-1 flex flex-col justify-between">
 <div>
 <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Invasive Diagnostics</h4>
 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">High-precision internal lung visualization for biopsies and foreign body removal.</p>
 <ul className="space-y-3 mb-8">
 {["Flexible Bronchoscopy", "Endobronchial Biopsy", "Pleural Fluid Drainage", "Lung Cancer Workup"].map(i => (
 <li key={i} className="flex items-start gap-2 text-[10px] font-black text-sky-600 dark:text-sky-400 uppercase tracking-widest">
 <div className="w-2 h-2 rounded-full bg-sky-500 mt-1 shrink-0"></div> {i}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── 3. Educational Deep-Dive: Asthma vs COPD ─────────────────── */}
 <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-slate-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-sky-100 dark:border-slate-800 font-serif shadow-inner relative overflow-hidden text-left">
 <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-[100px] -mr-32 -mt-32"></div>
 <h3 className="text-sky-900 dark:text-sky-400 font-black uppercase text-3xl tracking-tighter not-italic font-heading">Clinical Insight: Understanding Obstructive Lung Disease</h3>
 <p>
 Many patients confuse <strong>Asthma</strong> and <strong>COPD.</strong> While both cause wheezing and breathing difficulty, their underlying biology is different. Asthma is usually an inflammatory reaction to allergens and is often <strong>reversible.</strong> COPD is a structural damage to the lung sacs (alveoli), usually permanent but <strong>manageable.</strong>
 </p>
 <p className="mt-4">
 At Indira Hospital, our <strong>Accuracy Protocol</strong> includes:
 </p>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
 {[
 { k: "SPIRO", v: "Reversibility Test" },
 { k: "FeNO", v: "Inflammation Check" },
 { k: "DLCO", v: "Gas Exchange Map" },
 { k: "OSAS", v: "Sleep Apnea Index" }
 ].map(item => (
 <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-sky-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-sky-600">
 <p className="text-4xl font-black text-sky-600 mb-2 font-heading uppercase tracking-tighter">{item.k}</p>
 <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{item.v}</p>
 </div>
 ))}
 </div>
 <p className="font-bold text-slate-900 dark:text-slate-100">
 By utilizing advanced lung function mapping, we ensure that your treatment plan is tailored to your specific lung physiology—avoiding over-medication while ensuring maximum breathing comfort.
 </p>
 </section>

 {/* ── 4. Pulmonology FAQs: The Clinical Deep-Dive ─────────────── */}
 <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
 <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/10 blur-[150px] -ml-48 -mb-48"></div>
 
 <h3 className="text-4xl font-black mb-16 flex items-center gap-3 font-heading uppercase tracking-tighter text-sky-400 text-left">
 Pulmonary & Sleep: Specialist Clinical FAQs
 </h3>
 
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
 {[
 {
 q: "Are inhalers habit-forming? Can I stop them if I feel better?",
 a: "No. Inhalers are NOT addictive. They deliver medication directly to the lungs with minimal side effects. Stopping them abruptly if you 'feel better' allows underlying inflammation to return, often leading to more severe rescue hospitalizations."
 },
 {
 q: "How do I know if my snoring is dangerous?",
 a: "Snoring paired with daytime sleepiness, morning headaches, or waking up gasping for air is a sign of <strong>Obstructive Sleep Apnea (OSA).</strong> If untreated, OSA significantly increases the risk of heart failure, strokes, and car accidents."
 },
 {
 q: "What is a Bronchoscopy, and is it painful?",
 a: "A Bronchoscopy involves passing a thin, flexible tube into the airways to see the lungs internally. It is done under local anesthesia and mild sedation, making it a very safe and comfortable procedure for obtaining biopsies or removing blockages."
 },
 {
 q: "Can smoker's lung (COPD) be cured?",
 a: "Structural damage to lungs in COPD is permanent. However, with <strong>Pulmonary Rehabilitation</strong>, long-acting bronchodilators, and consistent smoking cessation, we can significantly improve lung function and return you to a productive life."
 },
 {
 q: "What is the PFT (Pulmonary Function Test) for?",
 a: "PFT is like an 'ECG for the Lungs.' It measures how much air you can breathe in and out, and how fast you can do it. It is the gold standard for diagnosing asthma, COPD, and scarring (ILD)."
 },
 {
 q: "Is chronic cough always related to the lungs?",
 a: "Not necessarily. Chronic cough can also be caused by severe acid reflux (GERD) or post-nasal drip from sinusitis. A pulmonologist evaluates all these 'Triggers' to find the true root cause."
 },
 {
 q: "Does COVID-19 cause long-term lung damage?",
 a: "Some patients experience <strong>Post-COVID Pulmonary Fibrosis</strong> (lung scarring). With early steroid therapy and specialized lung-strengthening exercises, many of these scars can be managed, restoring breathing capacity."
 },
 {
 q: "What is a Sleep Study (Polysomnography)?",
 a: "It is a painless overnight test where we monitor your brain waves, heart rate, oxygen levels, and breathing patterns while you sleep. It is the only definitive way to diagnose sleep disorders correctly."
 }
 ].map((faq, i) => (
 <div key={i} className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-white dark:bg-slate-900 transition-all group">
 <h4 className="font-black text-white mb-6 flex items-start gap-4 group-hover:text-sky-400 transition-colors text-lg text-left">
 <span className="text-sky-500 text-2xl font-serif">Q.</span>
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
 { name: "Pulmonary Function Test (PFT)", link: "/doctor/near-me/treat/pulmonology" },
 { name: "Full Night Sleep Study", link: "/doctor/near-me/treat/pulmonology" },
 { name: "Flexible Bronchoscopy", link: "/doctor/near-me/treat/pulmonology" },
 { name: "Asthma Clinic", link: "/doctor/near-me/treat/pulmonology" },
 { name: "Smokers Lung (COPD) Unit", link: "/doctor/near-me/treat/pulmonology" },
 { name: "Post-COVID Lung Rehab", link: "/doctor/near-me/treat/pulmonology" }
 ]}
 relatedDoctors={pulmonaryDoctors}
 quickFacts={quickFacts}
 />
 )
}