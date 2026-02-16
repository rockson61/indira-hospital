'use client';

import Link from "next/link";
import { Clock, Home, Droplets, FlaskConical, ScanLine, Activity, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DiagnosticCardProps {
    test: any;
    className?: string;
}

const categoryConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string; label: string }> = {
    radiology: { icon: ScanLine, color: 'text-blue-600', bgColor: 'bg-blue-50', label: 'Radiology & Imaging' },
    pathology: { icon: FlaskConical, color: 'text-purple-600', bgColor: 'bg-purple-50', label: 'Pathology & Lab' },
    cardiology: { icon: Activity, color: 'text-red-600', bgColor: 'bg-red-50', label: 'Cardiology' },
    other: { icon: Zap, color: 'text-teal-600', bgColor: 'bg-teal-50', label: 'Other Tests' },
};

export function DiagnosticCard({ test, className }: DiagnosticCardProps) {
    const config = categoryConfig[test.category || 'other'] || categoryConfig.other;
    const href = `/diagnostics/${test.slug}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Link href={href} className={cn("block group", className)}>
                <Card className="bg-white border-gray-100 rounded-xl p-5 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors text-lg">{test.name}</h3>
                        <span className="text-xl font-bold text-blue-600 whitespace-nowrap ml-2">
                            {test.price ? `₹${test.price}` : 'Call'}
                        </span>
                    </div>

                    <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed flex-1">
                        {test.short_description || `Comprehensive ${test.name} with fast reporting at Indira Hospital.`}
                    </p>

                    <div className="flex flex-wrap gap-3 text-xs font-medium pt-4 border-t border-gray-50 mt-auto">
                        <span className="flex items-center gap-1.5 text-gray-600 bg-gray-50 px-2.5 py-1 rounded-md">
                            <Clock className="w-3.5 h-3.5 text-blue-500" />
                            {test.report_time || '24h'}
                        </span>
                        {test.home_collection && (
                            <span className="flex items-center gap-1.5 text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                                <Home className="w-3.5 h-3.5" />
                                Home Visit
                            </span>
                        )}
                        {test.sample_type && test.sample_type !== 'N/A - Imaging' && (
                            <span className="flex items-center gap-1.5 text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                                <Droplets className="w-3.5 h-3.5" />
                                {test.sample_type}
                            </span>
                        )}
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
}
