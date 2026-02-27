"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Clock, ShieldCheck, HeartPulse, Trophy, Ambulance, Microscope, Award, Users } from "lucide-react";

const features = [
    {
        name: "24/7 Emergency Care",
        description: "Chest pain at 3 AM? Our cardiac team is already scrubbed in. Average door-to-doctor time: 8 minutes.",
        icon: Ambulance,
        color: "from-red-500 to-rose-600",
        stat: "24/7",
    },
    {
        name: "25+ Surgeons Who've Done This 1,000+ Times",
        description: "Every surgeon at Indira has 10+ years of specialised experience. Your procedure isn't their first — it's their thousandth.",
        icon: Users,
        color: "from-fuchsia-500 to-fuchsia-600",
        stat: "25+",
    },
    {
        name: "Technology That Cuts Recovery in Half",
        description: "Laser piles, laparoscopic hernia, keyhole gallbladder removal — go home the same day instead of spending a week in bed.",
        icon: Microscope,
        color: "from-fuchsia-400 to-pink-600",
        stat: "Latest",
    },
    {
        name: "Outcomes That Speak Louder Than Awards",
        description: "98.7% patient satisfaction. NABH accredited. 50+ insurance partners. But the real award? You walking out pain-free.",
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
                    title="Why 15,000+ Patients Trusted Us With Their Surgery"
                    subtitle="Our Commitment"
                    description="They came in scared. They walked out pain-free. Here's why they chose Indira."
                />
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="group relative flex flex-col items-center text-center rounded-2xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 hover:shadow-2xl hover:shadow-primary-100/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
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
            </div>
        </section>
    );
}
