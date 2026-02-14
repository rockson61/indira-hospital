import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug } from "@/lib/api";
import { SEED_DATA } from "@/lib/data/seed-data";
import { getImageUrl } from "@/lib/utils";
import {
    ChevronRight, CheckCircle2, Stethoscope, Heart, Activity, Baby,
    Siren, Smile, Brain, Ribbon, Droplets, MessageCircle, Phone, Award,
    Users, Clock, Shield, Star, MapPin, Zap, ArrowRight, GraduationCap,
    Banknote, HelpCircle, Quote, Info
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { injectInternalLinks } from "@/lib/html-linkify"; // Import utility

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
    return SEED_DATA.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = SEED_DATA.services.find((s) => s.slug === slug);
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} - Best ${service.title} Treatment in Vellore | Indira Hospital`,
        description: `${service.full_description?.substring(0, 160) || service.short_description} Book appointment on WhatsApp at Indira Super Speciality Hospital, Vellore.`,
        keywords: [service.title, "Vellore", "Indira Hospital", "best hospital", "treatment", "surgery"],
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Use API with fallback
    let service = await getServiceBySlug(slug).catch(() => null);
    if (!service) {
        service = SEED_DATA.services.find((s) => s.slug === slug) as any;
    }

    if (!service) notFound();

    const procedures = serviceProcedures[slug] || [];
    const guides = rockseoGuides[slug] || [];

    // Use M2M related doctors if available, else fallback to seed logic
    let relatedDoctors = (service.related_doctors as any[]) || [];

    if (relatedDoctors.length === 0) {
        relatedDoctors = SEED_DATA.doctors.filter(
            (d) => {
                const dept = typeof d.department === 'string' ? d.department : (d.department as any)?.name || '';
                return dept.toLowerCase() === service!.title.toLowerCase() ||
                    d.specialties.some(s =>
                        service!.title.toLowerCase().includes(s.toLowerCase()) ||
                        s.toLowerCase().includes(service!.title.toLowerCase())
                    );
            }
        ) as any;
    }
    const otherServices = SEED_DATA.services.filter((s) => s.slug !== slug);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I need information about ${service.title} at Indira Hospital.`)}`;

    // JSON-LD — enhanced with MedicalProcedure schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": service.procedure_type || "MedicalProcedure",
        name: service.title,
        url: `https://www.indirasuperspecialityhospital.com/services/${slug}`,
        description: service.full_description?.replace(/<[^>]*>?/gm, '').slice(0, 300) || service.short_description,
        ...(service.body_location && { bodyLocation: service.body_location }),
        ...(service.preparation && { preparation: service.preparation.replace(/<[^>]*>?/gm, '') }),
        ...(service.followup && { followup: service.followup.replace(/<[^>]*>?/gm, '') }),
        ...(service.how_performed && { howPerformed: service.how_performed.replace(/<[^>]*>?/gm, '') }),
        ...(service.risks_description && { risks: service.risks_description.replace(/<[^>]*>?/gm, '') }),
        ...(service.duration_minutes && { procedureType: `Duration: ${service.duration_minutes} minutes` }),
        ...((service.cost_range_min || service.cost_range_max) && {
            offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                ...(service.cost_range_min && { lowPrice: service.cost_range_min }),
                ...(service.cost_range_max && { highPrice: service.cost_range_max }),
            }
        }),
        provider: {
            "@type": "Hospital",
            name: "Indira Super Speciality Hospital",
            url: "https://www.indirasuperspecialityhospital.com",
            address: { "@type": "PostalAddress", streetAddress: "Katpadi Road", addressLocality: "Vellore", addressRegion: "Tamil Nadu", postalCode: "632004", addressCountry: "IN" },
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
                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-sm text-purple-200 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
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

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-4 mt-6">
                                {procedures.length > 0 && (
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                                        <CheckCircle2 className="w-5 h-5 text-amber-400" />
                                        <span className="text-sm font-medium">{procedures.length}+ Procedures</span>
                                    </div>
                                )}
                                {relatedDoctors.length > 0 && (
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                                        <Users className="w-5 h-5 text-amber-400" />
                                        <span className="text-sm font-medium">{relatedDoctors.length} Specialist{relatedDoctors.length > 1 ? 's' : ''}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                                    <MapPin className="w-5 h-5 text-amber-400" />
                                    <span className="text-sm font-medium">Indira Hospital, Vellore</span>
                                </div>
                                {/* M2M: Locations Count */}
                                {(service.available_locations as any[])?.length > 0 && (
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2.5">
                                        <MapPin className="w-5 h-5 text-amber-400" />
                                        <span className="text-sm font-medium">Available at {(service.available_locations as any[]).length} Locations</span>
                                    </div>
                                )}
                            </div>

                            {/* CTA Buttons */}
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
                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <Card className="p-8 border-none shadow-sm rounded-2xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="bg-purple-100 p-2 rounded-lg mr-3 text-purple-600">
                                    <Stethoscope className="w-5 h-5" />
                                </span>
                                About {service.title}
                            </h2>
                            {/* Rich Text Rendering */}
                            <div className="text-gray-600 leading-relaxed text-base space-y-4" dangerouslySetInnerHTML={{ __html: injectInternalLinks(service.full_description) }} />

                            <div className="mt-6 p-4 bg-purple-50 rounded-xl">
                                <p className="text-sm text-gray-700">
                                    Also visit our{" "}
                                    <Link href={`/departments/${service.slug}`} className="text-purple-700 font-semibold hover:underline">
                                        {service.title} Department
                                    </Link>{" "}
                                    for detailed clinical information.
                                </p>
                            </div>
                        </Card>


                        {/* Procedures Grid */}
                        {procedures.length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-blue-100 p-2 rounded-lg mr-3 text-blue-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </span>
                                    Treatments & Procedures
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

                        {/* Technology Section */}
                        {service.technology && service.technology.length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-indigo-100 p-2 rounded-lg mr-3 text-indigo-600">
                                        <Zap className="w-5 h-5" />
                                    </span>
                                    Advanced Technology
                                </h2>
                                <div className="grid gap-4">
                                    {service.technology.map((tech: any, index: number) => (
                                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-indigo-50/50 border border-indigo-100">
                                            <div className="bg-white p-2 rounded-lg shadow-sm text-indigo-600">
                                                {iconMap[tech.icon] || <Zap className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">{tech.name}</h3>
                                                <p className="text-sm text-gray-600 mt-1">{tech.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}

                        {/* Pricing Section */}
                        {service.pricing && service.pricing.length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl bg-gradient-to-br from-gray-50 to-white">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-green-100 p-2 rounded-lg mr-3 text-green-600">
                                        <Banknote className="w-5 h-5" />
                                    </span>
                                    Treatment Packages & Cost
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.pricing.map((pkg: any, index: number) => (
                                        <div key={index} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <h3 className="font-bold text-gray-900 mb-2">{pkg.package_name}</h3>
                                            <div className="text-2xl font-bold text-green-600 mb-3">{pkg.cost}</div>
                                            <ul className="space-y-2 mb-4">
                                                {pkg.features.map((feat: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                                        {feat}
                                                    </li>
                                                ))}
                                            </ul>
                                            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I am interested in the ${pkg.package_name} for ${service.title}.`)}`}
                                                target="_blank" rel="noopener noreferrer"
                                                className="block w-full text-center py-2 rounded-lg bg-green-50 text-green-700 text-sm font-semibold hover:bg-green-100 transition-colors">
                                                Get Quote
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center">* Prices are indicative and may vary based on patient condition and room choice.</p>
                            </Card>
                        )}

                        {/* Reviews Section */}
                        {service.reviews && service.reviews.length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-yellow-100 p-2 rounded-lg mr-3 text-yellow-600">
                                        <Star className="w-5 h-5" />
                                    </span>
                                    Patient Stories
                                </h2>
                                <div className="grid gap-4">
                                    {service.reviews.map((review: any, index: number) => (
                                        <div key={index} className="p-5 bg-gray-50 rounded-2xl relative">
                                            <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />
                                            <div className="flex items-center gap-1 mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                                ))}
                                            </div>
                                            <p className="text-gray-700 italic mb-3 relative z-10">"{review.review}"</p>
                                            <div className="font-semibold text-gray-900 text-sm">- {review.patient_name}</div>
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

                        {/* RockSEO Guides Section */}
                        {guides.length > 0 && (
                            <Card className="p-8 border-none shadow-sm rounded-2xl bg-amber-50/50">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-amber-100 p-2 rounded-lg mr-3 text-amber-600">
                                        <GraduationCap className="w-5 h-5" />
                                    </span>
                                    Patient Guides & Cost Info
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {guides.map((guide) => (
                                        <Link key={guide.url} href={guide.url} className="group p-4 bg-white rounded-xl border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all">
                                            <h3 className="font-bold text-gray-900 group-hover:text-amber-700 mb-1 flex items-center justify-between">
                                                {guide.title}
                                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-amber-600 opacity-0 group-hover:opacity-100 transition-all" />
                                            </h3>
                                            {guide.description && <p className="text-xs text-gray-500">{guide.description}</p>}
                                        </Link>
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

                        {/* Signature Treatments (Marketing) */}
                        <div className="mt-4">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="bg-red-100 p-2 rounded-lg mr-3 text-red-600">
                                    <Star className="w-5 h-5" />
                                </span>
                                Signature Treatments
                            </h2>
                            <div className="grid sm:grid-cols-3 gap-5">
                                <Card className="p-5 border-none shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                                        <Zap className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">Laparoscopic Surgery</h3>
                                    <p className="text-gray-500 text-xs mb-3">3mm keyhole surgery. Same-day discharge.</p>
                                    <ul className="space-y-1 text-xs text-gray-600">
                                        {["Hernia", "Gallbladder", "Appendix"].map(f => (
                                            <li key={f} className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{f}</li>
                                        ))}
                                    </ul>
                                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need info about Laparoscopic Surgery.")}`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center text-purple-600 font-medium text-xs hover:gap-2 gap-1 transition-all">
                                        Enquire <ArrowRight className="w-3 h-3" />
                                    </a>
                                </Card>
                                <Card className="p-5 border-none shadow-sm rounded-2xl hover:shadow-md transition-shadow relative overflow-hidden">
                                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full">Popular</div>
                                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-3">
                                        <Heart className="w-5 h-5 text-red-500" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">Laser Piles Treatment</h3>
                                    <p className="text-gray-500 text-xs mb-3">30-min painless procedure. 24hr recovery.</p>
                                    <ul className="space-y-1 text-xs text-gray-600">
                                        {["No Cuts", "No Stitches", "USFDA Laser"].map(f => (
                                            <li key={f} className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{f}</li>
                                        ))}
                                    </ul>
                                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need info about Laser Piles Treatment.")}`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center text-red-600 font-medium text-xs hover:gap-2 gap-1 transition-all">
                                        Enquire <ArrowRight className="w-3 h-3" />
                                    </a>
                                </Card>
                                <Card className="p-5 border-none shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-3">
                                        <Shield className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">Fistula Removal</h3>
                                    <p className="text-gray-500 text-xs mb-3">VAAFT / Laser / LIFT. No recurrence.</p>
                                    <ul className="space-y-1 text-xs text-gray-600">
                                        {["Permanent Cure", "Minimal Pain", "Quick Recovery"].map(f => (
                                            <li key={f} className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{f}</li>
                                        ))}
                                    </ul>
                                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need info about Fistula Treatment.")}`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center text-teal-600 font-medium text-xs hover:gap-2 gap-1 transition-all">
                                        Enquire <ArrowRight className="w-3 h-3" />
                                    </a>
                                </Card>
                            </div>
                        </div>
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
                                    <a href="tel:+919842342525"
                                        className="w-full inline-flex items-center justify-center px-6 py-3 mt-3 bg-white text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Call +91 98423 42525
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

                            {/* Hospital Highlights */}
                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 mb-4">Why Indira Hospital</h3>
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
                                            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-4 h-4 text-purple-600" />
                                            </div>
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {/* Other Services Quick Links */}
                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 mb-4">Other Services</h3>
                                <div className="flex flex-wrap gap-2">
                                    {otherServices.map((svc) => (
                                        <Link key={svc.slug} href={`/services/${svc.slug}`}
                                            className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-purple-50 hover:text-purple-700 transition-colors">
                                            {svc.title}
                                        </Link>
                                    ))}
                                </div>
                            </Card>

                            {/* Location */}
                            <Card className="p-6 border-none shadow-sm rounded-2xl">
                                <h3 className="font-bold text-gray-900 mb-3">Location & Directions</h3>
                                <div className="rounded-xl overflow-hidden mb-3">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6!2d79.15!3d12.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIndira+Super+Speciality+Hospital!5e0!3m2!1sen!2sin!4v1"
                                        width="100%" height="180" style={{ border: 0 }}
                                        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                        title="Indira Hospital Location"
                                    />
                                </div>
                                <p className="text-xs text-gray-500">Indira Super Speciality Hospital, Vellore, Tamil Nadu</p>
                                <Link href="/locations" className="mt-3 inline-flex items-center text-purple-600 font-medium text-sm hover:text-purple-800 gap-1">
                                    View All 79+ Locations <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== OTHER SERVICES ========== */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Explore More</span>
                        <h2 className="text-2xl font-bold mt-2 text-gray-900">Other Services at Indira Hospital</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {otherServices.slice(0, 6).map((svc) => (
                            <Link key={svc.slug} href={`/services/${svc.slug}`}
                                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    {iconMap[svc.icon] ? <div className="scale-75">{iconMap[svc.icon]}</div> : <Stethoscope className="w-6 h-6" />}
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{svc.title}</h3>
                                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">{svc.short_description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/services" className="inline-flex items-center px-6 py-3 bg-purple-50 text-purple-700 font-semibold rounded-xl hover:bg-purple-100 transition-colors">
                            View All Services <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========== WHATSAPP CTA BOTTOM ========== */}
            <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-10">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Need {service.title} Consultation?
                    </h2>
                    <p className="mt-2 text-green-100 text-base max-w-lg mx-auto">
                        Skip the phone queue. Chat on WhatsApp for instant appointment booking and cost estimate.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-xl text-lg hover:bg-green-50 transition-colors shadow-lg">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Chat on WhatsApp
                        </a>
                        <a href="tel:+919842342525"
                            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-colors border border-white/20">
                            <Phone className="w-5 h-5 mr-2" />
                            Call Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
