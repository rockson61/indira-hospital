import AppointmentBookingClient from "../book-appointment/AppointmentBookingClient";
import Head from "next/head";

export const metadata = {
    title: "Book an Appointment | Indira Super Speciality Hospital",
    description: "Book an appointment online with our expert specialists at Indira Super Speciality Hospital, Vellore."
};

export default function AppointmentBookingPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* Minimal High-End Hero */}
            <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 rounded-b-[3rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1] mb-6">
                        Secure Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Priority Booking.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        Direct scheduling with our advanced clinical team. No wait times, pure focus on your recovery.
                    </p>
                </div>
            </section>

            {/* Main Booking Engine Container */}
            <section className="max-w-4xl mx-auto px-6 lg:px-8 relative z-20 -mt-12 sm:-mt-16">
                <AppointmentBookingClient />
            </section>
        </main>
    );
}
