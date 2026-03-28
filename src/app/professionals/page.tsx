"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    Stethoscope, 
    Microscope, 
    GraduationCap, 
    Send, 
    Activity, 
    BookOpen, 
    Users, 
    ArrowRight,
    Award,
    FileText,
    ShieldCheck,
    Globe
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/sections/cta";

const professionalPortals = [
    {
        title: "Clinical Referral Pathway",
        description: "Streamlined, high-trust referral system for community doctors and out-of-town specialists.",
        icon: Send,
        color: "text-blue-500",
        href: "#refer",
        cta: "Initiate Referral"
    },
    {
        title: "Academic & DNB Programs",
        description: "Explore our accredited postgraduate medical education and residency programs.",
        icon: GraduationCap,
        color: "text-indigo-500",
        href: "#academics",
        cta: "View Curriculum"
    },
    {
        title: "Research & Publications",
        description: "Review our latest clinical trials, surgical innovations, and peer-reviewed papers.",
        icon: Microscope,
        color: "text-emerald-500",
        href: "#research",
        cta: "Access Library"
    },
    {
        title: "CME Calendar",
        description: "Stay updated with our Continuing Medical Education workshops and surgical webinars.",
        icon: BookOpen,
        color: "text-amber-500",
        href: "#cme",
        cta: "Register Now"
    }
];

