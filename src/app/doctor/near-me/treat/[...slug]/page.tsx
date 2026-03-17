import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServices, getServiceBySlug, getDoctors } from "@/lib/api";
import { siteConfig } from "@/config/site";
import { getTreatmentBySlug, getAllTreatments } from "@/lib/data/treatment-data";
import { getImageUrl } from "@/lib/utils";
import { ChevronRight, CheckCircle2, Siren, Ribbon, MessageCircle, Phone, Award, Users, Clock, Star, MapPin, ArrowRight, GraduationCap, Banknote, HelpCircle, Quote, Info, Sparkles, Shield } from "lucide-react";
import { Stethoscope, Heart, HeartCardiogram, Baby0203m, Happy, Neurology, BloodDrop, Electricity } from "healthicons-react/outline";
import { Card } from "@/components/ui/card";
import { injectInternalLinks } from "@/lib/html-linkify";
import EntityReviews from "@/components/trust/EntityReviews";

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

    // Check for Treatment
    const treatment = getTreatmentBySlug(lastSlug);
    if (treatment) {
        const title = `${treatment.title} Treatment Cost, Recovery & Experts in Vellore, Tamil Nadu | Indira Hospital`;
        const description = `${treatment.shortDescription} Leading ${treatment.title} specialists at Indira Hospital, Vellore. Advanced laparoscopic & laser options with same-day discharge in India.`;
        return {
            title,
            description,
            keywords: [
                treatment.title,
                `${treatment.title} cost in Vellore`,
                `${treatment.title} recovery time`,
                "Tamil Nadu",
                "India",
                "best surgeon for ${treatment.title}",
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
    const service = await getServiceBySlug(lastSlug).catch(() => null);
    if (!service) return { title: "Page Not Found" };

    return {
        title: service.seo_title || `${service.title} Specialists & Procedures in Vellore, Tamil Nadu | Indira Hospital`,
        description: service.seo_description || `${service.full_description?.replace(/<[^>]*>?/gm, '').substring(0, 140) || service.short_description} Expert ${service.title} care at Indira Hospital, India. High success rates & affordable costs.`,
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

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I need information about ${service.title} at Indira Hospital.`)}`;

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen">
            <JsonLdSchema
                type="medicalProcedure"
                name={service.title}
                description={service.seo_description || service.full_description?.replace(/<[^>]*>?/gm, '').slice(0, 300) || service.short_description}
                url={`/doctor/near-me/treat/${slug.join('/')}`}
            />

            {/* ========== HERO ========== */}
            <section className="relative bg-gradient-to-br from-fuchsia-900 via-fuchsia-700 to-fuchsia-700 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-48 pb-16 lg:pt-56 lg:pb-20 relative z-10">
                    <nav className="flex items-center text-sm text-fuchsia-200 mb-8 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/doctor/near-me/treat" className="hover:text-white transition-colors">Treatments</Link>
                        {treatment && (
                            <>
                                <ChevronRight className="w-4 h-4 mx-2" />
                                <Link href={`/doctor/near-me/treat/${treatment.parentServiceSlug}`} className="hover:text-white transition-colors capitalize">
                                    {treatment.parentServiceSlug.replace('-', ' ')}
                                </Link>
                            </>
                        )}
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-white font-medium">{service.title}</span>
                    </nav>

                    <div className="flex items-start gap-6">
                        <div className="hidden sm:flex h-16 w-16 rounded-2xl bg-white/10 backdrop-blur items-center justify-center text-white">
                            {iconMap[service.icon] || <Stethoscope className="h-8 w-8" />}
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{service.title} in Vellore, Tamil Nadu</h1>
                            <p className="mt-4 text-lg text-fuchsia-100 max-w-3xl leading-relaxed">{service.short_description}</p>

                            <div className="flex flex-wrap gap-4 mt-6">
                                {procedures.length > 0 && (
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                                        <CheckCircle2 className="w-5 h-5 text-amber-400" />
                                        <span className="text-sm font-medium">{isTreatmentPage ? 'Key Features' : `${procedures.length}+ Procedures`}</span>
                                    </div>
                                )}
                                {relatedDoctors.length > 0 && (
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                                        <Users className="w-5 h-5 text-amber-400" />
                                        <span className="text-sm font-medium">{relatedDoctors.length} Specialist{relatedDoctors.length > 1 ? 's' : ''}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 text-lg">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Book on WhatsApp — It&apos;s Free
                                </a>
                                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                                    className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl transition-colors border border-white/20">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Talk to a Doctor Now
                                </a>
                            </div>
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
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                <span className="bg-fuchsia-100 p-2 rounded-lg mr-3 text-fuchsia-600">
                                    <Stethoscope className="w-5 h-5" />
                                </span>
                                About {service.title} — What You Need to Know
                            </h2>
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
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                    <span className="bg-fuchsia-100 p-2 rounded-lg mr-3 text-fuchsia-600">
                                        <GraduationCap className="w-5 h-5" />
                                    </span>
                                    Surgeons Who Specialise in {service.title}
                                </h2>
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
                            {/* Book Appointment */}
                            <Card className="p-6 border-none shadow-lg rounded-2xl bg-gradient-to-br from-green-50 to-pink-50">
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MessageCircle className="w-7 h-7 text-green-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Get a Free Cost Estimate</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-5">No hidden charges. Get exact pricing, insurance coverage, and available dates in under 2 minutes.</p>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-md text-base">
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        Get Free Estimate on WhatsApp
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
