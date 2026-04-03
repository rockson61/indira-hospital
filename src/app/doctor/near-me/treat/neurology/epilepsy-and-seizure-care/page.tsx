import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'
export default function EpilepsyCarePage() {
    return (
        <SubServiceTemplate
            title="Elite Epilepsy & Seizure Care"
            eyebrow="Precision Neurological Control"
            description={
                <article>
                    <p className="text-lg leading-relaxed">
                        <strong>Elite Epilepsy & Seizure Care</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
                    </p>
                </article>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            marketingContent={{
                features: [
                    {
                        title: 'High-Resolution Digital EEG',
                        description: 'Detailed brain-wave monitoring to identify seizure focus and classify epilepsy types accurately.',
                        icon: 'Activity'
                    },
                    {
                        title: 'Precision Drug Titration',
                        description: 'Expert pharmacological management to find the right medication with the least side effects.',
                        icon: 'Syringe'
                    },
                    {
                        title: 'Refractory Epilepsy Care',
                        description: 'Advanced management for complex cases that do not respond to standard medications.',
                        icon: 'Target'
                    }
                ],
                benefits: [
                    {
                        title: 'Seizure-Free Lifestyle',
                        description: 'Over 70% of our patients achieve complete seizure control under our expert clinical guidance.',
                        icon: 'Star'
                    },
                    {
                        title: 'Pediatric Neuro-Support',
                        description: 'Specialized, kid-friendly diagnostics and treatment for early-onset seizure disorders.',
                        icon: 'Baby0203m'
                    },
                    {
                        title: 'Safety Education Mastery',
                        description: 'Extensive counseling for patients and caregivers on seizure first-aid and lifestyle safety.',
                        icon: 'Shield'
                    }
                ],
                faqs: [
                    {
                        question: "Can epilepsy be cured permanently?",
                        answer: "While many forms of epilepsy can be completely controlled with medication, some patients may eventually go off medication if they remain seizure-free for several years. We focus on long-term remission."
                    },
                    {
                        question: "What is an EEG and is it painful?",
                        answer: "An Electroencephalogram (EEG) is a completely painless procedure where tiny sensors are placed on the scalp to record brain activity. It takes about 30-45 minutes."
                    },
                    {
                        question: "Are there medications with fewer side effects?",
                        answer: "Yes. Modern anti-epileptic drugs (AEDs) are designed to be highly effective with significantly fewer metabolic and cognitive side effects than older medications."
                    }
                ]
            }}
            timeline={{
                title: "Your Path to Stability",
                description: "Proactive clinical management for life-long brain health.",
                steps: [
                    {
                        title: 'Initial Neuro-Consult',
                        description: 'Detailed history taking and clinical examination to understand the nature of the seizures.',
                        duration: 'Day 0'
                    },
                    {
                        title: 'Digital EEG Profiling',
                        description: 'Recording brain activity to identify sub-clinical discharges and confirm epilepsy type.',
                        duration: '60 Mins'
                    },
                    {
                        title: 'Precision Titration',
                        description: 'Initiation and fine-tuning of the optimal medication regimen for your specific profile.',
                        duration: '1-4 Weeks'
                    },
                    {
                        title: 'Long-Term Remission',
                        description: 'Quarterly reviews and lifestyle monitoring to ensure you stay seizure-free and active.',
                        duration: 'Ongoing'
                    }
                ]
            }}
            reviews={{
                entityType: 'department',
                entityName: 'Neurology',
                entitySlug: 'neurology'
            }}
            departmentName="Neurology"
            departmentSlug="neurology"
            slug="doctor/near-me/treat/neurology/epilepsy-and-seizure-care"
            duration="Variable Control"
            hospitalStay="OPD Based"
            recoveryTime="Not Applicable"
            anesthesia="Not Required"
        >
            <div className="space-y-8">
                <section>
                    <h2 className="font-heading text-3xl font-bold mb-4">India's Premier Center for Advanced Epilepsy Management</h2>
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        At the <strong>Indira Neurology Center</strong>, we believe that no one should live with the constant fear of a seizure. Our epilepsy specialists provide the most advanced diagnostic and therapeutic care, ensuring that you can lead a full, productive life. Whether it's childhood absence seizures or adult refractory epilepsy, we have the expertise to restore your stability.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                    <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                        <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Advanced Neuro-Diagnostics</h3>
                        <p className="text-slate-300">
                            We use <strong>High-Definition Digital EEG</strong> platforms for superior signal clarity, allowing our neurologists to differentiate between true seizures and pseudo-seizures with absolute confidence.
                        </p>
                    </div>
                </div>
            </div>
        </SubServiceTemplate>
    )
}