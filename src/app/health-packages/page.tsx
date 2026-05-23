import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from "react"
import { getHealthPackages } from "@/lib/api"
import { HealthPackage } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { siteConfig } from "@/config/site";
import EntityReviews from "@/components/trust/EntityReviews";
import { User, Phone, Check, ArrowRight, Shield, MessageCircle } from "lucide-react"
import { Heart, HeartCardiogram, Electricity } from "healthicons-react/outline";
import Link from "next/link"
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = constructMetadata({
    title: "Best Master Health Checkup Packages in Vellore | Indira Hospital",
    description: "Affordable health screening packages in Vellore, India. Master health checkups, Cardiac, Diabetic, and Executive packages at Indira Super Speciality Hospital.",
    path: "/health-packages"
});


export default async function HealthPackagesPage() {
    let packages: HealthPackage[] = [];

    try {
        packages = (await getHealthPackages()) as HealthPackage[];
    } catch (e) {
        console.error('Failed to fetch packages', e);
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-24">
            <PageHero
                title="Master Health Checkups in Vellore"
                subtitle="Preventive Care"
                description="Early detection is the best protection. Choose from our specially curated health screening packages at Indira Hospital, Vellore. NABL accredited labs with same-day digital reports produced by elite radiologists."
                descriptionClassName="clinical-insight direct-answer"
                backgroundImage="/images/hospital/Consultation.webp"
            />


            {/* PREMIUM PRICING GRID */}
            <SectionContainer className="relative z-20 -mt-24 sm:-mt-32 max-w-7xl mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div key={pkg.slug} className={`group bg-white dark:bg-slate-900 rounded-[2.5rem] border ${pkg.is_featured ? 'border-fuchsia-400 shadow-[0_0_40px_-10px_rgba(20,184,166,0.3)]' : 'border-slate-200 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'} hover:shadow-[0_20px_40px_rgba(20,184,166,0.15)] hover:border-fuchsia-300 hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden bg-clip-padding`}>
                            {/* Elevated Highlight Background */}
                            {pkg.is_featured && (
                                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-fuchsia-400" />
                            )}

                            <div className="p-8 sm:p-10 pb-0 relative z-10">
                                {pkg.is_featured && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-black rounded-full mb-6 uppercase tracking-widest shadow-lg shadow-orange-500/30 w-fit">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-900 animate-pulse"></div>
                                        Best Choice
                                    </span>
                                )}
                                <h2 className="elite-section-title text-slate-900 dark:text-white mb-3 group-hover:text-fuchsia-700 transition-colors">{pkg.title}</h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2 font-medium leading-relaxed">
                                    {pkg.short_description || `Comprehensive screening with ${pkg.tests_included}.`}
                                </p>

                                <div className="flex items-baseline gap-3 mb-8">
                                    <span className="text-4xl font-black text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-600 group-hover:to-pink-500 transition-all">Transparent Pricing</span>
                                </div>

                                <div className="space-y-4 mb-10">
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span className="h-px w-6 bg-slate-200 dark:bg-slate-700"></span> Includes <span className="h-px w-6 bg-slate-200 dark:bg-slate-700"></span>
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {pkg.tests_included && pkg.tests_included.split(',').slice(0, 5).map((test: string, i: number) => (
                                            <span key={i} className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-3 py-1.5 rounded-xl group-hover:border-fuchsia-100 group-hover:bg-fuchsia-50 dark:bg-fuchsia-950 shadow-sm transition-colors">
                                                <Check className="w-3.5 h-3.5 text-fuchsia-500" />
                                                {test.trim()}
                                            </span>
                                        ))}
                                        {pkg.tests_included && pkg.tests_included.split(',').length > 5 && (
                                            <span className="text-xs font-bold text-slate-400 py-1.5 px-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">+{pkg.tests_included.split(',').length - 5} more</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto p-8 sm:p-10 pt-0 space-y-3 relative z-10 w-full">
                                <Link href={`/health-packages/${pkg.slug}`} className="elite-button-primary w-full">
                                    <span className="relative z-10">View Full Details</span>
                                    <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                                </Link>
                                <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I&apos;m interested in booking the ${pkg.title} package.`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-6 py-4 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 font-bold rounded-2xl hover:bg-fuchsia-600 hover:text-white transition-all duration-300">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Book via WhatsApp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {packages.length === 0 && (
                    <div className="text-center py-24 bg-white/50 backdrop-blur-xl rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-700 mt-12">
                        <div className="w-24 h-24 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                            <HeartCardiogram className="w-10 h-10 text-slate-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Packages Coming Soon</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8">
                            We are currently engineering our next-generation preventive screening paths. Please contact us directly for current options.
                        </p>
                        <Link href="/contact" className="elite-button-primary hover:bg-fuchsia-700">
                            Custom Corporate Packages <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                )}
            </SectionContainer>

            {/* TRUST SIGNALS */}
            <SectionContainer className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-slate-100 dark:border-slate-800">
                <div className="grid lg:grid-cols-2 gap-16">
                    <EntityReviews
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="health-packages"
                        title="Patient Feedback on Checkups"
                        description="Real stories from patients who completed their master health checkups at Indira Hospital."
                    />
                </div>
            </SectionContainer>

            {/* ENTITY CARD SECTIONS */}
            <EntityCardSection type="services" title="Treatments & Procedures" subtitle="Our Expertise" limit={6} className="bg-white dark:bg-slate-900 border-t" />

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid type="diagnostics" title="Individual Lab Tests" subtitle="Pathology & Imaging" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t" />
            <InternalLinkGrid type="services" title="All Treatments A-Z" subtitle="Services Directory" limit={12} className="bg-white dark:bg-slate-900 border-t" />
            <InternalLinkGrid type="locations" title="Serving Patients Across Tamil Nadu" subtitle="Location Directory" limit={16} className="bg-slate-50 dark:bg-slate-900/50 border-t" />

            {/* WHY DIAGNOSTIC BENTO */}
            <SectionContainer className="pb-24">
                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-fuchsia-950 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl relative group/cta">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[80px] will-change-transform transform-gpu group-hover/cta:bg-fuchsia-500/20 transition-colors duration-700" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] will-change-transform transform-gpu" />

                    <div className="grid lg:grid-cols-2 relative z-10">
                        <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-6 w-fit">
                                Clinical Excellence
                            </div>
                            <h2 className="elite-section-title mb-10 text-white">
                                Why Health Checkups at <br className="hidden sm:block" /> <span className="text-fuchsia-400">Indira Hospital?</span>
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-fuchsia-500 transition-colors duration-300">
                                        <Electricity className="w-6 h-6 text-fuchsia-300 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Advanced Radiologists</h4>
                                        <p className="text-slate-400 leading-relaxed font-light">Precision diagnostics driven by specialized doctors utilizing our 3T MRI and advanced imaging suites.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-fuchsia-500 transition-colors duration-300">
                                        <Heart className="w-6 h-6 text-fuchsia-300 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Patient Caring</h4>
                                        <p className="text-slate-400 leading-relaxed font-light">We don&apos;t merely provide reports; our clinical team provides a structured path to ongoing wellness and recovery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block relative min-h-[400px] border-l border-white/10 rounded-r-[4rem] overflow-hidden bg-[url('/images/hospital/Consultation.webp')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
