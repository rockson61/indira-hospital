'use client';

import Link from "next/link";
import { Clock, Home, ArrowRight, Sparkles } from "lucide-react";
import { BloodDrop, TestTubes, UltrasoundScanner, HeartCardiogram, Electricity } from "healthicons-react/outline";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DiagnosticCardProps {
 test: any;
 className?: string;
}

const categoryConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string; label: string }> = {
 radiology: { icon: UltrasoundScanner, color: 'text-fuchsia-400', bgColor: 'bg-fuchsia-500/10', label: 'Radiology & Imaging' },
 pathology: { icon: TestTubes, color: 'text-pink-400', bgColor: 'bg-pink-500/10', label: 'Pathology & Lab' },
 cardiology: { icon: HeartCardiogram, color: 'text-rose-400', bgColor: 'bg-rose-500/10', label: 'Cardiology' },
 other: { icon: Electricity, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', label: 'Other Tests' },
};

export function DiagnosticCard({ test, className }: DiagnosticCardProps) {
 const config = categoryConfig[test.category || 'other'] || categoryConfig.other;
 const href = `/diagnostics/${test.slug}`;

 return (
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
 className="h-full"
 >
 <Link href={href} className={cn("block group h-full", className)}>
 <div className="relative h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 rounded-[2.5rem] p-8 hover:bg-white dark:bg-slate-900 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden flex flex-col">
 {/* Light Streak Animation */}
 <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/10 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

 <div className="flex justify-between items-start mb-6 relative z-10">
 <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-clay group-hover:shadow-fuchsia-500/20", config.bgColor)}>
 <config.icon className={cn("w-7 h-7", config.color)} />
 </div>
 <div className="text-right">
 <span className="text-lg font-black text-slate-900 dark:text-white tabular-nums">
 {test.price ? 'Standard Rate' : 'Book Test'}
 </span>
 </div>
 </div>

 <div className="relative z-10 flex-grow">
 <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-fuchsia-700 transition-colors tracking-tight leading-tight mb-3">
 {test.name}
 </h3>
 <p className="text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-medium text-[15px]">
 {test.short_description || `Comprehensive ${test.name} with fast reporting at Indira Hospital.`}
 </p>
 </div>

 <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 relative z-10">
 <div className="flex flex-wrap gap-2 mb-6">
 <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
 <Clock className="w-3.5 h-3.5 text-fuchsia-500" />
 {test.report_time || '24h'} Report
 </span>
 {test.home_collection && (
 <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-fuchsia-700 bg-fuchsia-50 dark:bg-fuchsia-950 px-3 py-1.5 rounded-xl border border-fuchsia-100">
 <Home className="w-3.5 h-3.5" />
 Home Visit
 </span>
 )}
 </div>

 <div className="flex items-center justify-between">
 <span className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-fuchsia-500 transition-colors">Know More</span>
 <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-fuchsia-500 flex items-center justify-center transition-all duration-500 group-hover:rotate-[-45deg]">
 <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
 </div>
 </div>
 </div>
 </div>
 </Link>
 </motion.div>
 );
}
