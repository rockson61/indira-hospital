import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";

const DUMMY_EVENTS = [
    {
        id: 1,
        title: "Trauma team in the operating room",
        date: "March 15, 2026",
        time: "10:00 AM - 12:00 PM",
        speaker: "Dr. Sudhir Reddy",
        category: "Seminar",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Advanced Cardiology Conference",
        date: "April 02, 2026",
        time: "09:00 AM - 05:00 PM",
        speaker: "Dr. Lokesh Kumar",
        category: "Conference",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Free Free Health Checkup Camp",
        date: "April 10, 2026",
        time: "08:00 AM - 02:00 PM",
        speaker: "Public Health Team",
        category: "Community",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export function HomeUpcomingEvents() {
    return (
        <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800">
            <SectionContainer>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-3 block">
                            Join Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                            Upcoming Events
                        </h2>
                    </div>
                    <Link href="/events" className="inline-flex items-center text-slate-600 dark:text-slate-300 font-bold hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group">
                        View All Events
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DUMMY_EVENTS.map((event) => (
                        <div key={event.id} className="group bg-slate-50/50 dark:bg-slate-950 rounded-3xl border border-slate-200/60 dark:border-slate-800 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:border-cyan-200 dark:hover:border-cyan-800 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cyan-700 dark:text-cyan-400">
                                    {event.category}
                                </div>
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    width={800}
                                    height={500}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs font-bold text-slate-500 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-cyan-500" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-cyan-500" />
                                        {event.time}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                    {event.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <User className="w-4 h-4" />
                                    <span>{event.speaker}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
}
