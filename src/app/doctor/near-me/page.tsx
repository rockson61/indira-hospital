import { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import {
    enhancedVelloreLocations,
} from "@/lib/data/enhanced-location-data";
import { getDepartments } from "@/lib/api";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import {
    MapPin, Clock, ArrowRight, Train, Bus, Car,
    MessageCircle, Phone, Zap, Star, Shield,
    CheckCircle2, Award, Users, Stethoscope, Heart, ShieldCheck
} from "lucide-react";
import { clinicConfig } from "@/lib/data/clinic-config";
import { LocationCard } from "@/components/entities/LocationCard";
import { SectionContainer } from "@/components/ui/section-container";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { HealthLibraryCard } from "@/components/sections/HealthLibraryCard";

const WHATSAPP_NUMBER = "917010650063";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want to book an appointment at Indira Super Speciality Hospital.")}`;

export const metadata: Metadata = {
    title: "Best Hospital Near You — 79+ Locations Served | Indira Hospital",
    description: "Indira Hospital serves 79+ locations across Tamil Nadu. Laser piles, laparoscopic surgery, 24/7 emergency. Find the nearest location — your surgery shouldn't mean a long journey.",
    keywords: [
        "hospital near me",
        "best hospital in Tamil Nadu",
        "best hospital in India",
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
        major_town: "bg-fuchsia-100 text-fuchsia-700",
        town: "bg-green-100 text-green-700",
        village: "bg-gray-100 text-gray-600 dark:text-gray-400",
        industrial: "bg-amber-100 text-amber-700",
        historic: "bg-fuchsia-100 text-fuchsia-700",
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

export default async function LocationsPage() {
    const locations = mergeLocations();
    const nearbyCount = locations.filter((l) => parseInt(l.distance) <= 50).length;
    const districtsServed = new Set(locations.map((l) => l.district)).size;
    const departments = await getDepartments().catch(() => []);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* ELITE GLOBAL REACH HERO */}
            <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-56 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full hidden md:block blur-[100px] opacity-50 pointer-events-none" />

                <SectionContainer className="relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                            <MapPin className="w-4 h-4" /> Serving All of Tamil Nadu
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
                            The Best Hospital Near You: <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">{locations.length}+ Locations Served.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light mb-10">
                            Elite healthcare shouldn't require a long journey. Indira Super Speciality Hospital brings advanced laparoscopic, laser, and emergency treatments directly to {districtsServed} districts across Tamil Nadu.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group/btn relative flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-fuchsia-500 text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-fuchsia-500/25 overflow-hidden">
                                <span className="relative z-10">WhatsApp Us Now</span>
                                <MessageCircle className="w-5 h-5 ml-3 relative z-10 group-hover/btn:rotate-12 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </a>
                            <a href={`tel:${clinicConfig.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-colors">
                                <Phone className="w-5 h-5 mr-3 text-fuchsia-400" />
                                {clinicConfig.phone}
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* FLOATING MULTI-METRIC STATS (GLASSMORPHIC) */}
            <SectionContainer className="relative z-20 -mt-24 max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 sm:p-4 bg-white/10 backdrop-blur-3xl rounded-[2.5rem] border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                    {[
                        { icon: MapPin, label: "Locations Served", value: `${locations.length}+` },
                        { icon: Award, label: "Districts Covered", value: `${districtsServed}` },
                        { icon: Users, label: "Patients Treated", value: "1L+" },
                        { icon: Stethoscope, label: "Departments", value: "15+" },
                    ].map((stat, i) => (
                        <div key={i} className="group bg-white dark:bg-slate-900 rounded-[2rem] p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-200/60 dark:border-slate-800 hover:shadow-xl hover:shadow-fuchsia-100 dark:hover:shadow-fuchsia-900/20 hover:border-fuchsia-200 dark:hover:border-fuchsia-800 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-500">
                                <stat.icon className="w-16 h-16 text-fuchsia-600" />
                            </div>
                            <div className="w-12 h-12 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-fuchsia-500 transition-colors duration-300 shadow-inner group-hover:shadow-fuchsia-500/50">
                                <stat.icon className="w-6 h-6 text-fuchsia-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div className="text-3xl font-black text-slate-800 dark:text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-600 group-hover:to-pink-500 transition-colors mb-1">{stat.value}</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* SIGNATURE TREATMENTS BENTO GRID */}
            <SectionContainer className="py-24 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 border border-fuchsia-100 text-fuchsia-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm dark:shadow-slate-900/30">
                        <Award className="w-4 h-4" /> Why Patients Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                        #1 for Laparoscopic & <br className="hidden sm:block" />
                        <span className="text-fuchsia-600">Laser Surgery in Tamil Nadu</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Treatment Card 1 */}
                    <div className="group bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-200/60 dark:border-slate-800 hover:border-fuchsia-200 dark:hover:border-fuchsia-800 hover:shadow-2xl hover:shadow-fuchsia-500/10 dark:hover:shadow-fuchsia-500/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-500/5 rounded-full blur-[40px] group-hover:bg-fuchsia-500/10 transition-colors pointer-events-none" />
                        <div className="w-16 h-16 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-950 border border-fuchsia-100 flex items-center justify-center mb-8 shadow-sm group-hover:bg-fuchsia-500 group-hover:border-fuchsia-400 group-hover:shadow-fuchsia-500/30 transition-all duration-500">
                            <Zap className="w-8 h-8 text-fuchsia-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-fuchsia-600 transition-colors tracking-tight">Laparoscopic Surgery</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
                            Advanced keyhole surgery for Hernia, Gallbladder, Appendix & Bariatric. Minimal scars, same-day discharge.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {["3mm Incision", "Same Day Discharge", "Insurance Cashless", "25+ Years Surgeons"].map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-200">
                                    <div className="w-6 h-6 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-fuchsia-600" /></div>{f}
                                </li>
                            ))}
                        </ul>
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need information about Laparoscopic Surgery.")}`} target="_blank" rel="noopener noreferrer" className="group/link flex items-center justify-center w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 hover:bg-fuchsia-50 dark:bg-fuchsia-950 text-slate-900 dark:text-white hover:text-fuchsia-700 font-black rounded-2xl transition-all border border-slate-200 dark:border-slate-700 hover:border-fuchsia-200">
                            Enquire on WhatsApp <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Treatment Card 2 (Popular) */}
                    <div className="group bg-slate-900 rounded-[2.5rem] p-8 lg:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-slate-800 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[50px] group-hover:bg-rose-500/20 transition-colors pointer-events-none" />
                        <div className="absolute -top-3 -right-3">
                            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-black uppercase tracking-widest rounded-bl-2xl shadow-lg">
                                <Star className="w-3.5 h-3.5 fill-current" /> Most Popular
                            </span>
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-8 shadow-sm group-hover:bg-rose-500 group-hover:border-rose-400 group-hover:shadow-rose-500/30 transition-all duration-500 relative z-10">
                            <Heart className="w-8 h-8 text-rose-400 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-rose-400 transition-colors tracking-tight relative z-10">Laser Piles Treatment</h3>
                        <p className="text-slate-300 font-medium leading-relaxed mb-6 flex-grow relative z-10">
                            USFDA-approved laser for Piles, Fissure & Fistula. Painless 30-minute procedure, 24-hour recovery.
                        </p>
                        <ul className="space-y-3 mb-8 relative z-10">
                            {["No Cuts, No Stitches", "30 Minute Procedure", "24-Hour Recovery", "10,000+ Treated"].map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                                    <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-rose-400" /></div>{f}
                                </li>
                            ))}
                        </ul>
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need information about Laser Piles Treatment.")}`} target="_blank" rel="noopener noreferrer" className="group/link flex items-center justify-center w-full px-6 py-4 bg-white/10 hover:bg-rose-500 text-white font-black rounded-2xl transition-all border border-white/20 hover:border-transparent relative z-10">
                            Enquire on WhatsApp <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Treatment Card 3 */}
                    <div className="group bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-200/60 dark:border-slate-800 hover:border-fuchsia-200 dark:hover:border-fuchsia-800 hover:shadow-2xl hover:shadow-fuchsia-500/10 dark:hover:shadow-fuchsia-500/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/5 rounded-full blur-[40px] group-hover:bg-pink-500/10 transition-colors pointer-events-none" />
                        <div className="w-16 h-16 rounded-2xl bg-pink-50 dark:bg-pink-950 border border-pink-100 flex items-center justify-center mb-8 shadow-sm group-hover:bg-pink-500 group-hover:border-pink-400 group-hover:shadow-pink-500/30 transition-all duration-500 relative z-10">
                            <Shield className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-pink-600 transition-colors tracking-tight relative z-10">Fistula & Fissure</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow relative z-10">
                            Permanent cure using VAAFT / Laser / LIFT techniques. No recurrence, minimal pain, quick recovery.
                        </p>
                        <ul className="space-y-3 mb-8 relative z-10">
                            {["VAAFT Technique", "No Recurrence", "Minimal Downtime", "Expert Proctologists"].map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-200">
                                    <div className="w-6 h-6 rounded-full bg-pink-50 dark:bg-pink-950 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-pink-600" /></div>{f}
                                </li>
                            ))}
                        </ul>
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need information about Fistula Treatment.")}`} target="_blank" rel="noopener noreferrer" className="group/link flex items-center justify-center w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 hover:bg-pink-50 dark:bg-pink-950 text-slate-900 dark:text-white hover:text-pink-700 font-black rounded-2xl transition-all border border-slate-200 dark:border-slate-700 hover:border-pink-200 relative z-10">
                            Enquire on WhatsApp <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </SectionContainer>

            {/* DEPARTMENTS CROSS-LINK (INTERACTIVE PILLS) */}
            <section className="py-24 bg-slate-100 dark:bg-slate-800 relative overflow-hidden -skew-y-3">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl" />
                <SectionContainer className="relative z-10 max-w-7xl mx-auto skew-y-3">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm dark:shadow-slate-900/30">
                            <Stethoscope className="w-4 h-4 text-fuchsia-600" /> 15+ Super Specialities
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Explore Our Departments</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-5xl mx-auto">
                        {departments.map((dept: any) => (
                            <Link
                                key={dept.slug}
                                href={`/doctor/near-me/treat/${dept.slug}`}
                                className="group px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 hover:bg-slate-900 hover:border-slate-800 hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                            >
                                {dept.title}
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-fuchsia-400" />
                            </Link>
                        ))}
                    </div>
                </SectionContainer>
            </section>

            {/* LOCATION CARDS GRID */}
            <SectionContainer className="max-w-7xl mx-auto py-24">
                <div className="mb-16">
                    <SectionHeader
                        title="Towns & Cities Across Tamil Nadu"
                        subtitle="All Serving Locations"
                        description="Click on any location for detailed directions, travel info, available departments, and doctors serving your area."
                    />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc) => (
                        <LocationCard key={loc.slug} location={loc} variant="card" />
                    ))}
                </div>
            </SectionContainer>

            {/* ASSISTANCE CTA BENTO */}
            <SectionContainer className="pb-24 max-w-7xl mx-auto px-4">
                <div className="bg-gradient-to-br from-slate-900 via-pink-950 to-fuchsia-950 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl relative group/cta flex flex-col items-center text-center p-12 sm:p-20">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[80px] group-hover/cta:bg-fuchsia-500/20 transition-colors duration-700 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[80px] opacity-50" />
                    <div className="absolute w-full h-full inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

                    <div className="relative z-10 w-full max-w-4xl">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 shadow-[0_0_30px_rgba(20,184,166,0.2)]">
                            <MapPin className="w-8 h-8 text-fuchsia-300" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                            Can&apos;t Find Your <br className="hidden sm:block" /> <span className="text-fuchsia-400">Location?</span>
                        </h2>
                        <p className="text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            We serve patients from across Tamil Nadu and neighboring states. WhatsApp us for instant appointment booking, accurate cost estimates, and VIP transport assistance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl mx-auto">
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group/btn relative flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-fuchsia-500 text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-fuchsia-500/25 overflow-hidden">
                                <span className="relative z-10">Chat on WhatsApp</span>
                                <MessageCircle className="w-5 h-5 ml-3 relative z-10 group-hover/btn:rotate-12 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </a>

                            <a href={`tel:${clinicConfig.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-colors">
                                <Phone className="w-5 h-5 mr-3 text-fuchsia-400" />
                                Call Emergency
                            </a>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <HealthLibraryCard />

            {/* ENTITY CARD SECTIONS */}
            <EntityCardSection type="services" title="Treatments We Offer" subtitle="Our Services" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
            <EntityCardSection type="doctors" title="Our Expert Doctors" subtitle="Meet Our Specialists" limit={6} className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50" />
            <EntityCardSection type="departments" title="Our Departments" subtitle="Centres of Excellence" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid type="services" title="All Treatments A-Z" subtitle="Services Directory" limit={16} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />
            <InternalLinkGrid type="doctors" title="All Doctors A-Z" subtitle="Doctors Directory" limit={12} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
        </main>
    );
}
