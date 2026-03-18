import React from "react";
import Link from "next/link";
import { LayoutGrid, ArrowRight, TestTube, UserSearch, FileText } from "lucide-react";
import { HeartCardiogram, Stethoscope, Pills2 } from "healthicons-react/outline";
import { cn } from "@/lib/utils";

const libraryLinks = [
    { name: "Body Systems & Organs", href: "/doctor/near-me/treat#body-systems", icon: HeartCardiogram },
    { name: "Diseases & Conditions", href: "/doctor/near-me/treat#conditions", icon: HeartCardiogram },
    { name: "Treatments", href: "/doctor/near-me/treat#treatments", icon: Stethoscope },
    { name: "Procedures", href: "/doctor/near-me/treat#diagnostics", icon: FileText },
    { name: "Drugs, Devices & Supplements", href: "/pharmacy", icon: Pills2 },
    { name: "Diagnostics & Testing", href: "/scans", icon: TestTube },
    { name: "Symptoms Guide", href: "/doctor/near-me/treat#symptoms", icon: UserSearch },
    { name: "Diet & Nutrition", href: "/doctor/near-me/treat#diet", icon: LayoutGrid },
    { name: "Women's Wellness", href: "/doctor/near-me/treat/obstetrics-gynaecology", icon: HeartCardiogram }
];

export function HealthLibraryCard() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[3rem] overflow-hidden group/library border border-slate-200/60 dark:border-slate-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-none hover:shadow-2xl hover:shadow-fuchsia-500/10 dark:hover:shadow-fuchsia-500/5 hover:-translate-y-2 hover:border-fuchsia-200 dark:hover:border-fuchsia-800 transition-all duration-500 bg-white dark:bg-slate-900 flex flex-col lg:flex-row">

                {/* Background Glow Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu pointer-events-none group-hover/library:bg-fuchsia-500/10 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] will-change-transform transform-gpu pointer-events-none" />

                {/* Left Panel: Spotlight Lead */}
                <div className="relative p-12 lg:p-16 flex flex-col justify-center lg:w-5/12 min-h-[300px] bg-gradient-to-br from-fuchsia-600 to-pink-600 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/20 rounded-full blur-[60px]" />

                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 shadow-inner shadow-white/10">
                            <LayoutGrid className="w-8 h-8 text-fuchsia-100" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1]">
                            Explore Our <br />
                            <span className="text-fuchsia-200">Health Library</span>
                        </h2>
                        <p className="text-lg text-fuchsia-50 font-medium opacity-90 leading-relaxed max-w-sm">
                            Access comprehensive, medically reviewed information on conditions, treatments, and general wellness.
                        </p>
                    </div>
                </div>

                {/* Right Panel: Interactive Interactive List */}
                <div className="relative p-8 lg:p-16 flex flex-col justify-center lg:w-7/12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl z-10">
                    <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                        {libraryLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="group flex items-center p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/30 hover:border-fuchsia-200 dark:hover:border-fuchsia-800 hover:shadow-lg hover:shadow-fuchsia-500/10 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800 group-hover:bg-fuchsia-500 group-hover:border-fuchsia-500 transition-colors shrink-0 mr-4">
                                    <link.icon className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                                <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-400 transition-colors text-sm lg:text-base leading-tight">
                                    {link.name}
                                </span>
                                <ArrowRight className="w-4 h-4 ml-auto text-slate-300 dark:text-slate-600 group-hover:text-fuchsia-500 group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
