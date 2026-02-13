import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/ui/section-header";
import { SEED_DATA } from "@/lib/data/seed-data";
import {
    ArrowLeft,
    Calendar,
    Phone,
    CheckCircle2,
    Stethoscope,
    Heart,
    Activity,
    Baby,
    Siren,
    Smile,
    Brain,
    Ribbon,
    Droplets,
} from "lucide-react";
import { clinicConfig } from "@/lib/data/clinic-config";

// Icon map for departments
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

// Key procedures per department
const departmentProcedures: Record<string, string[]> = {
    "general-surgery": [
        "Laser Surgery for Piles",
        "Hernia Repair",
        "Thyroid Surgery",
        "Laparoscopic Cholecystectomy",
        "Breast Surgery",
        "Varicose Vein Treatment",
        "Lipoma Removal",
        "Appendectomy",
    ],
    "laparoscopic-surgeries": [
        "Laparoscopic Cholecystectomy",
        "Laparoscopic Appendectomy",
        "Laparoscopic Hernia Repair",
        "Diagnostic Laparoscopy",
        "Laparoscopic Hysterectomy",
        "Bariatric Surgery",
    ],
    gastroenterology: [
        "Upper GI Endoscopy",
        "Colonoscopy",
        "ERCP",
        "Liver Biopsy",
        "Acid Reflux Treatment",
        "Peptic Ulcer Management",
        "IBS Treatment",
        "Hepatitis Management",
    ],
    urology: [
        "Kidney Stone Removal (PCNL)",
        "Ureteroscopy",
        "Prostate Surgery (TURP)",
        "Cystoscopy",
        "Circumcision",
        "Hydrocele Surgery",
        "Varicocele Treatment",
    ],
    "obstetrics-gynaecology": [
        "Normal & Caesarean Delivery",
        "High-Risk Pregnancy Care",
        "Painless Delivery",
        "Infertility Treatment",
        "Hysterectomy",
        "Ovarian Cyst Removal",
        "Fibroid Treatment",
        "Prenatal Screening",
    ],
    orthopaedics: [
        "Total Knee Replacement",
        "Total Hip Replacement",
        "Arthroscopy",
        "Fracture Management",
        "Spine Surgery",
        "Sports Medicine",
        "Ligament Reconstruction",
        "Joint Injections",
    ],
    cardiology: [
        "Angiography",
        "Angioplasty & Stenting",
        "Pacemaker Implantation",
        "Echocardiography",
        "TMT / Stress Test",
        "Heart Failure Management",
        "Cardiac Rehabilitation",
        "Holter Monitoring",
    ],
    "icu-emergency": [
        "24/7 Emergency Care",
        "Ventilator Support",
        "Trauma Management",
        "Post-Surgical ICU Care",
        "Cardiac Monitoring",
        "Sepsis Management",
        "Stroke Care",
        "Poison Management",
    ],
    dental: [
        "Root Canal Treatment",
        "Dental Implants",
        "Orthodontics (Braces)",
        "Cosmetic Dentistry",
        "Teeth Whitening",
        "Oral & Maxillofacial Surgery",
        "Wisdom Tooth Extraction",
        "Dental Crowns & Bridges",
    ],
    neurology: [
        "Stroke Management",
        "Epilepsy Treatment",
        "Migraine & Headache Clinic",
        "Parkinson's Disease Care",
        "EEG & EMG Studies",
        "Peripheral Neuropathy",
        "Multiple Sclerosis Treatment",
        "Nerve Conduction Studies",
    ],
    oncology: [
        "Cancer Screening",
        "Chemotherapy",
        "Targeted Therapy",
        "Immunotherapy",
        "Surgical Oncology",
        "Palliative Care",
        "Biopsy & Diagnosis",
        "Cancer Rehabilitation",
    ],
    nephrology: [
        "Dialysis Services",
        "Chronic Kidney Disease",
        "Kidney Stone Management",
        "Hypertension Treatment",
        "Electrolyte Disorders",
        "Pre-Transplant Evaluation",
        "Glomerulonephritis Care",
        "Diabetic Nephropathy",
    ],
};

export function generateStaticParams() {
    return SEED_DATA.services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const department = SEED_DATA.services.find((s) => s.slug === slug);

    if (!department) {
        return { title: "Department Not Found" };
    }

    return {
        title: `${department.title} | Indira Super Speciality Hospital Vellore`,
        description: department.full_description,
        openGraph: {
            title: `${department.title} Department | Indira Hospital`,
            description: department.short_description,
        },
    };
}

