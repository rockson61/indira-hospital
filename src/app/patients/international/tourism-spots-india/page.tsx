import { Metadata } from "next";
import Link from "next/link";
import { Plane, MapPin, CheckCircle2, Star, Calendar, ArrowRight, Camera, Palmtree, Mountain, Building2, Utensils, HeartPulse, Globe2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const metadata: Metadata = {
    title: "Best Tourism Spots in India | Medical Tourism | Indira Hospital",
    description: "Explore the best tourism spots in India during your medical recovery. Discover breathtaking destinations in Tamil Nadu, Kerala, Delhi, and Rajasthan.",
    keywords: ["medical tourism India", "tourism spots in India", "places to visit in India", "Tamil Nadu tourism", "Indira Hospital Vellore"]
};

// Data Structure
const TOURISM_STATES = [
    {
        name: "Tamil Nadu",
        description: "The medical hub of India and home to ancient temples and hill stations.",
        spots: [
            { name: "Vellore Fort", desc: "A majestic 16th-century granite fort right in our home city." },
            { name: "Ooty (Udhagamandalam)", desc: "Known as the Queen of Hill Stations, perfect for a cool recuperation." },
            { name: "Mahabalipuram", desc: "UNESCO World Heritage site with stunning rock-cut temples on the coast." },
            { name: "Kodaikanal", desc: "A misty, tranquil hill retreat ideal for peaceful post-treatment rest." }
        ],
        type: "Heritage & Nature",
    },
    {
        name: "Kerala",
        description: "God's Own Country, globally acclaimed for its backwaters and serenity.",
        spots: [
            { name: "Munnar", desc: "Endless rolling tea gardens and fresh mountain air." },
            { name: "Alleppey Backwaters", desc: "Relaxing houseboat cruises on tranquil, palm-fringed canals." },
            { name: "Wayanad", desc: "Lush green forests, waterfalls, and wildlife sanctuaries." }
        ],
        type: "Nature & Wellness",
    },
    {
        name: "Rajasthan",
        description: "The Land of Kings, offering a vibrant burst of Indian culture and royalty.",
        spots: [
            { name: "Jaipur (Pink City)", desc: "Magnificent palaces, forts, and bustling colorful bazaars." },
            { name: "Udaipur", desc: "The City of Lakes; romantic, scenic, and architecturally stunning." }
        ],
        type: "Culture & Royal Heritage",
    },
    {
        name: "Delhi & Agra",
        description: "The Golden Triangle route showcasing India's spectacular history.",
        spots: [
            { name: "Taj Mahal, Agra", desc: "The iconic ivory-white marble mausoleum, a Wonder of the World." },
            { name: "Red Fort, Delhi", desc: "A massive historic fort representing the pinnacle of Mughal creativity." }
        ],
        type: "Monuments & History",
    }
];

export default function TourismSpotsPage() {
    const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        "Hello, I am interested in medical treatment and require assistance with medical tourism and recovery destinations."
    )}`;

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-24">

            {/* ====== HERO ====== */}
            <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 rounded-b-[4rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                        <MapPin className="w-4 h-4" /> Medical Tourism Guide
                    </span>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1] mb-6">
                        Heal. Recover. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-amber-300">
                            Discover Incredible India.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
                        World-class medical care paired with a serene vacation. India offers breathtaking landscapes—from the misty hills of Ooty to the backwaters of Kerala—perfect for your post-treatment recovery.
                    </p>
                </div>
            </section>

            {/* ====== STATS BAR ====== */}
            <section className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white py-6 relative z-20 -mt-10 mx-6 lg:mx-auto max-w-5xl rounded-3xl shadow-xl">
                <div className="flex flex-wrap justify-around gap-6 text-center px-4">
                    <div>
                        <div className="flex items-center justify-center gap-2"><HeartPulse className="w-6 h-6 text-fuchsia-200" /><span className="text-3xl font-black">#1</span></div>
                        <div className="text-fuchsia-100 text-xs font-bold uppercase tracking-widest mt-1">Medical Hub</div>
                    </div>
                    <div className="hidden sm:block w-px bg-white/20" />
                    <div>
                        <div className="flex items-center justify-center gap-2"><Plane className="w-6 h-6 text-fuchsia-200" /><span className="text-3xl font-black">40+</span></div>
                        <div className="text-fuchsia-100 text-xs font-bold uppercase tracking-widest mt-1">Countries Visit</div>
                    </div>
                    <div className="hidden sm:block w-px bg-white/20" />
                    <div>
                        <div className="flex items-center justify-center gap-2"><Palmtree className="w-6 h-6 text-fuchsia-200" /><span className="text-3xl font-black">Safe</span></div>
                        <div className="text-fuchsia-100 text-xs font-bold uppercase tracking-widest mt-1">Tranquil Recovery</div>
                    </div>
                </div>
            </section>

            {/* ====== WHY INDIA FOR MEDICAL TOURISM ====== */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">Why Combine Treatment with Tourism?</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Medical tourism in India isn't just about massive cost savings; it's about recovering in a stress-free, culturally enriching, and beautiful environment.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Star, title: "Stress-Free Recovery", desc: "Recuperate in serene hill stations or peaceful resorts, away from the typical hospital environment." },
                        { icon: CheckCircle2, title: "Cost Efficiency", desc: "The combined cost of quaternary healthcare and a luxurious vacation in India is often less than just the medical costs in Western nations." },
                        { icon: Camera, title: "Cultural Heritage", desc: "Experience thousands of years of majestic history, architecture, and culinary diversity." },
                    ].map((feature, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-fuchsia-200 dark:hover:border-fuchsia-800 transition-all">
                            <div className="w-14 h-14 bg-fuchsia-100 dark:bg-fuchsia-900/50 rounded-2xl flex items-center justify-center mb-6 text-fuchsia-600 dark:text-fuchsia-400">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ====== TOP TOURISM DESTINATIONS ====== */}
            <section className="bg-slate-100 dark:bg-slate-950/50 py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-16">
                        <span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
                            Curated Destinations
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            Top Tourism Spots in India
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {TOURISM_STATES.map((state, index) => (
                            <article key={state.name} className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                                <div className="p-8 pb-0">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-fuchsia-600 transition-colors">{state.name}</h3>
                                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-200 dark:border-slate-700">
                                            {state.type}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">{state.description}</p>
                                </div>

                                <div className="px-8 pb-8">
                                    <ul className="space-y-4">
                                        {state.spots.map((spot, i) => (
                                            <li key={i} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                                                <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                                                    <MapPin className="w-5 h-5 text-fuchsia-500" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{spot.name}</h4>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400">{spot.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== MEDICAL TRAVEL ASSISTANCE ====== */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="bg-gradient-to-br from-slate-900 to-fuchsia-950 rounded-[4rem] p-10 sm:p-20 text-white relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-fuchsia-300 text-xs font-black tracking-[0.2em] uppercase mb-6">
                                <Calendar className="w-4 h-4" /> 24/7 Concierge Support
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                                We Handle the Logistics, <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">You Focus on Healing.</span>
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 max-w-lg">
                                Our dedicated International Patient Desk assists you not just with clinical appointments, but with your entire travel itinerary, visa documentation, and local accommodation.
                            </p>
                            
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Visa Invitation Letters within 24 Hours",
                                    "Airport Pick-up & Drop (Chennai Intl Airport - MAA)",
                                    "Accommodation assistance (Hotels/Guest Houses)",
                                    "Language Translators upon request"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href={waUrl} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-green-500 hover:bg-green-400 text-white font-black rounded-2xl shadow-[0_0_40px_-10px_var(--tw-shadow-color)] shadow-green-500/40 transition-all hover:scale-[1.02] text-lg w-full sm:w-auto">
                                Plan Your Trip on WhatsApp <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="relative h-full min-h-[400px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                             <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                                 {/* Map Graphic / Abstract Visual Representation */}
                                 <Globe2 className="w-48 h-48 text-fuchsia-500/20" />
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
