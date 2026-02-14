import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SEED_DATA } from "@/lib/data/seed-data";
import { enhancedVelloreLocations } from "@/lib/data/enhanced-location-data";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { getImageUrl } from "@/lib/utils";
import {
    ChevronRight, CheckCircle2, Stethoscope, MessageCircle, Phone,
    Award, Users, Clock, Shield, Star, MapPin, ArrowRight, GraduationCap, Briefcase, Globe
} from "lucide-react";
import { Card } from "@/components/ui/card";

const WHATSAPP_NUMBER = "917010650063";

function getLocationBySlug(slug: string) {
    return enhancedVelloreLocations.find(l => l.slug === slug) || tamilNaduLocations.find(l => l.slug === slug);
}

function getAllLocationSlugs(): string[] {
    const slugSet = new Set<string>();
    enhancedVelloreLocations.forEach(l => slugSet.add(l.slug));
    tamilNaduLocations.forEach(l => slugSet.add(l.slug));
    return Array.from(slugSet);
}

export function generateStaticParams() {
    const params: { slug: string; deptSlug: string; doctorSlug: string }[] = [];
    const locationSlugs = getAllLocationSlugs();
    for (const slug of locationSlugs) {
        for (const dept of SEED_DATA.services) {
            const relatedDoctors = SEED_DATA.doctors.filter(d => {
                const dName = typeof d.department === 'string' ? d.department : (d.department as any)?.name || '';
                return dName.toLowerCase() === dept.title.toLowerCase() ||
                    d.specialties.some(s => dept.title.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(dept.title.toLowerCase()));
            });
            for (const doc of relatedDoctors) {
                params.push({ slug, deptSlug: dept.slug, doctorSlug: doc.slug });
            }
        }
    }
    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; deptSlug: string; doctorSlug: string }> }): Promise<Metadata> {
    const { slug, deptSlug, doctorSlug } = await params;
    const location = getLocationBySlug(slug);
    const dept = SEED_DATA.services.find(s => s.slug === deptSlug);
    const doctor = SEED_DATA.doctors.find(d => d.slug === doctorSlug);
    if (!location || !dept || !doctor) return { title: "Not Found" };

    return {
        title: `${doctor.name} - ${dept.title} Doctor Near ${location.name} | Indira Hospital`,
        description: `Book appointment with ${doctor.name} (${doctor.designation}) for ${dept.title} near ${location.name}. ${location.distance} from ${location.name}. WhatsApp booking available.`,
    };
}

