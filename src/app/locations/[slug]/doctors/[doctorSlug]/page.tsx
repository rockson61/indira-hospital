import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SEED_DATA } from "@/lib/data/seed-data";
import { enhancedVelloreLocations } from "@/lib/data/enhanced-location-data";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { getImageUrl } from "@/lib/utils";
import {
    ChevronRight, MessageCircle, Phone, MapPin, Clock, Stethoscope,
    ArrowRight, CheckCircle2, GraduationCap
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
    const params: { slug: string; doctorSlug: string }[] = [];
    for (const locSlug of getAllLocationSlugs()) {
        for (const doc of SEED_DATA.doctors) {
            params.push({ slug: locSlug, doctorSlug: doc.slug });
        }
    }
    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; doctorSlug: string }> }): Promise<Metadata> {
    const { slug, doctorSlug } = await params;
    const location = getLocationBySlug(slug);
    const doctor = SEED_DATA.doctors.find(d => d.slug === doctorSlug);
    if (!location || !doctor) return { title: "Not Found" };

    return {
        title: `${doctor.name} - ${doctor.designation} Near ${location.name} | Indira Hospital`,
        description: `${doctor.name} (${doctor.designation}) available for patients from ${location.name}. ${location.distance} from ${location.name}. Book on WhatsApp at Indira Hospital Vellore.`,
    };
}

export default async function LocationDoctorPage({ params }: { params: Promise<{ slug: string; doctorSlug: string }> }) {
    const { slug, doctorSlug } = await params;
    const location = getLocationBySlug(slug);
    const doctor = SEED_DATA.doctors.find(d => d.slug === doctorSlug);
    if (!location || !doctor) notFound();

    const deptName = typeof doctor.department === 'string' ? doctor.department : (doctor.department as any)?.name || '';
    const deptSlug = SEED_DATA.services.find(s => s.title.toLowerCase() === deptName.toLowerCase())?.slug || '';

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I am from ${location.name}. I want to book an appointment with ${doctor.name} (${doctor.designation}).`)}`;
    const otherDoctors = SEED_DATA.doctors.filter(d => d.slug !== doctorSlug).slice(0, 4);

    return (
        <div className="bg-gray-50 min-h-screen">
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
                                {deptName && (
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2">
                                        <Stethoscope className="w-4 h-4 text-amber-400" />
                                        <span className="text-sm">{deptName}</span>
                                    </div>
                                )}
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
                                <a href="tel:+919842342525"
                                    className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl transition-colors border border-white/20">
                                    <Phone className="w-5 h-5 mr-2" />+91 98423 42525
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="p-8 border-none shadow-sm rounded-2xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">About {doctor.name}</h2>
                            <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                {doctor.name} is available for patients from {location.name} and nearby areas
                                at Indira Super Speciality Hospital Vellore — just {location.distance} away ({location.travelTime}).
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link href={`/doctors/${doctorSlug}`}
                                    className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-sm font-medium hover:bg-purple-100 transition-colors">
                                    Full Profile →
                                </Link>
                                {deptSlug && (
                                    <Link href={`/locations/${slug}/departments/${deptSlug}`}
                                        className="px-4 py-2 bg-teal-50 text-teal-700 rounded-xl text-sm font-medium hover:bg-teal-100 transition-colors">
                                        {deptName} Near {location.name} →
                                    </Link>
                                )}
                            </div>
                        </Card>

                        {doctor.specialties.length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Specializations</h2>
                                <div className="flex flex-wrap gap-2">
                                    {doctor.specialties.map(s => (
                                        <span key={s} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">{s}</span>
                                    ))}
                                </div>
                            </Card>
                        )}

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Other Doctors Near {location.name}</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {otherDoctors.map(d => (
                                    <Link key={d.slug} href={`/locations/${slug}/doctors/${d.slug}`}
                                        className="group bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3 hover:shadow-md transition-all">
                                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                                            {d.image && getImageUrl(d.image) ? (
                                                <img src={getImageUrl(d.image)!} alt={d.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-purple-700 font-bold text-sm">{d.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                                            )}
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-bold text-gray-900 text-sm group-hover:text-purple-700 truncate">{d.name}</h3>
                                            <p className="text-gray-500 text-xs">{d.designation}</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-purple-600 ml-auto" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-24 space-y-6">
                            <Card className="p-6 border-none shadow-lg rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MessageCircle className="w-7 h-7 text-green-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg">Book {doctor.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1 mb-5">{location.distance} from {location.name}</p>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-md">
                                        <MessageCircle className="w-5 h-5 mr-2" />WhatsApp Now
                                    </a>
                                    <a href="tel:+919842342525"
                                        className="w-full inline-flex items-center justify-center px-6 py-3 mt-3 bg-white text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm">
                                        <Phone className="w-4 h-4 mr-2" />Call +91 98423 42525
                                    </a>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-10">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Book with {doctor.name} — From {location.name}
                    </h2>
                    <p className="mt-2 text-green-100">Just {location.distance} away. Book on WhatsApp now.</p>
                    <div className="mt-6">
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
