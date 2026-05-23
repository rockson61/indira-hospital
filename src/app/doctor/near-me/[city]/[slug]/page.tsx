import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
    getDoctors, getDoctorBySlug, getServices, getServiceBySlug, 
    getSEOKeywords, getSEOKeywordBySlug, getTreatmentBySlug, getRichSEOContent 
} from "@/lib/api";
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
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import AioKnowledgeBlock from "@/components/seo/AioKnowledgeBlock";

export const dynamicParams = true;

export async function generateStaticParams() {
    if (process.env.VERCEL) return [];

    const [allDoctors, services, seoKeywords, locations] = await Promise.all([
        getDoctors().catch(() => []),
        getServices().catch(() => []),
        getSEOKeywords().catch(() => []),
        Promise.resolve(tamilNaduLocations),
    ]);
    
    const params: { city: string; slug: string }[] = [];
    
    // 1. Regular Doctors & Services for ALL locations
    for (const loc of locations) {
        for (const doc of allDoctors as any[]) {
            if (doc.slug) params.push({ city: loc.slug, slug: doc.slug });
        }
        for (const svc of services as any[]) {
            if (svc.slug) params.push({ city: loc.slug, slug: svc.slug });
        }
    }

    // Vellore, Katpadi, Ranipet, Gudiyatham, Ambur, Arcot, Walajapet, Tamil Nadu, etc.
    const hubSlugs = ['vellore', 'katpadi', 'ranipet', 'gudiyatham', 'ambur', 'vaniyambadi', 'kanchipuram', 'tiruvannamalai', 'arcot', 'walajapet', 'chennai', 'hosur', 'tamil-nadu'];
    const hubLocations = locations.filter(l => hubSlugs.includes(l.slug));

    for (const loc of hubLocations) {
        for (const keyword of seoKeywords) {
            params.push({ city: loc.slug, slug: keyword.slug });
        }
    }

    return params;
}

