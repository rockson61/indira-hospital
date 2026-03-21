import { Metadata } from "next";
import Link from "next/link";
import {
    Car, Train, Bus, Plane, MessageCircle, Phone, MapPin,
    ArrowRight, ChevronRight, Clock, CheckCircle2, Navigation, AlertCircle, Sparkles
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { SectionContainer } from "@/components/ui/section-container";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

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
        title: "Taxi / Cab / Auto",
        badge: "Easiest & Fastest",
        steps: [
            "Book Ola or Uber from anywhere in Vellore or Katpadi Junction",
            "Search: Indira Super Speciality Hospital, Gandhi Nagar, Vellore",
            "The hospital is located on 54, Katpadi Road — main entrance on left",
        ],
        tip: "Autos are readily available 24/7 near Katpadi Junction and Vellore Bus Stand.",
        gradient: "from-fuchsia-500/10 to-purple-500/10"
    },
    {
        icon: Train,
        color: "blue",
        title: "By Train — Katpadi Junction",
        badge: "Inter-State Connectivity",
        steps: [
            "Alight at Katpadi Junction (KPD) — the main railway hub serving Vellore",
            "Take an auto or cab to Gandhi Nagar (approx. 10–12 minutes drive)",
            "The hospital is on Katpadi Road, 5 mins before reaching the main city",
        ],
        tip: "Express trains from Chennai Central (MAS) take ~1.5 hrs. From Bangalore ~3 hrs.",
        gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
        icon: Bus,
        color: "green",
        title: "By Bus — Local & Intercity",
        badge: "Budget Friendly",
        steps: [
            "TNSTC/Private buses from Chennai, Bangalore stop at Vellore New Bus Stand",
            "Transfer to city bus Route 1, 4, or 27 towards Sathuvachari",
            "Alight at Gandhi Nagar — we are just 200m walk from the stop",
        ],
        tip: "Frequent AC/Deluxe buses run throughout the day from Chennai Silk Board.",
        gradient: "from-green-500/10 to-teal-500/10"
    },
    {
        icon: Plane,
        color: "amber",
        title: "Chennai Airport (MAA)",
        badge: "Global Connection",
        steps: [
            "Fly into Chennai International Airport (MAA) — closest major airport",
            "Indira Hospital provides complimentary pickup for international guests",
            "Drive time: ~3 hours (130km) via the scenic Chennai–Vellore Highway",
        ],
        tip: "Our host desk monitors your flight status and greets you at the terminal gates.",
        gradient: "from-amber-500/10 to-orange-500/10"
    },
];

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
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ELITE GLOBAL HERO */}
            <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full hidden md:block blur-[100px] opacity-50 pointer-events-none" />

                <SectionContainer className="relative z-10">
                    <div className="max-w-4xl">
                        <nav className="flex items-center text-sm text-slate-400 mb-8 gap-1 flex-wrap">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/patients" className="hover:text-white transition-colors">Patient Resources</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-emerald-400 font-medium">Transportation</span>
                        </nav>

                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-emerald-500/20">
                            <Navigation className="w-4 h-4" /> Getting to Indira Hospital
                        </span>
                        
                        <h1 className="elite-hero-title mb-8">
                            How to Reach <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Vellore — Directions.</span>
                        </h1>
                        
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light mb-10">
                            54, Katpadi Road, Gandhi Nagar, Vellore. Whether you arrive by rail, road, or air, we ensure your journey to our facility is safe and straightforward.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://www.google.com/maps/dir/?api=1&destination=Indira+Super+Speciality+Hospital+Vellore"
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-500/25">
                                <MapPin className="w-4 h-4" /> Open Navigation
                            </a>
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                                <MessageCircle className="w-4 h-4 text-green-400" /> WhatsApp for Help
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* QUICK ADDRESS INFO */}
            <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-8 md:gap-16">
                    {[
                        { icon: MapPin, text: "54, Katpadi Road, Gandhi Nagar, Vellore — 632006", color: "text-emerald-500" },
                        { icon: Clock, text: "Open 24/7 — Emergency & Trauma Ready", color: "text-indigo-500" },
                        { icon: Phone, text: siteConfig.contact.phone, color: "text-fuchsia-500" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                            <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <SectionContainer className="py-24 max-w-7xl mx-auto space-y-24">
                {/* TRANSPORT MODES BENTO */}
                <section>
                    <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
                        <div>
                            <h2 className="elite-section-title text-slate-900 dark:text-white uppercase">Getting Here <br /><span className="text-emerald-600">Travel Options</span></h2>
                            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg font-medium">Clear instructions based on your point of origin.</p>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                            <Navigation className="w-8 h-8" />
                        </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-8">
                        {TRANSPORT_MODES.map((mode) => {
                            const Icon = mode.icon;
                            return (
                                <div key={mode.title} className="group relative bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${mode.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]`} />
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-5 mb-8">
                                            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 shadow-inner group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-2">{mode.title}</h3>
                                                <span className="inline-block text-[10px] font-black px-3 py-1 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 rounded-full border border-emerald-100 dark:border-emerald-800 uppercase tracking-[0.2em]">{mode.badge}</span>
                                            </div>
                                        </div>

                                        <ol className="space-y-4 mb-8">
                                            {mode.steps.map((step, i) => (
                                                <li key={i} className="flex items-start gap-4 text-slate-700 dark:text-slate-300 font-medium">
                                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-black text-[10px] mt-0.5">{i + 1}</span>
                                                    <span className="leading-relaxed">{step}</span>
                                                </li>
                                            ))}
                                        </ol>

                                        <div className="mt-auto flex items-start gap-3 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                                            <AlertCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">{mode.tip}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* EMERGENCY RED ALARM */}
                <section className="bg-slate-900 rounded-[3.5rem] p-10 md:p-16 border border-red-500/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.1),transparent_50%)] pointer-events-none" />
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-xs font-black uppercase tracking-widest mb-6 border border-red-500/20">
                                <AlertCircle className="w-4 h-4" /> 24/7 Dispatch
                            </div>
                            <h2 className="elite-section-title text-white mb-6">Emergency or <br /><span className="text-red-500 underline underline-offset-8">Ambulance Service</span></h2>
                            <p className="text-slate-400 text-lg font-light leading-relaxed mb-8 max-w-lg">Our advanced life support (ALS) ambulances are equipped with ventilators and monitoring equipment, ready to serve anywhere in Vellore and nearby districts.</p>
                            
                            <a href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s+/g, "")}`}
                                className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-red-500/30 text-lg group/btn">
                                <Phone className="w-6 h-6 animate-pulse" /> Call Emergency Now
                            </a>
                        </div>
                        
                        <div className="grid gap-4">
                            {[
                                "Call our 24/7 dedicated emergency line immediately",
                                "Provide your exact GPS location or landmark via WhatsApp",
                                "Our paramedic team will be dispatched within minutes of confirmation",
                                "Hospital trauma team notified and ready before arrival"
                            ].map((s, i) => (
                                <div key={i} className="flex items-start gap-5 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] font-black flex-shrink-0 mt-0.5 shadow-lg shadow-red-500/20">
                                        {i + 1}
                                    </div>
                                    <p className="text-slate-200 font-medium leading-relaxed">{s}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MAP + ADDRESS BENTO */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl h-[500px] relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6000000000004!2d79.1333333!3d12.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa2e667%3A0x5397944bf009778c!2sIndira%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                            loading="lazy"
                            title="Indira Hospital Location Map"
                        />
                        <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full shadow-xl border border-slate-100 dark:border-slate-800 text-sm font-black uppercase tracking-widest text-emerald-600">
                            Satellite View <Sparkles className="w-3 h-3" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-14 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 mb-8 border border-indigo-100 dark:border-indigo-800 shadow-inner">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h2 className="elite-section-title text-slate-900 dark:text-white mb-6 uppercase">Hospital Landmark & <br /><span className="text-indigo-600">Central Location</span></h2>
                        
                        <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">
                            <p>54, Katpadi Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore — 632006, Tamil Nadu, India</p>
                            
                            <div className="grid gap-3 pt-4">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Distance From Landmarks</p>
                                {[
                                    { l: "Katpadi Railway Junction", d: "4.5 KM (approx. 10 mins)" },
                                    { l: "CMC Vellore Main Campus", d: "2.8 KM (approx. 7 mins)" },
                                    { l: "Vellore New Bus Stand", d: "3.2 KM (approx. 12 mins)" },
                                    { l: "Vellore Fort & Museum", d: "2.5 KM (approx. 8 mins)" },
                                ].map((item) => (
                                    <div key={item.l} className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800 group/item">
                                        <span className="group-hover/item:text-indigo-600 transition-colors">{item.l}</span>
                                        <span className="text-xs font-black text-slate-900 dark:text-white">{item.d}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 mt-10 px-8 py-5 bg-green-500 hover:bg-green-400 text-white font-black rounded-2xl transition-all w-full shadow-xl shadow-green-500/20 text-lg">
                            <MessageCircle className="w-6 h-6" /> WhatsApp for Direct Pin
                        </a>
                    </div>
                </div>

                {/* TRUST SIGNALS */}
                <section className="pt-24 border-t border-slate-100 dark:border-slate-800">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <EntityFAQs 
                            entityType="hospital"
                            entityName="Indira Hospital"
                            entitySlug="transportation"
                            title="Travel & Transport FAQs"
                            description="Answers regarding airport pickups, parking, and public transport access."
                        />
                        <EntityReviews 
                            entityType="hospital"
                            entityName="Indira Hospital"
                            entitySlug="transportation"
                            title="Patient Travel Stories"
                            description="How patients from other states and countries reached us comfortably."
                        />
                    </div>
                </section>
            </SectionContainer>

            <EntityCardSection type="locations" title="Our Centers Across Vellore" subtitle="Find a Branch" limit={6} className="bg-white dark:bg-slate-950 border-t" />
            <InternalLinkGrid type="services" title="All Treatments A–Z" subtitle="Services Directory" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-y" />
            <InternalLinkGrid type="diagnostics" title="NABL Accredited Diagnostics" subtitle="Lab & Imaging" limit={12} className="bg-white dark:bg-slate-950 border-b" />
        </main>
    );
}
