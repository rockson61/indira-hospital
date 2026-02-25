import { getHealthPackages } from "@/lib/api"
import { HealthPackage } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Heart, Activity, User, ShieldCheck, Zap, Phone, Check } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Health Checkup Packages — Indira Super Speciality Hospital Vellore',
    description: 'Comprehensive health screening packages at Indira Hospital Vellore. Master Health Checkup, Cardiac, Diabetic, and Executive packages starting from ₹999.',
}

const WHATSAPP_NUMBER = "917010650063";

export default async function HealthPackagesPage() {
    let packages: HealthPackage[] = [];

    try {
        packages = (await getHealthPackages()) as HealthPackage[];
    } catch (e) {
        console.error('Failed to fetch packages', e);
    }

    // Fallback if empty (optional, but good for first run)
    if (packages.length === 0) {
        // We might want to show some static ones or just a "Coming Soon"
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <div className="bg-blue-900 text-white py-20">
                <SectionContainer>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Preventive Health Checkups</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                        Early detection is the best protection. Choose from our specially curated health screening packages for you and your family.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full border border-blue-700">
                            <ShieldCheck className="w-5 h-5 text-blue-300" />
                            <span className="text-sm">NABL Accredited Lab</span>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full border border-blue-700">
                            <Activity className="w-5 h-5 text-blue-300" />
                            <span className="text-sm">Same Day Reports</span>
                        </div>
                    </div>
                </SectionContainer>
            </div>

            {/* Packages Grid */}
            <SectionContainer className="py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div key={pkg.slug} className="bg-white rounded-3xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                            <div className="p-8 pb-0">
                                {pkg.is_featured && (
                                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                                        Best Choice
                                    </span>
                                )}
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">{pkg.title}</h2>
                                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                                    {pkg.short_description || `Comprehensive screening with ${pkg.tests_included}.`}
                                </p>

                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-3xl font-bold text-blue-700">₹{pkg.price}</span>
                                    {pkg.original_price && (
                                        <span className="text-slate-400 line-through text-lg">₹{pkg.original_price}</span>
                                    )}
                                </div>

                                <div className="space-y-3 mb-8">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Includes</p>
                                    <div className="flex flex-wrap gap-2">
                                        {pkg.tests_included.split(',').slice(0, 5).map((test, i) => (
                                            <span key={i} className="flex items-center gap-1.5 text-sm text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                                                <Check className="w-3.5 h-3.5 text-blue-600" />
                                                {test.trim()}
                                            </span>
                                        ))}
                                        {pkg.tests_included.split(',').length > 5 && (
                                            <span className="text-sm text-slate-400 py-1">+{pkg.tests_included.split(',').length - 5} more</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto p-8 pt-0 space-y-3">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                    <Link href={`/health-packages/${pkg.slug}`}>View Full Details</Link>
                                </Button>
                                <Button variant="outline" className="w-full border-blue-200 text-blue-700" asChild>
                                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in booking the ${pkg.title} package.`)}`} target="_blank">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Book via WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {packages.length === 0 && (
                    <div className="text-center py-20">
                        <User className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Packages Coming Soon</h2>
                        <p className="text-slate-500 max-w-md mx-auto mb-8">
                            We are currently updating our health packages. Please contact us directly for the latest preventive screening options.
                        </p>
                        <Button className="bg-blue-600" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                )}
            </SectionContainer>

            {/* Why Diagnostic Banner */}
            <SectionContainer className="pb-24">
                <div className="bg-white rounded-[2rem] border overflow-hidden grid md:grid-cols-2">
                    <div className="p-8 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-6">Why Health Checkups at Indira Hospital?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-5 h-5 text-blue-600" />
                                </div>
                                <p className="text-slate-600"><strong>Advanced Radiologists:</strong> Specialized doctors to interpret your scans with precision.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                    <Heart className="w-5 h-5 text-blue-600" />
                                </div>
                                <p className="text-slate-600"><strong>Patient Caring:</strong> We don't just give reports; we provide a path to wellness.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-50 border-l border-slate-100 hidden md:block">
                        {/* Empty or can put an image later */}
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
