import { SectionContainer } from "@/components/ui/section-container"
import { Clock, Truck, Phone, ArrowRight, BadgeCheck, Shield } from "lucide-react"
import { Pills2, Electricity, Stethoscope } from "healthicons-react/outline";
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: '24/7 Pharmacy in Vellore | Home Delivery — Indira Hospital',
    description: '100% genuine medicines available 24/7. Fast home delivery in Vellore, temperature-controlled storage, and expert pharmacist consultations.',
}

import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

export default function PharmacyPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-24">
            {/* Bold Asymmetrical Deep Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-sm font-bold tracking-widest uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-emerald-500/30">
                        <Clock className="w-4 h-4" /> Open 24/7 • 365 Days
                    </span>
                    <h1 className="elite-hero-title text-white mb-8 max-w-5xl mx-auto">
                        Genuine Care. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Always Open.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-16">
                        Access 100% authentic medications with temperature-controlled precision. Fast home delivery across Vellore when you need it most.
                    </p>

                    {/* Integrated Glassmorphic Hero Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative z-20">
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-emerald-500 transition-colors">
                                <BadgeCheck className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1 tabular-nums">100%</p>
                            <p className="text-xs font-black text-emerald-300 uppercase tracking-widest">Genuine</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500 transition-colors">
                                <Shield className="w-6 h-6 text-blue-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1">Cold</p>
                            <p className="text-xs font-black text-blue-300 uppercase tracking-widest">Storage Chain</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-teal-500 transition-colors">
                                <Truck className="w-6 h-6 text-teal-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1">&lt; 3h</p>
                            <p className="text-xs font-black text-teal-300 uppercase tracking-widest">Home Delivery</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group col-span-2 lg:col-span-1">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-amber-500 transition-colors">
                                <Electricity className="w-6 h-6 text-amber-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1">24/7</p>
                            <p className="text-xs font-black text-amber-300 uppercase tracking-widest">Availability</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <SectionContainer className="relative z-30 -mt-24 max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Prescription Medicines",
                            desc: "Complete stock of specialized and rare medicines across oncology, nephrology, and cardiology.",
                            icon: Pills2,
                            color: "text-rose-500",
                            bg: "bg-rose-50 dark:bg-rose-950",
                            border: "border-rose-100 dark:border-rose-900"
                        },
                        {
                            title: "Surgical & OTC Products",
                            desc: "Wide range of surgical disposables, life-saving drugs, and daily wellness supplements.",
                            icon: Stethoscope,
                            color: "text-blue-500",
                            bg: "bg-blue-50 dark:bg-blue-950",
                            border: "border-blue-100 dark:border-blue-900"
                        },
                        {
                            title: "Cold Chain Integrity",
                            desc: "Strict temperature control guidelines for vaccines, insulin, and sensitive injections.",
                            icon: Shield,
                            color: "text-emerald-500",
                            bg: "bg-emerald-50 dark:bg-emerald-950",
                            border: "border-emerald-100 dark:border-emerald-900"
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className={`bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border ${feature.border} shadow-xl hover:-translate-y-2 transition-transform duration-500 group`}>
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${feature.bg}`}>
                                <feature.icon className={`w-8 h-8 ${feature.color}`} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Order Flow */}
            <SectionContainer className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">How to Order Medicines</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">Send us your prescription directly on WhatsApp and get your medicines delivered securely.</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-8 relative">
                    <div className="hidden sm:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-emerald-100 via-emerald-300 to-emerald-100 dark:from-emerald-900 dark:to-emerald-900" />

                    {[
                        { step: "01", title: "Send Prescription", desc: "Snap a photo of your valid doctor's prescription." },
                        { step: "02", title: "WhatsApp Us", desc: "Share it on our dedicated pharmacy WhatsApp number." },
                        { step: "03", title: "Fast Delivery", desc: "We confirm the order and dispatch immediately." }
                    ].map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-emerald-50 dark:bg-emerald-950 border-8 border-white dark:border-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-black text-2xl mb-6 shadow-xl group-hover:scale-110 transition-transform">
                                {step.step}
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">{step.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionContainer>
            {/* TRUST SIGNALS */}
            <SectionContainer className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-slate-200 dark:border-slate-800">
                <div className="grid lg:grid-cols-2 gap-16">
                    <EntityFAQs
                        entityType="service"
                        entityName="Pharmacy"
                        entitySlug="pharmacy"
                        title="Pharmacy Service FAQs"
                        description="Common questions about home delivery, genuine medicines, and 24/7 availability."
                        className="bg-transparent border-none shadow-none p-0"
                    />
                    <EntityReviews
                        entityType="service"
                        entityName="Pharmacy"
                        entitySlug="pharmacy"
                        title="Patient Stories"
                        description="Experiences from patients who used our 24/7 pharmacy and delivery services."
                        className="bg-transparent border-none shadow-none p-0"
                    />
                </div>
            </SectionContainer>

            {/* CTA */}
            <SectionContainer className="px-4">
                <div className="relative bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 rounded-[4rem] p-12 sm:p-24 overflow-hidden shadow-2xl group/cta flex flex-col items-center text-center">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu group-hover/cta:bg-emerald-500/20 transition-colors duration-1000 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px] will-change-transform transform-gpu opacity-40" />

                    <div className="relative z-10 w-full max-w-4xl">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 mb-10 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                            <Phone className="w-10 h-10 text-emerald-300" />
                        </div>
                        <h2 className="text-5xl sm:text-7xl font-black text-white mb-10 tracking-tight leading-[1.05]">
                            Need Medicines <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Urgently?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-3xl mx-auto">
                            <a
                                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I would like to order medicines. Here is my prescription.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative flex items-center justify-center w-full sm:w-auto px-12 py-6 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-black rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-emerald-500/25 overflow-hidden text-xl"
                            >
                                <MessageCircle className="w-6 h-6 mr-3" />
                                <span className="relative z-10 uppercase tracking-wider">Order via WhatsApp</span>
                                <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
