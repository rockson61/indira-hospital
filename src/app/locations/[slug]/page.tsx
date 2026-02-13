import { notFound } from "next/navigation"
import { getEnhancedLocationBySlug } from "@/lib/data/enhanced-location-data" // Assume this helper exists or I copy logic
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { MapPin, Bus, Train, Phone, Navigation } from "lucide-react"

// Import logic from enhanced-location-data (since I saw the file earlier)
import { enhancedVelloreLocations } from "@/lib/data/enhanced-location-data"

export async function generateStaticParams() {
    return enhancedVelloreLocations.map((loc) => ({
        slug: loc.slug,
    }))
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const location = enhancedVelloreLocations.find(l => l.slug === slug);

    if (!location) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-teal-900 text-white py-20">
                <SectionContainer>
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-amber-500 text-black font-bold text-xs rounded-full mb-4 uppercase tracking-wider">
                            Serving Patients from {location.name}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Best Super Speciality Hospital Accessible from {location.name}
                        </h1>
                        <p className="text-xl text-teal-100 mb-8">
                            World-class medical care just {location.travelTime} away.
                            Indira Hospital provides {location.category === 'industrial' ? 'specialized trauma & industrial care' : 'comprehensive healthcare'} for residents of {location.name}.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-white text-teal-900 hover:bg-teal-50">
                                <Phone className="w-4 h-4 mr-2" /> Call for Appointment
                            </Button>
                            <Button variant="outline" className="border-white text-white hover:bg-white/10">
                                <Navigation className="w-4 h-4 mr-2" /> Get Directions
                            </Button>
                        </div>
                    </div>
                </SectionContainer>
            </div>

            {/* Travel Guide */}
            <SectionContainer className="py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <MapPin className="w-6 h-6 text-teal-600" />
                            How to Reach Indira Hospital
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 p-6 rounded-xl border">
                                <h3 className="font-bold flex items-center gap-2 mb-2">
                                    <Bus className="w-5 h-5 text-blue-600" /> By Bus
                                </h3>
                                <p className="text-muted-foreground">
                                    {location.transportOptions.bus ?
                                        `Frequent bus services available from ${location.name} Bus Stand to Vellore New Bus Stand. From there, take a local bus/auto (5 mins) to Indira Hospital.` :
                                        `Connect via nearest major bus terminal.`}
                                </p>
                            </div>

                            {location.transportOptions.train && (
                                <div className="bg-slate-50 p-6 rounded-xl border">
                                    <h3 className="font-bold flex items-center gap-2 mb-2">
                                        <Train className="w-5 h-5 text-blue-600" /> By Train
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Board a train to Katpadi Junction (Vellore). The hospital is approximately 15 mins drive from the station.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Local Amenities / Context */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Why Patients from {location.name} Choose Us</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Indira Hospital has been the trusted healthcare partner for families in {location.district} district.
                            We understand the specific health needs of the {location.name} community.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg text-teal-900 font-medium">
                                <span className="w-2 h-2 rounded-full bg-teal-500" />
                                24/7 Emergency Transport Support
                            </li>
                            <li className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg text-teal-900 font-medium">
                                <span className="w-2 h-2 rounded-full bg-teal-500" />
                                Dedicated Patient Coordinator for {location.name}
                            </li>
                            <li className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg text-teal-900 font-medium">
                                <span className="w-2 h-2 rounded-full bg-teal-500" />
                                Zero-Wait OPD for Outstation Patients
                            </li>
                        </ul>
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
