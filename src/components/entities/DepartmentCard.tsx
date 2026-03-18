'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DepartmentCardProps {
    department: any;
    className?: string;
    variant?: "grid" | "compact";
}

export function DepartmentCard({ department, className, variant = "grid" }: DepartmentCardProps) {
    const href = `/doctor/near-me/treat/${department.slug || department.id}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-full"
        >
            {variant === "compact" ? (
                <Link
                    href={href}
                    className={cn(
                        "group flex items-center justify-between p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-soft hover:border-fuchsia-100 hover:-translate-y-0.5 transition-all",
                        className
                    )}
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors shadow-sm dark:shadow-slate-900/30">
                            <Stethoscope className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-slate-900 dark:text-white group-hover:text-fuchsia-700 transition-colors text-base">
                            {department.title || department.name}
                        </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-fuchsia-50 dark:bg-fuchsia-950 transition-colors">
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-fuchsia-600" />
                    </div>
                </Link>
            ) : (
                <Link href={href} className={cn("block group h-full", className)}>
                    <article className="h-full p-6 sm:p-7 rounded-[2rem] border border-slate-200/60 dark:border-slate-700/50 backdrop-blur-xl shadow-sm hover:shadow-2xl dark:hover:shadow-fuchsia-500/10 hover:-translate-y-1.5 transition-all duration-500 bg-white/80 dark:bg-slate-900/80 flex flex-col relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-full blur-3xl opacity-50 group-hover:bg-fuchsia-100 transition-colors duration-500 pointer-events-none" />

                        <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 transform origin-bottom-right pointer-events-none">
                            <Stethoscope className="w-32 h-32 text-fuchsia-600" />
                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-950 border border-slate-100 dark:border-slate-700 text-fuchsia-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-300 shadow-sm relative z-10 flex-shrink-0">
                            <Stethoscope className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-black font-heading text-slate-900 dark:text-white mb-2.5 group-hover:text-fuchsia-700 transition-colors tracking-tight relative z-10">
                            {department.title || department.name}
                        </h3>

                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium line-clamp-3 mb-6 relative z-10 leading-relaxed max-w-[95%]">
                            {department.description || `${department.title || 'This'} department at Indira Hospital provides world-class care and advanced treatments.`}
                        </p>

                        <div className="mt-auto flex gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60 relative z-10">
                            <div className="group/btn relative flex-1 flex items-center justify-center py-2.5 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-[12px] transition-all border border-slate-200 dark:border-slate-700 group-hover:border-fuchsia-200 dark:group-hover:border-fuchsia-900 hover:bg-slate-100 dark:hover:bg-slate-800 uppercase tracking-wider">
                                Explore
                                <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                            </div>
                            <div className="group/wa relative flex-[1.5] flex items-center justify-center py-2.5 bg-fuchsia-600 text-white font-black rounded-xl text-[12px] transition-all border border-transparent hover:bg-fuchsia-500 shadow-md hover:shadow-lg dark:shadow-none uppercase tracking-wider">
                                <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                                Chat
                            </div>
                        </div>
                    </article>
                </Link>
            )}
        </motion.div>
    );
}
