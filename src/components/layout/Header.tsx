"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronRight, Calendar, MapPin, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`fixed top-0 inset-x-0 z-[100] flex justify-center px-4 sm:px-6 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>
                <header
                    className={`w-full max-w-7xl rounded-full transition-all duration-500 border border-white/40 
                    ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-glass py-3' : 'bg-white/95 shadow-soft py-4'}`}
                >
                    <div className="px-6 md:px-8 grid grid-cols-3 items-center">
                        {/* Left: Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8 justify-start">
                            {navigation.mainNav.map((item) => (
                                <div key={item.title} className="relative group/menu">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-[15px] font-bold transition-colors flex items-center gap-1",
                                            pathname === item.href ? "text-teal-600" : "text-slate-600 hover:text-teal-600"
                                        )}
                                    >
                                        {item.title}
                                        {item.title === "Treatments" && <ChevronDown className="w-4 h-4" />}
                                    </Link>

                                    {item.title === "Treatments" && (
                                        <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 z-50">
                                            <div className="bg-white rounded-3xl shadow-float border border-slate-100 p-6 w-[600px] grid grid-cols-2 gap-x-8 gap-y-2">
                                                {navigation.specialtyNav.map((specialty) => (
                                                    <Link
                                                        key={specialty.title}
                                                        href={specialty.href}
                                                        className="text-sm font-bold text-slate-600 hover:text-teal-600 p-2 rounded-xl hover:bg-teal-50 transition-all flex items-center justify-between group/item"
                                                    >
                                                        {specialty.title}
                                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Center: Logo */}
                        <div className="flex justify-start lg:justify-center items-center">
                            <Link href="/" className="flex items-center group relative">
                                <Image
                                    src="/logo.png"
                                    alt={siteConfig.name}
                                    width={200}
                                    height={50}
                                    className="h-10 w-auto md:h-12 object-contain"
                                />
                            </Link>
                        </div>

                        {/* Right: Actions */}
                        <div className="hidden lg:flex items-center space-x-4 justify-end">
                            {/* Call */}
                            <a
                                href={`tel:${siteConfig.contact.emergencyPhone}`}
                                className="flex items-center justify-center p-3 bg-slate-50 hover:bg-rose-50 text-rose-600 rounded-2xl border border-slate-100 hover:border-rose-100 transition-all"
                                title="Call Now"
                            >
                                <Phone className="h-5 w-5" />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/917010650063"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center p-3 bg-slate-50 hover:bg-emerald-50 text-emerald-600 rounded-2xl border border-slate-100 hover:border-emerald-100 transition-all"
                                title="WhatsApp"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </a>

                            {/* Book Appointment */}
                            <Link
                                href="/book-appointment"
                                className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 hover:bg-teal-600 text-white rounded-2xl font-bold transition-all shadow-lg"
                                title="Book Appointment"
                            >
                                Book Appointment
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="flex lg:hidden justify-end">
                            <button
                                className="p-2.5 rounded-full bg-slate-100/80 text-slate-900 hover:bg-slate-200 transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[90] bg-white/95 backdrop-blur-lg transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="pt-32 pb-6 px-6 h-full flex flex-col overflow-y-auto">
                    <nav className="flex flex-col space-y-2 flex-1">
                        {navigation.mainNav.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center justify-between p-4 rounded-3xl text-lg font-bold transition-all ${pathname === item.href ? "bg-teal-50 text-teal-700" : "text-slate-800 hover:bg-slate-50"
                                    }`}
                            >
                                {item.title}
                                <ChevronRight className="h-5 w-5 opacity-50" />
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-8 space-y-4">
                        <a href={`tel:${siteConfig.contact.emergencyPhone}`} className="flex items-center justify-center space-x-2 w-full p-4 rounded-3xl bg-rose-50 text-rose-600 font-bold">
                            <Phone className="h-5 w-5" />
                            <span>Emergency: {siteConfig.contact.emergencyPhone}</span>
                        </a>
                        <Link
                            href="/book-appointment"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center w-full p-4 rounded-3xl bg-slate-900 text-white font-bold shadow-float"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
