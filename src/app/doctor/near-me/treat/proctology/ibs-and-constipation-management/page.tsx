import React from 'react'
import { Metadata } from 'next'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { TREATMENT_DATA } from '@/lib/data/treatment-data'
import { IBSConstipationLongForm } from '@/lib/data/treatments/proctology/ibs-constipation-content'

export const metadata: Metadata = {
    title: 'IBS & Chronic Constipation Treatment in Vellore | Best Doctor',
    description: "Expert IBS and Chronic Constipation management in Vellore. Dr. Karan Shankar offers advanced motility diagnostics, biofeedback therapy, and personalized gut health plans. 2000+ word ultimate guide to digestive relief inside.",
    keywords: 'ibs treatment vellore, constipation doctor vellore, chronic constipation vellore, best gastroenterologist vellore, gut motility vellore, indira hospital proctology',
    alternates: {
        canonical: 'https://www.indirasuperspecialityhospital.com/doctor/near-me/treat/proctology/ibs-and-constipation-management'
    }
}

export default function IBSConstipationPage() {
    const slug = 'ibs-and-constipation-management'
    const treatment = TREATMENT_DATA.find(t => t.slug === slug)

    if (!treatment) return null

    // Specialized Management Timeline for IBS & Constipation
    const ibsTimeline = [
        {
            title: 'Motility Consultation',
            description: 'Comprehensive evaluation of dietary habits, stress factors, and baseline bowel movement frequency with Dr. Karan Shankar.',
            duration: 'Day 1'
        },
        {
            title: 'Diagnostic Mapping',
            description: 'Advanced testing including Anorectal Manometry to identify muscle coordination issues or slow transit patterns.',
            duration: 'Day 3-5'
        },
        {
            title: 'Plan Implementation',
            description: 'Starting personalized Low FODMAP intervention and pelvic floor biofeedback sessions for muscle retraining.',
            duration: 'Week 1-4'
        },
        {
            title: 'Rhythm Stabilization',
            description: 'Long-term dietary adjustments and maintenance therapy to ensure a sustainable, pill-free bowel cycle.',
            duration: 'Day 90+'
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
            timeline={{ steps: ibsTimeline }}
            slug={slug}
        >
            {/* The 2000+ Word Ultimate Guide for IBS & Constipation */}
            <IBSConstipationLongForm />
        </SubServiceTemplate>
    )
}
