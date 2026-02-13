import { getDoctorBySlug, getDoctors } from "@/lib/api";
import { getImageUrl } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, GraduationCap, Award, MapPin, Languages, Stethoscope } from "lucide-react";
import Link from "next/link";

export const revalidate = 3600;

import { SEED_DATA } from "@/lib/data/seed-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let doctor = await getDoctorBySlug(slug).catch(() => null);
    if (!doctor) {
        doctor = SEED_DATA.doctors.find(d => d.slug === slug) as any;
    }

    if (!doctor) return { title: 'Doctor Not Found' };
    return {
        title: `${doctor.name} - ${doctor.designation} | Indira Hospital`,
        description: doctor.bio?.replace(/<[^>]*>?/gm, '').substring(0, 150),
    };
}

export async function generateStaticParams() {
    let doctors = await getDoctors().catch(() => []);
    if (!doctors.length) doctors = SEED_DATA.doctors as any;

    return doctors.map((doc: any) => ({
        slug: doc.slug,
    }));
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let doctor = await getDoctorBySlug(slug).catch(() => null);

    if (!doctor) {
        doctor = SEED_DATA.doctors.find(d => d.slug === slug) as any;
    }

    if (!doctor) {
        notFound();
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Breadcrumbs (Simplified) */}
                <div className="text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-brand-600">Home</Link> &gt;
                    <Link href="/doctors" className="hover:text-brand-600 ml-1">Doctors</Link> &gt;
                    <span className="ml-1 text-gray-900">{doctor.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Sidebar: Profile Card */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-24 p-6 border-none shadow-lg rounded-2xl overflow-hidden">
                            <div className="aspect-[3/4] relative rounded-xl overflow-hidden mb-6 bg-gray-100">
                                {doctor.image ? (
                                    <img
                                        src={getImageUrl(doctor.image)!}
                                        alt={doctor.name}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-6xl">👨‍⚕️</div>
                                )}
                            </div>

                            <h1 className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</h1>
                            <p className="text-brand-600 font-medium mb-4 uppercase tracking-wide text-sm">{doctor.designation}</p>

                            <div className="space-y-3 mb-6">
                                {doctor.department && typeof doctor.department !== 'string' && (
                                    <div className="flex items-center text-gray-600 text-sm">
                                        <Stethoscope className="w-4 h-4 mr-3 text-brand-500" />
                                        <span>{doctor.department.name}</span>
                                    </div>
                                )}
                                {doctor.experience_years && (
                                    <div className="flex items-center text-gray-600 text-sm">
                                        <Award className="w-4 h-4 mr-3 text-brand-500" />
                                        <span>{doctor.experience_years} Years Experience</span>
                                    </div>
                                )}
                                <div className="flex items-center text-gray-600 text-sm">
                                    <MapPin className="w-4 h-4 mr-3 text-brand-500" />
                                    <span>Indira Hospital, Main Branch</span>
                                </div>
                            </div>

                            <Button className="w-full" size="lg">Book Appointment</Button>
                        </Card>
                    </div>

                    {/* Right Content: Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Biography */}
                        <Card className="p-8 border-none shadow-sm rounded-2xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="bg-brand-100 p-2 rounded-lg mr-3 text-brand-600">
                                    <Stethoscope className="w-5 h-5" />
                                </span>
                                About {doctor.name}
                            </h2>
                            <div
                                className="prose prose-blue max-w-none text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: doctor.bio || "<p>No biography available.</p>" }}
                            />
                        </Card>

                        {/* Education & Qualifications */}
                        {doctor.education && (doctor.education as any[]).length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-brand-100 p-2 rounded-lg mr-3 text-brand-600">
                                        <GraduationCap className="w-5 h-5" />
                                    </span>
                                    Education
                                </h2>
                                <div className="space-y-6">
                                    {(doctor.education as any[]).map((edu: any, i: number) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-400 shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                                                <p className="text-gray-500 text-sm">{edu.institution}</p>
                                                {edu.year && <span className="text-xs text-brand-500 font-medium">{edu.year}</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}

                        {/* Experience Timeline */}
                        {doctor.experience_timeline && (doctor.experience_timeline as any[]).length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-brand-100 p-2 rounded-lg mr-3 text-brand-600">
                                        <Clock className="w-5 h-5" />
                                    </span>
                                    Work Experience
                                </h2>
                                <div className="relative border-l-2 border-brand-100 ml-3 pl-8 space-y-8">
                                    {(doctor.experience_timeline as any[]).map((exp: any, i: number) => (
                                        <div key={i} className="relative">
                                            <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-brand-500" />
                                            <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                                            <p className="text-gray-600">{exp.hospital}</p>
                                            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{exp.start} - {exp.end}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}

                        {/* Languages */}
                        {doctor.languages && (doctor.languages as string[]).length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-brand-100 p-2 rounded-lg mr-3 text-brand-600">
                                        <Languages className="w-5 h-5" />
                                    </span>
                                    Languages Spoken
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {(doctor.languages as string[]).map((lang: string, i: number) => (
                                        <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
