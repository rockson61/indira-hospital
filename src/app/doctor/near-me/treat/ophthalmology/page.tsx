import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import Link from 'next/link'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { getTreatmentBySlug, getAllTreatments, TREATMENT_DATA } from '@/lib/data/treatment-data'
import { SEED_DATA } from '@/lib/data/seed-data'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
    title: "Doctor | Indira Super Speciality Hospital",
    description: "Learn more about doctor at Indira Hospital, Vellore&apos;s leading super-speciality center for advanced clinical care.",
    path: "/doctor/near-me/treat/ophthalmology"
});

export default function OphthalmologyPillarPage() {
    // Filter Ophthalmology specialists
    const ophthaDoctors = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.includes('Ophthalmology') || dr.department === 'Ophthalmology'
    );

    // Filter Ophthalmology treatments
    const ophthaTreatments = TREATMENT_DATA.filter(t => t.parentServiceSlug === 'ophthalmology');

    const title = "Centre for Advanced Ophthalmology & Vision Sciences"
    const slug = "ophthalmology"
    const shortDescription = "Precision Eye Care in Vellore. We specialize in Stitchless Micro-Incision Cataract Surgery (Phaco), LASIK, Glaucoma management, and Diabetic Retinopathy care using high-definition imaging."

    const quickFacts = [
        { label: 'Technique', value: 'Micro-Incision Phaco', icon: 'Zap' },
        { label: 'Recovery', value: 'Same-Day Discharge', icon: 'Clock' },
        { label: 'Precision', value: 'HD Intraocular Lenses', icon: 'Shield' },
        { label: 'Screening', value: 'High-Res Retinal Scan', icon: 'Search' }
    ]

    return (
        <DepartmentTemplate
            title={title}
            slug={slug}
            shortDescription={shortDescription}
            fullDescription={(
                <div className="ophthalmology-pillar-content space-y-20">
                    {/* ── 1. The Vision of Clinical Excellence ─────────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert text-left">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic border-l-8 border-teal-600 pl-6 mb-8 uppercase tracking-tight">
                            The Visionary Frontier: Advanced Ophthalmology in Vellore
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <p>
                                The <strong>Centre for Advanced Ophthalmology & Vision Sciences</strong> at Indira Super Speciality Hospital is a regional benchmark for the sophisticated management of ocular health. We believe that sight is the primary link to a high-quality life, and our mission is to preserve this link through <strong>Stitchless Microsurgery</strong>, <strong>Laser Refractive Correction</strong>, and <strong>High-Definition Retinal Imaging</strong>.
                            </p>
                            <p className="mt-4">
                                Our facility is equipped with the latest diagnostic and surgical platforms, allowing us to perform complex procedures like <strong>Micro-Incision Cataract Surgery (MICS)</strong> with unmatched precision. From treating age-related vision loss to managing the complex retinal manifestations of long-term diabetes, our clinical team delivers world-class outcomes with a focus on <strong>Rapid Visual Rehabilitation.</strong>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
                            <div className="p-8 bg-teal-50 dark:bg-teal-900/20 rounded-[2.5rem] border border-teal-100 dark:border-teal-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-3xl group-hover:bg-teal-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-teal-900 dark:text-teal-200 mb-4 flex items-center gap-2 italic">
                                    Micro-Incision Phaco (MICS)
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    The "Stitchless Revolution." Our MICS technique uses incisions smaller than 2.0 mm, resulting in zero surgically-induced astigmatism and near-instant visual recovery.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-teal-100 dark:border-teal-700">Crystal Clear Vision</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-teal-100 dark:border-teal-700">20-Min Procedure</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-blue-300 mb-4 italic">Medical Retina & Anti-VEGF</h4>
                                <p className="text-blue-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    Specialized care for <strong>Diabetic Retinopathy</strong> and Macular Degeneration. We utilize high-dose Anti-VEGF injections to stabilize fluid and prevent irreversible vision loss.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Precision Retinal Mapping</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Vision Stabilization Unit</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialized Ophthalmic Verticals ─────────────────── */}
                    <section className="ophthal-verticals space-y-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Clinical Specialization Hubs</h2>
                            <div className="h-1 w-24 bg-teal-600 dark:bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {/* Vertical 1: Cataract & IOL */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Cataract & IOL</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Premium cataract restoration using multifocal and toric Intraocular Lenses for freedom from spectacles.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["MICS (Micro-Incision)", "Phacoemulsification", "Multifocal IOLs", "Toric Correction"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link href="/doctor/near-me/treat/ophthalmology/advanced-cataract-surgery" className="p-4 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white text-center text-[10px] font-black hover:bg-teal-600 transition-colors uppercase tracking-widest">
                                        View Cataract Unit
                                    </Link>
                                </div>
                            </div>

                            {/* Vertical 2: Medical Retina */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Retinal Health</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Advanced diagnostic and medical management for Diabetic Retinopathy and Hypertensive eye disease.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Anti-VEGF Injections", "Green Laser Therapy", "OCT Retinal Mapping", "Fundus Photography"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link href="/doctor/near-me/treat/ophthalmology/diabetic-retinopathy-treatment" className="p-4 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white text-center text-[10px] font-black hover:bg-teal-600 transition-colors uppercase tracking-widest">
                                        View Retina Unit
                                    </Link>
                                </div>
                            </div>

                            {/* Vertical 3: Glaucoma & Refractive */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Vision Correction</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Comprehensive glaucoma screening and advanced refractive pathways for permanent vision correction.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Glaucoma Valve Surgery", "LASIK Evaluation", "Automated Perimetry", "Squint Correction"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link href="/doctor/near-me/treat/ophthalmology/lasik-eye-surgery" className="p-4 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white text-center text-[10px] font-black hover:bg-teal-600 transition-colors uppercase tracking-widest">
                                        View Vision Unit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── 3. Advanced Educational Content: MICS vs Traditional ────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-teal-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-teal-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-teal-900 dark:text-teal-400 font-black uppercase text-3xl tracking-tighter not-italic font-heading italic">Clinical Insight: The Micro-Incision Edge</h3>
                        <p>
                            In standard cataract surgery, an incision of 3.0 mm to 5.0 mm was common, which often required stitches and led to significant "astigmatism" – requiring the patient to wear heavy glasses even after a successful surgery.
                        </p>
                        <p className="mt-4">
                            At Indira Hospital, our <strong>Micro-Incision Cataract Surgery (MICS)</strong> utilizes an incision of less than <strong>1.8 mm to 2.2 mm</strong>. This "Ultra-Small" entry point allows for a "Cold Phaco" technique, which minimizes heat-related damage to the cornea. This results in:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "Healing", v: "Rapid Self-Sealing" },
                                { k: "Astigmatism", v: "Neutral Geometry" },
                                { k: "Energy", v: "Safe Ultrasound" },
                                { k: "Clarity", v: "HD Lens Placement" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-teal-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-teal-600">
                                    <p className="text-4xl font-black text-teal-600 mb-2 font-heading italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic">
                            By utilizing the smallest possible incision, we ensure that the eye&apos;s natural structural integrity is maintained, resulting in faster visual recovery – often within just a few hours after the procedure.
                        </p>
                    </section>

                    {/* ── 4. Advanced Ophthalmic FAQs: The Eye Care Deep-Dive ─────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-heading uppercase tracking-tighter text-teal-400 text-left">
                           Ophthalmology Excellence: Clinical FAQ Hub
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "Can I get my cataract surgery done for both eyes together?",
                                    a: "Clinically, we typically recommend a gap of 2-7 days between eyes. This allows us to observe the healing of the first eye and adjust the IOL power for the second eye if needed to achieve perfect vision balance (Monovision or Binocularity)."
                                },
                                {
                                    q: "Is there a permanent cure for Diabetic Retinopathy?",
                                    a: "Diabetic Retinopathy is a chronic condition. While we cannot 'cure' it permanently (as it depends on blood sugar control), we can successfully <strong>Stabilize</strong> and <strong>Preserve</strong> vision using programmed Anti-VEGF injections and Green Laser Photocoagulation to prevent blindness."
                                },
                                {
                                    q: "What is the difference between Monofocal and Multifocal Lenses?",
                                    a: "Monofocal lenses provide crystal clear vision at one distance (usually far), requiring reading glasses. Multifocal or EDOF lenses are advanced optics that allow you to see clearly at multiple distances (Near, Intermediate, and Far), often eliminating the need for glasses entirely."
                                },
                                {
                                    q: "How often should Glaucoma patients undergo screening?",
                                    a: "Glaucoma is often called the 'Silent Thief of Sight.' Established glaucoma patients require screening every 3-6 months, including eye pressure (IOP) checks, Automated Perimetry (Visual Fields), and OCT mapping of the optic nerve head."
                                },
                                {
                                    q: "Is LASIK permanent, and what is the ideal age?",
                                    a: "LASIK results are typically permanent. The ideal age is above 18-20, once your eye power is stable for more than a year. We perform a detailed 'C-Pre-LASIK' evaluation to ensure your cornea is thick and healthy enough for the procedure."
                                },
                                {
                                    q: "What are the common symptoms of Retinal Detachment?",
                                    a: "Retinal detachment is a medical emergency. Symptoms include a sudden appearance of many 'floaters' (dark spots), flashes of light, or a dark shadow/curtain moving across your field of vision. If you notice these, seek specialized retinal evaluation within 24 hours."
                                },
                                {
                                    q: "Can a Squint be corrected in adults as well?",
                                    a: "Yes. While squint correction is common in children to prevent 'Lazy Eye' (Amblyopia), adult squint surgery is highly successful for cosmetic alignment and improving binocular visual field. It is a safe and effective day-care procedure."
                                },
                                {
                                    q: "What is 'Digital Eye Strain' and how to manage it?",
                                    a: "Also known as Computer Vision Syndrome, it results from reduced blinking while using screens. We recommend the '20-20-20 Rule': Every 20 minutes, look at something 20 feet away for 20 seconds. Lubricating drops and anti-glare lenses also provide significant relief."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-teal-400 transition-colors text-lg">
                                        <span className="text-teal-500 text-2xl font-serif">Q.</span>
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
            procedures={ophthaTreatments.map(t => ({ name: t.title, link: `/doctor/near-me/treat/ophthalmology/${t.slug}` }))}
            relatedDoctors={ophthaDoctors}
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
        />
    )
}