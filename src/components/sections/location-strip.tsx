import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const topLocations = [
    { name: "Chennai", slug: "chennai", distance: "135 km" },
    { name: "Ambur", slug: "ambur", distance: "25 km" },
    { name: "Ranipet", slug: "ranipet", distance: "30 km" },
    { name: "Vaniyambadi", slug: "vaniyambadi", distance: "35 km" },
    { name: "Tiruvannamalai", slug: "tiruvannamalai", distance: "60 km" },
    { name: "Villupuram", slug: "villupuram", distance: "120 km" },
    { name: "Kanchipuram", slug: "kanchipuram", distance: "90 km" },
    { name: "Tindivanam", slug: "tindivanam", distance: "135 km" },
    { name: "Krishnagiri", slug: "krishnagiri", distance: "80 km" },
    { name: "Dharmapuri", slug: "dharmapuri", distance: "120 km" },
    { name: "Salem", slug: "salem", distance: "145 km" },
    { name: "Bengaluru", slug: "bengaluru", distance: "200 km" },
];

export function LocationStrip() {
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
                    {topLocations.map((loc) => (
                        <Link
                            key={loc.slug}
                            href={`/locations/${loc.slug}`}
                            className="group flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                                <MapPin className="w-5 h-5 text-brand-600" />
                            </div>
                            <span className="font-semibold text-gray-900 text-sm">{loc.name}</span>
                            <span className="text-xs text-gray-500">{loc.distance}</span>
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
