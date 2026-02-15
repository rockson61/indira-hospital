import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug } from "@/lib/api";
import { SEED_DATA } from "@/lib/data/seed-data";
import { getTreatmentBySlug, getAllTreatments } from "@/lib/data/treatment-data";
import { getImageUrl } from "@/lib/utils";
import {
    ChevronRight, CheckCircle2, Stethoscope, Heart, Activity, Baby,
    Siren, Smile, Brain, Ribbon, Droplets, MessageCircle, Phone, Award,
    Users, Clock, Shield, Star, MapPin, Zap, ArrowRight, GraduationCap,
    Banknote, HelpCircle, Quote, Info
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { injectInternalLinks } from "@/lib/html-linkify";

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
    dental: ["Root Canal Treatment", "Dental Implants", "Orthodontics (Braces)", "Cosmetic Dentistry", "Teeth Whitening", "Oral & Maxillofacial Surgery", "Wisdom Tooth Extraction", "Dental Crowns & Bridges"],
    neurology: ["Stroke Management", "Epilepsy Treatment", "Migraine & Headache Clinic", "Parkinson's Disease Care", "EEG & EMG Studies", "Peripheral Neuropathy", "Multiple Sclerosis Treatment", "Nerve Conduction Studies"],
    oncology: ["Cancer Screening", "Chemotherapy", "Targeted Therapy", "Immunotherapy", "Surgical Oncology", "Palliative Care", "Biopsy & Diagnosis", "Cancer Rehabilitation"],
    nephrology: ["Dialysis Services", "Chronic Kidney Disease", "Kidney Stone Management", "Hypertension Treatment", "Electrolyte Disorders", "Pre-Transplant Evaluation", "Glomerulonephritis Care", "Diabetic Nephropathy"],
};

// RockSEO Guides Map
const rockseoGuides: Record<string, { title: string; url: string; description?: string }[]> = {
    "dental-implants": [
        { title: "Single Tooth Implant Cost", url: "/services/dental-implants/single-tooth-implant-cost", description: "Detailed cost breakdown in Vellore" },
        { title: "All-on-4 Implants Guide", url: "/services/dental-implants/all-on-4-implants-guide", description: "Full mouth fixed teeth in 3 days" },
        { title: "Procedure Steps", url: "/services/dental-implants/dental-implant-procedure-steps", description: "Step-by-step guide to surgery" },
        { title: "Recovery Time", url: "/services/dental-implants/dental-implant-recovery-time", description: "Healing timeline and tips" },
    ],
    "root-canal-treatment": [
        { title: "Single Sitting Root Canal", url: "/services/root-canal-treatment/single-sitting-root-canal", description: "Painless treatment in 60 mins" },
    ],
    "orthodontics": [
        { title: "Invisalign Treatment Guide", url: "/services/orthodontics/invisalign-treatment-guide", description: "Clear aligners cost and process" },
    ],
    "cosmetic-dentistry": [
        { title: "Teeth Whitening Guide", url: "/services/cosmetic-dentistry/teeth-whitening-guide", description: "Laser whitening cost & details" },
        { title: "Dental Veneers Types", url: "/services/cosmetic-dentistry/dental-veneers-types", description: "Ceramic vs Composite Veneers" },
    ]
};

