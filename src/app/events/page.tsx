import { SectionContainer } from "@/components/ui/section-container";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";

export const metadata: Metadata = {
    title: "Events & Seminars | Indira Super Speciality Hospital",
    description: "Join upcoming medical conferences, community outreach programs, and health seminars at Indira Hospital, Vellore.",
};

const EVENTS = [
    {
        id: 1,
        title: "Trauma Team in the Operating Room",
        date: "March 15, 2026",
        time: "10:00 AM - 12:00 PM",
        location: "Main Auditorium, Indira Hospital",
        category: "Seminar",
        image: "/images/hospital/OT.webp",
        description: "An immersive seminar detailing the critical protocols and real-time decision-making of our elite trauma team during emergency operations."
    },
    {
        id: 2,
        title: "Advanced Cardiology Conference",
        date: "April 02, 2026",
        time: "09:00 AM - 05:00 PM",
        location: "Conference Center, Level 2",
        category: "Conference",
        image: "/images/hospital/Hospital view 2.webp",
        description: "A comprehensive gathering of leading cardiologists discussing the latest advancements in minimally invasive heart surgery and primary angioplasty."
    },
    {
        id: 3,
        title: "Free Health Checkup Camp",
        date: "April 10, 2026",
        time: "08:00 AM - 02:00 PM",
        location: "Community Hall, Whitefield",
        category: "Community",
        image: "/images/hospital/Consultation.webp",
        description: "Community outreach offering free basic health screenings including BP, blood sugar, and BMI checks for all attendees."
    }
];

const CATEGORY_COLORS: Record<string, string> = {
    Seminar: "bg-fuchsia-500/20 text-fuchsia-300",
    Conference: "bg-blue-500/20 text-blue-300",
    Community: "bg-emerald-500/20 text-emerald-300",
};

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Cinematic Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none animate-pulse" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-sm font-bold tracking-[0.2em] uppercase mb-10">
                        <Calendar className="w-4 h-4 animate-pulse" /> Events & Seminars
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-white tracking-tight leading-[0.95] mb-6">
                        Upcoming Medical <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">Events.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Join us for medical conferences, community health camps, and educational seminars designed to bring expert care closer to you.
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-24 sm:-mt-28 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {EVENTS.map((event) => (
                        <div key={event.id} className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <span className={`absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider backdrop-blur-md border border-white/10 ${CATEGORY_COLORS[event.category] ?? 'bg-white/20 text-white'}`}>
                                    {event.category}
                                </span>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed">{event.description}</p>

                                <div className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400 mb-8 border-t border-slate-100 dark:border-slate-800 pt-5">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                        <span className="font-bold">{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-4 h-4 text-fuchsia-500 flex-shrink-0" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                <Link href="/contact" className="group/btn flex items-center justify-between w-full px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black hover:bg-fuchsia-600 dark:hover:bg-fuchsia-500 dark:hover:text-white transition-all duration-300">
                                    Register Now
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="border-t border-slate-200 dark:border-slate-800 mt-24 pt-20">
                <InternalLinkGrid type="departments" title="Clinical Specialities" subtitle="Global Health Education" limit={8} className="bg-white dark:bg-slate-950 rounded-[4rem] border" />
            </div>
        </main>
    );
}

