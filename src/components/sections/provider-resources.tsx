"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Stethoscope, Users, Building2, UserPlus, Home, HeartPulse, GraduationCap, Briefcase, Microscope, HeartHandshake } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { cn } from "@/lib/utils";

const providerLinks = [
    { label: "Institutes & Departments", icon: Building2, href: "/departments" },
    { label: "Join Our Nursing Team", icon: Users, href: "#" },
    { label: "Careers", icon: Briefcase, href: "#" },
    { label: "Refer a Patient", icon: UserPlus, href: "#" },
    { label: "Student Housing Program", icon: Home, href: "#" },
    { label: "Patient Care", icon: HeartPulse, href: "#" },
    { label: "Provider Recruitment", icon: Stethoscope, href: "#" },
    { label: "Research", icon: Microscope, href: "#" },
    { label: "Education", icon: GraduationCap, href: "#" },
    { label: "Community Commitment", icon: HeartHandshake, href: "#" },
];

export function ProviderResources() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Split into left and right columns for the grid layout
    const halfway = Math.ceil(providerLinks.length / 2);
    const leftCol = providerLinks.slice(0, halfway);
    const rightCol = providerLinks.slice(halfway);

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <SectionContainer className="relative z-10">
                <div className="max-w-4xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        For Providers
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                        Explore a curated collection of helpful resources and tools for medical professionals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="space-y-4">
                        {leftCol.map((link, idx) => (
                            <ProviderAccordionItem
                                key={idx}
                                item={link}
                                isOpen={openIndex === idx}
                                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                            />
                        ))}
                    </div>
                    <div className="space-y-4">
                        {rightCol.map((link, idx) => {
                            const actualIdx = idx + halfway;
                            return (
                                <ProviderAccordionItem
                                    key={actualIdx}
                                    item={link}
                                    isOpen={openIndex === actualIdx}
                                    onToggle={() => setOpenIndex(openIndex === actualIdx ? null : actualIdx)}
                                />
                            );
                        })}
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}

function ProviderAccordionItem({ item, isOpen, onToggle }: { item: any, isOpen: boolean, onToggle: () => void }) {
    const Icon = item.icon;

    return (
        <div
            className={cn(
                "rounded-2xl border transition-all duration-300 overflow-hidden bg-white dark:bg-slate-900 group",
                isOpen
                    ? "border-blue-200 dark:border-blue-900/50 shadow-md ring-1 ring-blue-100 dark:ring-blue-900/30"
                    : "border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-slate-700 hover:shadow-sm"
            )}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
                <div className="flex items-center gap-4">
                    <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                        isOpen
                            ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
                            : "bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    )}>
                        <Icon className="w-5 h-5" />
                    </div>
                    <span className={cn(
                        "text-lg font-bold transition-colors",
                        isOpen ? "text-blue-700 dark:text-blue-400" : "text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-300"
                    )}>
                        {item.label}
                    </span>
                </div>
                <ChevronDown
                    className={cn(
                        "w-5 h-5 text-blue-500 transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0 opacity-50 group-hover:opacity-100"
                    )}
                />
            </button>

            <div
                className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-hidden">
                    <div className="p-5 pt-0 pl-19 flex items-center gap-4 border-t border-slate-50 dark:border-slate-800/50 mt-2 text-sm">
                        <div className="w-10" /> {/* Spacer for icon alignment */}
                        <div className="flex-1">
                            <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                                Access tools, resources, and administrative services tailored for {item.label.toLowerCase()} initiatives.
                            </p>
                            <Link
                                href={item.href}
                                className="inline-flex items-center font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 group/link"
                            >
                                Explore {item.label}
                                <ChevronDown className="w-4 h-4 ml-1 -rotate-90 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
