import { notFound } from "next/navigation"
import { getHealthPackageBySlug } from "@/lib/api"
import { HealthPackage } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { CheckCircle2, Clock, Info, Phone, FileText, Shield, MessageCircle } from "lucide-react"
import { Stethoscope } from "healthicons-react/outline";
import Link from "next/link"
import type { Metadata } from "next"
import EntityReviews from "@/components/trust/EntityReviews"
import EntityFAQs from "@/components/trust/EntityFAQs"
import { JsonLdSchema } from "@/components/seo/JsonLdSchema"
import { siteConfig } from "@/config/site"
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid"

import { constructMetadata } from "@/lib/seo-utils";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const pkg = await getHealthPackageBySlug(slug) as HealthPackage | null;
    if (!pkg) return { title: "Package Not Found" };
    
    const title = pkg.seo_title || `${pkg.title} Master Health Checkup in Vellore | Indira Hospital`;
    const description = pkg.seo_description || `Book the ${pkg.title} package at Indira Hospital, Vellore. Comprehensive screening with ${pkg.tests_included?.slice(0, 100)}... and expert clinical consultation.`;

    return constructMetadata({
        title,
        description,
        path: `/health-packages/${slug}`
    });
}


export default async function HealthPackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pkg = await getHealthPackageBySlug(slug) as HealthPackage | null;

    if (!pkg) {
        notFound();
    }

    const testList = pkg.tests_included?.split(',').map(t => t.trim()).filter(Boolean) || [];

    return (
        <main className="min-h-screen pb-20 bg-[#FAFAFA] dark:bg-slate-950">
            <JsonLdSchema
                type="breadcrumb"
                items={[
                    { name: "Home", url: "/" },
                    { name: "Health Packages", url: "/health-packages" },
                    { name: pkg.title, url: `/health-packages/${slug}` }
                ]}
            />
            {/* Header */}
            <section className="relative pt-48 pb-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 hidden md:block blur-[120px] will-change-transform transform-gpu opacity-60" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 hidden md:block blur-[120px] will-change-transform transform-gpu opacity-50" />
                </div>
                <SectionContainer>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-fuchsia-600 font-bold text-sm uppercase tracking-widest mb-4">
                                <Shield className="w-4 h-4" />
                                Wellness & Prevention
                            </div>
                            <h1 className="elite-hero-title text-slate-900 dark:text-white mb-6">
                                {pkg.title} <br className="hidden sm:block" />
                                <span className="text-fuchsia-600">in Vellore, India</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-medium">
                                {pkg.short_description || `Our ${pkg.title} is designed to provide a thorough evaluation of your health status, helping you detect potential issues early.`}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-5 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-soft">
                                    <div className="w-12 h-12 rounded-[1rem] bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center">
                                        <Stethoscope className="w-6 h-6 text-fuchsia-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Tests</p>
                                        <p className="font-heading font-black text-slate-900 dark:text-white">{testList.length} Parameters</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-5 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-soft">
                                    <div className="w-12 h-12 rounded-[1rem] bg-amber-50 flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Reporting</p>
                                        <p className="font-heading font-black text-slate-900 dark:text-white">Same Day / 24h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Price Card */}
                        <div className="w-full lg:w-[400px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-[2.5rem] p-8 shadow-float lg:sticky lg:top-24">
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm text-slate-400 font-bold">Package Value:</span>
                                    <span className="text-4xl font-heading font-black text-slate-900 dark:text-white">Transparent Pricing</span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-8">
                                {["NABL Accredited Lab Results", "Free Physician Consultation", "Digital Reports on WhatsApp"].map((item) => (
                                    <div key={item} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3">
                                <a
                                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I&apos;d like to book the ${pkg.title} health package.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="elite-button-primary w-full text-base"
                                >
                                    <MessageCircle className="w-5 h-5 mr-3" />
                                    Book via WhatsApp
                                </a>
                                <a
                                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                                    className="w-full inline-flex items-center justify-center py-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-2xl transition-all border border-slate-100 dark:border-slate-700 text-base"
                                >
                                    <Phone className="w-4 h-4 mr-2 text-fuchsia-600" />
                                    {siteConfig.contact.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* Test List & Preparation */}
            <SectionContainer className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
                                <div className="w-10 h-10 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-fuchsia-600" />
                                </div>
                                Tests Included
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {testList.map((test, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-[1.5rem] shadow-sm dark:shadow-slate-900/30">
                                        <CheckCircle2 className="w-5 h-5 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-200 font-medium">{test}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-amber-50 border border-amber-100 p-8 rounded-[2.5rem]">
                            <h3 className="text-xl font-heading font-black text-amber-900 flex items-center gap-2 mb-4">
                                <Info className="w-6 h-6" />
                                Preparation Instructions
                            </h3>
                            <ul className="space-y-3 text-amber-800 font-medium">
                                <li className="flex gap-2"><span className="font-bold">•</span> Fasting for 10-12 hours is mandatory.</li>
                                <li className="flex gap-2"><span className="font-bold">•</span> Only plain water is allowed during the fasting period.</li>
                                <li className="flex gap-2"><span className="font-bold">•</span> Inform the receptionist if you are a sugar or BP patient.</li>
                                <li className="flex gap-2"><span className="font-bold">•</span> Bring previous medical reports if any.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-[2.5rem] p-8 shadow-soft">
                            <h3 className="font-heading font-black text-slate-900 dark:text-white mb-4">Visit Our Center</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
                                All checkups are conducted at our main facility with high-end diagnostic equipment.
                            </p>
                            <div className="text-sm text-slate-700 dark:text-slate-200 space-y-2 mb-8 font-medium">
                                <p><strong>Indira Hospital</strong></p>
                                <p>No. 1, Katpadi Road, Vellore - 632004</p>
                                <p>Tamil Nadu, India</p>
                            </div>
                            <Link
                                href="/doctor/near-me/vellore"
                                className="w-full inline-flex items-center justify-center py-3 bg-slate-50 dark:bg-slate-800 hover:bg-fuchsia-50 dark:bg-fuchsia-950 text-slate-700 dark:text-slate-200 hover:text-fuchsia-700 font-bold rounded-full transition-all border border-slate-100 dark:border-slate-700 text-sm"
                            >
                                View Map & Directions
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <EntityFAQs
                entityType="service"
                entityName={pkg.title}
                entitySlug={slug}
                title={`Common Questions about our ${pkg.title}`}
                description={`Get answers to common queries about our health checkup packages and process.`}
            />

            <EntityReviews
                entityType="service"
                entityName={pkg.title}
                entitySlug={slug}
                title={`What Patients Say About Our ${pkg.title}`}
                description={`Verified reviews from patients who opted for the ${pkg.title} at Indira Hospital.`}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": pkg.title,
                        "description": pkg.short_description || `Comprehensive health package with ${testList.length} tests.`,
                        "brand": {
                            "@type": "MedicalOrganization",
                            "name": siteConfig.name
                        }
                    })
                }}
            />
            <InternalLinkGrid
                type="health-packages"
                title="Other Preventive Checkups"
                subtitle="Health & Wellness"
                limit={12}
                excludeSlug={slug}
                className="bg-white dark:bg-slate-900 border-t border-slate-100"
            />
            <InternalLinkGrid type="diagnostics" title={`Diagnostics for ${pkg.title}`} subtitle="Lab Support" limit={12} className="bg-slate-50 dark:bg-slate-950 border-t" />
            <InternalLinkGrid type="services" title="Related Treatments" subtitle="Clinical Care" limit={12} className="bg-white dark:bg-slate-900 border-t" />
        </main>
    )
}
