import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { SEED_DATA } from "@/lib/data/seed-data";
import {
    Stethoscope,
    Activity,
    Baby,
    Heart,
    Siren,
    Smile,
    Brain,
    Ribbon,
    Droplets,
} from "lucide-react";

// Icon map for services
const iconMap: Record<string, React.ReactNode> = {
    Scalpel: <Stethoscope className="h-6 w-6" />,
    Activity: <Activity className="h-6 w-6" />,
    Stethoscope: <Stethoscope className="h-6 w-6" />,
    Baby: <Baby className="h-6 w-6" />,
    Bone: <Activity className="h-6 w-6" />,
    Heart: <Heart className="h-6 w-6" />,
    Siren: <Siren className="h-6 w-6" />,
    Smile: <Smile className="h-6 w-6" />,
    Brain: <Brain className="h-6 w-6" />,
    Ribbon: <Ribbon className="h-6 w-6" />,
    Droplets: <Droplets className="h-6 w-6" />,
};

export const metadata: Metadata = {
    title: "Our Services | Indira Super Speciality Hospital Vellore",
    description:
        "Explore the comprehensive range of medical services offered at Indira Super Speciality Hospital — General Surgery, Cardiology, Orthopaedics, Urology, and more.",
};

export default function ServicesPage() {
    const services = SEED_DATA.services;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <p className="text-purple-200 font-medium mb-3 uppercase tracking-wider text-sm">
                        Comprehensive Healthcare
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Our Medical Services
                    </h1>
                    <p className="mt-4 text-lg text-purple-100 max-w-2xl leading-relaxed">
                        From advanced surgical procedures to round-the-clock emergency care,
                        we provide a full spectrum of medical services using state-of-the-art
                        technology.
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                        { label: "Medical Specialties", value: `${services.length}+` },
                        { label: "Expert Doctors", value: "15+" },
                        { label: "Surgeries/Year", value: "5000+" },
                        { label: "Patient Satisfaction", value: "98%" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white rounded-xl shadow-md p-5 text-center"
                        >
                            <p className="text-2xl font-bold text-purple-700">
                                {stat.value}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <SectionHeader
                    title="Explore Our Specialties"
                    subtitle="All Services"
                    description="Each department is led by experienced specialists and equipped with advanced diagnostic and treatment technology."
                />
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.slug}
                            title={service.title}
                            description={service.short_description}
                            slug={service.slug}
                            icon={
                                iconMap[service.icon] || (
                                    <Stethoscope className="h-6 w-6" />
                                )
                            }
                        />
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionHeader
                        title="Why Choose Indira Hospital"
                        subtitle="Our Promise"
                        description="We are committed to providing world-class healthcare with a personal touch."
                    />
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Advanced Technology",
                                desc: "State-of-the-art equipment and minimally invasive surgical techniques for better outcomes.",
                            },
                            {
                                title: "Experienced Specialists",
                                desc: "Board-certified doctors with decades of combined experience across all specialties.",
                            },
                            {
                                title: "Affordable Care",
                                desc: "Quality healthcare at transparent, competitive prices with insurance support.",
                            },
                            {
                                title: "24/7 Emergency",
                                desc: "Round-the-clock emergency department and ICU staffed by critical care specialists.",
                            },
                            {
                                title: "Patient-First Approach",
                                desc: "Personalized care plans, counseling, and follow-up for every patient.",
                            },
                            {
                                title: "Insurance Partners",
                                desc: "Empaneled with major insurance providers for cashless treatment options.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="p-6 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors group"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
