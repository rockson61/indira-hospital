import { getDoctorBySlug, getDoctors } from "@/lib/api";
import { getImageUrl } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Calendar, Clock, GraduationCap, Award, MapPin, Languages, Stethoscope,
    MessageCircle, Phone, CheckCircle2, ArrowRight, Star, Shield,
    Zap, Users, Heart, ChevronRight
} from "lucide-react";
import { SEED_DATA } from "@/lib/data/seed-data";
import EntityReviews from "@/components/trust/EntityReviews";
import { clinicConfig } from "@/lib/data/clinic-config";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { ServiceCard } from "@/components/entities/ServiceCard";
import { LocationCard } from "@/components/entities/LocationCard";
import { DepartmentCard } from "@/components/entities/DepartmentCard";
import EntityFAQs from "@/components/trust/EntityFAQs";

export const revalidate = 3600;

const WHATSAPP_NUMBER = "917010650063";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let doctor = await getDoctorBySlug(slug).catch(() => null);
    if (!doctor) {
        doctor = SEED_DATA.doctors.find(d => d.slug === slug) as any;
    }
    if (!doctor) return { title: 'Doctor Not Found' };

    const deptName = typeof doctor.department === 'string' ? doctor.department : (doctor.department as any)?.name || '';

    return {
        title: doctor.seo_title || `${doctor.name} - ${doctor.designation} | Indira Super Speciality Hospital`,
        description: doctor.seo_description || `${doctor.name}, ${doctor.designation} at Indira Hospital. ${doctor.experience_years}+ years experience in ${deptName}. Book appointment on WhatsApp. Best hospital in Vellore for Laparoscopic Surgery, Laser Piles, Fistula.`,
        keywords: [doctor.name, doctor.designation, deptName, "Indira Hospital", "Vellore", "best doctor"],
    };
}

