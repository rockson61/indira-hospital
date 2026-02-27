"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ShieldCheck, Zap, HeartPulse, Stethoscope, BadgeCheck, ArrowRight
} from "lucide-react";

const trustItems = [
    { icon: HeartPulse, label: "15,000+", sublabel: "Successful Surgeries", color: "text-rose-500", bg: "bg-rose-50" },
    { icon: Stethoscope, label: "15+", sublabel: "Surgical Specialities", color: "text-fuchsia-600", bg: "bg-fuchsia-50" },
    { icon: ShieldCheck, label: "50+", sublabel: "Cashless Insurance", color: "text-fuchsia-600", bg: "bg-fuchsia-50" },
    { icon: Zap, label: "< 10 min", sublabel: "Emergency Response", color: "text-amber-600", bg: "bg-amber-50" },
];

const badges = [
    { icon: BadgeCheck, text: "NABH Accredited" },
    { icon: BadgeCheck, text: "Zero-Cost EMI Available" },
    { icon: BadgeCheck, text: "Same-Day Discharge" },
];

export function TrustStrip() {
    return (
        <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {trustItems.map((item, i) => (
                        <motion.div
                            key={item.sublabel}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 p-5 rounded-[2rem] bg-slate-50/50 border border-slate-100 dark:border-slate-700"
                        >
                            <div className={`w-12 h-12 rounded-[1rem] ${item.bg} flex items-center justify-center flex-shrink-0`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <div>
                                <p className="text-2xl font-heading font-black text-slate-900 dark:text-white leading-none">{item.label}</p>
                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">{item.sublabel}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Badges Row */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {badges.map((badge) => (
                        <div
                            key={badge.text}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fuchsia-50 border border-fuchsia-100"
                        >
                            <badge.icon className="w-4 h-4 text-fuchsia-600" />
                            <span className="text-sm font-bold text-fuchsia-700">{badge.text}</span>
                        </div>
                    ))}
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-fuchsia-700 transition-all shadow-sm dark:shadow-slate-900/30"
                    >
                        Explore Services <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