export default async function LocationDeptDoctorPage({ params }: { params: Promise<{ slug: string; deptSlug: string; doctorSlug: string }> }) {
    const { slug, deptSlug, doctorSlug } = await params;
    const location = getLocationBySlug(slug);
    const dept = SEED_DATA.services.find(s => s.slug === deptSlug);
    const doctor = SEED_DATA.doctors.find(d => d.slug === doctorSlug);
    if (!location || !dept || !doctor) notFound();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I am from ${location.name}. I want to book an appointment with ${doctor.name} (${dept.title}) at Indira Hospital.`)}`;

    const otherDoctors = SEED_DATA.doctors.filter(d => d.slug !== doctorSlug).slice(0, 4);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero */}
            <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
                    <nav className="flex flex-wrap items-center text-sm text-teal-200 mb-8 gap-y-1">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <Link href={`/locations/${slug}`} className="hover:text-white transition-colors">{location.name}</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <Link href={`/locations/${slug}/departments/${deptSlug}`} className="hover:text-white transition-colors">{dept.title}</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <span className="text-white font-medium">{doctor.name}</span>
                    </nav>

                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="w-28 h-28 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {doctor.image && getImageUrl(doctor.image) ? (
                                <img src={getImageUrl(doctor.image)!} alt={doctor.name} className="w-full h-full object-cover rounded-2xl" />
                            ) : (
                                <Stethoscope className="w-12 h-12 text-white/60" />
                            )}
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{doctor.name}</h1>
                            <p className="text-teal-200 text-lg mt-1">{doctor.designation}</p>

                            <div className="flex flex-wrap gap-3 mt-4">
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2">
                                    <Stethoscope className="w-4 h-4 text-amber-400" />
                                    <span className="text-sm">{dept.title}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2">
                                    <Clock className="w-4 h-4 text-amber-400" />
                                    <span className="text-sm">{doctor.experience_years}+ Years</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2">
                                    <MapPin className="w-4 h-4 text-amber-400" />
                                    <span className="text-sm">{location.distance} from {location.name}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 text-lg">
                                    <MessageCircle className="w-5 h-5 mr-2" />Book on WhatsApp
                                </a>
                                <Link href={`/locations/${slug}/departments/${deptSlug}/doctors/${doctorSlug}/book`}
                                    className="inline-flex items-center px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-500/30 text-lg">
                                    Book Appointment →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="p-8 border-none shadow-sm rounded-2xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">About {doctor.name}</h2>
                            <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                {doctor.name} is available for patients from {location.name} and nearby areas at
                                Indira Super Speciality Hospital Vellore, just {location.distance} away ({location.travelTime}).
                            </p>
                        </Card>

                        {doctor.specialties && doctor.specialties.length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-purple-100 p-2 rounded-lg mr-3 text-purple-600"><CheckCircle2 className="w-5 h-5" /></span>
                                    Specializations
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {doctor.specialties.map(s => (
                                        <span key={s} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">{s}</span>
                                    ))}
                                </div>
                            </Card>
                        )}

                        {(doctor as any).education && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-blue-100 p-2 rounded-lg mr-3 text-blue-600"><GraduationCap className="w-5 h-5" /></span>
                                    Education
                                </h2>
                                {((doctor as any).education as any[]).map((edu, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl mb-2">
                                        <GraduationCap className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900">{edu.degree}</p>
                                            {edu.institution && <p className="text-sm text-gray-500">{edu.institution}</p>}
                                        </div>
                                    </div>
                                ))}
                            </Card>
                        )}

                        {/* Cross links */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Other Doctors</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {otherDoctors.map(d => (
                                    <Link key={d.slug} href={`/doctors/${d.slug}`}
                                        className="group bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3 hover:shadow-md transition-all">
                                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                                            {d.image && getImageUrl(d.image) ? (
                                                <img src={getImageUrl(d.image)!} alt={d.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-purple-700 font-bold text-sm">{d.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                                            )}
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-bold text-gray-900 text-sm group-hover:text-purple-700 transition-colors truncate">{d.name}</h3>
                                            <p className="text-gray-500 text-xs">{d.designation}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-24 space-y-6">
                            <Card className="p-6 border-none shadow-lg rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MessageCircle className="w-7 h-7 text-green-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg">Book with {doctor.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1 mb-5">{location.distance} from {location.name}</p>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-md">
                                        <MessageCircle className="w-5 h-5 mr-2" />WhatsApp Now
                                    </a>
                                    <Link href={`/locations/${slug}/departments/${deptSlug}/doctors/${doctorSlug}/book`}
                                        className="w-full inline-flex items-center justify-center px-6 py-3 mt-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl transition-colors text-sm">
                                        Book Appointment →
                                    </Link>
                                </div>
                            </Card>

                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                                <div className="space-y-2">
                                    <Link href={`/doctors/${doctorSlug}`} className="block px-4 py-2.5 bg-gray-50 rounded-xl text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors">
                                        Full Doctor Profile →
                                    </Link>
                                    <Link href={`/departments/${deptSlug}`} className="block px-4 py-2.5 bg-gray-50 rounded-xl text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors">
                                        {dept.title} Department →
                                    </Link>
                                    <Link href={`/locations/${slug}`} className="block px-4 py-2.5 bg-gray-50 rounded-xl text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors">
                                        {location.name} Page →
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-10">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Book with {doctor.name} — {dept.title}
                    </h2>
                    <p className="mt-2 text-green-100">
                        Serving patients from {location.name}. Just {location.distance} away.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-xl text-lg hover:bg-green-50 transition-colors shadow-lg">
                            <MessageCircle className="w-5 h-5 mr-2" />Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
