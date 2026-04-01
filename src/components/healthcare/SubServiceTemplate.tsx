import React from 'react'
import Link from 'next/link'
import { ChevronRight, Phone, Calendar, CheckCircle2, MessageCircle, Clock, Star, IndianRupee, Siren, Dna, Wind, Apple, Scale, UserCheck, Ear, Ribbon, Cpu, MapPin, Sparkles, ArrowRight, Shield, Zap, Bed, Target, Globe, AlertCircle, Syringe as SyringeLucide, HandPlatter, Droplets } from "lucide-react"
import { Stethoscope, Electricity, HeartCardiogram, Microscope, Heart, Baby0203m, Orthopaedics, Eye, Neurology, Syringe, Happy, BloodDrop } from "healthicons-react/outline";
import { SectionContainer } from '@/components/ui/section-container'
import { SectionHeader } from '@/components/ui/section-header'
import { MarketingContent, MarketingContentProps, MarketingFAQ } from '@/components/marketing/MarketingContent'
import { ProcedureTimeline } from '@/components/healthcare/services/ProcedureTimeline'
import EntityReviews from '@/components/trust/EntityReviews'
import { RelatedServices, RelatedServicesProps } from '@/components/healthcare/services/RelatedServices'
import { ModernCard } from '@/components/ui/modern-card'
import { siteConfig } from "@/config/site";
import { injectInternalLinks } from '@/lib/html-linkify'
import { SurgicalVideoBank } from '@/components/marketing/SurgicalVideoBank'
import { HealthCalculators } from '@/components/marketing/HealthCalculators'
import { AvailabilityCTA } from '@/components/marketing/AvailabilityTicker'
import { ServiceQuickSummary } from '@/components/healthcare/services/ServiceQuickSummary'
import { ProcedureComparison } from '@/components/healthcare/services/ProcedureComparison'
import { TreatmentSecondaryNav } from '@/components/healthcare/services/TreatmentSecondaryNav'
import { ConversionGrid } from '@/components/healthcare/services/ConversionGrid'
import { LocalSEOFooter } from '@/components/healthcare/LocalSEOFooter'
import { DoctorCard } from '@/components/entities/DoctorCard'
import type { Doctor } from '@/data/doctors'

// ─── Icon Map (string keys → components) ───────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
    IndianRupee, Clock, HeartCardiogram, Star, Electricity, Shield, Microscope,
    Stethoscope, Heart, Siren, Baby0203m, Dna, Orthopaedics, Eye, Wind, Apple,
    Neurology, Scale, Syringe, Happy, UserCheck, Ear, Ribbon, BloodDrop,
    Cpu, MapPin, CheckCircle2, Zap, Bed, Target, Globe, AlertCircle, HandPlatter, Droplets,
    CheckCircle: CheckCircle2,
    SyringeLucide: SyringeLucide,
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
    quickFacts?: QuickFact[]
    slug?: string
    parentServiceSlug?: string
    marketingContent?: MarketingContentProps & {
        features?: { title: string; description: string; icon?: string }[]
        benefits?: { title: string; description: string; icon?: string }[]
        faq?: MarketingFAQ[]
    }
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
    showVideoBank?: boolean
    showHealthCalculators?: boolean
    showAvailabilityCTA?: boolean
    duration?: string
    hospitalStay?: string
    recoveryTime?: string
    anesthesia?: string
    showComparison?: boolean
    fullDescription?: React.ReactNode
    specialists?: Doctor[]
    children?: React.ReactNode
}

