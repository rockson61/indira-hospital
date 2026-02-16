import { getDiagnostics } from "@/lib/api"
import { Diagnostic } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { FlaskConical, ScanLine, Activity, Clock, Home, Droplets, Zap } from "lucide-react"
import { DiagnosticCard } from "@/components/entities/DiagnosticCard"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Diagnostics & Lab Tests — Indira Super Speciality Hospital Vellore',
    description: 'Advanced diagnostic tests and lab services at Indira Hospital Vellore. MRI, CT Scan, Blood Tests, ECG, Echo, and more. NABL accredited labs with home collection.',
}

// Category icons and colors
const categoryConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string; label: string }> = {
    radiology: { icon: ScanLine, color: 'text-blue-600', bgColor: 'bg-blue-50', label: 'Radiology & Imaging' },
    pathology: { icon: FlaskConical, color: 'text-purple-600', bgColor: 'bg-purple-50', label: 'Pathology & Lab' },
    cardiology: { icon: Activity, color: 'text-red-600', bgColor: 'bg-red-50', label: 'Cardiology' },
    other: { icon: Zap, color: 'text-teal-600', bgColor: 'bg-teal-50', label: 'Other Tests' },
}

export default async function DiagnosticsPage() {
    let diagnostics: Diagnostic[] = [];

    try {
        diagnostics = (await getDiagnostics()) as Diagnostic[];
    } catch {
        diagnostics = [];
    }

    // Group by category
    const grouped = diagnostics.reduce((acc: Record<string, Diagnostic[]>, test: Diagnostic) => {
        const cat = test.category || 'other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(test);
        return acc;
    }, {} as Record<string, Diagnostic[]>);

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

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tests.map((test: Diagnostic) => (
                                <DiagnosticCard key={test.slug} test={test} />
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
                        "availableService": diagnostics.map((t: Diagnostic) => ({
                            "@type": "MedicalTest",
                            "name": t.name,
                            "url": `https://www.indirasuperspecialityhospital.com/diagnostics/${t.slug}`,
                            "description": (t as any).seo_description || t.short_description,
                            ...(t.price && { "offers": { "@type": "Offer", "price": t.price, "priceCurrency": "INR" } }),
                        })),
                    })
                }}
            />
        </main>
    )
}
