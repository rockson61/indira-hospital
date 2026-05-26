"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

export function StickyCTA() {
    const pathname = usePathname();
    const isDentalPage = pathname?.toLowerCase().includes('dental') || pathname?.toLowerCase().includes('dentistry');
    const contactPhone = isDentalPage ? "+91 7010650063" : siteConfig.contact.phone;
    const contactWhatsapp = isDentalPage ? "917010650063" : siteConfig.contact.whatsapp;

    const phone = contactPhone;
    const whatsappUrl = `https://wa.me/${contactWhatsapp}?text=${encodeURIComponent("Hi, I want to book an appointment at Indira Super Speciality Hospital.")}`;

    return (
        <div className="fixed bottom-0 inset-x-0 z-[80] lg:hidden pb-safe">
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-t border-slate-200/50 dark:border-slate-700/50 p-3 sm:px-6 flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <a
                    href={`tel:+917010650063`}
                    className="flex-[0.8] flex flex-col items-center justify-center gap-1 py-2 bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400 font-bold rounded-2xl shadow-clay-sm transition-all active:shadow-clay-active active:scale-95 border border-red-100 dark:border-red-900/50"
                >
                    <Phone className="w-5 h-5 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-wider">Emergency</span>
                </a>
                <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex-1 flex flex-col items-center justify-center gap-1 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-bold rounded-2xl shadow-clay-sm dark:shadow-clay-dark transition-all active:shadow-clay-active active:scale-95 border border-slate-100 dark:border-slate-700"
                >
                    <Phone className="w-5 h-5" />
                    <span className="text-[10px] uppercase tracking-wider">Call OPD</span>
                </a>
                <a
                    href="/book-appointment"
                    className="flex-[1.2] flex flex-col items-center justify-center gap-1 py-2 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold rounded-2xl shadow-clay-sm transition-all active:shadow-clay-active active:scale-95 border border-fuchsia-500/50 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity" />
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-[10px] uppercase tracking-wider relative z-10">Book Visit</span>
                </a>
            </div>
        </div>
    );
}
