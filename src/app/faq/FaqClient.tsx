"use client";

import React, { useState } from "react";
import { Search, HelpCircle, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { hospitalFaqs } from "@/lib/data/hospital-faq-data";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function FAQClient() {
 const [searchTerm, setSearchTerm] = useState("");
 const categories = Array.from(new Set(hospitalFaqs.map(f => f.category)));

 const filteredFaqs = hospitalFaqs.filter(f =>
 f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
 f.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
 f.category.toLowerCase().includes(searchTerm.toLowerCase())
 );

 return (
 <main className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900">
 {/* ELITE DARK HERO */}
 <section className="bg-slate-900 pt-48 pb-56 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
 <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none" />
 <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu opacity-50 pointer-events-none" />

 <SectionContainer className="relative z-10 text-center">
 <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
 <HelpCircle className="w-4 h-4" /> Patient Help Center
 </span>
 <h1 className="elite-hero-title mb-8">
 How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">help you?</span>
 </h1>
 <div className="max-w-2xl mx-auto relative group">
 <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-400 to-indigo-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
 <div className="relative">
 <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-fuchsia-400 transition-colors" />
 <input
 type="text"
 placeholder="Search for appointments, insurance, surgery..."
 className="w-full pl-16 pr-6 py-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-lg shadow-2xl outline-none focus:ring-4 focus:ring-fuchsia-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium"
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 />
 </div>
 </div>
 </SectionContainer>
 </section>

 {/* CONTENT */}
 <SectionContainer className="py-24 -mt-32 relative z-20">
 <div className="grid lg:grid-cols-4 gap-12">
 {/* SIDEBAR */}
 <div className="lg:col-span-1 space-y-3 sticky top-32 h-fit hidden lg:block bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
 <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
 <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></div>
 Categories
 </h3>
 <button
 onClick={() => setSearchTerm("")}
 className={`w-full text-left px-5 py-4 rounded-2xl font-bold transition-all duration-300 ${searchTerm === "" ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/30 scale-105" : "text-slate-500 dark:text-slate-400 hover:bg-white dark:bg-slate-900 hover:text-slate-900 dark:text-white hover:shadow-md border border-transparent hover:border-slate-100 dark:border-slate-700 hover:translate-x-1"}`}
 >
 <span className="relative z-10">All Questions</span>
 </button>
 {categories.map(cat => (
 <button
 key={cat}
 onClick={() => setSearchTerm(cat)}
 className={`w-full text-left px-5 py-4 rounded-2xl font-bold transition-all duration-300 ${searchTerm === cat ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/30 scale-105" : "text-slate-500 dark:text-slate-400 hover:bg-white dark:bg-slate-900 hover:text-slate-900 dark:text-white hover:shadow-md border border-transparent hover:border-slate-100 dark:border-slate-700 hover:translate-x-1"}`}
 >
 <span className="relative z-10">{cat}</span>
 </button>
 ))}
 </div>

 {/* FAQ LIST */}
 <div className="lg:col-span-3 space-y-6">
 {filteredFaqs.length > 0 ? (
 filteredFaqs.map((faq, i) => (
 <details key={i} className="group bg-white dark:bg-slate-900 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden transition-all duration-300 open:ring-2 open:ring-fuchsia-500/20 open:bg-white dark:bg-slate-900">
 <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-bold text-xl text-slate-900 dark:text-white select-none">
 <div className="flex items-start sm:items-center gap-4">
 <div className="mt-1 sm:mt-0 w-10 h-10 shrink-0 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center text-fuchsia-600 transition-colors group-open:bg-fuchsia-500 group-open:text-white group-hover:scale-110 duration-300">
 <HelpCircle className="w-5 h-5" />
 </div>
 <span className="leading-snug">{faq.question}</span>
 </div>
 <div className="w-10 h-10 shrink-0 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-open:bg-slate-100 dark:bg-slate-800 transition-colors ml-4">
 <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-500 ease-in-out" />
 </div>
 </summary>
 <div className="px-8 pb-8 pt-2 pl-24 text-slate-600 text-lg leading-relaxed border-t border-slate-50/50">
 {faq.answer}
 <div className="mt-6 flex items-center gap-2">
 <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-400">
 {faq.category}
 </span>
 </div>
 </div>
 </details>
 ))
 ) : (
 <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-700">
 <div className="w-24 h-24 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
 <Search className="w-10 h-10 text-slate-300" />
 </div>
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No results found</h3>
 <p className="text-slate-500 dark:text-slate-400">We couldn&apos;t find any questions matching &quot;{searchTerm}&quot;.</p>
 </div>
 )}

 {/* CTA BENTO */}
 <div className="mt-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-fuchsia-950 p-10 sm:p-16 rounded-[3rem] text-white flex flex-col xl:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group/cta">
 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[80px] will-change-transform transform-gpu group-hover/cta:bg-fuchsia-500/20 transition-colors duration-700" />
 <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] will-change-transform transform-gpu" />

 <div className="max-w-xl relative z-10 text-center xl:text-left">
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-6">
 Support Available 24/7
 </div>
 <h3 className="elite-section-title mb-4">Still have questions?</h3>
 <p className="text-slate-300 text-lg leading-relaxed">Our clinical coordinators are standing by to assist you with any further information regarding your procedure.</p>
 </div>
 <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full xl:w-auto">
 <Link href="/contact" className="group/btn relative flex items-center justify-center px-8 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-black rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-xl overflow-hidden">
 <span className="relative z-10">Get in Touch</span>
 <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/50 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
 </Link>
 <a 
 href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
 target="_blank"
 rel="noopener noreferrer"
 className="group/btn relative flex items-center justify-center px-8 py-5 bg-fuchsia-600 text-white font-black rounded-2xl hover:bg-fuchsia-500 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30 overflow-hidden"
 >
 <MessageCircle className="w-5 h-5 mr-3 relative z-10" />
 <span className="relative z-10">WhatsApp</span>
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
 </a>
 </div>
 </div>
 </div>
 </div>
 </SectionContainer>

 {/* FAQ SCHEMA */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": hospitalFaqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.answer
 }
 }))
 })
 }}
 />
 </main>
 );
}
