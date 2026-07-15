import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
 title: "Elite Colonoscopy & Colorectal Screening i in Vellore | I...",
 description: "Advanced Elite Colonoscopy & Colorectal Screening surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care, and sa...",
 path: "/doctor/near-me/treat/gastroenterology/colonoscopy-screening-cost"
});

export default function ColonoscopyPage() {
 return (
 <SubServiceTemplate
 title="Elite Colonoscopy & Colorectal Screening"
 slug="colonoscopy-screening-cost"
 parentServiceSlug="gastroenterology"
 departmentName="Indira Elite Gastro Hub"
 description={
 <article>
 <p className="text-lg leading-relaxed">
 <strong>Elite Colonoscopy & Colorectal Screening</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
 </p>
 </article>
 }
 quickFacts={[
 { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
 { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
 { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
 { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
 ]}
 duration="20-30 Minutes"
 hospitalStay="Daycare"
 recoveryTime="24 Hours"
 anesthesia="Conscious Sedation"
 reviews={{
 entityType: 'service',
 entityName: 'Colonoscopy Screening',
 entitySlug: 'colonoscopy-screening-cost'
 }}
 fullDescription={
 <div className="space-y-16">
 {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
 <AioKnowledgeBlock 
 title="Quick Facts: Elite Colonoscopy & Colorectal Screening in Vellore"
 items={[
 { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
 { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
 { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
 { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
 ]}
 />

 <article className="space-y-12">
 {/* Mechanism: AI-Assisted Polypectomy */}
 <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-3xl -z-10" />
 <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4 font-heading">
 Mechanism: AI-Assisted Detection & CO2 Comfort
 </h3>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
 <div className="prose prose-slate dark:prose-invert">
 <p className="text-lg leading-relaxed">
 Standard colonoscopy relies solely on the human eye. At Indira, we utilize **CADx (Computer-Aided Detection)**. This AI layer highlights "flat" and "hidden" polyps in real-time, drastically reducing the "Miss Rate" that can occur in routine screenings.
 </p>
 <p className="mt-4 font-medium">
 We prioritize patient comfort by using **CO2 Insufflation** instead of room air. Carbon dioxide is absorbed by the body 100x faster, ensuring zero bloating or "gas pain" after you wake up.
 </p>
 <div className="mt-8 space-y-4">
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
 <span><strong>Instant Polypectomy</strong>: Simultaneous removal of polyps using cold or hot snares.</span>
 </div>
 <div className="flex items-center gap-3">
 <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
 <span><strong>HD 190 Series Scopes</strong>: Near-focus visualization for sub-millimeter pit pattern mapping.</span>
 </div>
 </div>
 </div>
 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-xl flex flex-col justify-center">
 <Wind className="w-16 h-16 text-emerald-500 mb-6" />
 <h4 className="text-xl font-bold mb-2">The "Silent" Prep Protocol</h4>
 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-heading">
 Traditional bowel preps involve drinking 4 liters of high-volume liquid. We provide a **Low-Volume Split-Dose Prep** that is significantly easier to drink and more effective for a clean colon.
 </p>
 <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
 <Shield className="w-4 h-4" />
 Diagnostic Clarity Assurance
 </div>
 </div>
 </div>
 </section>

 {/* Screening Timeline */}
 <section>
 <div className="text-center max-w-3xl mx-auto mb-12">
 <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4 font-heading tracking-tighter uppercase">Clinical Screening Roadmap</h3>
 <p className="text-slate-600 dark:text-slate-400">Regular colonoscopy screening can reduce the risk of colon cancer by up to 90%.</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
 {[
 { title: "Prep Day", desc: "Low-volume liquid hydration to clear the bowel for maximum visualization." },
 { title: "Procedure Day", desc: "20-minute screening under light sedation. No pain, zero memory of the scope." },
 { title: "Polyp Removal", desc: "Immediate removal of any pre-cancerous growths during the same session." },
 { title: "Result Audit", desc: "Instant report on findings. Histopathology follow-up for removed polyps." }
 ].map((item, i) => (
 <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center">
 <h4 className="font-bold mb-2 text-emerald-600 font-heading uppercase tracking-tighter">{item.title}</h4>
 <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Technology Focus Section */}
 <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-transparent" />
 <h3 className="font-heading text-3xl font-bold mb-4 font-serif">Advanced Endoscopy Platform</h3>
 <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
 A colonoscopy is only as good as the technology and the "Withdrawal Time" of the endoscopist. At Indira, we maintain strict performance metrics for every procedure.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left relative z-10">
 {[
 { title: "CAD EYE System", icon: Eye, text: "AI-assisted real-time detection of polyps." },
 { title: "Near Focus HD", icon: Microscope, text: "Viewing tissue detail at a microscopic level." },
 { title: "Water Exchange", icon: Droplets, text: "Pain-minimizing insertion technique for 'difficult' colons." }
 ].map((box, i) => (
 <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-white dark:bg-slate-900 transition-all border-b-4 border-emerald-500">
 <box.icon className="w-10 h-10 text-emerald-500 mb-4" />
 <h4 className="font-bold mb-2 text-xs uppercase tracking-widest">{box.title}</h4>
 <p className="text-[10px] text-slate-400 font-medium">{box.text}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Clinical FAQ Hub */}
 <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
 <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
 <Info className="text-emerald-500" />
 Elite Clinical FAQs: Colonoscopy Screening
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
 {[
 {
 q: "What is the recommended age to start screening?",
 a: "According to the latest global guidelines, colon cancer screening should start at age 45 for individuals at average risk. If you have a family history, screening should start even earlier (usually 10 years before the family member's diagnosis)."
 },
 {
 q: "Will I be awake during the colonoscopy?",
 a: "We use 'Conscious Sedation' managed by an anesthesiologist. You will be in a dream-like state, feel zero pain, and undergo the procedure with absolute comfort. You will wake up feeling refreshed."
 },
 {
 q: "Can I drive home after the test?",
 a: "No. Because of the sedation, you must have a reliable adult to accompany you home. You should not drive or make major decisions for the remainder of the day."
 },
 {
 q: "Is the bowel preparation difficult to drink?",
 a: "We provide high-grade, low-volume PEG-based solutions that are significantly easier to stomach than traditional large-volume preps. A clean colon is essential for a high-quality screening."
 },
 {
 q: "What is the difference between a Diagnostic vs. Screening Colonoscopy?",
 a: "A 'Screening' is for patients with no symptoms (preventive). A 'Diagnostic' is for patients visiting due to bleeding, pain, or bowel habit changes to find the root cause."
 },
 {
 q: "How often do I need a colonoscopy?",
 a: "If your screening results are completely normal and you are at average risk, the standard interval is 10 years. If polyps are found, the interval may be shortened to 3 or 5 years."
 }
 ].map((faq, i) => (
 <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
 <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
 <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
 {faq.q}
 </h4>
 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 antialiased">
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