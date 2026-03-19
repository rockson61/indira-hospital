"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    Heart, Globe, Wallet, ClipboardList, Shield, 
    Building, Plane, MessageCircle, FileBox, 
    Compass, Clock, HelpCircle, Sparkles, ArrowRight,
    MapPin, Phone
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { PATIENT_RESOURCES } from "@/lib/data/patient-resources";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
} as const;

export function PatientsHubClient() {
    const categories = [
        { 
            id: "Information", 
            title: "Patient Essentials", 
            icon: ClipboardList, 
            gradient: "from-fuchsia-500 to-indigo-500",
            description: "Information you need to know before your visit and admission."
        },
        { 
            id: "Travel", 
            title: "Travel & Logistics", 
            icon: Plane, 
            gradient: "from-blue-500 to-cyan-500",
            description: "No matter where you're coming from, we help you get here safely."
        },
        { 
            id: "Billing", 
            title: "Billing & Insurance", 
            icon: Wallet, 
            gradient: "from-emerald-500 to-teal-500",
            description: "Financial assistance, insurance support, and online payments."
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-950">
            {/* CINEMATIC HERO */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-48 overflow-hidden bg-slate-900 rounded-b-[4rem] sm:rounded-b-[6rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
                
                {/* Ambient Glows */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] will-change-transform transform-gpu opacity-40 animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] will-change-transform transform-gpu opacity-30" />

                <SectionContainer className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_40px_-5px_rgba(232,121,249,0.3)]">
                            <Sparkles className="w-4 h-4" /> Patient Experience Hub
                        </span>
                        
                        <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-black text-white tracking-tighter leading-[0.9] mb-8">
                            Your Care <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-white to-indigo-400">Journey Redefined.</span>
                        </h1>
                        
                        <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                            From international travel to seamless insurance processing, discover all the tools and resources dedicated to your comfort and healing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link 
                                href="/book-appointment" 
                                className="group flex items-center justify-center px-10 py-5 bg-fuchsia-600 text-white font-black rounded-2xl hover:bg-fuchsia-500 transition-all shadow-xl shadow-fuchsia-500/20 text-lg"
                            >
                                Book Appointment
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a 
                                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                                className="flex items-center justify-center px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg"
                            >
                                Contact Help Desk
                            </a>
                        </div>
                    </motion.div>
                </SectionContainer>
            </section>

            {/* BENTO GRID RESOURCES */}
            <SectionContainer className="py-24 -mt-16 relative z-20">
                <motion.div 
                    className="grid gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {categories.map((cat) => (
                        <div key={cat.id} className="space-y-8">
                            <div className="flex items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
                                <div>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r ${cat.gradient} text-white text-xs font-black uppercase tracking-widest mb-3`}>
                                        <cat.icon className="w-3.5 h-3.5" /> {cat.id}
                                    </div>
                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{cat.title}</h2>
                                    <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">{cat.description}</p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {PATIENT_RESOURCES.filter(r => r.category === cat.id).map((resource) => (
                                    <motion.div 
                                        key={resource.id}
                                        variants={itemVariants}
                                        whileHover={{ y: -5 }}
                                        className="group relative bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-500 flex flex-col"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
                                        
                                        <div className="relative z-10">
                                            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-fuchsia-50 dark:group-hover:bg-fuchsia-900/30 group-hover:text-fuchsia-600 transition-all duration-500 border border-slate-100 dark:border-slate-700">
                                                <resource.icon className="w-7 h-7" />
                                            </div>
                                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-300 transition-colors">
                                                {resource.title}
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                                                {resource.short_description}
                                            </p>
                                            
                                            <Link 
                                                href={resource.customHref || `/patients/${resource.slug}`}
                                                className="mt-auto inline-flex items-center text-sm font-black text-fuchsia-600 hover:text-fuchsia-700 transition-colors uppercase tracking-widest"
                                            >
                                                Explore Guide
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </SectionContainer>

            {/* QUICK UTILITY BAR */}
            <section className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 py-12">
                <SectionContainer>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {[
                            { icon: MapPin, text: "Campus Map", href: "/patients/visiting-our-main-campus" },
                            { icon: Phone, text: "Emergency Contact", href: "/contact" },
                            { icon: HelpCircle, text: "Common Queries", href: "/faq" },
                            { icon: Wallet, text: "Pay Bill Online", href: "/pay-bill" }
                        ].map((item, i) => (
                            <Link key={i} href={item.href} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 font-bold transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <span>{item.text}</span>
                            </Link>
                        ))}
                    </div>
                </SectionContainer>
            </section>
        </div>
    );
}
