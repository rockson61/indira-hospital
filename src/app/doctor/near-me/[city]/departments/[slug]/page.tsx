import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, getServices, getDoctors } from "@/lib/api";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import {
    ChevronRight, MapPin, Phone, MessageCircle, ArrowRight, CheckCircle2,
    Star, Users, Award, Clock, Shield, Sparkles, GraduationCap
} from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import { clinicConfig } from "@/lib/data/clinic-config";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import EntityReviews from "@/components/trust/EntityReviews";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { injectInternalLinks } from "@/lib/html-linkify";

const WHATSAPP_NUMBER = "917010650063";

export const dynamicParams = true;

export async function generateStaticParams() {
    const [services, locations] = await Promise.all([
        getServices().catch(() => []),
        Promise.resolve(tamilNaduLocations),
    ]);
    const params: { city: string; slug: string }[] = [];
    for (const loc of locations) {
        for (const svc of services as any[]) {
            params.push({ city: loc.slug, slug: svc.slug });
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
    const service = await getServiceBySlug(slug).catch(() => null) as any;
    const location = tamilNaduLocations.find((l) => l.slug === city);
    if (!service || !location) return { title: "Page Not Found" };

    const cityName = location.name;
    const title = `${service.title} in ${cityName} | Indira Super Speciality Hospital`;
    const description = `Looking for ${service.title} in ${cityName}? Indira Super Speciality Hospital offers world-class ${service.title.toLowerCase()} care near you. Same-day appointments, NABH accredited.`;

    return {
        title,
        description,
        keywords: [service.title, cityName, "hospital", "near me", "Tamil Nadu", "best specialist"],
        openGraph: { title, description },
    };
}

export default async function LocationDepartmentPage({
    params,
}: {
    params: Promise<{ city: string; slug: string }>;
}) {
    const { city, slug } = await params;

    const location = tamilNaduLocations.find((l) => l.slug === city);
    const service = await getServiceBySlug(slug).catch(() => null) as any;

    if (!service || !location) notFound();

    const allDoctors: any[] = await getDoctors().catch(() => []);
    const relatedDoctors = allDoctors.filter((d) => {
        const dept = typeof d.department === "string" ? d.department : (d.department as any)?.name || "";
        return (
            dept.toLowerCase().includes(service.title.toLowerCase()) ||
            service.title.toLowerCase().includes(dept.toLowerCase()) ||
            (d.specialties && d.specialties.some((s: string) =>
                service.title.toLowerCase().includes(s.toLowerCase()) ||
                s.toLowerCase().includes(service.title.toLowerCase())
            ))
        );
    });

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hi, I need ${service.title} treatment in ${location.name}. Please help.`
    )}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        name: `Indira Super Speciality Hospital — ${service.title}`,
        description: `${service.title} services available in ${location.name}, Tamil Nadu.`,
        address: {
            "@type": "PostalAddress",
            addressLocality: location.name,
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
        },
        medicalSpecialty: service.title,
        url: `https://www.indirasuperspecialityhospital.com/doctor/near-me/${city}/departments/${slug}`,
    };

    const badges = [
        { icon: Award, label: "NABH Accredited" },
        { icon: Clock, label: "24/7 Emergency" },
        { icon: Shield, label: "15,000+ Surgeries" },
        { icon: Star, label: "4.1★ Google Rated" },
    ];

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ========== HERO ========== */}
            <section className="relative bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-48 pb-16 lg:pt-56 lg:pb-20 relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex flex-wrap items-center text-sm text-fuchsia-300 mb-8 gap-1">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/doctor/near-me" className="hover:text-white transition-colors">Near Me</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href={`/doctor/near-me/${city}`} className="hover:text-white transition-colors capitalize">{location.name}</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white font-medium">{service.title}</span>
                    </nav>

                    {/* Location badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-fuchsia-200 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        Serving {location.name} & Nearby Areas
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                        {service.title}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300 mt-1">
                            in {location.name}
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-slate-300 max-w-2xl leading-relaxed">
                        {service.short_description ||
                            `World-class ${service.title.toLowerCase()} specialists available near ${location.name}. Get expert care, same-day appointments, and transparent pricing.`}
                    </p>

                    {/* Trust badges */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        {badges.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                                <Icon className="w-4 h-4 text-amber-400" />
                                <span className="text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 text-base">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Book on WhatsApp — Free
                        </a>
                        <a href={`tel:${clinicConfig.phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl border border-white/20">
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                        </a>
                    </div>
                </div>
            </section>

            {/* ========== MAIN CONTENT ========== */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* LEFT — main content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* About */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="bg-fuchsia-100 dark:bg-fuchsia-950 p-2 rounded-lg text-fuchsia-600">
                                    <Stethoscope className="w-5 h-5" />
                                </span>
                                About {service.title} in {location.name}
                            </h2>
                            <div
                                className="text-gray-600 dark:text-gray-400 leading-relaxed text-base space-y-4 prose dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: injectInternalLinks(service.full_description || "") }}
                            />
                        </div>

                        {/* Why choose us in this city */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="bg-amber-100 dark:bg-amber-950 p-2 rounded-lg text-amber-600">
                                    <Sparkles className="w-5 h-5" />
                                </span>
                                Why Choose Indira Hospital for {service.title} Near {location.name}?
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    `Closest super-speciality to ${location.name} with 15,000+ successful procedures`,
                                    "NABH accredited — same quality standards as top metro hospitals",
                                    "50+ cashless insurance partners — no out-of-pocket surprises",
                                    "24/7 emergency and ICU support with dedicated specialists",
                                    "Same-day consultation available — no long waiting lists",
                                    "Transparent pricing with free cost estimate via WhatsApp",
                                ].map((point) => (
                                    <div key={point} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQs */}
                        <EntityFAQs entityType="service" entityName={service.title} entitySlug={slug} />

                        {/* Doctors */}
                        {relatedDoctors.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="bg-fuchsia-100 dark:bg-fuchsia-950 p-2 rounded-lg text-fuchsia-600">
                                        <GraduationCap className="w-5 h-5" />
                                    </span>
                                    {service.title} Specialists Available Near {location.name}
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
                            {/* Book widget */}
                            <div className="bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 rounded-2xl p-6 text-white shadow-xl">
                                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                                    <MessageCircle className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Free Cost Estimate</h3>
                                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                    Get exact pricing for {service.title} near {location.name}. No hidden charges. Instant reply.
                                </p>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg">
                                    <MessageCircle className="w-4 h-4" />
                                    WhatsApp Us Now
                                </a>
                                <a href={`tel:${clinicConfig.phone.replace(/\s+/g, "")}`}
                                    className="w-full flex items-center justify-center gap-2 px-5 py-3 mt-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all text-sm">
                                    <Phone className="w-4 h-4" />
                                    {clinicConfig.phone}
                                </a>
                            </div>

                            {/* Location info */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-fuchsia-500" />
                                    Serving Patients From
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    Our hospital is the closest quaternary care facility to <strong>{location.name}</strong> and surrounding areas.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[location.name, "Vellore", "Gandhi Nagar", "Katpadi", "Suthanthira Ponvizha Nagar"].map((area) => (
                                        <span key={area} className="px-3 py-1 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 dark:text-fuchsia-300 text-xs rounded-full font-medium">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Other departments */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-3">More Services Near You</h3>
                                <div className="space-y-2">
                                    {["Cardiology", "Orthopaedics", "Nephrology", "General Surgery", "Obstetrics"].map((svcName) => (
                                        <Link key={svcName}
                                            href={`/doctor/near-me/${city}/departments/${svcName.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")}`}
                                            className="flex items-center justify-between p-3 rounded-xl hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/50 group transition-colors">
                                            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-fuchsia-700 font-medium">{svcName}</span>
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-fuchsia-600" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <EntityReviews
                entityType="service"
                entityName={service.title}
                entitySlug={slug}
                title={`${service.title} Reviews — Real Patients Near ${location.name}`}
                description={`Read what patients from ${location.name} and nearby areas say about ${service.title} at Indira Hospital.`}
            />

            {/* Entity sections */}
            <EntityCardSection type="doctors" title="Our Expert Doctors" subtitle="Meet Our Specialists" limit={6} className="bg-white dark:bg-slate-900" />
            <EntityCardSection type="departments" title="All Departments" subtitle="Centres of Excellence" limit={6} className="bg-slate-50 dark:bg-slate-900/50" />

            {/* SEO link grids */}
            <InternalLinkGrid type="services" title="All Departments A–Z" subtitle="Services Directory" limit={12} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/50" />
            <InternalLinkGrid type="doctors" title="All Doctors" subtitle="Doctor Directory" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />
        </div>
    );
}
