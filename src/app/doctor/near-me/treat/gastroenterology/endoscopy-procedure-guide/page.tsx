import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { getTreatmentBySlug, getAllTreatments, TREATMENT_DATA } from '@/lib/data/treatment-data'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Quick Facts: Procedure in Vellore | Indira Hospital",
 description: "Advanced Quick Facts: Procedure in Vellore surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care, and same-day ...",
 path: "/doctor/near-me/treat/gastroenterology/endoscopy-procedure-guide"
});

export default function GastroscopyPage() {
 const data = getTreatmentBySlug('endoscopy-procedure-guide');
 if (!data) return null;

 return (
 <SubServiceTemplate
 title={data.title}
 slug={data.slug}
 parentServiceSlug="gastroenterology"
 departmentName="Gastroenterology & Hepatology"
 departmentSlug="gastroenterology"
 description={
 <article>
 <p className="text-lg leading-relaxed">
 <strong>Procedure</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
 </p>
 </article>
 }
 quickFacts={[
 { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
 { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
 { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
 { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
 ]}
 >
 <div className="space-y-16">
 {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
 <AioKnowledgeBlock 
 title="Quick Facts: Procedure in Vellore"
 items={[
 { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
 { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
 { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
 { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
 ]}
 />

 <article className="space-y-12">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
 <div className="p-8 rounded-3xl bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800">
 <h4 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 font-heading">Advanced Mucosal Imaging</h4>
 <ul className="space-y-4">
 {[
 { title: "Olympus 190 Series", text: "The highest global standard in endoscopic visualization for early cancer detection."},
 { title: "Narrow Band Imaging (NBI)", text: "Specialized light spectra that highlight abnormal blood vessel patterns in ulcers."},
 { title: "Therapeutic Ready", text: "Instant biopsy or bleeding control (APC) during the same session."}
 ].map((item, i) => (
 <li key={i} className="flex gap-3 items-start">
 <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1"/>
 <div>
 <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
 <p className="text-slate-600 dark:text-subtle-on-light text-sm">{item.text}</p>
 </div>
 </li>
 ))}
 </ul>
 </div>
 <div className="relative group">
 <div className="absolute inset-0 bg-blue-200/20 rounded-[3rem] blur-3xl group-hover:bg-blue-200/30 transition-all"/>
 <div className="relative p-8 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-blue-100 dark:border-slate-800 shadow-2xl">
 <Activity className="w-20 h-20 text-blue-500 mx-auto mb-6"/>
 <p className="text-xl font-bold text-slate-900 dark:text-white mb-2">High-Definition Diagnostics</p>
 <p className="text-slate-500 text-sm antialiased">Conclusive results for acid reflux and stomach pain.</p>
 </div>
 </div>
 </div>

 <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
 <div dangerouslySetInnerHTML={{ __html: data.fullDescription }} />
 </div>

 <div className="bg-blue-50/50 dark:bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-16 border border-blue-100">
 <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3 font-heading">
 <Search className="text-blue-500"/>
 Clinical FAQs
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
 {data.faq?.map((faq, idx) => (
 <div key={idx} className="space-y-3">
 <h4 className="font-bold text-slate-900 dark:text-white flex items-start gap-2">
 <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0"/>
 {faq.question}
 </h4>
 <p className="text-slate-600 dark:text-subtle-on-light text-sm leading-relaxed antialiased pl-7">
 {faq.answer}
 </p>
 </div>
 ))}
 </div>
 </div>
 </article>
 </div>
 </SubServiceTemplate>
 );
}