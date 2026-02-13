import { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import {
    enhancedVelloreLocations,
} from "@/lib/data/enhanced-location-data";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { SEED_DATA } from "@/lib/data/seed-data";
import {
    MapPin, Clock, ArrowRight, Train, Bus, Car,
    MessageCircle, Phone, Zap, Star, Shield,
    CheckCircle2, Award, Users, Stethoscope, Heart
} from "lucide-react";

const WHATSAPP_NUMBER = "917010650063";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want to book an appointment at Indira Super Speciality Hospital.")}`;

export const metadata: Metadata = {
    title: "Locations We Serve Across Tamil Nadu | Best Laparoscopic Surgery, Laser Piles | Indira Hospital",
    description:
        "Indira Super Speciality Hospital serves 79+ locations across Tamil Nadu. #1 for Laparoscopic Surgery, Laser Piles Treatment, Fistula Removal. 15+ departments, 24/7 emergency. WhatsApp us now!",
    keywords: [
        "hospital locations Tamil Nadu",
        "best hospital Vellore",
        "laparoscopic surgery Tamil Nadu",
        "laser piles treatment near me",
        "super speciality hospital Tamil Nadu",
    ],
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
    const slugSet = new Set<string>();
    const merged: AnyLocation[] = [];

    for (const loc of enhancedVelloreLocations) {
        if (!slugSet.has(loc.slug)) {
            slugSet.add(loc.slug);
            merged.push({
                name: loc.name, slug: loc.slug, description: loc.description,
                distance: loc.distance, travelTime: loc.travelTime,
                category: loc.category, district: loc.district,
                transportOptions: loc.transportOptions,
            });
        }
    }

    for (const loc of tamilNaduLocations) {
        if (!slugSet.has(loc.slug)) {
            slugSet.add(loc.slug);
            merged.push({
                name: loc.name, slug: loc.slug, description: loc.description,
                distance: loc.distance, travelTime: loc.travelTime,
                category: loc.category, district: loc.district,
                transportOptions: loc.transportOptions,
            });
        }
    }

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
            className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[category] || styles.town}`}
        >
            {labels[category] || category}
        </span>
    );
}

export default function LocationsPage() {
    const locations = mergeLocations();
    const nearbyCount = locations.filter((l) => parseInt(l.distance) <= 50).length;
    const districtsServed = new Set(locations.map((l) => l.district)).size;
    const departments = SEED_DATA.services;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* ========== HERO ========== */}
            <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-teal-200 font-medium mb-3 uppercase tracking-wider text-sm">
                                Serving All of Tamil Nadu
                            </p>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                                Best Hospital for{" "}
                                <span className="text-amber-400">Laparoscopic Surgery</span>,{" "}
                                <span className="text-amber-400">Laser Piles</span> &{" "}
                                <span className="text-amber-400">Fistula</span>
                            </h1>
                            <p className="mt-4 text-lg text-teal-100 max-w-xl leading-relaxed">
                                {locations.length}+ locations across {districtsServed} districts.
                                World-class healthcare accessible from anywhere in Tamil Nadu.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 text-lg"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    WhatsApp Us Now
                                </a>
                                <a
                                    href="tel:+919842342525"
                                    className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl transition-colors border border-white/20"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    +91 98423 42525
                                </a>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: MapPin, label: "Locations Served", value: `${locations.length}+` },
                                { icon: Award, label: "Districts Covered", value: `${districtsServed}` },
                                { icon: Users, label: "Patients Treated", value: "1L+" },
                                { icon: Stethoscope, label: "Departments", value: "15+" },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-white/10 backdrop-blur rounded-2xl p-5 text-center border border-white/10">
                                    <stat.icon className="w-7 h-7 text-amber-400 mx-auto mb-2" />
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="text-xs text-teal-200">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== SIGNATURE TREATMENTS (SEO/Marketing) ========== */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Why Patients Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
                            #1 for Laparoscopic & Laser Surgery in Tamil Nadu
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-5">
                                <Zap className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Laparoscopic Surgery</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Advanced keyhole surgery for Hernia, Gallbladder, Appendix & Bariatric.
                                Minimal scars, same-day discharge.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {["3mm Incision", "Same Day Discharge", "Insurance Cashless", "25+ Years Surgeons"].map(f => (
                                    <li key={f} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />{f}
                                    </li>
                                ))}
                            </ul>
                            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need information about Laparoscopic Surgery.")}`}
                                target="_blank" rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-800 group-hover:gap-2 gap-1 transition-all">
                                Enquire on WhatsApp <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-4 right-4 px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                                Most Popular
                            </div>
                            <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-5">
                                <Star className="w-7 h-7 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Laser Piles Treatment</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                USFDA-approved laser for Piles, Fissure & Fistula.
                                Painless 30-minute procedure, 24-hour recovery.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {["No Cuts, No Stitches", "30 Minute Procedure", "24-Hour Recovery", "10,000+ Treated"].map(f => (
                                    <li key={f} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />{f}
                                    </li>
                                ))}
                            </ul>
                            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need information about Laser Piles Treatment.")}`}
                                target="_blank" rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center text-red-600 font-semibold text-sm hover:text-red-800 group-hover:gap-2 gap-1 transition-all">
                                Enquire on WhatsApp <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-5">
                                <Shield className="w-7 h-7 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Fistula & Fissure Removal</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Permanent cure using VAAFT / Laser / LIFT techniques.
                                No recurrence, minimal pain, quick recovery.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {["VAAFT Technique", "No Recurrence", "Minimal Downtime", "Expert Proctologists"].map(f => (
                                    <li key={f} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />{f}
                                    </li>
                                ))}
                            </ul>
                            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need information about Fistula Treatment.")}`}
                                target="_blank" rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center text-teal-600 font-semibold text-sm hover:text-teal-800 group-hover:gap-2 gap-1 transition-all">
                                Enquire on WhatsApp <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== DEPARTMENTS CROSS-LINK ========== */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">15+ Super Specialities</span>
                        <h2 className="text-2xl font-bold mt-2 text-gray-900">Our Departments</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {departments.map((dept) => (
                            <Link
                                key={dept.slug}
                                href={`/departments/${dept.slug}`}
                                className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 transition-colors"
                            >
                                {dept.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== LOCATION CARDS ========== */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <SectionHeader
                    title="Towns & Cities Across Tamil Nadu"
                    subtitle="All Locations"
                    description="Click on any location for directions, travel info, departments, and doctors serving your area."
                />
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locations.map((loc) => (
                        <Link
                            key={loc.slug}
                            href={`/locations/${loc.slug}`}
                            className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
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
                                        Details <ArrowRight className="h-3.5 w-3.5" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ========== WHATSAPP CTA ========== */}
            <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-12">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
                        <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Can&apos;t Find Your Location?</h2>
                    <p className="mt-3 text-green-100 text-lg max-w-xl mx-auto">
                        We serve patients from across Tamil Nadu and neighboring states.
                        WhatsApp us for instant appointment booking, cost estimates, and transport help.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-xl text-lg hover:bg-green-50 transition-colors shadow-lg"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Chat on WhatsApp
                        </a>
                        <a
                            href="tel:+919842342525"
                            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-colors border border-white/20"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
