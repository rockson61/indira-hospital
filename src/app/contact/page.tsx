"use client";

import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, HeartPulse, Sparkles, Send } from "lucide-react"
import { motion } from "framer-motion"
import { Metadata } from "next";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* Bold Asymmetrical Deep Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-rose-300 text-sm font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-rose-500/30">
                            <HeartPulse className="w-4 h-4 animate-pulse" /> Available 24/7
                        </span>
                        <h1 className="text-6xl sm:text-8xl lg:text-[7rem] font-black text-white tracking-tight leading-[0.95] mb-8 max-w-6xl mx-auto">
                            Command <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Accessibility.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-4">
                            Whether you require urgent emergency response or a clinical consultation, our elite team is structurally prepared to support you instantly.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Interactive Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 -mt-24 sm:-mt-32">
                <div className="grid lg:grid-cols-12 gap-10 items-start">

                    {/* Left Column: Contact Bento */}
                    <div className="lg:col-span-5 space-y-10">
                        {/* Primary Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/70 backdrop-blur-2xl p-10 lg:p-14 rounded-[4rem] border border-slate-200/50 shadow-2xl space-y-10 relative overflow-hidden group"
                        >
                            {/* Light Streak Animation */}
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/5 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

                            <h2 className="text-4xl font-black text-slate-900 tracking-tight lg:mb-12 relative z-10">Central Station</h2>

                            <div className="space-y-10 relative z-10">
                                {/* Address Block */}
                                <div className="flex gap-6 group/item">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover/item:bg-fuchsia-500 group-hover/item:text-white transition-all duration-500 shadow-sm group-hover/item:scale-110">
                                        <MapPin className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Address</h3>
                                        <p className="text-xl text-slate-600 leading-relaxed font-bold group-hover/item:text-fuchsia-700 transition-colors">
                                            No. 12, Gandhi Road,<br />
                                            Near New Bus Stand,<br />
                                            Vellore, Tamil Nadu - 632004
                                        </p>
                                    </div>
                                </div>

                                {/* Phone Block */}
                                <div className="flex gap-6 group/item cursor-pointer">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover/item:bg-rose-500 group-hover/item:text-white transition-all duration-500 shadow-sm relative group-hover/item:scale-110">
                                        <Phone className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Rapid Response</h3>
                                        <a href="tel:+9104162248888" className="block text-rose-600 font-black hover:text-rose-700 transition-colors text-2xl mb-2">+91 0416 224 8888</a>
                                        <a href="tel:+9104162223333" className="block text-slate-600 font-bold hover:text-fuchsia-600 transition-colors text-lg">+91 0416 222 3333 <span className="text-xs text-slate-400 uppercase tracking-widest ml-2">(Admin)</span></a>
                                    </div>
                                </div>

                                {/* Email Block */}
                                <div className="flex gap-6 group/item cursor-pointer">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-500 shadow-sm group-hover/item:scale-110">
                                        <Mail className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Digital Enquiry</h3>
                                        <a href="mailto:info@indirasuperspecialityhospital.com" className="text-xl text-slate-600 font-bold hover:text-blue-600 transition-colors break-all">info@indirahospital.com</a>
                                    </div>
                                </div>

                                {/* Timing Block */}
                                <div className="flex gap-6 group/item">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover/item:bg-pink-500 group-hover/item:text-white transition-all duration-500 shadow-sm group-hover/item:scale-110">
                                        <Clock className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Visiting Hours</h3>
                                        <div className="space-y-2">
                                            <p className="text-lg text-slate-600 font-bold"><span className="text-slate-400 font-black mr-3">AM:</span>10:00 - 12:00</p>
                                            <p className="text-lg text-slate-600 font-bold"><span className="text-slate-400 font-black mr-3">PM:</span>04:00 - 07:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Interactive Premium Map Embed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="h-[400px] bg-white rounded-[4rem] overflow-hidden border border-slate-200/50 shadow-2xl group relative"
                        >
                            <div className="absolute inset-0 border-[12px] border-white/50 rounded-[4rem] pointer-events-none z-10" />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0838965825227!2d79.1325!3d12.9184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzA2LjIiTiA3OcKwMDcnNTcuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'contrast(1.1) saturate(1.2) brightness(0.95)' }}
                                allowFullScreen
                                loading="lazy"
                                aria-label="Google Map of Indira Hospital Location"
                                className="transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            ></iframe>
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Tactical Command Enquiry Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 p-10 sm:p-16 rounded-[4rem] border border-slate-800 shadow-2xl relative overflow-hidden group"
                        >
                            {/* Light Streak Animation */}
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/10 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

                            <div className="relative z-10 mb-12">
                                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-fuchsia-300 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
                                    <ShieldCheck className="w-4 h-4" /> Secure Tactical Unit
                                </span>
                                <h2 className="text-5xl font-black text-white tracking-tight leading-tight">Elite Enquiry</h2>
                                <p className="text-slate-400 mt-4 text-lg font-medium">Fields with an asterisk are mandatory. Our specialized response time is &lt; 24 hours.</p>
                            </div>

                            <form className="space-y-10 relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">First Name <span className="text-rose-500">*</span></label>
                                        <Input placeholder="John" className="bg-white/5 border-slate-700/50 focus:bg-white/10 focus:border-fuchsia-500 focus:ring-4 focus:ring-fuchsia-500/10 h-16 rounded-[1.5rem] text-lg px-8 font-bold text-white transition-all outline-none" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Last Name <span className="text-rose-500">*</span></label>
                                        <Input placeholder="Doe" className="bg-white/5 border-slate-700/50 focus:bg-white/10 focus:border-fuchsia-500 focus:ring-4 focus:ring-fuchsia-500/10 h-16 rounded-[1.5rem] text-lg px-8 font-bold text-white transition-all outline-none" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Secure Email <span className="text-rose-500">*</span></label>
                                    <Input type="email" placeholder="john.doe@expert.com" className="bg-white/5 border-slate-700/50 focus:bg-white/10 focus:border-fuchsia-500 focus:ring-4 focus:ring-fuchsia-500/10 h-16 rounded-[1.5rem] text-lg px-8 font-bold text-white transition-all outline-none" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Tactical Number <span className="text-rose-500">*</span></label>
                                    <Input placeholder="+91 98765 00000" className="bg-white/5 border-slate-700/50 focus:bg-white/10 focus:border-fuchsia-500 focus:ring-4 focus:ring-fuchsia-500/10 h-16 rounded-[1.5rem] text-lg px-8 font-bold text-white transition-all outline-none" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Clinical Query/Message <span className="text-rose-500">*</span></label>
                                    <Textarea className="min-h-[200px] bg-white/5 border-slate-700/50 focus:bg-white/10 focus:border-fuchsia-500 focus:ring-4 focus:ring-fuchsia-500/10 rounded-[2rem] text-lg p-8 font-bold text-white transition-all outline-none resize-none" placeholder="Provide specific details about your clinical history or inquiry..." />
                                </div>

                                <button
                                    type="button"
                                    className="group/btn relative flex items-center justify-center w-full px-10 py-7 bg-fuchsia-500 text-slate-900 font-black rounded-3xl transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-fuchsia-500/30 overflow-hidden"
                                >
                                    <span className="relative z-10 text-xl uppercase tracking-[0.2em] pr-6">Initiate Secure Transmission</span>
                                    <Send className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                                </button>

                                <p className="text-center text-sm text-slate-500 font-medium">By transmitting this form, you precisely agree to our absolute <a href="/privacy-policy" className="text-fuchsia-400 hover:underline">Privacy Protocols</a> regarding data encryption.</p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    )
}
