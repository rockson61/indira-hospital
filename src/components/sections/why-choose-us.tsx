"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Clock, ShieldCheck, HeartPulse, Trophy, Ambulance, Microscope, Award, Users } from "lucide-react";

const features = [
    {
        name: "24/7 Emergency Care",
        description: "Round-the-clock emergency services with minimal waiting time and expert trauma care.",
        icon: Ambulance,
        color: "from-red-500 to-rose-600",
        stat: "24/7",
    },
    {
        name: "25+ Expert Doctors",
        description: "A team of highly qualified doctors, surgeons, and nursing staff dedicated to patient recovery.",
        icon: Users,
        color: "from-blue-500 to-indigo-600",
        stat: "25+",
    },
    {
        name: "Advanced Technology",
        description: "State-of-the-art Cath Lab, diagnostic imaging, and minimally invasive surgical equipment.",
        icon: Microscope,
        color: "from-purple-500 to-violet-600",
        stat: "Latest",
    },
    {
        name: "Award Winning Care",
        description: "Recognized for excellence in patient safety, clinical outcomes, and compassionate healthcare.",
        icon: Award,
        color: "from-amber-500 to-orange-600",
        stat: "Top",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #0284c7 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    title="Why Choose Indira Hospital?"
                    subtitle="Our Commitment"
                    description="Trusted by thousands of patients across Tamil Nadu for quality healthcare."
                />
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="group relative flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-2xl hover:shadow-brand-100/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
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

                                <dt className="text-xl font-bold leading-7 text-gray-900">
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
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
