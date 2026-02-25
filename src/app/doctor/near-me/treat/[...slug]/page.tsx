import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug } from "@/lib/api";
import { getServices, getDoctors } from "@/lib/api";
import { getTreatmentBySlug, getAllTreatments } from "@/lib/data/treatment-data";
import { getImageUrl } from "@/lib/utils";
import {
    ChevronRight, CheckCircle2, Stethoscope, Heart, Activity, Baby,
    Siren, Smile, Brain, Ribbon, Droplets, MessageCircle, Phone, Award,
    Users, Clock, Shield, Star, MapPin, Zap, ArrowRight, GraduationCap,
    Banknote, HelpCircle, Quote, Info, Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { injectInternalLinks } from "@/lib/html-linkify";
import EntityReviews from "@/components/trust/EntityReviews";
import { clinicConfig } from "@/lib/data/clinic-config";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { ServiceCard } from "@/components/entities/ServiceCard";
import { LocationCard } from "@/components/entities/LocationCard";
import { DepartmentCard } from "@/components/entities/DepartmentCard";
import EntityFAQs from "@/components/trust/EntityFAQs";

const WHATSAPP_NUMBER = "917010650063";

// Icon map for services
const iconMap: Record<string, React.ReactNode> = {
    Scalpel: <Stethoscope className="h-8 w-8" />,
    Activity: <Activity className="h-8 w-8" />,
    Stethoscope: <Stethoscope className="h-8 w-8" />,
    Baby: <Baby className="h-8 w-8" />,
    Bone: <Activity className="h-8 w-8" />,
    Heart: <Heart className="h-8 w-8" />,
    Siren: <Siren className="h-8 w-8" />,
    Smile: <Smile className="h-8 w-8" />,
    Brain: <Brain className="h-8 w-8" />,
    Ribbon: <Ribbon className="h-8 w-8" />,
    Droplets: <Droplets className="h-8 w-8" />,
    Zap: <Zap className="h-8 w-8" />,
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
    dentistry: ["Maxillofacial Surgery", "Orthognathic Procedures", "Dental Implants", "Orthodontics", "Root Canal Treatment", "Smile Makeover", "Full Mouth Rehabilitation", "Pediatric Dentistry"],
    neurology: ["Stroke Management", "Epilepsy Treatment", "Migraine & Headache Clinic", "Parkinson's Disease Care", "EEG & EMG Studies", "Peripheral Neuropathy", "Multiple Sclerosis Treatment", "Nerve Conduction Studies"],
    oncology: ["Cancer Screening", "Chemotherapy", "Targeted Therapy", "Immunotherapy", "Surgical Oncology", "Palliative Care", "Biopsy & Diagnosis", "Cancer Rehabilitation"],
    nephrology: ["Dialysis Services", "Chronic Kidney Disease", "Kidney Stone Management", "Hypertension Treatment", "Electrolyte Disorders", "Pre-Transplant Evaluation", "Glomerulonephritis Care", "Diabetic Nephropathy"],
};

// RockSEO Guides Map (Updated to new URL structure)
const rockseoGuides: Record<string, { title: string; url: string; description?: string }[]> = {
    "general-surgery": [
        { title: "Laser Piles Treatment", url: "/doctor/near-me/treat/general-surgery/laser-piles-treatment-cost" },
        { title: "Laparoscopic Hernia Repair", url: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair" },
        { title: "Thyroid Surgery Guide", url: "/doctor/near-me/treat/general-surgery/thyroid-surgery-guide" },
        { title: "Gallbladder Removal", url: "/doctor/near-me/treat/general-surgery/gallbladder-removal-recovery" },
    ],
    "gastroenterology": [
        { title: "Endoscopy Procedure Guide", url: "/doctor/near-me/treat/gastroenterology/endoscopy-procedure-guide" },
        { title: "Colonoscopy Cost", url: "/doctor/near-me/treat/gastroenterology/colonoscopy-screening-cost" },
        { title: "Fatty Liver Treatment", url: "/doctor/near-me/treat/gastroenterology/fatty-liver-treatment-diet" },
    ],
    "urology": [
        { title: "Kidney Stone Laser Surgery", url: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
        { title: "Prostate TURP Surgery", url: "/doctor/near-me/treat/urology/prostate-turp-surgery" },
        { title: "UTI Treatment Guide", url: "/doctor/near-me/treat/urology/urinary-tract-infection-treatment" },
    ],
    "obstetrics-gynaecology": [
        { title: "Normal Delivery vs C-Section", url: "/doctor/near-me/treat/obstetrics-gynaecology/normal-delivery-vs-c-section" },
        { title: "High Risk Pregnancy Care", url: "/doctor/near-me/treat/obstetrics-gynaecology/high-risk-pregnancy-care" },
        { title: "PCOS/PCOD Treatment", url: "/doctor/near-me/treat/obstetrics-gynaecology/pcod-pcos-treatment-guide" },
    ],
    "orthopaedics": [
        { title: "Knee Replacement Cost", url: "/doctor/near-me/treat/orthopaedics/total-knee-replacement-cost" },
        { title: "ACL Recovery Guide", url: "/doctor/near-me/treat/orthopaedics/acl-reconstruction-recovery" },
        { title: "Hip Replacement Surgery", url: "/doctor/near-me/treat/orthopaedics/hip-replacement-surgery-guide" },
    ],
    "cardiology": [
        { title: "Heart Angioplasty Guide", url: "/doctor/near-me/treat/cardiology/heart-angioplasty-procedure" },
        { title: "Coronary Angiography", url: "/doctor/near-me/treat/cardiology/coronary-angiography-guide" },
        { title: "Pacemaker Implantation", url: "/doctor/near-me/treat/cardiology/pacemaker-implantation-steps" },
    ],
    "neurology": [
        { title: "Stroke Recovery Exercises", url: "/doctor/near-me/treat/neurology/stroke-recovery-exercises" },
        { title: "Epilepsy Treatment Options", url: "/doctor/near-me/treat/neurology/epilepsy-treatment-options" },
        { title: "Migraine Management", url: "/doctor/near-me/treat/neurology/migraine-relief-management" },
    ],
    "oncology": [
        { title: "Chemotherapy Side Effects", url: "/doctor/near-me/treat/oncology/chemotherapy-side-effects" },
        { title: "Breast Cancer Screening", url: "/doctor/near-me/treat/oncology/breast-cancer-screening-guide" },
        { title: "Surgical Oncology", url: "/doctor/near-me/treat/oncology/surgical-oncology-overview" },
    ],
    "nephrology": [
        { title: "Dialysis Procedure Guide", url: "/doctor/near-me/treat/nephrology/dialysis-procedure-guide" },
        { title: "Chronic Kidney Disease", url: "/doctor/near-me/treat/nephrology/chronic-kidney-disease-stages" },
        { title: "Diabetic Nephropathy", url: "/doctor/near-me/treat/nephrology/diabetic-nephropathy-prevention" },
    ]
};

export async function generateStaticParams() {
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
        return {
            title: `${treatment.title} Treatment in India & Tamil Nadu | Indira Hospital`,
            description: treatment.shortDescription,
            keywords: [treatment.title, "Tamil Nadu", "India", "Treatment", "Hospital", ...treatment.features]
        };
    }

    // Check for Service
    const service = await getServiceBySlug(lastSlug).catch(() => null);
    if (!service) return { title: "Page Not Found" };

    return {
        title: service.seo_title || `${service.title} - Best ${service.title} Treatment in Tamil Nadu & India | Indira Hospital`,
        description: service.seo_description || `${service.full_description?.replace(/<[^>]*>?/gm, '').substring(0, 160) || service.short_description} Book appointment on WhatsApp at Indira Super Speciality Hospital.`,
        keywords: [service.title, "Tamil Nadu", "India", "Indira Hospital", "best hospital", "treatment", "surgery"],
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
            procedures = serviceProcedures[lastSlug] || [];
        }
    }

    if (!service) notFound();

    const guides = rockseoGuides[lastSlug] || [];

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

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I need information about ${service.title} at Indira Hospital.`)}`;

    // JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": isTreatmentPage ? "MedicalProcedure" : (service.procedure_type || "MedicalProcedure"),
        name: service.title,
        url: `https://www.indirasuperspecialityhospital.com/doctor/near-me/treat/${slug.join('/')}`,
        description: service.seo_description || service.full_description?.replace(/<[^>]*>?/gm, '').slice(0, 300) || service.short_description,
        provider: {
            "@type": "Hospital",
            name: "Indira Super Speciality Hospital",
            url: "https://www.indirasuperspecialityhospital.com",
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ========== HERO ========== */}
            <section className="relative bg-gradient-to-br from-teal-900 via-teal-700 to-teal-700 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
                    <nav className="flex items-center text-sm text-teal-200 mb-8 overflow-x-auto whitespace-nowrap">
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
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{service.title}</h1>
                            <p className="mt-4 text-lg text-teal-100 max-w-3xl leading-relaxed">{service.short_description}</p>

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
                                    Book on WhatsApp
                                </a>
                                <a href={`tel:${clinicConfig.phone.replace(/\s+/g, '')}`}
                                    className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl transition-colors border border-white/20">
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
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <Card className="p-8 border-none shadow-sm rounded-2xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="bg-teal-100 p-2 rounded-lg mr-3 text-teal-600">
                                    <Stethoscope className="w-5 h-5" />
                                </span>
                                About {service.title}
                            </h2>
                            <div className="text-gray-600 leading-relaxed text-base space-y-4" dangerouslySetInnerHTML={{ __html: injectInternalLinks(service.full_description) }} />
                        </Card>

                        {/* Procedures / Features Grid */}
                        {procedures.length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-teal-100 p-2 rounded-lg mr-3 text-teal-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </span>
                                    {isTreatmentPage ? 'Treatment Benefits & Features' : 'Treatments & Procedures'}
                                </h2>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {procedures.map((proc) => (
                                        <li key={proc} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-teal-50 transition-colors group">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 group-hover:text-teal-700 font-medium text-sm">{proc}</span>
                                        </li>
                                    ))}
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
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-teal-100 p-2 rounded-lg mr-3 text-teal-600">
                                        <GraduationCap className="w-5 h-5" />
                                    </span>
                                    Our {service.title} Specialists
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
                            <Card className="p-6 border-none shadow-sm rounded-2xl bg-gradient-to-r from-teal-50 to-teal-50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Explore Department</h3>
                                        <p className="text-sm text-gray-600">View all services in {treatment.parentServiceSlug}</p>
                                    </div>
                                    <Link href={`/doctor/near-me/treat/${treatment.parentServiceSlug}`} className="px-4 py-2 bg-white text-teal-700 font-semibold rounded-lg shadow-sm hover:shadow-md transition-all">
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
                            <Card className="p-6 border-none shadow-lg rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MessageCircle className="w-7 h-7 text-green-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg">Book Appointment</h3>
                                    <p className="text-gray-500 text-sm mt-1 mb-5">Chat with us for instant booking, cost estimates, and availability.</p>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-md text-base">
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        WhatsApp Now
                                    </a>
                                </div>
                            </Card>

                            {/* M2M: AVAILABLE LOCATIONS */}
                            {(service.available_locations as any[])?.length > 0 && (
                                <Card className="p-6 border-none shadow-sm rounded-2xl">
                                    <h3 className="font-bold text-gray-900 mb-4">Available at Locations</h3>
                                    <div className="flex flex-col gap-3">
                                        {(service.available_locations as any[]).map((loc: any) => (
                                            <LocationCard key={loc.slug} location={loc} variant="compact" />
                                        ))}
                                    </div>
                                </Card>
                            )}

                            {/* RockSEO: TREATMENT GUIDES (SPOKES) */}
                            {guides.length > 0 && (
                                <Card className="p-6 border-none shadow-sm rounded-2xl bg-gradient-to-br from-teal-50 to-teal-50 border border-teal-100">
                                    <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                        <Sparkles className="w-5 h-5 text-teal-600 mr-2" />
                                        Advanced Guides
                                    </h3>
                                    <ul className="space-y-3">
                                        {guides.map((guide, idx) => (
                                            <li key={idx}>
                                                <Link
                                                    href={guide.url}
                                                    className="block p-3 rounded-xl bg-white/60 hover:bg-white transition-all border border-transparent hover:border-teal-200 group shadow-sm hover:shadow"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-sm font-semibold text-gray-800 group-hover:text-teal-700">{guide.title}</span>
                                                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
                                                    </div>
                                                    {guide.description && (
                                                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{guide.description}</p>
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            )}

                            {/* Other Services Quick Links */}
                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 mb-4">Related Services</h3>
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

            {/* ========== REVIEWS SECTION ========== */}
            <EntityReviews
                entityType={isTreatmentPage ? "service" : "service"}
                entityName={service.title}
                entitySlug={lastSlug}
                title={`Verified Reviews for ${service.title}`}
                description={`What our patients are saying about their ${service.title} experience at Indira Hospital.`}
            />
        </div >
    );
}
