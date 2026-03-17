import { Metadata } from "next";
import Link from "next/link";
import {
    MapPin, MessageCircle, Phone, ArrowRight, ChevronRight,
    Home, Star, Clock, Bed, Wifi, Car, CheckCircle2
} from "lucide-react";
import { siteConfig } from "@/config/site";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { SectionContainer } from "@/components/ui/section-container";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";

export const metadata: Metadata = {
    title: "Accommodation Near Indira Hospital Vellore | Patient Lodging Guide",
    description: "Complete accommodation guide for international patients visiting Indira Hospital, Vellore. Hotels, lodges, and hospital suites within 500m. Halal food, attendant rooms, budget to premium options.",
    keywords: ["hotels near Indira Hospital Vellore", "lodging Vellore hospital", "patient accommodation Vellore", "international patient stay Vellore", "rooms near CMC Vellore"],
};

const HOTELS = [
    { name: "Fortune Inn Valley View", distance: "800m", stars: 4, price: "Premium stay", halal: true, features: ["AC rooms", "Restaurant", "Wi-Fi", "Taxi service"] },
    { name: "The Vellore Park Hotel", distance: "1.2 km", stars: 4, price: "Premium stay", halal: true, features: ["Business centre", "Restaurant", "Gym", "24/7 reception"] },
    { name: "Hotel Darling Classic", distance: "400m", stars: 3, price: "Mid-range", halal: false, features: ["Walking distance", "Budget friendly", "Clean rooms", "Wi-Fi"] },
    { name: "Vijay Park Hotel", distance: "600m", stars: 3, price: "Budget friendly", halal: false, features: ["South Indian food", "Laundry", "24/7 reception"] },
    { name: "Hotel Anand Regency", distance: "700m", stars: 3, price: "Mid-range", halal: false, features: ["AC rooms", "Room service", "Parking", "Wi-Fi"] },
    { name: "Indira Hospital Attendant Rooms", distance: "In hospital", stars: 0, price: "Budget stay", halal: false, features: ["Inside hospital", "Attendant beds", "Shared bathroom", "24/7 security"] },
];

const WA = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I need help with accommodation near Indira Hospital Vellore. Please help.")}`;

export default function LodgingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            {/* HERO */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-fuchsia-950 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-14 lg:pt-52 lg:pb-16">
                    <nav className="flex items-center text-sm text-fuchsia-300 mb-6 gap-1 flex-wrap">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/patients/international" className="hover:text-white">International</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">Lodging Guide</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-fuchsia-200 text-sm font-bold mb-5">
                        <Home className="w-4 h-4" /> Patient Accommodation Near Indira Hospital
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Where to Stay Near<br />
                        <span className="text-fuchsia-400">Indira Hospital, Vellore</span>
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl">From budget attendant rooms inside the hospital to 4-star hotels — we help you find accommodation that fits your needs, budget, and dietary requirements.</p>
                    <div className="flex gap-4 mt-7">
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all">
                            <MessageCircle className="w-4 h-4" /> Ask for a Recommendation
                        </a>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 space-y-12">
                {/* Hospital rooms note */}
                <div className="flex items-start gap-4 p-6 bg-fuchsia-50 dark:bg-fuchsia-950/30 rounded-2xl border border-fuchsia-100 dark:border-fuchsia-900/40">
                    <Bed className="w-6 h-6 text-fuchsia-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h2 className="font-bold text-fuchsia-800 dark:text-fuchsia-300 mb-2">Stay Inside the Hospital</h2>
                        <p className="text-fuchsia-700 dark:text-fuchsia-400 text-sm leading-relaxed">
                            Indira Hospital offers private rooms with attendant cots and shared attendant facilities. For long-stay international patients, this is the most convenient option. Ask your coordinator to arrange this on admission.
                        </p>
                    </div>
                </div>

                {/* Hotel grid */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nearby Hotels & Lodges</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {HOTELS.map((h) => (
                            <div key={h.name} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-fuchsia-200 transition-all">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base">{h.name}</h3>
                                        <div className="flex items-center gap-1 mt-1">
                                            <MapPin className="w-3.5 h-3.5 text-fuchsia-500" />
                                            <span className="text-xs text-gray-500">{h.distance} from hospital</span>
                                        </div>
                                    </div>
                                    {h.halal && (
                                        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 text-xs rounded-full font-bold">Halal ✓</span>
                                    )}
                                </div>
                                <p className="text-fuchsia-600 font-bold text-sm mb-3">{h.price}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {h.features.map((f) => (
                                        <span key={f} className="text-xs px-2 py-1 bg-slate-50 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-lg font-medium">{f}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What's included */}
                <section className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What Indira Hospital Arranges for You</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {[
                            "Hotel booking assistance on request",
                            "Halal / vegetarian meal arrangements in hospital",
                            "24/7 coordinator for accommodation queries",
                            "Attendant cot in private room (included)",
                            "Airport pickup and hospital drop-off",
                            "Extension of hospital stay for recovery",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <p className="text-sm text-gray-700 dark:text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* TRUST SIGNALS */}
            <SectionContainer className="max-w-7xl mx-auto py-24 border-t border-slate-100 dark:border-slate-800">
                <div className="grid lg:grid-cols-2 gap-16">
                    <EntityFAQs
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="facilities"
                        title="Accommodation & Stay FAQs"
                        description="Common questions about hospital rooms, guest houses, and attendant facilities."
                    />
                    <EntityReviews
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="facilities"
                        title="What Our Guests Say"
                        description="Feedback from international guests about their stay in Vellore."
                    />
                </div>
            </SectionContainer>

            <EntityCardSection type="doctors" title="Our Specialists" subtitle="Expert Care" limit={6} className="bg-white dark:bg-slate-950 border-t" />
            <InternalLinkGrid type="health-packages" title="Wellness Packages" subtitle="Health Screening" limit={8} className="bg-slate-50 dark:bg-slate-900/50 border-y" />
            <InternalLinkGrid type="diagnostics" title="Diagnostic Services" subtitle="NABL Accredited" limit={12} className="bg-white dark:bg-slate-950 border-b" />

            {/* CTA */}
            <div className="bg-fuchsia-700 text-white py-12 text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-2xl font-black mb-3">Need Help Finding the Right Accommodation?</h2>
                    <p className="text-fuchsia-100 mb-6">Our international coordinator will suggest the best option for your budget, diet, and length of stay.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all">
                        <MessageCircle className="w-5 h-5" /> WhatsApp Our Coordinator
                    </a>
                </div>
            </div>
        </div>
    );
}
