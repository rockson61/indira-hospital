import React from "react"
import { notFound } from "next/navigation"
import { getDiagnosticBySlug } from "@/lib/api"
import { Diagnostic } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { AlertCircle, Beaker, CheckCircle2, Clock, Home, MapPin, MessageCircle, Phone, Share2, Star } from "lucide-react"
import { BloodDrop } from "healthicons-react/outline";
import type { Metadata } from "next"
import EntityReviews from "@/components/trust/EntityReviews"
import EntityFAQs from "@/components/trust/EntityFAQs"

import { siteConfig } from "@/config/site"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const test = await getDiagnosticBySlug(slug) as any;
    if (!test) return {};
    return {
        title: test.seo_title || `${test.name} — Indira Hospital Vellore`,
        description: test.seo_description || `Book ${test.name} at Indira Hospital Vellore. ${test.report_time ? `Reports in ${test.report_time}.` : ''} ${test.price ? `Price: ₹${test.price}.` : ''}`,
    };
}

export default async function DiagnosticTestPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const test = await getDiagnosticBySlug(slug) as Diagnostic | null;

    if (!test) {
        notFound();
    }

    const usedToDiagnose = typeof test.used_to_diagnose === 'string'
        ? JSON.parse(test.used_to_diagnose)
        : test.used_to_diagnose || [];

    return (
        <main className="min-h-screen pb-20">
            {/* 1. Hero / Header */}
            <div className="bg-slate-50 dark:bg-slate-800 border-b py-12">
                <SectionContainer>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <span className="inline-block px-3 py-1 bg-fuchsia-100 text-fuchsia-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                                {test.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{test.name}</h1>
                            <p className="text-muted-foreground max-w-2xl">
                                {test.short_description || test.description?.replace(/<[^>]+>/g, '').slice(0, 150) || `Comprehensive ${test.name} with accurate reporting and quick turnaround time.`}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border shadow-sm min-w-[300px]">
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-sm text-muted-foreground">Price:</span>
                                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {test.price ? `₹${test.price}` : 'Call for Price'}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                <Clock className="w-4 h-4" />
                                Report in {test.report_time || '24 Hours'}
                            </div>

                            {/* Quick info badges */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {test.home_collection && (
                                    <span className="flex items-center gap-1 px-2 py-1 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 text-xs rounded-full">
                                        <Home className="w-3 h-3" /> Home Collection
                                    </span>
                                )}
                                {test.fasting_required && (
                                    <span className="flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full">
                                        Fasting Required
                                    </span>
                                )}
                                {test.sample_type && test.sample_type !== 'N/A - Imaging' && (
                                    <span className="flex items-center gap-1 px-2 py-1 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 text-xs rounded-full">
                                        <BloodDrop className="w-3 h-3" /> {test.sample_type}
                                    </span>
                                )}
                                {test.parameters_count && test.parameters_count > 0 && (
                                    <span className="flex items-center gap-1 px-2 py-1 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 text-xs rounded-full">
                                        <Beaker className="w-3 h-3" /> {test.parameters_count} parameters
                                    </span>
                                )}
                            </div>

                            <div className="space-y-3">
                                <Button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 h-14 rounded-2xl" asChild>
                                    <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I want to book a ${test.name} diagnostic test.`)}`} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        Book via WhatsApp
                                    </a>
                                </Button>
                                {test.home_collection && (
                                    <Button variant="outline" className="w-full h-14 rounded-2xl" asChild>
                                        <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I want home sample collection for ${test.name}.`)}`} target="_blank" rel="noopener noreferrer">
                                            Home Collection
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </div>

            {/* 2. Details & Prep */}
            <SectionContainer className="py-12">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        {/* Description */}
                        {test.description && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">About This Test</h2>
                                <div
                                    className="prose max-w-none"
                                    dangerouslySetInnerHTML={{ __html: test.description }}
                                />
                            </div>
                        )}

                        {/* Preparation */}
                        <div className="bg-amber-50 border border-amber-100 p-6 rounded-xl">
                            <h2 className="text-xl font-bold text-amber-900 flex items-center gap-2 mb-4">
                                <AlertCircle className="w-5 h-5" />
                                Preparation Instructions
                            </h2>
                            <div
                                className="prose prose-amber max-w-none"
                                dangerouslySetInnerHTML={{ __html: test.preparation_instructions || '<p>No specific preparation required.</p>' }}
                            />
                        </div>

                        {/* Normal Range */}
                        {test.normal_range && (
                            <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                                <h2 className="text-xl font-bold text-green-900 mb-3">Normal Range</h2>
                                <p className="text-green-800">{test.normal_range}</p>
                            </div>
                        )}

                        {/* Conditions detected */}
                        {usedToDiagnose.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Conditions Detected</h2>
                                <div className="flex flex-wrap gap-2">
                                    {usedToDiagnose.map((condition: string) => (
                                        <span key={condition} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full text-sm">
                                            {condition}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Why Choose Us */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Why Choose Indira Diagnostics?</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold">NABL Accredited Labs</h3>
                                        <p className="text-sm text-muted-foreground">Highest quality standards and accurate results.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold">Latest Technology</h3>
                                        <p className="text-sm text-muted-foreground">Advanced 1.5T MRI and fully automated analyzers.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold">Expert Pathologists</h3>
                                        <p className="text-sm text-muted-foreground">Reports verified by senior consultants.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold">Digital Reports</h3>
                                        <p className="text-sm text-muted-foreground">Access your reports online or via WhatsApp.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Quick Contact */}
                    <div className="space-y-6">
                        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border">
                            <h3 className="font-bold mb-4">Need Help?</h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Not sure which test to book? Our support team is here to guide you.
                            </p>
                                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3">
                                    <Phone className="w-4 h-4" />
                                    {siteConfig.contact.phone}
                                </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 space-y-16">
                    <EntityFAQs
                        entityType="diagnostic"
                        entityName={test.name}
                        entitySlug={slug}
                        title={`Questions about ${test.name}`}
                        description={`Get answers to common queries about ${test.name}, preparation, and reporting at Indira Diagnostics.`}
                    />

                    <EntityReviews
                        entityType="diagnostic"
                        entityName={test.name}
                        entitySlug={slug}
                        title={`Patient Feedback for ${test.name}`}
                        description={`What our patients are saying about their diagnostic experience at Indira Hospital.`}
                    />
                </div>
            </SectionContainer>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalTest",
                        "name": test.name,
                        "url": `${siteConfig.url}/diagnostics/${slug}`,
                        "description": test.short_description || test.description?.replace(/<[^>]+>/g, '').slice(0, 200),
                        ...(test.body_system && { "bodySystem": test.body_system }),
                        ...(usedToDiagnose.length > 0 && { "usedToDiagnose": usedToDiagnose.join(', ') }),
                        ...(test.normal_range && { "normalRange": test.normal_range }),
                        ...(test.price && {
                            "offers": {
                                "@type": "Offer",
                                "price": test.price,
                                "priceCurrency": "INR",
                                "availability": "https://schema.org/InStock",
                            }
                        }),
                        "provider": {
                            "@type": "Hospital",
                            "name": siteConfig.name,
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": siteConfig.contact.address.split(',')[0],
                                "addressLocality": "Vellore",
                                "addressRegion": "Tamil Nadu",
                                "postalCode": "632001"
                            }
                        },
                    })
                }}
            />
        </main>
    )
}
