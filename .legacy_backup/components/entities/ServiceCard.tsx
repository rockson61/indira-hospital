'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Stethoscope, Activity, Heart, Ambulance, Smile, Brain, Ribbon, Droplets, Zap,
    Baby, Bone, ArrowRight, CheckCircle2, ChevronRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    service: any; // Flexible for Seed/Directus data
    variant?: "poster" | "detail" | "compact" | "featured";
    className?: string;
    cardClassName?: string;
    theme?: "purple" | "blue" | "teal" | "rose" | "dark";
}

// Icon Map (keep consistent with pages)
const iconMap: Record<string, React.ReactNode> = {
    Scalpel: <Stethoscope className="h-6 w-6" />,
    Activity: <Activity className="h-6 w-6" />,
    Stethoscope: <Stethoscope className="h-6 w-6" />,
    Baby: <Baby className="h-6 w-6" />,
    Bone: <Bone className="h-6 w-6" />,
    Heart: <Heart className="h-6 w-6" />,
    Siren: <Ambulance className="h-6 w-6" />,
    Smile: <Smile className="h-6 w-6" />,
    Brain: <Brain className="h-6 w-6" />,
    Ribbon: <Ribbon className="h-6 w-6" />,
    Droplets: <Droplets className="h-6 w-6" />,
    Zap: <Zap className="h-6 w-6" />,
};

export function ServiceCard({ service, variant = "detail", className, cardClassName, theme = "purple" }: ServiceCardProps) {
    const Icon = iconMap[service.icon] || <Stethoscope className="h-6 w-6" />;
    const href = `/services/${service.slug}`;

    // --- VARIANT: COMPACT (Sidebar / Lists) ---
    if (variant === "compact") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Link
                    href={href}
                    className={cn(
                        "group flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-purple-50 border border-transparent hover:border-purple-100 transition-all",
                        className
                    )}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-purple-600 shadow-sm group-hover:scale-110 transition-transform">
                            {/* Smaller icon for compact */}
                            <div className="scale-75">{Icon}</div>
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700 transition-colors">
                            {service.title}
                        </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-purple-500 transition-colors" />
                </Link>
            </motion.div>
        );
    }

    // --- VARIANT: POSTER (Home / Landing Grid) ---
    if (variant === "poster") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="h-full"
            >
                <Link href={href} className={cn("group block h-full", className)}>
                    <Card className={cn(
                        "h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden relative p-6 flex flex-col items-center text-center",
                        cardClassName
                    )}>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="w-14 h-14 rounded-2xl bg-purple-50 group-hover:bg-purple-600 flex items-center justify-center text-purple-600 group-hover:text-white transition-all duration-300 mb-4 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                            {Icon}
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors mb-2">
                            {service.title}
                        </h3>

                        <p className="text-sm text-gray-500 line-clamp-3 mb-4 leading-relaxed">
                            {service.short_description}
                        </p>

                        <span className="mt-auto inline-flex items-center text-purple-600 text-sm font-bold group-hover:gap-2 transition-all">
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                    </Card>
                </Link>
            </motion.div>
        );
    }

    // --- VARIANT: DETAIL (Department Page / Listings) ---
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Card className={cn(
                "group border-none shadow-sm hover:shadow-md transition-all p-6 flex flex-col bg-white",
                className
            )}>
                <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        {Icon}
                    </div>
                    {service.procedure_type && (
                        <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wide">
                            {service.procedure_type}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    <Link href={href} className="hover:underline decoration-blue-200 underline-offset-4">
                        {service.title}
                    </Link>
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                    {service.short_description}
                </p>

                {/* Key Features / Procedures (If available in features array) */}
                {service.features && service.features.length > 0 && (
                    <div className="mb-5 space-y-1">
                        {service.features.slice(0, 3).map((feat: string, i: number) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                                <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0" />
                                <span className="truncate">{feat}</span>
                            </div>
                        ))}
                    </div>
                )}

                <Link
                    href={href}
                    className="inline-flex items-center justify-center w-full py-2.5 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-semibold rounded-lg text-sm transition-colors border border-gray-100 hover:border-blue-100"
                >
                    View Details
                </Link>
            </Card>
        </motion.div>
    );
}
