import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, ShieldCheck, Clock, Zap, CreditCard } from "lucide-react";
import { getDoctors } from "@/lib/api";
import { SEED_DATA } from "@/lib/data/seed-data";

const WHATSAPP_NUMBER = "917010650063";

const trustBadges = [
    { label: "24/7 ICU", icon: Clock },
    { label: "Advanced Cath Lab", icon: Zap },
    { label: "Cashless Insurance", icon: CreditCard },
    { label: "Expert Surgeons", icon: ShieldCheck },
];

export async function Hero() {
    // Fetch doctor count for dynamic stat
    let doctorCount = 25;
    try {
        const doctors = await getDoctors().catch(() => []);
        if (doctors.length > 0) doctorCount = doctors.length;
        else doctorCount = SEED_DATA.doctors.length;
    } catch {
        doctorCount = SEED_DATA.doctors.length;
    }

    return (
        <div className="relative isolate overflow-hidden min-h-[90vh] flex items-center">
            {/* Multi-layer gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-purple-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-500/20 via-transparent to-purple-500/10" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-16 lg:px-8 lg:py-40 w-full">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:shrink-0">
                    {/* Announcement badge */}
                    <div className="mb-8">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            New: Advanced Cath Lab Available
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-[1.1]">
                        World-Class Care,{" "}
                        <span className="bg-gradient-to-r from-brand-300 via-brand-200 to-purple-300 bg-clip-text text-transparent">
                            Right Here in Vellore
                        </span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-white/70">
                        Indira Super Speciality Hospital — {doctorCount}+ expert doctors, 10+ departments,
                        advanced Cath Lab, and 24/7 emergency care. Your trusted healthcare destination in Vellore.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want to book an appointment at Indira Super Speciality Hospital.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-base px-6 py-3.5 shadow-lg shadow-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-0.5"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Book on WhatsApp
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-base px-6 py-3.5 ring-1 ring-white/20 transition-all duration-300"
                        >
                            Book Appointment <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="tel:+919842342525"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            +91 98423 42525
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        {trustBadges.map((badge) => (
                            <div
                                key={badge.label}
                                className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10"
                            >
                                <badge.icon className="w-4 h-4 text-brand-300" />
                                {badge.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Hospital showcase card */}
                <div className="mt-16 lg:mt-0 lg:flex-1 flex justify-center">
                    <div className="relative max-w-lg w-full">
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/30 to-purple-500/30 rounded-3xl blur-2xl" />
                        <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                            <img
                                src="/hero-hospital.png"
                                alt="Indira Super Speciality Hospital modern interior"
                                className="w-full h-auto object-cover"
                                width={800}
                                height={500}
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-bold text-lg">Indira Super Speciality Hospital</p>
                                        <p className="text-white/70 text-sm">Katpadi Road, Vellore, TN</p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1.5 ring-1 ring-green-500/30">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <span className="text-green-300 text-xs font-semibold">Open 24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
