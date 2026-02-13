import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { MapPin, Bus, Train, Phone, Navigation, ArrowLeft, CheckCircle2 } from "lucide-react";
import { enhancedVelloreLocations } from "@/lib/data/enhanced-location-data";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { clinicConfig } from "@/lib/data/clinic-config";

// Merge all locations for static generation
function getAllLocations() {
    const slugSet = new Set<string>();
    const merged: Array<{
        name: string;
        slug: string;
        district: string;
        distance: string;
        travelTime: string;
        description: string;
        category: string;
        transportOptions: { bus: boolean; train: boolean; auto: boolean; taxi: boolean };
        specialFeatures?: string[];
    }> = [];

    for (const loc of enhancedVelloreLocations) {
        if (!slugSet.has(loc.slug)) {
            slugSet.add(loc.slug);
            merged.push({
                name: loc.name,
                slug: loc.slug,
                district: loc.district,
                distance: loc.distance,
                travelTime: loc.travelTime,
                description: loc.description,
                category: loc.category,
                transportOptions: loc.transportOptions,
                specialFeatures: loc.specialFeatures,
            });
        }
    }

    for (const loc of tamilNaduLocations) {
        if (!slugSet.has(loc.slug)) {
            slugSet.add(loc.slug);
            merged.push({
                name: loc.name,
                slug: loc.slug,
                district: loc.district,
                distance: loc.distance,
                travelTime: loc.travelTime,
                description: loc.description,
                category: loc.category,
                transportOptions: loc.transportOptions,
                specialFeatures: loc.specialFeatures,
            });
        }
    }

    return merged;
}

const allLocations = getAllLocations();

