"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MapPin } from "lucide-react";
import { navigation } from "@/config/navigation";

export function SpecialtyNav() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isHospitalsOpen, setIsHospitalsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsHospitalsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
            className={`fixed inset-x-0 z-[90] transition-all duration-300 ${scrolled ? "top-[88px]" : "top-[112px]"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/40 dark:border-slate-700/60 rounded-full shadow-glass px-3 py-2 flex items-center overflow-x-auto no-scrollbar gap-2">
                    {/* Specialty Items */}
                    {navigation.specialtyNav.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        const hasSubServices = item.subServices && item.subServices.length > 0;
                        return (
                            <div key={item.title} className="relative group flex-shrink-0">
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-1.5 px-5 py-2.5 text-[14px] font-bold rounded-full transition-all whitespace-nowrap ${isActive
                                        ? "bg-fuchsia-600 text-white shadow-float"
                                        : "text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/30"
                                        }`}
                                >
                                    {item.title}
                                    {hasSubServices && <ChevronDown className={`w-4 h-4 opacity-70 transition-transform group-hover:rotate-180 ${isActive ? "text-white" : ""}`} />}
                                </Link>

                                {hasSubServices && (
                                    <div className="absolute top-full left-0 mt-3 w-72 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[2rem] shadow-glass border border-white/40 dark:border-slate-700/60 py-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100">
                                        <div className="px-6 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.title} Procedures</p>
                                        </div>
                                        <div className="max-h-[60vh] overflow-y-auto px-2 space-y-1 custom-scrollbar">
                                            {item.subServices.map((subItem: any) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="block px-4 py-3 text-[13px] font-bold text-slate-700 dark:text-slate-200 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/50 hover:text-fuchsia-600 transition-all rounded-2xl"
                                                >
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Divider */}
                    <div className="w-px h-8 bg-slate-200/60 dark:bg-slate-700/60 mx-2 flex-shrink-0" />

                    {/* Our Hospitals Dropdown */}
                    <div className="relative flex-shrink-0" ref={dropdownRef}>
                        <button
                            onClick={() => setIsHospitalsOpen(!isHospitalsOpen)}
                            className={`flex items-center gap-2 px-6 py-2.5 text-[14px] font-black rounded-full transition-all whitespace-nowrap border-2 ${isHospitalsOpen
                                ? "bg-slate-900 border-slate-900 text-white dark:bg-fuchsia-600 dark:border-fuchsia-600"
                                : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-fuchsia-600 hover:text-fuchsia-600"
                                }`}
                        >
                            <MapPin className="w-4 h-4" />
                            Our Hospitals
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isHospitalsOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isHospitalsOpen && (
                            <div className="absolute top-full right-0 mt-4 w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[2.5rem] shadow-glass border border-white/40 dark:border-slate-700/60 py-5 z-50">
                                <div className="px-6 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Regional Medical Centers</p>
                                </div>
                                <div className="grid grid-cols-1 gap-1 px-3">
                                    {navigation.hospitalLocations.map((loc) => (
                                        <Link
                                            key={loc.title}
                                            href={loc.href}
                                            onClick={() => setIsHospitalsOpen(false)}
                                            className="flex items-center gap-4 px-4 py-3.5 text-[13px] font-bold text-slate-800 dark:text-slate-100 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/50 hover:text-fuchsia-600 transition-all rounded-2xl group/loc"
                                        >
                                            <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover/loc:bg-fuchsia-100 dark:group-hover/loc:bg-fuchsia-900 transition-colors">
                                                <MapPin className="w-4 h-4 text-slate-400 group-hover/loc:text-fuchsia-600" />
                                            </div>
                                            {loc.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}
