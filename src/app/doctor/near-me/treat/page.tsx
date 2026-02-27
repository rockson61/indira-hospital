"use client";

import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/entities/ServiceCard";
import { getDepartments } from "@/lib/api";
import { Activity, ShieldCheck, HeartPulse, Stethoscope, Clock, ShieldPlus, ArrowRight, PhoneCall, Sparkles, Star, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        getDepartments().then(deps => {
            const mapped = deps.map((d: any) => ({
                ...d,
                title: d.name,
                short_description: d.description,
            }));
            setServices(mapped);
        }).catch(() => []);
    }, []);

    const whyChooseUsFeatures = [
        {
            title: "Advanced Technology",
            desc: "State-of-the-art equipment and minimally invasive surgical techniques for superior outcomes.",
            icon: Activity,
            colSpan: "sm:col-span-2 lg:col-span-2",
        },
        {
            title: "Experienced Specialists",
            desc: "Board-certified doctors with decades of combined experience.",
            icon: Stethoscope,
            colSpan: "sm:col-span-1 lg:col-span-1",
            highlighted: true,
        },
        {
            title: "Patient-First Approach",
            desc: "Personalized care plans, counseling, and dedicated follow-up for every patient.",
            icon: HeartPulse,
            colSpan: "sm:col-span-1 lg:col-span-1",
        },
        {
            title: "24/7 Emergency",
            desc: "Round-the-clock emergency department and ICU staffed by critical care experts.",
            icon: Clock,
            colSpan: "sm:col-span-2 lg:col-span-2",
        },
        {
            title: "Insurance Partners",
            desc: "Empaneled with major insurance providers for cashless options.",
            icon: ShieldPlus,
            colSpan: "sm:col-span-1 lg:col-span-1",
        },
        {
            title: "Affordable Care",
            desc: "Quality healthcare at transparent, highly competitive pricing globally.",
            icon: ShieldCheck,
            colSpan: "sm:col-span-2 lg:col-span-2",
            highlighted: true,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* Bold Asymmetrical Deep Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                            <Sparkles className="w-4 h-4" /> Comprehensive Mastery
                        </span>
                        <h1 className="text-6xl sm:text-8xl lg:text-[7rem] font-black text-white tracking-tight leading-[0.95] mb-8">
                            Absolute <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">
                                Proficiency.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-12">
                            From advanced robotic surgery to elite critical care, we provide the full spectrum of world-class medical excellence.
                        </p>
                    </motion.div>

                    {/* Floating Glassmorphic Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-1 w-full grid grid-cols-2 gap-6 relative"
                    >
                        <div className="absolute inset-0 bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/15 transition-all duration-500 group">
                            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-300 mb-4 group-hover:scale-110 transition-transform">
                                <Activity className="w-6 h-6" />
                            </div>
                            <p className="text-5xl font-black text-white mb-2">{services.length || 15}+</p>
                            <p className="text-xs font-black text-fuchsia-400 uppercase tracking-widest">Specialties</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl mt-12 hover:bg-white/15 transition-all duration-500 group">
                            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-300 mb-4 group-hover:scale-110 transition-transform">
                                <Shield className="w-6 h-6" />
                            </div>
                            <p className="text-5xl font-black text-white mb-2">5K+</p>
                            <p className="text-xs font-black text-pink-400 uppercase tracking-widest">Surgeries/Yr</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/15 transition-all duration-500 group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-110 transition-transform">
                                <Star className="w-6 h-6" />
                            </div>
                            <p className="text-5xl font-black text-white mb-2">98%</p>
                            <p className="text-xs font-black text-blue-400 uppercase tracking-widest">Success Rate</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl mt-12 hover:bg-white/15 transition-all duration-500 group">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300 mb-4 group-hover:scale-110 transition-transform">
                                <HeartPulse className="w-6 h-6" />
                            </div>
                            <p className="text-5xl font-black text-white mb-2">24/7</p>
                            <p className="text-xs font-black text-amber-400 uppercase tracking-widest">Rapid Response</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid Makeover */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-20 -mt-16">
                <div className="bg-white rounded-[4rem] p-12 lg:p-24 border border-slate-100 shadow-2xl">
                    <SectionHeader
                        title="Specialized Mastery"
                        subtitle="Clinical Excellence"
                        description="Each department is led by elite specialists and equipped with advanced diagnostic and surgical technology to ensure precision care."
                    />

                    <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service: any, idx) => (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="h-full"
                            >
                                <ServiceCard service={service} variant="poster" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Asymmetrical Bento 'Why Choose Us' */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <SectionHeader
                        title="The Indira Standard"
                        subtitle="Elite Healthcare"
                        description="Experience a synthesis of immense clinical expertise and hyper-advanced infrastructure."
                    />

                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {whyChooseUsFeatures.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`${item.colSpan} relative group overflow-hidden rounded-[3rem] p-10 border ${item.highlighted ? 'bg-slate-900 border-slate-800 shadow-2xl shadow-fuchsia-900/20' : 'bg-white border-slate-100'} hover:border-fuchsia-200 transition-all duration-700 hover:-translate-y-2`}
                                >
                                    {item.highlighted && (
                                        <>
                                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px] group-hover:bg-fuchsia-500/20 transition-colors duration-1000" />
                                            <div className="absolute inset-0 rounded-[3rem] border-2 border-transparent group-hover:border-fuchsia-500/20 transition-all duration-700 pointer-events-none" />
                                        </>
                                    )}
                                    <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 ${item.highlighted ? 'bg-white/10 text-fuchsia-300 backdrop-blur-xl border border-white/10' : 'bg-fuchsia-50 text-fuchsia-600 shadow-sm border border-fuchsia-100'}`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className={`text-2xl font-black mb-4 tracking-tight ${item.highlighted ? 'text-white' : 'text-slate-900'}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-lg leading-relaxed font-medium ${item.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                                        {item.desc}
                                    </p>

                                    {/* Subtle Corner Light */}
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent via-fuchsia-500/0 to-fuchsia-500/5 group-hover:to-fuchsia-500/10 transition-all duration-700" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Massive Deep CTA Block */}
            <section className="px-6 lg:px-8 max-w-7xl mx-auto my-32">
                <div className="relative bg-gradient-to-br from-slate-900 via-fuchsia-950 to-pink-950 rounded-[4rem] p-16 sm:p-24 overflow-hidden shadow-2xl shadow-fuchsia-950/40 group/cta flex flex-col items-center text-center">
                    {/* Ambient Background Lights */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px] group-hover/cta:bg-fuchsia-500/20 transition-colors duration-1000 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] opacity-40" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

                    <div className="relative z-10 w-full max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 mb-10 shadow-2xl shadow-fuchsia-500/20"
                        >
                            <PhoneCall className="w-10 h-10" />
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white mb-10 tracking-tight leading-[1] max-w-3xl mx-auto">
                            Immediate <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Certainty.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-fuchsia-100/70 font-light mb-16 leading-relaxed max-w-2xl mx-auto">
                            Our premier specialists are actively available. Access emergency response or book a clinical consultation now.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                            <Link
                                href="/book-appointment"
                                className="group/btn relative flex items-center justify-between w-full sm:w-auto px-12 py-7 bg-fuchsia-500 text-slate-900 font-black rounded-2xl transition-all duration-500 hover:scale-[1.05] shadow-2xl shadow-fuchsia-500/30 overflow-hidden"
                            >
                                <span className="relative z-10 text-lg uppercase tracking-[0.2em] pr-8">Book Specialist</span>
                                <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </Link>

                            <a
                                href="tel:+919809824425"
                                className="group/call relative flex items-center justify-center w-full sm:w-auto px-12 py-7 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl backdrop-blur-3xl border border-white/10 hover:border-white/20 transition-all duration-500"
                            >
                                <span className="text-lg uppercase tracking-[0.2em]">Emergency 24/7</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
