import { notFound } from "next/navigation"
import { getHealthPackageBySlug } from "@/lib/api"
import { HealthPackage } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Info, Phone, Shield, FileText, Stethoscope } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import EntityReviews from "@/components/trust/EntityReviews"
import EntityFAQs from "@/components/trust/EntityFAQs"

const WHATSAPP_NUMBER = "917010650063";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const pkg = await getHealthPackageBySlug(slug) as HealthPackage | null;
    if (!pkg) return {};
    return {
        title: pkg.seo_title || `${pkg.title} Health Checkup — Indira Hospital Vellore`,
        description: pkg.seo_description || `Book ${pkg.title} at Indira Hospital Vellore. Comprehensive screening with ${pkg.tests_included.slice(0, 100)}... Price: ₹${pkg.price}.`,
    };
}

export default async function HealthPackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pkg = await getHealthPackageBySlug(slug) as HealthPackage | null;

    if (!pkg) {
        notFound();
    }

    const testList = pkg.tests_included.split(',').map(t => t.trim()).filter(Boolean);

    return (
        <main className="min-h-screen pb-20 bg-slate-50">
            {/* Header */}
            <div className="bg-white border-b py-12">
                <SectionContainer>
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
                                <Shield className="w-4 h-4" />
                                Wellness & Prevention
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{pkg.title}</h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                {pkg.short_description || `Our ${pkg.title} is designed to provide a thorough evaluation of your health status, helping you detect potential issues early.`}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border">
                                    <Stethoscope className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Total Tests</p>
                                        <p className="font-bold text-slate-900">{testList.length} Parameters</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border">
                                    <Clock className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Reporting</p>
                                        <p className="font-bold text-slate-900">Same Day / 24h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-[400px] bg-white border rounded-3xl p-8 shadow-sm lg:sticky lg:top-24">
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm text-slate-500 font-medium">Package Cost:</span>
                                    <span className="text-4xl font-bold text-blue-700">₹{pkg.price}</span>
                                </div>
                                {pkg.original_price && (
                                    <p className="text-slate-400 text-sm">
                                        Was <span className="line-through">₹{pkg.original_price}</span> • Save ₹{pkg.original_price - pkg.price}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    NABL Accredited Lab Results
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Free Physician Consultation
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Digital Reports on WhatsApp
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'd like to book the ${pkg.title} health package.`)}`} target="_blank">
                                        Book Appointment
                                    </a>
                                </Button>
                                <Button variant="ghost" size="lg" className="w-full text-slate-600" asChild>
                                    <a href={`tel:+917010650063`}>
                                        <Phone className="w-4 h-4 mr-2" />
                                        Call to Inquire
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </div>

            {/* Test List & Preparation */}
            <SectionContainer className="py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        {/* The List */}
                        <div>
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <FileText className="w-6 h-6 text-blue-600" />
                                Tests Included in this Package
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {testList.map((test, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-white border rounded-xl">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{test}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Prep */}
                        <div className="bg-amber-50 border border-amber-100 p-8 rounded-3xl">
                            <h3 className="text-xl font-bold text-amber-900 flex items-center gap-2 mb-4">
                                <Info className="w-6 h-6" />
                                Preparation Instructions
                            </h3>
                            <ul className="space-y-3 text-amber-800">
                                <li className="flex gap-2">
                                    <span className="font-bold">•</span>
                                    Fasting for 10-12 hours is mandatory. Do not consume tea, coffee, or snacks.
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold">•</span>
                                    Only plain water is allowed during the fasting period.
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold">•</span>
                                    Please inform the receptionist if you are a sugar or blood pressure patient.
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold">•</span>
                                    Bring previous medical reports if any.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Location / Contact Card */}
                        <div className="bg-white border rounded-3xl p-8">
                            <h3 className="font-bold mb-4">Visit Our Center</h3>
                            <p className="text-sm text-slate-500 mb-6">
                                All checkups are conducted at our main facility with high-end diagnostic equipment.
                            </p>
                            <div className="text-sm text-slate-700 space-y-2 mb-8">
                                <p><strong>Indira Hospital</strong></p>
                                <p>No. 1, Katpadi Road, Vellore - 632004</p>
                                <p>Tamil Nadu, India</p>
                            </div>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/locations/vellore">View Map & Directions</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* ========== FAQ SECTION ========== */}
            <EntityFAQs
                entityType="service"
                entityName={pkg.title}
                entitySlug={slug}
                title={`Common Questions about our ${pkg.title}`}
                description={`Get answers to common queries about our health checkup packages and process.`}
            />

            {/* ========== REVIEWS SECTION ========== */}
            <EntityReviews
                entityType="service" // Using service logic for health packages as they are treatments
                entityName={pkg.title}
                entitySlug={slug}
                title={`What Patients Say About Our ${pkg.title}`}
                description={`Verified reviews from patients who opted for the ${pkg.title} at Indira Hospital.`}
            />

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": pkg.title,
                        "description": pkg.short_description || `Comprehensive health package with ${testList.length} tests.`,
                        "offers": {
                            "@type": "Offer",
                            "price": pkg.price,
                            "priceCurrency": "INR",
                            "availability": "https://schema.org/InStock",
                            "url": `https://www.indirasuperspecialityhospital.com/health-packages/${slug}`
                        },
                        "brand": {
                            "@type": "MedicalOrganization",
                            "name": "Indira Super Speciality Hospital"
                        }
                    })
                }}
            />
        </main>
    )
}
