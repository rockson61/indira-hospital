import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getDoctors, getDoctorBySlug, getServices } from "@/lib/api";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import {
    ChevronRight, MapPin, Phone, MessageCircle, Star, Award,
    Clock, Shield, GraduationCap, CheckCircle2, ArrowRight, Users, Calendar
} from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import { siteConfig } from "@/config/site";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import EntityReviews from "@/components/trust/EntityReviews";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { getImageUrl } from "@/lib/utils";
import { ServiceCard } from "@/components/entities/ServiceCard";

const WHATSAPP_NUMBER = "917010650063";

export const dynamicParams = true;

export async function generateStaticParams() {
    // On Vercel, the Directus CMS API is not accessible from build servers.
    // Return [] so pages are rendered on-demand instead of pre-building 600+ combinations.
    if (process.env.VERCEL) return [];

    const [allDoctors, locations] = await Promise.all([
        getDoctors().catch(() => []),
        Promise.resolve(tamilNaduLocations),
    ]);
    const params: { city: string; doctorSlug: string }[] = [];
    for (const loc of locations) {
        for (const doc of allDoctors as any[]) {
            if (doc.slug) params.push({ city: loc.slug, doctorSlug: doc.slug });
        }
    }
    return params;
}


export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string; doctorSlug: string }>;
}): Promise<Metadata> {
    const { city, doctorSlug } = await params;
    const doctor = await getDoctorBySlug(doctorSlug).catch(() => null) as any;
    const location = tamilNaduLocations.find((l) => l.slug === city);
    if (!doctor || !location) return { title: "Doctor Not Found" };

    const title = `${doctor.name} — ${doctor.designation || "Specialist"} in ${location.name} | Indira Hospital`;
    const description = `Book an appointment with ${doctor.name}, ${doctor.designation || "specialist"} in ${location.name}. Over ${doctor.experience || "many years"} of experience. Serving patients from ${location.name} and nearby areas at Indira Super Speciality Hospital, Vellore.`;

    return {
        title,
        description,
        keywords: [
            doctor.name,
            location.name,
            doctor.department || "",
            `${doctor.department || "specialist"} in ${location.name}`,
            "doctor near me",
            "best specialist in Vellore",
            "laparoscopic surgeon Tamil Nadu",
            "Indira Hospital",
        ],
        openGraph: {
            title,
            description,
            type: "profile",
            images: [getImageUrl(doctor.image)],
        },
    };
}

