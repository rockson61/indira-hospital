'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { Stethoscope, MapPin, Clock, ArrowRight, MessageCircle, Phone, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { clinicConfig } from "@/lib/data/clinic-config";

interface DoctorCardProps {
    doctor: any; // Using any for now to be flexible with Directus/Seed data
    variant?: "grid" | "list" | "compact" | "featured";
    showBookButton?: boolean;
}

const WHATSAPP_NUMBER = "917010650063";

export function DoctorCard({ doctor, variant = "grid", showBookButton = true }: DoctorCardProps) {
    const deptName = typeof doctor.department === 'string' ? doctor.department : (doctor.department?.name || '');
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I would like to book an appointment with ${doctor.name}.`)}`;
    const initials = doctor.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2);

    // --- VARIANT: COMPACT (Sidebar / Minimal) ---
    if (variant === "compact") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
            >
                <Link href={`/doctors/${doctor.slug}`} className="group flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {doctor.image && getImageUrl(doctor.image) ? (
                            <img src={getImageUrl(doctor.image)!} alt={doctor.name} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-purple-700 font-bold text-sm">{initials}</span>
                        )}
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-gray-900 text-sm truncate group-hover:text-purple-700 transition-colors">{doctor.name}</h3>
                        <p className="text-xs text-gray-500 truncate">{deptName}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-purple-600 transition-colors" />
                </Link>
            </motion.div>
        );
    }

    // --- VARIANT: LIST (Horizontal / Search Results) ---
    if (variant === "list") {
        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                <Card className="flex flex-col sm:flex-row gap-6 p-6 transition-all hover:shadow-md border-gray-100 overflow-hidden group">
                    {/* Image */}
                    <div className="w-full sm:w-48 h-48 sm:h-auto rounded-xl bg-gray-100 shrink-0 overflow-hidden relative">
                        {doctor.image && getImageUrl(doctor.image) ? (
                            <img src={getImageUrl(doctor.image)!} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-purple-50 text-purple-300">
                                <Stethoscope className="w-12 h-12" />
                            </div>
                        )}
                        {doctor.experience_years && (
                            <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-gray-900 shadow-sm">
                                {doctor.experience_years}+ Yrs Exp
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                                        <Link href={`/doctors/${doctor.slug}`} className="hover:underline">
                                            {doctor.name}
                                        </Link>
                                    </h3>
                                    <p className="text-purple-600 font-medium text-sm mb-2">{doctor.designation}</p>
                                </div>
                                {/* Desktop Book Button */}
                                {showBookButton && (
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                        className="hidden sm:inline-flex items-center px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-lg hover:bg-green-600 transition-colors shadow-sm">
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        Book Now
                                    </a>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-600 mt-2">
                                {deptName && (
                                    <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md">
                                        <Stethoscope className="w-3.5 h-3.5 text-purple-500" />
                                        {deptName}
                                    </span>
                                )}
                                <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md">
                                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                                    Mon - Sat
                                </span>
                            </div>

                            {doctor.specialties && doctor.specialties.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {doctor.specialties.slice(0, 3).map((spec: string) => (
                                        <span key={spec} className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs rounded-full border border-purple-100">
                                            {spec}
                                        </span>
                                    ))}
                                    {doctor.specialties.length > 3 && (
                                        <span className="text-xs text-gray-400 py-1 px-1">+{doctor.specialties.length - 3} more</span>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Mobile Actions */}
                        <div className="mt-5 pt-4 border-t border-gray-100 flex gap-3 sm:hidden">
                            <a href={whatsappUrl} className="flex-1 flex items-center justify-center px-4 py-2.5 bg-green-500 text-white text-sm font-bold rounded-lg">
                                WhatsApp
                            </a>
                            <Link href={`/doctors/${doctor.slug}`} className="flex-1 flex items-center justify-center px-4 py-2.5 bg-gray-100 text-gray-700 text-sm font-bold rounded-lg">
                                Profile
                            </Link>
                        </div>
                    </div>
                </Card>
            </motion.div>
        );
    }

    // --- VARIANT: GRID (Default) ---
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="h-full"
        >
            <Card className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-white">
                {/* Image Header */}
                <div className="relative aspect-[4/3] bg-purple-50 overflow-hidden">
                    {doctor.image && getImageUrl(doctor.image) ? (
                        <img
                            src={getImageUrl(doctor.image)!}
                            alt={doctor.name}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-purple-200">
                            <Stethoscope className="w-16 h-16" />
                        </div>
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-bold leading-tight line-clamp-1">{doctor.name}</h3>
                        <p className="text-purple-200 text-xs uppercase tracking-wider font-medium line-clamp-1">{deptName}</p>
                    </div>

                    {doctor.experience_years && (
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1">
                            <Award className="w-3 h-3 text-amber-500" />
                            {doctor.experience_years}+ Yrs
                        </div>
                    )}
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col">
                    <p className="text-sm text-gray-500 line-clamp-1 mb-3 bg-gray-50 px-2 py-1 rounded-md inline-block self-start">
                        {doctor.designation}
                    </p>

                    {doctor.specialties && (
                        <p className="text-xs text-gray-400 line-clamp-2 mb-4 h-8">
                            {doctor.specialties.join(", ")}
                        </p>
                    )}

                    <div className="mt-auto flex gap-3 pt-4 border-t border-gray-100">
                        {showBookButton ? (
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2.5 rounded-lg transition-colors">
                                <MessageCircle className="w-3.5 h-3.5" />
                                Book
                            </a>
                        ) : null}
                        <Link href={`/doctors/${doctor.slug}`}
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-purple-50 hover:text-purple-700 text-gray-700 text-xs font-bold py-2.5 rounded-lg transition-colors">
                            Profile
                        </Link>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
