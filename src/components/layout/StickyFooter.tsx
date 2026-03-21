"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function StickyFooter() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 100px
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-4 left-4 right-4 z-50 transition-all duration-500 md:hidden",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
            )}
        >
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white dark:border-slate-800 p-2 rounded-[2rem] shadow-2xl shadow-indigo-500/10 max-w-sm mx-auto flex items-center gap-2">
                <a 
                    href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s+/g, '')}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-[1.5rem] bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm tracking-wide hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                    <Phone className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-400" />
                    Call Now
                </a>
                <Link 
                    href="/book-appointment"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-[1.5rem] bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 hover:scale-[1.02] transition-all"
                >
                    <CalendarCheck className="h-4 w-4" />
                    Book Now
                </Link>
            </div>
        </div>
    );
}
