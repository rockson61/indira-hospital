"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import { Search, HelpCircle, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { hospitalFaqs } from "@/lib/data/hospital-faq-data";
import Link from "next/link";

export default function FAQPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const categories = Array.from(new Set(hospitalFaqs.map(f => f.category)));

    const filteredFaqs = hospitalFaqs.filter(f =>
        f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-teal-200 selection:text-teal-900">
            {/* ELITE DARK HERO */}
            <section className="bg-slate-900 pt-32 pb-56 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

                <SectionContainer className="relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-teal-500/30">
                        <HelpCircle className="w-4 h-4" /> Patient Help Center
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
                        How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">help you?</span>
                    </h1>
                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-indigo-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search for appointments, insurance, surgery..."
                                className="w-full pl-16 pr-6 py-6 rounded-full bg-white/90 backdrop-blur-xl border border-white/50 text-slate-900 text-lg shadow-2xl outline-none focus:ring-4 focus:ring-teal-500/20 transition-all placeholder:text-slate-400 font-medium"
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
                    <div className="lg:col-span-1 space-y-3 sticky top-32 h-fit hidden lg:block bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                            Categories
                        </h3>
                        <button
                            onClick={() => setSearchTerm("")}
                            className={`w-full text-left px-5 py-4 rounded-2xl font-bold transition-all duration-300 ${searchTerm === "" ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/30 scale-105" : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md border border-transparent hover:border-slate-100 hover:translate-x-1"}`}
                        >
                            <span className="relative z-10">All Questions</span>
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSearchTerm(cat)}
                                className={`w-full text-left px-5 py-4 rounded-2xl font-bold transition-all duration-300 ${searchTerm === cat ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/30 scale-105" : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md border border-transparent hover:border-slate-100 hover:translate-x-1"}`}
                            >
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>

                    {/* FAQ LIST */}
                    <div className="lg:col-span-3 space-y-6">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, i) => (
                                <details key={i} className="group bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden transition-all duration-300 open:ring-2 open:ring-teal-500/20 open:bg-white">
                                    <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-bold text-xl text-slate-900 select-none">
                                        <div className="flex items-start sm:items-center gap-4">
                                            <div className="mt-1 sm:mt-0 w-10 h-10 shrink-0 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 transition-colors group-open:bg-teal-500 group-open:text-white group-hover:scale-110 duration-300">
                                                <HelpCircle className="w-5 h-5" />
                                            </div>
                                            <span className="leading-snug">{faq.question}</span>
                                        </div>
                                        <div className="w-10 h-10 shrink-0 rounded-full bg-slate-50 flex items-center justify-center group-open:bg-slate-100 transition-colors ml-4">
                                            <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-500 ease-in-out" />
                                        </div>
                                    </summary>
                                    <div className="px-8 pb-8 pt-2 pl-24 text-slate-600 text-lg leading-relaxed border-t border-slate-50/50">
                                        {faq.answer}
                                        <div className="mt-6 flex items-center gap-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full text-slate-400">
                                                {faq.category}
                                            </span>
                                        </div>
                                    </div>
                                </details>
                            ))
                        ) : (
                            <div className="text-center py-24 bg-white/50 backdrop-blur-xl rounded-[3rem] border-2 border-dashed border-slate-200">
                                <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                                    <Search className="w-10 h-10 text-slate-300" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">No results found</h3>
                                <p className="text-slate-500">We couldn't find any questions matching "{searchTerm}".</p>
                            </div>
                        )}

                        {/* CTA BENTO */}
                        <div className="mt-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-teal-950 p-10 sm:p-16 rounded-[3rem] text-white flex flex-col xl:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group/cta">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px] group-hover/cta:bg-teal-500/20 transition-colors duration-700" />
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px]" />

                            <div className="max-w-xl relative z-10 text-center xl:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-300 text-xs font-bold tracking-widest uppercase mb-6">
                                    Support Available 24/7
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Still have questions?</h3>
                                <p className="text-slate-300 text-lg leading-relaxed">Our clinical coordinators are standing by to assist you with any further information regarding your procedure.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full xl:w-auto">
                                <Link href="/contact" className="group/btn relative flex items-center justify-center px-8 py-5 bg-white text-slate-900 font-black rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-xl overflow-hidden">
                                    <span className="relative z-10">Get in Touch</span>
                                    <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/50 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                                </Link>
                                <Link href="https://wa.me/917010650063" className="group/btn relative flex items-center justify-center px-8 py-5 bg-teal-600 text-white font-black rounded-2xl hover:bg-teal-500 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-teal-500/30 overflow-hidden">
                                    <MessageCircle className="w-5 h-5 mr-3 relative z-10" />
                                    <span className="relative z-10">WhatsApp</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}
