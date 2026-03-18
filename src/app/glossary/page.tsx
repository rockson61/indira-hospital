"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, BookOpen, ArrowRight, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GLOSSARY_DATA, GlossaryTerm } from "@/lib/data/glossary-data";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope } from "healthicons-react/outline";

export default function GlossaryPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

    // Get unique starting letters
    const alphabet = useMemo(() => {
        const letters = new Set(GLOSSARY_DATA.map(term => term.term.charAt(0).toUpperCase()));
        return Array.from(letters).sort();
    }, []);

    // Filter terms based on search and selected letter
    const filteredTerms = useMemo(() => {
        return GLOSSARY_DATA.filter((term) => {
            const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                term.definition.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesLetter = selectedLetter ? term.term.charAt(0).toUpperCase() === selectedLetter : true;
            return matchesSearch && matchesLetter;
        }).sort((a, b) => a.term.localeCompare(b.term));
    }, [searchQuery, selectedLetter]);

    // Group terms by first letter for display
    const groupedTerms = useMemo(() => {
        const groups: Record<string, GlossaryTerm[]> = {};
        filteredTerms.forEach(term => {
            const letter = term.term.charAt(0).toUpperCase();
            if (!groups[letter]) groups[letter] = [];
            groups[letter].push(term);
        });
        return groups;
    }, [filteredTerms]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* Bold Asymmetrical Deep Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out flex flex-col items-center w-full"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                            <BookOpen className="w-4 h-4" /> Medical Dictionary
                        </span>
                        <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-white tracking-tight leading-[0.95] mb-6 max-w-6xl mx-auto">
                            The Comprehensive <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Clinical Glossary.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-16">
                            Decode complex medical terminology. Explore our precise, medically reviewed a-z index for conditions, treatments, and intensive procedures.
                        </p>

                        {/* Glassmorphic Active Search */}
                        <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-3xl p-3 sm:p-5 rounded-[2.5rem] border border-white/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] flex flex-col gap-4">
                            <div className="relative flex-grow group">
                                <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
                                    <Search className="h-6 w-6 text-fuchsia-400 group-focus-within:text-fuchsia-300 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search specific terms (e.g., Angioplasty, MRI)..."
                                    className="block w-full pl-18 pr-6 py-5 sm:py-6 bg-white/5 text-white placeholder-slate-400 rounded-3xl focus:ring-4 focus:ring-fuchsia-500/20 focus:bg-white/10 transition-all outline-none font-bold border border-transparent focus:border-white/30 text-xl"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 no-scrollbar px-2">
                                <button
                                    onClick={() => setSelectedLetter(null)}
                                    className={`px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${selectedLetter === null ? "bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30" : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 hover:border-white/20"}`}
                                >
                                    All
                                </button>
                                {alphabet.map((letter) => (
                                    <button
                                        key={letter}
                                        onClick={() => setSelectedLetter(letter === selectedLetter ? null : letter)}
                                        className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl font-black text-sm transition-all ${selectedLetter === letter ? "bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30 scale-110" : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 hover:border-white/20"}`}
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Terms List Result */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 -mt-32 relative z-20">
                <AnimatePresence mode="wait">
                    {Object.keys(groupedTerms).length > 0 ? (
                        <div className="space-y-24">
                            {Object.keys(groupedTerms).sort().map((letter, idx) => (
                                <motion.div 
                                    key={letter} 
                                    id={`section-${letter}`} 
                                    className="scroll-mt-32"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="flex items-center gap-6 mb-12">
                                        <div className="w-20 h-20 rounded-[2rem] bg-slate-900 border border-slate-700/50 flex items-center justify-center shadow-xl shadow-slate-900/10">
                                            <h2 className="text-5xl font-black text-white">{letter}</h2>
                                        </div>
                                        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {groupedTerms[letter].map((term) => {
                                            const slug = term.term.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').trim();
                                            return (
                                                <div key={term.term} className="group relative bg-white/70 dark:bg-slate-900/50 backdrop-blur-2xl p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800 hover:border-fuchsia-500/50 dark:hover:border-fuchsia-500/50 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(217,70,239,0.15)] flex flex-col h-full overflow-hidden hover:-translate-y-2">
                                                    
                                                    {/* Glow effect */}
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fuchsia-500/0 to-fuchsia-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    
                                                    <div className="relative z-10 flex flex-col h-full">
                                                        <Link href={`/glossary/${slug}`} className="before:absolute before:inset-0 outline-none">
                                                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-fuchsia-600 transition-colors tracking-tight leading-tight">
                                                                {term.term}
                                                            </h3>
                                                        </Link>
                                                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8 flex-grow font-light">
                                                            {term.definition}
                                                        </p>
                                                        
                                                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                                                {term.category}
                                                            </div>
                                                            <div className="flex gap-4 items-center">
                                                                {term.relatedService && (
                                                                    <span className="text-fuchsia-500 text-sm font-black uppercase tracking-widest flex items-center transition-all">
                                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="text-center py-20 bg-white dark:bg-slate-900 rounded-[4rem] border border-slate-200 dark:border-slate-800 shadow-2xl max-w-2xl mx-auto"
                        >
                            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <BookOpen className="w-10 h-10 text-slate-400" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">No precise match</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mb-8 px-8">We couldn't locate any terminology in our glossary matching your exact query.</p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedLetter(null); }}
                                className="inline-flex items-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:scale-105 transition-transform"
                            >
                                Clear All Filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="mt-20 border-t border-slate-100 dark:border-slate-800">
                <InternalLinkGrid type="services" title="Medical Procedures Directory" subtitle="Clinical Excellence" limit={12} className="bg-white dark:bg-slate-950" />
                <InternalLinkGrid type="diagnostics" title="Diagnostics & Lab Services" subtitle="NABL Accredited" limit={8} className="bg-slate-50 dark:bg-slate-900/50" />
            </div>
        </div>
    );
}
