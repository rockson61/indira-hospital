import { Metadata } from "next";
import Link from "next/link";
import {
    MapPin, MessageCircle, Phone, ArrowRight, ChevronRight,
    Home, Star, Clock, Bed, Wifi, Car, CheckCircle2, Sparkles
} from "lucide-react";
import { siteConfig } from "@/config/site";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { SectionContainer } from "@/components/ui/section-container";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";

export const metadata: Metadata = {
    title: "Accommodation Near Indira Hospital Vellore | Patient Lodg...",
    description: "Complete accommodation guide for international patients visiting Indira Hospital, Vellore. Hotels, lodges, and hospital suites within 500m. Halal food, ...",
    keywords: ["hotels near Indira Hospital Vellore", "lodging Vellore hospital", "patient accommodation Vellore", "international patient stay Vellore", "rooms near CMC Vellore"],
};

const HOTELS = [
    { name: "Fortune Inn Valley View", distance: "800m", stars: 4, price: "Premium stay", halal: true, features: ["AC rooms", "Restaurant", "Wi-Fi", "Taxi service"], gradient: "from-amber-500/10 to-orange-500/10" },
    { name: "The Vellore Park Hotel", distance: "1.2 km", stars: 4, price: "Premium stay", halal: true, features: ["Business centre", "Restaurant", "Gym", "24/7 reception"], gradient: "from-blue-500/10 to-indigo-500/10" },
    { name: "Hotel Darling Classic", distance: "400m", stars: 3, price: "Mid-range", halal: false, features: ["Walking distance", "Budget friendly", "Clean rooms", "Wi-Fi"], gradient: "from-fuchsia-500/10 to-pink-500/10" },
    { name: "Vijay Park Hotel", distance: "600m", stars: 3, price: "Budget friendly", halal: false, features: ["South Indian food", "Laundry", "24/7 reception"], gradient: "from-emerald-500/10 to-teal-500/10" },
    { name: "Hotel Anand Regency", distance: "700m", stars: 3, price: "Mid-range", halal: false, features: ["AC rooms", "Room service", "Parking", "Wi-Fi"], gradient: "from-cyan-500/10 to-blue-500/10" },
    { name: "Indira Hospital Attendant Rooms", distance: "In hospital", stars: 0, price: "Budget stay", halal: false, features: ["Inside hospital", "Attendant beds", "Shared bathroom", "24/7 security"], gradient: "from-slate-500/10 to-slate-800/10" },
];

const WA = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I need help with accommodation near Indira Hospital Vellore. Please help.")}`;

