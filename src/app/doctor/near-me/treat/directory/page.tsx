import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Activity, Shield, Star, MapPin } from 'lucide-react';
import { SectionContainer } from '@/components/ui/section-container';
import { TREATMENT_DATA } from '@/lib/data/treatment-data';
import { constructMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = constructMetadata({
 title: "All Treatments & Procedures | Indira Hospital",
 description: "Complete list of surgical and medical treatments at Indira Super Speciality Hospital. Advanced laser, laparoscopic, and specialty care in India.",
 path: "/doctor/near-me/treat/directory"
});

export default function TreatmentDirectoryPage() {
 // Group treatments by parentServiceSlug
 const groupedTreatments = TREATMENT_DATA.reduce((acc, treatment) => {
 const key = treatment.parentServiceSlug;
 if (!acc[key]) acc[key] = [];
 acc[key].push(treatment);
 return acc;
 }, {} as Record<string, typeof TREATMENT_DATA>);

 return (
 <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20">
 <SectionContainer>
 <div className="max-w-4xl mx-auto text-center mb-20">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-100 dark:bg-fuchsia-950 text-fuchsia-700 dark:text-fuchsia-300 text-xs font-bold uppercase tracking-widest mb-6 border border-fuchsia-200">
 <Activity className="w-4 h-4" /> Comprehensive Care
 </div>
 <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">Treatment Directory</h1>
 <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Explore our complete range of specialized surgical and medical procedures.</p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
 {Object.entries(groupedTreatments).sort().map(([service, treatments]) => (
 <div key={service} className="space-y-6">
 <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-tight border-b border-slate-200 dark:border-slate-800 pb-4">
 <span className="w-2 h-2 rounded-full bg-fuchsia-500" />
 {service.replace(/-/g, ' ')}
 </h2>
 <ul className="space-y-3">
 {treatments.sort((a, b) => a.title.localeCompare(b.title)).map((t) => (
 <li key={t.slug}>
 <Link 
 href={`/doctor/near-me/treat/${t.parentServiceSlug}/${t.slug}`}
 className="group flex items-start gap-2 text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 transition-colors py-1"
 >
 <ChevronRight className="w-4 h-4 mt-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
 <span className="font-medium">{t.title}</span>
 </Link>
 </li>
 ))}
 </ul>
 <Link 
 href={`/doctor/near-me/treat/${service}`}
 className="inline-flex items-center gap-2 text-xs font-bold text-fuchsia-700 uppercase tracking-widest hover:gap-3 transition-all pt-2"
 >
 View Department <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 ))}
 </div>

 <div className="mt-32 p-12 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-8">
 <div className="space-y-4 text-center md:text-left">
 <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Need a Consult?</h2>
 <p className="text-slate-500 dark:text-slate-400 font-medium">Our specialists are available 24/7 for expert guidance and second opinions.</p>
 </div>
 <div className="flex flex-wrap gap-4">
 <Link href="/book-appointment" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full shadow-lg hover:-translate-y-1 transition-all">
 Book Appointment
 </Link>
 <Link href="/contact" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-full shadow-sm hover:-translate-y-1 transition-all">
 Contact Us
 </Link>
 </div>
 </div>
 </SectionContainer>
 </main>
 );
}
