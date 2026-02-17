import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEED_DATA } from "@/lib/data/seed-data";
import { DepartmentTemplate } from "@/components/healthcare/DepartmentTemplate";
import { Stethoscope, Activity, Heart, Baby, Siren, Smile, Brain, Ribbon, Droplets } from "lucide-react";

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

// Key procedures per department - kept as fallback or to supplement
const departmentProcedures: Record<string, string[]> = {
    "general-surgery": ["Laser Surgery for Piles", "Hernia Repair", "Thyroid Surgery", "Laparoscopic Cholecystectomy", "Breast Surgery", "Varicose Vein Treatment", "Lipoma Removal", "Appendectomy"],
    "laparoscopic-surgeries": ["Laparoscopic Cholecystectomy", "Laparoscopic Appendectomy", "Laparoscopic Hernia Repair", "Diagnostic Laparoscopy", "Laparoscopic Hysterectomy", "Bariatric Surgery"],
    gastroenterology: ["Upper GI Endoscopy", "Colonoscopy", "ERCP", "Liver Biopsy", "Acid Reflux Treatment", "Peptic Ulcer Management", "IBS Treatment", "Hepatitis Management"],
    urology: ["Kidney Stone Removal (PCNL)", "Ureteroscopy", "Prostate Surgery (TURP)", "Cystoscopy", "Circumcision", "Hydrocele Surgery", "Varicocele Treatment", "Bladder Stone Removal"],
    "obstetrics-gynaecology": ["Normal & Caesarean Delivery", "High-Risk Pregnancy Care", "Painless Delivery", "Infertility Treatment", "Hysterectomy", "Ovarian Cyst Removal", "Fibroid Treatment", "Prenatal Screening"],
    orthopaedics: ["Total Knee Replacement", "Total Hip Replacement", "Arthroscopy", "Fracture Management", "Spine Surgery", "Sports Medicine", "Ligament Reconstruction", "Joint Injections"],
    cardiology: ["Angiography", "Angioplasty & Stenting", "Pacemaker Implantation", "Echocardiography", "TMT / Stress Test", "Heart Failure Management", "Cardiac Rehabilitation", "Holter Monitoring"],
    "icu-emergency": ["24/7 Emergency Care", "Ventilator Support", "Trauma Management", "Post-Surgical ICU Care", "Cardiac Monitoring", "Sepsis Management", "Stroke Care", "Poison Management"],
    dentistry: ["Oral & Maxillofacial Surgery", "Orthognathic Procedures", "Dental Implants", "Orthodontics", "Root Canal Treatment", "Smile Makeover", "Full Mouth Rehabilitation", "Pediatric Dentistry"],
    neurology: ["Stroke Management", "Epilepsy Treatment", "Migraine & Headache Clinic", "Parkinson's Disease Care", "EEG & EMG Studies", "Peripheral Neuropathy", "Multiple Sclerosis Treatment", "Nerve Conduction Studies"],
    oncology: ["Cancer Screening", "Chemotherapy", "Targeted Therapy", "Immunotherapy", "Surgical Oncology", "Palliative Care", "Biopsy & Diagnosis", "Cancer Rehabilitation"],
    nephrology: ["Dialysis Services", "Chronic Kidney Disease", "Kidney Stone Management", "Hypertension Treatment", "Electrolyte Disorders", "Pre-Transplant Evaluation", "Glomerulonephritis Care", "Diabetic Nephropathy"],
};

// RockSEO: Internal Links Mapping
const relatedServicesMap: Record<string, { title: string; url: string; description?: string }[]> = {
    dentistry: [
        { title: "Maxillofacial Surgery", url: "/services/maxillofacial-surgery" },
        { title: "Dental Implants", url: "/services/dental-implants" },
        { title: "Orthodontics", url: "/services/orthodontics" },
    ],
    orthopaedics: [
        { title: "Joint Replacement", url: "/services/joint-replacement" },
        { title: "Spine Surgery", url: "/services/spine-surgery" },
    ],
    cardiology: [
        { title: "Interventional Cardiology", url: "/services/interventional-cardiology" },
    ],
    "general-surgery": [
        { title: "Laparoscopic Surgery", url: "/departments/laparoscopic-surgeries" },
    ]
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
        description: department.short_description,
        openGraph: {
            title: `${department.title} Department | Indira Hospital`,
            description: department.short_description,
            images: [department.icon ? `/icons/${department.icon}.png` : '/og-image.png']
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

    // Merge SEED_DATA logic with localized fallbacks
    const procedures = (department as any).procedures || departmentProcedures[slug] || [];
    const relatedDoctors = SEED_DATA.doctors.filter(
        (d) =>
            d.department.toLowerCase() === department.title.toLowerCase() ||
            d.specialties.some(
                (s) =>
                    department.title.toLowerCase().includes(s.toLowerCase()) ||
                    s.toLowerCase().includes(department.title.toLowerCase())
            )
    );

    const relatedServices = relatedServicesMap[slug] || [];
    const pricing = (department as any).pricing || [];
    const technology = (department as any).technology || [];

    return (
        <DepartmentTemplate
            title={department.title}
            slug={slug}
            shortDescription={department.short_description}
            fullDescription={department.full_description}
            icon={iconMap[department.icon]}
            procedures={procedures}
            relatedDoctors={relatedDoctors}
            relatedServices={relatedServices}
            pricing={pricing}
            technology={technology}
        />
    );
}
