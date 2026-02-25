"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Stethoscope, HeartPulse, Clock, Award, Users2, ShieldCheck, Activity } from "lucide-react";
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
    { key: "patients", label: "Patients Treated", suffix: "+", icon: Users2, color: "text-teal-400", glow: "shadow-teal-500/20" },
    { key: "doctors", label: "Expert Doctors", suffix: "+", icon: Stethoscope, color: "text-emerald-400", glow: "shadow-emerald-500/20" },
    { key: "departments", label: "Specialties", suffix: "+", icon: Activity, color: "text-indigo-400", glow: "shadow-indigo-500/20" },
    { key: "experience", label: "Years Excellence", suffix: "+", icon: Award, color: "text-rose-400", glow: "shadow-rose-500/20" },
];

function StatItem({ value, meta, inView, delay }: { value: number; meta: typeof statsMeta[0]; inView: boolean; delay: number }) {
    const count = useCountUp(value, 2000, inView);
    const Icon = meta.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative flex flex-col items-center gap-6 bg-white/10 backdrop-blur-3xl rounded-[2.5rem] p-10 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 shadow-2xl ${meta.glow} overflow-hidden`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className={`w-20 h-20 rounded-2xl bg-white/5 ${meta.color} flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all duration-500 shadow-xl group-hover:scale-110 z-10`}>
                <Icon className="w-10 h-10" />
            </div>

            <div className="text-center relative z-10">
                <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter tabular-nums mb-2">
                    {count.toLocaleString()}{meta.suffix}
                </div>
                <div className="text-slate-400 font-black uppercase tracking-[0.2em] text-xs">{meta.label}</div>
            </div>

            {/* Subtle light streak */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
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
        <section className="relative z-30 -mt-24 sm:-mt-32 pb-24">
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
