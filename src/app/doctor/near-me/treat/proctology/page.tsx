import React from 'react'
import { Metadata } from 'next'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { SEED_DATA } from '@/lib/data/seed-data'
import { TREATMENT_DATA } from '@/lib/data/treatment-data'
import { ProctologyPillarLongForm } from '@/lib/data/treatments/proctology/pillar-content'

export const metadata: Metadata = {
    title: "Best Proctologist in Vellore | Laser Piles & Fistula Treatment | Indira Hospital",
    description: "Indira Laser Proctology Center, Vellore. Expert painless treatment for Piles, Fissure, Fistula, and Pilonidal Sinus by internationally trained surgeons Dr. P. Shankar & Dr. Karan Shankar. 2000+ word expert guide.",
    keywords: "best proctologist vellore, laser piles treatment vellore, fistula surgery cost vellore, anal fissure specialist vellore, pilonidal sinus laser surgery vellore, colorectal surgeon vellore, indira hospital vellore proctology",
    alternates: {
        canonical: "https://www.indirasuperspecialityhospital.com/doctor/near-me/treat/proctology"
    }
}

export default function ProctologyPillarPage() {
    // Filter proctology specialists
    const proctologyDoctors = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.includes('Proctology') || dr.specialties?.includes('Colorectal Surgery')
    );

    // Filter proctology treatments
    const proctologyTreatments = TREATMENT_DATA.filter(t => t.parentServiceSlug === 'proctology');

    const title = "Proctology"
    const slug = "proctology"
    const shortDescription = "India's Leading Laser Proctology Center. Expert painless treatment for Piles, Fissure, Fistula, and Pilonidal Sinus by internationally trained surgeons Dr. P. Shankar and Dr. Karan Shankar."

    return (
        <DepartmentTemplate
            title={title}
            slug={slug}
            shortDescription={shortDescription}
            fullDescription=""
            procedures={proctologyTreatments.map(t => ({ name: t.title, link: `/doctor/near-me/treat/proctology/${t.slug}` }))}
            relatedDoctors={proctologyDoctors}
            relatedServices={proctologyTreatments.map(t => ({
                title: t.title,
                url: `/doctor/near-me/treat/proctology/${t.slug}`,
                description: t.shortDescription,
                icon: 'Zap'
            }))}
            technology={[
                { name: '1470nm Diode Laser', description: 'Precision fiber for bloodless surgery.', icon: 'Zap' },
                { name: 'HD Anoscopy', description: 'Ultra-clear diagnostic imaging.', icon: 'Shield' },
                { name: 'FiLaC Radial Fiber', description: '360-degree laser emission for total fistula tract closure.', icon: 'Award' }
            ]}
        >
            <ProctologyPillarLongForm />
        </DepartmentTemplate>
    )
}
