import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServices, getServiceBySlug, getDoctors } from "@/lib/api";
import { siteConfig } from '@/config/site';
import { getTreatmentBySlug, getAllTreatments } from "@/lib/data/treatment-data";
import { getImageUrl } from "@/lib/utils";
import { ChevronRight, CheckCircle2, Siren, Ribbon, MessageCircle, Phone, Award, Users, Clock, Star, MapPin, ArrowRight, GraduationCap, Banknote, HelpCircle, Quote, Info, Sparkles, Shield } from "lucide-react";
import { Stethoscope, Heart, HeartCardiogram, Baby0203m, Happy, Neurology, BloodDrop, Electricity } from "healthicons-react/outline";
import { Card } from "@/components/ui/card";
import { injectInternalLinks } from "@/lib/html-linkify";
import EntityReviews from "@/components/trust/EntityReviews";
import { SectionContainer } from "@/components/ui/section-container";

import { DoctorCard } from "@/components/entities/DoctorCard";
import { ServiceCard } from "@/components/entities/ServiceCard";
import { LocationCard } from "@/components/entities/LocationCard";
import { DepartmentCard } from "@/components/entities/DepartmentCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { UnifiedEntitySection } from "@/components/seo/UnifiedEntitySection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { HealthLibraryCard } from "@/components/sections/HealthLibraryCard";
import { PeopleAlsoSearchCard } from "@/components/seo/PeopleAlsoSearchCard";



// Icon map for services
const iconMap: Record<string, React.ReactNode> = {
    Scalpel: <Stethoscope className="h-8 w-8" />,
    HeartCardiogram: <HeartCardiogram className="h-8 w-8" />,
    Stethoscope: <Stethoscope className="h-8 w-8" />,
    Baby0203m: <Baby0203m className="h-8 w-8" />,
    Orthopaedics: <HeartCardiogram className="h-8 w-8" />,
    Heart: <Heart className="h-8 w-8" />,
    Siren: <Siren className="h-8 w-8" />,
    Happy: <Happy className="h-8 w-8" />,
    Neurology: <Neurology className="h-8 w-8" />,
    Ribbon: <Ribbon className="h-8 w-8" />,
    BloodDrop: <BloodDrop className="h-8 w-8" />,
    Electricity: <Electricity className="h-8 w-8" />,
};

// Key procedures per service/department
const serviceProcedures: Record<string, string[]> = {
    "general-surgery": ["Laser Surgery for Piles", "Hernia Repair", "Thyroid Surgery", "Laparoscopic Cholecystectomy", "Breast Surgery", "Varicose Vein Treatment", "Lipoma Removal", "Appendectomy"],
    "laparoscopic-surgeries": ["Laparoscopic Cholecystectomy", "Laparoscopic Appendectomy", "Laparoscopic Hernia Repair", "Diagnostic Laparoscopy", "Laparoscopic Hysterectomy", "Bariatric Surgery"],
    gastroenterology: ["Upper GI Endoscopy", "Colonoscopy", "ERCP", "Liver Biopsy", "Acid Reflux Treatment", "Peptic Ulcer Management", "IBS Treatment", "Hepatitis Management"],
    urology: ["Kidney Stone Removal (PCNL)", "Ureteroscopy", "Prostate Surgery (TURP)", "Cystoscopy", "Circumcision", "Hydrocele Surgery", "Varicocele Treatment"],
    "obstetrics-gynaecology": ["Normal & Caesarean Delivery", "High-Risk Pregnancy Care", "Painless Delivery", "Infertility Treatment", "Hysterectomy", "Ovarian Cyst Removal", "Fibroid Treatment", "Prenatal Screening"],
    orthopaedics: ["Total Knee Replacement", "Total Hip Replacement", "Arthroscopy", "Fracture Management", "Spine Surgery", "Sports Medicine", "Ligament Reconstruction", "Joint Injections"],
    cardiology: ["Angiography", "Angioplasty & Stenting", "Pacemaker Implantation", "Echocardiography", "TMT / Stress Test", "Heart Failure Management", "Cardiac Rehabilitation", "Holter Monitoring"],
    "icu-emergency": ["24/7 Emergency Care", "Ventilator Support", "Trauma Management", "Post-Surgical ICU Care", "Cardiac Monitoring", "Sepsis Management", "Stroke Care", "Poison Management"],
    dentistry: ["Maxillofacial Surgery", "Orthognathic Procedures", "Dental Implants", "Orthodontics", "Root Canal Treatment", "Happy Makeover", "Full Mouth Rehabilitation", "Pediatric Dentistry"],
    neurology: ["Stroke Management", "Epilepsy Treatment", "Migraine & Headache Clinic", "Parkinson's Disease Care", "EEG & EMG Studies", "Peripheral Neuropathy", "Multiple Sclerosis Treatment", "Nerve Conduction Studies"],
    oncology: ["Cancer Screening", "Chemotherapy", "Targeted Therapy", "Immunotherapy", "Surgical Oncology", "Palliative Care", "Biopsy & Diagnosis", "Cancer Rehabilitation"],
    nephrology: ["Dialysis Services", "Chronic Kidney Disease", "Kidney Stone Management", "Hypertension Treatment", "Electrolyte Disorders", "Pre-Transplant Evaluation", "Glomerulonephritis Care", "Diabetic Nephropathy"],
};


