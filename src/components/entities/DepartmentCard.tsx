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
                    <Card className="h-full p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700/50 shadow-soft hover:shadow-float dark:hover:shadow-fuchsia-500/5 hover:-translate-y-1 transition-all duration-400 bg-white dark:bg-slate-800/50 flex flex-col relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-full blur-3xl opacity-50 group-hover:bg-fuchsia-100 transition-colors duration-500" />

                        <div className="absolute bottom-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 transform origin-bottom-right">
                            <Stethoscope className="w-32 h-32 text-fuchsia-600" />
                        </div>

                        <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-fuchsia-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                            <Stethoscope className="w-7 h-7" />
                        </div>

                        <h3 className="text-2xl font-black font-heading text-slate-900 dark:text-white mb-3 group-hover:text-fuchsia-700 transition-colors tracking-tight relative z-10">
                            {department.title || department.name}
                        </h3>

                        <p className="text-base text-slate-500 dark:text-slate-400 font-medium line-clamp-3 mb-8 relative z-10 leading-relaxed">
                            {department.description || `${department.title || 'This'} department at Indira Hospital provides world-class care and advanced treatments.`}
                        </p>

                        <div className="mt-auto flex gap-3 relative z-10">
                            <Link 
                                href={href}
                                className="flex-1 flex items-center justify-center p-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-2xl font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                            >
                                Explore
                            </Link>
                            <a
                                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I'm clinical inquiry for ${department.title || department.name}.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center p-4 bg-fuchsia-600 text-white rounded-2xl font-bold text-sm hover:bg-fuchsia-500 transition-all shadow-md shadow-fuchsia-200 dark:shadow-none"
                            >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Chat
                            </a>
                        </div>
                    </Card>
                </Link>
            )}
        </motion.div>
    );
}
