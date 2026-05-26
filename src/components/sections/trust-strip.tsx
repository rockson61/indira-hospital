"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight, Shield, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Electricity, HeartCardiogram, Stethoscope } from "healthicons-react/outline";

const trustItems = [
 { icon: HeartCardiogram, label: "15,000+", sublabel: "Successful Surgeries", color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-950" },
 { icon: Stethoscope, label: "15+", sublabel: "Surgical Specialities", color: "text-fuchsia-600", bg: "bg-fuchsia-50 dark:bg-fuchsia-950" },
 { icon: Shield, label: "50+", sublabel: "Cashless Insurance", color: "text-fuchsia-600", bg: "bg-fuchsia-50 dark:bg-fuchsia-950" },
 { icon: Electricity, label: "< 10 min", sublabel: "Emergency Response", color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-950" },
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
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
 {trustItems.map((item, i) => (
 <motion.div
 key={item.sublabel}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="elite-card h-full p-6 flex items-center gap-5 group hover:scale-[1.02]"
 >
 <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner`}>
 <item.icon className={`w-7 h-7 ${item.color}`} />
 </div>
 <div>
 <p className="text-3xl font-black text-slate-900 dark:text-white leading-none uppercase italic tracking-tighter mb-1">{item.label}</p>
 <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">{item.sublabel}</p>
 </div>
 </motion.div>
 ))}
 </div>

 {/* Badges Row */}
 <div className="flex flex-wrap items-center justify-center gap-5">
 {badges.map((badge) => (
 <div
 key={badge.text}
 className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 dark:bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-sm"
 >
 <badge.icon className="w-4 h-4 text-fuchsia-600 animate-pulse" />
 <span className="text-xs font-black text-slate-900 dark:text-slate-200 uppercase tracking-widest">{badge.text}</span>
 </div>
 ))}
 <Link
 href="/doctor/near-me/treat"
 className="elite-button-secondary"
 >
 Explore Services <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
 </Link>
 <a
 href={`https://wa.me/${siteConfig.contact.whatsapp}`}
 target="_blank"
 rel="noopener noreferrer"
 className="elite-button-primary"
 >
 <MessageCircle className="w-4 h-4 group-hover/wa:rotate-12 transition-transform" /> Chat with Expert
 </a>
 </div>
 </div>
 </section>
 );
}
