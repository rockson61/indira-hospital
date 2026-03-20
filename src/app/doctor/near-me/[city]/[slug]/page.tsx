import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getDoctors, getDoctorBySlug, getServices, getServiceBySlug } from "@/lib/api";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import {
    ChevronRight, MapPin, Phone, MessageCircle, Star, Award,
    Clock, Shield, GraduationCap, CheckCircle2, ArrowRight, Users, Calendar, Tag, Sparkles
} from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import { siteConfig } from "@/config/site";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { LocationCard } from "@/components/entities/LocationCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { getImageUrl } from "@/lib/utils";
import { ServiceCard } from "@/components/entities/ServiceCard";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { injectInternalLinks } from "@/lib/html-linkify";

export const dynamicParams = true;

export async function generateStaticParams() {
    if (process.env.VERCEL) return [];

    const [allDoctors, services, locations] = await Promise.all([
        getDoctors().catch(() => []),
        getServices().catch(() => []),
        Promise.resolve(tamilNaduLocations),
    ]);
    
    const params: { city: string; slug: string }[] = [];
    for (const loc of locations) {
        for (const doc of allDoctors as any[]) {
            if (doc.slug) params.push({ city: loc.slug, slug: doc.slug });
        }
        for (const svc of services as any[]) {
            if (svc.slug) params.push({ city: loc.slug, slug: svc.slug });
        }
    }
    return params;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string; slug: string }>;
}): Promise<Metadata> {
    const { city, slug } = await params;
    const location = tamilNaduLocations.find((l) => l.slug === city);
    if (!location) return { title: "Location Not Found" };

    const getSpecialistTitle = (title: string) => {
        const lower = title.toLowerCase();
        if (lower.includes('cardiology')) return 'Cardiologists';
        if (lower.includes('neurology')) return 'Neurologists';
        if (lower.includes('urology')) return 'Urologists';
        if (lower.includes('oncology')) return 'Oncologists';
        if (lower.includes('gynaecology') || lower.includes('obstetrics')) return 'Gynaecologists & Obstetricians';
        if (lower.includes('orthopaedics')) return 'Orthopedicians';
        if (lower.includes('gastroenterology')) return 'Gastroenterologists';
        if (lower.includes('nephrology')) return 'Nephrologists';
        if (lower.includes('general surgery')) return 'General Surgeons';
        if (lower.includes('laparoscopic')) return 'Laparoscopic Surgeons';
        if (lower.includes('robotic')) return 'Robotic Surgeons';
        if (lower.includes('vascular')) return 'Vascular Surgeons';
        if (lower.includes('general medicine')) return 'General Medicine Doctors';
        if (lower.includes('transplant')) return 'Organ Transplant Experts';
        if (lower.endsWith('y')) return title.slice(0, -1) + 'ists';
        return title + ' Specialists';
    };

    // Check for doctor first
    const doctor = await getDoctorBySlug(slug).catch(() => null) as any;
    if (doctor) {
        const dept = typeof doctor.department === "string" ? doctor.department : (doctor.department as any)?.name || "";
        const specialistTitle = dept ? getSpecialistTitle(dept) : "Specialist";
        const title = `Best ${specialistTitle} in ${location.name} — Dr. ${doctor.name} | Indira Hospital`;
        const description = `Looking for the best ${specialistTitle.toLowerCase()} in ${location.name}? Consult with Dr. ${doctor.name}, an expert serving patients from ${location.name} at Indira Super Speciality Hospital. ${doctor.experience || 15}+ years experience. Book an appointment today.`;
        return {
            title,
            description,
            openGraph: { title, description, type: "profile", images: [getImageUrl(doctor.image)] },
        };
    }

    // Check for service/department
    const service = await getServiceBySlug(slug).catch(() => null) as any;
    if (service) {
        const specialistTitle = getSpecialistTitle(service.title);
        const title = `Best ${specialistTitle} in ${location.name} — Top-Rated Specialist Clinic | Indira Hospital`;
        const description = `Searching for top ${specialistTitle.toLowerCase()} in ${location.name}? Indira Super Speciality Hospital offers world-class ${service.title.toLowerCase()} care near you. Same-day appointments, NABH accredited, and expert surgeons. Visit us today.`;
        return {
            title,
            description,
            openGraph: { title, description },
        };
    }

    return { title: "Not Found" };
}

export default async function UnifiedLocationSlugPage({
    params,
}: {
    params: Promise<{ city: string; slug: string }>;
}) {
    const { city, slug } = await params;
    const location = tamilNaduLocations.find((l) => l.slug === city);
    if (!location) notFound();

    const doctor = await getDoctorBySlug(slug).catch(() => null) as any;

    if (doctor) {
        return <DoctorView doctor={doctor} location={location} city={city} slug={slug} />;
    }

    const service = await getServiceBySlug(slug).catch(() => null) as any;
    if (service) {
        return <ServiceView service={service} location={location} city={city} slug={slug} />;
    }

    notFound();
}

