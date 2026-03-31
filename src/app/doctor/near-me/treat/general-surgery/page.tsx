import React from 'react'
import { Metadata } from 'next'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { SEED_DATA } from '@/lib/data/seed-data'
import { TREATMENT_DATA } from '@/lib/data/treatment-data'
import { GeneralSurgeryPillarLongForm } from '@/lib/data/treatments/general-surgery/pillar-content'

export const metadata: Metadata = {
    title: "Best General & Laparoscopic Surgeon in Vellore | Dr. P. Shankar | Indira Hospital",
    description: "Indira Super Speciality Hospital, Vellore. Advanced 4K Laparoscopic surgery, Laser Proctology, and 24/7 Emergency trauma care. 30+ years of surgical excellence by Dr. P. Shankar & Dr. Karan Shankar.",
    keywords: "best general surgeon vellore, laparoscopic surgery vellore, gallbladder surgery cost vellore, hernia surgery vellore, appendix surgery vellore, thyroid surgery vellore, dr p shankar vellore, indira hospital vellore general surgery",
    alternates: {
        canonical: "https://www.indirasuperspecialityhospital.com/doctor/near-me/treat/general-surgery"
    }
}

export default function GeneralSurgeryPillarPage() {
    // Filter GS specialists
    const gsDoctors = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.includes('General Surgery') || dr.department === 'General Surgery'
    );

    // Filter GS treatments
    const gsTreatments = TREATMENT_DATA.filter(t => t.parentServiceSlug === 'general-surgery');

    return (
        <DepartmentTemplate
            title="General & Laparoscopic Surgery"
            slug="general-surgery"
            shortDescription="Advanced Keyhole Surgery, Laser Proctology, and 24/7 Trauma Care. Led by senior specialists Dr. P. Shankar and Dr. Karan Shankar for precision outcomes."
            fullDescription=""
            procedures={gsTreatments.map(t => ({ name: t.title, link: `/doctor/near-me/treat/general-surgery/${t.slug}` }))}
            relatedDoctors={gsDoctors}
            quickFacts={[
                { label: 'Technique', value: '4K Laparoscopy', icon: 'Zap' },
                { label: 'Technology', value: 'Harmonic Scalpel', icon: 'Shield' },
                { label: 'Experience', value: '30+ Years Senior HOD', icon: 'Award' },
                { label: 'Availability', value: '24/7 Emergency OT', icon: 'Clock' }
            ]}
        >
            <GeneralSurgeryPillarLongForm />
        </DepartmentTemplate>
    );
}
