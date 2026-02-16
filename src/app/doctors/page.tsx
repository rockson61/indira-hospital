import { Metadata } from "next";
import { getDoctors } from "@/lib/api";
import { SEED_DATA } from "@/lib/data/seed-data";
import DoctorsClient from "@/components/sections/doctors-client";
import { PageHero } from "@/components/ui/page-hero";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
    title: "Meet Our Specialists | Best Doctors in Vellore | Indira Hospital",
    description: "Consult with highly experienced multi-speciality doctors at Indira Hospital, Vellore. Find experts in Cardiology, Neurology, Orthopaedics, and more.",
};

export default async function DoctorsPage() {
    let doctors = await getDoctors().catch(() => []);

    if (!doctors || doctors.length === 0) {
        doctors = SEED_DATA.doctors as any;
    }

    return (
        <main>
            <PageHero
                title="Meet Our Specialists"
                subtitle="World-Class Care"
                description="Indira Hospital brings together over 25+ expert surgeons and specialists to provide comprehensive tertiary care with a human touch."
                backgroundImage="/images/doctors-hero.jpg"
            />
            <DoctorsClient initialDoctors={doctors as any} />
        </main>
    );
}
