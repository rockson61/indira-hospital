import React from "react";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { GlossaryClient } from "@/components/glossary/GlossaryClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Medical Glossary | Clinical Terms & Definitions | Indira ...",
    description: "Navigate our comprehensive clinical glossary. Decode complex medical terminology, from cardiology to advanced surgical procedures, at Indira Super Speci...",
};

export default function GlossaryPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* ELITE GLOSSARY HERO */}
            <section className="relative pt-48 pb-32 lg:pt-56 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] [background-size:24px_24px] opacity-50" />
                
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black tracking-[0.3em] uppercase">
                            Medical Lexicon & Clinical Definitions
                        </div>
                        
                        <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none italic text-slate-900 dark:text-white">
                            Medical <br />
                            <span className="text-fuchsia-600 dark:text-fuchsia-400">Glossary Hub.</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
                            A high-authority repository of clinical surgical terms, decoded for patients and medical professionals. Built to provide clarity on advanced laparoscopic and proctology protocols.
                        </p>
                    </div>
                </div>
            </section>

            <GlossaryClient />
            
            <div className="mt-20 border-t border-slate-100 dark:border-slate-800">
                <InternalLinkGrid 
                    type="services" 
                    title="Medical Procedures Directory" 
                    subtitle="Clinical Excellence" 
                    limit={12} 
                    className="bg-white dark:bg-slate-950" 
                />
                <InternalLinkGrid 
                    type="diagnostics" 
                    title="Diagnostics & Lab Services" 
                    subtitle="NABL Accredited" 
                    limit={8} 
                    className="bg-slate-50 dark:bg-slate-900/50" 
                />
            </div>
        </div>
    );
}
