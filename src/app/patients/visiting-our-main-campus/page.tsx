import { Metadata } from "next";
import Link from "next/link";
import {
    Clock, MapPin, MessageCircle, Phone, ChevronRight,
    Shield, Users, Coffee, Pill, CreditCard, Wifi, ParkingCircle, Heart
} from "lucide-react";
import { clinicConfig } from "@/lib/data/clinic-config";

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

const WA = `https://wa.me/917010650063?text=${encodeURIComponent("Hi, I want to know visiting hours or plan a visit to Indira Hospital, Vellore.")}`;

export default function VisitingMainCampusPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            {/* HERO */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-14 lg:pt-52 lg:pb-16">
                    <nav className="flex items-center text-sm text-slate-400 mb-6 gap-1 flex-wrap">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/patients" className="hover:text-white">Patient Resources</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">Visiting Our Campus</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-slate-200 text-sm font-bold mb-5">
                        <MapPin className="w-4 h-4 text-fuchsia-400" /> Campus Visitor Guide
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                        Visiting Indira Hospital<br />
                        <span className="text-fuchsia-400">Vellore — What to Know</span>
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl">Visiting hours, campus layout, amenities, and general rules — everything you need for a smooth visit to our hospital.</p>
                    <div className="flex gap-4 mt-6">
                        <a href={`tel:${clinicConfig.phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-xl transition-all">
                            <Phone className="w-4 h-4" /> Call Reception
                        </a>
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all">
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 space-y-12">

                {/* VISITING HOURS */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="w-6 h-6 text-fuchsia-500" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Visiting Hours by Zone</h2>
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                                <tr>
                                    <th className="py-3 px-5 text-left font-bold text-gray-700 dark:text-gray-300">Zone</th>
                                    <th className="py-3 px-4 text-center font-bold text-gray-700 dark:text-gray-300">Morning Slot</th>
                                    <th className="py-3 px-4 text-center font-bold text-gray-700 dark:text-gray-300">Evening Slot</th>
                                    <th className="py-3 px-4 text-left font-bold text-gray-700 dark:text-gray-300">Note</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-slate-800 bg-white dark:bg-slate-900/50">
                                {VISITING_HOURS.map((row) => (
                                    <tr key={row.zone} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="py-3 px-5 font-semibold text-gray-900 dark:text-white">{row.zone}</td>
                                        <td className="py-3 px-4 text-center text-fuchsia-700 dark:text-fuchsia-300 font-medium">{row.slot1}</td>
                                        <td className="py-3 px-4 text-center text-fuchsia-700 dark:text-fuchsia-300 font-medium">{row.slot2}</td>
                                        <td className="py-3 px-4 text-gray-500 dark:text-gray-400 text-xs">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* AMENITIES */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Campus Amenities</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {CAMPUS_AMENITIES.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-fuchsia-200 transition-all">
                                <div className="w-10 h-10 bg-fuchsia-100 dark:bg-fuchsia-950 rounded-xl flex items-center justify-center mb-3 text-fuchsia-600">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* VISITOR RULES */}
                <section className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-7 border border-slate-100 dark:border-slate-800">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-fuchsia-500" /> Visitor Rules & Guidelines
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {RULES.map((rule) => (
                            <div key={rule} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                <div className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full flex-shrink-0 mt-1.5" />
                                {rule}
                            </div>
                        ))}
                    </div>
                </section>

                {/* ADDRESS */}
                <section className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-fuchsia-500 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Hospital Address</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">54, Katpadi Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore — 632006, Tamil Nadu</p>
                            <div className="flex flex-wrap gap-3 mt-4">
                                <a href="https://www.google.com/maps/dir/?api=1&destination=Indira+Super+Speciality+Hospital+Vellore"
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-fuchsia-600 hover:underline font-bold">
                                    <MapPin className="w-3.5 h-3.5" /> Get Directions
                                </a>
                                <Link href="/patients/transportation" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-bold">
                                    Full Transport Guide
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