async function DoctorView({ doctor, location, city, slug }: any) {
    const allServices = await getServices().catch(() => []) as any[];
    const dept = typeof doctor.department === "string" ? doctor.department : (doctor.department as any)?.name || "";
    const relatedServices = allServices.filter((s: any) =>
        s.title.toLowerCase().includes(dept.toLowerCase()) ||
        dept.toLowerCase().includes(s.title.toLowerCase())
    ).slice(0, 6);

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        `Hi, I want to book an appointment with ${doctor.name} in ${location.name}. Please help.`
    )}`;

    const yearsExperience = doctor.experience_years || doctor.experience || 10;

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen">
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-fuchsia-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-48 pb-16 lg:pt-56 lg:pb-20 relative z-10">
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
                        {doctor.image && (
                            <div className="flex-shrink-0">
                                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                                    <img src={getImageUrl(doctor.image)} alt={doctor.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        )}
                                <div>
                                    <div className="mb-6">
                                        <h1 className="text-sm md:text-base font-bold text-fuchsia-300 uppercase tracking-[0.2em] mb-3 flex items-center gap-2 drop-shadow-sm">
                                            <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                                            Best {dept} Doctors in {location.name}
                                        </h1>
                                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] text-white uppercase italic mb-6">
                                            {doctor.name}
                                        </h2>
                                    </div>
                            <p className="text-xl text-fuchsia-300 font-semibold mb-1">{doctor.designation || `${dept} Specialist`}</p>
                            <p className="text-slate-400 text-sm mb-3">{dept && `${dept} • `}Indira Super Speciality Hospital, Vellore</p>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {[
                                    { icon: Award, label: `${yearsExperience}+ Years Experience` },
                                    { icon: Shield, label: "NABH Accredited" },
                                    { icon: Users, label: "Trusted by thousands" },
                                ].map(({ icon: Icon, label }) => (
                                    <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-3 py-2">
                                        <Icon className="w-4 h-4 text-amber-400" />
                                        <span className="text-xs font-semibold">{label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a href={whatsappUrl} className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg">
                                    <MessageCircle className="w-4 h-4 mr-2" /> Book via WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="bg-fuchsia-100 dark:bg-fuchsia-950 p-2 rounded-lg text-fuchsia-600"><Stethoscope className="w-5 h-5" /></span>
                                About {doctor.name}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                                {doctor.bio || `${doctor.name} is an experienced ${dept} specialist at Indira Super Speciality Hospital, Vellore, serving patients from ${location.name}.`}
                            </p>
                        </div>
                        <EntityFAQs entityType="doctor" entityName={doctor.name} entitySlug={slug} />
                    </div>
                    <div className="lg:col-span-1 space-y-6">
                         <div className="bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 rounded-2xl p-6 text-white shadow-xl">
                            <h3 className="font-bold text-lg mb-4">Available Near {location.name}</h3>
                            <a href={whatsappUrl} className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg mb-3">
                                <MessageCircle className="w-4 h-4" /> WhatsApp to Book
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <EntityReviews entityType="doctor" entityName={doctor.name} entitySlug={slug} />
        </div>
    );
}

async function ServiceView({ service, location, city, slug }: any) {
    const allDoctors: any[] = await getDoctors().catch(() => []);
    const relatedDoctors = allDoctors.filter((d) => {
        const dept = typeof d.department === "string" ? d.department : (d.department as any)?.name || "";
        return (
            dept.toLowerCase().includes(service.title.toLowerCase()) ||
            service.title.toLowerCase().includes(dept.toLowerCase())
        );
    });

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        `Hi, I need ${service.title} treatment in ${location.name}. Please help.`
    )}`;

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen">
            <section className="relative bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-48 pb-16 lg:pt-56 lg:pb-20 relative z-10">
                    <nav className="flex flex-wrap items-center text-sm text-fuchsia-300 mb-8 gap-1">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/doctor/near-me" className="hover:text-white transition-colors">Near Me</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href={`/doctor/near-me/${city}`} className="hover:text-white transition-colors capitalize">{location.name}</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white font-medium">{service.title}</span>
                    </nav>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-fuchsia-200 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" /> Serving {location.name} & Nearby
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] uppercase italic mb-8">
                        {service.title}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300 text-2xl sm:text-3xl lg:text-4xl block mt-4 not-italic font-bold tracking-normal opacity-90">in {location.name}, Tamil Nadu.</span>
                    </h1>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href={whatsappUrl} className="inline-flex items-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg text-base">
                            <MessageCircle className="w-5 h-5 mr-2" /> Book on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="bg-fuchsia-100 dark:bg-fuchsia-950 p-2 rounded-lg text-fuchsia-600"><Stethoscope className="w-5 h-5" /></span>
                                About {service.title} in {location.name}
                            </h2>
                            <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: injectInternalLinks(service.full_description || "") }} />
                        </div>
                        {relatedDoctors.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 underline decoration-fuchsia-500 underline-offset-8 decoration-4">{service.title} Specialists in {location.name}</h2>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {relatedDoctors.map((doc) => <DoctorCard key={doc.slug} doctor={doc} variant="compact" />)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <EntityReviews entityType="service" entityName={service.title} entitySlug={slug} />
        </div>
    );
}
