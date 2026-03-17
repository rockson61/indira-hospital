"use client";

import { SectionContainer } from "@/components/ui/section-container"
import { Users, Target, Clock, Award, Building, ArrowRight, Sparkles, Star, Shield, Heart } from "lucide-react"
import { HeartCardiogram } from "healthicons-react/outline";
import Link from "next/link"
import { Testimonials } from "@/components/sections/testimonials";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

export default function AboutClient() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* Bold Asymmetrical Deep Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                            <Award className="w-4 h-4" /> Established 1988
                        </span>
                        <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-white tracking-tight leading-[0.95] mb-6 max-w-6xl mx-auto">
                            The Best Hospital in <span className="text-white">Vellore, Tamil Nadu:</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">35 Years of Clinical Excellence in India.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-4">
                            Indira Super Speciality Hospital stands as a beacon of clinical mastery, delivering advanced, ethical, and compassionate healthcare to the Vellore community since 1988.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Floating Mission & Vision Bento */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 -mt-24 sm:-mt-32 mb-32">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/70 backdrop-blur-2xl p-12 lg:p-16 rounded-[4rem] border border-slate-200 dark:border-slate-700/50 shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                    >
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/10 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

                        <div className="w-24 h-24 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-[2rem] flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 group-hover:shadow-xl group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-700 border border-fuchsia-100">
                            <Target className="w-12 h-12 text-fuchsia-600 group-hover:text-white transition-colors" />
                        </div>
                        <h2 className="text-4xl font-black mb-6 text-slate-900 dark:text-white tracking-tight group-hover:text-fuchsia-700 transition-colors leading-tight">Our Mission</h2>
                        <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                            To deliver highly comprehensive, deeply compassionate, and cost-effective healthcare services that meet rigorous international standard. We guarantee maximum patient safety, rapid recovery, and uncompromising clinical satisfaction.
                        </p>
                    </motion.div>

                    {/* Vision Card (Dark Mode Variant) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-slate-900 p-12 lg:p-16 rounded-[4rem] border border-slate-800 shadow-2xl hover:shadow-pink-900/40 transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                    >
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-pink-500/10 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
                        <div className="absolute inset-0 rounded-[4rem] border-2 border-transparent group-hover:border-pink-400/20 transition-all duration-700 pointer-events-none" />

                        <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-slate-900 dark:text-white transition-all duration-700 border border-white/10 text-pink-400">
                            <Sparkles className="w-12 h-12" />
                        </div>
                        <h2 className="text-4xl font-black mb-6 text-white tracking-tight group-hover:text-pink-300 transition-colors leading-tight">Our Vision</h2>
                        <p className="text-xl text-slate-300 leading-relaxed font-light">
                            To be the unequivocally most trusted healthcare destination in Tamil Nadu, recognized comprehensively for clinical excellence, unimpeachable ethical practices, and an intensely patient-centric approach.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Premium Stats Bento Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Clock, value: "35+", label: "Years of Service", color: "text-fuchsia-500", bg: "bg-fuchsia-50 dark:bg-fuchsia-950" },
                        { icon: HeartCardiogram, value: "50K+", label: "Patients Treated", color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-950" },
                        { icon: Award, value: "15+", label: "Specialties", color: "text-blue-500", bg: "bg-blue-50" },
                        { icon: Building, value: "200+", label: "Hospital Beds", color: "text-amber-500", bg: "bg-amber-50" },
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 text-center border border-slate-100 dark:border-slate-700 shadow-xl hover:-translate-y-2 transition-all duration-500 group"
                        >
                            <div className={cn("w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3", stat.bg)}>
                                <stat.icon className={cn("w-8 h-8", stat.color)} />
                            </div>
                            <p className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">{stat.value}</p>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Premium Leadership Bento */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
                <div className="text-center max-w-4xl mx-auto mb-24 relative">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 border border-fuchsia-100 text-fuchsia-700 text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-sm dark:shadow-slate-900/30">
                        <Shield className="w-4 h-4" /> Stewardship
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 dark:text-white tracking-tight leading-tight">Elite Governance</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-xl leading-relaxed max-w-3xl mx-auto">
                        Guided unconditionally by visionaries dedicated to clinical mastery, ethical service, and technological expansion.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        { name: "Dr. C. Paskal", role: "Chairman & Managing Director", desc: "A visionary leader with over 40 years of experience orchestrating advanced healthcare administration.", icon: "CP" },
                        { name: "Dr. P. Indira", role: "Medical Director", desc: "Safeguarding the absolute highest standards of stringent clinical governance and medical ethics.", icon: "PI" },
                        { name: "Mr. P. John", role: "Chief Operating Officer", desc: "Commanding rigorous operational efficiency and spearheading digital transformation initiatives.", icon: "PJ" }
                    ].map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative bg-white/70 backdrop-blur-2xl p-12 lg:p-14 rounded-[3.5rem] border border-slate-200 dark:border-slate-700/50 text-center shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-700 group overflow-hidden flex flex-col items-center"
                        >
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/5 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

                            <div className="relative w-40 h-40 mx-auto mb-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-pink-300 rounded-full blur-[30px] opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="relative w-full h-full bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-[2.5rem] flex items-center justify-center border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-700 z-10">
                                    <span className="text-fuchsia-700 font-black text-5xl tracking-tighter">{member.icon}</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-fuchsia-700 transition-colors leading-tight">{member.name}</h3>
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 border border-fuchsia-100 text-[10px] font-black uppercase tracking-[0.2em] text-fuchsia-600 mb-8 shadow-sm group-hover:bg-fuchsia-500 group-hover:text-white transition-colors">
                                {member.role}
                            </div>
                            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium flex-grow">{member.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TRUST SIGNALS */}
            <section className="max-w-7xl mx-auto py-24 border-t border-slate-100 dark:border-slate-800">
                <div className="grid lg:grid-cols-2 gap-16 px-6 lg:px-8">
                    <EntityFAQs
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="about"
                        title="Common Questions about Indira"
                        description="Learn more about our legacy, clinical standards, and 35-year history in Vellore."
                    />
                    <EntityReviews
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="indira-hospital"
                        title="35 Years of Patient Stories"
                        description="Hear from some of the 50,000+ patients who have trusted us with their health."
                    />
                </div>
            </section>

            <Testimonials />

            {/* Massive Deep CTA Block */}
            <section className="px-6 lg:px-8 max-w-7xl mx-auto my-32">
                <div className="relative bg-gradient-to-br from-slate-900 via-fuchsia-950 to-pink-950 rounded-[4rem] p-16 sm:p-24 overflow-hidden shadow-2xl shadow-fuchsia-950/40 group/cta flex flex-col items-center text-center">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] group-hover/cta:bg-fuchsia-500/20 transition-colors duration-1000 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full hidden md:block blur-[100px] opacity-40" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

                    <div className="relative z-10 w-full max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 mb-10 shadow-2xl shadow-fuchsia-500/20"
                        >
                            <Heart className="w-10 h-10" />
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white mb-10 tracking-tight leading-[1] max-w-4xl mx-auto">
                            Your Journey to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Health Starts Here.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-fuchsia-100/70 font-light mb-16 leading-relaxed max-w-3xl mx-auto">
                            Experience a synthesis of world-class medical excellence and deeply compassionate care. Do not let pain hold you back. Let our elite specialists provide the precise, same-day treatment you deserve.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                            <Link
                                href="/doctors"
                                className="group/btn relative flex items-center justify-between w-full sm:w-auto px-12 py-7 bg-fuchsia-500 text-slate-900 dark:text-white font-black rounded-2xl transition-all duration-500 hover:scale-[1.05] shadow-2xl shadow-fuchsia-500/30 overflow-hidden"
                            >
                                <span className="relative z-10 text-lg uppercase tracking-[0.2em] pr-8">Find a Specialist</span>
                                <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </Link>

                            <Link
                                href="/contact"
                                className="group/call relative flex items-center justify-center w-full sm:w-auto px-12 py-7 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl backdrop-blur-3xl border border-white/10 hover:border-white/20 transition-all duration-500"
                            >
                                <span className="text-lg uppercase tracking-[0.2em]">Contact Admin</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
