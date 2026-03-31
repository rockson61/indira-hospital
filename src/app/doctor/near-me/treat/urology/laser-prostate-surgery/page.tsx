'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'

export default function TURPPage() {
    return (
        <SubServiceTemplate
            title="Elite Laser Prostate Surgery (TURP)"
            eyebrow="Advanced Men's Health Center"
            description={
                <>
                    Regain focus and comfort with our precision-guided <strong>Laser Prostatectomy (TURP)</strong>. We specialize in the gold-standard treatment for Benign Prostatic Hyperplasia (BPH), restoring normal urinary flow and life quality with ultra-low downtime.
                </>
            }
            quickFacts={[
                { label: 'Gold Standard', value: 'TURP / Laser', icon: 'Star' },
                { label: 'Procedure time', value: '45-90 Mins', icon: 'Clock' },
                { label: 'Hospital Stay', value: '2-3 Days', icon: 'Shield' },
                { label: 'Success Rate', value: '98%', icon: 'CheckCircle' },
            ]}
            marketingContent={{
                features: [
                    {
                        title: 'Precision Resection',
                        description: 'Using high-definition visualization to selectively remove excess prostate tissue for immediate relief.',
                        icon: 'Activity'
                    },
                    {
                        title: 'Minimal Bleeding Technology',
                        description: 'Advanced bipolar cautery and laser systems that minimize blood loss and ensure patient safety.',
                        icon: 'Zap'
                    },
                    {
                        title: 'Zero-Strain Recovery',
                        description: 'Specialized post-op protocol designed to reduce bladder irritation and ensure a smooth recovery.',
                        icon: 'Clock'
                    }
                ],
                benefits: [
                    {
                        title: 'Immediate Flow Restoration',
                        description: 'Patients experience a significant improvement in urine flow velocity within days of surgery.',
                        icon: 'Wind'
                    },
                    {
                        title: 'Long-term Solution',
                        description: 'Provides lasting relief from urinary symptoms for 15-20 years in over 90% of cases.',
                        icon: 'Shield'
                    },
                    {
                        title: 'Elite Patient Suites',
                        description: 'Recover in supreme comfort with dedicated nursing care and personalized nutrition.',
                        icon: 'Bed'
                    }
                ],
                faqs: [
                    {
                        question: "When should I consider surgery for my prostate?",
                        answer: "Surgery is usually recommended if medications fail to provide relief, or if you experience recurrent UTIs, bladder stones, or kidney damage due to prostate enlargement."
                    },
                    {
                        question: "How long is the recovery period?",
                        answer: "Most patients can return to light activity within a week. Strenuous exercise or heavy lifting should be avoided for 4-6 weeks to allow internal healing."
                    },
                    {
                        question: "Is the surgery permanent?",
                        answer: "TURP is highly durable. While the prostate can regrow over very long periods (15+ years), most men never require a second procedure."
                    }
                ]
            }}
            timeline={{
                title: "Your Path to Relief",
                description: "A meticulously managed surgical journey at Indira Super Speciality Hospital.",
                steps: [
                    {
                        title: 'Pre-op Assessment',
                        description: 'Uroflowmetry, Ultrasound (PVR), and Cardiology clearance for safe surgical planning.',
                        duration: 'Pre-op'
                    },
                    {
                        title: 'Precision Prostatectomy',
                        description: 'Expert resection of the prostate core using advanced endoscopic instrumentation.',
                        duration: '90 Mins'
                    },
                    {
                        title: 'Specialized Post-op Care',
                        description: 'Continuous bladder irrigation and observation in our dedicated surgical recovery unit.',
                        duration: '48 Hours'
                    },
                    {
                        title: 'Catheter Removal & Discharge',
                        description: 'Successful voiding trial before you return home with high confidence.',
                        duration: 'Day 3'
                    }
                ]
            }}
            reviews={{
                entityType: 'department',
                entityName: 'Urology',
                entitySlug: 'urology'
            }}
            departmentName="Urology"
            departmentSlug="urology"
            slug="doctor/near-me/treat/urology/laser-prostate-surgery"
            duration="60-90 Mins"
            hospitalStay="2-3 Days"
            recoveryTime="1-2 Weeks"
            anesthesia="Spinal Anesthesia"
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-3xl font-bold mb-4">Reclaiming Your Lifestyle with Elite Prostate Care</h2>
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        At Indira Hospital, we understand that prostate health is critical to your overall well-being. Our <strong>Elite Prostate Center</strong> combines surgical mastery with the latest endoscopic technology to deliver results that last. Whether it's traditional Bipolar TURP or advanced Laser Enucleation, we tailor the procedure to your specific medical profile.
                    </p>
                </section>

                <div className="border-l-4 border-emerald-500 pl-6 my-10 py-2">
                    <p className="text-2xl font-heading font-bold italic text-slate-900 dark:text-white">
                        "I used to wake up 5 times a night. After the laser surgery at Indira, I finally sleep through the night. The team is exceptional."
                    </p>
                    <p className="text-slate-500 font-bold mt-2">— Mr. Raghavan, 68 Years</p>
                </div>
            </div>
        </SubServiceTemplate>
    )
}
