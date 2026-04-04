import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
    title: "Physiotherapy & Rehabilitation Center in V in Vellore | I...",
    description: "Advanced Physiotherapy & Rehabilitation Center in Vellore, Tamil Nadu surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH acc...",
    path: "/doctor/near-me/treat/physiotherapy"
});

export default function PhysiotherapyDepartmentPage() {
    return (
        <DepartmentTemplate
            title="Physiotherapy & Rehabilitation Center in Vellore, Tamil Nadu"
            slug="physiotherapy"
            shortDescription="Advanced Neuro-Muscular Rehabilitation, Sports Injury Management, and Pain Restoration led by senior physical therapists."
            fullDescription={(
                <div className="physiotherapy-pillar-content space-y-20 text-left">
                    {/* ── 1. The Clinical Rehab Mission ─────────────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic border-l-8 border-blue-600 pl-6 mb-8 uppercase tracking-tight text-left">
                            Restoring Movement, Enhancing Life: Elite Rehab in Vellore
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 text-left">
                            <p>
                                The <strong>Department of Physiotherapy & Rehabilitation</strong> at Indira Super Speciality Hospital is a dedicated Regional Center of Excellence for the non-surgical management of musculoskeletal, neurological, and post-operative conditions. We believe that <strong>Movement is Medicine.</strong> Our clinical approach combines evidence-based manual therapy with high-tech modalities like Laser and Shockwave to accelerate recovery and restore functional independence.
                            </p>
                            <p className="mt-4">
                                Our facility features a dedicated <strong>Neuro-Rehab Gym</strong>, specialized <strong>Pediatric Rehabilitation</strong> units, and <strong>Geriatric Wellness</strong> programs designed to improve the quality of life for patients of all ages.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
                            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[2.5rem] border border-blue-100 dark:border-blue-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4 flex items-center gap-2 italic">
                                    Neuro-Rehab Hub
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    "Neural Plasticity is Real." We specialize in rehabilitating patients post-stroke, spinal cord injury, and Parkinson's disease, using intensive task-oriented training to re-map brain-muscle connections.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-blue-100 dark:border-blue-700 uppercase tracking-tighter shadow-sm">Stroke Rehab Protocol</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-blue-100 dark:border-blue-700 uppercase tracking-tighter shadow-sm">Balance Training</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-blue-300 mb-4 italic uppercase tracking-tighter text-left">Sports Injury Unit</h4>
                                <p className="text-blue-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    Trusted by local athletes. From ACL reconstruction rehab to Rotator Cuff management, we use <strong>Laser Therapy</strong> and <strong>Proprioceptive Drills</strong> to get you back on the field faster.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Kinesiology Taping</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> High-Frequency Laser</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialist Wellness Pillars ─────────────────────────── */}
                    <section className="physio-verticals space-y-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Clinical Specialization Hubs</h2>
                            <div className="h-1 w-24 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {/* Vertical 1: Ortho-Rehab */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Ortho-Rehab</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Post-operative protocols for Knee/Hip replacement and intensive management of Chronic Back & Neck pain.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Joint Replacement Rehab", "Spine Decompression", "Manual Mobilization", "Trigger Point Therapy"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 2: Pediatric Rehab */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Pediatric Hub</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Specialized developmental therapy for Cerebral Palsy, Delayed Milestones, and Pediatric Orthopedic conditions.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Sensory Integration", "Gait Training for CP", "Corrective Exercises", "Postural Correction"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 3: Women's Wellness */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Women's Health</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Dedicated protocols for Pelvic Floor rehab, Antenatal/Postnatal exercises, and Osteoporosis management.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Pelvic Floor Training", "Diastasis Recti Correction", "Prenatal Core Prep", "Post-Menopausal Bone Health"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── 3. Educational Deep-Dive: Ergonomics ───────────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-blue-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-blue-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-blue-900 dark:text-blue-400 font-black uppercase text-3xl tracking-tighter not-italic font-heading italic text-left">The Ergonomic Edge: Preventing the Tech-Neck Epidemic</h3>
                        <p>
                            In an age of constant screen-time, musculoskeletal pain is the #1 cause of productivity loss. "Tech-Neck" and Lumbar strain are not just discomforts; they are anatomical adaptations to poor postural habits. At Indira Hospital, our ergonomics program teaches you how to design your work environment to match your physiology.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "Pelvis", v: "Neutral Spine Siting" },
                                { k: "Eyes", v: "Screen @Eye Level" },
                                { k: "Elbows", v: "90-Degree Support" },
                                { k: "Micro-Breaks", v: "20-20-20 Rule" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-blue-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-blue-600">
                                    <p className="text-4xl font-black text-blue-600 mb-2 font-heading italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic">
                            Recovery is 30% clinical therapy and 70% what you do at home. Our therapists provide personalized <strong>Home Exercise Programs (HEP)</strong> via digital video links for seamless integration into your daily life.
                        </p>
                    </section>

                    {/* ── 4. Advanced Physiotherapy FAQs ─────────────────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-heading uppercase tracking-tighter text-blue-400 text-left">
                           Physiotherapy: Clinical FAQ Guide
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "What is the difference between Manual Therapy and Modalities?",
                                    a: "Manual Therapy (Mobilization, Manipulation) is where the therapist uses their hands to fix joint and tissue restrictions. Modalities (Laser, Ultrasound, TENS) are machines used to reduce inflammation and pain. A high-authority plan always combines both for maximum effectiveness."
                                },
                                {
                                    q: "How soon after a Stroke should rehabilitation start?",
                                    a: "Rehabilitation should ideally begin within 24-48 hours once the patient is medically stable. The first 3-6 months—the 'Neuroplasticity Window'—are the most critical for restoring movement and speech."
                                },
                                {
                                    q: "Can Physiotherapy prevent the need for Spine surgery?",
                                    a: "In many cases of disc bulges and sciatica, yes. Specialized protocols like MDT (McKenzie Method) and Core Stabilization can reduce nerve compression and stabilize the spine, potentially avoiding the need for surgery in over 70% of non-emergency cases."
                                },
                                {
                                    q: "What is Laser Therapy in rehab?",
                                    a: "Photobiomodulation (Laser Therapy) uses specific wavelengths of light to penetrate deep into tissues, stimulating cellular repair and ATP production. It is painless and highly effective for chronic tendonitis and joint pain."
                                },
                                {
                                    q: "Do I need a doctor's referral for Physiotherapy?",
                                    a: "While we work closely with Orthopedic and Neuro surgeons, you can directly consult our senior physical therapists for pain management, postural correction, and ergonomic assessments."
                                },
                                {
                                    q: "How many sessions are typically required?",
                                    a: "Acute pain might resolve in 3-5 sessions. Complex Stroke or Post-Op rehab may require 3-6 months of consistent work. We focus on 'Functional Milestones' rather than a fixed number of sessions."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-blue-400 transition-colors text-lg text-left">
                                        <span className="text-blue-500 text-2xl font-serif">Q.</span>
                                        <span>{faq.q}</span>
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed antialiased pl-8 font-medium font-heading">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )}
            procedures={[
                { name: "Neuro-Rehabilitation", link: "/doctor/near-me/treat/physiotherapy" },
                { name: "Sports Injury Clinic", link: "/doctor/near-me/treat/physiotherapy" },
                { name: "Post-Op Ortho Rehab", link: "/doctor/near-me/treat/physiotherapy" },
                { name: "Pediatric Physio", link: "/doctor/near-me/treat/physiotherapy" },
                { name: "Geriatric Wellness", link: "/doctor/near-me/treat/physiotherapy" },
                { name: "Laser Pain Therapy", link: "/doctor/near-me/treat/physiotherapy" }
            ]}
            technology={[
                {
                    name: "High-Frequency Laser",
                    description: "Deep tissue photobiomodulation for rapid pain relief and cellular repair.",
                    icon: "Zap"
                },
                {
                    name: "Electronic Decompression",
                    description: "Advanced spine traction system for managing disc bulges without surgery.",
                    icon: "Accessibility"
                }
            ]}
            relatedServices={[
                {
                    title: "Neurology Center",
                    description: "Coordinated stroke and nerve disease management with rehab focus.",
                    slug: "neurology"
                },
                {
                    title: "Orthopaedic Hub",
                    description: "Total joint replacement and fracture care synergy.",
                    slug: "orthopaedics"
                }
            ]}
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
        />
    )
}