export const dynamicParams = true;

export async function generateStaticParams() {
    // On Vercel the CMS API is unreachable — skip getServices() to avoid build timeouts.
    // Treatment pages from local data are still pre-built; CMS service pages use dynamicParams.
    if (process.env.VERCEL) {
        return getAllTreatments().map((treatment) => ({
            slug: [treatment.parentServiceSlug, treatment.slug]
        }));
    }
    const services = await getServices().catch(() => []);
    const serviceParams = services.map((service: any) => ({ slug: [service.slug] }));
    const treatmentParams = getAllTreatments().map((treatment) => ({
        slug: [treatment.parentServiceSlug, treatment.slug]
    }));
    return [...serviceParams, ...treatmentParams];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params;
    const lastSlug = slug[slug.length - 1];

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

    // Check for Treatment
    const treatment = getTreatmentBySlug(lastSlug);
    if (treatment) {
        const title = `Best ${treatment.title} Specialists in Vellore — Cost-Effective & Expert Care | Indira Hospital`;
        const description = `${treatment.shortDescription} NABH accredited ${treatment.title} procedures at Indira Hospital, Vellore. Advanced technology, affordable costs, and same-day discharge in India.`;
        return {
            title,
            description,
            keywords: [
                treatment.title,
                `${treatment.title} cost in Vellore`,
                `${treatment.title} recovery time`,
                "Tamil Nadu",
                "India",
                `best surgeon for ${treatment.title}`,
                "Indira Hospital Vellore",
                "laser surgery India",
                "laparoscopy Tamil Nadu",
                ...treatment.features
            ],
            openGraph: {
                title,
                description,
                type: "article",
            }
        };
    }

    // Check for Service
    const service = await getServiceBySlug(lastSlug).catch(() => null) as any;
    if (!service) return { title: "Page Not Found" };

    const specialistTitle = getSpecialistTitle(service.title);
    const title = service.seo_title || `Best ${specialistTitle} in Vellore — Top-Rated Specialist Clinic | Indira Hospital`;
    const description = service.seo_description || `Searching for top ${specialistTitle.toLowerCase()} in Vellore? Indira Super Speciality Hospital offers world-class ${service.title.toLowerCase()} care, same-day appointments, and expert surgeons. Visit us today.`;
    return {
        title,
        description,
        keywords: [service.title, "best doctor in Vellore", "same day surgery", "Tamil Nadu", "India", "Indira Hospital", "treatment cost", "surgery Vellore"],
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    const lastSlug = slug[slug.length - 1];

    // --- 1. Check if it's a SITE-SPECIFIC TREATMENT (Hierarchy) ---
    const treatment = getTreatmentBySlug(lastSlug);
    let service: any | null = null;
    let procedures: string[] = [];
    let isTreatmentPage = false;

    if (treatment) {
        isTreatmentPage = true;
        // Adapt Treatment to Service structure
        service = {
            title: treatment.title,
            slug: treatment.slug,
            icon: "Scalpel", // Default icon
            short_description: treatment.shortDescription,
            full_description: treatment.fullDescription,
            faqs: treatment.faq,
            reviews: [] as any[],
            pricing: [] as any[],
            related_doctors: [] as any[],
            available_locations: [] as any[],
            technology: [] as any[],
            body_location: "",
            preparation: "",
            followup: "",
            how_performed: "",
            risks_description: "",
            duration_minutes: "",
            cost_range_min: "",
            cost_range_max: "",
            procedure_type: "MedicalProcedure"
        };
        procedures = treatment.features; // Use features as procedures

        // Find parent service to link stuff
        const parentService = await getServiceBySlug(treatment.parentServiceSlug).catch(() => null) as any;
        if (parentService) {
            (service as any).related_doctors = (parentService.related_doctors as any[]) || [];
            (service as any).available_locations = (parentService.available_locations as any[]) || [];
            (service as any).icon = parentService.icon; // Inherit icon
        }

    } else {
        // --- 2. Check if it's a STANDARD SERVICE ---
        // Use API with fallback
        service = await getServiceBySlug(lastSlug).catch(() => null);

        if (service) {
            // Get treatments from TREATMENT_DATA that belong to this service
            const relevantTreatments = getAllTreatments().filter(t => t.parentServiceSlug === lastSlug);

            // Get procedures from our static map
            const staticProcedures = serviceProcedures[lastSlug] || [];

            // Merge them, prioritizing items that have detailed pages
            const treatmentTitles = relevantTreatments.map(t => t.title);
            const otherProcedures = staticProcedures.filter(p => !treatmentTitles.includes(p));

            // We store objects with title and optional slug to handle linking
            procedures = [
                ...relevantTreatments.map(t => ({ title: t.title, slug: t.slug, isTreatment: true })),
                ...otherProcedures.map(p => ({ title: p, isTreatment: false }))
            ] as any;
        }
    }

    if (!service) notFound();

    // Fallback logic for doctors if M2M missing
    let relatedDoctors = (service.related_doctors as any[]) || [];
    if (relatedDoctors.length === 0) {
        const allDoc: any[] = await getDoctors().catch(() => []);
        relatedDoctors = allDoc.filter(
            (d) => {
                const dept = typeof d.department === 'string' ? d.department : (d.department as any)?.name || '';
                return dept.toLowerCase().includes(service.title.toLowerCase()) ||
                    service.title.toLowerCase().includes(dept.toLowerCase()) ||
                    (d.specialties && d.specialties.some((s: string) =>
                        service.title.toLowerCase().includes(s.toLowerCase()) ||
                        s.toLowerCase().includes(service.title.toLowerCase())
                    ));
            }
        ) as any;
    }
    const allServices = await getServices().catch(() => []);
    const otherServices = allServices.filter((s: any) => s.slug !== lastSlug);

    // Use usePathname for client-side context detection
    // This component is a Server Component, so usePathname cannot be called directly here.
    // The instruction implies this logic is for a client-side component like FloatingActionBar.
    // For the current server component, we'll keep the slug-based detection for initial render.
    // If a client component needs this, it would call usePathname itself.
    const isDentalPage = slug.some(s => s.toLowerCase().includes('dental') || s.toLowerCase().includes('dentistry'));
    const contactPhone = isDentalPage ? "+91 7010650063" : siteConfig.contact.phone;
    const contactWhatsapp = isDentalPage ? "917010650063" : siteConfig.contact.whatsapp;

    const whatsappUrl = `https://wa.me/${contactWhatsapp}?text=${encodeURIComponent(`Hi, I need information about ${service.title} at Indira Hospital.`)}`;

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen">
            <JsonLdSchema
                type="medicalProcedure"
                name={service.title}
                description={service.seo_description || service.full_description?.replace(/<[^>]*>?/gm, '').slice(0, 300) || service.short_description}
                url={`/doctor/near-me/treat/${slug.join('/')}`}
            />

            {/* ========== HERO ========== */}
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                
                {/* Elite Ambient Glows */}
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[150px] opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-48 pb-16 lg:pt-60 lg:pb-32 relative z-10">
                    <nav className="flex items-center text-sm text-indigo-300/60 mb-10 overflow-x-auto whitespace-nowrap italic">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2 opacity-40" />
                        <Link href="/doctor/near-me/treat" className="hover:text-white transition-colors">Treatments</Link>
                        {treatment && (
                            <>
                                <ChevronRight className="w-4 h-4 mx-2 opacity-40" />
                                <Link href={`/doctor/near-me/treat/${treatment.parentServiceSlug}`} className="hover:text-white transition-colors capitalize">
                                    {treatment.parentServiceSlug.replace('-', ' ')}
                                </Link>
                            </>
                        )}
                        <ChevronRight className="w-4 h-4 mx-2 opacity-40" />
                        <span className="text-white font-black">{service.title}</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row items-start gap-12">
                        <div className="flex-1">
                            <div className="elite-tag mb-10">
                                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" /> Advanced Treatment Centre • Vellore
                            </div>
                             <h1 className="elite-hero-title mb-10 text-left">
                                Best {service.title} in India<br />
                                <span className="elite-gradient-text">Centre of Excellence.</span>
                            </h1>
                            <p className="mt-4 text-xl sm:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light mb-12 opacity-80 italic">{service.short_description}</p>

                            <div className="flex flex-wrap gap-4 mt-12 mb-12">
                                {procedures.length > 0 && (
                                    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl px-5 py-3 shadow-2xl text-indigo-200">
                                        <CheckCircle2 className="w-5 h-5 text-amber-400" />
                                        <span className="text-xs font-black uppercase tracking-widest">{isTreatmentPage ? 'Key Features' : `${procedures.length}+ Procedures`}</span>
                                    </div>
                                )}
                                {relatedDoctors.length > 0 && (
                                    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl px-5 py-3 shadow-2xl text-indigo-200">
                                        <Users className="w-5 h-5 text-amber-400" />
                                        <span className="text-xs font-black uppercase tracking-widest">{relatedDoctors.length} Specialist{relatedDoctors.length > 1 ? 's' : ''}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-5">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                    className="elite-button-primary gap-3">
                                    <MessageCircle className="w-6 h-6" />
                                    Book Expert Consultation
                                </a>
                                <a href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                                    className="elite-button-secondary gap-3">
                                    <Phone className="w-5 h-5 text-fuchsia-400" />
                                    Talk to Specialist
                                </a>
                            </div>
                        </div>
                        
                        <div className="hidden lg:flex flex-shrink-0 lg:w-96 h-96 rounded-[3.5rem] bg-white/5 backdrop-blur-3xl border border-white/10 items-center justify-center text-white/20 shadow-2xl group overflow-hidden relative">
                             <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                             <div className="relative z-10 scale-150 group-hover:scale-[1.75] transition-transform duration-[2s]">
                                {iconMap[service.icon] || <Stethoscope className="h-24 w-24" />}
                             </div>
                             <div className="absolute top-0 right-0 p-8 opacity-20 capitalize text-[8px] font-black tracking-[0.5em] [writing-mode:vertical-lr]">Indira Elite Infrastructure</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== MAIN CONTENT ========== */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <Card className="p-8 border-none shadow-sm rounded-2xl">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                                <span className="bg-fuchsia-100 p-2 rounded-lg mr-3 text-fuchsia-600">
                                    <Stethoscope className="w-5 h-5" />
                                </span>
                                Best Hospital for {service.title} in Vellore, Tamil Nadu
                            </h2>
                            <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-6 italic">Best {service.title} in Vellore, Tamil Nadu</h3>
                            <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-base space-y-4" dangerouslySetInnerHTML={{ __html: injectInternalLinks(service.full_description) }} />
                        </Card>

                        {/* Procedures / Features Grid */}
                        {procedures.length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                    <span className="bg-fuchsia-100 p-2 rounded-lg mr-3 text-fuchsia-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </span>
                                    {isTreatmentPage ? 'Treatment Benefits & Features' : 'Treatments & Procedures'}
                                </h2>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {(procedures as any[]).map((proc) => {
                                        const title = typeof proc === 'string' ? proc : proc.title;
                                        const hasLink = !isTreatmentPage && typeof proc === 'object' && proc.isTreatment;
                                        const content = (
                                            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-950 hover:bg-fuchsia-50 dark:bg-fuchsia-950 transition-colors group h-full">
                                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700 dark:text-gray-300 group-hover:text-fuchsia-700 font-medium text-sm">{title}</span>
                                                {hasLink && <ChevronRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-fuchsia-400" />}
                                            </div>
                                        );

                                        if (hasLink) {
                                            return (
                                                <li key={title}>
                                                    <Link href={`/doctor/near-me/treat/${lastSlug}/${proc.slug}`} className="block h-full">
                                                        {content}
                                                    </Link>
                                                </li>
                                            );
                                        }

                                        return (
                                            <li key={title}>
                                                {content}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Card>
                        )}

                        {/* FAQs Section */}
                        <EntityFAQs
                            entityType={isTreatmentPage ? "treatment" : "service"}
                            entityName={service.title}
                            entitySlug={lastSlug}
                        />

                        {/* Doctors in this Service */}
                        {relatedDoctors.length > 0 && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                    <span className="bg-fuchsia-100 p-2 rounded-lg mr-3 text-fuchsia-600">
                                        <GraduationCap className="w-5 h-5" />
                                    </span>
                                    Best Doctors for {service.title} in Vellore, Tamil Nadu
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {relatedDoctors.map((doc) => (
                                        <DoctorCard key={doc.slug} doctor={doc} variant="compact" />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* If Treatment Page, Link to Parent Service */}
                        {isTreatmentPage && treatment && (
                            <Card className="p-6 border-none shadow-sm rounded-2xl bg-gradient-to-r from-fuchsia-50 to-fuchsia-50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">Explore Department</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">View all services in {treatment.parentServiceSlug}</p>
                                    </div>
                                    <Link href={`/doctor/near-me/treat/${treatment.parentServiceSlug}`} className="px-4 py-2 bg-white dark:bg-slate-900 text-fuchsia-700 font-semibold rounded-lg shadow-sm hover:shadow-md transition-all">
                                        View Department
                                    </Link>
                                </div>
                            </Card>
                        )}
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="lg:sticky lg:top-24 space-y-6">
                            {/* Entity Clinic Card */}
                            <Card className="p-6 border-none shadow-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                <h3 className="font-black text-slate-900 dark:text-white mb-4 text-lg border-b border-slate-200 dark:border-slate-700 pb-3 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-fuchsia-600" /> Indira Hospital, Vellore
                                </h3>
                                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                                    <p className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                                        <span>Recognized as the <strong>Best Hospital for {service.title}</strong> in North Tamil Nadu.</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <Award className="w-4 h-4 text-amber-500 mt-0.5" />
                                        <span>NABH Accredited & ISO Certified care quality.</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <Users className="w-4 h-4 text-blue-500 mt-0.5" />
                                        <span>Highly experienced <strong>Best Doctors for {service.title}</strong> on staff 24/7.</span>
                                    </p>
                                </div>
                            </Card>

                            {/* Book Appointment */}
                             <Card className="p-8 border border-white/10 shadow-2xl rounded-[3rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden group/side">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[40px] group-hover/side:bg-green-500/20 transition-colors" />
                                <div className="relative text-center">
                                    <div className="w-20 h-20 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover/side:scale-110 transition-transform">
                                        <MessageCircle className="w-10 h-10 text-green-400" />
                                    </div>
                                    <h4 className="font-black text-white text-2xl tracking-tight mb-2 uppercase italic">Free Cost Estimate</h4>
                                    <p className="text-slate-400 text-sm mt-1 mb-8 italic">No hidden charges. Get exact pricing, insurance coverage, and schedules in under 2 mins.</p>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-8 py-5 bg-green-500 hover:bg-green-600 text-white font-black rounded-2xl transition-all shadow-xl shadow-green-500/20 text-lg uppercase tracking-widest italic group-hover/side:scale-105">
                                        WhatsApp Now
                                    </a>
                                </div>
                            </Card>

                            {/* M2M: AVAILABLE LOCATIONS */}
                            {(service.available_locations as any[])?.length > 0 && (
                                <Card className="p-6 border-none shadow-sm rounded-2xl">
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-4">Available Near You</h3>
                                    <div className="flex flex-col gap-3">
                                        {(service.available_locations as any[]).map((loc: any) => (
                                            <LocationCard key={loc.slug} location={loc} variant="compact" />
                                        ))}
                                    </div>
                                </Card>
                            )}

                            {/* Other Services Quick Links */}
                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Other Treatments You May Need</h3>
                                <div className="flex flex-wrap gap-2">
                                    {otherServices.slice(0, 10).map((svc: any) => (
                                        <ServiceCard key={svc.slug} service={svc} variant="compact" />
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <HealthLibraryCard />

            <SectionContainer className="py-24 max-w-7xl mx-auto">
                <PeopleAlsoSearchCard
                    keywords={[
                        { text: `Best hospital for ${service.title} in Vellore`, href: `/doctor/near-me/treat/${slug.join('/')}` },
                        { text: `${service.title} surgery cost in India`, href: `/doctor/near-me/treat/${slug.join('/')}` },
                        { text: `Top ${service.title} specialists near me`, href: `/doctor/near-me/treat/${slug.join('/')}` },
                        { text: `Advanced ${service.title} treatment`, href: `/doctor/near-me/treat/${slug.join('/')}` },
                        { text: `Indira Hospital ${service.title} reviews`, href: `/doctor/near-me/treat/${slug.join('/')}` },
                        { text: `Laser ${service.title} surgery vellore`, href: `/doctor/near-me/treat/${slug.join('/')}` },
                    ]}
                />
            </SectionContainer>

            {/* ========== REVIEWS SECTION ========== */}
            <EntityReviews
                entityType={isTreatmentPage ? "service" : "service"}
                entityName={service.title}
                entitySlug={lastSlug}
                title={`${service.title} — Real Patient Results`}
                description={`Read verified reviews from patients who chose Indira Hospital for their ${service.title} procedure.`}
            />

            {/* UNIFIED ENTITY QUERIES */}
            <UnifiedEntitySection type="doctors" title="Our Expert Doctors" subtitle="Meet Our Specialists" featuredLimit={6} linkLimit={12} className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/50" />
            <UnifiedEntitySection type="departments" title="Our Departments" subtitle="Centres of Excellence" featuredLimit={6} linkLimit={12} className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800/50" />
            <UnifiedEntitySection type="locations" title="Hospital Near You" subtitle="Our Locations" featuredLimit={6} linkLimit={12} className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700" />

            <InternalLinkGrid type="diagnostics" title="Diagnostic Support" subtitle="Lab Tests for this Procedure" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-b" />
            <InternalLinkGrid type="health-packages" title="Post-Treatment Checkups" subtitle="Wellness Care" limit={8} className="bg-white dark:bg-slate-900 border-b" />

            {/* INTERNAL LINKING MESH */}
            <InternalLinkGrid
                type={isTreatmentPage ? "services" : "treatments"}
                parentSlug={isTreatmentPage ? undefined : lastSlug}
                title={isTreatmentPage ? "Explore Other Specialities" : `Specialized Procedures`}
                subtitle={isTreatmentPage ? "Comprehensive Care" : `Under ${service.title}`}
                limit={24}
                className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50"
            />
        </div >
    );
}
