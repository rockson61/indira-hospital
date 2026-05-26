'use client'

import React from 'react'
import { CheckCircle2, XCircle, Zap, ShieldAlert, Clock, Bed, Smile, Activity } from 'lucide-react'

interface ComparisonRowProps {
 label: string
 traditional: string
 elite: string
 isEliteBetter?: boolean
}

const ComparisonRow = ({ label, traditional, elite, isEliteBetter = true }: ComparisonRowProps) => (
 <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6 border-b border-slate-100 dark:border-slate-800 items-center">
 <div className="col-span-2 md:col-span-1">
 <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{label}</span>
 </div>
 <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl md:bg-transparent md:p-0">
 <XCircle className="w-5 h-5 text-red-500 shrink-0" />
 <span className="text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base">{traditional}</span>
 </div>
 <div className="flex items-center gap-3 bg-fuchsia-50 dark:bg-fuchsia-950/30 p-4 rounded-2xl border border-fuchsia-100 dark:border-fuchsia-900/50 md:bg-transparent md:p-0 md:border-none">
 <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
 <span className="text-slate-900 dark:text-white font-bold text-sm md:text-base">{elite}</span>
 </div>
 </div>
)

export const ProcedureComparison = () => {
 return (
 <section className="my-16">
 <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden relative">
 <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 blur-[100px] pointer-events-none" />
 
 <div className="max-w-3xl mb-12">
 <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-heading underline decoration-fuchsia-500/30 underline-offset-8">
 The Advantage: Elite Laser vs. Traditional Surgery
 </h2>
 <p className="text-slate-600 dark:text-slate-400">
 Modern medical science allows for precision that traditional methods simply cannot match. Compare how our Elite procedures redefine the patient experience.
 </p>
 </div>

 {/* Table Header */}
 <div className="hidden md:grid md:grid-cols-3 gap-12 pb-6 border-b-2 border-slate-100 dark:border-slate-800">
 <div className="text-sm font-black text-slate-400 uppercase tracking-widest">Efficiency Metric</div>
 <div className="text-lg font-bold text-red-600 flex items-center gap-2">
 <ShieldAlert className="w-5 h-5" /> Traditional Open
 </div>
 <div className="text-lg font-bold text-fuchsia-600 flex items-center gap-2">
 <Zap className="w-5 h-5" /> Elite Modern
 </div>
 </div>

 {/* Comparison Rows */}
 <div className="space-y-2">
 <ComparisonRow 
 label="Pain Level" 
 traditional="High (Requires heavy painkillers)" 
 elite="Minimal (Virtually painless)" 
 />
 <ComparisonRow 
 label="Recovery Time" 
 traditional="4 - 6 Weeks" 
 elite="48 - 72 Hours" 
 />
 <ComparisonRow 
 label="Hospital Stay" 
 traditional="3 - 5 Days" 
 elite="Daycare (Discharge in 6 hrs)" 
 />
 <ComparisonRow 
 label="Incision & Scars" 
 traditional="Large cuts (Significant scarring)" 
 elite="Pin-hole (Zero visible scars)" 
 />
 <ComparisonRow 
 label="Complications" 
 traditional="Risk of infection & bleeding" 
 elite="Standard safety; zero blood loss" 
 />
 <ComparisonRow 
 label="Back to Work" 
 traditional="After 3 - 4 weeks" 
 elite="Within 2 - 3 days" 
 />
 </div>

 {/* Footnote */}
 <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm">
 <Smile className="w-6 h-6" />
 </div>
 <p className="text-sm font-medium text-slate-600 dark:text-slate-400 italic">
 100% Sphincter-Preserving & Tissue-Saving Protocols.
 </p>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-fuchsia-600 shadow-sm">
 <Activity className="w-6 h-6" />
 </div>
 <p className="text-sm font-medium text-slate-600 dark:text-slate-400 italic">
 Advanced USFDA Approved Laser/Laparoscopic Tech.
 </p>
 </div>
 </div>
 </div>
 </section>
 )
}
