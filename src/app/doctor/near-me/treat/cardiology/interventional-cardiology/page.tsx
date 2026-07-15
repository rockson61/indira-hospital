import React from 'react'
import type { Metadata } from 'next'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Zap, Shield, Clock, UserCheck, CheckCircle2, Info, Star, MapPin } from 'lucide-react'

export const metadata: Metadata = {
    title: "Interventional Cardiology in Vellore | Indira Super Speciality Hospital",
    description: "Interventional Cardiology at Indira Super Speciality Hospital, Vellore. NABH-accredited cardiology care with advanced technology, experienced specialists, and fast recovery. Book a consultation today.",
    alternates: {
        canonical: "/doctor/near-me/treat/cardiology/interventional-cardiology",
    },
    openGraph: {
        title: "Interventional Cardiology in Vellore | Indira Super Speciality Hospital",
        description: "Interventional Cardiology at Indira Super Speciality Hospital, Vellore. NABH-accredited cardiology care with advanced technology, experienced specialists, and fast recovery. Book a consultation today.",
        url: "/doctor/near-me/treat/cardiology/interventional-cardiology",
        type: 'website',
    },
}

export default function SEOPage() {
    return (
        <SubServiceTemplate
            title="Interventional Cardiology in Vellore"
            eyebrow="Top Cardiology Solutions"
            departmentName="Cardiology"
            departmentSlug="cardiology"
            description={
                <article>
                    <p className="text-lg leading-relaxed">
                        <strong>Interventional Cardiology</strong> at Indira Super Speciality Hospital, Vellore, is a top-rated clinical procedure. Our surgical experts utilize advanced medical protocols to ensure <strong>painless outcomes</strong> and <strong>accelerated patient recovery</strong> for all procedures.
                    </p>
                </article>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Best', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Location', value: 'Indira', icon: 'MapPin' }
            ]}
            reviews={{
                entityType: 'service',
                entityName: 'Interventional Cardiology',
                entitySlug: 'interventional-cardiology'
            }}
            showAvailabilityCTA={true}
            showVideoBank={true}
            duration="30-45 Mins"
            hospitalStay="Daycare (6 hrs)"
            recoveryTime="48 Hours"
            anesthesia="Local/Spinal"
            showComparison={true}
        >
            <div className="space-y-16">
                {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
                <AioKnowledgeBlock 
                    title="Quick Facts: Interventional Cardiology in Vellore"
                    items={[
                        { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
                        { label: 'Tech Standard', value: 'Advanced Treatment Tech', icon: Zap },
                        { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
                        { label: 'Region Focus', value: 'Vellore Location', icon: MapPin }
                    ]}
                />

                <article className="space-y-12">
                    <section>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">What are the Benefits of Interventional Cardiology Surgery?</h2>
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
                        <h2 className="text-3xl font-black text-white mb-6">How Does Cardiology Treatment Work?</h2>
                        <p className="text-fuchsia-200/80 text-lg mb-8">
                            Our hospital is equipped with high-end medical technology to support complex cardiology procedures, reducing surgical time and enhancing safety.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: 'High-Def Imaging', desc: 'Accurate diagnosis with 128-Slice CT & 3T MRI.' },
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
                </article>
            </div>
        </SubServiceTemplate>
    )
}
