import { getDiagnostics } from "@/lib/api"
import { Diagnostic } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Search, FlaskConical, ScanLine, Activity, Clock, Home, Droplets, Zap } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Diagnostics & Lab Tests — Indira Super Speciality Hospital Vellore',
    description: 'Advanced diagnostic tests and lab services at Indira Hospital Vellore. MRI, CT Scan, Blood Tests, ECG, Echo, and more. NABL accredited labs with home collection.',
}

// Category icons and colors
const categoryConfig: Record<string, { icon: any; color: string; bgColor: string; label: string }> = {
    radiology: { icon: ScanLine, color: 'text-blue-600', bgColor: 'bg-blue-50', label: 'Radiology & Imaging' },
    pathology: { icon: FlaskConical, color: 'text-purple-600', bgColor: 'bg-purple-50', label: 'Pathology & Lab' },
    cardiology: { icon: Activity, color: 'text-red-600', bgColor: 'bg-red-50', label: 'Cardiology' },
    other: { icon: Zap, color: 'text-teal-600', bgColor: 'bg-teal-50', label: 'Other Tests' },
}

export default async function DiagnosticsPage() {
    let diagnostics: any[] = [];

    try {
        diagnostics = (await getDiagnostics()) as any[];
    } catch {
        diagnostics = [];
    }

    // Group by category
    const grouped = diagnostics.reduce((acc: Record<string, any[]>, test: any) => {
        const cat = test.category || 'other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(test);
        return acc;
    }, {} as Record<string, any[]>);

    const categoryOrder = ['radiology', 'pathology', 'cardiology', 'other'];

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <div className="bg-blue-950 text-white py-20">
                <SectionContainer>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Diagnostics & Labs</h1>
                    <p className="text-xl text-blue-100 mb-4 max-w-2xl">
                        Precision diagnosis with NABL Accredited Labs and World-class Radiology Suite.
                    </p>
                    <p className="text-blue-200 mb-8">
                        {diagnostics.length} tests available • Home collection for select tests • Reports in hours
                    </p>
                </SectionContainer>
            </div>

            {/* Test Categories */}
            {categoryOrder.map(cat => {
                const tests = grouped[cat];
                if (!tests?.length) return null;
                const config = categoryConfig[cat] || categoryConfig.other;
                const Icon = config.icon;

                return (
                    <SectionContainer key={cat} className="py-12 border-b last:border-b-0">
                        <div className="flex items-center gap-3 mb-8">
                            <div className={`p-3 rounded-xl ${config.bgColor}`}>
                                <Icon className={`w-7 h-7 ${config.color}`} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">{config.label}</h2>
                                <p className="text-sm text-muted-foreground">{tests.length} tests available</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {tests.map((test: any) => (
                                <Link
                                    key={test.slug}
                                    href={`/diagnostics/${test.slug}`}
                                    className="bg-white border rounded-xl p-5 hover:shadow-md hover:border-blue-200 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{test.name}</h3>
                                        <span className="text-lg font-bold text-blue-600 whitespace-nowrap ml-2">
                                            {test.price ? `₹${test.price}` : 'Call'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {test.short_description || `Comprehensive ${test.name} with fast reporting.`}
                                    </p>
                                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            {test.report_time || '24h'}
                                        </span>
                                        {test.home_collection && (
                                            <span className="flex items-center gap-1 text-teal-600">
                                                <Home className="w-3.5 h-3.5" />
                                                Home Collection
                                            </span>
                                        )}
                                        {test.sample_type && test.sample_type !== 'N/A - Imaging' && (
                                            <span className="flex items-center gap-1">
                                                <Droplets className="w-3.5 h-3.5" />
                                                {test.sample_type}
                                            </span>
                                        )}
                                        {test.parameters_count > 0 && (
                                            <span>{test.parameters_count} parameters</span>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </SectionContainer>
                );
            })}

            {/* Fallback if no data */}
            {diagnostics.length === 0 && (
                <SectionContainer className="py-16 text-center">
                    <p className="text-muted-foreground">Diagnostic tests are being updated. Please call us for availability.</p>
                </SectionContainer>
            )}

            {/* Home Collection Banner */}
            <SectionContainer className="py-16">
                <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-teal-900 mb-4">Book Home Sample Collection</h2>
                        <p className="text-lg text-teal-700 mb-6">Get tested from the comfort of your home. Safe, hygienic, and on-time.</p>
                        <div className="flex gap-4">
                            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                                <a href="https://wa.me/917010650063?text=Hi%2C%20I%20want%20to%20book%20home%20sample%20collection" target="_blank">Book Home Visit</a>
                            </Button>
                            <Button variant="outline" className="bg-white border-teal-200" asChild>
                                <Link href="/health-packages">View Packages</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* JSON-LD for MedicalTest listing */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalClinic",
                        "name": "Indira Super Speciality Hospital — Diagnostics",
                        "url": "https://www.indirasuperspecialityhospital.com/diagnostics",
                        "medicalSpecialty": "Diagnostic",
                        "availableService": diagnostics.map((t: any) => ({
                            "@type": "MedicalTest",
                            "name": t.name,
                            "url": `https://www.indirasuperspecialityhospital.com/diagnostics/${t.slug}`,
                            ...(t.price && { "offers": { "@type": "Offer", "price": t.price, "priceCurrency": "INR" } }),
                        })),
                    })
                }}
            />
        </main>
    )
}
