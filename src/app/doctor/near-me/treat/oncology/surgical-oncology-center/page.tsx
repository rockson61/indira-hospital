

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'

export default function SurgicalOncologyPage() {
    return (
        <SubServiceTemplate
            title="Elite Surgical Oncology Center"
            eyebrow="Curative Precision Cancer Resections"
            description={
                <>
                    Our <strong>Surgical Oncology Center</strong> specializes in the definitive, curative removal of solid tumors. We combine radical surgical mastery with minimally invasive techniques to achieve optimal cancer clearance while preserving function and quality of life.
                </>
            }
            quickFacts={[
                { label: 'Approach', value: 'Multidisciplinary', icon: 'UserCheck' },
                { label: 'Specialty', value: 'Solid Tumors', icon: 'Target' },
                { label: 'Facility', value: 'HEPA-Filtered OT', icon: 'Shield' },
                { label: 'Outcome', value: 'Curative Intent', icon: 'Star' },
            ]}
            marketingContent={{
                features: [
                    {
                        title: 'Radical Cancer Resections',
                        description: 'Expert execution of complex surgeries including Modified Radical Mastectomy, Colectomy, and Gastrectomy.',
                        icon: 'Activity'
                    },
                    {
                        title: 'Minimally Invasive Onco-Surgery',
                        description: 'Utilizing laparoscopic and keyhole techniques where safe to reduce pain and speed up recovery.',
                        icon: 'Microscope'
                    },
                    {
                        title: 'HEPA-Filtered Operating Suites',
                        description: 'Ultra-sterile surgical environments to minimize the risk of infection in immunocompromised patients.',
                        icon: 'Shield'
                    }
                ],
                benefits: [
                    {
                        title: 'Tumor Board Governance',
                        description: 'Every surgical case is reviewed by a multidisciplinary board including medical and radiation oncologists.',
                        icon: 'Target'
                    },
                    {
                        title: 'Rapid Staging Diagnostics',
                        description: 'Fast-track access to High-Resolution CT, MRI, and Histopathology for accurate surgical mapping.',
                        icon: 'Microscope'
                    },
                    {
                        title: 'Compassionate Care Ecosystem',
                        description: 'Recover in a supportive environment with dedicated oncology nursing and psychological counseling.',
                        icon: 'Heart'
                    }
                ],
                faqs: [
                    {
                        question: "Why is surgery the primary treatment for most solid tumors?",
                        answer: "For most non-metastasized cancers, complete surgical removal of the tumor remains the most effective way to achieve a long-term cure or significant disease control."
                    },
                    {
                        question: "Will I need chemotherapy after surgery?",
                        answer: "The need for adjuvant (post-surgery) chemotherapy depends on the tumor type, size, and lymph node involvement. Our tumor board will provide a personalized plan after histopathology results."
                    },
                    {
                        question: "Is laparoscopic surgery safe for cancer?",
                        answer: "Yes, for many cancers (like colorectal), laparoscopic surgery is now considered a standard of care, offering the same oncological results as open surgery but with faster recovery."
                    }
                ]
            }}
            timeline={{
                title: "Your Path to Remission",
                description: "A meticulously coordinated surgical journey at Indira's Oncology Center.",
                steps: [
                    {
                        title: 'Phase I: Staging & Mapping',
                        description: 'Comprehensive imaging and biopsy review to determine the exact extent and location of the tumor.',
                        duration: 'Pre-op'
                    },
                    {
                        title: 'Phase II: Surgical Resection',
                        description: 'Expert removal of the primary tumor and surrounding lymph nodes in our ultra-sterile theaters.',
                        duration: 'Surgery'
                    },
                    {
                        title: 'Phase III: Histopathology',
                        description: 'Detailed microscopic analysis of the removed tissue to determine if further treatment is needed.',
                        duration: 'Week 1'
                    },
                    {
                        title: 'Phase IV: Survivorship',
                        description: 'Structured follow-up program and coordination with medical oncology for long-term surveillance.',
                        duration: 'Ongoing'
                    }
                ]
            }}
            reviews={{
                entityType: 'department',
                entityName: 'Oncology',
                entitySlug: 'oncology'
            }}
            departmentName="Oncology"
            departmentSlug="oncology"
            slug="doctor/near-me/treat/oncology/surgical-oncology-center"
            duration="Variable"
            hospitalStay="3-5 Days"
            recoveryTime="2-4 Weeks"
            anesthesia="General Anesthesia"
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-3xl font-bold mb-4">India's Leading Hub for Curative Cancer Surgery</h2>
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        At the <strong>Indira Surgical Oncology Center</strong>, we fight cancer with precision. Under the leadership of <strong>Dr. Karan Shankar</strong> and an elite multidisciplinary team, we execute the most complex resections with a singular focus: achieve complete tumor clearance while maximizing life quality.
                    </p>
                </section>

                <div className="bg-slate-900 p-10 rounded-[3rem] text-white">
                    <h3 className="text-2xl font-bold mb-8">Specialized Surgical Units</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-fuchsia-400 font-bold">Breast Oncology</h4>
                            <p className="text-sm text-slate-300">Advanced Modified Radical Mastectomy and Breast Conservation Surgery (BCS), often combined with immediate reconstruction.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-fuchsia-400 font-bold">Gastrointestinal Oncology</h4>
                            <p className="text-sm text-slate-300">Expert resection of cancers involving the Colon, Rectum, Stomach, and Pancreas, using both open and laparoscopic methods.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-fuchsia-400 font-bold">Gynaec-Oncology</h4>
                            <p className="text-sm text-slate-300">Comprehensive surgical management for Ovarian, Uterine, and Cervical cancers, including radical hysterectomy.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-fuchsia-400 font-bold">Uro-Oncology</h4>
                            <p className="text-sm text-slate-300">Definitive surgical solutions for Cancers of the Kidney, Bladder, and Prostate, working in tandem with the Urology unit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </SubServiceTemplate>
    )
}
