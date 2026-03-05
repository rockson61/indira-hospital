import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDoctors, getDepartments } from "@/lib/api";
import { Phone, Calendar, Clock, Award, MapPin, ChevronRight, Star, GraduationCap } from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { HealthLibraryCard } from "@/components/sections/HealthLibraryCard";

export const dynamicParams = true;

export function getDoctorSpecialtySlug(doc: any): string {
    const rawDept = typeof doc.department === 'string' ? doc.department : doc.department?.name || doc.specialty || 'specialist';
    return rawDept.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function generateStaticParams() {
    const doctors = await getDoctors().catch(() => []);
    return doctors.map((doc: any) => ({
        specialty: getDoctorSpecialtySlug(doc),
        slug: doc.slug
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ specialty: string; slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const doctors = await getDoctors().catch(() => []);
    const doc = doctors.find((d: any) => d.slug === slug);
    if (!doc) return { title: "Doctor Not Found" };
    return {
        title: `${doc.name} — ${typeof doc.department === 'string' ? doc.department : doc.department?.name || "Specialist"} | Best Hospital in TN & India | Indira Hospital`,
        description: doc.bio || `Book an appointment with ${doc.name}`,
    };
}

export default async function DoctorProfileRoute({
    params,
}: {
    params: Promise<{ specialty: string; slug: string }>;
}) {
    const { slug, specialty } = await params;
    const allDoctors = await getDoctors().catch(() => []);
    const currDoctor = allDoctors.find((d: any) => d.slug === slug);

    if (!currDoctor) {
        notFound();
    }

    // Fetch departments to find the matching one
    let departments: any[] = [];
    try {
        departments = await getDepartments().catch(() => []);
    } catch { departments = []; }

    const dept = departments.find((d: any) => d.slug === currDoctor.departmentId);

    // Get other doctors in the same department
    const relatedDoctors = allDoctors.filter(
        (d: any) => d.department === currDoctor.department && d.slug !== currDoctor.slug
    );

    const initials = currDoctor.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase();

    return (
        <div className="bg-[#FAFAFA] dark:bg-slate-950 min-h-screen">
            <JsonLdSchema
                type="physician"
                name={currDoctor.name}
                specialty={currDoctor.specialty || (typeof currDoctor.department === 'string' ? currDoctor.department : currDoctor.department?.name || 'Specialist')}
                description={currDoctor.bio || `Expert doctor at Indira Hospital`}
                url={`/doctor/${specialty}/${slug}`}
            />
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-fuchsia-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_70%)]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-16 lg:pt-60 lg:pb-24">
                    {/* Breadcrumb */}
                    <nav className="flex items-center text-sm text-slate-300 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2 opacity-40" />
                        <Link href="/doctor/near-me" className="hover:text-white transition-colors capitalize">Our Specialists</Link>
                        <ChevronRight className="w-4 h-4 mx-2 opacity-40" />
                        <span className="text-fuchsia-300 font-medium">{currDoctor.name}</span>
                    </nav>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Left: Doctor Info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-start gap-6">
                                {/* Avatar */}
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 flex items-center justify-center text-white font-black text-3xl md:text-4xl shadow-xl flex-shrink-0">
                                    {initials}
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">{currDoctor.name}</h1>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-4 py-1.5 bg-fuchsia-500/20 border border-fuchsia-400/30 rounded-full text-sm font-bold text-fuchsia-300">
                                            {currDoctor.specialty}
                                        </span>
                                        {dept && (
                                            <Link href={`/departments/${dept.slug}`} className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white/80 hover:bg-white/20 transition-colors">
                                                {dept.title} Dept.
                                            </Link>
                                        )}
                                    </div>
                                    <p className="text-slate-300 leading-relaxed max-w-2xl text-lg">{currDoctor.bio}</p>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                                    <Clock className="w-5 h-5 text-fuchsia-400 mx-auto mb-2" />
                                    <p className="text-2xl font-black text-white">{currDoctor.years_of_experience || currDoctor.experience || 10}+</p>
                                    <p className="text-xs text-slate-400 font-medium">Years Experience</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                                    <Star className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                                    <p className="text-2xl font-black text-white">4.9</p>
                                    <p className="text-xs text-slate-400 font-medium">Patient Rating</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                                    <Award className="w-5 h-5 text-fuchsia-400 mx-auto mb-2" />
                                    <p className="text-2xl font-black text-white">{Array.isArray(currDoctor.qualifications || currDoctor.education) ? (currDoctor.qualifications || currDoctor.education).length : 2}</p>
                                    <p className="text-xs text-slate-400 font-medium">Qualifications</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: CTA Card */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 md:p-8 shadow-2xl text-slate-900 dark:text-white">
                            <h3 className="text-lg font-black mb-4">Book a Consultation</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Schedule an appointment with {currDoctor.name} at Indira Super Speciality Hospital.</p>
                            <Link
                                href={`/book-appointment?doctor=${currDoctor.slug}`}
                                className="block w-full text-center px-6 py-4 bg-slate-900 dark:bg-fuchsia-600 text-white font-bold rounded-2xl hover:bg-fuchsia-700 dark:hover:bg-fuchsia-500 transition-all shadow-md"
                            >
                                <Calendar className="w-5 h-5 inline-block mr-2 -mt-0.5" />
                                Book Appointment
                            </Link>
                            <a
                                href="tel:+919809824425"
                                className="block w-full text-center px-6 py-3 mt-3 bg-rose-50 dark:bg-rose-950 text-rose-600 font-bold rounded-2xl hover:bg-rose-100 transition-colors"
                            >
                                <Phone className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Education */}
                        {((currDoctor.qualifications || currDoctor.education) && (
                            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 text-fuchsia-600" />
                                    </div>
                                    <h2 className="text-xl font-black text-slate-900 dark:text-white">Education & Qualifications</h2>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {(Array.isArray(currDoctor.qualifications || currDoctor.education)
                                        ? (currDoctor.qualifications || currDoctor.education)
                                        : [currDoctor.qualifications || currDoctor.education]
                                    ).map((edu: any, i: number) => (
                                        <span key={i} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl text-sm">
                                            {typeof edu === 'object' && edu !== null
                                                ? `${edu.degree || edu.name || ''} ${edu.institution ? `(${edu.institution})` : ''}`.trim() || JSON.stringify(edu)
                                                : edu}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Availability */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-fuchsia-600" />
                                </div>
                                <h2 className="text-xl font-black text-slate-900 dark:text-white">Availability Schedule</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {(Array.isArray(currDoctor.availability) ? currDoctor.availability : ['Mon - Sat']).map((day: string, i: number) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-3 bg-fuchsia-50 dark:bg-fuchsia-950 border border-fuchsia-100 rounded-xl">
                                        <div className="w-2 h-2 rounded-full bg-fuchsia-500" />
                                        <span className="text-sm font-bold text-fuchsia-700">{day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Location Card */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center">
                                    <MapPin className="w-4 h-4 text-fuchsia-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Hospital Location</h3>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Indira Super Speciality Hospital, Vellore, Tamil Nadu</p>
                        </div>

                        {/* Related Doctors */}
                        {relatedDoctors.length > 0 && (
                            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center">
                                        <Stethoscope className="w-4 h-4 text-fuchsia-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">More Specialists</h3>
                                </div>
                                <div className="space-y-3">
                                    {relatedDoctors.map((doc: any) => (
                                        <Link
                                            key={doc.slug}
                                            href={`/doctor/${(doc.department || 'specialist').toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '')}/${doc.slug}`}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:bg-slate-800 transition-colors group"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-fuchsia-100 flex items-center justify-center flex-shrink-0">
                                                <span className="text-fuchsia-700 font-bold text-xs">
                                                    {doc.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-fuchsia-700 transition-colors">{doc.name}</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">{doc.specialty}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <HealthLibraryCard />

            {/* ENTITY CARD SECTIONS */}
            <EntityCardSection type="services" title="Treatments Available" subtitle="Our Services" limit={6} className="bg-white dark:bg-slate-900" />
            <EntityCardSection type="departments" title="Our Departments" subtitle="Centres of Excellence" limit={6} className="bg-[#FAFAFA] dark:bg-slate-950" />
            <EntityCardSection type="locations" title="Hospital Near You" subtitle="Our Locations" limit={6} className="bg-white dark:bg-slate-900" />

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid type="services" title="All Treatments A-Z" subtitle="Services Directory" limit={8} className="bg-[#FAFAFA] dark:bg-slate-950" />
            <InternalLinkGrid type="locations" title="All Locations" subtitle="Location Directory" limit={8} className="bg-white dark:bg-slate-900" />
        </div>
    );
}
