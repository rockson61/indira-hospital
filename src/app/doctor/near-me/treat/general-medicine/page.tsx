

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { Heart, Shield, Activity, Zap, Award, Clock, Users, Microscope, Stethoscope, Droplets } from "lucide-react"

export default function GeneralMedicineDepartmentPage() {
    const medicineDoctors = [
        {
            name: "Dr. P. Shankar",
            specialty: "Chairman - General Physician & Diabetology",
            image: "/images/doctors/dr-shankar.jpg",
            slug: "dr-p-shankar"
        }
    ]

    const quickFacts = [
        { label: 'Care Type', value: 'Internal Medicine', icon: 'Shield' },
        { label: 'Specialty', value: 'Complete Diabetes', icon: 'Activity' },
        { label: 'Diagnostic', value: 'Rapid Lab Hub', icon: 'Microscope' },
        { label: 'Availability', value: '24/7 ER Support', icon: 'Clock' },
    ]

    return (
        <DepartmentTemplate
            title="Elite General Medicine & Diabetology Hub"
            slug="general-medicine"
            shortDescription="Experience tertiary-level Internal Medicine care for complex chronic diseases, infectious fever management, and metabolic health restoration."
            fullDescription={(
                <div className="medicine-pillar-content space-y-20 text-left">
                    {/* ── 1. The Clinical Heart of the Hospital ───────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-primary italic border-l-8 border-indigo-600 pl-6 mb-8 uppercase tracking-tight text-left">
                            The Diagnostic Powerhouse: Master Internal Medicine
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <p>
                                The <strong>Department of General Medicine & Diabetology</strong> at Indira Super Speciality Hospital is the clinical backbone of our multi-specialty ecosystem. We specialize in the precision diagnosis and comprehensive management of <strong>Multisystem Disorders</strong>, providing a unified clinical pathway for patients with overlapping chronic conditions.
                            </p>
                            <p className="mt-4">
                                Our facility is designed for <strong>Medical Excellence</strong>, combining advanced point-of-care diagnostics with an elite team of internists and diabetologists. From managing resistant hypertension to deploying rapid-response protocols for tropical infectious diseases (Dengue, Typhoid), our mission is to deliver <strong>Definitive Clinical Solutions.</strong>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
                            <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2 italic">
                                    Metabolic Medicine Hub
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    Specialized care for <strong>Diabetology & Lipidology.</strong> We focus on "Metabolic Reversal" through programmed glycemic control, reducing the risk of cardiovascular events and renal damage.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-indigo-100 dark:border-indigo-700 shadow-sm">HBA1C Monitoring</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-indigo-100 dark:border-indigo-700 shadow-sm">Thyroid Precision</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-blue-300 mb-4 italic uppercase tracking-tighter text-left">Fever & Infectious Disease Unit</h4>
                                <p className="text-blue-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    Rapid triage for acute viral and bacterial infections. Our 24/7 in-house lab ensures zero-delay diagnosis of Dengue, Malaria, and Sepsis.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Sepsis Survival Protocol</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Evidence-Based Antibiotics</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialized Clinical Verticals ───────────────────── */}
                    <section className="medicine-verticals space-y-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Internal Medicine Specializations</h2>
                            <div className="h-1 w-24 bg-indigo-600 dark:indigo-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {/* Vertical 1: Chronic Disease */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Chronic Care</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Long-term management of Hypertension, Osteoarthritis, and COPD to prevent hospitalization.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Hypertension Hub", "Lipid Management", "Respiratory Care", "Geriatric Wellness"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 2: Diabetology */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between border-b-4 border-indigo-600">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Diabetology</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Comprehensive Diabetes pathways from diagnosis to complication management (Diabetic Foot/Eye).</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Insulin Regulation", "Foot Care Clinic", "Nutritional Therapy", "CGM Monitoring"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 3: Critical Care Integration */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Emergency Care</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Managing medical emergencies including acute renal failure, poisoning, and severe infections.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["ICU Management", "Sepsis Protocols", "Dialysis Support", "Trauma Integration"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── 3. Educational Deep-Dive: Diabetes Management ──────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-slate-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-indigo-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-indigo-900 dark:text-indigo-400 font-black uppercase text-3xl tracking-tighter not-italic font-primary italic">Clinical Insight: Beyond the Glucose Spike</h3>
                        <p>
                            Diabetes management is often oversimplified as "avoiding sugar." In truth, clinical Diabetology is about <strong>Vascular Protection.</strong> Prolonged spikes in blood glucose create "glycosylation" of small blood vessels in the kidneys, heart, and nerves.
                        </p>
                        <p className="mt-4">
                            At Indira Hospital, our <strong>Diabetes Reversal Orientation</strong> focuses on:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "HBA1C", v: "3-Month Accuracy" },
                                { k: "Lipids", v: "Heart-Safe Target" },
                                { k: "Renal", v: "Protein-Track" },
                                { k: "Retina", v: "Micro-Vascular" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-indigo-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-indigo-600">
                                    <p className="text-4xl font-black text-indigo-600 mb-2 font-primary italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic">
                            By monitoring these four pillars, we ensure that being a diabetic doesn't lead to long-term health complications. We empower you to live a life with <strong>Zero Clinical Limitations.</strong>
                        </p>
                    </section>

                    {/* ── 4. Medicine FAQs: The Clinical Deep-Dive ─────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-primary uppercase tracking-tighter text-indigo-400 text-left">
                           General Medicine: Specialist Clinical FAQs
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "What is the difference between a GP and an Internal Medicine specialist?",
                                    a: "A General Practitioner (GP) handles basic health issues and community medicine. An Internal Medicine specialist (General Physician) is specifically trained in a hospital setting to diagnose and treat complex adult illnesses, multisystem disorders, and chronic disease complications."
                                },
                                {
                                    q: "Can Type 2 Diabetes be truly reversed?",
                                    a: "Clinically, we speak of 'Remission.' Through aggressive weight loss, specialized nutritional therapy (Low-Carb/Intermittent methods), and metabolic management, many patients can achieve normal blood sugar levels without medications for extended periods."
                                },
                                {
                                    q: "What are the early warning signs of Thyroid disorder?",
                                    a: "Symptoms are often subtle: unexplained weight gain or loss, persistent fatigue, hair thinning, sensitivity to cold or heat, and mood fluctuations. A simple TSH screening can determine your thyroid status."
                                },
                                {
                                    q: "How often should I have a Master Health Checkup?",
                                    a: "After age 30, we recommend a comprehensive screening once a year. This allows for early detection of 'Silent Killers' like Hypertension, Hyperlipidemia, and early-stage metabolic disorders."
                                },
                                {
                                    q: "Is it normal to have a fever for more than 5 days?",
                                    a: "No. A persistent fever beyond 3-5 days requires clinical investigation. It could indicate tropical infections like Dengue or Typhoid, or deep-seated bacterial issues. Early lab testing is vital to prevent complications."
                                },
                                {
                                    q: "What is 'White Coat Hypertension'?",
                                    a: "It is a temporary spike in blood pressure caused by the stress of being in a clinical environment. We use <strong>Ambulatory BP Monitoring (ABPM)</strong> to track your pressure over 24 hours at home for an accurate diagnosis."
                                },
                                {
                                    q: "How do I manage high cholesterol safely?",
                                    a: "Management involves a combination of high-intensity statins (if indicated), heart-healthy nutritional integration, and regular lipid profiling to ensure your 'Bad Cholesterol' (LDL) is within the heart-safe range."
                                },
                                {
                                    q: "Does insulin lead to kidney failure?",
                                    a: "This is a myth. Insulin is the most natural way to control high blood sugar. It is the <strong>Uncontrolled Blood Sugar</strong> that causes kidney failure, not the insulin treatment. Insulin actually helps protect the kidneys by achieving tight control."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-indigo-400 transition-colors text-lg">
                                        <span className="text-indigo-500 text-2xl font-serif">Q.</span>
                                        <span>{faq.q}</span>
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed antialiased pl-8 font-medium font-primary">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )}
            procedures={[
                { name: "Diabetes Management Program", link: "/doctor/near-me/treat/general-medicine" },
                { name: "Executive Health Checkups", link: "/doctor/near-me/treat/general-medicine" },
                { name: "Hypertension Clinic", link: "/doctor/near-me/treat/general-medicine" },
                { name: "Adult Vaccination Hub", link: "/doctor/near-me/treat/general-medicine" },
                { name: "Thyroid & Metabolic Clinic", link: "/doctor/near-me/treat/general-medicine" },
                { name: "Infectious Disease Triage", link: "/doctor/near-me/treat/general-medicine" }
            ]}
            relatedDoctors={medicineDoctors}
            quickFacts={quickFacts}
        />
    )
}
