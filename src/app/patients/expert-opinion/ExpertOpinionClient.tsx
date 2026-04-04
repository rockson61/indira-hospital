"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Activity, 
    ShieldCheck, 
    UploadCloud, 
    FileText, 
    Users, 
    Globe, 
    MessageCircle, 
    ArrowRight,
    Search,
    Stethoscope,
    Microscope,
    Heart,
    CheckCircle2,
    Lock,
    Clock
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta";

const mdtMembers = [
    { name: "SR. Consultant - Laparoscopy", focus: "Proctology & GI" },
    { name: "Chief of Orthopaedics", focus: "Robotic Joint Replacement" },
    { name: "Radiology Head", focus: "Diagnostic Imaging (3T MRI)" },
    { name: "Anesthesia Chief", focus: "Pain Management & Recovery" }
];

export default function ExpertOpinionClient() {
    const [isUploading, setIsUploading] = useState(false);
    const [fileUploaded, setFileUploaded] = useState(false);

    const handleUpload = () => {
        setIsUploading(true);
        setTimeout(() => {
            setIsUploading(false);
            setFileUploaded(true);
        }, 2000);
    };

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-blue-500/30">
            {/* CLINICAL TRUST HERO */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-40 overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] [background-size:24px_24px] opacity-50" />
                
                <SectionContainer className="relative z-10 text-center max-w-5xl mx-auto space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Badge variant="outline" className="px-5 py-2 rounded-full border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-black tracking-widest uppercase mb-8">
                            <ShieldCheck className="w-4 h-4 mr-2" /> Verified Clinical Opinion
                        </Badge>
                        
                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-none italic uppercase">
                            Clinical <br />
                            <span className="text-blue-600 dark:text-blue-400 font-black">Expert Review.</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Access authoritative medical reviews for complex cases. Our Multi-Disciplinary Team (MDT) provides deep clinical insight for international and out-of-town patients.
                        </p>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                        <Button 
                            size="lg" 
                            className="h-16 px-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-lg shadow-xl shadow-blue-500/20 border-0"
                            onClick={() => window.open(`https://wa.me/919942436814?text=${encodeURIComponent("I would like to request an Expert Opinion MDT review for a complex medical case at Indira Hospital.")}`, '_blank')}
                        >
                            Start Case Submission
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="h-16 px-10 rounded-2xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                            onClick={() => window.open(`https://wa.me/919942436814?text=${encodeURIComponent("Hello, I am enquiring about the Expert Opinion portal and medical report reviews.")}`, '_blank')}
                        >
                            <MessageCircle className="mr-2 w-5 h-5 text-blue-500" /> WhatsApp Consultant
                        </Button>
                    </div>
                </SectionContainer>
            </section>

            {/* THE MDT PROCESS */}
            <SectionContainer className="py-32">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 space-y-10">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none italic text-slate-900 dark:text-white uppercase">
                            The Multi-Disciplinary <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Board Approach.</span>
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            Complex medical decisions shouldn't be made in isolation. Our Expert Opinion portal triggers an MDT review where surgeons, radiologists, and recovery specialists collaborate on your specific case.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                            {mdtMembers.map((member, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="w-1.5 h-10 rounded-full bg-blue-500" />
                                    <div>
                                        <p className="text-sm font-black text-slate-900 dark:text-white leading-none mb-1">{member.name}</p>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{member.focus}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        {/* UPLOAD SIMULATOR */}
                        <Card className="bg-slate-900 border-white/10 rounded-[3rem] p-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                            <div className="relative z-10 space-y-8">
                                <div className="text-center space-y-4">
                                    <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                                        <UploadCloud className="w-10 h-10 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">Upload Case Reports</h3>
                                    <p className="text-slate-400 font-medium text-sm">Drag and drop MRI, CT scans, or discharge summaries (ZIP/PDF).</p>
                                </div>

                                <div className="space-y-4">
                                    <Input 
                                        type="file" 
                                        className="hidden" 
                                        id="case-upload" 
                                        onChange={handleUpload}
                                    />
                                    <label 
                                        htmlFor="case-upload"
                                        className="flex flex-col items-center justify-center h-48 rounded-[2rem] border-2 border-dashed border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer group/label"
                                    >
                                        <AnimatePresence mode="wait">
                                            {isUploading ? (
                                                <motion.div 
                                                    key="uploading"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex flex-col items-center gap-4"
                                                >
                                                    <Activity className="w-10 h-10 text-blue-400 animate-pulse" />
                                                    <p className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] animate-pulse">Encrypting & Uploading...</p>
                                                </motion.div>
                                            ) : fileUploaded ? (
                                                <motion.div 
                                                    key="done"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="flex flex-col items-center gap-4 text-emerald-400"
                                                >
                                                    <CheckCircle2 className="w-10 h-10" />
                                                    <p className="font-black text-xs uppercase tracking-[0.2em]">Upload Complete</p>
                                                </motion.div>
                                            ) : (
                                                <motion.div 
                                                    key="idle"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="flex flex-col items-center gap-4"
                                                >
                                                    <Search className="w-8 h-8 text-slate-500 group-hover/label:text-blue-400 transition-colors" />
                                                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Select Files</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </label>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-3">
                                        <Lock className="w-4 h-4 text-emerald-400" />
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">HIPAA Compliant Transfer</p>
                                    </div>
                                    <div className="flex -space-x-2">
                                        {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border border-slate-900 bg-slate-800" />)}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </SectionContainer>

            {/* TRUST INDICATORS */}
            <section className="bg-slate-100 dark:bg-slate-900 py-24 border-y border-slate-200 dark:border-slate-800">
                <SectionContainer>
                    <div className="grid md:grid-cols-3 gap-16 text-center">
                        {[
                            { icon: Clock, val: "48-72 Hours", label: "Report Turnaround" },
                            { icon: FileText, val: "Full PDF Report", label: "MDT Consultation Summary" },
                            { icon: Globe, val: "Global Access", label: "International Video Review" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mx-auto border border-slate-100 dark:border-slate-700">
                                    <stat.icon className="w-8 h-8 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{stat.val}</p>
                                    <p className="text-xs text-slate-500 font-black uppercase tracking-widest mt-1">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
            </section>

            <CTASection />
        </main>
    );
}
