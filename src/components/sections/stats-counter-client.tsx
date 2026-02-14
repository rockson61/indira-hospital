"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Stethoscope, HeartPulse, Clock } from "lucide-react";

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
    { key: "patients", label: "Patients Treated", suffix: "+", icon: Users, color: "from-emerald-400 to-teal-500" },
    { key: "doctors", label: "Expert Doctors", suffix: "+", icon: Stethoscope, color: "from-blue-400 to-indigo-500" },
    { key: "departments", label: "Departments", suffix: "+", icon: HeartPulse, color: "from-purple-400 to-pink-500" },
    { key: "emergency", label: "Emergency Care", suffix: "/7", icon: Clock, color: "from-amber-400 to-orange-500" },
];

function StatItem({ value, meta, inView }: { value: number; meta: typeof statsMeta[0]; inView: boolean }) {
    const count = useCountUp(value, 2000, inView);
    const Icon = meta.icon;

    return (
        <div className="flex flex-col items-center gap-3 group">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${meta.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {count.toLocaleString()}{meta.suffix}
                </div>
                <div className="text-sm text-white/70 mt-1 font-medium">{meta.label}</div>
            </div>
        </div>
    );
}

interface StatsCounterClientProps {
    doctorCount: number;
    departmentCount: number;
    patientCount: number;
}

export function StatsCounterClient({ doctorCount, departmentCount, patientCount }: StatsCounterClientProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const values = [patientCount, doctorCount, departmentCount, 24];

    return (
        <section ref={ref} className="relative py-16 sm:py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                    {statsMeta.map((meta, i) => (
                        <StatItem key={meta.key} value={values[i]} meta={meta} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
