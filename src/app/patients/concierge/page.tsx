"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    Sparkles, 
    UserCheck, 
    Coffee, 
    Hotel, 
    Clock, 
    ShieldCheck, 
    ChefHat, 
    Plane, 
    ArrowRight,
    Star,
    MessageCircle,
    Phone
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/cta";

const conciergeFeatures = [
    {
        title: "Personal Relationship Manager",
        description: "A dedicated point of contact to handle all clinical schedules, insurance approvals, and family updates.",
        icon: UserCheck,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Gourmet Clinical Nutrition",
        description: "Chef-prepared meals tailored to your recovery requirements, served with premium hospitality standards.",
        icon: ChefHat,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Elite Suite Accommodations",
        description: "Artistically designed recovery suites with companion stay facilities and smart-room features.",
        icon: Hotel,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Zero-Wait Registration",
        description: "Skip all administrative queues with our 'Arrive-to-Bed' fast-track admission process.",
        icon: Clock,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    }
];

export default function ConciergePage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            {/* CINEMATIC HERO */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
                
                {/* Ambient Glows */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] will-change-transform transform-gpu opacity-40 animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px] will-change-transform transform-gpu opacity-30" />

                <SectionContainer className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-purple-400 text-xs font-black tracking-[0.3em] uppercase mb-12 shadow-[0_0_40px_-5px_var(--tw-shadow-color)] shadow-purple-500/20">
                            <Sparkles className="w-4 h-4" /> Elite Concierge Excellence
                        </div>
                        
                        <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9]">
                            Healthcare <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 bg-clip-text text-transparent">Meets Hospitality.</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-16">
                            Experience a new standard of medical care where clinical precision is paired with the personalized service of a five-star hotel.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button 
                                size="lg" 
                                className="h-16 px-10 rounded-2xl bg-white text-black hover:bg-slate-200 font-black text-lg transition-transform hover:scale-105"
                                onClick={() => window.open(`https://wa.me/919842324425?text=${encodeURIComponent("I would like to upgrade my stay to the Indira Elite Concierge experience and Presidential Suite.")}`, '_blank')}
                            >
                                Upgrade to Elite Stay
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5 font-bold text-lg"
                                onClick={() => window.open(`https://wa.me/919842324425?text=${encodeURIComponent("Hello, I would like to speak with an Indira Elite Concierge regarding personalised medical care.")}`, '_blank')}
                            >
                                <MessageCircle className="mr-2 w-5 h-5 text-purple-400" /> Speak with Concierge
                            </Button>
                        </div>
                    </motion.div>
                </SectionContainer>
            </section>

            {/* THE FOUR PILLARS */}
            <SectionContainer className="py-32 border-y border-white/5">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {conciergeFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <Card className="bg-slate-900/40 border-white/5 backdrop-blur-sm overflow-hidden h-full hover:border-purple-500/30 transition-all duration-500">
                                <CardContent className="p-10 space-y-6">
                                    <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                        <feature.icon className={`w-8 h-8 ${feature.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white italic tracking-tight">{feature.title}</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </SectionContainer>

            {/* SIGNATURE ROOMS SHOWCASE (MOCK) */}
            <SectionContainer className="py-32">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 space-y-10">
                        <div className="inline-flex items-center gap-2 p-2 px-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
                            <Hotel className="w-4 h-4" /> Destination Recovery
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none italic">
                            The Elite <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Recovery Suites.</span>
                        </h2>
                        <ul className="space-y-6">
                            {[
                                "Companion stay with private lounge area",
                                "Smart-lighting and personalized climate control",
                                "High-fidelity entertainment and connectivity",
                                "24/7 Dedicated nursing-to-patient ratio 1:1"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                                    <span className="text-lg text-slate-300 font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button variant="link" className="text-purple-400 font-black p-0 hover:text-purple-300 text-lg group">
                            Explore Virtual Room Tour 
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </div>
                    
                    <div className="lg:w-1/2 relative">
                        <div className="aspect-[4/5] rounded-[4rem] bg-gradient-to-br from-purple-500/20 to-slate-900 border border-white/10 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
                            <div className="absolute bottom-12 left-12 right-12 space-y-4">
                                <div className="flex gap-1">
                                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                                </div>
                                <h4 className="text-3xl font-black italic">The Presidential Suite</h4>
                                <p className="text-slate-200 font-medium">Redefining clinical comfort for our most discerning patients.</p>
                            </div>
                            {/* Animated ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-2 border-purple-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* TESTIMONIAL / TRUST STRIP */}
            <section className="bg-slate-950 py-24 border-y border-white/5 overflow-hidden">
                <div className="flex flex-nowrap gap-20 animate-marquee items-center opacity-30 select-none">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="flex gap-12 items-center shrink-0">
                            <span className="text-5xl font-black italic tracking-tighter text-white">ELITE COMFORT</span>
                            <Sparkles className="w-12 h-12 text-purple-500" />
                            <span className="text-5xl font-black italic tracking-tighter text-white">CLINICAL PRECISION</span>
                            <Star className="w-12 h-12 text-purple-500" />
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
        </main>
    );
}
