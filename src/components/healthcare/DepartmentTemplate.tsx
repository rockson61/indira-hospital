import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Phone, CheckCircle2, ChevronRight, Award, Users, Shield } from "lucide-react";
;
import { Stethoscope, Electricity, HeartCardiogram } from "healthicons-react/outline";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionContainer } from "@/components/ui/section-container";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { ServiceCard } from "@/components/entities/ServiceCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { WhyChooseUs } from "@/components/trust/WhyChooseUs";
import { ModernCard } from "@/components/ui/modern-card";
import { siteConfig } from "@/config/site";

interface Procedure {
    name: string;
    link?: string;
}

interface PricingPackage {
    package_name: string;
    cost: string;
    features: string[];
}

interface Technology {
    name: string;
    description: string;
    icon: string;
}

interface DepartmentTemplateProps {
    title: string;
    slug: string;
    shortDescription: string;
    fullDescription: string;
    icon?: React.ReactNode;
    procedures?: string[] | Procedure[];
    relatedDoctors?: any[];
    relatedServices?: any[];
    pricing?: PricingPackage[];
    technology?: Technology[];
}

const iconMap: Record<string, any> = {
    Electricity: Electricity,
    Shield,
    HeartCardiogram: HeartCardiogram,
    Award,
    Users,
    Stethoscope
};

