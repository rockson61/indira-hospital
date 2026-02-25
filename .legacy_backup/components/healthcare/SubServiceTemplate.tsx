'use client'

import React from 'react'
import Link from 'next/link'
import {
    ChevronRight,
    Phone,
    Calendar,
    CheckCircle2,
    MessageCircle,
    Stethoscope,
    Clock,
    Zap,
    Star,
    Activity,
    IndianRupee,
    ShieldCheck,
    Microscope,
    Heart,
    Siren,
    Baby,
    Dna,
    Bone,
    Eye,
    Wind,
    Apple,
    Brain,
    Scale,
    Syringe,
    Smile,
    UserCheck,
    Ear,
    Ribbon,
    Droplets,
    Cpu,
    Shield,
    MapPin,
    Sparkles,
    ArrowRight,
} from 'lucide-react'
import { SectionContainer } from '@/components/ui/section-container'
import { SectionHeader } from '@/components/ui/section-header'
import { MarketingContent, MarketingContentProps } from '@/components/marketing/MarketingContent'
import { ProcedureTimeline } from '@/components/healthcare/services/ProcedureTimeline'
import EntityReviews from '@/components/trust/EntityReviews'
import { RelatedServices, RelatedServicesProps } from '@/components/healthcare/services/RelatedServices'
import { ModernCard } from '@/components/ui/modern-card'
import { clinicConfig } from '@/lib/data/clinic-config'
import { injectInternalLinks } from '@/lib/html-linkify'

// ─── Icon Map (string keys → components) ───────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
    IndianRupee, Clock, Activity, Star, Zap, ShieldCheck, Microscope,
    Stethoscope, Heart, Siren, Baby, Dna, Bone, Eye, Wind, Apple,
    Brain, Scale, Syringe, Smile, UserCheck, Ear, Ribbon, Droplets,
    Cpu, Shield, MapPin, CheckCircle2,
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
    const phone = clinicConfig.phone
    const whatsappNumber = phone.replace(/\D/g, '')
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(`Hi, I need information about ${title} at Indira Hospital.`)}`
    const bookingUrl = '/book-appointment'

    // ── JSON-LD ──────────────────────────────────────────────────────────────
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://indira-hospital.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://indira-hospital.vercel.app/services' },
            ...(departmentName && departmentSlug
                ? [{ '@type': 'ListItem', position: 3, name: departmentName, item: `https://indira-hospital.vercel.app/services/${departmentSlug}` }]
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
        <div className="min-h-screen bg-gray-50">
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureJsonLd) }} />

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb" className="flex items-center flex-wrap gap-1 text-sm text-purple-200/70 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        {departmentName && departmentSlug && (
                            <>
                                <ChevronRight className="w-4 h-4" />
                                <Link href={`/services/${departmentSlug}`} className="hover:text-white transition-colors">
                                    {departmentName}
                                </Link>
                            </>
                        )}
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white font-medium">{title}</span>
                    </nav>

                    {/* Headline */}
                    {eyebrow && (
                        <p className="text-purple-200 font-medium mb-3 uppercase tracking-wider text-sm flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            {eyebrow}
                        </p>
                    )}
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{title}</h1>
                    <div className="text-lg text-purple-100 max-w-2xl leading-relaxed">
                        {description}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link
                            href={bookingUrl}
                            className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-bold rounded-xl transition-all shadow-lg hover:bg-purple-50 hover:scale-105 active:scale-95"
                        >
                            <Calendar className="h-5 w-5 mr-2" />
                            Book Consultation
                        </Link>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl transition-all border border-white/20 hover:scale-105"
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
                            index === 0 ? IndianRupee : index === 1 ? Clock : index === 2 ? ShieldCheck : Star
                        )
                        return (
                            <div key={index} className="bg-white rounded-xl shadow-md p-5 text-center">
                                {Icon && (
                                    <div className="flex justify-center mb-2">
                                        <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                    </div>
                                )}
                                <p className="text-xl font-bold text-purple-700">{fact.value}</p>
                                <p className="text-sm text-gray-500 mt-1">{fact.label}</p>
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
                                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
                                prose-h2:text-3xl prose-h2:border-l-4 prose-h2:border-purple-500 prose-h2:pl-4
                                prose-p:text-gray-600 prose-p:leading-relaxed
                                prose-strong:text-slate-800
                                prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
                                prose-img:rounded-2xl prose-img:shadow-xl">
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
                            <ModernCard className="p-8 bg-white shadow-xl shadow-slate-200/50 border-none">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-purple-600" />
                                    Book an Appointment
                                </h3>
                                <div className="space-y-4">
                                    <Link
                                        href={bookingUrl}
                                        className="w-full inline-flex items-center justify-center px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] text-base"
                                    >
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Book Consultation
                                    </Link>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all text-base"
                                    >
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        WhatsApp Now
                                    </a>
                                    <a
                                        href={`tel:${phone.replace(/\s+/g, '')}`}
                                        className="w-full inline-flex items-center justify-center px-6 py-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold rounded-xl transition-all border border-gray-200 text-base"
                                    >
                                        <Phone className="w-5 h-5 mr-2 text-purple-600" />
                                        {phone}
                                    </a>
                                </div>
                            </ModernCard>

                            {/* Department Schedule Card */}
                            <ModernCard className="p-8 bg-white border-none shadow-md">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-purple-600" />
                                    OPD Schedule
                                </h3>
                                <div className="space-y-0 divide-y divide-gray-100">
                                    {[
                                        { day: 'Monday — Friday', time: '24 Hours' },
                                        { day: 'Saturday', time: '24 Hours' },
                                        { day: 'Emergency', time: 'Always Open', emergency: true },
                                    ].map((row) => (
                                        <div key={row.day} className="flex justify-between items-center py-3">
                                            <span className="text-gray-600 font-medium text-sm">{row.day}</span>
                                            {row.emergency ? (
                                                <span className="px-2.5 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">ALWAYS OPEN</span>
                                            ) : (
                                                <span className="font-bold text-purple-700 text-sm">{row.time}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </ModernCard>

                            {/* Why Indira card */}
                            <ModernCard className="p-8 bg-gradient-to-br from-purple-900 to-indigo-900 border-none shadow-xl text-white">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
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
                                        <li key={i} className="flex items-center gap-3 text-sm text-purple-100">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
                <section className="bg-gray-50 py-20 border-b border-gray-100">
                    <SectionContainer>
                        <RelatedServices {...relatedServices} />
                    </SectionContainer>
                </section>
            )}

            {/* ── Reviews ──────────────────────────────────────────────────── */}
            {reviews && (
                <section className="py-20 bg-white">
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
            <section className="bg-[#002b36] py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
                <SectionContainer>
                    <div className="max-w-4xl mx-auto text-center space-y-8 relative">
                        <h2 className="text-4xl font-bold text-white">
                            Get Expert Care for{' '}
                            <span className="text-purple-300">{title}</span>
                        </h2>
                        <p className="text-xl text-teal-100/70 font-light">
                            Trusted by patients across Vellore and Tamil Nadu for advanced speciality care.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 pt-4">
                            <Link
                                href={bookingUrl}
                                className="px-10 py-5 bg-white text-[#002b36] font-bold rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95 text-lg inline-flex items-center gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                Book Appointment
                            </Link>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl transition-all border border-white/10 hover:scale-105 text-lg inline-flex items-center gap-2"
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
