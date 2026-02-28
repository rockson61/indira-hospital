import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    MapPin, Clock, Train, Bus, Car,
    MessageCircle, Phone, Zap, ArrowRight,
    Building2, UtensilsCrossed, Landmark,
    CheckCircle2, ShieldCheck,
    Navigation, Heart, Stethoscope, Star
} from "lucide-react";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { enhancedVelloreLocations } from "@/lib/data/enhanced-location-data";
import { clinicConfig } from "@/lib/data/clinic-config";
import { getDepartments, getDoctors } from "@/lib/api";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { cn } from "@/lib/utils";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";

const WHATSAPP_NUMBER = "917010650063";

export const dynamicParams = true;

export async function generateStaticParams() {
    const allLocations = [
        ...enhancedVelloreLocations.map(l => ({ city: l.slug })),
        ...tamilNaduLocations.map(l => ({ city: l.slug }))
    ];

    // De-duplicate slugs
    const uniqueSlugs = Array.from(new Set(allLocations.map(l => l.city)));
    return uniqueSlugs.map(slug => ({ city: slug }));
}

interface PageProps {
    params: Promise<{ city: string }>;
}

function getLocation(slug: string) {
    const enhanced = enhancedVelloreLocations.find(l => l.slug === slug);
    if (enhanced) return enhanced;

    const tn = tamilNaduLocations.find(l => l.slug === slug);
    if (tn) return tn;

    return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { city } = await params;
    const location = getLocation(city);
    if (!location) return { title: "Location Not Found" };

    return {
        title: `Best Hospital in ${location.name} | Indira Super Speciality Hospital`,
        description: `Indira Super Speciality Hospital serves patients from ${location.name}. #1 for Laparoscopic Surgery, Laser Piles Treatment & Cardiac Care. Distance: ${location.distance}. Book on WhatsApp!`,
        keywords: [
            `hospital in ${location.name}`,
            `best hospital near ${location.name}`,
            `laparoscopic surgery in ${location.name}`,
            `laser piles treatment ${location.name}`,
            `doctors in ${location.name}`,
        ],
    };
}

