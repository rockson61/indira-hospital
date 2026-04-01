

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { Baby, Shield, Heart, Zap, Award, Clock, Users, Flame, Microscope, Target } from "lucide-react"

export default function PaediatricsDepartmentPage() {
    return (
        <DepartmentTemplate
            title="Elite Paediatrics & Neonatology Hub"
            slug="paediatrics"
            shortDescription="World-class child healthcare combining Level 3 NICU precision with compassionate pediatric surgical excellence."
            fullDescription={(
                <div className="paediatrics-pillar-content space-y-20 text-left">
                    {/* ── 1. The Clinical Promise for the Next Generation ───────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-primary italic border-l-8 border-rose-600 pl-6 mb-8 uppercase tracking-tight text-left">
                            Small Lives, Big Care: Excellence in Paediatrics
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 text-left">
                            <p>
                                The <strong>Department of Paediatrics & Neonatology</strong> at Indira Super Speciality Hospital is a dedicated sanctuary for children's health, from the first breath of a neonate to the complex healthcare needs of adolescents. Our clinical philosophy is simple: <strong>Children are not small adults.</strong> They require specialized, age-appropriate medical and surgical care provided in a nurturing, child-friendly environment.
                            </p>
                            <p className="mt-4">
                                Our facility features a state-of-the-art <strong>Level 3 Neonatal Intensive Care Unit (NICU)</strong>, an automated <strong>Vaccination Hub</strong>, and specialized <strong>Pediatric Surgery</strong> units for congenital and acquired conditions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
                            <div className="p-8 bg-rose-50 dark:bg-rose-900/20 rounded-[2.5rem] border border-rose-100 dark:border-rose-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-3xl group-hover:bg-rose-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-rose-900 dark:text-rose-200 mb-4 flex items-center gap-2 italic">
                                    Level 3 Neonatal ICU
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    "Saving the Smallest of Global Citizens." Our NICU provides specialized care for preterm babies as small as 800 grams, with 24/7 neonatologist monitoring and advanced TPN (Total Parenteral Nutrition).
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-rose-100 dark:border-rose-700 shadow-sm">Surfactant Therapy</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-rose-100 dark:border-rose-700 shadow-sm">HF-Oscillation Ventilator</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-rose-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-rose-300 mb-4 italic uppercase tracking-tighter text-left">Pediatric Surgical Excellence</h4>
                                <p className="text-rose-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    Specialized operative care for children, from hernia and hydrocele to complex neonatal bowel surgeries and hypospadias correction.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-rose-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> Child-Safe Anesthesia</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-rose-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> Micro-Incision Surgery</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialist Child Care Pillars ───────────────────────── */}
                    <section className="paeds-verticals space-y-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Total Child Wellness Pillars</h2>
                            <div className="h-1 w-24 bg-rose-600 dark:bg-rose-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {/* Vertical 1: General Paediatrics */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Clinical Hub</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Management of childhood asthma, recurrent infections, and metabolic growth disorders.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Asthma & Allergy Clinic", "Growth & Nutrition", "Vaccination Management", "Developmental Screening"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 2: Neonatology */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Neonatal NICU</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Highest-level care for premature, low-birth-weight, and critically ill surgical neonates.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Total Parenteral Nutrition", "Neuro-Protection", "Phototherapy Units", "Kangaroo Care Rooms"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 3: Pediatric Surgery */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Surgical Hub</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Precision operative interventions for simple and complex childhood anatomical conditions.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Pediatric Hernia", "Hydrocele Management", "Intussusception Surgery", "Hypospadias Correction"].map(i => (
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

                    {/* ── 3. Educational Deep-Dive: Vaccination ─────────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-rose-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-rose-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-rose-900 dark:text-rose-400 font-black uppercase text-3xl tracking-tighter not-italic font-primary italic text-left">Immunisation: The Invisible Shield of Childhood</h3>
                        <p>
                            Vaccines are the single most effective clinical intervention in human history. They prepare a child's immune system to fight life-threatening diseases before they even occur. At Indira Hospital, we follow a rigorous <strong>Painless Vaccination Protocol</strong> combined with multi-channel reminders to ensure no child misses their vital shield.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "Polio", v: "Oral + IV Shield" },
                                { k: "Rotavirus", v: "Anti-Diarrheal" },
                                { k: "Pentavalent", v: "5-in-1 Protection" },
                                { k: "MMR", v: "Measles/Mumps/Rubella" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-rose-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-rose-600">
                                    <p className="text-4xl font-black text-rose-600 mb-2 font-primary italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic">
                            Parenting doesn't come with a manual, but it does come with a clinical partner. Our <strong>Child Health Passport</strong> helps you track every milestone and vaccination with scientific precision.
                        </p>
                    </section>

                    {/* ── 5. Specialized Pediatric Clinical Pathways ─────────────────── */}
                    <section className="paeds-pathways space-y-12">
                        <div className="flex items-baseline gap-4">
                            <h2 className="text-2xl font-black uppercase italic text-slate-900 dark:text-white">Precision Child-Health Units</h2>
                            <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:border-rose-600">
                                <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-4 uppercase italic">The Asthma & Allergy Hub</h5>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                    Childhood asthma requires a "detective" approach. We utilize <strong>Pediatric Spirometry</strong> and skin-prick testing to identify environmental triggers. Our management focuses on <strong>Inhalation Therapy</strong> (spacers/nebulizers) to deliver medicine directly to the lungs, avoiding systemic side effects of oral steroids.
                                </p>
                            </div>
                            <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:border-rose-600">
                                <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-4 uppercase italic">Growth & Obesity Clinic</h5>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                    Growth is the barometer of childhood health. We monitor <strong>Height-for-Age</strong> and <strong>Weight-for-Age</strong> percentiles with scientific precision. Our endocrinology-linked approach manages growth hormone deficiencies, childhood obesity, and early (precocious) puberty symptoms.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ── 6. Advanced Paediatric FAQs ────────────────────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-primary uppercase tracking-tighter text-rose-400 text-left">
                           Paediatrics: Comprehensive Clinical FAQs
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "What makes Level 3 NICU different from others?",
                                    a: "A Level 3 NICU has the clinical mandatory specialist (Neonatologists) and machines (High-Frequency ventilators, Nitric Oxide, CPAP) to treat the most critical babies, including those requiring surgical intervention or those born extremely premature."
                                },
                                {
                                    q: "When should I start my child's vaccination schedule?",
                                    a: "Vaccination begins at birth with BCG, Polio(OPV-0), and Hepatitis B-0. We provide a comprehensive childhood vaccination card that aligns with both Indian Academy of Paediatrics (IAP) and WHO guidelines."
                                },
                                {
                                    q: "Are 'Painless Vaccines' less effective?",
                                    a: "No. 'Painless' (Acellular) vaccines are just as effective in providing immunity but have a significantly lower risk of post-vaccination fever and local swelling, making the experience more comfortable for the child and parents."
                                },
                                {
                                    q: "What are 'Delayed Milestones'?",
                                    a: "If a child isn't sitting, walking, or speaking by the expected age window, it is called a delayed milestone. Early screening by our pediatricians and physiotherapists allows for intervention while the child's brain is still highly adaptable."
                                },
                                {
                                    q: "Is surgery safe for newborns?",
                                    a: "Yes, when performed by a specialized Pediatric Surgeon under neonatal anesthesia management. Modern micro-surgical techniques allow us to fix life-threatening birth defects with minimal physiological stress on the baby."
                                },
                                {
                                    q: "How do I manage recurrent cold and cough in my child?",
                                    a: "Recurrent respiratory issues are common in preschool years but require screening for Pediatric Asthma or Allergic Rhinitis. We focus on allergen identification and preventive management rather than just suppressing symptoms with antibiotics."
                                },
                                {
                                    q: "What is Kangaroo Mother Care (KMC)?",
                                    a: "KMC involves skin-to-skin contact between the parent and the preterm neonate. This clinical intervention stabilizes the baby's heart rate, breathing, and temperature, while significantly improving weight gain and maternal bonding."
                                },
                                {
                                    q: "Can congenital heart disease be detected before birth?",
                                    a: "Yes. Through <strong>Fetal Echocardiogram</strong>, our specialists can detect structural heart defects as early as the 18th week of pregnancy, allowing our team to be prepared for immediate neonatal cardiac intervention upon birth."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-rose-400 transition-colors text-lg text-left">
                                        <span className="text-rose-500 text-2xl font-serif">Q.</span>
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
                { name: "Neonatal Intensive Care", link: "/doctor/near-me/treat/paediatrics" },
                { name: "Childhood Vaccination Hub", link: "/doctor/near-me/treat/paediatrics" },
                { name: "Pediatric Surgery Center", link: "/doctor/near-me/treat/paediatrics" },
                { name: "Growth & Nutrition Unit", link: "/doctor/near-me/treat/paediatrics" },
                { name: "Pediatric Asthma Clinic", link: "/doctor/near-me/treat/paediatrics" },
                { name: "Neonatal Follow-up", link: "/doctor/near-me/treat/paediatrics" }
            ]}
            technology={[
                {
                    name: "Advanced Baby Warmers",
                    description: "Radiant warmth technology for maintaining critical body temperature in preterm neonates.",
                    icon: "Flame"
                },
                {
                    name: "HF-Oscillation Ventilator",
                    description: "High-precision lung support for the smallest babies without lung tissue damage.",
                    icon: "Zap"
                }
            ]}
            relatedServices={[
                {
                    title: "Obstetrics Center",
                    description: "High-risk pregnancy and seamless neonatal transition support.",
                    slug: "obstetrics-gynaecology"
                },
                {
                    title: "General Surgery",
                    description: "Coordinated pediatric and general surgical infrastructure.",
                    slug: "general-surgery"
                }
            ]}
            quickFacts={[
                { label: 'Care Level', value: 'Level 3 NICU', icon: 'Shield' },
                { label: 'Specialists', value: 'Neonatologists', icon: 'Baby' },
                { label: 'Facility', value: 'Automated Hub', icon: 'Microscope' },
                { label: 'Success', value: 'High Survival Rate', icon: 'Target' },
            ]}
        />
    )
}
