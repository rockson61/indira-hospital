import { notFound } from "next/navigation"
import { getDiagnosticBySlug } from "@/lib/api"
import { Diagnostic } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, AlertCircle, Phone, Home, Droplets, Beaker } from "lucide-react"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const test = await getDiagnosticBySlug(slug) as Diagnostic | null;
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
            <div className="bg-slate-50 border-b py-12">
                <SectionContainer>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                                {test.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{test.name}</h1>
                            <p className="text-muted-foreground max-w-2xl">
                                {test.short_description || test.description?.replace(/<[^>]+>/g, '').slice(0, 150) || `Comprehensive ${test.name} with accurate reporting and quick turnaround time.`}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border shadow-sm min-w-[300px]">
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-sm text-muted-foreground">Price:</span>
                                <span className="text-2xl font-bold text-slate-900">
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
                                    <span className="flex items-center gap-1 px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full">
                                        <Home className="w-3 h-3" /> Home Collection
                                    </span>
                                )}
                                {test.fasting_required && (
                                    <span className="flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full">
                                        Fasting Required
                                    </span>
                                )}
                                {test.sample_type && test.sample_type !== 'N/A - Imaging' && (
                                    <span className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                                        <Droplets className="w-3 h-3" /> {test.sample_type}
                                    </span>
                                )}
                                {test.parameters_count && test.parameters_count > 0 && (
                                    <span className="flex items-center gap-1 px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
                                        <Beaker className="w-3 h-3" /> {test.parameters_count} parameters
                                    </span>
                                )}
                            </div>

                            <div className="space-y-3">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                    <a href="https://wa.me/917010650063?text=I%20want%20to%20book%20a%20diagnostic%20test" target="_blank">Book Appointment</a>
                                </Button>
                                {test.home_collection && (
                                    <Button variant="outline" className="w-full" asChild>
                                        <a href="https://wa.me/917010650063?text=I%20want%20home%20sample%20collection" target="_blank">
                                            Book Home Collection
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
                                        <span key={condition} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm">
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
                        <div className="bg-slate-50 p-6 rounded-xl border">
                            <h3 className="font-bold mb-4">Need Help?</h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Not sure which test to book? Our support team is here to guide you.
                            </p>
                            <Button variant="ghost" className="w-full flex items-center justify-start gap-3 hover:bg-slate-200" asChild>
                                <a href="tel:+919842342525">
                                    <Phone className="w-4 h-4" />
                                    +91 98423 42525
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* JSON-LD: MedicalTest */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalTest",
                        "name": test.name,
                        "url": `https://www.indirasuperspecialityhospital.com/diagnostics/${slug}`,
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
                            "name": "Indira Super Speciality Hospital",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Katpadi Road",
                                "addressLocality": "Vellore",
                                "addressRegion": "Tamil Nadu",
                                "postalCode": "632004"
                            }
                        },
                    })
                }}
            />
        </main>
    )
}
