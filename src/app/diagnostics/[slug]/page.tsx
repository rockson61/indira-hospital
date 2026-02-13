import { notFound } from "next/navigation"
import { getDirectusClient } from "@/lib/directus"
import { readItems } from "@directus/sdk"
import { Diagnostic } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Banknote, AlertCircle, Phone } from "lucide-react"

export default async function DiagnosticTestPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const client = await getDirectusClient();

    const tests = await client.request(readItems('diagnostics', {
        filter: {
            slug: { _eq: slug },
            status: { _eq: 'published' }
        },
        limit: 1
    })) as unknown as Diagnostic[];

    const test = tests[0];

    if (!test) {
        notFound();
    }

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
                                {test.description || `Comprehensive ${test.name} with accurate reporting and quick turnaround time.`}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border shadow-sm min-w-[300px]">
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-sm text-muted-foreground">Price:</span>
                                <span className="text-2xl font-bold text-slate-900">
                                    {test.price ? `₹${test.price}` : 'Call for Price'}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                                <Clock className="w-4 h-4" />
                                Report in {test.report_time || '24 Hours'}
                            </div>
                            <div className="space-y-3">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Appointment</Button>
                                {test.home_collection && (
                                    <Button variant="outline" className="w-full">
                                        Book Home Collection
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
                            <Button variant="ghost" className="w-full flex items-center justify-start gap-3 hover:bg-slate-200">
                                <Phone className="w-4 h-4" />
                                +91 98765 43210
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
