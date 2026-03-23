import BookingFunnel from "@/components/interactive/BookingFunnel";
import { ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
    title: "Book an Appointment | Indira Super Speciality Hospital",
    description: "Book an appointment online with our expert specialists at Indira Super Speciality Hospital, Vellore."
};

export default function AppointmentBookingPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white pb-20 overflow-hidden">
            {/* Minimal High-End Hero */}
            <section className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-black rounded-b-[3rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black tracking-widest uppercase mb-8">
                        <ShieldCheck className="w-3.5 h-3.5" /> High-Density Care
                    </div>
                    <h1 className="elite-hero-title text-white mb-6">
                        Secure Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Priority Booking.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium italic">
                        Direct scheduling with our advanced clinical team. No wait times, pure focus on your recovery.
                    </p>
                </div>
            </section>

            {/* Main Booking Engine Container */}
            <section className="max-w-5xl mx-auto px-6 lg:px-8 relative z-20 -mt-16">
                <BookingFunnel />
            </section>
        </main>
    );
}
