"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import { Search, HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { hospitalFaqs } from "@/lib/data/hospital-faq-data";

export default function FAQPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const categories = Array.from(new Set(hospitalFaqs.map(f => f.category)));

    const filteredFaqs = hospitalFaqs.filter(f =>
        f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* HERO */}
            <section className="bg-indigo-900 pt-24 pb-48 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px]" />
                </div>

                <SectionContainer className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-8">How can we <span className="text-blue-400">help you?</span></h1>
                    <div className="max-w-2xl mx-auto relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search for questions about appointments, insurance, surgery..."
                            className="w-full pl-16 pr-6 py-5 rounded-[2rem] bg-white text-slate-900 text-lg shadow-2xl outline-none focus:ring-4 focus:ring-blue-500/20 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </SectionContainer>
            </section>

            {/* CONTENT */}
            <SectionContainer className="py-24 -mt-24">
                <div className="grid lg:grid-cols-4 gap-12">
                    {/* sidebar categories */}
                    <div className="lg:col-span-1 space-y-2 sticky top-24 h-fit hidden lg:block">
                        <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-6 px-4">Categories</h3>
                        <button
                            onClick={() => setSearchTerm("")}
                            className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${searchTerm === "" ? "bg-blue-600 text-white shadow-lg" : "text-slate-600 hover:bg-white"}`}
                        >
                            All Questions
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSearchTerm(cat)}
                                className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${searchTerm === cat ? "bg-blue-600 text-white shadow-lg" : "text-slate-600 hover:bg-white"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* faq list */}
                    <div className="lg:col-span-3 space-y-6">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, i) => (
                                <details key={i} className="group bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden transition-all open:ring-2 open:ring-blue-500">
                                    <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-bold text-xl text-slate-900 dark:text-white">
                                        <div className="flex items-center gap-4">
                                            <span className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 text-sm font-black">?</span>
                                            {faq.question}
                                        </div>
                                        <ChevronDown className="w-6 h-6 text-slate-400 group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="px-8 pb-8 pt-2 text-slate-500 dark:text-slate-400 text-lg leading-relaxed border-t border-slate-50 dark:border-slate-800/50">
                                        {faq.answer}
                                        <div className="mt-6 flex items-center gap-2">
                                            <span className="text-xs font-bold uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-400">
                                                {faq.category}
                                            </span>
                                        </div>
                                    </div>
                                </details>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
                                <HelpCircle className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-slate-400">No questions found matching your search.</h3>
                            </div>
                        )}

                        <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-md">
                                <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                                <p className="text-blue-100">Our patient helpdesk is available 24/7 to assist you with any further information.</p>
                            </div>
                            <div className="flex gap-4">
                                <Link href="/contact" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all">
                                    Contact Us
                                </Link>
                                <Link href="https://wa.me/917010650063" className="px-8 py-4 bg-green-500 text-white font-bold rounded-2xl hover:bg-green-600 transition-all flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5" /> WhatsApp
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}

import Link from "next/link";
