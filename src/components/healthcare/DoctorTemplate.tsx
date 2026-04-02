'use client';

import React from 'react';
import Link from 'next/link';
import { 
    Calendar, 
    Phone, 
    ChevronRight, 
    Award, 
    Clock, 
    GraduationCap, 
    Languages, 
    MapPin, 
    MessageCircle, 
    UserCircle, 
    Star, 
    Users, 
    ArrowRight, 
    Shield, 
    Activity, 
    Target, 
    Search 
} from "lucide-react";
import { Stethoscope, HeartCardiogram } from "healthicons-react/outline";
import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import { ModernCard } from "@/components/ui/modern-card";
import Image from "next/image";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { ServiceCard } from "@/components/entities/ServiceCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { getImageUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { 
    DOCTOR_PROFILE, 
    DOCTOR_EXPERTISE_FALLBACK_1, 
    DOCTOR_EXPERTISE_FALLBACK_2, 
    DOCTORS_DIRECTORY, 
    INDIRA_STANDARDS 
} from "@/config/constants";
import type { Doctor } from "@/data/doctors";
import type { Department } from "@/data/departments";

export interface DoctorTemplateProps {
    doctor: Partial<Doctor> & {
        name: string;
        slug: string;
        image?: string;
        designation?: string;
        bio?: string;
        experience_years?: number;
        related_services?: any[];
        languages?: string[];
        education?: { degree: string; institution: string; year?: string }[];
        procedures?: string[];
        memberships?: string[];
    };
    deptName: string;
    deptSlug: string;
    otherDoctors?: Doctor[];
    departments?: Department[];
    WHATSAPP_NUMBER: string;
    fullDescription?: React.ReactNode;
}

