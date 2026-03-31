import React from 'react'
import { Metadata } from 'next'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { TREATMENT_DATA } from '@/lib/data/treatment-data'
import { RectalProlapseLongForm } from '@/lib/data/treatments/proctology/rectal-prolapse-content'

export const metadata: Metadata = {
    title: 'Rectal Prolapse Surgery in Vellore | Best Laparoscopic Rectopexy',
    description: "Advanced Rectal Prolapse Surgery in Vellore. Dr. Karan Shankar offers Laparoscopic Ventral Mesh Rectopexy (LVMR) with 98% success rates. Nerve-sparing techniques, same-day mobilization, and comprehensive pelvic floor restoration. 2000+ word expert guide.",
    keywords: 'rectal prolapse surgery vellore, laparoscopic rectopexy vellore, best colorectal surgeon vellore, aasanavaai thalluthal treatment vellore, rectal prolapse surgery cost vellore, indira hospital proctology',
    alternates: {
        canonical: 'https://www.indirasuperspecialityhospital.com/doctor/near-me/treat/proctology/rectal-prolapse-surgery'
    }
}

export default function RectalProlapsePage() {
    const slug = 'rectal-prolapse-surgery'
    const treatment = TREATMENT_DATA.find(t => t.slug === slug)

    if (!treatment) return null

    // Specialized Recovery Timeline for Rectal Prolapse
    const prolapseTimeline = [
        {
            title: 'Physiological Audit',
            description: 'Physical examination and Defecography to map the degree of rectal descent and assess pelvic floor coordination.',
            duration: 'Day 1'
        },
        {
            title: 'Laparoscopic Rectopexy',
            description: 'Minimally invasive Ventral Mesh Rectopexy (LVMR) to anchor the rectum. Performed through 5-10mm keyhole incisions.',
            duration: 'Day 2'
        },
        {
            title: 'Post-Op Activation',
            description: 'Early mobilization in our premium suites. Transition to a liquid/soft diet within 24 hours to restart bowel motility.',
            duration: 'Day 3'
        },
        {
            title: 'Recovery Roadmap',
            description: 'Full discharge with a 30-day customized pelvic health and nutrition plan to prevent future straining.',
            duration: 'Day 4-5'
        }
    ]

    return (
        <SubServiceTemplate
            title={treatment.title}
            description={treatment.shortDescription}
            marketingContent={{
                features: treatment.features?.map(f => typeof f === 'string' ? { title: f, description: '' } : f),
                benefits: treatment.benefits?.map(b => typeof b === 'string' ? { title: b, description: '' } : b),
                faq: treatment.faq
            }}
            timeline={{ steps: prolapseTimeline }}
            slug={slug}
        >
            {/* The 2000+ Word Ultimate Guide for Rectal Prolapse */}
            <RectalProlapseLongForm />
        </SubServiceTemplate>
    )
}
