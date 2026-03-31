'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { Ribbon, Shield, Target, Microscope } from "lucide-react"

export default function OncologyDepartmentPage() {
    return (
        <DepartmentTemplate
            title="Elite Oncology & Cancer Center"
            slug="oncology"
            shortDescription="Multidisciplinary cancer care combining radical surgical precision with the latest targeted medical therapies."
            fullDescription={`
                <p>The <strong>Department of Oncology</strong> at Indira Super Speciality Hospital is a high-authority center for cancer diagnosis and treatment. We utilize a <strong>Tumor Board approach</strong>, bringing together surgeons, medical oncologists, and nutritionists to architect the most effective curative plan for every patient.</p>
                <p>Our facility features ultra-sterile, HEPA-filtered operating theaters for radical resections and a dedicated 24/7 chemotherapy day-care unit for convenient systemic therapy.</p>
            `}
            procedures={[
                { name: "Surgical Resection", link: "/doctor/near-me/treat/oncology/surgical-oncology-center" },
                { name: "Targeted Chemotherapy", link: "/doctor/near-me/treat/oncology/medical-oncology-chemotherapy" },
                { name: "Precision Immunotherapy", link: "/doctor/near-me/treat/oncology/medical-oncology-chemotherapy" },
                { name: "Breast Cancer Surgery", link: "/doctor/near-me/treat/oncology/surgical-oncology-center" },
                { name: "Colorectal Onco-Surgery", link: "/doctor/near-me/treat/oncology/surgical-oncology-center" },
                { name: "Supportive Cancer Care", link: "/doctor/near-me/treat/oncology/medical-oncology-chemotherapy" }
            ]}
            technology={[
                {
                    name: "HEPA-Filtered Oncology OT",
                    description: "Specialized ultra-clean theater system that minimizes infection risk during major curative resections.",
                    icon: "Shield"
                },
                {
                    name: "Oncology Drug Safety Bench",
                    description: "Advanced Bio-Safety cabinet for the precise and safe preparation of chemotherapy and targeted drugs.",
                    icon: "Microscope"
                }
            ]}
            relatedServices={[
                {
                    title: "Surgical Oncology Center",
                    description: "Expert curative resections for solid tumors using both open and minimally invasive methods.",
                    slug: "surgical-oncology-center"
                },
                {
                    title: "Medical Oncology Unit",
                    description: "Elite unit for targeted systemic therapy, immunotherapy, and pain management focus.",
                    slug: "medical-oncology-chemotherapy"
                }
            ]}
            quickFacts={[
                { label: 'Approach', value: 'Tumor Board Governance', icon: 'Target' },
                { label: 'Care Level', value: 'Multidisciplinary', icon: 'Users' },
                { label: 'Facility', value: '24/7 Onco-Nursing', icon: 'Clock' },
                { label: 'Integrity', value: 'NABH Accredited', icon: 'Award' },
            ]}
            relatedDoctors={[]} // Auto-population from template
        />
    )
}