// ─── Component ───────────────────────────────────────────────────────────────
export function SubServiceTemplate({
    title,
    eyebrow,
    description,
    quickFacts = [],
    marketingContent,
    timeline,
    relatedServices,
    reviews,
    departmentName,
    departmentSlug,
    showVideoBank,
    showHealthCalculators,
    showAvailabilityCTA,
    children,
    slug,
    parentServiceSlug,
    duration,
    hospitalStay,
    recoveryTime,
    anesthesia,
    showComparison = true,
    fullDescription,
    specialists = [],
}: SubServiceTemplateProps) {
    const isDental = title.toLowerCase().includes('dental') || title.toLowerCase().includes('dentistry') || eyebrow?.toLowerCase().includes('dental') || departmentName?.toLowerCase().includes('dental');
    const contactPhone = isDental ? "+91 7010650063" : siteConfig.contact.phone;
    const whatsappUrl = `https://wa.me/${contactPhone.replace(/\s+/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in ${title}. Can I get more details?`)}`;
    const bookingUrl = `/book-appointment?service=${encodeURIComponent(title)}&dept=${encodeURIComponent(departmentName || 'General')}`;

    // Auto-populate specialists from global doctor data if not provided
    const displaySpecialists = specialists.length > 0 
        ? specialists 
        : (departmentSlug 
            ? (require('@/data/doctors').doctors as Doctor[]).filter(d => 
                d.departmentId === departmentSlug || 
                (d.specialties && d.specialties.some(s => s.toLowerCase().includes(departmentSlug.toLowerCase())))
              ).slice(0, 2)
            : []);

    // ── Data Transformation ──────────────────────────────────────────────────
    // Merge specialized clinical data (features/benefits) into the standard MarketingContent components format
    const processedMarketingContent: MarketingContentProps | undefined = marketingContent ? {
        ...marketingContent,
        sections: [
            ...(marketingContent.sections || []),
            ...(marketingContent.features ? [{
                id: 'clinical-features',
                heading: 'Procedure Excellence & Features',
                highlights: marketingContent.features.map(f => ({ title: f.title, description: f.description }))
            }] : []),
            ...(marketingContent.benefits ? [{
                id: 'patient-benefits',
                heading: 'Patient Benefits & Outcomes',
                highlights: marketingContent.benefits.map(b => ({ title: b.title, description: b.description }))
            }] : []),
        ],
        faqs: marketingContent.faqs || marketingContent.faq
    } : undefined;

    // ── JSON-LD ──────────────────────────────────────────────────────────────
    const baseUrl = siteConfig.url.endsWith('/') ? siteConfig.url : `${siteConfig.url}/`;
    const canonicalUrl = `${baseUrl}${reviews?.entitySlug || slug || ''}`;

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Elite Treatments', item: `${baseUrl}doctor/near-me/treat` },
            ...(departmentName && departmentSlug
                ? [{ '@type': 'ListItem', position: 3, name: `Indira Elite ${departmentName}`, item: `${baseUrl}doctor/near-me/treat/${departmentSlug}` }]
                : []),
            { '@type': 'ListItem', position: departmentSlug ? 4 : 3, name: title, item: canonicalUrl },
        ],
    }

    const procedureJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: title,
        url: canonicalUrl,
        description: `Advanced ${title} surgery and medical care at Indira Super Speciality Hospital, Vellore. Highly successful outcomes with senior surgical experts.`,
        procedureType: { '@type': 'MedicalProcedureType', name: eyebrow || 'Medical Procedure' },
        relevantSpecialty: { '@type': 'MedicalSpecialty', name: departmentName || 'Surgery' },
        performer: {
            '@type': 'MedicalOrganization',
            name: 'Indira Super Speciality Hospital',
            logo: `${baseUrl}logo.png`,
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Vellore',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
            },
        },
    }

    // FAQ Schema
    const faqJsonLd = processedMarketingContent?.faqs ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: processedMarketingContent.faqs.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer
            }
        }))
    } : null;

    // HowTo Schema (for Procedure Timeline)
    const howToJsonLd = timeline ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: timeline.title || `Procedure Steps for ${title}`,
        description: timeline.description || `The patient journey for ${title} at Indira Hospital.`,
        step: timeline.steps.map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: s.title,
            itemListElement: [{
                '@type': 'HowToDirection',
                text: s.description
            }]
        }))
    } : null;

    return (
        <div className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950">
            {/* Treatment Secondary Nav (Sticky) */}
            <TreatmentSecondaryNav treatmentName={title} whatsappUrl={whatsappUrl} />

            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureJsonLd) }} />
            {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
            {howToJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />}

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className="relative pt-44 pb-20 lg:pt-52 lg:pb-28 overflow-hidden bg-[#FAFAFA] dark:bg-slate-950">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 hidden md:block blur-[120px] will-change-transform transform-gpu opacity-60" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 hidden md:block blur-[120px] will-change-transform transform-gpu opacity-50" />
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
                    <h1 className="elite-hero-title font-heading mb-4 text-slate-900 dark:text-white">{title}</h1>
                    <div className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
                        {description}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link
                            href={bookingUrl}
                            className="inline-flex items-center px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full transition-all shadow-float hover:-translate-y-1 hover:bg-emerald-600 dark:hover:bg-emerald-200"
                        >
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Elite Consultation
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
            <section id="pricing" className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-10">
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

                        {/* Quick Summary Card */}
                        <ServiceQuickSummary 
                            duration={duration} 
                            hospitalStay={hospitalStay} 
                            recoveryTime={recoveryTime} 
                            anesthesia={anesthesia} 
                        />

                        {/* Conversion Grid (Medfin Inspired) */}
                        <ConversionGrid whatsappUrl={whatsappUrl} />

                        {/* Benefits Trust Bar */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-slate-100 dark:border-slate-800">
                            {[
                                { title: 'Free Pick-up & Drop', desc: 'Complimentary cab for all surgery patients in Vellore.', icon: MapPin },
                                { title: 'Insurance Concierge', desc: 'Full assistance with TPA & Cashless paperwork.', icon: Shield },
                                { title: 'Post-Op Care', desc: 'Free follow-up consultations for 30 days.', icon: UserCheck },
                            ].map((benefit, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-600 shrink-0">
                                        <benefit.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{benefit.title}</p>
                                        <p className="text-xs text-slate-500">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Elite Specialists Section */}
                        {displaySpecialists.length > 0 && (
                            <div className="mt-20 pt-20 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                                    <div>
                                        <span className="text-fuchsia-600 font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                                            <Sparkles className="w-4 h-4" /> Leading Clinical Expertise
                                        </span>
                                        <h2 className="elite-section-title text-slate-900 dark:text-white mt-2">Consult Our Senior Specialists</h2>
                                        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl font-medium">
                                            Hand-picked senior specialists with international training and a combined experience of over 50,000 successful procedures.
                                        </p>
                                    </div>
                                    <Link href="/doctor" className="group flex items-center gap-2 text-fuchsia-700 font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs">
                                        View All Specialists <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {displaySpecialists.map((doc, idx) => (
                                        <DoctorCard key={idx} doctor={doc} variant="list" />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Elite Full Description Section */}
                        {fullDescription && (
                            <div id="clinical-deep-dive" className="elite-content-wrapper">
                                {fullDescription}
                            </div>
                        )}

                        {/* Children (rich prose content) */}
                        {children && (
                            <article id="about" className="prose prose-lg prose-slate max-w-none
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

                        {/* Procedure Comparison Table */}
                        {showComparison && (
                            <ProcedureComparison />
                        )}

                        {/* Marketing Content Sections */}
                        {processedMarketingContent && (
                            <div id="faq">
                                <MarketingContent {...processedMarketingContent} className="mt-4" />
                            </div>
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
                                    <MessageCircle className="w-5 h-5 text-fuchsia-600" />
                                    Elite Consultation
                                </h3>
                                <div className="space-y-4">
                                    <Link
                                        href={bookingUrl}
                                        className="w-full inline-flex items-center justify-center px-6 py-4 bg-slate-900 dark:bg-white hover:bg-emerald-600 dark:hover:bg-emerald-200 text-white dark:text-slate-900 font-bold rounded-full transition-all shadow-sm text-base"
                                    >
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        Elite Consultation
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



            {/* ── Surgical Video Bank ─────────────────────────────────────────── */}
            {showVideoBank && (
                <section className="bg-slate-50 dark:bg-slate-950/50 py-20 border-t border-slate-100 dark:border-slate-800">
                    <SectionContainer>
                        <SurgicalVideoBank />
                    </SectionContainer>
                </section>
            )}

            {/* ── Clinical Health Tools ─────────────────────────────────────────── */}
            {showHealthCalculators && (
                <section className="bg-white dark:bg-slate-900 py-20 border-t border-slate-100 dark:border-slate-800">
                    <SectionContainer>
                        <HealthCalculators />
                    </SectionContainer>
                </section>
            )}

            {/* ── Elite Availability ─────────────────────────────────────────── */}
            {showAvailabilityCTA && (
                <section className="bg-slate-900 py-16">
                    <SectionContainer>
                        <AvailabilityCTA />
                    </SectionContainer>
                </section>
            )}

            {/* ── Location Map ──────────────────────────────────────────────── */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
                <SectionContainer>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-primary italic">
                                Visit Our Specialty Center in Vellore
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                Our center is located in the heart of Vellore, providing easy access for patients across Tamil Nadu. Equipped with modern diagnostic and surgical infrastructure, we ensure world-class care in a compassionate environment.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-fuchsia-600 shrink-0" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white">Indira Super Speciality Hospital</p>
                                        <p className="text-slate-500 text-sm">Vellore, Tamil Nadu, India</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-lg">
                                    <Phone className="w-6 h-6 text-fuchsia-600 shrink-0" />
                                    <p className="font-bold text-slate-900 dark:text-white">{contactPhone}</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="https://maps.app.goo.gl/3bad47c4d07af16f:0xbb5e21b061736da6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-bold transition-all hover:bg-fuchsia-600 dark:hover:bg-fuchsia-100 shadow-md"
                                >
                                    Get Directions <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-bold transition-all shadow-md"
                                >
                                    <MessageCircle className="w-5 h-5" /> WhatsApp Support
                                </a>
                            </div>
                        </div>
                        <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 h-[450px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4192.060018581216!2d79.1370592!3d12.953442599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47c4d07af16f%3A0xbb5e21b061736da6!2sDr.%20Karan%20Shankar%20%7C%20Best%20Colorectal%2C%20Laparoscopic%2C%20Gastro%20%26%20General%20Surgeon%20In%20Vellore!5e1!3m2!1sen!2sin!4v1774805669927!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* ── Related Services ──────────────────────────────────────────── */}
            {relatedServices && (
                <section id="related-treatments" className="bg-[#FAFAFA] dark:bg-slate-950 py-20 border-b border-slate-100 dark:border-slate-700">
                    <SectionContainer>
                        <RelatedServices {...relatedServices} />
                    </SectionContainer>
                </section>
            )}

            {/* ── Reviews ──────────────────────────────────────────────────── */}
            {reviews && (
                <section id="surgeons" className="py-20 bg-white dark:bg-slate-900">
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
                <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu" />
                <SectionContainer>
                    <div className="max-w-4xl mx-auto text-center space-y-8 relative">
                        <h2 className="elite-section-title text-white">
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
                                <MessageCircle className="w-5 h-5" />
                                Elite Consultation
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
            <LocalSEOFooter />
        </div>
    )
}
