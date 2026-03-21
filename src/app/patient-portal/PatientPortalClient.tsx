"use client";

import { User, FileText, Calendar, ArrowRight, Shield, Lock, Sparkles, Key, Wallet } from "lucide-react";
import Link from "next/link";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { motion } from "framer-motion";

export default function PatientPortalClient() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 selection:bg-fuchsia-200 selection:text-fuchsia-900">
            {/* ELITE CINEMATIC HERO */}
            <section className="relative pt-48 pb-40 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[4rem] sm:rounded-b-[6rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
                
                {/* Ambient Glows */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] will-change-transform transform-gpu opacity-50 animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] will-change-transform transform-gpu opacity-30" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_40px_-5px_rgba(232,121,249,0.3)]">
                            <Lock className="w-4 h-4" /> Secure Patient Access
                        </div>
                        <h1 className="elite-hero-title text-white mb-8">
                            Your Health, <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-white to-indigo-400">Under Your Control.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-4">
                            Securely manage your medical journey—from lab results to specialist appointments—all in one encrypted environment.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-24 sm:-mt-32 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* LOGIN CARD - ELITE DESIGN */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 bg-white/80 dark:bg-slate-900/90 backdrop-blur-2xl rounded-[3.5rem] p-10 md:p-14 shadow-2xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden"
                    >
                        {/* Interactive Shine Effect */}
                        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-fuchsia-500 opacity-80" />
                        
                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-16 h-16 rounded-[1.5rem] bg-fuchsia-50 dark:bg-fuchsia-950/30 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-100 dark:border-fuchsia-900/50">
                                <User className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Portal Sign In</h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Authentication Required</p>
                            </div>
                        </div>

                        <form className="space-y-8">
                            <div className="space-y-3">
                                <label htmlFor="patient-id" className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">UHID / Patient Email</label>
                                <div className="relative group/input">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-fuchsia-500 transition-colors">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        id="patient-id"
                                        placeholder="Enter UHID (e.g., IH-123456)"
                                        className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-fuchsia-500/10 focus:border-fuchsia-500 transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <label htmlFor="password" className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Secret Password</label>
                                    <Link href="#" className="text-xs font-black text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 uppercase tracking-widest">Forgot?</Link>
                                </div>
                                <div className="relative group/input">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-fuchsia-500 transition-colors">
                                        <Key className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-fuchsia-500/10 focus:border-fuchsia-500 transition-all text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            <button type="button" className="group/btn relative w-full py-6 mt-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-900/20 dark:shadow-white/5 flex items-center justify-center gap-3 text-lg overflow-hidden">
                                <span className="relative z-10">Access Dashboard</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-fuchsia-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                            </button>
                        </form>

                        <div className="mt-12 text-center space-y-6">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                                First time here? <Link href="#" className="font-black text-fuchsia-600 dark:text-fuchsia-400 hover:underline">Register New UHID</Link>
                            </p>
                            
                            <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                                <Link href="/pay-bill" className="inline-flex items-center gap-3 group text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-fuchsia-50 dark:group-hover:bg-fuchsia-900/30 transition-colors">
                                        <Wallet className="w-5 h-5" />
                                    </div>
                                    Quick Bill Payment
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* FEATURES / TRUST COLUMN */}
                    <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-8">
                        {[
                            { 
                                icon: <FileText className="w-7 h-7" />, 
                                color: "text-fuchsia-600 bg-fuchsia-50 dark:bg-fuchsia-950/40 border-fuchsia-100 dark:border-fuchsia-900/40", 
                                title: "Digital Health Records", 
                                desc: "No more carrying physical files. Download your complete health history, verified lab reports, and imaging directly from our secure cloud." 
                            },
                            { 
                                icon: <Calendar className="w-7 h-7" />, 
                                color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/40", 
                                title: "Priority Appointments", 
                                desc: "Book or reschedule consultations across 40+ specialties. View doctor availability in real-time and secure your slot instantly." 
                            },
                            { 
                                icon: <Shield className="w-7 h-7" />, 
                                color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/40", 
                                title: "Military-Grade Security", 
                                desc: "We use HIPAA-compliant end-to-end encryption. Your medical data is strictly confidential and accessible only via biometric or 2FA login." 
                            },
                        ].map((f, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex gap-8 p-10 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-[3rem] border border-slate-100 dark:border-slate-800/50 hover:shadow-2xl hover:shadow-fuchsia-500/5 hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${f.color} border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                    {f.icon}
                                </div>
                                <div className="pt-2">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-fuchsia-600 transition-colors">{f.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 p-8 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] border border-white/10 relative overflow-hidden group/cta"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl" />
                            <div className="flex items-center gap-6 relative z-10 text-white">
                                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                                    <Sparkles className="w-8 h-8 text-fuchsia-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black tracking-tight">Need assistance with login?</h4>
                                    <p className="text-slate-400 text-sm">Call our 24/7 IT Help Desk for UHID verification.</p>
                                </div>
                                <Link href="/contact" className="ml-auto px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                                    Support
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="border-t border-slate-200 dark:border-slate-800 mt-32 pt-20">
                <InternalLinkGrid type="departments" title="Explore Our Specialties" subtitle="Advanced Care" limit={10} className="bg-white dark:bg-slate-950 rounded-[4rem] border" />
            </div>
        </main>
    );
}
