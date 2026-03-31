'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { Brain, Siren, Microscope, Activity } from "lucide-react"

export default function NeurologyDepartmentPage() {
    return (
        <DepartmentTemplate
            title="Elite Neurosciences & Neurology"
            slug="neurology"
            shortDescription="Advanced brain and nervous system care specializing in rapid stroke thrombolysis and long-term epilepsy control."
            fullDescription={`
                <p>The <strong>Department of Neurology</strong> at Indira Super Speciality Hospital is a regional center of excellence for neurological emergencies and chronic brain conditions. We prioritize early intervention, especially for stroke patients, where our <strong>"Golden Hour"</strong> protocols have saved countless lives and prevented permanent disability.</p>
                <p>Equipped with high-resolution digital <strong>EEG</strong> and <strong>EMG</strong> diagnostics, we provide definitive clinical clarity for epilepsy, migraines, and complex nerve disorders.</p>
            `}
            procedures={[
                { name: "Stroke Thrombolysis", link: "/doctor/near-me/treat/neurology/stroke-unit-rehabilitation" },
                { name: "Neuro-Rehabilitation", link: "/doctor/near-me/treat/neurology/stroke-unit-rehabilitation" },
                { name: "Epilepsy Management", link: "/doctor/near-me/treat/neurology/epilepsy-and-seizure-care" },
                { name: "EEG & NCS Diagnostics", link: "/doctor/near-me/treat/neurology/epilepsy-and-seizure-care" },
                { name: "Migraine & Headache Clinic", link: "/doctor/near-me/treat/neurology/epilepsy-and-seizure-care" },
                { name: "Parkinson's Disease Care", link: "/doctor/near-me/treat/neurology/stroke-unit-rehabilitation" }
            ]}
            technology={[
                {
                    name: "Digital EEG/EMG Platform",
                    description: "High-definition monitoring system providing superior clarity in brain-wave recording and nerve-conduction analysis.",
                    icon: "Microscope"
                },
                {
                    name: "Acute Stroke Care Protocol",
                    description: "Structured rapid-response workflow allowing for 'Golden Hour' life-saving medical thrombolysis.",
                    icon: "Siren"
                }
            ]}
            relatedServices={[
                {
                    title: "Stroke & Rehab Center",
                    description: "Rapid response and long-term physical recovery programs for stroke survivors.",
                    slug: "stroke-unit-rehabilitation"
                },
                {
                    title: "Epilepsy Control Unit",
                    description: "Precision-guided pharmacological management for pediatric and adult refractory epilepsy.",
                    slug: "epilepsy-and-seizure-care"
                }
            ]}
            quickFacts={[
                { label: 'Specialists', value: 'Senior Neurologists', icon: 'Users' },
                { label: 'Technology', value: 'EEG/EMG Digital', icon: 'Microscope' },
                { label: 'Responsiveness', value: '24/7 Neurology', icon: 'Siren' },
                { label: 'Outcome', value: 'Function-First', icon: 'Activity' },
            ]}
            relatedDoctors={[]} // Auto-population from template
        />
    )
}
