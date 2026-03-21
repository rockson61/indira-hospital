"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/entities/ServiceCard";
import { getDepartments } from "@/lib/api";
import { Clock, ShieldPlus, ArrowRight, PhoneCall, Sparkles, Star, LayoutGrid, Shield } from "lucide-react";
import { HeartCardiogram, Stethoscope, Heart, Neurology, Orthopaedics, Baby0203m, Eye } from "healthicons-react/outline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SymptomGuide } from "@/components/healthcare/SymptomGuide";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { TreatmentGuides } from "@/components/sections/treatment-guides";

const bodySystems = [
    { name: "Heart & Circulation", icon: Heart, link: "/doctor/near-me/treat/cardiology" },
    { name: "Bones & Joints", icon: Orthopaedics, link: "/doctor/near-me/treat/orthopaedics" },
    { name: "Neurology & Nerves", icon: Neurology, link: "/doctor/near-me/treat/neurology" },
    { name: "Digestive System", icon: HeartCardiogram, link: "/doctor/near-me/treat/gastroenterology" },
    { name: "Women's Health", icon: Baby0203m, link: "/doctor/near-me/treat/obstetrics-gynaecology" },
    { name: "Eyes & Vision", icon: Eye, link: "/doctor/near-me/treat/ophthalmology" },
    { name: "Kidneys & Urinary Tract", icon: Shield, link: "/doctor/near-me/treat/urology" },
    { name: "Lungs & Breathing", icon: LayoutGrid, link: "/doctor/near-me/treat/general-medicine" },
];

