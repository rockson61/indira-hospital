"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Clock, Award, Users2, Shield } from "lucide-react";
;
import { Stethoscope, HeartCardiogram } from "healthicons-react/outline";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
 const [count, setCount] = useState(0);

 useEffect(() => {
 if (!start) return;
 let startTime: number | null = null;
 let animationFrame: number;

 const animate = (timestamp: number) => {
 if (!startTime) startTime = timestamp;
 const progress = Math.min((timestamp - startTime) / duration, 1);
 const eased = 1 - Math.pow(1 - progress, 3);
 setCount(Math.floor(eased * target));
 if (progress < 1) {
 animationFrame = requestAnimationFrame(animate);
 }
 };

 animationFrame = requestAnimationFrame(animate);
 return () => cancelAnimationFrame(animationFrame);
 }, [target, duration, start]);

 return count;
}

const statsMeta = [
 { key: "patients", label: "Patients Treated", suffix: "+", icon: Users2, color: "text-fuchsia-600 dark:text-fuchsia-400", glow: "shadow-fuchsia-500/10 dark:shadow-fuchsia-500/20" },
 { key: "doctors", label: "Expert Doctors", suffix: "+", icon: Stethoscope, color: "text-pink-600 dark:text-pink-400", glow: "shadow-pink-500/10 dark:shadow-pink-500/20" },
 { key: "departments", label: "Specialties", suffix: "+", icon: HeartCardiogram, color: "text-indigo-600 dark:text-indigo-400", glow: "shadow-indigo-500/10 dark:shadow-indigo-500/20" },
 { key: "experience", label: "Years Excellence", suffix: "+", icon: Award, color: "text-rose-600 dark:text-rose-400", glow: "shadow-rose-500/10 dark:shadow-rose-500/20" },
];

function StatItem({ value, meta, inView, delay }: { value: number; meta: typeof statsMeta[0]; inView: boolean; delay: number }) {
 const count = useCountUp(value, 2000, inView);
 const Icon = meta.icon;

 return (
 <motion.div
 initial={{ opacity: 0, scale: 0.9, y: 30 }}
 animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
 transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
 className={`group relative flex flex-col items-center gap-6 bg-white dark:bg-white dark:bg-slate-900 dark: rounded-[2.5rem] p-10 border border-slate-200 dark:border-slate-200 dark:border-slate-800 hover:border-fuchsia-200 dark:hover:border-slate-200 dark:border-slate-800 hover:bg-fuchsia-50/50 dark:hover:bg-white dark:bg-slate-900 transition-all duration-500 shadow-xl dark:shadow-2xl ${meta.glow} overflow-hidden`}
 >
 <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

 <div className={`w-20 h-20 rounded-2xl bg-slate-50 dark:bg-white dark:bg-slate-900 ${meta.color} flex items-center justify-center group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-500 shadow-lg dark:shadow-xl group-hover:scale-110 z-10`}>
 <Icon className="w-10 h-10" />
 </div>

 <div className="text-center relative z-10">
 <div className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter tabular-nums mb-2">
 {count.toLocaleString()}{meta.suffix}
 </div>
 <div className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-[0.2em] text-xs">{meta.label}</div>
 </div>

 {/* Subtle light streak — only visible in dark mode */}
 <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out hidden dark:block" />
 </motion.div>
 );
}

interface StatsCounterClientProps {
 doctorCount: number;
 departmentCount: number;
 patientCount: number;
}

export function StatsCounterClient({ doctorCount, departmentCount, patientCount }: StatsCounterClientProps) {
 const ref = useRef<HTMLDivElement>(null);
 const inView = useInView(ref, { once: true, margin: "-100px" });

 const values = [patientCount, doctorCount, departmentCount, 25];

 return (
 <section className="relative z-30 py-16 sm:py-24 bg-white dark:bg-slate-950">
 <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
 {statsMeta.map((meta, i) => (
 <StatItem key={meta.key} value={values[i]} meta={meta} inView={inView} delay={i * 0.1} />
 ))}
 </div>
 </div>
 </section>
 );
}
