"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { navigation } from "@/config/navigation";

export function HeaderMegaMenu() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeSpecialty = navigation.specialtyNav[activeIndex];

    return (
        <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 z-50">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-float border border-slate-100 dark:border-slate-700 w-[800px] overflow-hidden flex">
                <div className="w-1/3 bg-slate-50 dark:bg-slate-900 border-r border-slate-100 dark:border-slate-700 py-4">
                    {navigation.specialtyNav.map((specialty, idx) => (
                        <div
                            key={specialty.title}
                            onMouseEnter={() => setActiveIndex(idx)}
                            className={`px-6 py-2 cursor-pointer text-sm font-bold flex justify-between items-center transition-all ${
                                activeIndex === idx 
                                ? "text-fuchsia-600 bg-white dark:bg-slate-800 shadow-sm" 
                                : "text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 hover:bg-white/50 dark:hover:bg-slate-800/50"
                            }`}
                        >
                            <Link href={specialty.href}>{specialty.title}</Link>
                            <ChevronRight className={`w-4 h-4 ${activeIndex === idx ? "opacity-100" : "opacity-0"}`} />
                        </div>
                    ))}
                </div>
                <div className="w-2/3 p-6 bg-white dark:bg-slate-800">
                    <div className="mb-4 pb-2 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <Link href={activeSpecialty.href} className="text-lg font-bold text-slate-900 dark:text-white hover:text-fuchsia-600 transition-colors">
                            {activeSpecialty.title} Department
                        </Link>
                        <Link href={activeSpecialty.href} className="text-xs font-bold text-fuchsia-600 bg-fuchsia-50 dark:bg-fuchsia-950 px-3 py-1 rounded-full">
                            View All
                        </Link>
                    </div>
                    {activeSpecialty.subServices && activeSpecialty.subServices.length > 0 ? (
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                            {activeSpecialty.subServices.map(sub => (
                                <Link
                                    key={sub.title}
                                    href={sub.href}
                                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 transition-colors flex items-center gap-2 group/sub"
                                >
                                    <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/sub:bg-fuchsia-500 transition-colors" />
                                    {sub.title}
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center space-y-3 text-slate-600 dark:text-slate-300">
                            <p className="text-sm text-center">Comprehensive {activeSpecialty.title} treatments and surgeries available.</p>
                            <Link href={activeSpecialty.href} className="text-sm font-bold text-fuchsia-600 hover:underline">
                                Explore Services →
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
