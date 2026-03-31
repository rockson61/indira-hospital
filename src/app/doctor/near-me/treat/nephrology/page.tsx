'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { Droplets, Shield, Zap, Activity } from "lucide-react"

export default function NephrologyDepartmentPage() {
    return (
        <DepartmentTemplate
            title="Elite Renal Sciences & Nephrology"
            slug="nephrology"
            shortDescription="India's leading center for Advanced Dialysis, CRRT, and comprehensive kidney function preservation."
            fullDescription={`
                <p>The <strong>Department of Renal Sciences</strong> at Indira Super Speciality Hospital is a pioneering hub for advanced kidney care. We operate one of the region's most high-tech 24/7 Dialysis units, providing life-saving blood purification in an ultra-sterile environment.</p>
                <p>Equipped with sophisticated <strong>SLED</strong> and <strong>CRRT</strong> capabilities, our nephrology team is uniquely qualified to manage the most critically ill patients with acute kidney failure in our ICU suites.</p>
            `}
            procedures={[
                { name: "24/7 High-Flux Dialysis", link: "/doctor/near-me/treat/nephrology/advanced-dialysis-center" },
                { name: "Continuous Renal Replacement (CRRT)", link: "/doctor/near-me/treat/nephrology/advanced-dialysis-center" },
                { name: "Preservation & CKD Care", link: "/doctor/near-me/treat/nephrology/preventive-kidney-care" },
                { name: "Diabetic Kidney Monitoring", link: "/doctor/near-me/treat/nephrology/preventive-kidney-care" },
                { name: "Fistula Creation & Rescue", link: "/doctor/near-me/treat/nephrology/advanced-dialysis-center" }
            ]}
            technology={[
                {
                    name: "High-Flux Hemodialysis Units",
                    description: "Advanced filtration that clears more toxins than standard dialysis with significantly less patient fatigue.",
                    icon: "Zap"
                },
                {
                    name: "CRRT Multi-Filtrate System",
                    description: "Gentle, continuous kidney support for hemodynamically unstable ICU patients experiencing acute failure.",
                    icon: "Activity"
                }
            ]}
            relatedServices={[
                {
                    title: "Advanced Dialysis Center",
                    description: "Elite 24/7 dialysis service with high-flux filtration and expert renal nursing.",
                    slug: "advanced-dialysis-center"
                },
                {
                    title: "Preventive Nephrology",
                    description: "Structured clinical programs to protect kidney function and avoid the need for dialysis.",
                    slug: "preventive-kidney-care"
                }
            ]}
            quickFacts={[
                { label: 'Specialists', value: 'Senior Nephrologists', icon: 'Users' },
                { label: 'Technology', value: 'High-Flux/CRRT', icon: 'Zap' },
                { label: 'Availability', value: '24/7 Dialysis', icon: 'Clock' },
                { label: 'Safety', value: 'Zero-Infection Unit', icon: 'Shield' },
            ]}
            relatedDoctors={[]} // Falling back to auto-populated specialists
        />
    )
}
