'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { Clock, ArrowRight, MessageCircle, Award } from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import { Card } from "@/components/ui/card";
import Image from "next/image";

import { siteConfig } from "@/config/site";

interface DoctorCardProps {
 doctor: any;
 variant?: "grid" | "list" | "compact" | "featured";
 showBookButton?: boolean;
 city?: string;
}

// Must match the slug derivation logic in doctor/[specialty]/[slug]/page.tsx generateStaticParams
function getSpecialtySlug(doctor: any): string {
 const rawDept = typeof doctor.department === 'string' ? doctor.department : doctor.department?.name || doctor.specialty || 'specialist';
 return rawDept.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function DoctorCard({ doctor, variant = "grid", showBookButton = true, city }: DoctorCardProps) {
 const doctorUrl = city 
 ? `/doctor/near-me/${city}/${doctor.slug}`
 : `/doctor/${getSpecialtySlug(doctor)}/${doctor.slug}`;

 const deptName = typeof doctor.department === 'string' ? doctor.department : (doctor.department?.name || '');
 const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I would like to book an appointment with ${doctor.name}.`)}`;
 const initials = doctor.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2);

 // --- VARIANT: COMPACT (Sidebar / Minimal) ---
 if (variant === "compact") {
 return (
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.3 }}
 >
 <Link href={doctorUrl} className="group flex items-center gap-4 p-4 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-soft hover:border-fuchsia-100 hover:-translate-y-0.5 transition-all">
 <div className="relative w-14 h-14 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm dark:shadow-slate-900/30">
 {doctor.image && getImageUrl(doctor.image) ? (
 <Image src={getImageUrl(doctor.image)!} alt={doctor.name} fill className="object-cover" />
 ) : (
 <span className="text-fuchsia-700 font-bold text-sm tracking-widest">{initials}</span>
 )}
 </div>
 <div className="min-w-0 flex-1">
 <h3 className="font-bold font-heading text-slate-900 dark:text-white text-base truncate group-hover:text-fuchsia-700 transition-colors">{doctor.name}</h3>
 <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase truncate mt-0.5">{deptName}</p>
 </div>
 <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-fuchsia-50 dark:bg-fuchsia-950 transition-colors">
 <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-fuchsia-600 transition-colors" />
 </div>
 </Link>
 </motion.div>
 );
 }

 // --- VARIANT: LIST (Horizontal / Search Results) ---
 if (variant === "list") {
 return (
 <motion.div
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4 }}
 >
 <Card className="flex flex-col sm:flex-row gap-6 p-6 rounded-[2rem] bg-white dark:bg-slate-900 transition-all duration-300 shadow-soft hover:shadow-float border border-slate-100 dark:border-slate-700 overflow-hidden group">
 <div className="relative w-full sm:w-56 h-56 sm:h-auto rounded-[1.5rem] bg-slate-50 dark:bg-slate-800 shrink-0 overflow-hidden shadow-inner">
 {doctor.image && getImageUrl(doctor.image) ? (
 <Image src={getImageUrl(doctor.image)!} alt={doctor.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
 ) : (
 <div className="w-full h-full flex items-center justify-center bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-300">
 <Stethoscope className="w-12 h-12" />
 </div>
 )}
 {doctor.experience_years && (
 <div className="absolute top-3 left-3 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 dark:text-white shadow-sm flex items-center gap-1.5">
 <Award className="w-3.5 h-3.5 text-amber-500" />
 {doctor.experience_years}+ Yrs
 </div>
 )}
 </div>

 <div className="flex-1 flex flex-col py-2">
 <div className="flex-1">
 <div className="flex justify-between items-start">
 <div>
 <h3 className="text-2xl font-black font-heading text-slate-900 dark:text-white group-hover:text-fuchsia-700 transition-colors tracking-tight">
 <Link href={doctorUrl} className="hover:underline">
 {doctor.name}
 </Link>
 </h3>
 <p className="text-fuchsia-600 font-bold text-sm tracking-wide mt-1">{doctor.designation}</p>
 </div>
 {showBookButton && (
 <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
 className="hidden sm:inline-flex items-center px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-full hover:bg-fuchsia-700 dark:hover:bg-fuchsia-200 hover:shadow-md transition-all">
 <MessageCircle className="w-4 h-4 mr-2" />
 Book
 </a>
 )}
 </div>

 <div className="flex flex-wrap gap-y-2 gap-x-3 text-sm text-slate-600 dark:text-slate-300 mt-4">
 {deptName && (
 <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-3 py-1.5 rounded-full font-medium">
 <Stethoscope className="w-4 h-4 text-fuchsia-600" />
 {deptName}
 </span>
 )}
 <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-3 py-1.5 rounded-full font-medium">
 <Clock className="w-4 h-4 text-slate-400" />
 Mon - Sat
 </span>
 </div>

 {doctor.specialties && doctor.specialties.length > 0 && (
 <div className="mt-5 flex flex-wrap gap-2">
 {doctor.specialties.slice(0, 3).map((spec: string) => (
 <span key={spec} className="px-3 py-1 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 text-xs font-bold rounded-full">
 {spec}
 </span>
 ))}
 {doctor.specialties.length > 3 && (
 <span className="text-xs font-bold text-slate-400 py-1 px-2">+{doctor.specialties.length - 3}</span>
 )}
 </div>
 )}
 </div>

 <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700 flex gap-3 sm:hidden">
 <a href={whatsappUrl} className="flex-1 flex items-center justify-center px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-full shadow-sm dark:shadow-slate-900/30">
 Book
 </a>
 <Link href={doctorUrl} className="flex-1 flex items-center justify-center px-5 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold rounded-full">
 Profile
 </Link>
 </div>
 </div>
 </Card>
 </motion.div>
 );
 }

 // --- VARIANT: GRID (Default) ---
 return (
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4 }}
 className="h-full"
 >
 <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200/60 dark:border-slate-700/50 shadow-sm hover:shadow-2xl dark:hover:shadow-fuchsia-500/10 hover:-translate-y-1.5 transition-all duration-500 h-full flex flex-col bg-white dark:bg-slate-900">
 <div className="relative aspect-[4/3] bg-fuchsia-50 dark:bg-fuchsia-950 overflow-hidden m-2 rounded-[1.5rem] shadow-inner">
 {doctor.image && getImageUrl(doctor.image) ? (
 <Image
 src={getImageUrl(doctor.image)!}
 alt={doctor.name}
 fill
 className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
 />
 ) : (
 <div className="w-full h-full flex items-center justify-center text-fuchsia-100">
 <Stethoscope className="w-16 h-16" />
 </div>
 )}
 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

 <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
 <h3 className="text-lg font-black font-heading leading-tight tracking-tight drop-shadow-md">
 <Link href={doctorUrl} className="before:absolute before:inset-0" aria-label={`View profile of ${doctor.name}`}>
 {doctor.name}
 </Link>
 </h3>
 <p className="text-fuchsia-300 text-[10px] uppercase tracking-widest font-bold mt-0.5 max-w-full truncate drop-shadow">{deptName}</p>
 </div>

 {doctor.experience_years && (
 <div className="absolute top-4 right-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
 <Award className="w-3.5 h-3.5 text-amber-500" />
 {doctor.experience_years}+ Yrs
 </div>
 )}
 </div>

 <div className="px-5 py-4 flex-1 flex flex-col relative z-10">
 <div className="flex items-center gap-2 mb-3">
 <p className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
 {doctor.designation}
 </p>
 </div>

 {doctor.specialties && (
 <p className="text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-2 mb-4 leading-relaxed">
 {doctor.specialties.join(", ")}
 </p>
 )}

 <div className="mt-auto flex gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60">
 {showBookButton && (
 <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
 className="relative z-20 flex-[1.5] flex items-center justify-center gap-1.5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-[12px] uppercase tracking-wider font-black py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg dark:shadow-none"
 aria-label={`Book an appointment with ${doctor.name} via WhatsApp`}
 >
 <MessageCircle className="w-3.5 h-3.5" /> Book
 </a>
 )}
 <Link href={doctorUrl}
 className="relative z-20 flex-1 flex items-center justify-center gap-1 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-[12px] uppercase tracking-wider font-bold py-2.5 rounded-xl transition-all border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
 aria-label={`View full profile of ${doctor.name}`}
 >
 Profile <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
 </Link>
 </div>
 </div>
 </article>
 </motion.div>
 );
}
