import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SEED_DATA } from "@/lib/data/seed-data";
import { enhancedVelloreLocations } from "@/lib/data/enhanced-location-data";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { getImageUrl } from "@/lib/utils";
import {
    ChevronRight, CheckCircle2, Stethoscope, MessageCircle, Phone,
    Award, Users, Clock, Shield, Star, MapPin, ArrowRight, Heart, Zap
} from "lucide-react";
import { Card } from "@/components/ui/card";

const WHATSAPP_NUMBER = "917010650063";

function getAllLocationSlugs(): string[] {
    const slugSet = new Set<string>();
    enhancedVelloreLocations.forEach(l => slugSet.add(l.slug));
    tamilNaduLocations.forEach(l => slugSet.add(l.slug));
    return Array.from(slugSet);
}

function getLocationBySlug(slug: string) {
    return enhancedVelloreLocations.find(l => l.slug === slug)
        || tamilNaduLocations.find(l => l.slug === slug);
}

export function generateStaticParams() {
    const locationSlugs = getAllLocationSlugs();
    const deptSlugs = SEED_DATA.services.map(s => s.slug);
    const params: { slug: string; deptSlug: string }[] = [];
    for (const slug of locationSlugs) {
        for (const deptSlug of deptSlugs) {
            params.push({ slug, deptSlug });
        }
    }
    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; deptSlug: string }> }): Promise<Metadata> {
    const { slug, deptSlug } = await params;
    const location = getLocationBySlug(slug);
    const dept = SEED_DATA.services.find(s => s.slug === deptSlug);
    if (!location || !dept) return { title: "Not Found" };

    return {
        title: `${dept.title} Near ${location.name} | Best ${dept.title} Hospital | Indira Hospital Vellore`,
        description: `Looking for ${dept.title} treatment near ${location.name}? Indira Super Speciality Hospital Vellore offers expert ${dept.title} care. Book on WhatsApp. ${location.distance} from ${location.name}.`,
        keywords: [dept.title, location.name, "near me", "best hospital", "Vellore", "Indira Hospital"],
    };
}

