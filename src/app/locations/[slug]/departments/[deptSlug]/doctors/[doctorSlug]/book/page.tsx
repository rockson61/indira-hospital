import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SEED_DATA } from "@/lib/data/seed-data";
import { enhancedVelloreLocations } from "@/lib/data/enhanced-location-data";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { getImageUrl } from "@/lib/utils";
import {
    ChevronRight, MessageCircle, Phone, MapPin, Clock, Stethoscope,
    CheckCircle2, Shield, Star, Calendar, ArrowRight
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
        title: `Book Appointment with ${doctor.name} - ${dept.title} Near ${location.name} | Indira Hospital`,
        description: `Book your ${dept.title} appointment with ${doctor.name} at Indira Hospital. Patients from ${location.name} — just ${location.distance} away. WhatsApp booking available.`,
    };
}

export default async function BookDoctorPage({ params }: { params: Promise<{ slug: string; deptSlug: string; doctorSlug: string }> }) {
    const { slug, deptSlug, doctorSlug } = await params;
    const location = getLocationBySlug(slug);
    const dept = SEED_DATA.services.find(s => s.slug === deptSlug);
    const doctor = SEED_DATA.doctors.find(d => d.slug === doctorSlug);
    if (!location || !dept || !doctor) notFound();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I am from ${location.name}. I want to book an immediate appointment with ${doctor.name} for ${dept.title}.`)}`;
    const whatsappCost = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I am from ${location.name}. What is the cost for ${dept.title} treatment with ${doctor.name}?`)}`;

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero */}
            <section className="relative bg-gradient-to-br from-amber-600 via-amber-500 to-orange-500 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 relative z-10">
                    <nav className="flex flex-wrap items-center text-sm text-amber-100 mb-6 gap-y-1">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <Link href={`/locations/${slug}`} className="hover:text-white transition-colors">{location.name}</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <Link href={`/locations/${slug}/departments/${deptSlug}`} className="hover:text-white transition-colors">{dept.title}</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <Link href={`/locations/${slug}/departments/${deptSlug}/doctors/${doctorSlug}`} className="hover:text-white transition-colors">{doctor.name}</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <span className="text-white font-medium">Book</span>
                    </nav>

                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Book Appointment with {doctor.name}
                    </h1>
                    <p className="mt-3 text-amber-100 text-lg">
                        {doctor.designation} · {dept.title} · {location.distance} from {location.name}
                    </p>
                </div>
            </section>

            {/* Booking Options */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* WhatsApp Booking */}
                    <Card className="p-8 border-none shadow-lg rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                <MessageCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Booking</h2>
                            <p className="text-gray-500 text-sm mb-6">Fastest way to book. Get instant confirmation and cost estimate.</p>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg text-lg">
                                <MessageCircle className="w-6 h-6 mr-2" />Book on WhatsApp
                            </a>
                            <a href={whatsappCost} target="_blank" rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center px-6 py-3 mt-3 bg-green-100 text-green-800 font-medium rounded-xl hover:bg-green-200 transition-colors text-sm">
                                Get Cost Estimate →
                            </a>
                        </div>
                    </Card>

                    {/* Phone Booking */}
                    <Card className="p-8 border-none shadow-lg rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                <Phone className="w-8 h-8 text-blue-600" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Call to Book</h2>
                            <p className="text-gray-500 text-sm mb-6">Speak directly with our reception team for appointment booking.</p>
                            <a href="tel:+919842342525"
                                className="w-full inline-flex items-center justify-center px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg text-lg">
                                <Phone className="w-6 h-6 mr-2" />+91 98423 42525
                            </a>
                            <a href="tel:+914162243588"
                                className="w-full inline-flex items-center justify-center px-6 py-3 mt-3 bg-blue-100 text-blue-800 font-medium rounded-xl hover:bg-blue-200 transition-colors text-sm">
                                Landline: 0416-2243588
                            </a>
                        </div>
                    </Card>
                </div>

                {/* Info Cards */}
                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                        <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <p className="font-bold text-gray-900">{location.distance}</p>
                        <p className="text-sm text-gray-500">from {location.name}</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                        <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <p className="font-bold text-gray-900">{location.travelTime}</p>
                        <p className="text-sm text-gray-500">Travel Time</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                        <Calendar className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <p className="font-bold text-gray-900">Mon – Sat</p>
                        <p className="text-sm text-gray-500">Available</p>
                    </div>
                </div>

                {/* Doctor Summary */}
                <Card className="mt-8 p-6 border-none shadow-sm rounded-2xl">
                    <div className="flex items-start gap-4">
                        <div className="w-20 h-20 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {doctor.image && getImageUrl(doctor.image) ? (
                                <img src={getImageUrl(doctor.image)!} alt={doctor.name} className="w-full h-full object-cover rounded-xl" />
                            ) : (
                                <Stethoscope className="w-8 h-8 text-purple-400" />
                            )}
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">{doctor.name}</h3>
                            <p className="text-purple-600 text-sm font-medium">{doctor.designation}</p>
                            <p className="text-gray-500 text-sm mt-1">{dept.title} · {doctor.experience_years}+ Years Experience</p>
                            <Link href={`/doctors/${doctorSlug}`} className="mt-2 inline-flex items-center text-purple-600 font-medium text-sm gap-1 hover:gap-2 transition-all">
                                View Full Profile <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </Card>

                {/* Benefits */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Why Book at Indira Hospital?</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {[
                            { icon: Shield, text: "Insurance & Cashless Accepted" },
                            { icon: Star, text: "25+ Years of Healthcare Excellence" },
                            { icon: CheckCircle2, text: "Minimally Invasive Procedures" },
                            { icon: Clock, text: "24/7 Emergency & ICU" },
                        ].map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-5 h-5 text-purple-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-10 flex flex-wrap gap-3 justify-center">
                    <Link href={`/locations/${slug}/departments/${deptSlug}/doctors/${doctorSlug}`}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-purple-50 hover:text-purple-700 transition-colors">
                        ← Back to {doctor.name}
                    </Link>
                    <Link href={`/locations/${slug}/departments/${deptSlug}`}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-purple-50 hover:text-purple-700 transition-colors">
                        {dept.title} Near {location.name}
                    </Link>
                    <Link href={`/locations/${slug}`}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-purple-50 hover:text-purple-700 transition-colors">
                        {location.name}
                    </Link>
                </div>
            </div>
        </div>
    );
}
