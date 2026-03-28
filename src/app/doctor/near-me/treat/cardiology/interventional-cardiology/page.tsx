'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'

export default function SEOPage() {
    return (
        <SubServiceTemplate
            title="Interventional Cardiology in Vellore"
            eyebrow="Elite Cardiology Solutions"
            departmentName="Cardiology"
            departmentSlug="cardiology"
            description={
                <>
                    <p>
                        Searching for the <strong>best interventional cardiology in Vellore</strong>? Indira Super Speciality Hospital is a center of excellence for advanced cardiology care, providing precision-driven surgical solutions with a focus on patient safety and rapid healing.
                    </p>
                    <p className="mt-4">
                        Our facility is equipped with state-of-the-art diagnostic and surgical infrastructure, including high-definition imaging and modular OTs, ensuring that every patient receives international-standard medical care right here in Tamil Nadu.
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Activity' },
                { label: 'Care Type', value: 'Surgical', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            reviews={{
                entityType: 'service',
                entityName: 'Interventional Cardiology',
                entitySlug: 'interventional-cardiology'
            }}
            showAvailabilityCTA={true}
            showVideoBank={true}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Indira for Interventional Cardiology?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        At Indira Hospital, we combine decades of surgical expertise with the latest medical breakthroughs. Our cardiology specialists are pioneers in minimally invasive techniques, ensuring:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 mt-8">
                        {[
                            'NABH Accredited Safety Standards',
                            'Expert Senior Surgeons',
                            'Modern Diagnostic Imaging',
                            'Transparent & Affordable Pricing',
                            'Comprehensive Post-Operative Care',
                            '24/7 Emergency Support'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-6 h-6 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 text-xs font-bold">✓</div>
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="bg-slate-900 rounded-[3rem] p-12 text-white">
                    <h2 className="text-3xl font-bold mb-6">Advanced Cardiology Infrastructure</h2>
                    <p className="text-fuchsia-200/80 text-lg mb-8">
                        Our hospital is equipped with high-end medical technology to support complex cardiology procedures, reducing surgical time and enhancing precision.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'High-Def Imaging', desc: 'Precision diagnosis with 128-Slice CT & 3T MRI.' },
                            { title: 'Modular OTs', desc: 'Infection-free surgical environments for safety.' },
                            { title: 'Expert Team', desc: 'Multidisciplinary approach to complex cases.' }
                        ].map((box, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <h3 className="font-bold text-xl mb-2">{box.title}</h3>
                                <p className="text-sm text-fuchsia-100/60">{box.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </SubServiceTemplate>
    )
}
