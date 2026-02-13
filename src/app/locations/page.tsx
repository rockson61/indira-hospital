import { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import {
    enhancedVelloreLocations,
    type EnhancedLocationData,
} from "@/lib/data/enhanced-location-data";
import { tamilNaduLocations, type TamilNaduLocation } from "@/lib/data/tamilnadu-locations";
import { MapPin, Clock, ArrowRight, Train, Bus, Car } from "lucide-react";

export const metadata: Metadata = {
    title: "Locations We Serve | Indira Super Speciality Hospital Vellore",
    description:
        "Indira Super Speciality Hospital serves patients across Tamil Nadu. Find directions, travel info, and transport options from your town or city.",
};

type AnyLocation = {
    name: string;
    slug: string;
    description: string;
    distance: string;
    travelTime: string;
    category: string;
    district: string;
    transportOptions: {
        bus: boolean;
        train: boolean;
        auto?: boolean;
        taxi: boolean;
    };
};

function mergeLocations(): AnyLocation[] {
    const velloreLocations: AnyLocation[] = enhancedVelloreLocations.map((loc) => ({
        name: loc.name,
        slug: loc.slug,
        description: loc.description,
        distance: loc.distance,
        travelTime: loc.travelTime,
        category: loc.category,
        district: loc.district,
        transportOptions: loc.transportOptions,
    }));

    const tnLocations: AnyLocation[] = tamilNaduLocations.map((loc) => ({
        name: loc.name,
        slug: loc.slug,
        description: loc.description,
        distance: loc.distance,
        travelTime: loc.travelTime,
        category: loc.category,
        district: loc.district,
        transportOptions: loc.transportOptions,
    }));

    // Merge and deduplicate by slug
    const slugSet = new Set<string>();
    const merged: AnyLocation[] = [];

    for (const loc of [...velloreLocations, ...tnLocations]) {
        if (!slugSet.has(loc.slug)) {
            slugSet.add(loc.slug);
            merged.push(loc);
        }
    }

    // Sort by distance (numeric value)
    return merged.sort((a, b) => {
        const distA = parseInt(a.distance.replace(/[^\d]/g, "")) || 0;
        const distB = parseInt(b.distance.replace(/[^\d]/g, "")) || 0;
        return distA - distB;
    });
}

function getCategoryBadge(category: string) {
    const styles: Record<string, string> = {
        city: "bg-red-100 text-red-700",
        district_hq: "bg-indigo-100 text-indigo-700",
        major_town: "bg-blue-100 text-blue-700",
        town: "bg-green-100 text-green-700",
        village: "bg-gray-100 text-gray-600",
        industrial: "bg-amber-100 text-amber-700",
        historic: "bg-purple-100 text-purple-700",
    };
    const labels: Record<string, string> = {
        city: "City",
        district_hq: "District HQ",
        major_town: "Major Town",
        town: "Town",
        village: "Village",
        industrial: "Industrial Hub",
        historic: "Historic Town",
    };
    return (
        <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[category] || styles.town
                }`}
        >
            {labels[category] || category}
        </span>
    );
}

export default function LocationsPage() {
    const locations = mergeLocations();

    // Group by region for stats
    const nearbyCount = locations.filter(
        (l) => parseInt(l.distance) <= 50
    ).length;
    const districtsServed = new Set(locations.map((l) => l.district)).size;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-700 text-white py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <p className="text-teal-200 font-medium mb-3 uppercase tracking-wider text-sm">
                        Serving All of Tamil Nadu
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Locations We Serve
                    </h1>
                    <p className="mt-4 text-lg text-teal-100 max-w-2xl leading-relaxed">
                        From nearby Vellore towns to major cities across Tamil Nadu,
                        Indira Super Speciality Hospital provides world-class healthcare
                        accessible to patients across the state.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                        { label: "Locations Listed", value: `${locations.length}+` },
                        { label: "Districts Covered", value: `${districtsServed}` },
                        { label: "Nearby (< 50 km)", value: `${nearbyCount}` },
                        { label: "24/7 Emergency", value: "Always" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white rounded-xl shadow-md p-5 text-center"
                        >
                            <p className="text-2xl font-bold text-purple-700">
                                {stat.value}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Location Cards */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <SectionHeader
                    title="Towns & Cities Across Tamil Nadu"
                    subtitle="All Locations"
                    description="Click on any location to learn more about how to reach Indira Hospital from there."
                />
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locations.map((loc) => (
                        <Link
                            key={loc.slug}
                            href={`/locations/${loc.slug}`}
                            className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            {/* Top gradient bar */}
                            <div className="h-2 bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:from-purple-600 group-hover:to-purple-500 transition-all" />

                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                                        {loc.name}
                                    </h3>
                                    {getCategoryBadge(loc.category)}
                                </div>

                                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                                    {loc.description}
                                </p>

                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4 text-teal-600" />
                                        {loc.distance}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="h-4 w-4 text-teal-600" />
                                        {loc.travelTime}
                                    </span>
                                </div>

                                {/* Transport options */}
                                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                                    {loc.transportOptions.train && (
                                        <span className="flex items-center gap-1 text-xs text-gray-500">
                                            <Train className="h-3.5 w-3.5" /> Train
                                        </span>
                                    )}
                                    {loc.transportOptions.bus && (
                                        <span className="flex items-center gap-1 text-xs text-gray-500">
                                            <Bus className="h-3.5 w-3.5" /> Bus
                                        </span>
                                    )}
                                    {loc.transportOptions.taxi && (
                                        <span className="flex items-center gap-1 text-xs text-gray-500">
                                            <Car className="h-3.5 w-3.5" /> Taxi
                                        </span>
                                    )}
                                    <span className="ml-auto text-purple-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Details
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">Can&#39;t Find Your Location?</h2>
                    <p className="mt-4 text-purple-100 text-lg">
                        We serve patients from across Tamil Nadu and neighboring states.
                        Contact us for directions and transport assistance.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/book-appointment"
                            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
