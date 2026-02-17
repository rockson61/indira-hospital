import { getDoctorBySlug, getDoctors } from "@/lib/api";
import { notFound } from "next/navigation";
import { SEED_DATA } from "@/lib/data/seed-data";
import { DoctorTemplate } from "@/components/healthcare/DoctorTemplate";
import { getImageUrl } from "@/lib/utils";

export const revalidate = 3600;

const WHATSAPP_NUMBER = "917010650063";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let doctor = await getDoctorBySlug(slug).catch(() => null);
    if (!doctor) {
        doctor = SEED_DATA.doctors.find(d => d.slug === slug) as any;
    }
    if (!doctor) return { title: 'Doctor Not Found' };

    const deptName = typeof doctor.department === 'string' ? doctor.department : (doctor.department as any)?.name || '';

    return {
        title: doctor.seo_title || `${doctor.name} - ${doctor.designation} | Indira Super Speciality Hospital`,
        description: doctor.seo_description || `${doctor.name}, ${doctor.designation} at Indira Hospital. ${doctor.experience_years}+ years experience in ${deptName}. Book appointment on WhatsApp. Best hospital in Vellore for Laparoscopic Surgery, Laser Piles, Fistula.`,
        keywords: [doctor.name, doctor.designation, deptName, "Indira Hospital", "Vellore", "best doctor"],
    };
}

export async function generateStaticParams() {
    let doctors = await getDoctors().catch(() => []);
    if (!doctors.length) doctors = SEED_DATA.doctors as any;
    return doctors.map((doc: any) => ({ slug: doc.slug }));
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let doctor = await getDoctorBySlug(slug).catch(() => null);
    if (!doctor) {
        doctor = SEED_DATA.doctors.find(d => d.slug === slug) as any;
    }
    if (!doctor) notFound();

    const deptName = typeof doctor.department === 'string' ? doctor.department : (doctor.department as any)?.name || '';
    const deptSlug = typeof doctor.department === 'string'
        ? SEED_DATA.services.find(s => s.title === doctor!.department)?.slug || ''
        : '';

    // Get other doctors for cross-linking
    let allDoctors = await getDoctors().catch(() => []);
    if (!allDoctors.length) allDoctors = SEED_DATA.doctors as any;
    const otherDoctors = allDoctors.filter((d: any) => d.slug !== slug).sort(() => 0.5 - Math.random());

    const departments = SEED_DATA.services;

    // JSON-LD structured data
    const sameAs = [doctor?.social_linkedin, doctor?.social_website].filter(Boolean);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: doctor.name,
        url: `https://www.indirasuperspecialityhospital.com/doctors/${slug}`,
        description: (doctor.seo_description || doctor.bio || '').replace(/<[^>]*>?/gm, '').slice(0, 300),
        medicalSpecialty: deptName,
        image: getImageUrl(doctor.image) || undefined,
        worksFor: {
            "@type": "Hospital",
            name: "Indira Super Speciality Hospital",
            url: "https://www.indirasuperspecialityhospital.com",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DoctorTemplate
                doctor={doctor}
                deptName={deptName}
                deptSlug={deptSlug}
                otherDoctors={otherDoctors}
                departments={departments}
                WHATSAPP_NUMBER={WHATSAPP_NUMBER}
            />
        </>
    );
}
