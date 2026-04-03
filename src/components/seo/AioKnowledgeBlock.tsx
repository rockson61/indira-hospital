import React from 'react';
import { siteConfig } from "@/config/site";
import { Sparkles, Activity, ShieldCheck, Clock } from "lucide-react";

interface AioKnowledgeBlockProps {
    title?: string;
    items: { label: string; value: string; icon?: React.ElementType }[];
}

/**
 * AioKnowledgeBlock
 * A semantic, visible component designed for AI Answer Engines (AEO).
 * Provides structured "Quick Facts" that are easy for LLMs to extract while 
 * remaining useful for human visitors.
 */
export default function AioKnowledgeBlock({ 
    title = "Clinical Summary & Hospital Facts",
    items 
}: AioKnowledgeBlockProps) {
    return (
        <section className="my-16 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 md:p-12 shadow-sm relative overflow-hidden group/aio clinical-insight">
            {/* Semantic AI Background Signal */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover/aio:bg-fuchsia-500/10 transition-colors duration-700" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-fuchsia-50 dark:bg-fuchsia-900/30 rounded-lg">
                        <Sparkles className="w-5 h-5 text-fuchsia-600" />
                    </div>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100/50 dark:border-slate-700/50 hover:border-fuchsia-200 transition-all duration-300">
                            <div className="flex items-center gap-2 mb-2 text-slate-400 dark:text-slate-500">
                                {item.icon ? (
                                    <item.icon className="w-4 h-4" />
                                ) : (
                                    <Activity className="w-4 h-4" />
                                )}
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</span>
                            </div>
                            <div className="text-sm font-bold text-slate-700 dark:text-slate-200">
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-6 items-center italic text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" /> Authorized Clinical Content
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-500" /> Updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-2 ml-auto not-italic font-bold text-fuchsia-600">
                        {siteConfig.name}
                    </div>
                </div>
            </div>
        </section>
    );
}
