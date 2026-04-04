import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { getTreatmentBySlug, getAllTreatments, TREATMENT_DATA } from '@/lib/data/treatment-data'
import { SEED_DATA } from '@/lib/data/seed-data'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
    title: "Doctor | Indira Super Speciality Hospital",
    description: "Learn more about doctor at Indira Hospital, Vellore's leading super-speciality center for advanced clinical care.",
    path: "/doctor/near-me/treat/obstetrics-gynaecology"
});

export default function GynaecologyPillarPage() {
    // Filter specialists (Using current specialist Dr. Praharshitha Sagiraju)
    const specialists = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.some(s => s.toLowerCase().includes('gynaec')) || 
        dr.specialties?.some(s => s.toLowerCase().includes('obstetrics'))
    );

    // Filter treatments
    const treatments = TREATMENT_DATA.filter(t => t.parentServiceSlug === 'obstetrics-gynaecology');

    const title = "Gynaecology & Obstetrics"
    const slug = "obstetrics-gynaecology"
    const shortDescription = "Comprehensive Women's Healthcare led by AIIMS experts. Specializing in Minimal Access (Keyhole) Surgery, High-Risk Maternity, and Advanced Fertility solutions."
    
    return (
        <DepartmentTemplate
            title={title}
            slug={slug}
            shortDescription={shortDescription}
            fullDescription={(
                <div className="space-y-20 text-left">
                    {/* ── 1. The Clinical Vision ────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-rose-900 dark:text-rose-400 font-heading italic border-l-8 border-rose-600 pl-6 mb-8 uppercase tracking-tight text-left">
                            The Gynaecology Authority: Precision Women's Care
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <p>
                                The <strong>Department of Gynaecology &amp; Obstetrics</strong> at Indira Super Speciality Hospital is a regional center of excellence dedicated to the total healthcare lifecycle of women. Led by <strong>Dr. Praharshitha Sagiraju</strong> (MS - AIIMS Raipur, PDCC - Gynae Endoscopy), we merge the highest academic standards of AIIMS with a deeply compassionate, patient-first philosophy.
                            </p>
                            <p className="mt-4">
                                Our facility is built on the pillars of <strong>Zero-Compromise Safety</strong> and <strong>Minimal Access Surgery</strong>. From the sub-millimeter precision of 4K Laparoscopic Hysterectomies to the high-vigilance management of High-Risk Pregnancies, we ensure that women in Vellore have access to elite clinical pathways previously only available in major metropolitan centers.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
                            <div className="p-8 bg-rose-50 dark:bg-rose-900/20 rounded-[2.5rem] border border-rose-100 dark:border-rose-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-3xl group-hover:bg-rose-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-rose-900 dark:text-rose-200 mb-4 flex items-center gap-2 italic uppercase tracking-tighter">
                                    <Target className="w-6 h-6" />
                                    Minimal Access (Keyhole) Hub
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    Transforming major surgeries into daycare procedures. We specialize in <strong>4K Laparoscopic Hysterectomy</strong> and <strong>Laparoscopic Myomectomy</strong> (Fibroid removal), ensuring near-invisible scarring and a return to home within 24-48 hours.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-rose-100 dark:border-rose-700 font-heading italic">AIIMS PROTOCOLS</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-rose-100 dark:border-rose-700 font-heading italic">4K IMAGE PRECISION</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-rose-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-rose-300 mb-4 italic uppercase tracking-tighter flex items-center gap-2">
                                    <Activity className="w-6 h-6" />
                                    High-Risk Maternal Security
                                </h4>
                                <p className="text-rose-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    Managing pregnancies complicated by PIH, Diabetes, or twins. Our Maternal-Fetal units are backed by a <strong>Level II Neonatal ICU</strong>, providing a safety net for premature births and obstetric emergencies.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-rose-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> 24/7 OBSTETRIC GUARD</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-rose-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> PAINLESS LABOR (EPIDURAL)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialized OBGYN Centers ────────────────────────── */}
                    <section className="obgyn-centers bg-rose-600 text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-10">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[150px] -mr-48 -mt-48"></div>
                        <div className="relative z-10 max-w-4xl space-y-8 text-left">
                            <span className="inline-block px-6 py-2 bg-white text-rose-600 text-xs font-black rounded-full uppercase tracking-widest italic shadow-lg">Gynae-Endoscopy Authority</span>
                            <h2 className="text-5xl font-black leading-tight italic tracking-tighter">Total Female Lifecycle Management led by <span className="text-rose-100">Dr. Praharshitha Sagiraju</span></h2>
                            <div className="text-rose-50 text-2xl leading-relaxed italic font-medium">
                                <p>With a PDCC in Gynaecological Endoscopy and MS from AIIMS Raipur, Dr. Praharshitha specialized in organ-preserving surgeries that protect fertility while curing complex diseases.</p>
                            </div>
                            <p className="text-rose-100/80 text-lg leading-relaxed italic">
                                Her focus on <strong>Minimal Access Surgery</strong> ensures that our patients in Vellore experience significantly less pain, near-zero infection rates, and faster recoveries than traditional open procedures.
                            </p>
                        </div>
                    </section>

                    {/* ── 3. Educational Deep-Dive: PCOS & Metabolic Health ────────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-slate-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-rose-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-rose-900 dark:text-rose-400 font-black uppercase text-3xl tracking-tighter not-italic font-heading italic text-left">Clinical insight: The PCOS &amp; Fertility Reset</h3>
                        <p>
                            PCOS (Polycystic Ovary Syndrome) is not just a 'period problem'; it is a systemic metabolic disorder. At Indira Hospital, our <strong>Reproductive Medicine</strong> wing focuses on 'Scientific Reversal' by tackling the underlying insulin resistance and hormonal imbalance before attempting aggressive fertility treatments.
                        </p>
                        <p className="mt-4">
                            Our <strong>Fertility/PCOS Roadmap</strong> focuses on:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "Follicular", v: "TVS Cycle Tracking" },
                                { k: "Hormonal", v: "Endocrine Titration" },
                                { k: "IUI Hub", v: "Scientific Insemination" },
                                { k: "Diet Hub", v: "Metabolic Restoration" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-rose-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-rose-600">
                                    <p className="text-4xl font-black text-rose-600 mb-2 font-heading italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic border-l-4 border-rose-500 pl-6">
                            By centering our care around <strong>Organ Preservation</strong> and <strong>Natural Fertility optimization</strong>, we ensure that surgical or clinical intervention is always the most precise and necessary choice.
                        </p>
                    </section>

                    {/* ── 4. Women's Health Hub FAQs ─────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-heading uppercase tracking-tighter text-rose-400 text-left">
                           OBGYN Hub: Clinical Lifecycle FAQs
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "Can I try for a Normal Delivery after a previous C-section (VBAC)?",
                                    a: "Yes. At Indira Hospital, we support VBAC for suitable candidates under strict fetal monitoring. Our labor suits are equipped for immediate surgical backup if a transition becomes necessary for maternal or fetal safety."
                                },
                                {
                                    q: "What makes Laparoscopic (Keyhole) Hysterectomy better?",
                                    a: "Traditional Hysterectomy requires a 6-inch incision and 6 weeks of rest. Our Laparoscopic method uses 5mm micro-incisions. Patients walk within 6 hours, are discharged within 24 hours, and return to work in 10 days."
                                },
                                {
                                    q: "Does an Epidural (Painless Labor) affect the baby's brain?",
                                    a: "No. Epidural analgesia is the gold standard for labor pain relief. It stays in the spinal space and has zero negative impact on the baby's brain development or Apgar scores. In fact, it often helps in a calmer birthing process."
                                },
                                {
                                    q: "At what age should women start Cervical Cancer screening?",
                                    a: "We follow modern guidelines recommending Pap Smears starting at age 21, and HPV Co-testing every 5 years for women over 30. Early detection allows for 100% cure rates of pre-cancerous lesions."
                                },
                                {
                                    q: "Can fibroids be removed without removing the whole uterus?",
                                    a: "Absolutely. We specialize in <strong>Laparoscopic Myomectomy</strong>, where we only remove the fibroids with high-precision micro-tools, preserving the uterus for women who wish to conceive in the future."
                                },
                                {
                                    q: "Is Hormone Replacement Therapy (HRT) safe for menopause?",
                                    a: "Modern HRT is extremely safe for most women when started within the 'Window of Opportunity' (before age 60 or 10 years post-menopause). We perform annual 'Safety Audits' for all patients on hormone therapy."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-rose-100 mb-6 flex items-start gap-4 italic group-hover:text-rose-400 transition-colors text-lg text-left">
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
            procedures={treatments.map(t => ({ name: t.title, link: `/doctor/near-me/treat/obstetrics-gynaecology/${t.slug}` }))}
            relatedDoctors={specialists}
            relatedServices={treatments.map(t => ({
                title: t.title,
                url: `/doctor/near-me/treat/obstetrics-gynaecology/${t.slug}`,
                description: t.shortDescription,
                icon: 'Sparkles'
            }))}
            technology={[
                { name: '4K Laparoscopic Stack', description: 'World-standard surgical magnification.', icon: 'Activity' },
                { name: 'Office Hysteroscopy', description: 'Zero-cut uterine cavity diagnosis.', icon: 'Search' },
                { name: 'High-Res 4D Ultrasound', description: 'Advanced fetal structural mapping.', icon: 'HeartPulse' }
            ]}
        />
    )
}