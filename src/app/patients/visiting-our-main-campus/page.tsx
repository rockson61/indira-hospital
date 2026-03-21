import { Metadata } from "next";
import Link from "next/link";
import {
    Clock, MapPin, MessageCircle, Phone, ChevronRight,
    Shield, Users, Coffee, Pill, CreditCard, Wifi, ParkingCircle, Heart, Sparkles, ArrowRight
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { SectionContainer } from "@/components/ui/section-container";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

export const metadata: Metadata = {
    title: "Visiting Indira Hospital Vellore | Campus Guide, Hours & Amenities",
    description: "Plan your visit to Indira Super Speciality Hospital, Vellore. Visiting hours, campus map, cafeteria, pharmacy, ATM, prayer room, WiFi, and parking — all in one guide.",
    keywords: ["Indira Hospital visiting hours", "patient visitor guide Vellore hospital", "hospital campus amenities Vellore"],
};

const VISITING_HOURS = [
    { zone: "General Wards & Private Rooms", slot1: "10:00 AM – 12:00 PM", slot2: "4:00 PM – 7:00 PM", note: "Max 2 visitors at a time" },
    { zone: "ICU & Critical Care", slot1: "11:00 AM – 11:30 AM", slot2: "5:00 PM – 5:30 PM", note: "1 visitor at a time, attendant badge required" },
    { zone: "NICU & Special Newborn Care", slot1: "Parents only", slot2: "By appointment", note: "Prior approval from nursing station required" },
    { zone: "Dialysis Unit", slot1: "During treatment slot", slot2: "—", note: "One companion allowed during session" },
    { zone: "Emergency & Trauma", slot1: "Open 24/7", slot2: "—", note: "Immediate family only in critical cases" },
];

const CAMPUS_AMENITIES = [
    { icon: Pill, title: "24/7 Pharmacy", desc: "Full-service pharmacy stocked with all prescription and OTC medicines, located near the Emergency entrance — open round the clock." },
    { icon: Coffee, title: "Cafeteria & Food Court", desc: "The hospital cafeteria on the ground floor serves hot meals, snacks, and beverages from 6:00 AM to 10:00 PM. Separate sections for veg and non-veg." },
    { icon: CreditCard, title: "ATM", desc: "An on-campus ATM is installed in the main lobby, near the registration desk — available 24 hours for self-service cash withdrawal." },
    { icon: Wifi, title: "Free Wi-Fi", desc: "Complimentary Wi-Fi is available in waiting areas, cafeteria, and patient lounges. Login details are available at the reception desk." },
    { icon: ParkingCircle, title: "Parking", desc: "Designated parking bays for patients and visitors on the campus grounds. Valet parking is available at the main entrance during peak hours." },
    { icon: Heart, title: "Prayer / Meditation Room", desc: "A quiet, multi-faith chapel/prayer space is open to all patients, families, and visitors throughout the day for reflection and peace." },
    { icon: Shield, title: "24/7 Security", desc: "Our CCTV-monitored campus has round-the-clock security staff at all entry and exit points to ensure your safety at all times." },
    { icon: Users, title: "Patient Coordinator Desk", desc: "Our dedicated patient coordinators in the main lobby can assist you with navigating departments, appointments, and billing queries." },
];

const RULES = [
    "Children below 12 years are generally not allowed in inpatient wards",
    "Please mute your mobile phones in all clinical areas",
    "Smoking and alcohol are strictly prohibited on the premises",
    "Outside food is not permitted in wards unless medically approved",
    "Do not videograph or photograph patients without explicit consent",
    "Aggressive or disruptive behaviour will result in immediate removal",
];

const WA = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I want to know visiting hours or plan a visit to Indira Hospital, Vellore.")}`;

export default function VisitingMainCampusPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            {/* ELITE GLOBAL HERO */}
            <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] opacity-50 pointer-events-none" />

                <SectionContainer className="relative z-10">
                    <div className="max-w-4xl">
                        <nav className="flex items-center text-sm text-slate-400 mb-8 gap-1 flex-wrap">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/patients" className="hover:text-white transition-colors">Patient Resources</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-fuchsia-400 font-medium">Visiting Our Campus</span>
                        </nav>

                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-fuchsia-500/20">
                            <MapPin className="w-4 h-4" /> Campus Visitor Guide
                        </span>
                        
                        <h1 className="elite-hero-title mb-8">
                            Visiting Indira Hospital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Vellore — What to Know.</span>
                        </h1>
                        
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light mb-10">
                            Visiting hours, campus layout, amenities, and general rules — everything you need for a smooth, stress-free visit to our world-class healthcare facility.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                                className="elite-button-primary">
                                <Phone className="w-4 h-4" /> Call Reception
                            </a>
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                                <MessageCircle className="w-4 h-4 text-green-400" /> WhatsApp Support
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            <SectionContainer className="py-24 max-w-7xl mx-auto space-y-24">
                {/* VISITING HOURS */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-600">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="elite-section-title text-slate-900 dark:text-white">Visiting Hours by Zone</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">To ensure patient recovery and safety, please adhere to these timings.</p>
                        </div>
                    </div>
                    
                    <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                                    <tr>
                                        <th className="py-6 px-8 text-left font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">Ward / Zone</th>
                                        <th className="py-6 px-8 text-center font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">Morning Slot</th>
                                        <th className="py-6 px-8 text-center font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">Evening Slot</th>
                                        <th className="py-6 px-8 text-left font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">Regulations</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                    {VISITING_HOURS.map((row) => (
                                        <tr key={row.zone} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                            <td className="py-6 px-8 font-bold text-slate-900 dark:text-white text-lg">{row.zone}</td>
                                            <td className="py-6 px-8 text-center">
                                                <span className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-700 dark:text-fuchsia-300 font-black text-sm border border-fuchsia-100 dark:border-fuchsia-800/50">
                                                    {row.slot1}
                                                </span>
                                            </td>
                                            <td className="py-6 px-8 text-center">
                                                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 font-black text-sm border border-indigo-100 dark:border-indigo-800/50">
                                                    {row.slot2}
                                                </span>
                                            </td>
                                            <td className="py-6 px-8 text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed italic">{row.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* AMENITIES BENTO */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="elite-section-title text-slate-900 dark:text-white">Campus Amenities</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">Facilities designed for your comfort and convenience during your stay.</p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CAMPUS_AMENITIES.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-fuchsia-200 transition-all duration-500">
                                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 group-hover:bg-fuchsia-500 group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-inner">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-black text-slate-900 dark:text-white text-lg mb-3 tracking-tight group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-300 transition-colors">{title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* RULES & GUIDELINES */}
                <section className="bg-slate-900 rounded-[3.5rem] p-10 md:p-16 border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-fuchsia-500/20 transition-colors duration-700" />
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-widest mb-6">
                                <Shield className="w-4 h-4 text-fuchsia-400" /> Security First
                            </div>
                            <h2 className="elite-section-title text-white mb-6">Visitor Rules & <br /><span className="text-fuchsia-400">Strict Guidelines</span></h2>
                            <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">To maintain a sterile, quiet, and professional healing environment, all visitors must strictly follow these protocols.</p>
                            
                            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="inline-flex items-center text-fuchsia-400 font-black uppercase tracking-widest text-sm hover:text-white transition-colors group/link">
                                Security Desk Contact
                                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        
                        <div className="grid gap-4">
                            {RULES.map((rule, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-fuchsia-500 flex items-center justify-center text-white text-[10px] font-black flex-shrink-0 mt-0.5 shadow-lg shadow-fuchsia-500/20">
                                        {i + 1}
                                    </div>
                                    <span className="text-slate-300 font-medium leading-relaxed">{rule}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ADDRESS & DIRECTIONS */}
                <section className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-sm relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-24 h-24 rounded-3xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-inner">
                            <MapPin className="w-12 h-12" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="elite-section-title text-slate-900 dark:text-white mb-2">Hospital Address</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">54, Katpadi Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore — 632006, Tamil Nadu</p>
                            
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                                <a href="https://www.google.com/maps/dir/?api=1&destination=Indira+Super+Speciality+Hospital+Vellore"
                                    target="_blank" rel="noopener noreferrer"
                                    className="px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20">
                                    Open in Google Maps
                                </a>
                                <Link href="/patients/transportation" className="px-8 py-4 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-100 dark:border-slate-700 hover:bg-slate-100 transition-all">
                                    Full Transport Guide
                                </Link>
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
                            entitySlug="campus-guide"
                            title="Campus Visitor FAQs"
                            description="More details on visiting hours, parking, and on-site facilities."
                        />
                        <EntityReviews 
                            entityType="hospital"
                            entityName="Indira Hospital"
                            entitySlug="campus-guide"
                            title="Visitor Experiences"
                            description="What others say about their visit to our Vellore campus."
                        />
                    </div>
                </section>
            </SectionContainer>

            <EntityCardSection type="services" title="Available Specialities" subtitle="Clinical Care" limit={6} className="bg-white dark:bg-slate-950 border-t" />
            <InternalLinkGrid type="health-packages" title="Preventive Wellness Packages" subtitle="Early Detection" limit={8} className="bg-slate-50 dark:bg-slate-900/50 border-y" />
            <InternalLinkGrid type="diagnostics" title="All Diagnostic Tests" subtitle="NABL Accredited Lab" limit={12} className="bg-white dark:bg-slate-950 border-b" />
        </main>
    );
}