export default async function LocationDetailPage({ params }: PageProps) {
    const { city } = await params;
    const location = getLocation(city);
    if (!location) notFound();

    const departments = await getDepartments().catch(() => []);
    const allDoctors = await getDoctors().catch(() => []);
    const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm from ${location.name} and I want to book an appointment at Indira Super Speciality Hospital.`)}`;

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800 dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* ELITE LOCATION HERO */}
            <section className="bg-slate-900 pt-48 pb-32 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

                <SectionContainer className="relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-fuchsia-500/30">
                            <MapPin className="w-4 h-4" /> Serving Patients from {location.name}
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
                            Best Hospital Care <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">for {location.name}.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light mb-10">
                            Indira Super Speciality Hospital is the preferred healthcare provider for residents of {location.name},
                            offering advanced Laparoscopic, Laser, and Cardiac treatments just {location.distance} away.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group/btn relative flex items-center justify-center px-10 py-5 bg-fuchsia-500 text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-fuchsia-500/25 overflow-hidden">
                                <span className="relative z-10">WhatsApp Appointment</span>
                                <MessageCircle className="w-5 h-5 ml-3 relative z-10 group-hover/btn:rotate-12 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </a>
                            <a href={`tel:${clinicConfig.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-colors">
                                <Phone className="w-5 h-5 mr-3 text-fuchsia-400" />
                                {clinicConfig.phone}
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* TRAVEL BENTO & QUICK FACTS */}
            <SectionContainer className="relative z-20 -mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Travel Stats */}
                    <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-[80px] -mr-32 -mt-32" />

                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Reaching Us from {location.name}</h2>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                                    {location.description} For patients in {location.district}, our main campus in Vellore provides the closest access to tertiary care and specialized surgeries.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                                        <div className="text-2xl font-black text-slate-800 dark:text-slate-100">{location.distance}</div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">To Main Campus</div>
                                    </div>
                                    <div className="px-6 py-4 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-2xl border border-fuchsia-100">
                                        <div className="text-2xl font-black text-fuchsia-600">{location.travelTime}</div>
                                        <div className="text-xs font-bold text-fuchsia-500 uppercase tracking-widest">Travel Time</div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-auto grid grid-cols-2 gap-4">
                                {[
                                    { icon: Bus, label: "Bus", status: location.transportOptions.bus },
                                    { icon: Train, label: "Train", status: location.transportOptions.train },
                                    { icon: Car, label: "Taxi", status: location.transportOptions.taxi },
                                    { icon: Navigation, label: "Auto", status: true },
                                ].map((t, idx) => (
                                    <div key={idx} className={cn(
                                        "p-6 rounded-2xl text-center border transition-all",
                                        t.status ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-100 dark:border-slate-700 shadow-sm dark:shadow-slate-900/30" : "bg-slate-50 dark:bg-slate-800 text-slate-300 border-slate-100 dark:border-slate-700 opacity-50"
                                    )}>
                                        <t.icon className={cn("w-6 h-6 mx-auto mb-2", t.status ? "text-fuchsia-500" : "text-slate-200")} />
                                        <div className="text-xs font-bold uppercase tracking-tighter">{t.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quality Assurance */}
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl opacity-50" />
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-fuchsia-400" /> Clinical Excellence
                        </h3>
                        <ul className="space-y-6">
                            {[
                                { title: "Super Speciality Care", desc: "15+ Advanced Departments" },
                                { title: "Same Day Discharge", desc: "For Laser & Laparoscopic Surgeries" },
                                { title: "24/7 Patient Support", desc: "Dedicated outstation helpline" },
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-fuchsia-400" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">{item.title}</div>
                                        <div className="text-xs text-slate-400">{item.desc}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionContainer>

            {/* LOCAL EXPERTS GRID */}
            <SectionContainer className="py-24 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl text-center md:text-left">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 text-xs font-bold uppercase tracking-widest mb-4">
                            <Stethoscope className="w-4 h-4" /> Top Specialists
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Experts Serving {location.name}</h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mt-4">Consult with Tamil Nadu&apos;s leading surgeons and physicians. Advanced care is just a message away.</p>
                    </div>
                    <Link href="/doctor/near-me" className="group flex items-center gap-2 text-fuchsia-600 font-black uppercase text-sm tracking-widest hover:text-fuchsia-700 transition-colors">
                        View All Doctors <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {allDoctors.slice(0, 4).map((doctor: any) => (
                        <DoctorCard key={doctor.slug} doctor={doctor} />
                    ))}
                </div>
            </SectionContainer>

            {/* DIRECTIONS MODULE (ELITE) */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none" />

                <SectionContainer className="relative z-10 max-w-7xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 p-8 lg:p-16">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-fuchsia-300 text-xs font-bold uppercase tracking-widest mb-10">
                                    <Navigation className="w-4 h-4" /> Directions from {location.name}
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-white mb-10 tracking-tight leading-[1.1]">
                                    How to reach <br /> <span className="text-fuchsia-400">Main Campus Vellore</span>
                                </h2>

                                <div className="space-y-8">
                                    {[
                                        { step: "1", title: "Route Overview", desc: `From ${location.name}, head towards ${location.district} and follow NH-48 / District roads towards Vellore.` },
                                        { step: "2", title: "Main Landmark", desc: "Our hospital is located near the historic Vellore Fort and Katpadi Railway Station (within 5-7 km radius)." },
                                        { step: "3", title: "Hospital Address", desc: "71F, Filterbed Road, Vellore, Tamil Nadu - 632001. Look for the Indira Hospital building." },
                                    ].map((s, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 font-black text-fuchsia-400 border border-white/10 group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-300">
                                                {s.step}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-lg mb-1">{s.title}</div>
                                                <div className="text-slate-400 font-medium leading-relaxed">{s.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 flex flex-wrap gap-4">
                                    <a
                                        href="https://www.google.com/maps/dir/?api=1&destination=Indira+Super+Speciality+Hospital+Vellore"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-8 py-4 bg-fuchsia-500 text-white font-black rounded-2xl hover:bg-fuchsia-400 transition-colors shadow-lg shadow-fuchsia-500/20"
                                    >
                                        <MapPin className="w-5 h-5" /> Open in Google Maps
                                    </a>
                                    <a
                                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I need driving directions from ${location.name} to Indira Hospital Vellore.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 font-black rounded-2xl hover:bg-white/10 transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5 text-fuchsia-400" /> Send Directions to Phone
                                    </a>
                                </div>
                            </div>

                            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-square lg:aspect-auto h-[400px] lg:h-[600px] shadow-2xl">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6000000000004!2d79.1333333!3d12.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa2e667%3A0x5397944bf009778c!2sIndira%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    className="w-full h-full grayscale invert opacity-60 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-1000"
                                    loading="lazy"
                                    title="Indira Hospital Main Campus Map"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none">
                                    <div className="flex items-center gap-3 text-white font-black tracking-tight drop-shadow-lg">
                                        <MapPin className="w-6 h-6 text-fuchsia-400" />
                                        Main Campus (Vellore Main)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* AMENITIES SECTION (If enhanced data available) */}
            {'amenities' in location && (
                <SectionContainer className="py-24 max-w-7xl mx-auto">
                    <SectionHeader
                        title={`Facilities & Amenities in ${location.name}`}
                        subtitle="Local Context"
                        description="Essential services and landmarks for patients and families traveling from this area to our campus."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {/* Banks & ATMs */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                <Building2 className="w-6 h-6 text-blue-500" />
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Financial Services</h4>
                            <div className="space-y-3">
                                {location.amenities.banks.slice(0, 3).map((b, i) => (
                                    <div key={i} className="text-sm text-slate-500 dark:text-slate-400 flex justify-between group cursor-default">
                                        <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-fuchsia-600 transition-colors">{b.name}</span>
                                        <span className="text-xs opacity-60">{b.distance}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Restaurants */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                                <UtensilsCrossed className="w-6 h-6 text-orange-500" />
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Dining & Food</h4>
                            <div className="space-y-3">
                                {location.amenities.restaurants.slice(0, 3).map((r, i) => (
                                    <div key={i} className="text-sm text-slate-500 dark:text-slate-400 flex justify-between group cursor-default">
                                        <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-fuchsia-600 transition-colors">{r.name}</span>
                                        <span className="text-xs opacity-60 font-bold text-fuchsia-500/50">{r.cuisine}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Local Attractions */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-pink-50 dark:bg-pink-950 rounded-2xl flex items-center justify-center mb-6">
                                <Landmark className="w-6 h-6 text-pink-500" />
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Local Landmarks</h4>
                            <div className="space-y-3">
                                {location.touristPlaces.slice(0, 3).map((p, i) => (
                                    <div key={i} className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 group cursor-default">
                                        <div className="w-1 h-1 bg-pink-400 rounded-full group-hover:scale-150 transition-transform" />
                                        <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-pink-600 transition-colors">{p.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* General Info */}
                        <div className="bg-slate-900 p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-2xl group-hover:bg-fuchsia-400/20 transition-all" />
                            <h4 className="font-bold text-white mb-6 uppercase text-[10px] tracking-widest opacity-50">Area Overview</h4>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-[10px] uppercase font-black text-fuchsia-400 tracking-wider">Dist. Pincode</div>
                                    <div className="text-xl font-black text-white">{location.pincode}</div>
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-black text-fuchsia-400 tracking-wider">Locality Type</div>
                                    <div className="text-xl font-black text-white capitalize">{location.category.replace('_', ' ')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            )}

            {/* SPECIALIZED TREATMENTS FOR LOCALITY */}
            <SectionContainer className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden rounded-[4rem] border-y border-slate-100 dark:border-slate-700">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[100px]" />
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 text-xs font-bold uppercase tracking-widest mb-10">
                            <Star className="w-4 h-4" /> Served Locations Rank #1
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-8">
                            Advanced Surgery <br />
                            <span className="text-fuchsia-600">is Now Local.</span>
                        </h2>
                        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-12">
                            Indira Super Speciality Hospital bridged the gap between {location.name} and world-class medical infrastructure.
                            Our outstation patient support team ensures a seamless experience for you.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Laser Piles Experts",
                                "Laparoscopic Units",
                                "Cardiac Support",
                                "24/7 Trauma Care"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-fuchsia-200 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-fuchsia-500" />
                                    <span className="font-black text-slate-700 dark:text-slate-200 text-sm">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 relative">
                        <div className="absolute -inset-4 bg-fuchsia-50/50 blur-[60px] rounded-[5rem] -z-10" />
                        {departments.slice(0, 4).map((dept: any) => (
                            <Link
                                key={dept.slug}
                                href={`/doctor/near-me/treat/${dept.slug}`}
                                className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:border-fuchsia-300 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col"
                            >
                                <div className="w-14 h-14 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-fuchsia-500 transition-colors">
                                    <Heart className="w-7 h-7 text-fuchsia-600 group-hover:text-white" />
                                </div>
                                <div className="font-black text-slate-900 dark:text-white text-lg group-hover:text-fuchsia-600 transition-colors leading-tight">{dept.title}</div>
                                <div className="text-[10px] text-slate-400 mt-2 uppercase font-black tracking-widest">Department</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </SectionContainer>

            {/* NEARBY LOCATIONS */}
            <SectionContainer className="py-24 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-fuchsia-600 font-black uppercase text-xs tracking-[0.2em] mb-4 block">Regional Network</span>
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Other Areas Near {location.name}</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">Providing high-end clinical support across the entire {location.district} district and neighboring regions.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(('nearbyLocations' in location ? location.nearbyLocations : []) as any[]).slice(0, 4).map((near: any) => (
                        <Link
                            key={near.slug}
                            href={`/doctor/near-me/${near.slug || ''}`}
                            className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-fuchsia-300 hover:shadow-soft transition-all flex flex-col justify-between group"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-fuchsia-50 dark:bg-fuchsia-950 transition-colors">
                                    <MapPin className="w-5 h-5 text-slate-300 group-hover:text-fuchsia-500" />
                                </div>
                                <div className="font-black text-slate-900 dark:text-white text-xl tracking-tight mb-1">{near.name}</div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">{near.distance} Distance</div>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-fuchsia-600 font-black text-[11px] uppercase tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                View Location <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ) as any)}
                </div>
            </SectionContainer>

            {/* ENTITY CARD SECTIONS */}
            <EntityCardSection type="services" title="Treatments Available" subtitle="Our Services" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
            <EntityCardSection type="doctors" title="Our Expert Doctors" subtitle="Meet Our Specialists" limit={6} className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50" />
            <EntityCardSection type="departments" title="Our Departments" subtitle="Centres of Excellence" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid type="services" title="All Treatments A-Z" subtitle="Services Directory" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />
            <InternalLinkGrid type="doctors" title="All Doctors A-Z" subtitle="Doctors Directory" limit={12} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
        </main>
    );
}
