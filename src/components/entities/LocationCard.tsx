'use client';

import Link from "next/link";
import { MapPin, Navigation, Phone, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface LocationCardProps {
    location: any;
    className?: string;
    cardClassName?: string;
    variant?: "card" | "compact";
}

export function LocationCard({ location, className, cardClassName, variant = "card" }: LocationCardProps) {
    const href = `/doctor/near-me/${location.slug}`;

    if (variant === "compact") {
        return (
            <Link
                href={href}
                className={cn(
                    "group flex items-center p-4 rounded-[2rem] bg-white dark:bg-slate-900 hover:shadow-soft border border-slate-100 dark:border-slate-700 hover:border-fuchsia-100 hover:-translate-y-0.5 transition-all",
                    className
                )}
            >
                <div className="w-10 h-10 rounded-full bg-fuchsia-50 flex items-center justify-center text-fuchsia-600 flex-shrink-0 mr-3 shadow-sm dark:shadow-slate-900/30">
                    <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-fuchsia-700 truncate transition-colors">{location.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate font-medium">{location.city || location.district}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-fuchsia-50 transition-colors">
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-fuchsia-600" />
                </div>
            </Link>
        );
    }

    return (
        <Card className={cn("overflow-hidden rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-soft hover:shadow-float hover:-translate-y-1 transition-all group bg-white dark:bg-slate-900", cardClassName || className)}>
            {/* Map Thumbnail */}
            <div className="h-36 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
                <iframe
                    src={location.map_url || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6!2d79.15!3d12.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIndira+Super+Speciality+Hospital!5e0!3m2!1sen!2sin!4v1"}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"
                    title={location.name}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-5 flex items-end">
                    <h3 className="text-white font-heading font-black text-lg tracking-tight drop-shadow-md">{location.name}</h3>
                </div>
            </div>

            <div className="p-6">
                <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <MapPin className="w-4 h-4 text-fuchsia-500 mt-1 flex-shrink-0" />
                        <span>{location.address || "Address details currently unavailable."}</span>
                    </div>
                    {location.phone && (
                        <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                            <Phone className="w-4 h-4 text-fuchsia-500 flex-shrink-0" />
                            <span>{location.phone}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span>{location.travelTime || "Mon - Sat: 9:00 AM - 9:00 PM"}</span>
                    </div>
                    {location.distance && (
                        <div className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                            <Navigation className="w-3.5 h-3.5" />
                            <span>{location.distance} from hospital</span>
                        </div>
                    )}
                </div>

                <div className="flex gap-3">
                    <Link
                        href={href}
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-full text-sm hover:bg-fuchsia-50 hover:text-fuchsia-700 transition-all border border-slate-100 dark:border-slate-700"
                    >
                        View Clinic
                    </Link>
                    <a
                        href={location.map_url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-12 h-12 bg-slate-50 dark:bg-slate-800 text-slate-600 rounded-full hover:bg-fuchsia-50 hover:text-fuchsia-700 transition-all border border-slate-100 dark:border-slate-700"
                    >
                        <Navigation className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </Card>
    );
}
