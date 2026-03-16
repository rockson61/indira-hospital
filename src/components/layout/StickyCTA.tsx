"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function StickyCTA() {
    const phone = siteConfig.contact.emergencyPhone;
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I want to book an appointment at Indira Super Speciality Hospital.")}`;

    return (
        <div className="fixed bottom-0 inset-x-0 z-[80] lg:hidden">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-700 px-4 py-3 flex gap-3">
                <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm rounded-full shadow-sm transition-all active:scale-95"
                >
                    <Phone className="w-4 h-4" />
                    Call Now
                </a>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-fuchsia-600 text-white font-bold text-sm rounded-full shadow-sm transition-all active:scale-95"
                >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                </a>
            </div>
        </div>
    );
}
