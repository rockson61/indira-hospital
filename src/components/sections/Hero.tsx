"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Search, Star, Sparkles, Monitor, MessageCircle } from "lucide-react";
import { HeartCardiogram, GeneralSurgery, Orthopaedics, Heart, Electricity, Stethoscope, Baby0203m, Kidneys, Eye, Gynecology } from "healthicons-react/outline";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const popularTreatments = [
 { label: "Piles", icon: GeneralSurgery, href: "/doctor/near-me/treat/proctology/laser-piles-treatment" },
 { label: "Fistula", icon: GeneralSurgery, href: "/doctor/near-me/treat/proctology/fistula-surgery-treatment" },
 { label: "Kidney Stones", icon: Kidneys, href: "/doctor/near-me/treat/urology/laser-kidney-stone-surgery" },
 { label: "Hernia", icon: GeneralSurgery, href: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair-surgery" },
 { label: "Gallstone", icon: GeneralSurgery, href: "/doctor/near-me/treat/general-surgery/gallbladder-removal-recovery" },
 { label: "Knee Replace", icon: Orthopaedics, href: "/doctor/near-me/treat/orthopaedics/robotic-knee-replacement" },
 { label: "Cataract", icon: Eye, href: "/doctor/near-me/treat/ophthalmology/advanced-cataract-surgery" },
 { label: "Gynaecology", icon: Gynecology, href: "/doctor/near-me/treat/obstetrics-gynaecology" },
];

export function Hero() {
 const [searchTerm, setSearchTerm] = useState("");

 return (
 <section className="elite-hero-section pt-40 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 rounded-b-[2rem] sm:rounded-b-[4rem]">
 {/* BACKGROUND — Clean Enterprise Grid */}
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-20" />

 <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
 <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

 {/* Left Typography Content */}
 <div className="lg:col-span-7">
 <div
 className="elite-tag mb-8"
 >
 <Sparkles className="w-4 h-4 text-primary" />
 #1 Rated Super Speciality Hospital in Vellore
 </div>

 <h1
 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] uppercase text-foreground mb-8"
 >
 Best Hospital in Vellore. <br />
 <span className="text-primary">
 World-Class Care.
 </span>
 </h1>

 <div
 className="mb-12"
 >
 <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight uppercase text-foreground/90 mb-6">
 Advanced Laparoscopic & Multispeciality Treatments.
 </h2>
 <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
 Top-tier surgical expertise at half the metro cost. Walk in with pain. Walk out the same day. That&apos;s the <span className="text-primary font-bold">Indira promise.</span>
 </p>
 </div>

 <motion.div
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
 className="flex flex-col sm:flex-row gap-4 mb-12"
 >
 <Link
 href="/book-appointment"
 className="elite-button-primary gap-3"
 >
 <span className="relative z-10">Meet Our Specialists</span>
 <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
 </Link>
 <a
 href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I want to book an appointment at Indira Super Speciality Hospital.")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="elite-button-secondary text-primary border-primary/20 hover:bg-primary/5 gap-3"
 >
 <MessageCircle className="w-5 h-5 transition-transform" /> Chat with a Care Coordinator
 </a>
 <a
 href={`tel:${siteConfig.contact.emergencyPhone}`}
 className="elite-button-secondary gap-3"
 >
 <Phone className="w-5 h-5 text-destructive" /> Emergency: {siteConfig.contact.emergencyPhone}
 </a>
 </motion.div>

 {/* Enterprise Search Bar */}
 <motion.div
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
 className="bg-card p-3 rounded-2xl border border-border flex flex-col sm:flex-row items-center max-w-2xl relative z-20 group focus-within:border-primary/50 transition-all shadow-sm"
 >
 <div className="hidden sm:flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center ml-2 flex-shrink-0 transition-all duration-300">
 <Search className="w-6 h-6 text-primary" />
 </div>
 <input
 type="text"
 placeholder="Search (e.g., Knee Pain, Dr. Sharma)"
 className="w-full bg-transparent border-none outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground font-medium text-lg"
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 />
 {searchTerm && (
 <Link
 href={`/doctors?q=${searchTerm}`}
 className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold shadow-sm hover:bg-primary/90 transition-all sm:ml-2 w-full sm:w-auto text-center mt-3 sm:mt-0"
 >
 Find Now
 </Link>
 )}
 </motion.div>
 </div>

 {/* Right Bento Cinematic Gallery */}
 <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
 <motion.div
 animate={{ opacity: 1, scale: 1, x: 0 }}
 transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
 className="absolute top-0 right-0 w-full h-[550px] rounded-3xl overflow-hidden shadow-md border border-border z-10 group bg-muted"
 >
 <Image
 src="/images/hospital/Hospital view 2.webp"
 alt="Indira Super Speciality Hospital"
 fill
 priority
 fetchPriority="high"
 sizes="(max-width: 1024px) 100vw, 50vw"
 className="object-cover transition-transform duration-[3s] group-hover:scale-105"
 />

 <div className="absolute bottom-0 left-0 w-full bg-card/95 backdrop-blur-sm border-t border-border p-6 z-20">
 <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase mb-2">
 <Monitor className="w-3.5 h-3.5" /> High-Tech Care
 </span>
 <h3 className="font-heading text-xl font-bold text-foreground">World-Class Infrastructure</h3>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
 className="absolute -bottom-6 left-6 bg-card p-6 rounded-2xl border border-border z-20 max-w-[280px] shadow-sm"
 >
 <div className="flex items-center gap-4 mb-2">
 <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
 <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
 </div>
 <div>
 <h4 className="font-bold text-foreground text-xl tracking-tight">4.9/5 Rating</h4>
 <p className="text-primary font-bold text-xs tracking-widest uppercase">From 2k+ Patients</p>
 </div>
 </div>
 </motion.div>
 </div>
 </div>

 {/* Enterprise Popular Treatment Pills */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
 className="mt-20 sm:mt-28"
 >
 <div className="flex items-center gap-4 mb-8">
 <div className="h-px bg-border flex-grow" />
 <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] whitespace-nowrap">Rapid Access Treatments</p>
 <div className="h-px bg-border flex-grow" />
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
 {popularTreatments.map((t, i) => (
 <Link
 key={t.label}
 href={t.href}
 className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-sm transition-all duration-300"
 >
 <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
 <t.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
 </div>
 <span className="text-sm font-bold text-foreground text-center">
 {t.label}
 </span>
 </Link>
 ))}
 </div>
 </motion.div>
 </div>

 </section>
 );
}
