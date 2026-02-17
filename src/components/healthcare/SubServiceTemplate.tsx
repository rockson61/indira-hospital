'use client'

import React from 'react'
import { SectionContainer } from "@/components/ui/section-container"
import { MarketingContent, MarketingContentProps } from "@/components/marketing/MarketingContent"
import { ProcedureTimeline } from "@/components/healthcare/services/ProcedureTimeline"
import { WhyChooseUs } from "@/components/trust/WhyChooseUs"
import EntityReviews from "@/components/trust/EntityReviews"
import { ServicePeopleAlsoSearchFor } from "@/components/healthcare/services/ServicePeopleAlsoSearchFor"
import { RelatedServices, RelatedServicesProps } from "@/components/healthcare/services/RelatedServices"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import {
    CheckCircle,
    Clock,
    Zap,
    Star,
    Activity,
    IndianRupee,
    ShieldCheck,
    Microscope,
    Stethoscope,
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
    Quote
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
    IndianRupee,
    Clock,
    Activity,
    Star,
    CheckCircle,
    Zap,
    ShieldCheck,
    Microscope,
    Stethoscope,
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
    Quote
}

export interface QuickFact {
    label: string
    value: string
    icon?: string // Use string to pass from Server Component
}

export interface SubServiceTemplateProps {
    title: string
    eyebrow?: string
    description: React.ReactNode
    quickFacts: QuickFact[]
    marketingContent?: MarketingContentProps
    timeline?: {
        steps: {
            title: string
            description: string
            duration?: string
        }[]
        title?: string
        description?: string
    }
    relatedServices?: RelatedServicesProps
    reviews?: {
        entityType?: 'doctor' | 'department' | 'service' | 'diagnostic' | 'location' | 'blog' | 'technology'
        entityName: string
        entitySlug: string
    }
    children?: React.ReactNode
}

export function SubServiceTemplate({
    title,
    eyebrow,
    description,
    quickFacts,
    marketingContent,
    timeline,
    relatedServices,
    reviews,
    children
}: SubServiceTemplateProps) {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <SectionContainer className="relative">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        {eyebrow && (
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-purple-200 text-sm font-semibold tracking-wider uppercase">
                                {eyebrow}
                            </span>
                        )}
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                            {title}
                        </h1>
                        <div className="text-xl text-purple-100/90 leading-relaxed max-w-3xl mx-auto">
                            {description}
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-50 font-bold px-8 shadow-xl">
                                <Link href="/book-appointment">Book Consultation</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white transition-all">
                                <Link href="tel:+917010650063">Emergency Help</Link>
                            </Button>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* Quick Facts Section - Claymorphism style */}
            <section className="-mt-12 relative z-10 px-4">
                <SectionContainer>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {quickFacts.map((fact, index) => {
                            const Icon = fact.icon ? iconMap[fact.icon] : null;
                            return (
                                <GlassCard key={index} className="p-6 text-center clay-card group hover:scale-105 transition-all duration-300">
                                    {Icon && <Icon className="w-8 h-8 mx-auto mb-3 text-purple-600 dark:text-purple-400" />}
                                    <p className="text-xs font-bold text-slate-900 dark:text-slate-300 uppercase tracking-widest mb-2">{fact.label}</p>
                                    <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">{fact.value}</p>
                                </GlassCard>
                            )
                        })}
                    </div>
                </SectionContainer>
            </section>

            {/* Main Content & Marketing */}
            <SectionContainer className="mt-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        {/* Medically Reviewed Tag */}
                        <div className="flex items-center gap-3 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-2xl border border-teal-100 dark:border-teal-800">
                            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-teal-800 dark:text-teal-300 uppercase tracking-tighter">Medically Reviewed</p>
                                <p className="text-xs text-teal-600 dark:text-teal-400">By Dr. Karan Shankar • Specialist Review Team</p>
                            </div>
                        </div>

                        {children && (
                            <article className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
                                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
                                prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
                                prose-li:text-slate-600 dark:prose-li:text-slate-300
                                prose-strong:text-slate-900 dark:prose-strong:text-white
                                prose-img:rounded-3xl prose-img:shadow-2xl
                                prose-table:border prose-table:border-slate-200 dark:prose-table:border-slate-800
                                prose-thead:bg-slate-50 dark:prose-thead:bg-slate-900
                                prose-th:px-4 prose-th:py-3 prose-td:px-4 prose-td:py-3">
                                {children}
                            </article>
                        )}

                        {marketingContent && (
                            <MarketingContent {...marketingContent} className="mt-8" />
                        )}

                        {timeline && (
                            <ProcedureTimeline
                                steps={timeline.steps}
                                title={timeline.title}
                                description={timeline.description}
                            />
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <GlassCard className="p-8 sticky top-28 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                                Quick Inquiry
                            </h3>
                            <div className="space-y-4">
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Speak with our care coordinator for pricing and appointment availability.
                                </p>
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl space-y-2">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Hotline</p>
                                    <p className="text-xl font-bold text-purple-700 dark:text-purple-400">+91 98423 24425</p>
                                </div>
                                <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 rounded-2xl text-lg shadow-lg">
                                    Get Free Call Back
                                </Button>
                                <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    4.9/5 Rating (500+ Reviews)
                                </div>
                            </div>
                        </GlassCard>


                        {/* Empty Space for alignment if needed */}
                    </aside>
                </div>
            </SectionContainer>

            {/* People Also Search For - Moved above footer */}
            <SectionContainer className="mt-12">
                <ServicePeopleAlsoSearchFor serviceName={title} />
            </SectionContainer>

            {/* Trust Section */}
            <WhyChooseUs />

            {/* Related Services */}
            {relatedServices && (
                <SectionContainer className="mt-12">
                    <RelatedServices {...relatedServices} />
                </SectionContainer>
            )}

            {/* Reviews Section */}
            {reviews && (
                <SectionContainer className="mt-16">
                    <EntityReviews
                        entityType={(reviews.entityType || "service") as any}
                        entityName={reviews.entityName}
                        entitySlug={reviews.entitySlug}
                        title={`Patient Experiences with ${reviews.entityName}`}
                        description={`Read verified experiences from patients who underwent ${reviews.entityName} at Indira Super Speciality Hospital.`}
                    />
                </SectionContainer>
            )}
        </main>
    )
}
