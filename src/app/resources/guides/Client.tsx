"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    BookOpen, 
    Download, 
    Printer, 
    ChevronRight, 
    Activity, 
    FileText, 
    CheckCircle2, 
    ArrowRight,
    Search,
    Stethoscope,
    Microscope,
    Clock
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CTASection } from "@/components/sections/cta";

const clinicalGuides = [
    {
        title: "The Elite Guide to Laser Proctology",
        subtitle: "A 4-Step Patient Journey for Laser Piles & Fissure Surgery.",
        icon: Activity,
        steps: ["Diagnostic Mapping", "Day-Care Laser Procedure", "HomeCareFlow Recovery", "Final Stability Check"],
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        title: "Modern Orthopaedics: The Robotic Mobility Path",
        subtitle: "Clinical Protocols for Robotic Total Knee Replacement.",
        icon: Stethoscope,
        steps: ["3D Anatomy Mapping", "Robotic Intervention", "Early Mobilization", "Advanced Physiotherapy"],
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: "Advanced Laparoscopy: Minimal Access Surgery",
        subtitle: "Technical Overview of Laparoscopic Gallbladder & Hernia Repair.",
        icon: Microscope,
        steps: ["Pre-Op Strategy", "Single-Incision Intervention", "Post-Op Monitoring", "Rapid Discharge"],
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    }
];

export function GuidesClient() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-purple-500/30">
            {/* CLEAN ACADEMIC HERO */}
            <section className="relative pt-48 pb-32 lg:pt-56 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] [background-size:24px_24px] opacity-50" />
                
                <SectionContainer className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-black tracking-widest uppercase">
                            <BookOpen className="w-4 h-4" /> Elite Resource Library
                        </div>
                        
                        <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none italic text-slate-900 dark:text-white">
                            Clinical <br />
                            <span className="text-purple-600 dark:text-purple-400">Journey Maps.</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
                            High-authority, printable guides designed to provide patients and referring doctors with absolute clarity on advanced surgical protocols and recovery timelines.
                        </p>

                        <div className="relative max-w-2xl mx-auto pt-8">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input 
                                placeholder="Search clinical guides (e.g. 'Piles', 'Knee', 'Referral')..." 
                                className="pl-12 h-16 rounded-2xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none focus:border-purple-500 transition-all text-lg"
                            />
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* GUIDES GRID */}
            <SectionContainer className="py-24">
                <div className="grid gap-12 max-w-6xl mx-auto">
                    {clinicalGuides.map((guide, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-500">
                                <CardContent className="p-0 flex flex-col lg:flex-row">
                                    <div className={`lg:w-1/3 p-10 flex flex-col justify-between items-start border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800`}>
                                        <div className="space-y-6">
                                            <div className={`w-16 h-16 rounded-[2rem] ${guide.bg} flex items-center justify-center shadow-sm`}>
                                                <guide.icon className={`w-8 h-8 ${guide.color}`} />
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight italic tracking-tight uppercase">
                                                {guide.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                                {guide.subtitle}
                                            </p>
                                        </div>
                                        <div className="flex gap-2 mt-10">
                                            <Button size="sm" variant="outline" className="rounded-full border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800">
                                                <Download className="w-3.5 h-3.5 mr-2" /> Download PDF
                                            </Button>
                                            <Button size="sm" variant="ghost" className="rounded-full text-xs font-bold text-slate-400">
                                                <Printer className="w-3.5 h-3.5 mr-2" /> Print
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="lg:w-2/3 p-10 bg-slate-50/50 dark:bg-slate-900/30">
                                        <div className="flex items-center gap-2 mb-8">
                                            <Clock className="w-4 h-4 text-slate-400" />
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">The Clinical Protocol</span>
                                        </div>
                                        
                                        <div className="grid sm:grid-cols-2 gap-8">
                                            {guide.steps.map((step, si) => (
                                                <div key={si} className="flex gap-4 group">
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-black text-slate-900 dark:text-white group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                                                        {si + 1}
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">{step}</h4>
                                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Verified by Indira Elite Medical Board for optimal outcomes.</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-12 flex justify-end">
                                            <Button 
                                                variant="link" 
                                                className="text-purple-600 dark:text-purple-400 font-black uppercase text-xs tracking-[0.2em] p-0 group"
                                                onClick={() => window.open(`https://wa.me/919942436814?text=${encodeURIComponent(`Guide Enquiry: I am interested in the ${guide.title} protocol and would like to request the full clinical journey details.`)}`, '_blank')}
                                            >
                                                Request Full Guide via WhatsApp
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </SectionContainer>

            {/* REFERRAL BRIDGE */}
            <SectionContainer className="pb-32">
                <div className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] will-change-transform transform-gpu" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-2/3 space-y-6 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight italic">Are you a Medical Professional?</h2>
                            <p className="text-slate-300 text-lg font-light leading-relaxed">
                                Access technical data sheets, clinical results, and our streamlined referral portal designed for seamless patient transitions.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <Button 
                                    className="h-14 px-8 rounded-xl bg-purple-600 hover:bg-purple-700 font-black"
                                    onClick={() => window.open(`https://wa.me/919942436814?text=${encodeURIComponent("Professional Enquiry: I would like to access the Medical Professional Syndicate and Clinical Case Repository.")}`, '_blank')}
                                >
                                    Request Access via WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <Button 
                                    variant="outline" 
                                    className="h-14 px-8 rounded-xl border-white/10 hover:bg-white/5 font-bold"
                                    onClick={() => window.open(`https://wa.me/919942436814?text=${encodeURIComponent("Clinical Case Studies: Please share the latest surgical outcomes and case study database.")}`, '_blank')}
                                >
                                    Message for Case Studies
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/3">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md">
                                <CheckCircle2 className="w-12 h-12 text-purple-400 mb-6" />
                                <h4 className="text-xl font-black mb-2">Verified Accuracy</h4>
                                <p className="text-sm text-slate-400 font-medium italic">Every guide is reviewed annually by our clinical chiefs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <CTASection />
        </main>
    );
}