export function generateStaticParams() {
    const serviceParams = SEED_DATA.services.map((service) => ({ slug: [service.slug] }));
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
            title: `${treatment.title} Treatment in Vellore | Indira Hospital`,
            description: treatment.shortDescription,
            keywords: [treatment.title, "Vellore", "Treatment", "Hospital", ...treatment.features]
        };
    }

    // Check for Service
    const service = SEED_DATA.services.find((s) => s.slug === lastSlug) as any;
    if (!service) return { title: "Page Not Found" };

    return {
        title: service.seo_title || `${service.title} - Best ${service.title} Treatment in Vellore | Indira Hospital`,
        description: service.seo_description || `${service.full_description?.substring(0, 160) || service.short_description} Book appointment on WhatsApp at Indira Super Speciality Hospital, Vellore.`,
        keywords: [service.title, "Vellore", "Indira Hospital", "best hospital", "treatment", "surgery"],
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
        const parentService = SEED_DATA.services.find(s => s.slug === treatment.parentServiceSlug) as any;
        if (parentService) {
            (service as any).related_doctors = (parentService.related_doctors as any[]) || [];
            (service as any).available_locations = (parentService.available_locations as any[]) || [];
            (service as any).icon = parentService.icon; // Inherit icon
        }

    } else {
        // --- 2. Check if it's a STANDARD SERVICE ---
        // Use API with fallback
        service = await getServiceBySlug(lastSlug).catch(() => null);
        if (!service) {
            service = SEED_DATA.services.find((s) => s.slug === lastSlug) as any;
        }

        if (service) {
            procedures = serviceProcedures[lastSlug] || [];
        }
    }

    if (!service) notFound();

    const guides = rockseoGuides[lastSlug] || [];

    // Fallback logic for doctors if M2M missing
    let relatedDoctors = (service.related_doctors as any[]) || [];
    if (relatedDoctors.length === 0) {
        relatedDoctors = SEED_DATA.doctors.filter(
            (d) => {
                const dept = typeof d.department === 'string' ? d.department : (d.department as any)?.name || '';
                return dept.toLowerCase().includes(service.title.toLowerCase()) ||
                    service.title.toLowerCase().includes(dept.toLowerCase()) ||
                    d.specialties.some(s =>
                        service.title.toLowerCase().includes(s.toLowerCase()) ||
                        s.toLowerCase().includes(service.title.toLowerCase())
                    );
            }
        ) as any;
    }
    const otherServices = SEED_DATA.services.filter((s) => s.slug !== lastSlug);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I need information about ${service.title} at Indira Hospital.`)}`;

    // JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": isTreatmentPage ? "MedicalProcedure" : (service.procedure_type || "MedicalProcedure"),
        name: service.title,
        url: `https://www.indirasuperspecialityhospital.com/services/${slug.join('/')}`,
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
            <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
                    <nav className="flex items-center text-sm text-purple-200 mb-8 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        {treatment && (
                            <>
                                <ChevronRight className="w-4 h-4 mx-2" />
                                <Link href={`/departments/${treatment.parentServiceSlug}`} className="hover:text-white transition-colors capitalize">
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
                            <p className="mt-4 text-lg text-purple-100 max-w-3xl leading-relaxed">{service.short_description}</p>

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
                                <a href="tel:+919842342525"
                                    className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl transition-colors border border-white/20">
                                    <Phone className="w-5 h-5 mr-2" />
                                    +91 98423 42525
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
                                <span className="bg-purple-100 p-2 rounded-lg mr-3 text-purple-600">
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
                                    <span className="bg-blue-100 p-2 rounded-lg mr-3 text-blue-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </span>
                                    {isTreatmentPage ? 'Treatment Benefits & Features' : 'Treatments & Procedures'}
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {procedures.map((proc) => (
                                        <div key={proc} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors group">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 group-hover:text-purple-800 font-medium text-sm">{proc}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}

                        {/* FAQs Section */}
                        {service.faqs && service.faqs.length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-blue-100 p-2 rounded-lg mr-3 text-blue-600">
                                        <HelpCircle className="w-5 h-5" />
                                    </span>
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {service.faqs.map((faq: any, index: number) => (
                                        <details key={index} className="group bg-gray-50 rounded-xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                                                {faq.question}
                                                <ChevronRight className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-90" />
                                            </summary>
                                            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </Card>
                        )}

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
                                        <Link key={doc.slug} href={`/doctors/${doc.slug}`}
                                            className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-center gap-4 hover:shadow-md transition-all">
                                            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                                                {doc.image && getImageUrl(doc.image) ? (
                                                    <img src={getImageUrl(doc.image)!} alt={doc.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <span className="text-purple-700 font-bold text-lg">{doc.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}</span>
                                                )}
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="font-bold text-gray-900 truncate group-hover:text-purple-700 transition-colors">{doc.name}</h3>
                                                <p className="text-gray-500 text-sm truncate">{doc.designation}</p>
                                                <p className="text-xs text-gray-400 mt-0.5">{doc.experience_years}+ Years Experience</p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-purple-600 ml-auto flex-shrink-0 transition-colors" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* If Treatment Page, Link to Parent Service */}
                        {isTreatmentPage && treatment && (
                            <Card className="p-6 border-none shadow-sm rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Explore Department</h3>
                                        <p className="text-sm text-gray-600">View all services in {treatment.parentServiceSlug}</p>
                                    </div>
                                    <Link href={`/departments/${treatment.parentServiceSlug}`} className="px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg shadow-sm hover:shadow-md transition-all">
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
                                            <Link
                                                key={loc.slug}
                                                href={`/locations/${loc.slug}`}
                                                className="flex items-center group p-3 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors"
                                            >
                                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mr-3 text-purple-600">
                                                    <MapPin className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-purple-700">{loc.name}</p>
                                                    <p className="text-xs text-gray-500">{loc.district}</p>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 ml-auto" />
                                            </Link>
                                        ))}
                                    </div>
                                </Card>
                            )}

                            {/* Other Services Quick Links */}
                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 mb-4">Related Services</h3>
                                <div className="flex flex-wrap gap-2">
                                    {otherServices.slice(0, 8).map((svc) => (
                                        <Link key={svc.slug} href={`/services/${svc.slug}`}
                                            className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-purple-50 hover:text-purple-700 transition-colors">
                                            {svc.title}
                                        </Link>
                                    ))}
                                </div>
                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
