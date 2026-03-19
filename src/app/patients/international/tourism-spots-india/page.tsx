import { Metadata } from "next";
import Link from "next/link";
import { Plane, MapPin, CheckCircle2, Star, Calendar, ArrowRight, Camera, Palmtree, Mountain, Building2, Utensils, HeartPulse, Globe2, Sparkles, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/ui/section-container";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

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
        <main className="min-h-screen bg-white dark:bg-slate-950">
            {/* ELITE CINEMATIC HERO */}
            <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none animate-pulse" />
                
                <SectionContainer className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
                        <nav className="flex items-center justify-center lg:justify-start text-sm text-slate-400 mb-8 gap-1 flex-wrap">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/patients/international" className="hover:text-white transition-colors">International</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-amber-400 font-medium">Medical Tourism Guide</span>
                        </nav>

                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-amber-500/20">
                            <Palmtree className="w-4 h-4 text-amber-400" /> Heal. Recover. Discover.
                        </span>
                        
                        <h1 className="text-5xl sm:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
                            Explore Incredible <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Recovery Spots.</span>
                        </h1>
                        
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light mb-10 italic">
                            Combine world-class medical care with a serene vacation. India offers breathtaking landscapes perfect for your post-treatment peace.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href={waUrl} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-amber-500/20">
                                <MessageCircle className="w-5 h-5" /> Travel Assistance
                            </a>
                            <Link href="/patients/international/testimonials"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                                Success Stories <ArrowRight className="w-4 h-4 text-amber-400" />
                            </Link>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* QUICK STATS BAR */}
            <div className="bg-amber-600 text-white py-6 border-b border-amber-700">
                <SectionContainer className="flex flex-wrap justify-between gap-8 text-center sm:text-left">
                    {[
                        { v: "#1", l: "Medical Tourism Hub" },
                        { v: "50+", l: "Countries Served" },
                        { v: "Safe", l: "Tranquil Recovery" },
                        { v: "24/7", l: "Concierge Support" },
                    ].map((stat, i) => (
                        <div key={i} className="flex-1 min-w-[150px]">
                            <div className="text-3xl font-black tracking-tight">{stat.v}</div>
                            <div className="text-[10px] font-bold text-amber-200 uppercase tracking-widest">{stat.l}</div>
                        </div>
                    ))}
                </SectionContainer>
            </div>

            <SectionContainer className="py-24 max-w-7xl mx-auto space-y-24">
                
                {/* WHY CHOOSE INDIA */}
                <section>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Star, title: "Stress-Free Recovery", desc: "Recuperate in serene hill stations or peaceful resorts, away from the typical hospital environment." },
                            { icon: CheckCircle2, title: "Cost Efficiency", desc: "The combined cost of quaternary healthcare and a luxurious vacation is often less than Western medical bills." },
                            { icon: Camera, title: "Cultural Heritage", desc: "Experience thousands of years of majestic history, architecture, and culinary diversity." },
                        ].map((feature, i) => (
                            <div key={i} className="group p-10 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 hover:border-amber-200 hover:shadow-2xl transition-all duration-500">
                                <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mb-8 text-amber-600 shadow-inner border border-amber-100 dark:border-amber-800 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">{feature.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* DESTINATIONS GRID */}
                <section>
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 text-center lg:text-left mx-auto max-w-4xl lg:mx-0 lg:max-w-full">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight uppercase">Curated <br /><span className="text-amber-600">Destinations</span></h2>
                            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg font-medium italic">Explore the best recovery spots handpicked for our international guests.</p>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 border border-amber-100 dark:border-amber-800">
                            <MapPin className="w-8 h-8" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {TOURISM_STATES.map((state, index) => (
                            <article key={state.name} className="group bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="p-10 pb-0">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors uppercase tracking-tighter">{state.name}</h3>
                                        <span className="px-4 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-100 dark:border-slate-700">
                                            {state.type}
                                        </span>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium italic leading-relaxed">{state.description}</p>
                                </div>

                                <div className="px-10 pb-10 space-y-4">
                                    {state.spots.map((spot, i) => (
                                        <div key={i} className="flex gap-6 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:border-amber-200 transition-colors">
                                            <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm text-amber-500 border border-slate-100 dark:border-slate-600">
                                                <Camera className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight text-sm">{spot.name}</h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium italic">{spot.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CONCIERGE CTA BOX */}
                <section className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden text-center lg:text-left shadow-2xl">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.1),transparent_50%)] pointer-events-none" />
                    
                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-amber-300 text-[10px] font-black tracking-widest uppercase mb-8">
                                <Sparkles className="w-4 h-4" /> 24/7 Concierge Support
                            </span>
                            <h2 className="text-4xl sm:text-6xl font-black mb-8 leading-[0.95] uppercase tracking-tighter">
                                You Focus on Healing. <br/>
                                <span className="text-amber-500 italic">We Handle the Rest.</span>
                            </h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed italic font-light">
                                Our dedicated International Patient Desk assists you with visa documentation, airport logistics, and entire recovery itineraries.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    "Visa Invitation (24 Hrs)",
                                    "Airport VIP Pick-up",
                                    "Hotel Accommodation",
                                    "Language Translators"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-amber-400">
                                        <CheckCircle2 className="w-5 h-5" /> {item}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-400 text-white font-black rounded-2xl transition-all shadow-xl shadow-green-900/40 uppercase tracking-widest text-xs">
                                    WhatsApp Concierge <MessageCircle className="w-5 h-5" />
                                </a>
                                <a href={`tel:${siteConfig.contact.phone}`}
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 backdrop-blur border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
                                    Call Now <Phone className="w-5 h-5 text-amber-400" />
                                </a>
                            </div>
                        </div>

                        <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-800">
                             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.2),transparent_70%)]" />
                             <div className="flex items-center justify-center h-full">
                                 <Globe2 className="w-48 h-48 text-amber-500/10 animate-pulse" />
                             </div>
                        </div>
                    </div>
                </section>

                {/* TRUST SIGNALS */}
                <section className="pt-24 border-t border-slate-100 dark:border-slate-800">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <EntityFAQs 
                            entityType="hospital"
                            entityName="Indira Hospital"
                            entitySlug="tourism-spots"
                            title="Travel & Recovery FAQs"
                            description="Common questions about visiting tourism spots during recovery."
                        />
                        <EntityReviews 
                            entityType="hospital"
                            entityName="Indira Hospital"
                            entitySlug="tourism-spots"
                            title="Global Guest Feedback"
                            description="Experiences from international patients who explored India."
                        />
                    </div>
                </section>
            </SectionContainer>
        </main>
    );
}