export default async function LocationDoctorPage({
    params,
}: {
    params: Promise<{ city: string; doctorSlug: string }>;
}) {
    const { city, doctorSlug } = await params;

    const location = tamilNaduLocations.find((l) => l.slug === city);
    const doctor = await getDoctorBySlug(doctorSlug).catch(() => null) as any;

    if (!doctor || !location) notFound();

    const allServices = await getServices().catch(() => []) as any[];
    const dept = typeof doctor.department === "string" ? doctor.department : (doctor.department as any)?.name || "";
    const relatedServices = allServices.filter((s: any) =>
        s.title.toLowerCase().includes(dept.toLowerCase()) ||
        dept.toLowerCase().includes(s.title.toLowerCase())
    ).slice(0, 6);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hi, I want to book an appointment with ${doctor.name} in ${location.name}. Please help.`
    )}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: doctor.name,
        description: doctor.bio || `${doctor.name} is a specialist at Indira Super Speciality Hospital serving patients in ${location.name}.`,
        medicalSpecialty: doctor.specialties?.join(", ") || dept,
        affiliation: {
            "@type": "Hospital",
            name: "Indira Super Speciality Hospital",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Vellore",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
            },
        },
        url: `${siteConfig.url}/doctor/near-me/${city}/doctors/${doctorSlug}`,
    };

    const yearsExperience = doctor.experience_years || doctor.experience || 10;

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ============ HERO ============ */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-fuchsia-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-48 pb-16 lg:pt-56 lg:pb-20 relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex flex-wrap items-center text-sm text-fuchsia-300 mb-8 gap-1">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/doctor/near-me" className="hover:text-white transition-colors">Near Me</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href={`/doctor/near-me/${city}`} className="hover:text-white transition-colors capitalize">{location.name}</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white font-medium">{doctor.name}</span>
                    </nav>

                    <div className="flex flex-col sm:flex-row items-start gap-8">
                        {/* Doctor Photo */}
                        {doctor.image && (
                            <div className="flex-shrink-0">
                                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                                    <img
                                        src={getImageUrl(doctor.image)}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )}
                        <div>
                            {/* Location badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-fuchsia-200 text-sm font-semibold mb-4">
                                <MapPin className="w-3.5 h-3.5" />
                                Serving {location.name} & Nearby
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-2">
                                {doctor.name}
                            </h1>
                            <p className="text-xl text-fuchsia-300 font-semibold mb-1">
                                {doctor.designation || `${dept} Specialist`}
                            </p>
                            <p className="text-slate-400 text-sm mb-6">
                                {dept && `${dept} • `}Indira Super Speciality Hospital, Vellore
                            </p>

                            {/* Stats row */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                {[
                                    { icon: Award, label: `${yearsExperience}+ Years Experience` },
                                    { icon: Shield, label: "NABH Accredited" },
                                    { icon: Star, label: "4.1★ Rated Hospital" },
                                    { icon: Users, label: "Trusted by thousands" },
                                ].map(({ icon: Icon, label }) => (
                                    <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-3 py-2">
                                        <Icon className="w-4 h-4 text-amber-400" />
                                        <span className="text-xs font-semibold">{label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-3">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Book via WhatsApp
                                </a>
                                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                                    className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl border border-white/20">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ MAIN CONTENT ============ */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* LEFT — main */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* About doctor */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="bg-fuchsia-100 dark:bg-fuchsia-950 p-2 rounded-lg text-fuchsia-600">
                                    <Stethoscope className="w-5 h-5" />
                                </span>
                                About {doctor.name}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                                {doctor.bio || `${doctor.name} is an experienced ${dept} specialist at Indira Super Speciality Hospital, Vellore, serving patients from ${location.name} and surrounding areas. With ${yearsExperience}+ years of clinical excellence, they provide world-class care in a patient-first environment.`}
                            </p>

                            {/* Education */}
                            {doctor.education && doctor.education.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4 text-fuchsia-500" />
                                        Qualifications
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {doctor.education.map((edu: any) => (
                                            <span key={edu.degree || edu} className="px-3 py-1.5 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 dark:text-fuchsia-300 text-sm rounded-full font-medium">
                                                {edu.degree || edu}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Specialties */}
                            {doctor.specialties && doctor.specialties.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                        <Award className="w-4 h-4 text-amber-500" />
                                        Areas of Expertise
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-2">
                                        {doctor.specialties.map((spec: string) => (
                                            <div key={spec} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                {spec}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Why consult in [city] */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                Why Consult {doctor.name.split(" ")[1] || doctor.name} Near {location.name}?
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    `Nearest super-specialist to ${location.name} — avoid long-distance travel`,
                                    `Same-day consultations available — no waiting lists`,
                                    `50+ cashless insurance partners — zero out-of-pocket surprises`,
                                    `Advanced diagnostic support — in-house MRI, CT, Labs`,
                                    `NABH accredited hospital with international care standards`,
                                    `Free cost estimate via WhatsApp before your visit`,
                                ].map((point) => (
                                    <div key={point} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQs */}
                        <EntityFAQs entityType="doctor" entityName={doctor.name} entitySlug={doctorSlug} />

                        {/* Related services */}
                        {relatedServices.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                    Related Treatments & Services
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {relatedServices.map((svc: any) => (
                                        <ServiceCard key={svc.slug} service={svc} variant="compact" />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="lg:sticky lg:top-24 space-y-6">

                            {/* Appointment widget */}
                            <div className="bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 rounded-2xl p-6 text-white shadow-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base">Book Appointment</h3>
                                        <p className="text-fuchsia-200 text-xs">{location.name} & Nearby</p>
                                    </div>
                                </div>
                                <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                                    Instant confirmation. No waiting. Get an appointment with {doctor.name.split(" ")[1] || doctor.name} today.
                                </p>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg mb-3">
                                    <MessageCircle className="w-4 h-4" />
                                    WhatsApp to Book
                                </a>
                                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all text-sm">
                                    <Phone className="w-4 h-4" />
                                    {siteConfig.contact.phone}
                                </a>
                            </div>

                            {/* Hospital info */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-fuchsia-500" />
                                    Hospital Location
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    <strong>Indira Super Speciality Hospital</strong>
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                                    54, Katpadi Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore — 632006
                                </p>
                                <a href="https://maps.google.com/maps?cid=9667111072695054632"
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm text-fuchsia-600 hover:text-fuchsia-700 font-semibold gap-1">
                                    <MapPin className="w-3.5 h-3.5" />
                                    Get Directions
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            </div>

                            {/* Hours */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-fuchsia-500" />
                                    Clinic Hours
                                </h3>
                                <div className="space-y-2 text-sm">
                                    {[
                                        { day: "Mon – Sat", time: "9:00 AM – 6:00 PM" },
                                        { day: "Emergency", time: "24 / 7 Always Open" },
                                    ].map(({ day, time }) => (
                                        <div key={day} className="flex justify-between">
                                            <span className="text-gray-500 dark:text-gray-400">{day}</span>
                                            <span className="font-semibold text-gray-900 dark:text-white">{time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Other doctors */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Other Specialists Near You</h3>
                                <Link href={`/doctor/near-me/${city}`}
                                    className="inline-flex items-center gap-2 text-fuchsia-600 hover:text-fuchsia-700 font-semibold text-sm transition-colors">
                                    View all doctors in {location.name}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <EntityReviews
                entityType="doctor"
                entityName={doctor.name}
                entitySlug={doctorSlug}
                title={`${doctor.name} — Patient Reviews`}
                description={`Read what patients from ${location.name} and nearby areas say about their experience with ${doctor.name}.`}
            />

            {/* Entity sections */}
            <EntityCardSection type="doctors" title="Our Expert Doctors" subtitle="Meet the Team" limit={6} className="bg-white dark:bg-slate-900" />
            <EntityCardSection type="departments" title="Departments" subtitle="Centres of Excellence" limit={6} className="bg-slate-50 dark:bg-slate-900/50" />

            {/* SEO links */}
            <InternalLinkGrid type="services" title="All Services A–Z" subtitle="Services Directory" limit={12} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/50" />
            <InternalLinkGrid type="doctors" title="All Doctors" subtitle="Doctor Directory" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />
            <InternalLinkGrid type="locations" title="All Locations" subtitle="Location Directory" limit={12} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/50" />
        </div>
    );
}
