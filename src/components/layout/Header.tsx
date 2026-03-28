"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronRight, Calendar, MapPin, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeaderMegaMenu } from "./HeaderMegaMenu";
import { AvailabilityTicker } from "@/components/marketing/AvailabilityTicker";

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isDentalPage = pathname?.toLowerCase().includes('dental') || pathname?.toLowerCase().includes('dentistry');
    const contactPhone = isDentalPage ? "+91 7010650063" : siteConfig.contact.phone;
    const contactWhatsapp = isDentalPage ? "917010650063" : siteConfig.contact.whatsapp;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Scrollable Ticker */}
            <div className="relative z-[110] hidden lg:block bg-slate-950">
                <AvailabilityTicker />
            </div>

            {/* Fixed Integrated Header */}
            <div className={cn(
                "fixed inset-x-0 z-[100] flex justify-center px-4 sm:px-6 transition-all duration-500",
                scrolled ? "top-4" : "top-8"
            )}>
                <header className="w-full max-w-7xl relative">
                    {/* Unified Background Capsule */}
                    <div 
                        className={cn(
                            "absolute inset-0 rounded-[2.5rem] transition-all duration-500 pointer-events-none border border-white/40 dark:border-slate-700/60 shadow-glass",
                            scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl' : 'bg-white/95 dark:bg-slate-900/95'
                        )} 
                    />

                    {/* Row 1: Main Header */}
                    <div className={cn(
                        "relative z-10 px-8 flex justify-between items-center w-full lg:grid lg:grid-cols-3 transition-all duration-500",
                        scrolled ? "py-2.5" : "py-3.5"
                    )}>
                        {/* Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8 justify-start">
                            {navigation.mainNav.map((item) => (
                                <div key={item.title} className="relative group/menu">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-[14px] font-bold transition-colors flex items-center gap-1",
                                            pathname === item.href ? "text-fuchsia-600" : "text-slate-600 dark:text-slate-300 hover:text-fuchsia-600"
                                        )}
                                    >
                                        {item.title}
                                        {item.title === "Treatments" && <ChevronDown className="w-4 h-4" />}
                                    </Link>
                                    {item.title === "Treatments" && <HeaderMegaMenu />}
                                </div>
                            ))}
                        </nav>

                        {/* Logo */}
                        <div className="flex justify-start lg:justify-center items-center">
                            <Link href="/" className="flex items-center group relative">
                                <Image
                                    src="/logo.png"
                                    alt={siteConfig.name}
                                    width={220}
                                    height={55}
                                    className="h-10 w-auto md:h-12 object-contain"
                                />
                            </Link>
                        </div>

                        {/* Actions */}
                        <div className="hidden lg:flex items-center space-x-4 justify-end">
                            <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="action-icon-button hover:text-rose-600"><Phone className="h-5 w-5" /></a>
                            <a href={`https://wa.me/${contactWhatsapp}`} target="_blank" rel="noopener noreferrer" className="action-icon-button hover:text-pink-600"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></a>
                            <ThemeToggle />
                            <Link href="/book-appointment" className="elite-button-primary !px-6 !py-2.5 !text-[11px]">Elite Consultation</Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="flex lg:hidden justify-end py-2">
                            <button className="p-2.5 rounded-full bg-slate-100/80 text-slate-900 dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200/50 dark:via-slate-700/50 to-transparent" />

                    {/* Row 2: Specialty Menu (Visible on Desktop) */}
                    <div className="relative z-10 hidden lg:flex items-center justify-center py-2 px-8 overflow-x-auto no-scrollbar gap-1">
                        {navigation.specialtyNav.slice(0, 10).map((item) => {
                            const isActive = pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-1.5 text-[12px] font-bold rounded-full transition-all whitespace-nowrap",
                                        isActive 
                                        ? "bg-fuchsia-600 text-white shadow-sm" 
                                        : "text-slate-500 dark:text-slate-400 hover:text-fuchsia-600 hover:bg-fuchsia-50/50 dark:hover:bg-fuchsia-950/30"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                        <div className="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-2" />
                        <Link href="/doctors" className="text-[12px] font-black text-fuchsia-600 hover:underline flex items-center gap-1">
                            More <ChevronRight className="w-3 h-3" />
                        </Link>
                    </div>
                </header>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[90] bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="pt-32 pb-6 px-6 h-full flex flex-col overflow-y-auto">
                    <nav className="flex flex-col space-y-2 flex-1">
                        {navigation.mainNav.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center justify-between p-4 rounded-3xl text-lg font-bold transition-all ${pathname === item.href ? "bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700" : "text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:bg-slate-800"
                                    }`}
                            >
                                {item.title}
                                <ChevronRight className="h-5 w-5 opacity-50" />
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-8 space-y-4">
                        <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="flex items-center justify-center space-x-2 w-full p-4 rounded-3xl bg-rose-50 dark:bg-rose-950 text-rose-600 font-bold border border-rose-100 dark:border-rose-900">
                            <Phone className="h-5 w-5" />
                            <span>Contact: {contactPhone}</span>
                        </a>
                        <a 
                            href={`https://wa.me/${contactWhatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center space-x-2 w-full p-4 rounded-3xl bg-pink-50 dark:bg-pink-950 text-pink-600 font-bold border border-pink-100 dark:border-pink-900"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            <span>WhatsApp Us</span>
                        </a>
                        <Link
                            href="/book-appointment"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center w-full p-4 rounded-3xl bg-slate-900 dark:bg-fuchsia-600 text-white font-bold shadow-float"
                        >
                            Elite Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
