"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Clock, Trophy, Ambulance, Award, Users, Shield, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { HeartCardiogram, Microscope } from "healthicons-react/outline";

const features = [
    {
        name: "24/7 Trauma & Emergency Response",
        description: "Medical emergencies don&apos;t wait. Our cardiac and trauma teams operate 24/7 with a door-to-doctor time of under 8 minutes.",
        icon: Ambulance,
        color: "from-red-500 to-rose-600",
        stat: "24/7",
    },
    {
        name: "Elite Specialists & Surgeons",
        description: "Your health is in the hands of renowned experts. Every surgeon possesses over a decade of specialized experience in advanced procedures.",
        icon: Users,
        color: "from-fuchsia-500 to-fuchsia-600",
        stat: "25+",
    },
    {
        name: "Minimally Invasive Technology",
        description: "Experience advanced keyhole surgery, laser treatments, and laparoscopy. Less pain, minimal scarring, and same-day discharge.",
        icon: Microscope,
        color: "from-fuchsia-400 to-pink-600",
        stat: "Latest",
    },
    {
        name: "Transparent, Evidence-Based Care",
        description: "We are NABH accredited and boast a 98.7% patient satisfaction rate. Experience transparent pricing and 50+ cashless insurance tie-ups.",
        icon: Award,
        color: "from-amber-500 to-orange-600",
        stat: "Top",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #841F74 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    title="Why We Are the Best Hospital in Vellore"
                    subtitle="Our Commitment"
                    description="When it concerns your health, you deserve world-class clinical expertise without compromise. Discover why thousands trust Indira Hospital."
                />
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="group relative flex flex-col items-center text-center rounded-2xl border border-gray-100 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 p-8 hover:shadow-2xl hover:shadow-fuchsia-500/10 dark:hover:shadow-fuchsia-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Top gradient accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Stat badge */}
                                <div className={`mb-4 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white`}>
                                    {feature.stat}
                                </div>

                                {/* Icon */}
                                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                                </div>

                                <h3 className="text-xl font-bold leading-7 text-gray-900 dark:text-white">
                                    {feature.name}
                                </h3>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                </div>
            </div>

                <div className="mt-20 flex flex-col items-center">
                    <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I&apos;m clinical inquiry. I want to book an appointment.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="elite-button-primary text-base"
                    >
                        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        Chat with our Experts Now
                    </a>
                    <p className="mt-6 text-sm font-bold text-slate-400 uppercase tracking-widest">
                        Available 24/7 for Medical Inquiries
                    </p>
                </div>
            </div>
        </section>
    );
}