export default async function DepartmentDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const department = SEED_DATA.services.find((s) => s.slug === slug);

    if (!department) {
        notFound();
    }

    const procedures = departmentProcedures[slug] || [];
    const relatedDoctors = SEED_DATA.doctors.filter(
        (d) =>
            d.department.toLowerCase() === department.title.toLowerCase() ||
            d.specialties.some(
                (s) =>
                    department.title.toLowerCase().includes(s.toLowerCase()) ||
                    s.toLowerCase().includes(department.title.toLowerCase())
            )
    );

    const phone = clinicConfig.phone;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
                <div className="absolute inset-0 bg-[url('/hero-hospital.png')] bg-cover bg-center opacity-10" />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
                    <Link
                        href="/departments"
                        className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors text-sm"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        All Departments
                    </Link>

                    <div className="flex items-start gap-6">
                        <div className="hidden sm:flex h-16 w-16 rounded-2xl bg-white/10 backdrop-blur items-center justify-center text-white">
                            {iconMap[department.icon] || (
                                <Stethoscope className="h-8 w-8" />
                            )}
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                                {department.title}
                            </h1>
                            <p className="mt-4 text-lg text-purple-100 max-w-3xl leading-relaxed">
                                {department.short_description}
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href="/book-appointment"
                                    className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors"
                                >
                                    <Calendar className="h-5 w-5 mr-2" />
                                    Book Appointment
                                </Link>
                                <a
                                    href={`tel:${phone}`}
                                    className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-lg transition-colors border border-white/20"
                                >
                                    <Phone className="h-5 w-5 mr-2" />
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            About {department.title}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {department.full_description}
                        </p>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            At Indira Super Speciality Hospital, our {department.title}{" "}
                            department is equipped with state-of-the-art technology and staffed
                            by experienced specialists dedicated to providing the highest
                            quality care. We follow evidence-based treatment protocols to
                            ensure optimal patient outcomes.
                        </p>
                    </div>

                    {/* Quick Info Card */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 h-fit">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Department Info
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center">
                                    <Stethoscope className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Specialists</p>
                                    <p className="font-semibold text-gray-900">
                                        {relatedDoctors.length > 0
                                            ? `${relatedDoctors.length} Doctor${relatedDoctors.length > 1 ? "s" : ""
                                            }`
                                            : "Expert Team"}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Procedures</p>
                                    <p className="font-semibold text-gray-900">
                                        {procedures.length}+ Treatments
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center">
                                    <Calendar className="h-5 w-5 text-amber-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Availability</p>
                                    <p className="font-semibold text-gray-900">Mon – Sat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Procedures */}
            {procedures.length > 0 && (
                <section className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <SectionHeader
                            title="Treatments & Procedures"
                            subtitle="What We Offer"
                            description={`Our ${department.title} department provides a comprehensive range of treatments and procedures.`}
                        />
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {procedures.map((procedure) => (
                                <div
                                    key={procedure}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors group"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                    <span className="text-gray-700 group-hover:text-purple-800 font-medium text-sm">
                                        {procedure}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Related Doctors */}
            {relatedDoctors.length > 0 && (
                <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <SectionHeader
                        title="Our Specialists"
                        subtitle="Expert Care"
                        description={`Meet the experienced doctors in our ${department.title} department.`}
                    />
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedDoctors.map((doctor) => (
                            <Link
                                key={doctor.id}
                                href={`/doctors/${doctor.slug}`}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group"
                            >
                                <div className="h-48 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                                    {doctor.image ? (
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center">
                                            <Stethoscope className="h-10 w-10 text-purple-400" />
                                        </div>
                                    )}
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-sm text-purple-600 font-medium mt-1">
                                        {doctor.designation}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {doctor.experience_years} Years Experience
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">
                        Need {department.title} Consultation?
                    </h2>
                    <p className="mt-4 text-purple-100 text-lg">
                        Book an appointment with our expert specialists today. We are
                        committed to providing the best care.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/book-appointment"
                            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors"
                        >
                            Book Appointment
                        </Link>
                        <a
                            href={`tel:${phone}`}
                            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
                        >
                            Call {phone}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
