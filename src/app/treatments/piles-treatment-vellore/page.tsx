import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { CostCalculator } from "@/components/tools/CostCalculator";
import { SeverityQuiz } from "@/components/tools/SeverityQuiz";
import { InsuranceChecker } from "@/components/tools/InsuranceChecker";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getFAQs } from "@/lib/api";

export default async function PilesLandingPage() {
    const faqs = await getFAQs('treatment');

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                <Star className="w-3 h-3 fill-current" />
                                #1 Proctology Center in Vellore
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Permanent Cure for <span className="text-brand-600">Piles, Fissure & Fistula</span> within 30 Minutes
                            </h1>
                            <p className="text-lg text-gray-600">
                                Advanced USFDA-approved Laser Treatment. No cuts, no stitches, 24-hour recovery.
                            </p>

                            <ul className="space-y-3">
                                {[
                                    "Painless Laser Procedure",
                                    "Same Day Discharge",
                                    "Insurance Cashless Approved",
                                    "15+ Years Specialist Surgeons"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="h-14 px-8 text-lg shadow-lg shadow-brand-600/20">
                                    Book Free Consultation
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                                    talk to Expert
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Placeholder for Doctor/Patient Image or Quiz */}
                            <div className="absolute -inset-4 bg-brand-200/20 rounded-full blur-3xl"></div>
                            <SeverityQuiz />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <CostCalculator />
                        <div className="space-y-8">
                            <InsuranceChecker />
                            <div className="bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2">Direct WhatsApp Access</h3>
                                    <p className="text-blue-100 mb-6">Chat directly with our surgical coordinator for price, dates, and doctor availability.</p>
                                    <Button variant="secondary" className="w-full">
                                        Chat on WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs for SEO */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <SectionHeader title="Frequently Asked Questions" subtitle="Patient Education" className="items-center text-center mb-12" />

                    <div className="space-y-4">
                        {faqs && faqs.length > 0 ? (
                            faqs.map((faq: any, i: number) => (
                                <details key={i} className="group border border-gray-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden open:bg-gray-50">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-medium text-gray-900 group-open:text-brand-700">
                                        <span>{faq.question}</span>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 group-open:bg-brand-100 group-open:text-brand-600">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </summary>

                                    <div className="mt-4 leading-relaxed text-gray-700 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: faq.answer }}>
                                    </div>
                                </details>
                            ))
                        ) : (
                            <div className="text-center text-gray-500">No FAQs available at the moment.</div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
