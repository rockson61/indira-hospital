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

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isDentalPage = pathname?.toLowerCase().includes('dental') || pathname?.toLowerCase().includes('dentistry');
    const contactPhone = isDentalPage ? "+91 7010650063" : siteConfig.contact.phone;
    const contactWhatsapp = isDentalPage ? "917010650063" : siteConfig.contact.whatsapp;

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
                    className={`w-full max-w-7xl rounded-full transition-all duration-500 border border-white/40 dark:border-slate-700/60
                    ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-glass py-3' : 'bg-white/95 dark:bg-slate-900/95 shadow-soft py-4'}`}
                >
                    <div className="px-6 md:px-8 flex justify-between items-center w-full lg:grid lg:grid-cols-3">
                        {/* Left: Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8 justify-start">
                            {navigation.mainNav.map((item) => (
                                <div key={item.title} className="relative group/menu">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-[15px] font-bold transition-colors flex items-center gap-1",
                                            pathname === item.href ? "text-fuchsia-600" : "text-slate-600 dark:text-slate-300 hover:text-fuchsia-600"
                                        )}
                                    >
                                        {item.title}
                                        {item.title === "Treatments" && <ChevronDown className="w-4 h-4" />}
                                    </Link>

                                    {item.title === "Treatments" && (
                                        <HeaderMegaMenu />
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
                                    width={240}
                                    height={60}
                                    className="h-12 w-auto md:h-14 object-contain"
                                />
                            </Link>
                        </div>

                        {/* Right: Actions */}
                        <div className="hidden lg:flex items-center space-x-4 justify-end">
                            {/* Call */}
                            <a
                                href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                                className="flex items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950 text-rose-600 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-rose-100 transition-all"
                                title="Call Now"
                            >
                                <Phone className="h-5 w-5" />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={`https://wa.me/${contactWhatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 hover:bg-pink-50 dark:hover:bg-pink-950 text-pink-600 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-pink-100 transition-all"
                                title="WhatsApp"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </a>

                            {/* Theme Toggle */}
                            <ThemeToggle />

                            {/* Book Appointment */}
                            <Link
                                href="/book-appointment"
                                className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 dark:bg-fuchsia-600 hover:bg-fuchsia-600 dark:hover:bg-fuchsia-500 text-white rounded-2xl font-bold transition-all shadow-lg"
                                title="Book Appointment"
                            >
                                Book Appointment
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="flex lg:hidden justify-end">
                            <button
                                className="p-2.5 rounded-full bg-slate-100/80 text-slate-900 dark:text-white hover:bg-slate-200 dark:bg-slate-700 transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
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
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
