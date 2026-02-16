import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { CostCalculator } from "@/components/tools/CostCalculator";
import { SeverityQuiz } from "@/components/tools/SeverityQuiz";
import { InsuranceChecker } from "@/components/tools/InsuranceChecker";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import EntityFAQs from "@/components/trust/EntityFAQs";

export default async function PilesLandingPage() {
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
                                Permanent Cure for <span className="text-primary-600">Piles, Fissure & Fistula</span> within 30 Minutes
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
                                <Button size="lg" className="h-14 px-8 text-lg shadow-lg shadow-primary-600/20">
                                    Book Free Consultation
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                                    talk to Expert
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary-200/20 rounded-full blur-3xl"></div>
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

            {/* FAQs for SEO - Using Universal EntityFAQs */}
            <EntityFAQs
                entityType="treatment"
                entityName="Piles"
                title="Frequently Asked Questions about Piles Treatment"
                description="Everything you need to know about Laser Piles surgery, recovery, and insurance coverage at Indira Hospital."
            />
        </div>
    );
}
