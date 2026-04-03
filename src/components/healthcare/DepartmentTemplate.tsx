import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Phone, CheckCircle2, ChevronRight, Award, Users, Shield, Zap, Clock, Target, Microscope, Sparkles, MapPin } from "lucide-react";
import { Stethoscope, Electricity, HeartCardiogram } from "healthicons-react/outline";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionContainer } from "@/components/ui/section-container";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { ServiceCard } from "@/components/entities/ServiceCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { WhyChooseUs } from "@/components/trust/WhyChooseUs";
import { ModernCard } from "@/components/ui/modern-card";
import { LocalSEOFooter } from "@/components/healthcare/LocalSEOFooter";
import { siteConfig } from "@/config/site";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import AioKnowledgeBlock from "@/components/seo/AioKnowledgeBlock";

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
    fullDescription: string | React.ReactNode;
    icon?: React.ReactNode;
    procedures?: string[] | Procedure[];
    relatedDoctors?: any[];
    relatedServices?: any[];
    pricing?: PricingPackage[];
    technology?: Technology[];
    children?: React.ReactNode;
    quickFacts?: { label: string; value: string; icon: string | any }[];
}

const iconMap: Record<string, any> = {
    Electricity,
    Shield,
    HeartCardiogram,
    Award,
    Users,
    Stethoscope,
    Zap,
    Clock,
    Target,
    Microscope,
    Sparkles
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
    technology = [],
    children,
    quickFacts
}: DepartmentTemplateProps) {
    const phone = siteConfig.contact.phone;

    return (
        <div className="min-h-screen bg-slate-50/30 dark:bg-slate-950">
            {/* Unified Semantic Knowledge & AEO Infrastructure */}
            <JsonLdSchema 
                type="location" 
                name={`${title} at Indira Super Speciality Hospital`}
                description={shortDescription}
                location={{
                    name: `${title} - Indira Super Speciality Hospital`,
                    address: "54, Katpadi Main Rd, Gandhi Nagar",
                    city: "Vellore",
                    areaServed: "Tamil Nadu"
                }}
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Departments', url: '/departments' },
                    { name: title, url: `/departments/${slug}` }
                ]}
            />
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
                            {(quickFacts || [
                                { label: 'Specialists', value: `${relatedDoctors.length}+ Doctors`, icon: 'Users' },
                                { label: 'Procedures', value: `${procedures.length}+ Expert`, icon: 'HeartCardiogram' },
                                { label: 'Availability', value: '24/7 Care', icon: 'Shield' },
                                { label: 'Success Rate', value: '99% Positive', icon: 'Award' },
                            ]).map((item, i) => {
                                const Icon = typeof item.icon === 'string' ? (iconMap[item.icon] || HeartCardiogram) : item.icon;
                                return (
                                    <div key={i} className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center flex flex-col items-center gap-2 group hover:bg-white/10 transition-colors">
                                        <Icon className="w-5 h-5 text-[#54CAD3] mb-1" />
                                        <p className="text-xs text-fuchsia-200/60 uppercase font-semibold">{item.label}</p>
                                        <p className="text-sm font-bold text-white">{item.value}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Department Overview */}
            <SectionContainer className="py-20">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-10">
                        {/* AI Search Optimization: Knowledge Block */}
                        <AioKnowledgeBlock 
                            title={`Department Snapshot: ${title}`}
                            items={[
                                { label: 'Care Quality', value: 'NABH Accredited', icon: Shield },
                                { label: 'Surgeries', value: `${procedures.length}+ Procedures`, icon: Zap },
                                { label: 'Specialists', value: `${relatedDoctors.length}+ Senior Doctors`, icon: Users },
                                { label: 'Service Hub', value: 'Vellore, Tamil Nadu', icon: MapPin }
                            ]}
                        />

                        <div className="prose prose-lg max-w-none prose-slate dark:prose-invert prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-strong:text-[#005f73] dark:prose-strong:text-fuchsia-300">
                            <h2 className="elite-section-title mb-6">Expert Care in {title}</h2>
                            {fullDescription && (
                                typeof fullDescription === 'string' ? (
                                    <div dangerouslySetInnerHTML={{ __html: fullDescription }} />
                                ) : (
                                    <div>{fullDescription}</div>
                                )
                            )}
                            {children}
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
                    
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Regional Presence: Linking to pSEO Hubs */}
                        <ModernCard className="p-8 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-900 dark:to-slate-950 shadow-sm border border-indigo-100 dark:border-slate-800">
                            <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-indigo-600" />
                                {title} Specialists Near You
                            </h3>
                            <p className="text-sm text-indigo-800/70 dark:text-indigo-400 mb-6 leading-relaxed">
                                Our elite {title.toLowerCase()} department serves patients across major Tamil Nadu districts. Find specialist care in your nearest location:
                            </p>
                            <div className="grid grid-cols-2 gap-3 text-[10px] font-black uppercase tracking-widest text-indigo-700 dark:text-indigo-300">
                                {[
                                    { name: 'Vellore', slug: 'vellore' },
                                    { name: 'Chennai', slug: 'chennai' },
                                    { name: 'Sivaganga', slug: 'sivaganga' },
                                    { name: 'Tenkasi', slug: 'tenkasi' },
                                    { name: 'Hosur', slug: 'hosur' },
                                    { name: 'Kanchipuram', slug: 'kanchipuram' },
                                    { name: 'Tirunelveli', slug: 'tirunelveli' },
                                    { name: 'Dharmapuri', slug: 'dharmapuri' },
                                    { name: 'Tiruvannamalai', slug: 'tiruvannamalai' },
                                    { name: 'Ranipet', slug: 'ranipet' }
                                ].map((loc) => (
                                    <Link 
                                        key={loc.slug} 
                                        href={`/doctor/near-me/${loc.slug}/${slug}`}
                                        className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-100 dark:border-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-sm"
                                    >
                                        {loc.name} {title.split(' ')[0]}
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-indigo-100 dark:border-slate-800">
                                <Link href="/doctor/near-me" className="text-sm font-black text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-2 group">
                                    View All 80+ Locations <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
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
                                <h2 className="elite-section-title text-slate-900 dark:text-white">Elite Medical Units</h2>
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
            <LocalSEOFooter />
        </div>
    );
}

export default DepartmentTemplate;
