import React from "react";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { GlossaryClient } from "@/components/glossary/GlossaryClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Medical Glossary | Clinical Terms & Definitions | Indira Hospital",
    description: "Navigate our comprehensive clinical glossary. Decode complex medical terminology, from cardiology to advanced surgical procedures, at Indira Super Speciality Hospital.",
};

export default function GlossaryPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
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
