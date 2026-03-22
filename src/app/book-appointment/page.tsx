import AppointmentBookingClient from "./AppointmentBookingClient";
import { Clock } from "lucide-react";
import { Suspense } from "react";

export const metadata = {
    title: "Book Appointment with Best Specialists in Vellore — Same-Week Surgery | Indira Elite",
    description: "Schedule your consultation with top specialists at Indira Elite Hospital. Premium robotic-assisted care with cinematic recovery suites.",
};

export default function AppointmentPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-24">
            {/* Bold Asymmetrical Deep Hero for the booking context */}
            <section className="relative pt-48 pb-48 lg:pt-60 lg:pb-64 overflow-hidden bg-slate-900 dark:bg-black rounded-b-[3rem] sm:rounded-b-[5rem]">
                {/* 3D-like glowing spheres and custom grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-slate-500/10 hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 hidden md:block blur-[100px] will-change-transform transform-gpu opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 text-xs font-bold tracking-widest uppercase mb-8 shadow-2xl">
                        <Clock className="w-3.5 h-3.5" /> High-Priority Clinical Access
                    </span>
                    <h1 className="elite-hero-title text-white mb-6 max-w-4xl mx-auto">
                        Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Clinical Mastery.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Skip the standard queue. Book an exact time slot with our senior "Elite" specialists in under 60 seconds.
                    </p>
                </div>
            </section>

            {/* Negative margin to pull the form up over the hero */}
            <section className="relative z-20 -mt-24 sm:-mt-40 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
                <Suspense fallback={<div className="h-96 w-full animate-pulse bg-slate-100 rounded-[3rem]" />}>
                    <AppointmentBookingClient />
                </Suspense>
            </section>
        </main>
    );
}
