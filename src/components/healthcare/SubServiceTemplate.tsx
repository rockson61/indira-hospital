'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Phone, Calendar, CheckCircle2, MessageCircle, Clock, Star, IndianRupee, Siren, Dna, Wind, Apple, Scale, UserCheck, Ear, Ribbon, Cpu, MapPin, Sparkles, ArrowRight, Shield } from "lucide-react"
    ;
import { Stethoscope, Electricity, HeartCardiogram, Microscope, Heart, Baby0203m, Orthopaedics, Eye, Neurology, Syringe, Happy, BloodDrop } from "healthicons-react/outline";
import { SectionContainer } from '@/components/ui/section-container'
import { SectionHeader } from '@/components/ui/section-header'
import { MarketingContent, MarketingContentProps } from '@/components/marketing/MarketingContent'
import { ProcedureTimeline } from '@/components/healthcare/services/ProcedureTimeline'
import EntityReviews from '@/components/trust/EntityReviews'
import { RelatedServices, RelatedServicesProps } from '@/components/healthcare/services/RelatedServices'
import { ModernCard } from '@/components/ui/modern-card'
import { siteConfig } from "@/config/site";
import { injectInternalLinks } from '@/lib/html-linkify'

// ─── Icon Map (string keys → components) ───────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
    IndianRupee, Clock, HeartCardiogram, Star, Electricity, Shield, Microscope,
    Stethoscope, Heart, Siren, Baby0203m, Dna, Orthopaedics, Eye, Wind, Apple,
    Neurology, Scale, Syringe, Happy, UserCheck, Ear, Ribbon, BloodDrop,
    Cpu, MapPin, CheckCircle2,
}

// ─── Types ──────────────────────────────────────────────────────────────────
export interface QuickFact {
    label: string
    value: string
    icon?: string
}

export interface SubServiceTemplateProps {
    title: string
    eyebrow?: string
    description: React.ReactNode
    quickFacts: QuickFact[]
    marketingContent?: MarketingContentProps
    timeline?: {
        steps: { title: string; description: string; duration?: string }[]
        title?: string
        description?: string
    }
    relatedServices?: RelatedServicesProps
    reviews?: {
        entityType?: 'doctor' | 'department' | 'service' | 'diagnostic' | 'location' | 'blog' | 'technology'
        entityName: string
        entitySlug: string
    }
    /** Department name shown in breadcrumb, e.g. "Obstetrics & Gynaecology" */
    departmentName?: string
    /** Department URL slug, e.g. "obstetrics-gynaecology" */
    departmentSlug?: string
    children?: React.ReactNode
}

