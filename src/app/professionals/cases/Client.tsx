"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    Microscope, 
    Database, 
    Search, 
    FileText, 
    TrendingUp, 
    ShieldCheck, 
    ArrowRight,
    Activity,
    Users,
    ChevronRight,
    Award,
    Filter
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta";

const clinicalCases = [
    {
        title: "Complex Fistula: LIFT Technique + Laser",
        specialty: "Proctology",
        metric: "98% Healing Rate",
        summary: "A 45-year-old male with recurrent complex fistula. Successfully treated using LIFT procedure combined with radial laser ablation.",
        imaging: "MRI Pelvis (Pre/Post)",
        technique: "Hybrid LIFT-Laser"
    },
    {
        title: "Robotic Total Knee Replacement",
        specialty: "Orthopaedics",
        metric: "Day 1 Mobilization",
        summary: "Advanced 3D mapping and robotic-assisted precision for a 65-year-old female. Full weight-bearing within 24 hours.",
        imaging: "3D CT Mapping",
        technique: "MAKO Robotic System"
    },
    {
        title: "Single-Incision Laparoscopic Cholecystectomy",
        specialty: "Laparoscopy",
        metric: "Zero Scarring",
        summary: "Gallbladder removal performed through a single umbilical incision. Patient discharged within 12 hours with minimal analgesia.",
        imaging: "Intra-Op HD Video",
        technique: "SILS Approach"
    }
];

export function CasesClient() {
    return (
        <main className="min-h-screen bg-black text-slate-200">
            {/* TECHNICAL HERO */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-32 overflow-hidden bg-slate-900 border-b border-white/5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                
                <SectionContainer className="relative z-10 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-4xl space-y-8"
                    >
                        <Badge variant="outline" className="px-5 py-2 rounded-full border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-black tracking-widest uppercase">
                            <Database className="w-4 h-4 mr-2" /> Elite Surgical Repository
                        </Badge>
                        
                        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none italic uppercase">
                            Clinical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">Archives.</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                            Peer-reviewed surgical case studies and technical data for medical professionals. Explore the clinical outcomes of our "Elite" surgical protocols.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-6 items-center max-w-2xl">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                            <Input 
                                placeholder="Filter by specialty or technique..." 
                                className="h-16 pl-12 rounded-2xl bg-black border-white/10 text-lg focus:border-blue-500/50 transition-all shadow-2xl"
                            />
                        </div>
                        <Button variant="outline" className="h-16 px-8 rounded-2xl border-white/10 hover:bg-white/5 font-bold">
                            <Filter className="mr-2 w-5 h-5" /> Specialty Filter
                        </Button>
                    </div>
                </SectionContainer>
            </section>

            {/* CASE CARDS GRID */}
            <SectionContainer className="py-24">
                <div className="grid gap-10">
                    {clinicalCases.map((caseStudy, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="bg-slate-900/50 border-white/5 backdrop-blur-sm overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                                <CardContent className="p-0 flex flex-col lg:flex-row">
                                    <div className="lg:w-1/4 p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 bg-slate-900">
                                        <div className="space-y-6">
                                            <Badge className="bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-[10px] rounded-lg">
                                                {caseStudy.specialty}
                                            </Badge>
                                            <h3 className="text-2xl font-black text-white leading-tight italic tracking-tight uppercase">
                                                {caseStudy.title}
                                            </h3>
                                        </div>
                                        <div className="pt-8">
                                            <div className="flex items-center gap-2 text-emerald-400 mb-4">
                                                <Activity className="w-4 h-4" />
                                                <span className="text-xs font-black uppercase tracking-widest">Outcome Metric</span>
                                            </div>
                                            <p className="text-2xl font-black text-white italic">{caseStudy.metric}</p>
                                        </div>
                                    </div>

                                    <div className="lg:w-3/4 p-12 space-y-10">
                                        <div className="grid md:grid-cols-2 gap-12">
                                            <div className="space-y-4">
                                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Clinical Overview</p>
                                                <p className="text-slate-300 font-medium leading-relaxed">
                                                    {caseStudy.summary}
                                                </p>
                                            </div>
                                            <div className="space-y-6">
                                                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                                                    <div className="flex items-center gap-2 text-blue-400">
                                                        <Microscope className="w-4 h-4" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest">Surgical Technique</span>
                                                    </div>
                                                    <p className="text-sm font-black text-white italic uppercase tracking-tighter">{caseStudy.technique}</p>
                                                </div>
                                                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                                                    <div className="flex items-center gap-2 text-indigo-400">
                                                        <Search className="w-4 h-4" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest">Available Imaging</span>
                                                    </div>
                                                    <p className="text-sm font-black text-white italic uppercase tracking-tighter">{caseStudy.imaging}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-4 justify-between items-center pt-8 border-t border-white/5">
                                            <div className="flex gap-4">
                                                <Button size="sm" variant="outline" className="rounded-full border-white/10 text-xs font-bold hover:bg-white/5">
                                                    <FileText className="w-3 link-icon mr-2" /> Technical Report
                                                </Button>
                                                <Button size="sm" variant="outline" className="rounded-full border-white/10 text-xs font-bold hover:bg-white/5">
                                                    <TrendingUp className="w-3 link-icon mr-2" /> Outcome Analytics
                                                </Button>
                                            </div>
                                            <Button variant="link" className="p-0 text-blue-400 hover:text-blue-300 font-black uppercase text-[10px] tracking-[0.2em] group/btn">
                                                Access Full Case PDF
                                                <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </SectionContainer>

            {/* CLINICAL DATA STRIP */}
            <section className="bg-slate-900 border-y border-white/5 py-12 overflow-hidden">
                <div className="flex gap-20 animate-marquee items-center opacity-30 select-none grayscale pointer-events-none">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="flex gap-16 items-center shrink-0">
                            <div className="flex items-center gap-4">
                                <Award className="w-10 h-10" />
                                <span className="text-3xl font-black italic tracking-tighter uppercase whitespace-nowrap text-white">Clinical Benchmarked</span>
                            </div>
                            <Activity className="w-10 h-10" />
                            <div className="flex items-center gap-4">
                                <ShieldCheck className="w-10 h-10" />
                                <span className="text-3xl font-black italic tracking-tighter uppercase whitespace-nowrap text-white">Peer-Reviewed Excellence</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
        </main>
    );
}
