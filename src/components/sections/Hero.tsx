"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Search, Star, HeartPulse, Activity, Scissors, Eye, Bone, Heart, Zap, Stethoscope, Baby, Sparkles, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const popularTreatments = [
    { label: "Piles", icon: Zap, href: "/doctor/near-me/treat/general-surgery/laser-piles-treatment-cost" },
    { label: "Fistula", icon: Scissors, href: "/doctor/near-me/treat/general-surgery/fistula-surgery-treatment" },
    { label: "Kidney Stones", icon: Heart, href: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
    { label: "Hernia", icon: Stethoscope, href: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair" },
    { label: "Gallstone", icon: Activity, href: "/doctor/near-me/treat/general-surgery/gallbladder-removal-recovery" },
    { label: "Knee Replace", icon: Bone, href: "/doctor/near-me/treat/orthopaedics/total-knee-replacement-cost" },
    { label: "Cataract", icon: Eye, href: "/doctor/near-me/treat/ophthalmology" },
    { label: "Gynaecology", icon: Baby, href: "/doctor/near-me/treat/obstetrics-gynaecology" },
];

export function Hero() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <section className="relative pt-44 pb-32 lg:pt-56 lg:pb-48 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
            {/* ELITE CINEMATIC BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[120px] opacity-70 pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Left Typography Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-teal-500/30"
                        >
                            <span className="flex h-2.5 w-2.5 rounded-full bg-teal-400 animate-pulse" />
                            Best Hospital in Tamil Nadu & India
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white leading-[1.05] tracking-tight mb-8"
                        >
                            Clinical Mastery. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                                India&apos;s Pride.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-xl font-light"
                        >
                            Indira Super Speciality Hospital: #1 for Proctology, Laparoscopy & Super-Speciality surgical precision.
                            Serving patients globally from our Vellore center of excellence.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-5 mb-16"
                        >
                            <Link
                                href="/book-appointment"
                                className="group/btn relative px-10 py-5 bg-teal-500 hover:bg-teal-400 text-slate-900 rounded-2xl font-black text-xl transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 overflow-hidden hover:scale-[1.02]"
                            >
                                <span className="relative z-10">Book Visit Now</span>
                                <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </Link>
                            <a
                                href={`tel:${siteConfig.contact.emergencyPhone}`}
                                className="px-10 py-5 bg-white/5 backdrop-blur-md text-white rounded-2xl font-black text-xl border border-white/10 transition-all hover:bg-white/10 flex items-center justify-center gap-3"
                            >
                                <Phone className="w-6 h-6 text-rose-400" /> 24/7 Emergency
                            </a>
                        </motion.div>

                        {/* Glassmorphic Tactical Search */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="bg-white/5 backdrop-blur-2xl p-3 rounded-[2.5rem] border border-white/10 flex items-center max-w-2xl relative z-20 group focus-within:border-teal-500/50 transition-all shadow-2xl"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ml-1 flex-shrink-0 group-focus-within:bg-teal-500 transition-colors">
                                <Search className="w-6 h-6 text-teal-400 group-focus-within:text-white transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by speciality or doctor name..."
                                className="w-full bg-transparent border-none outline-none px-6 text-white placeholder:text-slate-400 font-light text-xl"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <Link
                                    href={`/doctors?q=${searchTerm}`}
                                    className="bg-teal-500 text-slate-900 px-8 py-4 rounded-2xl font-black shadow-lg hover:bg-teal-400 transition-all ml-2 flex-shrink-0"
                                >
                                    Find Now
                                </Link>
                            )}
                        </motion.div>
                    </div>

                    {/* Right Bento Cinematic Gallery */}
                    <div className="lg:col-span-5 relative h-[650px] hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="absolute top-0 right-0 w-full h-[550px] rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 z-10 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10" />
                            <Image
                                src="https://images.unsplash.com/photo-1551076805-e18690c5e531?q=80&w=2834&auto=format&fit=crop"
                                alt="Modern Hospital Facility"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                            />

                            <div className="absolute bottom-10 left-10 z-20">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-500/30 text-teal-300 text-xs font-bold tracking-widest uppercase mb-4">
                                    <Monitor className="w-3.5 h-3.5" /> High-Tech OTs
                                </span>
                                <h3 className="text-3xl font-black text-white">Smart Infrastructure</h3>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="absolute -bottom-10 left-0 bg-white/10 backdrop-blur-3xl p-8 rounded-[3rem] border border-white/20 z-20 max-w-[320px] shadow-2xl shadow-black/20"
                        >
                            <div className="flex items-center gap-5 mb-2">
                                <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                                    <Star className="w-7 h-7 text-white fill-white" />
                                </div>
                                <div>
                                    <h4 className="font-black text-white text-2xl tracking-tight">4.9/5 Rating</h4>
                                    <p className="text-teal-400 font-bold text-sm tracking-widest uppercase">From 2k+ Patients</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                            className="absolute top-24 -left-12 bg-white/10 backdrop-blur-3xl p-6 rounded-[2.5rem] border border-white/20 z-20 flex items-center gap-4 shadow-2xl"
                        >
                            <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-500/20">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Clinical Excellence</h4>
                                <p className="text-rose-400 font-black text-lg">24/7 Trauma Care</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Glassmorphic Popular Treatment Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="mt-24 sm:mt-32"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-white/10 flex-grow" />
                        <p className="text-xs font-black text-teal-400 uppercase tracking-[0.3em] whitespace-nowrap">Rapid Access Treatments</p>
                        <div className="h-px bg-white/10 flex-grow" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {popularTreatments.map((t, i) => (
                            <Link
                                key={t.label}
                                href={t.href}
                                className="group relative flex flex-col items-center gap-4 p-6 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-teal-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-16 h-16 rounded-2xl bg-white/5 group-hover:bg-teal-500 flex items-center justify-center transition-all duration-500 shadow-xl group-hover:shadow-teal-500/20">
                                    <t.icon className="w-7 h-7 text-teal-400 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors text-center">
                                    {t.label}
                                </span>

                                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-20 group-hover:translate-x-0 translate-x-4 transition-all">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