export default function ProfessionalsHub() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200">
            {/* CINEMATIC HERO */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-48 overflow-hidden bg-slate-900 rounded-b-[4rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                
                {/* Ambient Glows */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] will-change-transform transform-gpu opacity-50 animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] will-change-transform transform-gpu opacity-30" />

                <SectionContainer className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-[0.2em] uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-blue-500/20">
                            <Stethoscope className="w-4 h-4" /> Professional Syndicate Portal
                        </div>
                        
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                            Advancing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Clinical Leadership.</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed mb-12">
                            A dedicated hub for medical professionals to collaborate, refer complex cases, and access cutting-edge research in laparoscopic and orthopaedic surgery.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button 
                                size="lg" 
                                className="h-16 px-10 rounded-2xl bg-blue-600 text-white hover:bg-blue-500 font-black text-lg shadow-xl shadow-blue-500/20"
                                onClick={() => window.open(`https://wa.me/919942436814?text=${encodeURIComponent("Professional Referral Enquiry: I am a medical professional seeking to refer a complex case for specialized surgical care at Indira Hospital.")}`, '_blank')}
                            >
                                Affiliate Referral Portal
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5 font-bold text-lg"
                                onClick={() => window.open(`https://wa.me/919942436814?text=${encodeURIComponent("Clinical Research: I would like to access the latest clinical trials and surgical research archives.")}`, '_blank')}
                            >
                                <FileText className="mr-2 w-5 h-5 text-blue-400" /> Research Archives
                            </Button>
                        </div>
                    </motion.div>
                </SectionContainer>
            </section>

            {/* SYNDICATE PILLARS */}
            <SectionContainer className="py-24 -mt-20 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {professionalPortals.map((portal, i) => (
                        <Card key={i} className="bg-slate-900 border-white/5 hover:border-blue-500/30 transition-all duration-500 transform-gpu hover:-translate-y-2 group">
                            <CardContent className="p-8 space-y-6">
                                <div className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 shadow-lg`}>
                                    <portal.icon className={`w-7 h-7 ${portal.color} group-hover:text-white transition-colors`} />
                                </div>
                                <h3 className="text-xl font-black text-white">{portal.title}</h3>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                    {portal.description}
                                </p>
                                <Button 
                                    variant="link" 
                                    className="p-0 text-blue-400 hover:text-blue-300 font-black uppercase text-xs tracking-widest group-hover:translate-x-1 transition-transform"
                                    onClick={() => window.open(`https://wa.me/919942436814?text=${encodeURIComponent(`Elite Professional Enquiry: I'm interested in the ${portal.title} at Indira Super Speciality Hospital.`)}`, '_blank')}
                                >
                                    {portal.cta} <ArrowRight className="ml-1 w-3.5 h-3.5" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </SectionContainer>

            {/* CLINICAL EXCELLENCE DATA (MOCK) */}
            <SectionContainer className="py-24 border-t border-white/5 bg-slate-950/50">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    <div className="md:w-1/2 space-y-8 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-lg">
                            <Activity className="w-4 h-4" /> Real-time Clinical Benchmarks
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none italic">
                            Evidence-Based <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Outcomes.</span>
                        </h2>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed">
                            Indira Hospital maintains a strict transparency policy for clinical outcomes. We track every surgical intervention against global gold standards for safety and mobility.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { val: "99.8%", label: "Surgical Safety Rate" },
                                { val: "0.2%", label: "Infection Rate (Wound)" },
                                { val: "10,000+", label: "Laparoscopic Cases" },
                                { val: "Elite", label: "NABH Accreditation" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <p className="text-3xl font-black text-white">{stat.val}</p>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 relative">
                        <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-indigo-900 border border-white/10 p-12 flex items-center justify-center relative overflow-hidden group">
                           <div className="absolute inset-0 bg-[url('https://healthicons.org/icons/svg/outline/specialties/surgery.svg')] opacity-5 bg-center bg-no-repeat scale-[2] grayscale" />
                           <div className="z-10 text-center space-y-4">
                               <Award className="w-24 h-24 text-blue-400 mx-auto" />
                               <h4 className="text-2xl font-black text-white">Clinical Center of Excellence</h4>
                               <p className="text-slate-400 text-sm italic">Ranked #1 for Laparoscopic Innovation in the Region.</p>
                           </div>
                           {/* Decorative radar */}
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] border-[20px] border-blue-500/5 rounded-full animate-ping" />
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* ACADEMICS & RESEARCH STRIP */}
            <SectionContainer className="py-32">
                <div className="flex flex-col items-center text-center space-y-6 mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight italic">Academic Leadership & Research</h2>
                    <p className="text-slate-400 max-w-2xl font-medium">Empowering the next generation of surgeons through accredited residency programs and continuous medical education.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-slate-900 border-white/5 overflow-hidden">
                        <CardHeader className="p-8 border-b border-white/5">
                            <CardTitle className="text-2xl font-black text-white flex items-center gap-3 italic">
                                <Users className="w-6 h-6 text-indigo-400" /> DNB Residency Programs
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6 font-medium text-slate-300">
                            <p>We offer accredited DNB (Diplomate of National Board) programs in General Surgery and Orthopaedics, providing residents with high-volume surgical exposure and mentorship.</p>
                            <Button 
                                variant="outline" 
                                className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10"
                                onClick={() => window.open(`https://wa.me/919942436814?text=${encodeURIComponent("DNB Prospectus Request: I am interested in the DNB Residency programs at Indira Hospital.")}`, '_blank')}
                            >
                                Request Prospectus via WhatsApp
                            </Button>
                        </CardContent>
                    </Card>
                    
                    <Card className="bg-slate-900 border-white/5 overflow-hidden">
                        <CardHeader className="p-8 border-b border-white/5">
                            <CardTitle className="text-2xl font-black text-white flex items-center gap-3 italic">
                                <Globe className="w-6 h-6 text-emerald-400" /> Global Research Trials
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6 font-medium text-slate-300">
                            <p>Indira Hospital is a designated center for several multicentric clinical trials in minimally invasive proctology and robotic-assisted surgeries.</p>
                            <Button 
                                variant="outline" 
                                className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                                onClick={() => window.open(`https://wa.me/919942436814?text=${encodeURIComponent("Research Collaboration: I am interested in active clinical trials and surgical research opportunities.")}`, '_blank')}
                            >
                                Enquire via WhatsApp
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </SectionContainer>

            <CTASection />
        </main>
    );
}
