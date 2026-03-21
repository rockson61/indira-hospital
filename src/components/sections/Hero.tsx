"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Search, Star, Sparkles, Monitor, MessageCircle } from "lucide-react";
import { HeartCardiogram, GeneralSurgery, Orthopaedics, Heart, Electricity, Stethoscope, Baby0203m, Kidneys, Eye, Gynecology } from "healthicons-react/outline";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const popularTreatments = [
    { label: "Piles", icon: GeneralSurgery, href: "/doctor/near-me/treat/general-surgery/laser-piles-treatment-cost" },
    { label: "Fistula", icon: GeneralSurgery, href: "/doctor/near-me/treat/general-surgery/fistula-surgery-treatment" },
    { label: "Kidney Stones", icon: Kidneys, href: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
    { label: "Hernia", icon: GeneralSurgery, href: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair" },
    { label: "Gallstone", icon: GeneralSurgery, href: "/doctor/near-me/treat/general-surgery/gallbladder-removal-recovery" },
    { label: "Knee Replace", icon: Orthopaedics, href: "/doctor/near-me/treat/orthopaedics/total-knee-replacement-cost" },
    { label: "Cataract", icon: Eye, href: "/doctor/near-me/treat/ophthalmology" },
    { label: "Gynaecology", icon: Gynecology, href: "/doctor/near-me/treat/obstetrics-gynaecology" },
];

export function Hero() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <section className="relative pt-56 pb-32 lg:pt-64 lg:pb-56 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-fuchsia-50/30 dark:bg-none dark:bg-slate-950 rounded-b-[3rem] sm:rounded-b-[5rem]">
            {/* BACKGROUND — cinematic in dark, medical in light */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.06] dark:opacity-40" />
            
            {/* Elite Ambient Glows */}
            <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-fuchsia-600/10 dark:bg-fuchsia-500/20 rounded-full hidden md:block blur-[150px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-indigo-600/10 dark:bg-indigo-500/20 rounded-full hidden md:block blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-fuchsia-500/5 to-transparent blur-[100px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Left Typography Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="elite-tag mb-8 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                        >
                            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                            #1 Rated Super Speciality Hospital in Vellore
                        </motion.div>

                        <motion.h1
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="elite-hero-title text-slate-950 dark:text-white mb-10 animate-in fade-in slide-in-from-bottom-6 fill-mode-both"
                        >
                            Best Hospital <br />
                            <span className="elite-gradient-text drop-shadow-sm">
                                in Vellore.
                            </span>
                        </motion.h1>

                        <motion.div
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="mb-14 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                        >
                            <h2 className="elite-section-title text-slate-800 dark:text-slate-100 mb-6 opacity-90">
                                Advanced Multispeciality & Laparoscopic Care.
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-light italic">
                                Top-tier surgical expertise at half the metro cost. Walk in with pain. Walk out the same day. That&apos;s the <span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">Indira promise.</span>
                            </p>
                        </motion.div>

                        <motion.div
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-5 mb-16"
                        >
                            <Link
                                href="/book-appointment"
                                className="elite-button-primary hover:scale-[1.02] gap-3"
                            >
                                <span className="relative z-10">Get Free Cost Estimate</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </Link>
                            <a
                                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I want to book an appointment at Indira Super Speciality Hospital.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="elite-button-secondary bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-900/50 hover:bg-pink-100 dark:hover:bg-pink-900/30 gap-3"
                            >
                                <MessageCircle className="w-5 h-5 group-hover/whatsapp:scale-110 transition-transform" /> WhatsApp
                            </a>
                            <a
                                href={`tel:${siteConfig.contact.emergencyPhone}`}
                                className="elite-button-secondary gap-3"
                            >
                                <Phone className="w-5 h-5 text-fuchsia-400" /> Emergency: {siteConfig.contact.emergencyPhone}
                            </a>
                        </motion.div>

                        {/* Glassmorphic Tactical Search */}
                        <motion.div
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white/40 dark:bg-white/5 backdrop-blur-3xl p-4 rounded-[3rem] border border-fuchsia-500/10 dark:border-white/10 flex items-center max-w-2xl relative z-20 group focus-within:border-fuchsia-500/30 transition-all shadow-2xl dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] active:scale-[0.99]"
                        >
                            <div className="w-16 h-16 rounded-[1.5rem] bg-fuchsia-50 dark:bg-white/5 flex items-center justify-center ml-1 flex-shrink-0 group-focus-within:bg-fuchsia-600 transition-all duration-500 group-focus-within:scale-110">
                                <Search className="w-7 h-7 text-fuchsia-600 dark:text-fuchsia-400 group-focus-within:text-white transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by speciality or doctor name..."
                                className="w-full bg-transparent border-none outline-none px-6 text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium text-xl italic"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <Link
                                    href={`/doctors?q=${searchTerm}`}
                                    className="bg-fuchsia-600 dark:bg-fuchsia-500 text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:bg-fuchsia-500 dark:hover:bg-fuchsia-400 transition-all ml-2 flex-shrink-0"
                                >
                                    Find Now
                                </Link>
                            )}
                        </motion.div>
                    </div>

                    {/* Right Bento Cinematic Gallery */}
                    <div className="lg:col-span-5 relative h-[650px] hidden lg:block">
                        <motion.div
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-0 right-0 w-full h-[580px] rounded-[4.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-200/50 dark:border-white/10 z-10 group bg-slate-100 dark:bg-slate-800"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 z-10" />
                            <Image
                                src="/images/hospital/Hospital view 2.webp"
                                alt="Indira Super Speciality Hospital"
                                fill
                                className="object-cover transition-transform duration-[3s] group-hover:scale-110 group-hover:rotate-1"
                            />

                            <div className="absolute bottom-10 left-10 z-20">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-100 dark:bg-fuchsia-500/20 backdrop-blur-md border border-fuchsia-200 dark:border-fuchsia-500/30 text-fuchsia-700 dark:text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-4">
                                    <Monitor className="w-3.5 h-3.5" /> High-Tech Care
                                </span>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white">World-Class Infrastructure</h3>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="absolute -bottom-10 left-0 bg-white dark:bg-white/10 backdrop-blur-3xl p-8 rounded-[3rem] border border-slate-200 dark:border-white/20 z-20 max-w-[320px] shadow-xl dark:shadow-2xl dark:shadow-black/20"
                        >
                            <div className="flex items-center gap-5 mb-2">
                                <div className="w-14 h-14 bg-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
                                    <Star className="w-7 h-7 text-white fill-white" />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 dark:text-white text-2xl tracking-tight">4.9/5 Rating</h4>
                                    <p className="text-fuchsia-600 dark:text-fuchsia-400 font-bold text-sm tracking-widest uppercase">From 2k+ Patients</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                            className="absolute top-24 -left-12 bg-white dark:bg-white/10 backdrop-blur-3xl p-6 rounded-[2.5rem] border border-slate-200 dark:border-white/20 z-20 flex items-center gap-4 shadow-xl dark:shadow-2xl"
                        >
                            <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-500/20">
                                <HeartCardiogram className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">Clinical Excellence</h4>
                                <p className="text-rose-600 dark:text-rose-400 font-black text-lg">24/7 Trauma Care</p>
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
                        <div className="h-px bg-slate-200 dark:bg-white/10 flex-grow" />
                        <p className="text-xs font-black text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-[0.3em] whitespace-nowrap">Rapid Access Treatments</p>
                        <div className="h-px bg-slate-200 dark:bg-white/10 flex-grow" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {popularTreatments.map((t, i) => (
                            <Link
                                key={t.label}
                                href={t.href}
                                className="group relative flex flex-col items-center gap-4 p-6 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:bg-fuchsia-50 dark:hover:bg-white/10 hover:border-fuchsia-200 dark:hover:border-fuchsia-500/50 hover:shadow-xl dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-white/5 group-hover:bg-fuchsia-500 flex items-center justify-center transition-all duration-500 shadow-lg dark:shadow-xl group-hover:shadow-fuchsia-500/20">
                                    <t.icon className="w-7 h-7 text-fuchsia-500 dark:text-fuchsia-400 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center">
                                    {t.label}
                                </span>

                                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-20 group-hover:translate-x-0 translate-x-4 transition-all">
                                    <ArrowRight className="w-4 h-4 text-slate-900 dark:text-white" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
