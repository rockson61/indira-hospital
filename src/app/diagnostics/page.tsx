import { getDirectusClient } from "@/lib/directus"
import { readItems } from "@directus/sdk"
import { Diagnostic } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FlaskConical, ScanLine, Activity } from "lucide-react"
import Link from "next/link"

export default async function DiagnosticsPage() {
    const client = await getDirectusClient();
    // In a real scenario, fetch all and filter client-side or use search params
    // For now, let's assume we fetch generic list
    // const diagnostics = await client.request(readItems('diagnostics', { filter: { status: { _eq: 'published' }}})) as Diagnostic[];

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <div className="bg-blue-950 text-white py-20">
                <SectionContainer>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Diagnostics & Labs</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                        Precision diagnosis with 24/7 NABL Accredited Labs and World-class Radiology Suite.
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white p-2 rounded-lg max-w-xl flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <Input placeholder="Search for tests (e.g. MRI, CBC, Thyroid)..." className="pl-10 border-0 shadow-none focus-visible:ring-0 text-black" />
                        </div>
                        <Button className="bg-amber-500 text-black hover:bg-amber-600">Find Test</Button>
                    </div>
                </SectionContainer>
            </div>

            {/* Categories */}
            <SectionContainer className="py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                        <ScanLine className="w-12 h-12 text-blue-600 mb-4" />
                        <h2 className="text-2xl font-bold mb-3">Radiology</h2>
                        <ul className="space-y-2 text-muted-foreground mb-6">
                            <li>1.5T MRI Scan</li>
                            <li>128 Slice CT Scan</li>
                            <li>4D Ultrasound</li>
                            <li>Digital X-Ray</li>
                        </ul>
                        <Button variant="outline" className="w-full">View All Scans</Button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                        <FlaskConical className="w-12 h-12 text-blue-600 mb-4" />
                        <h2 className="text-2xl font-bold mb-3">Pathology</h2>
                        <ul className="space-y-2 text-muted-foreground mb-6">
                            <li>Complete Blood Count (CBC)</li>
                            <li>Thyroid Profile</li>
                            <li>Diabetes Screening</li>
                            <li>Lipid Profile</li>
                        </ul>
                        <Button variant="outline" className="w-full">View Lab Tests</Button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                        <Activity className="w-12 h-12 text-blue-600 mb-4" />
                        <h2 className="text-2xl font-bold mb-3">Cardiology</h2>
                        <ul className="space-y-2 text-muted-foreground mb-6">
                            <li>ECG / EKG</li>
                            <li>ECHO Cardiogram</li>
                            <li>TMT (Treadmill Test)</li>
                            <li>Holter Monitoring</li>
                        </ul>
                        <Button variant="outline" className="w-full">View Cardiac Tests</Button>
                    </div>
                </div>
            </SectionContainer>

            {/* Home Collection Banner */}
            <SectionContainer className="py-16">
                <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-teal-900 mb-4">Book Home Sample Collection</h2>
                        <p className="text-lg text-teal-700 mb-6">Get tested from the comfort of your home. Safe, hygienic, and on-time.</p>
                        <div className="flex gap-4">
                            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">Book Home Visit</Button>
                            <Button variant="outline" className="bg-white border-teal-200">View Packages</Button>
                        </div>
                    </div>
                    {/* <Image placeholder for Phlebotomist /> */}
                </div>
            </SectionContainer>
        </main>
    )
}
