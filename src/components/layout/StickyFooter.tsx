"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
                "fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 md:hidden",
                isVisible ? "translate-y-0" : "translate-y-full"
            )}
        >
            <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full gap-2 border-brand-600 text-brand-600 hover:bg-brand-50" asChild>
                    <a href="tel:+919876543210">
                        <Phone className="h-4 w-4" />
                        call Now
                    </a>
                </Button>
                <Button className="w-full gap-2 bg-brand-600 hover:bg-brand-700 text-white" asChild>
                    <Link href="/contact">
                        <CalendarCheck className="h-4 w-4" />
                        Book Now
                    </Link>
                </Button>
            </div>
        </div>
    );
}