const conditions = [
    { name: "Heart Attack", link: "/doctor/near-me/treat/cardiology/heart-attack-warning-signs" },
    { name: "Stroke", link: "/doctor/near-me/treat/neurology/stroke-recovery-exercises" },
    { name: "Kidney Stones", link: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
    { name: "Hernia", link: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair" },
    { name: "Piles (Hemorrhoids)", link: "/doctor/near-me/treat/general-surgery/laser-piles-treatment-cost" },
    { name: "Cataract", link: "/doctor/near-me/treat/ophthalmology" },
    { name: "Arthritis", link: "/doctor/near-me/treat/orthopaedics" },
    { name: "Diabetes", link: "/doctor/near-me/treat/nephrology/diabetic-kidney-disease-ckd" },
    { name: "Migraine", link: "/doctor/near-me/treat/neurology/migraine-relief-management" },
    { name: "Breast Cancer", link: "/doctor/near-me/treat/oncology/breast-cancer-screening-guide" },
    { name: "Gallstones", link: "/doctor/near-me/treat/general-surgery/gallbladder-removal-recovery" },
    { name: "Prostate Enlargement", link: "/doctor/near-me/treat/urology/enlarged-prostate-bph-treatment" },
];

export default function HealthLibraryClient() {
    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        getDepartments().then(deps => {
            const mapped = deps.map((d: any) => ({
                ...d,
                title: d.name || d.title,
                short_description: d.description || d.short_description,
            }));
            setServices(mapped);
        }).catch(() => []);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            <JsonLdSchema type="hospital" />

            {/* Health Library Deep Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0086d6]/20 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="animate-in fade-in zoom-in-95 duration-1000 ease-out fill-mode-both"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-[2rem] bg-[#0086d6]/20 backdrop-blur-md border border-[#0086d6]/30 text-[#0086d6]">
                            <LayoutGrid className="w-10 h-10" />
                        </div>
                        <h1 className="elite-hero-title text-white mb-6">
                            Departments & <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0086d6] to-cyan-300">
                                Specialities
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                            Explore world-class surgical procedures, decode your symptoms, and access comprehensive medical guides. Select a department below to begin.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mt-8">
                            {services.length > 0 ? (
                                services.map(dept => (
                                    <Link 
                                        key={dept.slug} 
                                        href={`/doctor/near-me/treat/${dept.slug}`}
                                        className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10 rounded-full text-white font-semibold transition-all hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                                    >
                                        {dept.title}
                                        <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-cyan-300 transition-all" />
                                    </Link>
                                ))
                            ) : (
                                <div className="text-slate-400 animate-pulse">Loading departments...</div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Library Navigation Sticky Bar */}
            <div className="sticky top-20 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
                    <div className="flex items-center gap-8 py-4 min-w-max">
                        <a href="#symptoms" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-[#0086d6] dark:hover:text-[#0086d6] transition-colors">Symptoms Guide</a>
                        <a href="#body-systems" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-[#0086d6] dark:hover:text-[#0086d6] transition-colors">Body Systems</a>
                        <a href="#treatments" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-[#0086d6] dark:hover:text-[#0086d6] transition-colors">Treatments</a>
                        <a href="#conditions" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-[#0086d6] dark:hover:text-[#0086d6] transition-colors">Diseases & Conditions</a>
                        <a href="#guides" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-[#0086d6] dark:hover:text-[#0086d6] transition-colors">Treatment Guides</a>
                        <a href="#pharmacy" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-[#0086d6] dark:hover:text-[#0086d6] transition-colors">Pharmacy</a>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-32 pt-20">

                {/* Integrating Care Guide / Symptoms Guide */}
                <section id="symptoms" className="max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-32">
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] p-8 lg:p-16 border border-slate-100 dark:border-slate-800 shadow-inner">
                        <SectionHeader
                            title="Interactive Symptom Guide"
                            subtitle="Choose the Right Care"
                            description="Use this tool to evaluate your symptoms and decide whether you need a routine checkup, urgent care, or emergency action."
                            align="center"
                        />
                        <div className="mt-12">
                            <SymptomGuide />
                        </div>
                    </div>
                </section>

                {/* Body Systems */}
                <section id="body-systems" className="max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-32">
                    <SectionHeader
                        title="Body Systems & Organs"
                        subtitle="Understand Your Body"
                        description="Learn about the different systems that keep your body functioning and the specialized departments that care for them."
                        align="left"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
                        {bodySystems.map(sys => (
                            <Link key={sys.name} href={sys.link} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 flex flex-col items-center text-center hover:shadow-xl hover:border-[#0086d6] transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-[#0086d6]/10 text-[#0086d6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <sys.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-[#0086d6] transition-colors">{sys.name}</h3>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Treatments */}
                <section id="treatments" className="max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-32">
                    <SectionHeader
                        title="Treatments & Procedures"
                        subtitle="Specialized Clinical Excellence"
                        description="Explore our world-class medical departments led by elite specialists and equipped with advanced diagnostic and surgical technology."
                        align="left"
                    />
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                </section>

                {/* Conditions */}
                <section id="conditions" className="max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-32">
                    <SectionHeader
                        title="Diseases & Conditions"
                        subtitle="A-Z Health Conditions"
                        description="Detailed information on common ailments, their causes, and how our specialists treat them."
                        align="left"
                    />
                    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {conditions.map(cond => (
                            <Link key={cond.name} href={cond.link} className="flex items-center justify-between p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                                <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-[#0086d6] text-sm md:text-base">{cond.name}</span>
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#0086d6] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Treatment Guides */}
                <TreatmentGuides />

                {/* Pharmacy / Supplements */}
                <section id="pharmacy" className="max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-32">
                    <div className="bg-[#0086d6] rounded-[3rem] p-12 lg:p-24 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Abstract Backgrounds */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] will-change-transform transform-gpu" />

                        <div className="relative z-10 max-w-2xl text-white">
                            <h2 className="elite-section-title mb-6">Drugs, Devices & Supplements</h2>
                            <p className="text-xl text-blue-100 font-light leading-relaxed mb-8">
                                Get genuine medicines, surgical supplies, and health supplements from our in-house 24/7 pharmacy.
                            </p>
                            <Link href="/pharmacy" className="inline-flex items-center px-8 py-4 bg-white text-[#0086d6] font-bold rounded-2xl hover:bg-slate-50 transition-colors shadow-xl">
                                Visit 24/7 Pharmacy
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                        <div className="relative z-10 hidden lg:flex items-center justify-center p-8 bg-white/10 backdrop-blur-3xl rounded-[2.5rem] border border-white/20">
                            <ShieldPlus className="w-32 h-32 text-white" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