export default async function LocationDepartmentPage({ params }: { params: Promise<{ slug: string; deptSlug: string }> }) {
    const { slug, deptSlug } = await params;
    const location = getLocationBySlug(slug);
    const dept = SEED_DATA.services.find(s => s.slug === deptSlug);
    if (!location || !dept) notFound();

    const relatedDoctors = SEED_DATA.doctors.filter(d => {
        const deptName = typeof d.department === 'string' ? d.department : (d.department as any)?.name || '';
        return deptName.toLowerCase() === dept.title.toLowerCase() ||
            d.specialties.some(s => dept.title.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(dept.title.toLowerCase()));
    });

    const otherDepts = SEED_DATA.services.filter(s => s.slug !== deptSlug).slice(0, 6);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I am from ${location.name}. I need ${dept.title} treatment at Indira Hospital.`)}`;

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero */}
            <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
                    <nav className="flex flex-wrap items-center text-sm text-purple-200 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <Link href={`/locations/${slug}`} className="hover:text-white transition-colors">{location.name}</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <span className="text-white font-medium">{dept.title}</span>
                    </nav>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        {dept.title} Near {location.name}
                    </h1>
                    <p className="mt-4 text-lg text-purple-100 max-w-3xl leading-relaxed">
                        Expert {dept.title} care at Indira Super Speciality Hospital, just {location.distance} from {location.name}.
                        {dept.short_description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                            <MapPin className="w-5 h-5 text-amber-400" />
                            <span className="text-sm font-medium">{location.distance} from {location.name}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                            <Clock className="w-5 h-5 text-amber-400" />
                            <span className="text-sm font-medium">{location.travelTime} travel</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 text-lg">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Book on WhatsApp
                        </a>
                        <a href="tel:+919842342525"
                            className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl transition-colors border border-white/20">
                            <Phone className="w-5 h-5 mr-2" />
                            +91 98423 42525
                        </a>
                    </div>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <Card className="p-8 border-none shadow-sm rounded-2xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                {dept.title} Treatment for {location.name} Patients
                            </h2>
                            <div
                                className="text-gray-600 leading-relaxed space-y-4"
                                dangerouslySetInnerHTML={{ __html: dept.full_description }}
                            />
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Patients from {location.name} and surrounding areas can reach Indira Hospital in approximately {location.travelTime}.
                                We offer comprehensive {dept.title} care with state-of-the-art technology and experienced specialists.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link href={`/departments/${deptSlug}`}
                                    className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-sm font-medium hover:bg-purple-100 transition-colors">
                                    View {dept.title} Department →
                                </Link>
                                <Link href={`/locations/${slug}`}
                                    className="px-4 py-2 bg-teal-50 text-teal-700 rounded-xl text-sm font-medium hover:bg-teal-100 transition-colors">
                                    View {location.name} Page →
                                </Link>
                            </div>
                        </Card>

                        {/* Doctors */}
                        {relatedDoctors.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-6">{dept.title} Specialists</h2>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {relatedDoctors.map(doc => (
                                        <Link key={doc.slug}
                                            href={`/locations/${slug}/departments/${deptSlug}/doctors/${doc.slug}`}
                                            className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-center gap-4 hover:shadow-md transition-all">
                                            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                                                {doc.image && getImageUrl(doc.image) ? (
                                                    <img src={getImageUrl(doc.image)!} alt={doc.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <span className="text-purple-700 font-bold text-lg">{doc.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                                                )}
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="font-bold text-gray-900 truncate group-hover:text-purple-700 transition-colors">{doc.name}</h3>
                                                <p className="text-gray-500 text-sm truncate">{doc.designation}</p>
                                                <p className="text-xs text-gray-400 mt-0.5">{doc.experience_years}+ Years</p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-purple-600 ml-auto flex-shrink-0" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Other departments at this location */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Other Departments Near {location.name}</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {otherDepts.map(d => (
                                    <Link key={d.slug} href={`/locations/${slug}/departments/${d.slug}`}
                                        className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center gap-3 group">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                        <span className="font-medium text-gray-700 group-hover:text-purple-700 text-sm">{d.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="lg:sticky lg:top-24 space-y-6">
                            <Card className="p-6 border-none shadow-lg rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MessageCircle className="w-7 h-7 text-green-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg">Book {dept.title}</h3>
                                    <p className="text-gray-500 text-sm mt-1 mb-5">From {location.name} — just {location.travelTime} away</p>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-md text-base">
                                        <MessageCircle className="w-5 h-5 mr-2" />WhatsApp Now
                                    </a>
                                    <a href="tel:+919842342525"
                                        className="w-full inline-flex items-center justify-center px-6 py-3 mt-3 bg-white text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm">
                                        <Phone className="w-4 h-4 mr-2" />Call +91 98423 42525
                                    </a>
                                </div>
                            </Card>

                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 mb-4">Indira Hospital</h3>
                                <div className="space-y-3">
                                    {[
                                        { icon: Award, text: "25+ Years Legacy" },
                                        { icon: Users, text: "1 Lakh+ Patients Treated" },
                                        { icon: Stethoscope, text: "15+ Super Specialities" },
                                        { icon: Clock, text: "24/7 Emergency" },
                                        { icon: Shield, text: "Insurance & Cashless" },
                                        { icon: Star, text: "#1 Minimal Invasive Surgery" },
                                    ].map(({ icon: Icon, text }) => (
                                        <div key={text} className="flex items-center gap-3 text-sm text-gray-600">
                                            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-4 h-4 text-purple-600" />
                                            </div>
                                            {text}
                                        </div>
                                    ))}
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
                        {dept.title} Near {location.name}? Visit Indira Hospital
                    </h2>
                    <p className="mt-2 text-green-100 text-base max-w-lg mx-auto">
                        Just {location.distance} from {location.name}. Book your appointment on WhatsApp now.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-xl text-lg hover:bg-green-50 transition-colors shadow-lg">
                            <MessageCircle className="w-5 h-5 mr-2" />Chat on WhatsApp
                        </a>
                        <a href="tel:+919842342525"
                            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-colors border border-white/20">
                            <Phone className="w-5 h-5 mr-2" />Call Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
