'use client';

import Link from "next/link";
import { Clock, Home, Droplets, FlaskConical, ScanLine, Activity, Zap, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DiagnosticCardProps {
    test: any;
    className?: string;
}

const categoryConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string; label: string }> = {
    radiology: { icon: ScanLine, color: 'text-teal-400', bgColor: 'bg-teal-500/10', label: 'Radiology & Imaging' },
    pathology: { icon: FlaskConical, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', label: 'Pathology & Lab' },
    cardiology: { icon: Activity, color: 'text-rose-400', bgColor: 'bg-rose-500/10', label: 'Cardiology' },
    other: { icon: Zap, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', label: 'Other Tests' },
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
                <div className="relative h-full bg-white/40 backdrop-blur-2xl border border-slate-200/50 rounded-[2.5rem] p-8 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden flex flex-col">
                    {/* Light Streak Animation */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

                    <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-teal-500/20", config.bgColor)}>
                            <config.icon className={cn("w-7 h-7", config.color)} />
                        </div>
                        <div className="text-right">
                            <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Pricing</div>
                            <span className="text-2xl font-black text-slate-900 tabular-nums">
                                {test.price ? `₹${test.price}` : 'Book'}
                            </span>
                        </div>
                    </div>

                    <div className="relative z-10 flex-grow">
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-teal-700 transition-colors tracking-tight leading-tight mb-3">
                            {test.name}
                        </h3>
                        <p className="text-slate-500 line-clamp-2 leading-relaxed font-medium text-[15px]">
                            {test.short_description || `Comprehensive ${test.name} with fast reporting at Indira Hospital.`}
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl">
                                <Clock className="w-3.5 h-3.5 text-teal-500" />
                                {test.report_time || '24h'} Report
                            </span>
                            {test.home_collection && (
                                <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-100">
                                    <Home className="w-3.5 h-3.5" />
                                    Home Visit
                                </span>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-teal-500 transition-colors">Know More</span>
                            <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-teal-500 flex items-center justify-center transition-all duration-500 group-hover:rotate-[-45deg]">
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
