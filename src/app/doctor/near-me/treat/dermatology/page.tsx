

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { Sparkles, Shield, Zap, Award, Clock, Users, Microscope, Smile, Heart, Activity } from "lucide-react"

export default function DermatologyDepartmentPage() {
    const dermDoctors = [
        {
            name: "Dr. P. Shankar",
            specialty: "Chairman - Medical & Surgical Oversight",
            image: "/images/doctors/dr-shankar.jpg",
            slug: "dr-p-shankar"
        }
    ]

    const quickFacts = [
        { label: 'Technology', value: 'USFDA Approved Laser', icon: 'Zap' },
        { label: 'Care Type', value: 'Medical & Aesthetic', icon: 'Sparkles' },
        { label: 'Trichology', value: 'Advanced Hair Lab', icon: 'Activity' },
        { label: 'Safety', value: 'Zero-Downtime Focus', icon: 'Shield' },
    ]

    return (
        <DepartmentTemplate
            title="Dermatology, Laser & Trichology Hub in Vellore, Tamil Nadu"
            slug="dermatology"
            shortDescription="Experience world-class skin and hair care in Vellore. From chronic psoriasis management to advanced laser scar revision and non-surgical aesthetic enhancements."
            fullDescription={(
                <div className="dermatology-pillar-content space-y-20 text-left">
                    {/* ── 1. The Science of Radiant Skin ───────────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic border-l-8 border-rose-500 pl-6 mb-8 uppercase tracking-tight">
                            The Skin Authority: Advanced Clinical & Aesthetic Dermatology
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <p>
                                Your skin is the narrative of your health. The <strong>Department of Dermatology & Cosmetology</strong> at Indira Super Speciality Hospital is dedicated to the precise diagnosis and treatment of complex skin, hair, and nail disorders. We merge <strong>Evidence-Based Medical Dermatology</strong> with the latest breakthroughs in <strong>Laser Aesthetics.</strong>
                            </p>
                            <p className="mt-4">
                                Our facility is a "Laser Destination," featuring USFDA-approved platforms for permanent hair reduction, pigmentation removal, and fractional skin resurfacing. Whether you are battling chronic <strong>Vitiligo</strong> or seeking "Glass Skin" through precision chemical peels, our clinical pathways are designed for <strong>Visible Results</strong> and <strong>Safety.</strong>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose">
                            <div className="p-8 bg-rose-50 dark:bg-rose-900/20 rounded-[2.5rem] border border-rose-100 dark:border-rose-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-3xl group-hover:bg-rose-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-rose-900 dark:text-rose-200 mb-4 flex items-center gap-2 italic text-left">
                                    Micro-Laser Resurfacing
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4 text-left">
                                    Regenerate your skin from within. Our <strong>Fractional CO2 Laser</strong> creates microscopic thermal zones, triggering massive collagen production to erase deep acne scars and fine lines.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-rose-100 dark:border-rose-700">Scar Eraser</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-rose-100 dark:border-rose-700">Texture Refinement</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-rose-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-rose-300 mb-4 italic uppercase tracking-tighter text-left">Clinical Trichology Hub</h4>
                                <p className="text-rose-100/60 text-sm leading-relaxed mb-6 italic font-medium text-left">
                                    Stop hair loss at the root. We utilize <strong>Platelet-Rich Plasma (PRP)</strong> and medical-grade mesotherapy to revive dormant follicles and restore hair density.
                                </p>
                                <ul className="space-y-2 text-left">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-rose-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> Growth Factor Therapy</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-rose-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> Scalp Bio-Analysis</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialized Dermatology Verticals ────────────────── */}
                    <section className="derm-verticals space-y-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Dermatological Excellence Domains</h2>
                            <div className="h-1 w-24 bg-rose-600 dark:bg-rose-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {/* Vertical 1: Medical Derm */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Medical Care</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Clinical management of chronic conditions including Psoriasis, Vitiligo, Eczema, and complex skin infections.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Biologics for Psoriasis", "Vitiligo Grafting", "Acne Intensive Hub", "Fungal Eradication"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 2: Aesthetic Laser */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between border-b-4 border-rose-600">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Laser & Aesthetics</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Non-surgical transformations utilizing light energy and advanced chemical formulations for flawed skin.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Laser Hair Reduction", "Q-Switch for Pigment", "Carbon Hollywood Peel", "Botox & Dermal Fillers"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 3: Pediatric Derm */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Pediatric Skin</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Empathetic care for infants and children with atopic dermatitis, hemangiomas, and birthmarks.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Atopic Eczema Unit", "Neonatal Rash Care", "Wart & Molluscum", "Birthmark Monitoring"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── 3. Educational Deep-Dive: The Laser Journey ─────────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-slate-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-rose-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-rose-900 dark:text-rose-400 font-black uppercase text-3xl tracking-tighter not-italic font-heading italic">Clinical Insight: The Fractional Evolution</h3>
                        <p>
                            Historically, "skin resurfacing" involved long recovery times and high risk of pigmentation. Modern <strong>Fractional Laser Technology</strong> has revolutionized this. By treating only a fraction of the skin surface (10-20%) at a time, the surrounding healthy tissue accelerates the healing process of the micro-wounds.
                        </p>
                        <p className="mt-4">
                            At Indira Hospital, our <strong>Safe-Laser Protocol</strong> ensuring:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "USFDA", v: "Platform Safety" },
                                { k: "COOL", v: "Painless Delivery" },
                                { k: "FAST", v: "3-Day Local Healing" },
                                { k: "DEEP", v: "Collagen Induction" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-rose-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-rose-600">
                                    <p className="text-4xl font-black text-rose-600 mb-2 font-heading italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic">
                            Whether you're treating pitted acne scars or age-related loose skin, our fractional approach delivers dramatic texture improvement with <strong>Zero Lifestyle Interruption.</strong>
                        </p>
                    </section>

                    {/* ── 4. Dermatology FAQs: The Clinical Deep-Dive ─────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-heading uppercase tracking-tighter text-rose-400 text-left">
                           Skin & Hair: Specialist Clinical FAQs
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "Is Laser Hair Reduction permanent?",
                                    a: "The clinical term is 'Permanent Hair Reduction.' Most patients achieve a 90-95% reduction in hair growth after 6-8 sessions. Any remaining hair is usually much finer and lighter. Maintenance sessions may be required once every year."
                                },
                                {
                                    q: "How do I distinguish between Acne and Rosacea?",
                                    a: "Acne typically features comedones (blackheads/whiteheads). Rosacea is characterized by persistent redness, visible blood vessels, and flushing, often triggered by sun or spicy food. A clinical diagnosis is vital as the treatments differ significantly."
                                },
                                {
                                    q: "Can deep acne scars really be removed?",
                                    a: "Deep scars (ice-pick or boxcar) cannot be removed 100%, but they can be dramatically improved (60-80%) using a combination of <strong>Fractional CO2 Laser</strong>, <strong>Subcision</strong>, and <strong>Microneedling RF.</strong>"
                                },
                                {
                                    q: "What is PRP therapy for hair loss?",
                                    a: "Platelet-Rich Plasma (PRP) involves using your own blood's growth factors. We concentrate the platelets and inject them into the scalp to stimulate dormant follicles, prolong the growth phase of hair, and increase shaft thickness."
                                },
                                {
                                    q: "Is it safe to get Botox in my 20s?",
                                    a: "Yes. This is known as 'Preventative Botox.' By relaxing the muscles that create expression lines early, you prevent deep 'static' wrinkles from forming in your 30s and 40s."
                                },
                                {
                                    q: "How do I choose the right sunscreen for Indian skin?",
                                    a: "Look for 'Broad Spectrum' (protection against both UVA & UVB) with an SPF of at least 30. For humid Indian climates, 'Gel-based' or 'Matte-finish' formulations are preferred to avoid clogging pores (non-comedogenic)."
                                },
                                {
                                    q: "Can Vitiligo be cured?",
                                    a: "While there is no 'universal cure,' Vitiligo can be effectively managed. Modern therapies include <strong>Targeted Phototherapy</strong>, biologics to stop the spread, and <strong>Melanocyte Transfer</strong> surgery for stable patches to restore natural color."
                                },
                                {
                                    q: "Does Diet affect Acne?",
                                    a: "Yes. High-glycemic foods (sugary snacks) and, in some patients, dairy, can trigger insulin spikes that increase sebum production. We recommend an 'Anti-Inflammatory Diet' alongside medical treatment for best results."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-rose-400 transition-colors text-lg">
                                        <span className="text-rose-500 text-2xl font-serif">Q.</span>
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
                { name: "Laser Hair Reduction", link: "/doctor/near-me/treat/dermatology" },
                { name: "Acne Scar Revision (CO2)", link: "/doctor/near-me/treat/dermatology" },
                { name: "PRP Hair Restoration", link: "/doctor/near-me/treat/dermatology" },
                { name: "Hollywood Carbon Peel", link: "/doctor/near-me/treat/dermatology" },
                { name: "Psoriasis Biologics Unit", link: "/doctor/near-me/treat/dermatology" },
                { name: "Botox & Dermal Fillers", link: "/doctor/near-me/treat/dermatology" }
            ]}
            relatedDoctors={dermDoctors}
            quickFacts={quickFacts}
        />
    )
}
