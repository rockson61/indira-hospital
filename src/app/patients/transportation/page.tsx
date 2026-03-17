import { Metadata } from "next";
import Link from "next/link";
import {
    Car, Train, Bus, Plane, MessageCircle, Phone, MapPin,
    ArrowRight, ChevronRight, Clock, CheckCircle2, Navigation, AlertCircle
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";

export const metadata: Metadata = {
    title: "How to Reach Indira Hospital Vellore | Transport Guide | Directions",
    description: "Complete guide to reach Indira Super Speciality Hospital, Vellore by taxi, auto, bus, train (Katpadi), and Chennai Airport (MAA). International patient airport pickup included.",
    keywords: [
        "how to reach Indira Hospital Vellore",
        "Katpadi railway station to hospital",
        "Chennai airport to Vellore hospital",
        "transport Vellore hospital",
        "bus to Indira Hospital",
        "taxi Vellore hospital",
    ],
};

const WA = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I need transport help to reach Indira Hospital, Vellore. Please help.")}`;

const TRANSPORT_MODES = [
    {
        icon: Car,
        color: "fuchsia",
        title: "Taxi / Cab",
        badge: "Easiest",
        steps: [
            "Book Ola or Uber from anywhere in Vellore or Katpadi",
            "Search: Indira Super Speciality Hospital, Gandhi Nagar, Vellore",
            "Arrive at 54, Katpadi Road — main entrance is on the left",
        ],
        tip: "Autos are also readily available near Katpadi Junction and Vellore Bus Stand.",
    },
    {
        icon: Train,
        color: "blue",
        title: "By Train — Katpadi Junction",
        badge: "Budget Friendly",
        steps: [
            "Alight at Katpadi Junction (KPD) — the main railway station serving Vellore",
            "Take an auto or cab to Gandhi Nagar (10–12 minutes)",
            "The hospital is on Katpadi Road, 5 minutes from the main road",
        ],
        tip: "Express trains from Chennai Central (MAS) take ~1.5 hrs. From Bangalore ~3 hrs. From Tirupati ~2 hrs.",
    },
    {
        icon: Bus,
        color: "green",
        title: "By Bus",
        badge: "City & Intercity",
        steps: [
            "State-run TNSTC buses from Chennai, Bangalore, and Tirupati stop at Vellore Bus Stand",
            "Take city bus Route 1, 4, or 27 towards Gandhi Nagar / Sathuvachari",
            "Alight at Gandhi Nagar — Indira Hospital is a 2-min walk on Katpadi Road",
        ],
        tip: "Direct private buses from Chennai (180km) run frequently via Poonamallee.",
    },
    {
        icon: Plane,
        color: "amber",
        title: "From Chennai Airport (MAA)",
        badge: "International Patients",
        steps: [
            "Fly into Chennai International Airport (MAA) — nearest major airport",
            "Hospital arranges complimentary pickup for international patients",
            "Drive time: 2.5–3 hours (130km) via NH48 Chennai–Vellore highway",
        ],
        tip: "WhatsApp us your flight details and we will arrange a driver to meet you at arrivals.",
    },
];

const EMERGENCY = {
    title: "Emergency or Ambulance",
    desc: "Our 24/7 advanced life support ambulance can be dispatched to your location anywhere in Vellore district and neighboring areas.",
    steps: [
        "Call our emergency number immediately",
        "Provide your exact GPS location or address",
        "Our paramedic team will be dispatched within minutes",
    ],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Reach Indira Super Speciality Hospital, Vellore",
    description: "Multiple ways to travel to Indira Hospital — by taxi, train from Katpadi, city bus, or from Chennai Airport for international patients.",
    step: TRANSPORT_MODES.map((m, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: m.title,
        text: m.steps.join(". "),
    })),
};

