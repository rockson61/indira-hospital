import { SectionContainer } from "@/components/ui/section-container";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";

const EVENTS = [
    {
        id: 1,
        title: "Trauma team in the operating room",
        date: "March 15, 2026",
        time: "10:00 AM - 12:00 PM",
        location: "Main Auditorium, Indira Hospital",
        category: "Seminar",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Join us for an immersive seminar detailing the critical protocols and real-time decision-making of our elite trauma team during emergency operations."
    },
    {
        id: 2,
        title: "Advanced Cardiology Conference",
        date: "April 02, 2026",
        time: "09:00 AM - 05:00 PM",
        location: "Conference Center, Level 2",
        category: "Conference",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A comprehensive gathering of leading cardiologists discussing the latest advancements in minimally invasive heart surgery and primary angioplasty."
    },
    {
        id: 3,
        title: "Free Free Health Checkup Camp",
        date: "April 10, 2026",
        time: "08:00 AM - 02:00 PM",
        location: "Community Hall, Whitefield",
        category: "Community",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "As part of our community outreach, we are offering free basic health screenings including BP, blood sugar, and BMI checks for all attendees."
    }
];

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <PageHeader
                title="Events & Seminars"
                description="Join us for our upcoming medical conferences, community outreach programs, and health seminars."
            />

            <section className="py-20">
                <SectionContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {EVENTS.map((event) => (
                            <div key={event.id} className="group bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:border-cyan-200 dark:hover:border-cyan-800 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cyan-700 dark:text-cyan-400 border border-white/20">
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
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                                        {event.description}
                                    </p>
                                    <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-medium mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                                                <Calendar className="w-4 h-4" />
                                            </div>
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                                <Clock className="w-4 h-4" />
                                            </div>
                                            {event.time}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                                                <MapPin className="w-4 h-4" />
                                            </div>
                                            {event.location}
                                        </div>
                                    </div>
                                    <button className="w-full py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:bg-cyan-600 hover:text-white hover:border-cyan-600 dark:hover:bg-cyan-600 dark:hover:border-cyan-600 transition-all group/btn">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
            </section>
        </main>
    );
}
