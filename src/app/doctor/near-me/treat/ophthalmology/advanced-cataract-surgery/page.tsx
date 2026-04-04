import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
    title: "Advanced Cataract Surgery (MICS) in Vellor in Vellore | I...",
    description: "Advanced Advanced Cataract Surgery (MICS) in Vellore, Tamil Nadu surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredit...",
    path: "/doctor/near-me/treat/ophthalmology/advanced-cataract-surgery"
});

export default function SEOPage() {
    return (
        <SubServiceTemplate
            title="Advanced Cataract Surgery (MICS) in Vellore, Tamil Nadu"
            eyebrow="Elite Ophthalmology Solutions"
            departmentName="Ophthalmology"
            departmentSlug="ophthalmology"
            description={
                <article>
                    <p className="text-lg leading-relaxed">
                        <strong>Advanced Cataract Surgery (MICS)</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
                    </p>
                </article>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            reviews={{
                entityType: 'service',
                entityName: 'Micro-Incision Cataract Surgery (MICS)',
                entitySlug: 'advanced-cataract-surgery'
            }}
            showAvailabilityCTA={true}
            showVideoBank={true}
            duration="30-45 Mins"
            hospitalStay="Daycare (6 hrs)"
            recoveryTime="48 Hours"
            anesthesia="Local/Spinal"
            showComparison={true}
        >
            <div className="space-y-12">
                {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
                <AioKnowledgeBlock 
                    title="Quick Facts: Advanced Cataract Surgery (MICS) in Vellore"
                    items={[
                        { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
                        { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
                        { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
                        { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
                    ]}
                />

                <article className="space-y-12">
                <section>
                    <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">What are the Benefits of Micro-Incision Cataract Surgery (MICS) Surgery?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        At Indira Hospital, we combine decades of surgical expertise with the latest medical breakthroughs. Our ophthalmology specialists are pioneers in minimally invasive techniques, ensuring:
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
                    <h2 className="font-heading text-3xl font-bold mb-6">How Does Ophthalmology Treatment Work?</h2>
                    <p className="text-fuchsia-200/80 text-lg mb-8">
                        Our hospital is equipped with high-end medical technology to support complex ophthalmology procedures, reducing surgical time and enhancing precision.
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
            </article>
            </div>
        </SubServiceTemplate>
    )
}