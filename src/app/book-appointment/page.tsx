import AppointmentBookingClient from "./AppointmentBookingClient";
import { Clock } from "lucide-react";

export const metadata = {
    title: "Book an Appointment",
    description: "Schedule your consultation with top specialists at Indira Hospital.",
};

export default function AppointmentPage() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-teal-200 selection:text-teal-900 pb-24">
            {/* Bold Asymmetrical Deep Hero for the booking context */}
            <section className="relative pt-36 pb-48 lg:pt-48 lg:pb-64 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                {/* 3D-like glowing spheres and custom grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-teal-500/20 blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/20 blur-[100px] opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-teal-500/30">
                        <Clock className="w-4 h-4" /> Fast Track Booking
                    </span>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 max-w-4xl mx-auto">
                        Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-200">Consultation.</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Skip the waiting queue. Book an exact time slot with our elite specialists in under 60 seconds.
                    </p>
                </div>
            </section>

            {/* Negative margin to pull the form up over the hero */}
            <section className="relative z-20 -mt-24 sm:-mt-40 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
                <AppointmentBookingClient />
            </section>
        </main>
    );
}
