export const runtime = 'edge';
import { GLOSSARY_DATA } from "@/lib/data/glossary-data";
import { TREATMENT_DATA } from "@/lib/data/treatment-data";
import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/section-container";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Heart, Sparkles, ArrowRight, Shield, Stethoscope, Activity } from "lucide-react";
import { Metadata } from "next";
import { motion } from "framer-motion";

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').trim();

export const dynamicParams = true;
export const revalidate = false; // Re-validate once per day

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
 const { slug } = await params;
 const glossaryItem = GLOSSARY_DATA.find(item => slugify(item.term) === slug);

 if (!glossaryItem) {
 return { title: 'Term Not Found' }
 }

 const isGeneric = glossaryItem.definition.includes("Find expert knowledge and treatments");
 const displayDefinition = isGeneric 
 ? `${glossaryItem.term} is a key medical term related to ${glossaryItem.category}. Learn about our advanced care and treatment options at Indira Hospital, Vellore.`
 : glossaryItem.definition;

 return {
 title: `${glossaryItem.term} | Medical Glossary | Indira Super Speciality Hospital`,
 description: `${displayDefinition.substring(0, 155)}...`,
 robots: {
 index: !isGeneric,
 follow: !isGeneric,
 googleBot: {
 index: !isGeneric,
 follow: !isGeneric,
 },
 },
 }
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const glossaryItem = GLOSSARY_DATA.find(item => slugify(item.term) === slug);

 if (!glossaryItem) {
 notFound();
 }

 return (
 <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 selection:bg-fuchsia-200 selection:text-fuchsia-900">
 {/* ELITE CINEMATIC HEADER FOR TERM */}
 <section className="relative pt-48 pb-40 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[4rem] sm:rounded-b-[6rem]">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"/>
 
 {/* Ambient Glows */}
 <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] will-change-transform transform-gpu opacity-60 animate-pulse"/>
 <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] will-change-transform transform-gpu opacity-40"/>

 <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
 <div className="flex flex-col items-center text-center">
 <Link href="/glossary"className="group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-300 text-sm font-black uppercase tracking-[0.2em] mb-12 hover:bg-white dark:bg-slate-900 hover:border-slate-200 dark:border-slate-800 transition-all">
 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/> Back to Dictionary
 </Link>
 
 <div className="elite-tag mb-10">
 <BookOpen className="w-4 h-4"/> Medical Reference: {glossaryItem.category}
 </div>
 
 <h1 className="elite-hero-title mb-10">
 {glossaryItem.term}
 </h1>
 </div>
 </div>
 </section>

 <SectionContainer className="-mt-24 relative z-20">
 <div className="max-w-5xl mx-auto">
 <div className="bg-white dark:bg-slate-900 rounded-[4rem] p-10 md:p-20 shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
 
 {/* Interactive Shine */}
 <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-fuchsia-500 opacity-80"/>
 
 <div className="relative z-10">
 <div className="flex items-center gap-4 mb-10">
 <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-950/30 flex items-center justify-center text-fuchsia-600 border border-fuchsia-100 dark:border-fuchsia-900/50">
 <Shield className="w-6 h-6"/>
 </div>
 <h2 className="elite-section-title text-slate-900 dark:text-white uppercase">Clinical Definition</h2>
 </div>

 <p className="text-slate-600 dark:text-slate-300 text-2xl md:text-3xl leading-relaxed font-light mb-16 first-letter:text-6xl first-letter:font-black first-letter:text-fuchsia-600 first-letter:mr-4 first-letter:float-left first-letter:mt-2">
 {glossaryItem.definition.includes("Find expert knowledge and treatments")
 ? `${glossaryItem.term} is a critical medical concept within the field of ${glossaryItem.category}. At Indira Super Speciality Hospital, our specialists utilize advanced diagnostics and evidence-based protocols to manage conditions and procedures related to ${glossaryItem.term.toLowerCase()} for patients in Vellore and across Tamil Nadu.`
 : glossaryItem.definition}
 </p>

 <div className="grid sm:grid-cols-2 gap-8 mt-16 pt-16 border-t border-slate-100 dark:border-slate-800">
 <div>
 <h3 className="text-sm font-black text-subtle-on-light dark:text-slate-500 uppercase tracking-[0.2em] mb-6">Expertise Pillar</h3>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white">
 <Heart className="w-6 h-6"/>
 </div>
 <div>
 <p className="text-slate-900 dark:text-white font-black text-lg">{glossaryItem.category}</p>
 <p className="text-slate-500 text-sm font-medium uppercase tracking-widest leading-none">Category</p>
 </div>
 </div>
 </div>

 {glossaryItem.relatedService && (
 <div>
 <h3 className="text-sm font-black text-subtle-on-light dark:text-slate-500 uppercase tracking-[0.2em] mb-6">Expert Department</h3>
 <Link
 href={`/doctor/near-me/treat/${glossaryItem.relatedService}`}
 className="group/link flex items-center gap-4 hover:scale-[1.02] transition-transform"
 >
 <div className="w-12 h-12 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 border border-fuchsia-100 dark:border-fuchsia-800 flex items-center justify-center text-fuchsia-600">
 <Stethoscope className="w-6 h-6 group-hover/link:rotate-12 transition-transform"/>
 </div>
 <div>
 <p className="text-fuchsia-600 dark:text-fuchsia-400 font-black text-lg group-hover/link:underline">
 {glossaryItem.relatedServiceTitle || glossaryItem.relatedService}
 </p>
 <p className="text-slate-500 text-sm font-medium uppercase tracking-widest leading-none">Main Hub</p>
 </div>
 </Link>
 </div>
 )}
 </div>

 {/* TREATMENT MAPPING (AEO Enhancement) */}
 {(() => {
 const relatedTreatment = TREATMENT_DATA.find(t => 
 t.title.toLowerCase().includes(glossaryItem.term.toLowerCase()) || 
 glossaryItem.term.toLowerCase().includes(t.title.toLowerCase()) ||
 t.slug.replace(/-/g, ' ').includes(glossaryItem.term.toLowerCase())
 );

 if (relatedTreatment) {
 return (
 <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-950/50 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 group/treat">
 <div className="flex items-center gap-6">
 <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-fuchsia-500 animate-pulse">
 <Activity className="w-8 h-8"/>
 </div>
 <div>
 <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Recommended Treatment</h3>
 <p className="text-slate-500 text-sm font-medium">Get world-class {relatedTreatment.title} at Indira Hospital.</p>
 </div>
 </div>
 <Link 
 href={`/doctor/near-me/treat/${relatedTreatment.parentServiceSlug}/${relatedTreatment.slug}`}
 className="px-8 py-4 bg-fuchsia-600 text-white font-black rounded-2xl hover:bg-fuchsia-700 shadow-lg shadow-fuchsia-500/20 flex items-center gap-2 group/btn"
 >
 Fix It Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"/>
 </Link>
 </div>
 );
 }
 return null;
 })()}
 </div>

 {/* Ambient Texture */}
 <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none">
 <BookOpen className="w-64 h-64 text-slate-900 dark:text-white -rotate-12"/>
 </div>
 </div>

 <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-12 bg-slate-900 rounded-[3rem] text-white border border-slate-200 dark:border-slate-800 relative overflow-hidden group/cta">
 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"/>
 <div className="relative z-10">
 <h4 className="text-2xl font-black mb-2 tracking-tight">Still have questions?</h4>
 <p className="text-subtle-on-light font-medium">Connect with our clinical coordinators for precise guidance.</p>
 </div>
 <Link href="/contact"className="relative z-10 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5 uppercase tracking-widest text-sm">
 Consult Expert
 </Link>
 </div>
 </div>
 </SectionContainer>
 </main>
 )
}