export function DepartmentTemplate({
    title,
    slug,
    shortDescription,
    fullDescription,
    icon,
    procedures = [],
    relatedDoctors = [],
    relatedServices = [],
    pricing = [],
    technology = []
}: DepartmentTemplateProps) {
    const phone = siteConfig.contact.phone;

    return (
        <div className="min-h-screen bg-slate-50/30 dark:bg-slate-950">
            {/* Premium Hero Section */}
            <section className="relative bg-gradient-to-br from-[#005f73] via-[#0a3d47] to-[#002b36] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-hospital.png')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#002b36]/50" />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-20 lg:pt-56 lg:pb-28">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-sm text-fuchsia-200/60 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/departments" className="hover:text-white transition-colors">Departments</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-white font-medium">{title}</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[#54CAD3] shadow-xl">
                                {icon || <Stethoscope className="h-10 w-10 text-[#54CAD3]" />}
                            </div>
                            <h1 className="elite-hero-title bg-clip-text text-transparent bg-gradient-to-r from-white via-fuchsia-100 to-white/80">
                                {title}
                            </h1>
                            <p className="text-xl text-fuchsia-100/80 max-w-2xl leading-relaxed font-light">
                                {shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link
                                    href="/book-appointment"
                                    className="inline-flex items-center px-8 py-4 bg-[#54CAD3] hover:bg-[#45b5bd] text-[#002b36] font-bold rounded-xl transition-all shadow-lg shadow-[#54CAD3]/20 hover:scale-105 active:scale-95"
                                >
                                    <Calendar className="h-5 w-5 mr-2" />
                                    Book Consultation
                                </Link>
                                <a
                                    href={`tel:${phone.replace(/\s+/g, '')}`}
                                    className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl transition-all border border-white/20 hover:scale-105"
                                >
                                    <Phone className="h-5 w-5 mr-2" />
                                    Call Experts
                                </a>
                            </div>
                        </div>

                        {/* Quick highlights grid */}
                        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                            {[
                                { label: 'Specialists', value: `${relatedDoctors.length}+ Doctors`, icon: Users },
                                { label: 'Procedures', value: `${procedures.length}+ Expert`, icon: HeartCardiogram },
                                { label: 'Availability', value: '24/7 Care', icon: Shield },
                                { label: 'Success Rate', value: '99% Positive', icon: Award },
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center flex flex-col items-center gap-2 group hover:bg-white/10 transition-colors">
                                    <item.icon className="w-5 h-5 text-[#54CAD3] mb-1" />
                                    <p className="text-xs text-fuchsia-200/60 uppercase font-semibold">{item.label}</p>
                                    <p className="text-sm font-bold text-white">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Department Overview */}
            <SectionContainer className="py-20">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-10">
                        <div className="prose prose-lg max-w-none prose-slate dark:prose-invert prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-strong:text-[#005f73] dark:prose-strong:text-fuchsia-300">
                            <h2 className="elite-section-title mb-6">Expert Care in {title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: fullDescription }} />
                        </div>

                        {/* Technology / Infrastructure Highlights */}
                        {technology.length > 0 && (
                            <div className="grid sm:grid-cols-2 gap-6 mt-12">
                                {technology.map((tech, idx) => {
                                    const Icon = iconMap[tech.icon] || HeartCardiogram;
                                    return (
                                        <ModernCard key={idx} variant="glass" className="p-6 border-fuchsia-100 bg-fuchsia-50/30">
                                            <div className="flex gap-4">
                                                <div className="p-3 rounded-lg bg-fuchsia-600 text-white h-fit">
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 dark:text-white">{tech.name}</h4>
                                                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{tech.description}</p>
                                                </div>
                                            </div>
                                        </ModernCard>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Sidebar Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        <ModernCard className="p-8 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 border-none sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-fuchsia-600" />
                                Department Schedule
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-700">
                                    <span className="text-slate-600 dark:text-slate-300 font-medium">Monday — Friday</span>
                                    <span className="font-bold text-fuchsia-700">24 Hours</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-700">
                                    <span className="text-slate-600 dark:text-slate-300 font-medium">Saturday</span>
                                    <span className="font-bold text-fuchsia-700">24 Hours</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-slate-600 dark:text-slate-300 font-medium">Emergency</span>
                                    <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">ALWAYS OPEN</span>
                                </div>
                            </div>
                            <Link
                                href="/book-appointment"
                                className="w-full mt-8 inline-flex items-center justify-center px-6 py-4 bg-[#005f73] hover:bg-[#0a4d5c] text-white font-bold rounded-xl transition-all shadow-lg"
                            >
                                Get Priority Token
                            </Link>
                        </ModernCard>
                    </aside>
                </div>
            </SectionContainer>

            {/* Key Procedures Section */}
            {procedures.length > 0 && (
                <section className="bg-white dark:bg-slate-900 py-20 border-y border-slate-100 dark:border-slate-700">
                    <SectionContainer>
                        <div className="text-center mb-16">
                            <h2 className="elite-section-title text-slate-900 dark:text-white mb-4">World-Class Procedures</h2>
                            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Our specialists at Indira Hospital utilize advanced technology to perform high-precision treatments.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {procedures.map((proc, idx) => {
                                const name = typeof proc === 'string' ? proc : proc.name;
                                return (
                                    <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-fuchsia-50 dark:bg-fuchsia-950 hover:scale-[1.02] transition-all group border border-transparent hover:border-fuchsia-100">
                                        <div className="bg-fuchsia-100 p-2 rounded-lg text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight uppercase text-xs tracking-wide">{name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </SectionContainer>
                </section>
            )}

            {/* Specialized Centers / Mini Services */}
            {relatedServices.length > 0 && (
                <section className="bg-slate-50/50 dark:bg-slate-900 py-24">
                    <SectionContainer>
                        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                            <div>
                                <h2 className="elite-section-title text-slate-900 dark:text-white">Centers of Excellence</h2>
                                <p className="text-slate-500 dark:text-slate-400 mt-2">Highly specialized sub-departments within our {title} unit.</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedServices.map((service, idx) => (
                                <ServiceCard
                                    key={idx}
                                    service={{
                                        title: service.title,
                                        slug: service.url?.split('/').pop() || service.slug,
                                        short_description: service.description || `Leading ${service.title} specialized care at Indira Super Speciality Hospital.`,
                                        icon: service.icon || 'HeartCardiogram'
                                    }}
                                    variant="poster"
                                />
                            ))}
                        </div>
                    </SectionContainer>
                </section>
            )}

            {/* Meet the Doctors Section */}
            {relatedDoctors.length > 0 && (
                <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
                    <SectionContainer>
                        <div className="text-center mb-16 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-full blur-3xl opacity-50 -z-10" />
                            <h2 className="elite-section-title text-slate-900 dark:text-white">Meet Our Expert Specialists</h2>
                            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto italic">Highly experienced surgeons and clinicians dedicated to your wellbeing.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedDoctors.map((doctor, idx) => (
                                <DoctorCard key={idx} doctor={doctor} variant="grid" />
                            ))}
                        </div>
                    </SectionContainer>
                </section>
            )}

            <WhyChooseUs />

            <EntityFAQs
                entityType="department"
                entityName={title}
                entitySlug={slug}
                className="bg-slate-50/50"
            />

            <EntityReviews
                entityType="department"
                entityName={title}
                entitySlug={slug}
            />

            {/* Final CTA */}
            <section className="bg-[#002b36] dark:bg-slate-900 py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu" />
                <SectionContainer>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="elite-section-title text-white mb-6">Experience Better Healthcare at Indira Hospital</h2>
                        <p className="text-xl text-fuchsia-100/70 font-light">Join over 1,00,000 satisfied patients who trusted us for their surgical and medical needs.</p>
                        <div className="flex flex-wrap justify-center gap-6 pt-6">
                            <Link
                                href="/book-appointment"
                                className="px-10 py-5 bg-[#54CAD3] hover:bg-[#45b5bd] text-[#002b36] font-bold rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95 text-lg"
                            >
                                Secure Your Priority Appointment
                            </Link>
                            <a
                                href={`tel:${phone.replace(/\s+/g, '')}`}
                                className="px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl transition-all border border-white/10 hover:scale-105 text-lg"
                            >
                                WhatsApp Chat Support
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </div>
    );
}

export default DepartmentTemplate;