export async function generateStaticParams() {
    let doctors = await getDoctors().catch(() => []);
    if (!doctors.length) doctors = SEED_DATA.doctors as any;
    return doctors.map((doc: any) => ({ slug: doc.slug }));
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let doctor = await getDoctorBySlug(slug).catch(() => null);
    if (!doctor) {
        doctor = SEED_DATA.doctors.find(d => d.slug === slug) as any;
    }
    if (!doctor) notFound();

    const deptName = typeof doctor.department === 'string' ? doctor.department : (doctor.department as any)?.name || '';
    const deptSlug = typeof doctor.department === 'string'
        ? SEED_DATA.services.find(s => s.title === doctor!.department)?.slug || ''
        : '';

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I want to book an appointment with ${doctor.name} (${doctor.designation}).`)}`;

    // Get other doctors for cross-linking
    let allDoctors = await getDoctors().catch(() => []);
    if (!allDoctors.length) allDoctors = SEED_DATA.doctors as any;
    const otherDoctors = allDoctors.filter((d: any) => d.slug !== slug).slice(0, 6);

    const departments = SEED_DATA.services;

    // JSON-LD structured data — enhanced with CMS SEO fields
    const sameAs = [doctor?.social_linkedin, doctor?.social_website].filter(Boolean);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: doctor.name,
        url: `https://www.indirasuperspecialityhospital.com/doctors/${slug}`,
        description: (doctor.seo_description || doctor.bio || '').replace(/<[^>]*>?/gm, '').slice(0, 300),
        medicalSpecialty: deptName,
        image: getImageUrl(doctor.image) || undefined,
        ...(doctor.qualifications && { hasCredential: doctor.qualifications }),
        ...(doctor.medical_registration_number && { identifier: doctor.medical_registration_number }),
        ...(doctor.gender && { gender: doctor.gender }),
        ...(doctor.experience_years && { yearsInPractice: doctor.experience_years }),
        ...(doctor.consultation_fee && { priceRange: `₹${doctor.consultation_fee}` }),
        ...(doctor.accepting_new_patients !== undefined && { isAcceptingNewPatients: doctor.accepting_new_patients }),
        ...(doctor.available_days?.length && { availableService: { "@type": "MedicalProcedure", serviceType: "Consultation", hoursAvailable: doctor.available_days } }),
        ...(doctor.phone && { telephone: doctor.phone }),
        ...(doctor.email && { email: doctor.email }),
        ...(sameAs.length > 0 && { sameAs }),
        worksFor: {
            "@type": "Hospital",
            name: "Indira Super Speciality Hospital",
            url: "https://www.indirasuperspecialityhospital.com",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Katpadi Road",
                addressLocality: "Vellore",
                addressRegion: "Tamil Nadu",
                postalCode: "632004",
                addressCountry: "IN",
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Main Content Area */}
            <div className="min-h-screen bg-slate-50/50">
                {/* ========== HERO BANNER ========== */}
                <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    </div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center text-sm text-blue-200 mb-8">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <Link href="/doctors" className="hover:text-white transition-colors">Doctors</Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <span className="text-white font-medium">{doctor.name}</span>
                        </nav>

                        <div className="grid lg:grid-cols-3 gap-8 items-start">
                            {/* Doctor Image */}
                            <div className="lg:col-span-1">
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/10 shadow-2xl max-w-sm mx-auto lg:mx-0">
                                    {doctor.image ? (
                                        <img
                                            src={getImageUrl(doctor.image)!}
                                            alt={doctor.name}
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full">
                                            <div className="w-32 h-32 rounded-full bg-secondary-600 flex items-center justify-center text-5xl font-bold text-white">
                                                {doctor.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Doctor Info */}
                            <div className="lg:col-span-2">
                                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{doctor.name}</h1>
                                <p className="text-primary-300 font-semibold text-lg mt-2 uppercase tracking-wider">{doctor.designation}</p>

                                {/* Quick Stats */}
                                <div className="flex flex-wrap gap-4 mt-6">
                                    {deptName && (
                                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                                            <Stethoscope className="w-5 h-5 text-primary-300" />
                                            <span className="text-sm font-medium">{deptName}</span>
                                        </div>
                                    )}
                                    {doctor.experience_years && (
                                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                                            <Award className="w-5 h-5 text-primary-300" />
                                            <span className="text-sm font-medium">{doctor.experience_years}+ Years Experience</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                                        <MapPin className="w-5 h-5 text-primary-300" />
                                        <span className="text-sm font-medium">Indira Hospital, Vellore</span>
                                    </div>
                                    {/* M2M: Locations Count */}
                                    {(doctor.available_locations as any[])?.length > 0 && (
                                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                                            <MapPin className="w-5 h-5 text-primary-300" />
                                            <span className="text-sm font-medium">Visits {(doctor.available_locations as any[]).length} Other Locations</span>
                                        </div>
                                    )}
                                </div>

                                {/* Specialties */}
                                {doctor.specialties && (doctor.specialties as string[]).length > 0 && (
                                    <div className="mt-5">
                                        <p className="text-xs text-blue-200 uppercase tracking-wider mb-2">Specialties</p>
                                        <div className="flex flex-wrap gap-2">
                                            {(doctor.specialties as string[]).map((spec: string, i: number) => (
                                                <span key={i} className="px-3 py-1.5 bg-white/15 backdrop-blur text-white text-sm rounded-full border border-white/10">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <a
                                        href={whatsappUrl}
                                        target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 text-lg"
                                    >
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        Book on WhatsApp
                                    </a>
                                    <a
                                        href={`tel:${clinicConfig.phone.replace(/\s+/g, '')}`}
                                        className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl transition-colors border border-white/20"
                                    >
                                        <Phone className="w-5 h-5 mr-2" />
                                        {clinicConfig.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== MAIN CONTENT ========== */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* LEFT COLUMN - Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* About / Bio */}
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="bg-teal-100 p-2 rounded-lg mr-3 text-teal-600">
                                        <Stethoscope className="w-5 h-5" />
                                    </span>
                                    About {doctor.name}
                                </h2>
                                <div
                                    className="prose prose-blue max-w-none text-gray-600 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: doctor.bio || "<p>Experienced medical professional at Indira Super Speciality Hospital, providing expert care with dedication and compassion.</p>" }}
                                />
                                {deptName && deptSlug && (
                                    <div className="mt-6 p-4 bg-teal-50 rounded-xl">
                                        <p className="text-sm text-gray-700">
                                            {doctor.name} is part of our{" "}
                                            <Link href={`/departments/${deptSlug}`} className="text-teal-700 font-semibold hover:underline">
                                                {deptName} Department
                                            </Link>
                                            , one of 15+ super speciality departments at Indira Hospital.
                                        </p>
                                    </div>
                                )}
                            </Card>

                            {/* Education & Qualifications */}
                            {doctor.education && (doctor.education as any[]).length > 0 && (
                                <Card className="p-8 border-none shadow-sm rounded-2xl">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                        <span className="bg-purple-100 p-2 rounded-lg mr-3 text-purple-600">
                                            <GraduationCap className="w-5 h-5" />
                                        </span>
                                        Education & Qualifications
                                    </h2>
                                    <div className="space-y-5">
                                        {(doctor.education as any[]).map((edu: any, i: number) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="mt-2 w-3 h-3 rounded-full bg-purple-400 shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 text-lg">{edu.degree}</h3>
                                                    {edu.institution && <p className="text-gray-500">{edu.institution}</p>}
                                                    {edu.year && <span className="text-xs text-purple-500 font-medium mt-1 inline-block">{edu.year}</span>}
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
                                        <span className="bg-blue-100 p-2 rounded-lg mr-3 text-blue-600">
                                            <Clock className="w-5 h-5" />
                                        </span>
                                        Work Experience
                                    </h2>
                                    <div className="relative border-l-2 border-blue-100 ml-3 pl-8 space-y-8">
                                        {(doctor.experience_timeline as any[]).map((exp: any, i: number) => (
                                            <div key={i} className="relative">
                                                <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-blue-500" />
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
                                        <span className="bg-amber-100 p-2 rounded-lg mr-3 text-amber-600">
                                            <Languages className="w-5 h-5" />
                                        </span>
                                        Languages Spoken
                                    </h2>
                                    <div className="flex flex-wrap gap-3">
                                        {(doctor.languages as string[]).map((lang: string, i: number) => (
                                            <span key={i} className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            )}

                            {/* Specialized Centers / Procedures */}
                            <div className="grid sm:grid-cols-2 gap-5">
                                {(doctor.related_services as any[])?.length > 0 ? (
                                    (doctor.related_services as any[]).map((svc: any) => (
                                        <ServiceCard key={svc?.slug || Math.random()} service={svc} variant="detail" />
                                    ))
                                ) : (
                                    <>
                                        <ServiceCard
                                            service={{
                                                title: "Laparoscopic Surgery",
                                                slug: "laparoscopic-surgeries",
                                                icon: "Zap",
                                                short_description: "3mm keyhole surgery. Same-day discharge.",
                                                features: ["Hernia", "Gallbladder", "Appendix"]
                                            }}
                                            variant="detail"
                                        />
                                        <ServiceCard
                                            service={{
                                                title: "Laser Piles Treatment",
                                                slug: "general-surgery",
                                                icon: "Heart",
                                                short_description: "30-min painless procedure. 24hr recovery.",
                                                features: ["No Cuts", "No Stitches", "USFDA Laser"]
                                            }}
                                            variant="detail"
                                            className="border-amber-100 bg-amber-50/10"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Sticky Book Appointment Card */}
                        <div className="lg:sticky lg:top-24 space-y-6">
                            <Card className="p-6 border-none shadow-lg rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MessageCircle className="w-7 h-7 text-green-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg">Book Appointment</h3>
                                    <p className="text-gray-500 text-sm mt-1 mb-5">
                                        Chat with us on WhatsApp for instant booking, cost estimates, and availability.
                                    </p>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank" rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-md text-base"
                                    >
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        WhatsApp Now
                                    </a>
                                    <a
                                        href={`tel:${clinicConfig.phone.replace(/\s+/g, '')}`}
                                        className="w-full inline-flex items-center justify-center px-6 py-3 mt-3 bg-white text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        Call {clinicConfig.phone}
                                    </a>
                                </div>
                            </Card>

                            {/* Hospital Highlights */}
                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 mb-4">Indira Hospital</h3>
                                <div className="space-y-3">
                                    {[
                                        { icon: Award, text: "25+ Years Legacy" },
                                        { icon: Users, text: "1 Lakh+ Patients Treated" },
                                        { icon: Stethoscope, text: "15+ Super Specialities" },
                                        { icon: Clock, text: "24/7 Emergency" },
                                        { icon: Shield, text: "Insurance & Cashless" },
                                        { icon: Star, text: "#1 for Minimal Invasive Surgery" },
                                    ].map(({ icon: Icon, text }) => (
                                        <div key={text} className="flex items-center gap-3 text-sm text-gray-600">
                                            <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-4 h-4 text-teal-600" />
                                            </div>
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {/* M2M: VISITING LOCATIONS */}
                            {(doctor.available_locations as any[])?.length > 0 && (
                                <Card className="p-6 border-none shadow-sm rounded-2xl">
                                    <h3 className="font-bold text-gray-900 mb-4">Available at Locations</h3>
                                    <div className="flex flex-col gap-3">
                                        {(doctor.available_locations as any[]).map((loc: any) => (
                                            <LocationCard key={loc.slug} location={loc} variant="compact" />
                                        ))}
                                    </div>
                                </Card>
                            )}

                            {/* Departments Quick Links */}
                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 mb-4">Our Departments</h3>
                                <div className="flex flex-col gap-2">
                                    {departments.slice(0, 6).map((dept) => (
                                        <DepartmentCard key={dept.slug} department={dept} variant="compact" />
                                    ))}
                                    <Link
                                        href="/departments"
                                        className="mt-2 text-center py-2 bg-teal-50 text-teal-700 rounded-lg text-xs font-bold hover:bg-teal-100 transition-colors"
                                    >
                                        View All Departments →
                                    </Link>
                                </div>
                            </Card>

                            {/* Location */}
                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 mb-3">Location & Directions</h3>
                                <div className="rounded-xl overflow-hidden mb-3">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6!2d79.15!3d12.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIndira+Super+Speciality+Hospital!5e0!3m2!1sen!2sin!4v1"
                                        width="100%" height="180" style={{ border: 0 }}
                                        allowFullScreen loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Indira Hospital Location"
                                    />
                                </div>
                                <p className="text-xs text-gray-500">
                                    Indira Super Speciality Hospital, Vellore, Tamil Nadu
                                </p>
                                <Link
                                    href="/locations"
                                    className="mt-3 inline-flex items-center text-teal-600 font-medium text-sm hover:text-teal-800 gap-1"
                                >
                                    View All 79+ Locations <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== FAQ SECTION ========== */}
            <EntityFAQs
                entityType="doctor"
                entityName={doctor.name}
                entitySlug={slug}
                title={`Common Questions about ${doctor.name}`}
                description={`Find answers to frequently asked questions about consultation and treatment with ${doctor.name}.`}
            />

            {/* ========== REVIEWS SECTION ========== */}
            <EntityReviews
                entityType="doctor"
                entityName={doctor.name}
                entitySlug={slug}
                title={`What Patients Say About ${doctor.name}`}
                description={`Verified reviews and testimonials from patients treated by ${doctor.name} at Indira Hospital.`}
            />

            {/* ========== OTHER DOCTORS ========== */}
            {
                otherDoctors.length > 0 && (
                    <section className="bg-white py-12">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="text-center mb-8">
                                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Expert Team</span>
                                <h2 className="text-2xl font-bold mt-2 text-gray-900">Other Doctors at Indira Hospital</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {otherDoctors.map((doc: any) => (
                                    <DoctorCard key={doc.slug} doctor={doc} variant="grid" />
                                ))}
                            </div>
                            <div className="text-center mt-8">
                                <Link
                                    href="/doctors"
                                    className="inline-flex items-center px-6 py-3 bg-teal-50 text-teal-700 font-semibold rounded-xl hover:bg-teal-100 transition-colors"
                                >
                                    View All Doctors <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </section>
                )
            }

            {/* ========== WHATSAPP CTA BOTTOM ========== */}
            <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-10">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Book Your Appointment with {doctor.name}
                    </h2>
                    <p className="mt-2 text-green-100 text-base max-w-lg mx-auto">
                        Skip the phone queue. Chat with our coordinator on WhatsApp for instant appointment booking.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a
                            href={whatsappUrl}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-xl text-lg hover:bg-green-50 transition-colors shadow-lg"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Chat on WhatsApp
                        </a>
                        <a
                            href="tel:+919842342525"
                            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-colors border border-white/20"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
