import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { getLocations } from "@/lib/api";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";

export async function LocationStrip() {
    let locations: { name: string; slug: string; distance?: string }[] = [];

    try {
        const cmsLocations = await getLocations().catch(() => []);
        if (cmsLocations.length > 0) {
            locations = cmsLocations.map((loc: any) => ({
                name: loc.name,
                slug: loc.slug,
                distance: loc.distance_from_hospital || "",
            }));
        }
    } catch {
        // CMS unavailable
    }

    // Fallback to local Tamil Nadu location data
    if (!locations.length && tamilNaduLocations?.length) {
        locations = tamilNaduLocations.slice(0, 12).map((loc: any) => ({
            name: loc.name || loc.city,
            slug: loc.slug,
            distance: loc.distance || loc.distance_from_hospital || "",
        }));
    }

    // Ultimate fallback
    if (!locations.length) {
        locations = [
            { name: "Chennai", slug: "chennai", distance: "135 km" },
            { name: "Ambur", slug: "ambur", distance: "25 km" },
            { name: "Ranipet", slug: "ranipet", distance: "30 km" },
            { name: "Vaniyambadi", slug: "vaniyambadi", distance: "35 km" },
            { name: "Tiruvannamalai", slug: "tiruvannamalai", distance: "60 km" },
            { name: "Krishnagiri", slug: "krishnagiri", distance: "80 km" },
        ];
    }

    // Limit to 12 for the strip
    const displayLocations = locations.slice(0, 12);

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Patients Visit Us From Across Tamil Nadu
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Find directions and travel info from your city to Indira Hospital, Vellore
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {displayLocations.map((loc) => (
                        <Link
                            key={loc.slug}
                            href={`/locations/${loc.slug}`}
                            className="group flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                                <MapPin className="w-5 h-5 text-brand-600" />
                            </div>
                            <span className="font-semibold text-gray-900 text-sm">{loc.name}</span>
                            {loc.distance && <span className="text-xs text-gray-500">{loc.distance}</span>}
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/locations"
                        className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-900 transition-colors"
                    >
                        View All Locations <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