export function generateStaticParams() {
    return allLocations.map((loc) => ({
        slug: loc.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const location = allLocations.find((l) => l.slug === slug);

    if (!location) {
        return { title: "Location Not Found" };
    }

    return {
        title: `Best Hospital Near ${location.name} | Indira Super Speciality Hospital Vellore`,
        description: `Indira Super Speciality Hospital is just ${location.travelTime} from ${location.name}, ${location.district}. World-class healthcare with 24/7 emergency, advanced surgeries, and expert doctors serving patients from ${location.name}.`,
        openGraph: {
            title: `Best Hospital Near ${location.name} | Indira Hospital Vellore`,
            description: `Just ${location.distance} from ${location.name}. 24/7 emergency, super-specialist doctors, and affordable care.`,
        },
    };
}

export default async function LocationPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const location = allLocations.find((l) => l.slug === slug);

    if (!location) {
        notFound();
    }

    const phone = clinicConfig.phone;
    const isNearby = parseInt(location.distance) <= 50;

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 text-white py-20 lg:py-28">
                <SectionContainer>
                    <Link
                        href="/locations"
                        className="inline-flex items-center text-teal-200 hover:text-white mb-6 transition-colors text-sm"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        All Locations
                    </Link>
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-amber-500 text-black font-bold text-xs rounded-full mb-4 uppercase tracking-wider">
                            Serving Patients from {location.name}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Best Super Speciality Hospital{" "}
                            {isNearby ? "Near" : "Accessible from"}{" "}
                            {location.name}
                        </h1>
                        <p className="text-xl text-teal-100 mb-4">
                            World-class medical care just{" "}
                            <strong className="text-white">
                                {location.travelTime}
                            </strong>{" "}
                            ({location.distance}) away. Indira Super Speciality Hospital
                            provides comprehensive healthcare for residents of{" "}
                            {location.name}, {location.district} district.
                        </p>
                        <p className="text-teal-200 mb-8">
                            {location.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={`tel:${phone}`}
                                className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors"
                            >
                                <Phone className="w-4 h-4 mr-2" /> Call for
                                Appointment
                            </a>
                            <Link
                                href="/book-appointment"
                                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-lg transition-colors border border-white/20"
                            >
                                <Navigation className="w-4 h-4 mr-2" /> Book
                                Online
                            </Link>
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
                            How to Reach Indira Hospital from{" "}
                            {location.name}
                        </h2>
                        <div className="space-y-4">
                            {location.transportOptions.bus && (
                                <div className="bg-slate-50 p-6 rounded-xl border">
                                    <h3 className="font-bold flex items-center gap-2 mb-2">
                                        <Bus className="w-5 h-5 text-blue-600" />{" "}
                                        By Bus
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {isNearby
                                            ? `Frequent bus services run from ${location.name} Bus Stand to Vellore New Bus Stand. From there, take a local bus or auto (5 mins) to Indira Hospital.`
                                            : `Take a government or private bus from ${location.name} to Vellore. Buses are available from the ${location.name} bus station with multiple departures daily. From Vellore Bus Stand, the hospital is 5 minutes by auto.`}
                                    </p>
                                </div>
                            )}

                            {location.transportOptions.train && (
                                <div className="bg-slate-50 p-6 rounded-xl border">
                                    <h3 className="font-bold flex items-center gap-2 mb-2">
                                        <Train className="w-5 h-5 text-blue-600" />{" "}
                                        By Train
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Board a train to Katpadi Junction
                                        (Vellore). Katpadi is well-connected with
                                        trains from {location.name}
                                        {parseInt(location.distance) > 100
                                            ? " via Chennai or other major junctions"
                                            : ""}
                                        . The hospital is approximately 15
                                        minutes drive from Katpadi station.
                                    </p>
                                </div>
                            )}

                            <div className="bg-slate-50 p-6 rounded-xl border">
                                <h3 className="font-bold flex items-center gap-2 mb-2">
                                    🚗 By Car / Taxi
                                </h3>
                                <p className="text-muted-foreground">
                                    Drive from {location.name} to Vellore via the
                                    nearest highway. The total distance is{" "}
                                    {location.distance} and the drive takes
                                    approximately {location.travelTime}
                                    . Taxi services are available from{" "}
                                    {location.name}.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Why Patients from {location.name} Choose Us
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Indira Hospital has been the trusted healthcare
                            partner for families across {location.district}{" "}
                            district and beyond. We understand the health needs
                            of the {location.name} community.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "24/7 Emergency & Ambulance Support",
                                `Dedicated Patient Coordinator for ${location.name}`,
                                "Zero-Wait OPD for Outstation Patients",
                                "Cashless Insurance & Affordable Packages",
                                "15+ Super-Specialist Departments",
                                "Advanced Laparoscopic & Laser Surgery",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg text-teal-900 font-medium"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionContainer>

            {/* Departments Section */}
            <section className="bg-white py-16">
                <SectionContainer>
                    <h2 className="text-2xl font-bold text-center mb-8">
                        Healthcare Services Available for {location.name}{" "}
                        Patients
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                name: "General Surgery",
                                slug: "general-surgery",
                                desc: "Piles, Hernia, Thyroid",
                            },
                            {
                                name: "Cardiology",
                                slug: "cardiology",
                                desc: "Heart care & Interventions",
                            },
                            {
                                name: "Orthopaedics",
                                slug: "orthopaedics",
                                desc: "Joint Replacement & Trauma",
                            },
                            {
                                name: "Dental",
                                slug: "dental",
                                desc: "Implants, RCT & Cosmetic",
                            },
                            {
                                name: "Gynaecology",
                                slug: "obstetrics-gynaecology",
                                desc: "Women's Health & Delivery",
                            },
                            {
                                name: "Urology",
                                slug: "urology",
                                desc: "Kidney & Urinary Care",
                            },
                            {
                                name: "Gastroenterology",
                                slug: "gastroenterology",
                                desc: "Digestive System Care",
                            },
                            {
                                name: "ICU & Emergency",
                                slug: "icu-emergency",
                                desc: "24/7 Critical Care",
                            },
                        ].map((dept) => (
                            <Link
                                key={dept.slug}
                                href={`/departments/${dept.slug}`}
                                className="p-4 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors group text-center"
                            >
                                <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                                    {dept.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">
                                    {dept.desc}
                                </p>
                            </Link>
                        ))}
                    </div>
                </SectionContainer>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
                <SectionContainer>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold">
                            Need Medical Care from {location.name}?
                        </h2>
                        <p className="mt-4 text-purple-100 text-lg">
                            Book an appointment today. We provide pickup
                            assistance and dedicated coordinators for patients
                            from {location.name}.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/book-appointment"
                                className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors"
                            >
                                Book Appointment
                            </Link>
                            <a
                                href={`tel:${phone}`}
                                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
                            >
                                Call {phone}
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </main>
    );
}
