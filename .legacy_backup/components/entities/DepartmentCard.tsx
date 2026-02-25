'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DepartmentCardProps {
    department: any;
    className?: string;
    variant?: "grid" | "compact";
}

export function DepartmentCard({ department, className, variant = "grid" }: DepartmentCardProps) {
    const href = `/departments/${department.slug}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-full"
        >
            {variant === "compact" ? (
                <Link
                    href={href}
                    className={cn(
                        "group flex items-center justify-between p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-100 transition-all",
                        className
                    )}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                            <Stethoscope className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                            {department.title || department.name}
                        </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-teal-500" />
                </Link>
            ) : (
                <Link href={href} className={cn("block group h-full", className)}>
                    <Card className="h-full p-6 border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:to-teal-50 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Stethoscope className="w-24 h-24 text-teal-600" />
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                            <Stethoscope className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                            {department.title || department.name}
                        </h3>

                        <p className="text-sm text-gray-500 line-clamp-3 mb-6 relative z-10 leading-relaxed">
                            {department.description || `${department.title} department at Indira Hospital provides world-class care.`}
                        </p>

                        <div className="mt-auto flex items-center text-teal-600 text-sm font-bold group-hover:gap-2 transition-all">
                            Explore Department <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                    </Card>
                </Link>
            )}
        </motion.div>
    );
}

