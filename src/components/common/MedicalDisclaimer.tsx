"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, BookOpen, Shield } from "lucide-react";
;
;

export function MedicalDisclaimer() {
 return (
 <section className="bg-transparent py-10 relative z-10">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/50 rounded-[2rem] p-6 sm:p-8 shadow-sm hover:shadow-float transition-shadow-soft duration-500 overflow-hidden relative">
 {/* Subtle Glow */}
 <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full blur-3xl opacity-50 pointer-events-none -mr-32 -mt-32" />

 <div className="grid md:grid-cols-12 gap-6 relative z-10">
 {/* Primary Author Card - Spans 5 cols */}
 <div className="md:col-span-5 flex items-start space-x-4 bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
 <div className="relative shrink-0">
 <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/50 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-700 shadow-sm">
 <Shield className="w-6 h-6 text-fuchsia-700 dark:text-fuchsia-400" />
 </div>
 <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full" title="Verified Medically Accurate" />
 </div>
 <div className="flex-1">
 <h4 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
 Medically Reviewed
 </h4>
 <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
 Content clinically verified by{" "}
 <Link href="/doctor/general-surgery/dr-karan-shankar" className="text-fuchsia-700 dark:text-fuchsia-400 font-bold hover:text-fuchsia-800 dark:hover:text-fuchsia-300 transition-colors inline-block group border-b border-fuchsia-200 dark:border-fuchsia-800 hover:border-fuchsia-500">
 Dr. Karan Shankar
 </Link>
 , Clinical Executive Director.
 </p>
 </div>
 </div>

 {/* Secondary Info - Spans 7 cols */}
 <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
 {/* Disclaimer */}
 <div className="flex items-start space-x-3 p-2">
 <div className="bg-amber-50 dark:bg-amber-950/30 p-2 rounded-xl shrink-0 border border-amber-100 dark:border-amber-900/50">
 <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-500" />
 </div>
 <div>
 <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">Educational Purpose</h4>
 <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
 Not a substitute for professional medical advice, diagnosis, or treatment.
 </p>
 </div>
 </div>

 {/* References */}
 <div className="flex items-start space-x-3 p-2 border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-800 pt-4 sm:pt-0 sm:pl-4">
 <div className="bg-fuchsia-50 dark:bg-fuchsia-950/30 p-2 rounded-xl shrink-0 border border-fuchsia-100 dark:border-fuchsia-900/50">
 <BookOpen className="w-4 h-4 text-fuchsia-600 dark:text-fuchsia-500" />
 </div>
 <div>
 <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">Trusted Sources</h4>
 <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
 Curated from peer-reviewed journals and authoritative healthcare guidelines.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
