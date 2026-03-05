"use client";

import React from "react";
import { insurancePartners } from "@/lib/data/clinic-config";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function InsuranceMarquee() {
    // Duplicate the partners for seamless scrolling
    const scrolledPartners = [...insurancePartners, ...insurancePartners];

    return (
        <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
                            <ShieldCheck className="w-3 h-3" /> Cashless Partners
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                            Insurance & TPA Partners
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-medium max-w-md">
                        We accept all major health insurance providers and government health schemes for a hassle-free, cashless experience.
                    </p>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex whitespace-nowrap gap-8 py-4 px-4"
                    animate={{
                        x: [0, -1920],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {scrolledPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center gap-4 px-8 py-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 group-hover:bg-fuchsia-50 dark:group-hover:bg-fuchsia-950/30 group-hover:border-fuchsia-200 dark:group-hover:border-fuchsia-800 transition-all duration-300"
                        >
                            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                                <ShieldCheck className="w-4 h-4 text-fuchsia-500" />
                            </div>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
                                {partner}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