export default function TransportationPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* HERO */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-14 lg:pt-52 lg:pb-16">
                    <nav className="flex items-center text-sm text-slate-400 mb-6 gap-1 flex-wrap">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/patients" className="hover:text-white">Patient Resources</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">Transportation</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-slate-200 text-sm font-bold mb-5">
                        <Navigation className="w-4 h-4 text-fuchsia-400" /> Getting to Indira Hospital
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                        How to Reach<br />
                        <span className="text-fuchsia-400">Indira Hospital, Vellore</span>
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                        54, Katpadi Road, Gandhi Nagar, Vellore — 632006.<br />
                        Accessible by taxi, auto, bus, and train (Katpadi Junction). International patients get complimentary airport pickup from Chennai.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-7">
                        <a href="https://www.google.com/maps/dir/?api=1&destination=Indira+Super+Speciality+Hospital+Vellore"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-xl transition-all">
                            <MapPin className="w-4 h-4" /> Open in Google Maps
                        </a>
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all">
                            <MessageCircle className="w-4 h-4" /> WhatsApp for Help
                        </a>
                    </div>
                </div>
            </section>

            {/* ADDRESS BAR */}
            <div className="bg-fuchsia-700 text-white py-3.5">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6 text-sm text-center">
                    {[
                        { icon: MapPin, v: "54, Katpadi Road, Gandhi Nagar, Vellore — 632006" },
                        { icon: Clock, v: "Open 24/7 — Emergency always ready" },
                        { icon: Phone, v: siteConfig.contact.phone },
                    ].map(({ icon: Icon, v }) => (
                        <div key={v} className="flex items-center gap-2 text-fuchsia-100">
                            <Icon className="w-4 h-4 text-fuchsia-200 flex-shrink-0" />
                            <span>{v}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 space-y-12">

                {/* TRANSPORT MODES */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Getting Here — All Transport Options</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {TRANSPORT_MODES.map((mode) => {
                            const Icon = mode.icon;
                            const colorMap: Record<string, string> = {
                                fuchsia: "bg-fuchsia-50 dark:bg-fuchsia-950 border-fuchsia-100 dark:border-fuchsia-900 text-fuchsia-600",
                                blue: "bg-blue-50 dark:bg-blue-950 border-blue-100 dark:border-blue-900 text-blue-600",
                                green: "bg-green-50 dark:bg-green-950 border-green-100 dark:border-green-900 text-green-600",
                                amber: "bg-amber-50 dark:bg-amber-950 border-amber-100 dark:border-amber-900 text-amber-600",
                            };
                            const iconClass = colorMap[mode.color] || colorMap.fuchsia;
                            return (
                                <div key={mode.title} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${iconClass}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white">{mode.title}</h3>
                                            <span className="inline-block text-[10px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-gray-500 rounded-full">{mode.badge}</span>
                                        </div>
                                    </div>
                                    <ol className="space-y-2 mb-4">
                                        {mode.steps.map((step, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs mt-0.5">{i + 1}</span>
                                                {step}
                                            </li>
                                        ))}
                                    </ol>
                                    <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs text-gray-600 dark:text-gray-400">
                                        <AlertCircle className="w-4 h-4 text-fuchsia-500 flex-shrink-0" />
                                        {mode.tip}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* EMERGENCY */}
                <section className="bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 rounded-2xl p-7">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-red-900 dark:text-red-200 mb-2">🚑 {EMERGENCY.title}</h2>
                            <p className="text-red-700 dark:text-red-300 text-sm mb-4">{EMERGENCY.desc}</p>
                            <div className="space-y-2">
                                {EMERGENCY.steps.map((s, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm text-red-800 dark:text-red-200">
                                        <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                        {s}
                                    </div>
                                ))}
                            </div>
                            <a href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s+/g, "")}`}
                                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-sm transition-all">
                                <Phone className="w-4 h-4" /> Call Emergency Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* MAP + ADDRESS */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <section className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm h-[380px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6000000000004!2d79.1333333!3d12.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa2e667%3A0x5397944bf009778c!2sIndira%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            className="w-full h-full"
                            loading="lazy"
                            title="Indira Hospital Location Map"
                        />
                    </section>

                    <section className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-100 dark:border-slate-800 shadow-sm space-y-5">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Hospital Address & Contact</h2>
                        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Indira Super Speciality Hospital</p>
                                    <p>54, Katpadi Road, Suthanthira Ponvizha Nagar,<br />Gandhi Nagar, Vellore — 632006, Tamil Nadu, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
                                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="font-semibold text-fuchsia-700 hover:underline">{siteConfig.contact.phone}</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
                                <span><strong>24 × 7</strong> — Emergency, OPD & Pharmacy</span>
                            </div>
                        </div>
                        <div className="border-t border-slate-100 dark:border-slate-800 pt-5 space-y-3">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nearest Landmarks</p>
                            {[
                                "Katpadi Railway Junction — ~10 min auto",
                                "Vellore Bus Stand — ~15 min by city bus",
                                "CMC Vellore Hospital — ~5 min drive",
                                "Vellore Fort — ~8 min",
                            ].map((l) => (
                                <div key={l} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full flex-shrink-0" />
                                    {l}
                                </div>
                            ))}
                        </div>
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 mt-3 px-5 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all w-full text-sm">
                            <MessageCircle className="w-4 h-4" /> WhatsApp for Directions
                        </a>
                    </section>
                </div>

                {/* INTERNATIONAL NOTE */}
                <section className="bg-gradient-to-r from-fuchsia-50 to-blue-50 dark:from-fuchsia-950/30 dark:to-blue-950/30 rounded-2xl p-7 border border-fuchsia-100 dark:border-fuchsia-900/30">
                    <div className="flex items-start gap-4">
                        <Plane className="w-6 h-6 text-fuchsia-500 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">International Patients — Airport Pickup</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                We provide <strong className="text-fuchsia-700 dark:text-fuchsia-300">complimentary airport transfer</strong> for international patients from Chennai Airport (MAA). WhatsApp us your flight number and arrival time at least 48 hours in advance.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/patients/international" className="inline-flex items-center gap-2 text-sm text-fuchsia-600 hover:text-fuchsia-700 font-bold">
                                    International Patient Guide <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="/patients/medical-visa-india" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-bold">
                                    Medical Visa Guide <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <EntityCardSection type="locations" title="Our Centers Across Vellore" subtitle="Find a Branch" limit={6} className="bg-white dark:bg-slate-950 border-t" />
            <InternalLinkGrid type="services" title="All Treatments A–Z" subtitle="Services Directory" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-y" />
            <InternalLinkGrid type="diagnostics" title="NABL Accredited Diagnostics" subtitle="Lab & Imaging" limit={12} className="bg-white dark:bg-slate-950 border-b" />
        </div>
    );
}