export function DoctorTemplate({
    doctor,
    deptName,
    deptSlug,
    otherDoctors = [],
    WHATSAPP_NUMBER,
    fullDescription
}: DoctorTemplateProps) {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${DOCTOR_PROFILE.WHATSAPP_MESSAGE_PREFIX} ${doctor.name} (${doctor.designation}).`)}`;

    return (
        <div className="min-h-screen bg-slate-50/50">
            {/* Premium Doctor Hero */}
            <section className="relative bg-gradient-to-br from-[#005f73] via-[#0a3d47] to-[#002b36] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_25%_25%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-16 lg:pt-56 lg:pb-24 relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-sm text-fuchsia-200/60 mb-12">
                        <Link href="/" className="hover:text-white transition-colors">{DOCTOR_PROFILE.BREADCRUMB_HOME}</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href={DOCTORS_DIRECTORY.PROFILE_HREF_PREFIX} className="hover:text-white transition-colors">{DOCTOR_PROFILE.BREADCRUMB_DOCTORS}</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-white font-medium">{doctor.name}</span>
                    </nav>

                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Doctor Image with premium frame */}
                        <div className="lg:col-span-4 lg:pr-8">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-tr from-[#54CAD3] to-white/20 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
                                    {doctor.image ? (
                                        <Image
                                            src={getImageUrl(doctor.image)!}
                                            alt={doctor.name}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full bg-slate-800">
                                            <UserCircle className="w-32 h-32 text-slate-600 dark:text-slate-300" />
                                        </div>
                                    )}
                                </div>
                                <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-fuchsia-500/20 rounded-full blur-3xl" />
                            </div>
                        </div>

                        {/* Doctor Content */}
                        <div className="lg:col-span-8 flex flex-col justify-center">
                            <div className="space-y-4 mb-8">
                                <span className="inline-block px-4 py-1.5 bg-[#54CAD3]/20 border border-[#54CAD3]/30 rounded-full text-[#54CAD3] text-sm font-bold tracking-widest uppercase">
                                    {doctor.designation}
                                </span>
                                <h1 className="elite-hero-title text-white">
                                    {doctor.name}
                                </h1>
                            </div>

                            <div className="flex flex-wrap gap-8 mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                        <Award className="w-6 h-6 text-[#54CAD3]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-xl leading-none">{doctor.experience_years || doctor.years_of_experience || 10}+ Years</p>
                                        <p className="text-fuchsia-200/60 text-xs font-bold uppercase tracking-widest mt-1">{DOCTOR_PROFILE.LABEL_EXPERIENCE}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                        <Stethoscope className="w-6 h-6 text-[#54CAD3]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-xl leading-none">{doctor.procedures?.length || 15}+ Operations</p>
                                        <p className="text-fuchsia-200/60 text-xs font-bold uppercase tracking-widest mt-1">{DOCTOR_PROFILE.LABEL_PROCEDURES}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                        <Star className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-xl leading-none">4.9/5 Rating</p>
                                        <p className="text-fuchsia-200/60 text-xs font-bold uppercase tracking-widest mt-1">{DOCTOR_PROFILE.LABEL_RATINGS}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={whatsappUrl}
                                    target="_blank" rel="noopener noreferrer"
                                    className="px-8 py-4 bg-[#54CAD3] hover:bg-[#45b5bd] text-[#002b36] font-bold rounded-2xl transition-all shadow-xl shadow-[#54CAD3]/20 flex items-center gap-3"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    {DOCTOR_PROFILE.BTN_CONSULTATION}
                                </a>
                                <Link
                                    href="/book-appointment"
                                    className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all backdrop-blur-sm"
                                >
                                    {DOCTOR_PROFILE.BTN_SCHEDULE}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Sub-navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center gap-12">
                        {[
                            { name: 'Overview', id: 'overview' },
                            { name: 'Expertise', id: 'expertise' },
                            { name: 'Qualifications', id: 'qualifications' },
                            { name: 'Clinical Philosophy', id: 'philosophy' },
                            { name: 'Patient Reviews', id: 'reviews' },
                            { name: 'FAQs', id: 'faqs' }
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-sm font-bold text-slate-500 hover:text-fuchsia-600 dark:text-slate-400 dark:hover:text-fuchsia-400 transition-colors uppercase tracking-widest px-1 py-4 border-b-2 border-transparent hover:border-fuchsia-600"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Profile Main Content */}
            <SectionContainer id="overview" className="py-20 lg:py-24">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-12">
                        {/* Biography / Bio */}
                        <div className="space-y-6">
                            <h2 className="elite-section-title text-slate-900 dark:text-white border-l-4 border-fuchsia-600 pl-6 uppercase tracking-tighter italic">Biography & Leadership</h2>
                            <div
                                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium antialiased prose prose-indigo dark:prose-invert"
                                dangerouslySetInnerHTML={{ __html: doctor.bio || DOCTOR_PROFILE.DEFAULT_BIO }}
                            />
                        </div>

                        {/* Extra Custom Content (Hardened) */}
                        {fullDescription && (
                            <div className="mt-12">
                                {fullDescription}
                            </div>
                        )}

                        {/* Expertise & Procedures Grid */}
                        <div id="expertise" className="space-y-8 bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl border border-white/10 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 blur-[100px] pointer-events-none group-hover:bg-fuchsia-600/20 transition-all duration-500" />
                            <h2 className="text-2xl font-black flex items-center gap-3 uppercase tracking-widest italic font-heading text-fuchsia-300">
                                <Target className="w-8 h-8 text-fuchsia-400" />
                                Clinical Mastery & Procedures
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {(doctor.procedures || []).map((proc: string, i: number) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-fuchsia-500/50 hover:bg-white/10 transition-all group/item">
                                        <div className="w-8 h-8 rounded-lg bg-fuchsia-600/20 flex items-center justify-center text-fuchsia-400 group-hover/item:bg-fuchsia-600 group-hover/item:text-white transition-all">
                                            <Search className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-bold tracking-tight text-slate-200 group-hover/item:text-white">{proc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Grid */}
                        {doctor.education && (doctor.education as any[]).length > 0 && (
                            <div id="qualifications" className="space-y-8 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-soft border border-slate-100 dark:border-slate-800">
                                <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3 uppercase tracking-widest italic font-heading border-l-4 border-fuchsia-600 pl-4">
                                    <GraduationCap className="w-8 h-8 text-fuchsia-600" />
                                    Academic Provenance
                                </h2>
                                <div className="grid sm:grid-cols-1 gap-6">
                                    {(doctor.education as any[]).map((edu: any, i: number) => {
                                        const isString = typeof edu === 'string';
                                        return (
                                            <div key={i} className="flex gap-4">
                                                <div className="h-2 w-2 rounded-full bg-fuchsia-400 mt-2.5 shrink-0 shadow-glow" />
                                                <div>
                                                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">{isString ? edu : edu.degree}</h3>
                                                    {!isString && edu.institution && <p className="text-slate-500 dark:text-slate-400 font-medium">{edu.institution}</p>}
                                                    {!isString && edu.year && <span className="inline-block mt-2 px-3 py-1 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-600 text-xs font-bold rounded-full tracking-wider">{edu.year}</span>}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Specialized Expertise Cards */}
                        <div className="grid md:grid-cols-2 gap-6 pt-12">
                            {doctor.related_services && doctor.related_services.length > 0 ? (
                                doctor.related_services.map((svc: any, idx: number) => (
                                    <ServiceCard key={idx} service={svc} variant="detail" />
                                ))
                            ) : (
                                <>
                                    <ModernCard className="bg-gradient-to-br from-fuchsia-50/50 to-white border-fuchsia-100 p-8 hover:shadow-xl transition-all group">
                                        <div className="p-4 bg-fuchsia-600 inline-block rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform">
                                            <HeartCardiogram className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{DOCTOR_EXPERTISE_FALLBACK_1.TITLE}</h3>
                                        <p className="text-slate-600 leading-relaxed font-light">{DOCTOR_EXPERTISE_FALLBACK_1.DESC}</p>
                                    </ModernCard>
                                    <ModernCard className="bg-gradient-to-br from-slate-50/50 to-white border-slate-100 dark:border-slate-700 p-8 hover:shadow-xl transition-all group">
                                        <div className="p-4 bg-slate-800 inline-block rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform">
                                            <Shield className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{DOCTOR_EXPERTISE_FALLBACK_2.TITLE}</h3>
                                        <p className="text-slate-600 leading-relaxed font-light">{DOCTOR_EXPERTISE_FALLBACK_2.DESC}</p>
                                    </ModernCard>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Profiles Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Instant Booking Sidebar */}
                        <Card className="p-8 border-none shadow-2xl shadow-fuchsia-900/10 rounded-[2rem] bg-[#002b36] text-white sticky top-24 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl" />
                            <div className="relative z-10 text-center space-y-6">
                                <div className="w-20 h-20 bg-fuchsia-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-fuchsia-500/30">
                                    <MessageCircle className="w-10 h-10 text-[#54CAD3]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{DOCTOR_PROFILE.SECTION_QUICK_BOOKING}</h3>
                                    <p className="text-fuchsia-100/60 mt-2 px-4 italic font-light text-sm">{DOCTOR_PROFILE.QUICK_BOOKING_SUBTEXT}</p>
                                </div>
                                <div className="space-y-4 pt-4">
                                    <a
                                        href={whatsappUrl}
                                        target="_blank" rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-8 py-5 bg-[#54CAD3] hover:bg-[#45b5bd] text-[#002b36] font-bold rounded-2xl transition-all shadow-xl shadow-fuchsia-500/20 text-lg hover:scale-[1.03]"
                                    >
                                        <MessageCircle className="w-6 h-6 mr-3" />
                                        {DOCTOR_PROFILE.BTN_WHATSAPP_CHAT}
                                    </a>
                                    <a
                                        href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all text-sm uppercase tracking-widest"
                                    >
                                        <Phone className="w-5 h-5 mr-3" />
                                        {DOCTOR_PROFILE.BTN_CALL_TOKEN}
                                    </a>
                                </div>
                                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-fuchsia-100/40 uppercase tracking-widest font-bold">
                                    <span>{DOCTOR_PROFILE.VERIFIED_PROFILE_TEXT}</span>
                                    <Shield className="w-4 h-4" />
                                </div>
                            </div>
                        </Card>

                        {/* Languages Section */}
                        {doctor.languages && doctor.languages.length > 0 && (
                            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-6">
                                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                    <Languages className="w-5 h-5 text-fuchsia-600" />
                                    {DOCTOR_PROFILE.SECTION_LANGUAGES}
                                </h3>
                                <div className="flex flex-wrap gap-2 text-sm font-bold uppercase tracking-wide">
                                    {doctor.languages.map((lang, i) => (
                                        <span key={i} className="px-5 py-3 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-2xl border border-slate-100/50">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="p-8 bg-slate-900 rounded-3xl text-white space-y-6">
                            <h3 className="font-bold text-xl mb-4">{DOCTOR_PROFILE.SECTION_INDIRA_STANDARDS}</h3>
                            <ul className="space-y-4">
                                {INDIRA_STANDARDS.map((item, idx) => {
                                    const IconComponent = item.icon === "Users" ? Users : item.icon === "Clock" ? Clock : Shield;
                                    return (
                                        <li key={idx} className="flex items-center gap-4 text-slate-300 text-sm">
                                            <IconComponent className="w-5 h-5 text-fuchsia-400" />
                                            {item.text}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </aside>
                </div>
            </SectionContainer>

            {/* Cross Linking Sections */}
            <section className="bg-slate-50 dark:bg-slate-800 py-24 border-y border-slate-200 dark:border-slate-700/50">
                <SectionContainer>
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="text-fuchsia-600 font-bold text-sm tracking-widest uppercase">{DOCTOR_PROFILE.SECTION_EXPERT_NETWORK}</span>
                            <h2 className="elite-section-title text-slate-900 dark:text-white mt-2">{DOCTOR_PROFILE.SECTION_OTHER_PROFILES}</h2>
                        </div>
                        <Link href={DOCTORS_DIRECTORY.PROFILE_HREF_PREFIX} className="hidden md:flex items-center gap-2 text-fuchsia-700 font-bold hover:gap-4 transition-all">
                            {DOCTOR_PROFILE.BTN_VIEW_DIRECTORY} <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {otherDoctors.slice(0, 3).map((doc, idx) => (
                            <DoctorCard key={idx} doctor={doc} variant="grid" />
                        ))}
                    </div>
                </SectionContainer>
            </section>

            <EntityFAQs
                entityType="doctor"
                entityName={doctor.name}
                entitySlug={doctor.slug}
                className="bg-white dark:bg-slate-900 py-24"
            />

            <EntityReviews
                entityType="doctor"
                entityName={doctor.name}
                entitySlug={doctor.slug}
                className="bg-slate-50/50 py-24"
            />
        </div>
    );
}

export default DoctorTemplate;
