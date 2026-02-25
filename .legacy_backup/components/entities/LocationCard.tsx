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
    const href = `/locations/${location.slug}`;

    if (variant === "compact") {
        return (
            <Link
                href={href}
                className={cn(
                    "group flex items-center p-3 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100",
                    className
                )}
            >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mr-3">
                    <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 truncate">{location.name}</p>
                    <p className="text-xs text-gray-500 truncate">{location.city || location.district}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-2" />
            </Link>
        );
    }

    return (
        <Card className={cn("overflow-hidden border-none shadow-sm hover:shadow-lg transition-all group bg-white", cardClassName || className)}>
            {/* Map Thumbnail / Placeholder */}
            <div className="h-32 bg-gray-100 relative group-hover:h-36 transition-all duration-500">
                <iframe
                    src={location.map_url || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6!2d79.15!3d12.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIndira+Super+Speciality+Hospital!5e0!3m2!1sen!2sin!4v1"}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none"
                    title={location.name}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
                    <h3 className="text-white font-bold text-lg drop-shadow-md">{location.name}</h3>
                </div>
            </div>

            <div className="p-5">
                <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>{location.address || "Address details currently unavailable."}</span>
                    </div>
                    {location.phone && (
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{location.phone}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span>{location.travelTime || "Mon - Sat: 9:00 AM - 9:00 PM"}</span>
                    </div>
                    {location.distance && (
                        <div className="flex items-center gap-3 text-sm text-gray-500 italic">
                            <Navigation className="w-3.5 h-3.5" />
                            <span>{location.distance} from hospital</span>
                        </div>
                    )}
                </div>

                <div className="flex gap-3">
                    <Link
                        href={href}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-700 font-semibold rounded-lg text-sm hover:bg-blue-100 transition-colors"
                    >
                        View Clinic
                    </Link>
                    <a
                        href={location.map_url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg text-sm hover:bg-gray-200 transition-colors"
                    >
                        <Navigation className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </Card>
    );
}
