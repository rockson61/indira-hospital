"use client";

import React, { useState, useMemo } from "react";
import { SectionContainer } from "@/components/ui/section-container";
import { Search, ChevronRight } from "lucide-react";
import Link from "next/link";

import { SEED_DATA } from "@/lib/data/seed-data";

const INDEX_DATA = SEED_DATA.services.reduce((acc: { letter: string; items: { name: string; url: string }[] }[], service) => {
 const letter = service.title[0].toUpperCase();
 let group = acc.find(g => g.letter === letter);
 if (!group) {
 group = { letter, items: [] };
 acc.push(group);
 }
 group.items.push({
 name: service.title,
 url: `/departments/${service.slug}`
 });
 return acc;
}, []).sort((a, b) => a.letter.localeCompare(b.letter));


export const AZIndex = () => {
 const [activeLetter, setActiveLetter] = useState("A");
 const [searchTerm, setSearchTerm] = useState("");

 const filteredData = useMemo(() => {
 if (searchTerm) {
 return INDEX_DATA.flatMap(group => group.items).filter(item =>
 item.name.toLowerCase().includes(searchTerm.toLowerCase())
 );
 }
 return INDEX_DATA.find(group => group.letter === activeLetter)?.items || [];
 }, [activeLetter, searchTerm]);

 return (
 <section className="bg-white dark:bg-slate-900 py-24 overflow-hidden">
 <SectionContainer>
 <div className="text-center max-w-3xl mx-auto mb-16">
 <h2 className="elite-section-title mb-6 text-slate-900 dark:text-white">
 Health <span className="text-fuchsia-600">A to Z Index</span>
 </h2>
 <p className="text-lg text-slate-500 dark:text-slate-400">Quickly find information on medical conditions, procedures, and speciality care across our center.</p>
 </div>

 {/* SEARCH BOX */}
 <div className="max-w-2xl mx-auto mb-12 relative group">
 <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-fuchsia-600 transition-colors" />
 <input
 type="text"
 placeholder="Search for a treatment or condition..."
 className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-fuchsia-600 text-lg transition-all"
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 />
 </div>

 {/* ALPHA SELECTOR */}
 {!searchTerm && (
 <div className="flex flex-wrap justify-center gap-2 mb-12">
 {INDEX_DATA.map(group => (
 <button
 key={group.letter}
 onClick={() => setActiveLetter(group.letter)}
 className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl font-bold transition-all ${activeLetter === group.letter
 ? "bg-fuchsia-600 text-white shadow-clay shadow-fuchsia-600/30 scale-110"
 : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:bg-slate-700"
 }`}
 >
 {group.letter}
 </button>
 ))}
 </div>
 )}

 {/* RESULTS GRID */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
 {filteredData.map((item, i) => (
 <Link
 key={i}
 href={item.url}
 className="group bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-white dark:bg-slate-900 dark:hover:bg-slate-800 transition-all flex items-center justify-between"
 >
 <span className="font-bold text-slate-800 dark:text-slate-100 dark:text-slate-200 group-hover:text-fuchsia-600 transition-colors">{item.name}</span>
 <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-fuchsia-600 group-hover:translate-x-1 transition-all" />
 </Link>
 ))}
 {filteredData.length === 0 && (
 <div className="col-span-full text-center py-12 text-slate-400 font-medium italic">
 No matching treatments or conditions found.
 </div>
 )}
 </div>
 </SectionContainer>
 </section>
 );
};
