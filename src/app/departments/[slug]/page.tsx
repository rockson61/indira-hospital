import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDepartmentBySlug, getDepartments, getDoctors } from "@/lib/api";
import { ChevronRight, CheckCircle2, Siren, Ribbon, MessageCircle, Phone, Users, GraduationCap } from "lucide-react";
import { Stethoscope, Heart, HeartCardiogram, Baby0203m, Happy, Neurology, BloodDrop } from "healthicons-react/outline";
import { Card } from "@/components/ui/card";
import { injectInternalLinks } from "@/lib/html-linkify";
import EntityReviews from "@/components/trust/EntityReviews";

import { DoctorCard } from "@/components/entities/DoctorCard";
import { ServiceCard } from "@/components/entities/ServiceCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { HealthLibraryCard } from "@/components/sections/HealthLibraryCard";
import { siteConfig } from "@/config/site";



// Icon map for departments
const iconMap: Record<string, React.ReactNode> = {
    Scalpel: <Stethoscope className="h-8 w-8" />,
    HeartCardiogram: <HeartCardiogram className="h-8 w-8" />,
    Stethoscope: <Stethoscope className="h-8 w-8" />,
    Baby0203m: <Baby0203m className="h-8 w-8" />,
    Orthopaedics: <HeartCardiogram className="h-8 w-8" />,
    Heart: <Heart className="h-8 w-8" />,
    Siren: <Siren className="h-8 w-8" />,
    Happy: <Happy className="h-8 w-8" />,
    Neurology: <Neurology className="h-8 w-8" />,
    Ribbon: <Ribbon className="h-8 w-8" />,
    BloodDrop: <BloodDrop className="h-8 w-8" />,
};

export const dynamicParams = true;

export async function generateStaticParams() {
    const departments = await getDepartments().catch(() => []);
    return departments.map((dept: any) => ({ slug: dept.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const department = await getDepartmentBySlug(slug).catch(() => null);

    if (!department) return { title: "Department Not Found" };

    return {
        title: department.seo_title || `Best ${department.title} Department in Vellore, Tamil Nadu | Indira Hospital`,
        description: department.seo_description || `Discover expert ${department.title} care at Indira Hospital, Vellore. Leading specialists in Tamil Nadu, India, offering advanced treatments and same-day discharge.`,
        keywords: [department.title, "Best Hospital in Vellore", "Tamil Nadu", "India", "Indira Hospital", "Specialist Doctor"],
    };
}

export default async function DepartmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const department = await getDepartmentBySlug(slug).catch(() => null);
    if (!department) notFound();

    let relatedDoctors = (department.related_doctors as any[]) || [];
    if (relatedDoctors.length === 0) {
        const allDoc: any[] = await getDoctors().catch(() => []);
        relatedDoctors = allDoc.filter(
            (d) => {
                const dept = typeof d.department === 'string' ? d.department : (d.department as any)?.name || '';
                return dept.toLowerCase().includes(department.title.toLowerCase()) ||
                    department.title.toLowerCase().includes(dept.toLowerCase()) ||
                    (d.specialties && d.specialties.some((s: string) =>
                        department.title.toLowerCase().includes(s.toLowerCase()) ||
                        s.toLowerCase().includes(department.title.toLowerCase())
                    ));
            }
        ) as any;
    }
    const allDepartments = await getDepartments().catch(() => []);
    const otherDepartments = allDepartments.filter((d: any) => d.slug !== slug);

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I need information about the ${department.title} department at Indira Hospital.`)}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        name: `${department.title} Department`,
        url: `${siteConfig.url}/departments/${slug}`,
        description: department.seo_description || department.full_description?.replace(/<[^>]*>?/gm, '').slice(0, 300) || department.short_description,
        medicalSpecialty: {
            "@type": "MedicalSpecialty",
            name: department.title,
        },
        provider: {
            "@type": "Hospital",
            name: siteConfig.name,
            url: siteConfig.url,
        },
    };

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ========== HERO ========== */}
            <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-48 pb-16 lg:pt-56 lg:pb-20 relative z-10">
                    <nav className="flex items-center text-sm text-indigo-200 mb-8 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/departments" className="hover:text-white transition-colors">Departments</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-white font-medium">{department.title}</span>
                    </nav>

                    <div className="flex items-start gap-6">
                        <div className="hidden sm:flex h-16 w-16 rounded-2xl bg-white/10 backdrop-blur items-center justify-center text-white">
                            {iconMap[department.icon] || <Stethoscope className="h-8 w-8" />}
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{department.title} Specialists in Vellore, Tamil Nadu</h1>
                            <p className="mt-4 text-lg text-indigo-100 max-w-3xl leading-relaxed">{department.short_description}</p>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 text-lg">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Contact Department
                                </a>
                                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                                    className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl transition-colors border border-white/20">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call Helpline
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== MAIN CONTENT ========== */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <Card className="p-8 border-none shadow-sm rounded-2xl">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                <span className="bg-indigo-100 p-2 rounded-lg mr-3 text-indigo-600">
                                    <Stethoscope className="w-5 h-5" />
                                </span>
                                About the {department.title} Department
                            </h2>
                            <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-base space-y-4" dangerouslySetInnerHTML={{ __html: injectInternalLinks(department.full_description) }} />
                        </Card>

                        <EntityFAQs
                            entityType="department"
                            entityName={department.title}
                            entitySlug={slug}
                        />

                        {/* Patient Reviews */}
                        <EntityReviews
                            entityType="department"
                            entityName={department.title}
                            entitySlug={slug}
                            title={`${department.title} Patient Experiences`}
                            description={`Real stories from patients treated in our ${department.title} department.`}
                        />

                        {/* Doctors in this Department */}
                        {relatedDoctors.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                    <span className="bg-indigo-100 p-2 rounded-lg mr-3 text-indigo-600">
                                        <GraduationCap className="w-5 h-5" />
                                    </span>
                                    Meet the Experts in {department.title}
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {relatedDoctors.map((doc) => (
                                        <DoctorCard key={doc.slug} doctor={doc} variant="compact" />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="lg:sticky lg:top-24 space-y-6">

                            {/* Other Departments Quick Links */}
                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Other Departments</h3>
                                <div className="flex flex-wrap gap-2">
                                    {otherDepartments.slice(0, 10).map((d: any) => (
                                        <ServiceCard key={d.slug} service={d} variant="compact" />
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <HealthLibraryCard />

            <EntityCardSection type="doctors" title="Our Expert Doctors" subtitle="Meet Our Specialists" limit={6} className="bg-white dark:bg-slate-900" />

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid
                type="treatments"
                parentSlug={slug}
                title={`Procedures in ${department.title}`}
                subtitle={`Specialized Care`}
                limit={12}
                className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50"
            />
            <InternalLinkGrid type="departments" title="All Departments A-Z" subtitle="Departments Directory" limit={12} className="bg-white dark:bg-slate-900" />
            <InternalLinkGrid type="doctors" title="All Doctors A-Z" subtitle="Doctors Directory" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />
        </div >
    );
}