import { constructMetadata } from "@/lib/seo-utils";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string; slug: string }>;
}): Promise<Metadata> {
    const { city, slug } = await params;
    const location = tamilNaduLocations.find((l) => l.slug === city);
    if (!location) {
        return constructMetadata({
            title: "Location Not Found",
            description: "The requested medical service location could not be found.",
            path: `/doctor/near-me/${city}/${slug}`
        });
    }

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
        const title = `Best ${specialistTitle} in ${location.name} — Dr. ${doctor.name} | Ranked #1 In ${location.district}`;
        const description = `Looking for the best ${specialistTitle.toLowerCase()} in ${location.name}? Consult Dr. ${doctor.name}, an elite specialist serving patients from ${location.name} at Indira Super Speciality Hospital. Expert clinical care, NABH Accredited. Book today.`;
        return constructMetadata({
            title,
            description,
            path: `/doctor/near-me/${city}/${slug}`,
            image: getImageUrl(doctor.image)
        });
    }

    // Check for service/department
    const service = await getServiceBySlug(slug).catch(() => null) as any;
    if (service) {
        const specialistTitle = getSpecialistTitle(service.title);
        const title = `Best ${specialistTitle} in ${location.name} | Ranked #1 Center for ${service.title}`;
        const description = `Searching for top-rated ${specialistTitle.toLowerCase()} in ${location.name}? Indira Super Speciality Hospital provides elite ${service.title.toLowerCase()} care. Advanced laser & robotic surgery available for patients across ${location.name}. NABH Accredited facility.`;
        return constructMetadata({
            title,
            description,
            path: `/doctor/near-me/${city}/${slug}`
        });
    }

    // Check for SEO Keyword
    const seoKeyword = await getSEOKeywordBySlug(slug).catch(() => null);
    if (seoKeyword) {
        const title = `Best ${seoKeyword.title} in ${location.name}, Tamil Nadu | Ranked #1 Hospital for ${seoKeyword.title}`;
        const description = `Looking for the ${seoKeyword.title.toLowerCase()} in ${location.name}? Indira Super Speciality Hospital provides elite medical care and advanced surgical solutions for patients in ${location.name} and across Tamil Nadu.`;
        return constructMetadata({
            title,
            description,
            path: `/doctor/near-me/${city}/${slug}`
        });
    }

    // Check for treatment
    const treatment = await getTreatmentBySlug(slug).catch(() => null);
    if (treatment) {
        const title = `Best ${treatment.title} in ${location.name} | Indira Super Speciality Hospital`;
        const description = `Advanced ${treatment.title} in ${location.name} at Indira Super Speciality Hospital. Expert clinical care and minimally invasive surgical solutions. Serving patients in ${location.district} district.`;
        return constructMetadata({
            title,
            description,
            path: `/doctor/near-me/${city}/${slug}`
        });
    }

    return constructMetadata({
        title: "Not Found",
        description: "The requested medical page could not be found.",
        path: `/doctor/near-me/${city}/${slug}`
    });
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

    const treatment = await getTreatmentBySlug(slug).catch(() => null);
    if (treatment) {
        // Map Treatment to a Service-like object for ServiceView
        const mappedService = {
            title: treatment.title,
            slug: treatment.slug,
            department: treatment.parentServiceSlug,
            full_description: treatment.fullDescription,
            features: treatment.features,
            benefits: treatment.benefits,
            faq: treatment.faq
        };
        return <ServiceView service={mappedService} location={location} city={city} slug={slug} isTreatment={true} />;
    }

    const seoKeyword = await getSEOKeywordBySlug(slug).catch(() => null);
    if (seoKeyword) {
        // Use the high-authority fallback content engine
        const richDescription = getRichSEOContent(seoKeyword, location);
        
        const mappedService = {
            title: seoKeyword.title,
            slug: seoKeyword.slug,
            department: seoKeyword.department,
            full_description: richDescription,
        };
        return <ServiceView service={mappedService} location={location} city={city} slug={slug} isSEOKeyword={true} />;
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
        `Elite Consultation Enquiry: I would like to book an appointment with Dr. ${doctor.name} for a patient from ${location.name}.`
    )}`;

    const yearsExperience = doctor.experience_years || doctor.experience || 10;

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen">
            <JsonLdSchema 
                type="physician" 
                name={doctor.name} 
                specialty={dept} 
                description={doctor.bio || `${doctor.name} is a leading specialist at Indira Super Speciality Hospital.`} 
                url={`/${city}/${slug}`} 
            />
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden pb-12">
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                
                {/* Elite Ambient Glows */}
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[150px] opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-48 pb-16 lg:pt-56 lg:pb-24 relative z-10">
                    <nav className="flex flex-wrap items-center text-sm text-indigo-300/60 mb-10 gap-1 italic">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/doctor/near-me" className="hover:text-white transition-colors">Near Me</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href={`/doctor/near-me/${city}`} className="hover:text-white transition-colors capitalize">{location.name}</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white font-black">{doctor.name}</span>
                    </nav>

                    <div className="flex flex-col sm:flex-row items-start gap-10">
                        {doctor.image && (
                            <div className="flex-shrink-0">
                                <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-3xl bg-white/5 group hover:scale-105 transition-transform duration-500 relative">
                                    <Image src={getImageUrl(doctor.image)} alt={doctor.name} fill className="object-cover grayscale-[20%] contrast-[110%] group-hover:grayscale-0 transition-all duration-700" />
                                </div>
                            </div>
                        )}
                        <div className="flex-1">
                            <div className="mb-8">
                                <div className="elite-tag mb-10">
                                    <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                                    Elite {dept} Specialist in {location.name}
                                </div>
                                <h1 className="elite-hero-title mb-10 text-left">
                                    {doctor.name}
                                </h1>
                            </div>
                            <p className="text-2xl sm:text-3xl text-indigo-200 font-black mb-2 uppercase italic opacity-90">{doctor.designation || `${dept} Specialist`}</p>
                            <p className="text-slate-400 text-lg mb-8 font-medium">Indira Super Speciality Hospital, Vellore</p>
                            
                            <div className="flex flex-wrap gap-4 mb-10">
                                {[
                                    { icon: Award, label: `${yearsExperience}+ Years Experience` },
                                    { icon: Shield, label: "NABH Accredited" },
                                    { icon: Users, label: "Trusted by thousands" },
                                ].map(({ icon: Icon, label }) => (
                                    <div key={label} className="flex items-center gap-3 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl px-5 py-3 shadow-2xl">
                                        <Icon className="w-5 h-5 text-amber-400" />
                                        <span className="text-xs font-black uppercase tracking-widest">{label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href={whatsappUrl} className="elite-button-primary text-sm">
                                    <MessageCircle className="w-5 h-5 mr-3" /> Book Expert Consultation
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
                            <h3 className="font-bold text-lg mb-4">Consultation for {location.name} Patients</h3>
                            <p className="text-sm text-slate-300 mb-6">
                                Priority booking available for outstation patients traveling from {location.district} district.
                            </p>
                            <a href={whatsappUrl} className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg mb-3">
                                <MessageCircle className="w-4 h-4" /> WhatsApp to Book
                            </a>
                        </div>
                        
                        {/* SEO Enriched Travel Block */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-fuchsia-600" /> Travel from {location.name}
                            </h3>
                            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /> Distance to Hospital</span>
                                    <span className="font-bold text-gray-900 dark:text-white">{location.distance}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /> Estimated Travel Time</span>
                                    <span className="font-bold text-gray-900 dark:text-white">{location.travelTime}</span>
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 mt-4">Available Transport Options</span>
                                    <div className="flex flex-wrap gap-2">
                                        {location.transportOptions?.bus && <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium">Bus Route</span>}
                                        {location.transportOptions?.train && <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium">Direct Train</span>}
                                        {location.transportOptions?.taxi && <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium">Taxi Service</span>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SEO Enriched Outstation Assistance */}
                        <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-900/50">
                            <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-3 flex items-center gap-2">
                                <Shield className="w-4 h-4" /> VIP Patient Assistance
                            </h3>
                            <p className="text-sm text-indigo-800 dark:text-indigo-400 leading-relaxed mb-4">
                                Indira Super Speciality Hospital provides dedicated relationship managers for patients arriving from <strong>{location.name}</strong>. Enjoy cashless treatments with 50+ partnered insurance networks.
                            </p>
                            <ul className="space-y-2 text-sm text-indigo-700 dark:text-indigo-300 font-medium">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Accommodation arrangements</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Express admission desk</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Language translation</li>
                            </ul>
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
        const serviceTitle = service.title.toLowerCase();
        const serviceDept = (service.department || "").toLowerCase();
        const drDept = dept.toLowerCase();
        const drSpecialties = (d.specialties || []).map((s: string) => s.toLowerCase());
        
        // Multi-layered matching logic:
        // 1. Department match (bidirectional)
        const isDeptMatch = (serviceDept && drDept.includes(serviceDept)) || (serviceDept && serviceDept.includes(drDept));
        
        // 2. Title match in specialties
        const isSpecialtyMatch = drSpecialties.some((s: string) => 
            s.includes(serviceTitle) || serviceTitle.includes(s) || 
            (serviceDept && s.includes(serviceDept))
        );

        // 3. Title match in department string
        const isTitleDeptMatch = drDept.includes(serviceTitle) || serviceTitle.includes(drDept);

        return isDeptMatch || isSpecialtyMatch || isTitleDeptMatch;
    });

    console.log(`[SEO-DIAGNOSTIC] ${slug}: Found ${relatedDoctors.length} specialists for department "${service.department}"`);

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        `Clinical Enquiry from ${location.name}: I need details about ${service.title} specialized care at Indira Hospital for an outstation patient.`
    )}`;

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen">
            <JsonLdSchema 
                type="procedure" 
                name={`${service.title} in ${location.name}`} 
                description={`Indira Super Speciality Hospital provides elite ${service.title} care for patients in ${location.name}, ${location.district} district. We are NABH accredited and support CMCHIS Govt Scheme.`} 
                url={`/${city}/${slug}`} 
            />
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden pb-12">
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                
                {/* Elite Ambient Glows */}
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[150px] opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-48 pb-16 lg:pt-56 lg:pb-24 relative z-10">
                    <nav className="flex flex-wrap items-center text-sm text-indigo-300/60 mb-10 gap-1 italic">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/doctor/near-me" className="hover:text-white transition-colors">Near Me</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href={`/doctor/near-me/${city}`} className="hover:text-white transition-colors capitalize">{location.name}</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white font-black">{service.title}</span>
                    </nav>

                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 text-indigo-300 text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-2xl">
                        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" /> Providing Specialised Care for {location.name}
                    </div>

                    <h1 className="elite-hero-title mb-12">
                        {service.title} in {location.name},<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-indigo-300 text-2xl sm:text-4xl lg:text-5xl block mt-6 not-italic font-black tracking-widest opacity-90 uppercase italic">Tamil Nadu.</span>
                    </h1>
                    <div className="flex flex-wrap gap-4 mt-12">
                        <a href={whatsappUrl} className="inline-flex items-center px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl transition-all shadow-lg shadow-indigo-500/25 uppercase tracking-widest text-sm">
                            <MessageCircle className="w-5 h-5 mr-3" /> Consult Specialists
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

                            <AioKnowledgeBlock 
                                title={`Clinical Expert Hub: ${service.title}`}
                                items={[
                                    { label: 'Specialist Focus', value: service.department || 'Surgery', icon: Stethoscope },
                                    { label: 'Patient Reach', value: `Serving ${location.name} Area`, icon: MapPin },
                                    { label: 'Service Level', value: 'Elite Hospital Care', icon: Shield },
                                    { label: 'Clinical Availability', value: '24/7 Support', icon: Clock }
                                ]}
                            />

                            <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: injectInternalLinks(service.full_description || "") }} />

                            {service.features && (
                                <div className="mt-10">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider">Elite Clinical Features</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {(service.features as any[]).map((f: any, i: number) => {
                                            const item = typeof f === 'string' ? { title: f, description: '', icon: 'CheckCircle2' } : f;
                                            return (
                                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5" />
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                                        {item.description && <p className="text-xs text-gray-500 italic">{item.description}</p>}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                        <EntityFAQs entityType="service" entityName={service.title} entitySlug={slug} />
                        {relatedDoctors.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 underline decoration-fuchsia-500 underline-offset-8 decoration-4">{service.title} Specialists in {location.name}</h2>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {relatedDoctors.map((doc) => <DoctorCard key={doc.slug} doctor={doc} variant="compact" />)}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* ENRICHED RIGHT SIDEBAR */}
                    <div className="lg:col-span-1 space-y-6">
                         <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 text-white shadow-xl">
                            <h3 className="font-bold text-lg mb-4">{service.title} Care near {location.name}</h3>
                            <p className="text-sm text-indigo-200 mb-6">
                                Same-day appointments and clinical consultations available. Secure your slot via WhatsApp today.
                            </p>
                            <a href={whatsappUrl} className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg mb-3">
                                <MessageCircle className="w-4 h-4" /> Book Consultation
                            </a>
                        </div>

                        {/* SEO Enriched Travel Block */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Tag className="w-4 h-4 text-indigo-600" /> Treatment Cost & Insurance
                            </h3>
                            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-100 dark:border-indigo-900/50 mb-4">
                                    <p className="text-xs font-bold text-indigo-900 dark:text-indigo-300 uppercase mb-2">Estimated Cost</p>
                                    <p className="text-lg font-black text-indigo-600 dark:text-indigo-400">Starting from ₹15,000*</p>
                                    <p className="text-[10px] text-gray-500 mt-1">*Final cost depends on clinical evaluation & room category.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-gray-500 uppercase">Coverage Supported</p>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold">
                                            <CheckCircle2 className="w-4 h-4" /> CMCHIS (Govt Scheme)
                                        </div>
                                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold">
                                            <Shield className="w-4 h-4" /> 50+ Private Insurances
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Travel Block */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-fuchsia-600" /> Travel from {location.name}
                            </h3>
                            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /> Distance to Hospital</span>
                                    <span className="font-bold text-gray-900 dark:text-white">{location.distance}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /> Estimated Travel Time</span>
                                    <span className="font-bold text-gray-900 dark:text-white">{location.travelTime}</span>
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 mt-4">Available Transport Options</span>
                                    <div className="flex flex-wrap gap-2">
                                        {location.transportOptions?.bus && <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium">Bus Route</span>}
                                        {location.transportOptions?.train && <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium">Direct Train</span>}
                                        {location.transportOptions?.taxi && <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium">Taxi Service</span>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CMS / Cashless Assistance */}
                        <div className="bg-fuchsia-50 dark:bg-fuchsia-950/30 rounded-2xl p-6 border border-fuchsia-100 dark:border-fuchsia-900/50">
                            <h3 className="font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-3 flex items-center gap-2">
                                <Shield className="w-4 h-4" /> Chief Minister&apos;s Scheme
                            </h3>
                            <p className="text-sm text-fuchsia-800 dark:text-fuchsia-400 leading-relaxed mb-4">
                                Our center in Vellore is fully empanelled with the <strong>Chief Minister&apos;s Comprehensive Health Insurance Scheme (CMCHIS)</strong> supporting patients across {location.category === 'district_hq' ? location.name : location.district + ' district'} and all of Tamil Nadu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== SEMANTIC INTERNAL LINKING GRID ========== */}
            <div className="bg-slate-50 dark:bg-slate-900/50 pt-20 border-t border-slate-100 dark:border-slate-800">
                <InternalLinkGrid 
                    type="services" 
                    title={`Elite Treatments for Patients from ${location.name}`}
                    subtitle="Medical Procedures"
                    limit={10}
                />
                
                <InternalLinkGrid 
                    type="locations" 
                    excludeSlug={location.slug}
                    title="Our Catchment Network"
                    subtitle="Neighboring Cities & Districts"
                    limit={10}
                />
            </div>

            <EntityReviews entityType="service" entityName={service.title} entitySlug={slug} />
        </div>
    );
}