export default function LodgingPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            {/* ELITE GLOBAL HERO */}
            <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[100px] opacity-50 pointer-events-none" />

                <SectionContainer className="relative z-10">
                    <div className="max-w-4xl">
                        <nav className="flex items-center text-sm text-slate-400 mb-8 gap-1 flex-wrap">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/patients" className="hover:text-white transition-colors">Patient Resources</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-fuchsia-400 font-medium">Lodging Guide</span>
                        </nav>

                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-fuchsia-500/20">
                            <Home className="w-4 h-4" /> Patient Accommodation
                        </span>
                        
                        <h1 className="elite-hero-title mb-8">
                            Where to Stay Near <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Indira Hospital, Vellore.</span>
                        </h1>
                        
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light mb-10">
                            From secure attendant rooms within the hospital campus to premium 4-star hotels — we provide curated options that fit your budget, diet, and length of stay.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="elite-button-primary">
                                <MessageCircle className="w-4 h-4" /> Book Consultation
                            </a>
                            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                                <Phone className="w-4 h-4 text-indigo-400" /> Call Help Desk
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            <SectionContainer className="py-24 max-w-7xl mx-auto space-y-24">
                {/* Hospital rooms note */}
                <div className="relative group overflow-hidden bg-slate-900 rounded-[3rem] p-10 md:p-14 border border-white/5 shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-fuchsia-500/20 transition-colors duration-700" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                        <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-fuchsia-400 flex-shrink-0 border border-white/10">
                            <Bed className="w-10 h-10" />
                        </div>
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="elite-section-title text-white mb-4">Stay Inside the Hospital Campus</h2>
                            <p className="text-slate-400 text-lg font-light leading-relaxed mb-6">
                                Indira Hospital offers private rooms with dedicated attendant cots and shared attendant facilities. For long-stay patients and those requiring constant monitoring, this remains the most secure and convenient choice.
                            </p>
                            <Link href="/contact" className="inline-flex items-center text-fuchsia-400 font-black uppercase tracking-widest text-sm hover:text-white transition-colors group/link">
                                Inquire About Hospital Suites
                                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Hotel grid */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                            <Star className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="elite-section-title text-slate-900 dark:text-white">Nearby Hotels & Lodges</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">Curated accommodation options within a 1.5km radius of the hospital.</p>
                        </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HOTELS.map((h) => (
                            <div key={h.name} className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-fuchsia-200 transition-all duration-500 flex flex-col">
                                <div className={`absolute inset-0 bg-gradient-to-br ${h.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`} />
                                
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700">
                                            <Home className="w-7 h-7" />
                                        </div>
                                        {h.halal && (
                                            <span className="px-4 py-1 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 text-xs rounded-full font-black uppercase tracking-widest border border-green-100 dark:border-green-800/50">Halal Friendly</span>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-300 transition-colors uppercase">{h.name}</h3>
                                    
                                    <div className="flex items-center gap-2 mb-4">
                                        <MapPin className="w-4 h-4 text-fuchsia-500" />
                                        <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{h.distance} from hospital</span>
                                    </div>
                                    
                                    <p className="text-fuchsia-600 dark:text-fuchsia-400 font-black text-sm mb-6 uppercase tracking-wider">{h.price}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {h.features.map((f) => (
                                            <span key={f} className="text-[10px] px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg font-black uppercase tracking-widest">{f}</span>
                                        ))}
                                    </div>
                                    
                                    <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center text-sm font-black text-slate-900 dark:text-white group-hover:text-fuchsia-600 transition-colors">
                                        Request Booking 
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What's included BENTO */}
                <section className="bg-slate-50 dark:bg-slate-900/50 rounded-[3.5rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="elite-section-title text-slate-900 dark:text-white">What Indira Hospital <br /><span className="text-fuchsia-600">Arranges for You</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg font-medium">Full concierge support to make your medical stay as comfortable as possible.</p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { t: "Booking Assistance", d: "Hotel and guest house reservations based on your specific requirements." },
                            { t: "Meal Coordination", d: "Arrangement of Halal, vegetarian, or specific therapeutic diets." },
                            { t: "Personal Coordinator", d: "A dedicated 24/7 point of contact for all your stay-related queries." },
                            { t: "Attendant Facilities", d: "In-hospital solutions for family members and care attendants." },
                            { t: "Airport & Local Transit", d: "Seamless airport pick-ups and daily hospital-to-hotel shuttles." },
                            { t: "Stay Extension", d: "Quick visa and hotel extensions for cases requiring longer recovery." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-600 mb-6">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="font-black text-slate-900 dark:text-white mb-2 tracking-tight">{item.t}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TRUST SIGNALS */}
                <section className="pt-24 border-t border-slate-100 dark:border-slate-800">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <EntityFAQs
                            entityType="hospital"
                            entityName="Indira Hospital"
                            entitySlug="lodging"
                            title="Accommodation FAQs"
                            description="More details on hospital rooms, guest houses, and attendant facilities."
                        />
                        <EntityReviews
                            entityType="hospital"
                            entityName="Indira Hospital"
                            entitySlug="lodging"
                            title="International Patient Feedback"
                            description="What our guests from abroad say about their stay in Vellore."
                        />
                    </div>
                </section>
            </SectionContainer>

            <EntityCardSection type="doctors" title="Our Specialists" subtitle="Expert Care" limit={6} className="bg-white dark:bg-slate-950 border-t" />
            <InternalLinkGrid type="health-packages" title="Wellness Packages" subtitle="Health Screening" limit={8} className="bg-slate-50 dark:bg-slate-900/50 border-y" />
            <InternalLinkGrid type="diagnostics" title="Diagnostic Services" subtitle="NABL Accredited" limit={12} className="bg-white dark:bg-slate-950 border-b" />

            {/* CINEMATIC CTA */}
            <section className="py-24 bg-slate-900 relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-fuchsia-600/10 to-indigo-600/10 pointer-events-none" />
                <SectionContainer className="relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-10">
                            <Sparkles className="w-10 h-10 text-fuchsia-400 shadow-[0_0_20px_rgba(232,121,249,0.5)]" />
                        </div>
                        <h2 className="elite-section-title text-white mb-6">Need a Personalized Stay Plan?</h2>
                        <p className="text-xl text-slate-400 font-light mb-12">Our international host desk will suggest the most suitable lodging based on your clinical needs and preferences.</p>
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="elite-button-primary text-base">
                            <MessageCircle className="w-6 h-6" /> Talk to Our Coordinator
                        </a>
                    </div>
                </SectionContainer>
            </section>
        </main>
    );
}
