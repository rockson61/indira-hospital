'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { Microscope, Zap, Activity, Target } from "lucide-react"

export default function UrologyDepartmentPage() {
    return (
        <DepartmentTemplate
            title="Elite Urology & Laser Center"
            slug="urology"
            shortDescription="India's premier center for Holmium Laser stone surgery, BPH management, and comprehensive urinary health."
            fullDescription={`
                <p>The <strong>Department of Urology</strong> at Indira Super Speciality Hospital is a regional center of excellence, renowned for its pioneering work in <strong>Endourology</strong> and <strong>Laser-assisted surgery</strong>. We provide world-class clinical expertise for complex kidney stones, prostate disorders, and male reproductive health.</p>
                <p>Our facility is equipped with high-power 100W Holmium Lasers and flexible German ureteroscopes, allowing us to perform "incision-less" surgeries with unmatched precision and rapid patient recovery.</p>
            `}
            procedures={[
                { name: "Laser Stone Removal (RIRS)", link: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
                { name: "Prostate Surgery (TURP)", link: "/doctor/near-me/treat/urology/laser-prostate-surgery" },
                { name: "Keyhole Stone Surgery (PCNL)", link: "/doctor/near-me/treat/urology/pcnl-complex-stone-removal" },
                { name: "Ureter Stone (URSL)", link: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
                { name: "UTI Management", link: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
                { name: "Male Infertility", link: "/doctor/near-me/treat/urology/laser-prostate-surgery" }
            ]}
            technology={[
                {
                    name: "100W Holmium Laser",
                    description: "High-power laser system for dusting the hardest kidney stones without any physical impact.",
                    icon: "Zap"
                },
                {
                    name: "Flexible Ureteroscopy",
                    description: "Advanced German digital scopes to reach and treat stones deep inside the kidney without incisions.",
                    icon: "Microscope"
                }
            ]}
            relatedServices={[
                {
                    title: "Advanced Kidney Stones Unit",
                    description: "Comprehensive management of renal calculi using RIRS, PCNL, and Mini-Perc techniques.",
                    slug: "kidney-stone-laser-surgery"
                },
                {
                    title: "Prostate & Men's Health",
                    description: "Elite care for BPH, Prostatitis, and related male urinary disorders.",
                    slug: "laser-prostate-surgery"
                }
            ]}
            quickFacts={[
                { label: 'Specialists', value: 'Senior Urologists', icon: 'Users' },
                { label: 'Technology', value: '100W Laser', icon: 'Zap' },
                { label: 'Stone Success', value: '99% Clearance', icon: 'Target' },
                { label: 'Recovery', value: 'Day Care Focus', icon: 'Clock' },
            ]}
            relatedDoctors={[]} // Will be auto-populated by template fallback if empty
        />
    )
}
