import { SectionContainer } from "@/components/ui/section-container"
import { Users, Target, Award, Building2, ChevronRight } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/ui/page-hero";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Indira Super Speciality Hospital Vellore",
    description: "Learn about Indira Hospital's legacy of compassionate care, our mission, vision, and the leadership team driving medical excellence in Vellore.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen pb-20 bg-slate-50 dark:bg-slate-950">
            {/* Hero */}
            <SectionContainer className="pt-28 pb-16">
                <div className="text-center max-w-4xl mx-auto">
                    <span className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-4 block">Established 1988</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Pioneering <span className="text-purple-700">Medical Excellence</span> in Vellore
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Indira Super Speciality Hospital stands as a beacon of hope and healing,
                        driven by a legacy of compassion and world-class technology.
                    </p>
                </div>
            </SectionContainer>

            {/* Mission & Vision */}
            <SectionContainer className="py-20">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-xl">
                        <Target className="w-12 h-12 text-purple-600 mb-6" />
                        <h2 className="text-2xl font-bold mb-4 dark:text-white">Our Mission</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            To provide comprehensive, compassionate, and cost-effective healthcare services
                            comparable to international standards, ensuring patient safety and satisfaction.
                        </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-[2rem] border border-purple-100 dark:border-purple-900/50">
                        <Users className="w-12 h-12 text-purple-600 mb-6" />
                        <h2 className="text-2xl font-bold mb-4 dark:text-white">Our Vision</h2>
                        <p className="text-lg text-purple-900 dark:text-purple-100 leading-relaxed">
                            To be the most trusted healthcare destination in Tamil Nadu, recognized for clinical excellence,
                            ethical practices, and patient-centric care.
                        </p>
                    </div>
                </div>
            </SectionContainer>

            {/* Leadership */}
            <div className="bg-white dark:bg-slate-900 py-20 border-y border-slate-100 dark:border-slate-800">
                <SectionContainer>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Leadership Team</h2>
                        <p className="text-slate-500 dark:text-slate-400">
                            Guided by visionaries dedicated to medical excellence and community service.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. C. Paskal", role: "Chairman & Managing Director", desc: "A visionary leader with over 40 years of experience in healthcare administration.", icon: "CP" },
                            { name: "Dr. P. Indira", role: "Medical Director", desc: "Ensuring the highest standards of clinical governance and medical ethics.", icon: "PI" },
                            { name: "Mr. P. John", role: "Chief Operating Officer", desc: "Driving operational efficiency and digital transformation for patient care.", icon: "PJ" }
                        ].map((member) => (
                            <div key={member.name} className="bg-white p-8 rounded-[2rem] border border-gray-100 text-center hover:shadow-xl transition-all group">
                                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-sm group-hover:scale-110 transition-transform">
                                    <span className="text-purple-700 font-bold text-2xl">{member.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-sm text-purple-600 font-bold uppercase tracking-wider mb-4">{member.role}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {member.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
            </div>

            {/* Final CTA */}
            <SectionContainer className="py-20">
                <div className="bg-purple-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-indigo-900 opacity-90" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Start Your Healing Journey</h2>
                        <p className="text-purple-100 mb-8 text-lg">
                            Experience the perfect blend of medical expertise and compassionate care.
                            Our team is ready to assist you 24/7.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/doctors" className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-xl font-bold transition-all shadow-lg">
                                Find a Doctor
                            </Link>
                            <Link href="/contact" className="bg-purple-700/50 hover:bg-purple-700/70 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
