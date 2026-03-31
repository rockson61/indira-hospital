'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Ambulance, Ribbon, ArrowRight, CheckCircle2, ChevronRight, Sparkles, MessageCircle } from "lucide-react";
import { Stethoscope, HeartCardiogram, Heart, Happy, Neurology, BloodDrop, Electricity, Baby0203m, Orthopaedics } from "healthicons-react/outline";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { cn, getImageUrl } from "@/lib/utils";
import { TREATMENT_DATA } from "@/lib/data/treatment-data";

interface ServiceCardProps {
    service: any;
    variant?: "poster" | "detail" | "compact" | "featured";
    className?: string;
    cardClassName?: string;
    theme?: "purple" | "blue" | "teal" | "rose" | "dark";
}

const iconMap: Record<string, React.ReactNode> = {
    Scalpel: <Stethoscope className="h-full w-full" />,
    HeartCardiogram: <HeartCardiogram className="h-full w-full" />,
    Stethoscope: <Stethoscope className="h-full w-full" />,
    Baby0203m: <Baby0203m className="h-full w-full" />,
    Orthopaedics: <Orthopaedics className="h-full w-full" />,
    Heart: <Heart className="h-full w-full" />,
    Siren: <Ambulance className="h-full w-full" />,
    Happy: <Happy className="h-full w-full" />,
    Neurology: <Neurology className="h-full w-full" />,
    Ribbon: <Ribbon className="h-full w-full" />,
    BloodDrop: <BloodDrop className="h-full w-full" />,
    Electricity: <Electricity className="h-full w-full" />,
};

export function ServiceCard({ service, variant = "detail", className, cardClassName, theme = "teal" }: ServiceCardProps) {
    const Icon = iconMap[service.icon] || <Stethoscope className="h-full w-full" />;
    
    // Determine hierarchical URL
    const treatmentData = TREATMENT_DATA.find(t => t.slug === service.slug);
    const href = treatmentData 
        ? `/doctor/near-me/treat/${treatmentData.parentServiceSlug}/${service.slug}`
        : `/doctor/near-me/treat/${service.slug}`;

    // --- VARIANT: COMPACT ---
    if (variant === "compact") {
        return (
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Link
                    href={href}
                    className={cn(
                        "group flex items-center justify-between p-5 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:bg-slate-900 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-500",
                        className
                    )}
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center text-fuchsia-600 shadow-sm group-hover:scale-110 group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-500">
                            <div className="w-6 h-6">{Icon}</div>
                        </div>
                        <span className="text-base font-black text-slate-900 dark:text-white group-hover:text-fuchsia-700 transition-colors tracking-tight">
                            {service.title}
                        </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-fuchsia-500 transition-colors" />
                </Link>
            </motion.div>
        );
    }

    // --- VARIANT: POSTER ---
    if (variant === "poster") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="h-full"
            >
                <Link href={href} className={cn("group block h-full", className)}>
                    <div className={cn(
                        "h-full rounded-[3rem] border border-slate-200 dark:border-slate-700/50 backdrop-blur-2xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-fuchsia-500/5 hover:-translate-y-2 transition-all duration-700 bg-white/90 dark:bg-slate-800/50 overflow-hidden relative p-10 flex flex-col items-center text-center",
                        cardClassName
                    )}>
                        {/* Light Streak Animation */}
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/10 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

                        <div className="w-20 h-20 rounded-[2rem] bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 group-hover:bg-fuchsia-600 flex items-center justify-center text-fuchsia-600 group-hover:text-white transition-all duration-700 mb-8 shadow-md group-hover:shadow-xl group-hover:scale-110 relative z-10">
                            <div className="w-10 h-10">{Icon}</div>
                        </div>

                        <div className="relative z-10 flex-grow">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-fuchsia-700 transition-colors mb-4 tracking-tight leading-tight">
                                {service.title}
                            </h3>

                            <p className="text-[15px] text-slate-500 dark:text-slate-400 font-medium line-clamp-3 mb-8 leading-relaxed">
                                {service.short_description}
                            </p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 w-full relative z-10">
                            <span className="inline-flex items-center text-slate-400 text-xs font-black tracking-[0.2em] uppercase group-hover:text-fuchsia-600 transition-all">
                                Explore Expertise <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    }

    // --- VARIANT: DETAIL (Default) ---
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-full">
            <article className={cn(
                "group relative h-full rounded-[2.5rem] border border-slate-200/60 dark:border-slate-700/50 backdrop-blur-2xl hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] dark:hover:shadow-fuchsia-500/10 hover:-translate-y-1.5 transition-all duration-500 p-7 sm:p-8 flex flex-col bg-white/80 dark:bg-slate-900/80 overflow-hidden",
                className
            )}>
                {/* Light Streak Animation */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/5 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

                <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-600 flex items-center justify-center group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                        <div className="w-8 h-8">{Icon}</div>
                    </div>
                    {service.procedure_type && (
                        <span className="px-4 py-1.5 rounded-full bg-slate-900 dark:bg-slate-700 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-black/10">
                            {service.procedure_type}
                        </span>
                    )}
                </div>

                <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-fuchsia-700 transition-colors tracking-tight leading-tight">
                        <Link href={href} className="before:absolute before:inset-0 outline-none" aria-label={`Learn more about ${service.title}`}>
                            {service.title}
                        </Link>
                    </h3>

                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-6 line-clamp-3 leading-relaxed">
                        {service.short_description}
                    </p>

                    {service.features && service.features.length > 0 && (
                        <div className="mb-8 space-y-2">
                            {service.features.slice(0, 3).map((feat: string, i: number) => (
                                <div key={i} className="flex items-center gap-3 text-[13px] text-slate-600 dark:text-slate-300 font-bold">
                                    <div className="w-5 h-5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-500" />
                                    </div>
                                    <span className="truncate">{feat}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-auto relative z-20 flex gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in learning more about ${service.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/wa relative flex-[1.5] inline-flex items-center justify-center py-2.5 bg-fuchsia-600 text-white font-black rounded-xl text-[12px] transition-all duration-300 shadow-md hover:shadow-lg dark:shadow-none hover:bg-fuchsia-500 uppercase tracking-wider"
                        aria-label={`Inquire about ${service.title} on WhatsApp`}
                    >
                        <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                        Chat
                    </a>
                    <Link
                        href={href}
                        className="group/btn relative flex-1 inline-flex items-center justify-center py-2.5 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-[12px] transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 uppercase tracking-wider"
                        aria-label={`View details for ${service.title}`}
                    >
                        Details
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </article>
        </motion.div>
    );
}