// ─── Component ───────────────────────────────────────────────────────────────
export function SubServiceTemplate({
    title,
    eyebrow,
    description,
    quickFacts,
    marketingContent,
    timeline,
    relatedServices,
    reviews,
    departmentName,
    departmentSlug,
    children,
}: SubServiceTemplateProps) {
    const isDental = title.toLowerCase().includes('dental') || title.toLowerCase().includes('dentistry') || eyebrow?.toLowerCase().includes('dental') || departmentName?.toLowerCase().includes('dental');
    const contactPhone = isDental ? "+91 7010650063" : siteConfig.contact.phone;
    const whatsappUrl = `https://wa.me/${contactPhone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi, I need information about ${title} at Indira Hospital.`)}`;
    const bookingUrl = '/book-appointment'

    // ── JSON-LD ──────────────────────────────────────────────────────────────
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://indira-hospital.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://indira-hospital.vercel.app/doctor/near-me/treat' },
            ...(departmentName && departmentSlug
                ? [{ '@type': 'ListItem', position: 3, name: departmentName, item: `https://indira-hospital.vercel.app/doctor/near-me/treat/${departmentSlug}` }]
                : []),
            { '@type': 'ListItem', position: departmentSlug ? 4 : 3, name: title },
        ],
    }

    const procedureJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: title,
        description: `Expert ${title} treatment at Indira Super Speciality Hospital, Vellore.`,
        procedureType: { '@type': 'MedicalProcedureType', name: eyebrow || 'Medical Procedure' },
        performer: {
            '@type': 'MedicalOrganization',
            name: 'Indira Super Speciality Hospital',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Vellore',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
            },
        },
    }

    return (
        <div className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950">
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureJsonLd) }} />

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className="relative pt-44 pb-20 lg:pt-52 lg:pb-28 overflow-hidden bg-[#FAFAFA] dark:bg-slate-950">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 hidden md:block blur-[120px] opacity-60" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 hidden md:block blur-[120px] opacity-50" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb" className="flex items-center flex-wrap gap-1 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-fuchsia-600 transition-colors font-medium">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/doctor/near-me/treat" className="hover:text-fuchsia-600 transition-colors font-medium">Treatments</Link>
                        {departmentName && departmentSlug && (
                            <>
                                <ChevronRight className="w-4 h-4" />
                                <Link href={`/doctor/near-me/treat/${departmentSlug}`} className="hover:text-fuchsia-600 transition-colors font-medium">
                                    {departmentName}
                                </Link>
                            </>
                        )}
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 dark:text-white font-bold">{title}</span>
                    </nav>

                    {/* Headline */}
                    {eyebrow && (
                        <p className="text-fuchsia-600 font-bold mb-3 uppercase tracking-widest text-sm flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            {eyebrow}
                        </p>
                    )}
                    <h1 className="text-5xl sm:text-6xl font-heading font-black tracking-tight mb-4 text-slate-900 dark:text-white">{title}</h1>
                    <div className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
                        {description}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link
                            href={bookingUrl}
                            className="inline-flex items-center px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full transition-all shadow-float hover:-translate-y-1 hover:bg-fuchsia-700 dark:hover:bg-fuchsia-200"
                        >
                            <Calendar className="h-5 w-5 mr-2" />
                            Book Consultation
                        </Link>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-10 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-full transition-all border border-slate-200 dark:border-slate-700 shadow-sm hover:-translate-y-1"
                        >
                            <MessageCircle className="h-5 w-5 mr-2" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Quick Facts Bar ───────────────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-10">
                <div className={`grid gap-4 ${quickFacts.length <= 2 ? 'grid-cols-2' : quickFacts.length === 3 ? 'grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
                    {quickFacts.map((fact, index) => {
                        const Icon = fact.icon ? iconMap[fact.icon] : (
                            index === 0 ? IndianRupee : index === 1 ? Clock : index === 2 ? Shield : Star
                        )
                        return (
                            <div key={index} className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-soft border border-slate-100 dark:border-slate-700 p-6 text-center">
                                {Icon && (
                                    <div className="flex justify-center mb-2">
                                        <div className="w-10 h-10 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center text-fuchsia-600">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                    </div>
                                )}
                                <p className="text-xl font-heading font-black text-slate-900 dark:text-white">{fact.value}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-bold mt-1 uppercase tracking-wider">{fact.label}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* ── Main Content + Sidebar ────────────────────────────────────── */}
            <SectionContainer className="py-16">
                <div className="grid lg:grid-cols-12 gap-16">

                    {/* Main column */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Children (rich prose content) */}
                        {children && (
                            <article className="prose prose-lg prose-slate max-w-none
                                prose-headings:font-heading prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 dark:text-white
                                prose-h2:text-3xl prose-h2:border-l-4 prose-h2:border-fuchsia-500 prose-h2:pl-4
                                prose-p:text-slate-600 prose-p:leading-relaxed
                                prose-strong:text-slate-800 dark:text-slate-100
                                prose-a:text-fuchsia-600 prose-a:no-underline hover:prose-a:underline
                                prose-img:rounded-[2rem] prose-img:shadow-xl">
                                {typeof children === 'string' ? (
                                    <div dangerouslySetInnerHTML={{ __html: injectInternalLinks(children) }} />
                                ) : (
                                    children
                                )}
                            </article>
                        )}

                        {/* Marketing Content Sections */}
                        {marketingContent && (
                            <MarketingContent {...marketingContent} className="mt-4" />
                        )}

                        {/* Procedure Timeline */}
                        {timeline && (
                            <ProcedureTimeline
                                steps={timeline.steps}
                                title={timeline.title}
                                description={timeline.description}
                            />
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-24 space-y-6">

                            {/* Appointment Card */}
                            <ModernCard className="p-8 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 border-none">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-fuchsia-600" />
                                    Book an Appointment
                                </h3>
                                <div className="space-y-4">
                                    <Link
                                        href={bookingUrl}
                                        className="w-full inline-flex items-center justify-center px-6 py-4 bg-slate-900 dark:bg-white hover:bg-fuchsia-700 dark:hover:bg-fuchsia-200 text-white dark:text-slate-900 font-bold rounded-full transition-all shadow-sm text-base"
                                    >
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Book Consultation
                                    </Link>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-full transition-all text-base"
                                    >
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        WhatsApp Now
                                    </a>
                                    <a
                                        href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                                        className="w-full inline-flex items-center justify-center px-6 py-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-full transition-all border border-slate-100 dark:border-slate-700 text-base"
                                    >
                                        <Phone className="w-5 h-5 mr-2 text-fuchsia-600" />
                                        {contactPhone}
                                    </a>
                                </div>
                            </ModernCard>

                            {/* Department Schedule Card */}
                            <ModernCard className="p-8 bg-white dark:bg-slate-900 border-none shadow-md">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-fuchsia-600" />
                                    OPD Schedule
                                </h3>
                                <div className="space-y-0 divide-y divide-gray-100 dark:divide-slate-700">
                                    {[
                                        { day: 'Monday — Friday', time: '24 Hours' },
                                        { day: 'Saturday', time: '24 Hours' },
                                        { day: 'Emergency', time: 'Always Open', emergency: true },
                                    ].map((row) => (
                                        <div key={row.day} className="flex justify-between items-center py-3">
                                            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">{row.day}</span>
                                            {row.emergency ? (
                                                <span className="px-2.5 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">ALWAYS OPEN</span>
                                            ) : (
                                                <span className="font-bold text-fuchsia-700 text-sm">{row.time}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </ModernCard>

                            {/* Why Indira card */}
                            <ModernCard className="p-8 bg-slate-900 border-none shadow-xl text-white rounded-[2rem]">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-pink-400" />
                                    Why Indira Hospital?
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        'NABH Accredited Hospital',
                                        'Expert Senior Specialists',
                                        'Affordable & Transparent Pricing',
                                        'Empanelled with 50+ Insurers',
                                        '24/7 Emergency & ICU Care',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-fuchsia-100">
                                            <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ModernCard>
                        </div>
                    </aside>
                </div>
            </SectionContainer>



            {/* ── Related Services ──────────────────────────────────────────── */}
            {relatedServices && (
                <section className="bg-[#FAFAFA] dark:bg-slate-950 py-20 border-b border-slate-100 dark:border-slate-700">
                    <SectionContainer>
                        <RelatedServices {...relatedServices} />
                    </SectionContainer>
                </section>
            )}

            {/* ── Reviews ──────────────────────────────────────────────────── */}
            {reviews && (
                <section className="py-20 bg-white dark:bg-slate-900">
                    <SectionContainer>
                        <EntityReviews
                            entityType={(reviews.entityType || 'department') as any}
                            entityName={reviews.entityName}
                            entitySlug={reviews.entitySlug}
                            title={`Patient Stories: ${reviews.entityName}`}
                            description={`See how our patients from Vellore and surrounding districts regained their health.`}
                        />
                    </SectionContainer>
                </section>
            )}

            {/* ── Final CTA ─────────────────────────────────────────────────── */}
            <section className="bg-[#002b36] dark:bg-slate-900 py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px]" />
                <SectionContainer>
                    <div className="max-w-4xl mx-auto text-center space-y-8 relative">
                        <h2 className="text-4xl font-bold text-white">
                            Get Expert Care for{' '}
                            <span className="text-fuchsia-400">{title}</span>
                        </h2>
                        <p className="text-xl text-fuchsia-100/70 font-light">
                            Trusted by patients across Vellore and Tamil Nadu for advanced speciality care.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 pt-4">
                            <Link
                                href={bookingUrl}
                                className="px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-full transition-all shadow-float hover:-translate-y-1 text-lg inline-flex items-center gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                Book Appointment
                            </Link>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-bold rounded-full transition-all border border-white/10 hover:-translate-y-1 text-lg inline-flex items-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Chat
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </div>
    )
}
