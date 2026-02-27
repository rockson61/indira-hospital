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
        const handleScroll = () => setScrolled(window.scrollY > 80);
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
            className={`fixed inset-x-0 z-[90] transition-all duration-300 ${scrolled ? "top-[96px]" : "top-[128px]"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav className="bg-white/95 backdrop-blur-xl border border-slate-100 rounded-full shadow-soft px-2 py-1.5 flex items-center overflow-x-auto no-scrollbar">
                    {/* Specialty Items */}
                    {navigation.specialtyNav.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        const hasSubServices = item.subServices && item.subServices.length > 0;
                        return (
                            <div key={item.title} className="relative group flex-shrink-0">
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-1 px-4 py-2 text-[13px] font-bold rounded-full transition-all whitespace-nowrap ${isActive
                                        ? "bg-fuchsia-50 text-fuchsia-700"
                                        : "text-slate-600 hover:text-fuchsia-700 hover:bg-slate-50"
                                        }`}
                                >
                                    {item.title}
                                    {hasSubServices && <ChevronDown className="w-3.5 h-3.5 opacity-50 transition-transform group-hover:rotate-180" />}
                                </Link>

                                {hasSubServices && (
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-[1.5rem] shadow-float border border-slate-100 py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left scale-95 group-hover:scale-100">
                                        <div className="px-5 pb-2 mb-2 border-b border-slate-50">
                                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{item.title} Procedures</p>
                                        </div>
                                        {item.subServices.map((subItem: any) => (
                                            <Link
                                                key={subItem.title}
                                                href={subItem.href}
                                                className="block px-5 py-2 text-sm font-medium text-slate-600 hover:bg-fuchsia-50 hover:text-fuchsia-700 transition-colors mx-2 rounded-xl"
                                            >
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Divider */}
                    <div className="w-px h-6 bg-slate-200 mx-1 flex-shrink-0" />

                    {/* Our Hospitals Dropdown */}
                    <div className="relative flex-shrink-0" ref={dropdownRef}>
                        <button
                            onClick={() => setIsHospitalsOpen(!isHospitalsOpen)}
                            className={`flex items-center gap-1.5 px-4 py-2 text-[13px] font-bold rounded-full transition-all whitespace-nowrap ${isHospitalsOpen
                                ? "bg-fuchsia-50 text-fuchsia-700"
                                : "text-slate-600 hover:text-fuchsia-700 hover:bg-slate-50"
                                }`}
                        >
                            Our Hospitals
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isHospitalsOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isHospitalsOpen && (
                            <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-[1.5rem] shadow-float border border-slate-100 py-3 z-50">
                                <div className="px-4 pb-2 mb-2 border-b border-slate-100">
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Locations</p>
                                </div>
                                {navigation.hospitalLocations.map((loc) => (
                                    <Link
                                        key={loc.title}
                                        href={loc.href}
                                        onClick={() => setIsHospitalsOpen(false)}
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-fuchsia-50 hover:text-fuchsia-700 transition-colors mx-2 rounded-xl"
                                    >
                                        <MapPin className="w-4 h-4 text-slate-400" />
                                        {loc.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}
