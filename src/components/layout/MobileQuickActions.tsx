"use client";

import React from "react";
import Link from "next/link";
import { Phone, Calendar, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const MobileQuickActions = () => {
    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-700 dark:border-slate-800 pb-safe shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
            <div className="grid grid-cols-4 items-center h-16">
                <Link
                    href="/book-appointment"
                    className="flex flex-col items-center justify-center gap-1 text-slate-600 dark:text-slate-400 active:scale-95 transition-transform"
                >
                    <Calendar className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Book</span>
                </Link>

                <Link
                    href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s+/g, '')}`}
                    className="flex flex-col items-center justify-center gap-1 text-red-600 active:scale-95 transition-transform"
                >
                    <div className="relative">
                        <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Emergency</span>
                </Link>

                <Link
                    href="/doctor/near-me/vellore"
                    className="flex flex-col items-center justify-center gap-1 text-slate-600 dark:text-slate-400 active:scale-95 transition-transform"
                >
                    <MapPin className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Hospital</span>
                </Link>

                <Link
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1 text-green-600 active:scale-95 transition-transform"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">WhatsApp</span>
                </Link>
            </div>
        </div>
    );
};
