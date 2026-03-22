"use client";

import { Users, Target, Clock, Award, Building, ArrowRight, Sparkles, Star, Shield, Heart, Wallet, Milestone, Zap } from "lucide-react"
import { HeartCardiogram } from "healthicons-react/outline";
import Link from "next/link"
import { SectionHeader } from "@/components/ui/section-header";
import { Testimonials } from "@/components/sections/testimonials";
import { motion } from "framer-motion";
import { cn, getImageUrl } from "@/lib/utils";
import { injectInternalLinks } from "@/lib/html-linkify";

export default function AboutClient() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* ELITE CINEMATIC HERO */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[4rem] sm:rounded-b-[6rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
                
                {/* Ambient Glows */}
                <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-fuchsia-500/20 rounded-full blur-[120px] will-change-transform transform-gpu opacity-70 animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] will-change-transform transform-gpu opacity-50" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="elite-tag mb-10">
                            <Milestone className="w-4 h-4" /> The Legacy Since 1988
                        </div>
                        <h1 className="elite-hero-title mb-10 relative">
                            35 Years of <br className="hidden sm:block" />
                            <span className="elite-gradient-text">Clinical Mastery.</span>
                        </h1>
                        <p 
                            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed mb-4"
                            dangerouslySetInnerHTML={{ __html: injectInternalLinks("Indira Super Speciality Hospital is Vellore's premier destination for advanced medical interventions, where ethical practice meets world-class surgical precision.") }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* CORE PILLARS BENTO */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 -mt-24 sm:-mt-32 mb-40">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Mission Card - Elite */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/80 dark:bg-slate-900/90 backdrop-blur-3xl p-14 lg:p-20 rounded-[4rem] border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                    >
                        <div className="absolute inset-x-0 top-0 h-1.5 bg-fuchsia-500" />
                        <div className="w-24 h-24 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-[2rem] flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 border border-fuchsia-100 dark:border-fuchsia-900/50">
                            <Target className="w-12 h-12 text-fuchsia-600" />
                        </div>
                        <h2 className="elite-section-title mb-8 text-slate-900 dark:text-white er uppercase italic">Our Mission</h2>
                        <p 
                            className="text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-light italic"
                            dangerouslySetInnerHTML={{ __html: injectInternalLinks('"To engineer a healthcare ecosystem where world-class technology and deep human empathy converge to deliver life-saving clinical outcomes."') }}
                        />
                    </motion.div>

                    {/* Vision Card - Dark Elite */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-slate-900 p-14 lg:p-20 rounded-[4rem] border border-white/5 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                    >
                        <div className="absolute inset-x-0 top-0 h-1.5 bg-indigo-500" />
                        <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-[2rem] flex items-center justify-center mb-10 border border-white/10 text-indigo-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                            <Zap className="w-12 h-12" />
                        </div>
                        <h2 className="elite-section-title mb-8 text-white er uppercase italic">Our Vision</h2>
                        <p 
                            className="text-2xl text-slate-300 leading-relaxed font-extralight italic"
                            dangerouslySetInnerHTML={{ __html: injectInternalLinks('"To be the globally recognized vanguard of medical excellence in South India, setting the gold standard for tertiary healthcare innovation."') }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* IMPACT STATS BIN */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-40">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Clock, value: "35+", label: "Elite Success Years", color: "text-fuchsia-500", bg: "bg-fuchsia-50 dark:bg-fuchsia-950/40" },
                        { icon: HeartCardiogram, value: "1M+", label: "Lives Impacted", color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950/40" },
                        { icon: Award, value: "40+", label: "Clinical Specialties", color: "text-fuchsia-500", bg: "bg-fuchsia-50 dark:bg-fuchsia-950/40" },
                        { icon: Building, value: "3", label: "Regional Campuses", color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950/40" },
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-[3rem] p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xl hover:-translate-y-2 transition-all duration-500 group"
                        >
                            <div className={cn("w-20 h-20 rounded-[1.5rem] mx-auto mb-8 flex items-center justify-center border border-transparent group-hover:border-fuchsia-500/20 group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-500", stat.bg)}>
                                <stat.icon className={cn("w-10 h-10", stat.color)} />
                            </div>
                            <p className="text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter uppercase italic">{stat.value}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] leading-none">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* LEADERSHIP SHOWCASE - PREMIUM REDESIGN */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-40">
                <div className="text-center max-w-4xl mx-auto mb-24 relative">
                    <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-[0.4em] uppercase mb-8 shadow-2xl border border-white/10">
                        <Shield className="w-4 h-4 text-fuchsia-400" /> Guardians of Care
                    </span>
                    <h2 className="elite-section-title md:mb-8 text-slate-900 dark:text-white er uppercase italic">
                        The Visionaries Behind <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-500">Clinical Stewardship.</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-2xl leading-relaxed max-w-3xl mx-auto italic font-serif">
                        Expert leadership committed to uncompromising ethics and the pursuit of healthcare perfection.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { name: "Dr. C. Paskal", role: "Chairman & Managing Director", desc: "Orchestrating the evolution of Indira Hospital into a regional powerhouse of clinical excellence since inception.", icon: "CP" },
                        { name: "Dr. P. Indira", role: "Medical Director", desc: "Setting the stringent quality benchmarks that define our reputation for surgical precision and patient safety.", icon: "PI" },
                        { name: "Mr. Jackson P John", role: "Chief Operating Officer", desc: "Leading the hospital's digital frontier and operational modernization with a focus on seamless patient journeys.", icon: "JJ" }
                    ].map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-14 rounded-[4rem] border border-slate-200 dark:border-slate-800 text-center shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 group overflow-hidden flex flex-col items-center"
                        >
                            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-fuchsia-500 to-indigo-500 opacity-80" />
                            
                            <div className="relative w-44 h-44 mx-auto mb-12">
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-indigo-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="relative w-full h-full bg-slate-900 rounded-[3rem] flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-2xl group-hover:scale-110 transition-transform duration-700 z-10">
                                    <span className="text-white font-black text-6xl tracking-tighter italic">{member.icon}</span>
                                </div>
                            </div>

                            <h3 className="elite-section-title text-slate-900 dark:text-white mb-3 er uppercase italic">{member.name}</h3>
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                                {member.role}
                            </div>
                            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light italic flex-grow">{member.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Testimonials />

            {/* MASSIVE ELITE CTA */}
            <section className="px-6 lg:px-8 max-w-7xl mx-auto my-32">
                <div className="relative bg-slate-900 rounded-[5rem] p-16 sm:p-28 overflow-hidden group/cta flex flex-col items-center text-center">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1e_1px,transparent_1px)] bg-[size:32px_32px]" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] opacity-50" />
                    
                    <div className="relative z-10 w-full max-w-5xl">
                        <div className="w-24 h-24 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-fuchsia-400 mx-auto mb-12 shadow-2xl">
                            <Heart className="w-12 h-12" />
                        </div>
                        <h2 className="elite-hero-title text-white mb-10">
                            Experience the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Elite Standard.</span>
                        </h2>
                        <p className="text-xl md:text-3xl text-slate-300 font-light mb-16 leading-relaxed max-w-3xl mx-auto italic">
                            Combining three decades of clinical mastery with a relentless drive for innovation. Your health journey redefined.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                            <Link
                                href="/doctors"
                                className="group/btn relative w-full sm:w-auto px-16 py-8 bg-white text-slate-900 font-black rounded-[2rem] transition-all duration-500 hover:scale-[1.05] shadow-2xl overflow-hidden text-center"
                            >
                                <span className="relative z-10 text-xl uppercase tracking-widest italic">Find Your Specialist</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-100 via-white to-indigo-100 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                            </Link>

                            <Link
                                href="/contact"
                                className="group/call w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white font-black rounded-[2rem] backdrop-blur-3xl border border-white/10 hover:border-white/20 transition-all text-xl uppercase tracking-widest italic"
                            >
                                Contact Admin
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
