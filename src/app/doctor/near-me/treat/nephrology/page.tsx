import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
    title: "Renal Sciences & Nephrology Hub in Vellore in Vellore | I...",
    description: "Advanced Renal Sciences & Nephrology Hub in Vellore, Tamil Nadu surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredite...",
    path: "/doctor/near-me/treat/nephrology"
});

export default function NephrologyDepartmentPage() {
    const nephrologyDoctors = [
        {
            name: "Dr. P. Shankar",
            specialty: "Chairman - Internal Medicine Oversight",
            image: "/images/doctors/dr-shankar.jpg",
            slug: "dr-p-shankar"
        }
    ]

    const quickFacts = [
        { label: 'Technology', value: 'High-Flux Dialysis', icon: 'Zap' },
        { label: 'Care Focus', value: 'Renal Preservation', icon: 'Shield' },
        { label: 'Emergency', value: '24/7 Acute Dialysis', icon: 'Clock' },
        { label: 'Safety', value: 'Zero-Infection Protocol', icon: 'Award' },
    ]

    return (
        <DepartmentTemplate
            title="Renal Sciences & Nephrology Hub in Vellore, Tamil Nadu"
            slug="nephrology"
            shortDescription="Advanced Kidney Care and 24/7 Dialysis in Vellore. We specialize in Chronic Kidney Disease (CKD) preservation, Hypertension management, and ICU-based Renal Replacement."
            fullDescription={(
                <div className="nephrology-pillar-content space-y-20 text-left">
                    {/* ── 1. The Renal Health Vision ─────────────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic border-l-8 border-indigo-600 pl-6 mb-8 uppercase tracking-tight text-left">
                            The Kidney Authority: Advanced Renal Sciences & Dialysis
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <p>
                                Your kidneys are the master chemists of your body. The <strong>Department of Nephrology & Renal Sciences</strong> at Indira Super Speciality Hospital is a regional benchmark for kidney function preservation and advanced blood purification. We operate on a clinical principle of <strong>"Preservation First"</strong>—utilizing evidence-based medicine to slow the progression of chronic kidney disease (CKD).
                            </p>
                            <p className="mt-4">
                                Our facility features a high-capacity <strong>24/7 Dialysis Unit</strong> equipped with high-flux filters that clear more toxins than standard systems. For critically ill patients in our ICU, we provide <strong>CRRT (Continuous Renal Replacement Therapy)</strong>, ensuring stable kidney support even in hemodynamically unstable cases.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
                            <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2 italic">
                                    High-Flux Dialysis Hub
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    Filtration beyond the basics. Our advanced membranes remove larger uremic toxins, reducing patient fatigue and long-term "Dialysis-Amyloidosis" complications.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-indigo-100 dark:border-indigo-700 shadow-sm">Ultrapure Water (RO)</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-indigo-100 dark:border-indigo-700 shadow-sm">Zero-Hepatitis Risk</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-indigo-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-indigo-300 mb-4 italic uppercase tracking-tighter text-left">CKD Preservation Clinic</h4>
                                <p className="text-indigo-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    Avoiding the need for dialysis. We utilize the latest in <strong>SGLT2 inhibitors</strong> and precision hypertension control to protect your remaining nephrons.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-indigo-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Diabetic Nephropathy Care</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-indigo-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Nutritional Renal Plan</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialized Nephrology Verticals ─────────────────── */}
                    <section className="neph-verticals space-y-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Renal Excellence Domains</h2>
                            <div className="h-1 w-24 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {/* Vertical 1: Dialysis Services */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Dialysis Center</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Tertiary-level blood purification featuring high-flux membranes and expert renal nursing care.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["24/7 Hemodialysis", "SLED for ICU Patients", "Peritoneal Dialysis Support", "Fistula Rescue Unit"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 2: Clinical Nephrology */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between border-b-4 border-indigo-600">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Kidney Health</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Precision management of protein leakage (nephrotic syndrome) and systemic kidney disorders.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Kidney Biopsy Hub", "Glomerular Disease Clinic", "Resistant Hypertension Lab", "Renal Stones Prevention"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 3: Critical Care Nephro */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Acute Renal Unit</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Managing multi-organ failure and sepsis-related kidney injuries with advanced CRRT multi-filtrate systems.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["CRRT (Continuous Dialysis)", "Plasma Exchange Hub", "Acute Failure Rescue", "Acid-Base Balance Lab"].map(i => (
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

                    {/* ── 3. Educational Deep-Dive: Dialysis Quality ─────────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-indigo-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-indigo-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-indigo-900 dark:text-indigo-400 font-black uppercase text-3xl tracking-tighter not-italic font-heading italic text-left">Clinical Insight: The Dialysis Purity Paradox</h3>
                        <p>
                            Not all dialysis is created equal. The standard version clears small molecules like Urea and Creatinine. However, <strong>High-Flux Hemodialysis</strong> is required to clear "Middle Molecules" (like Beta-2 Microglobulin) that cause chronic itching, bone pain, and heart damage in long-term patients.
                        </p>
                        <p className="mt-4">
                            At Indira Hospital, our <strong>Purity Standards</strong> ensuring:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "FLUX", v: "High-Toxin Clear" },
                                { k: "HDF", v: "Hemodiafiltration" },
                                { k: "RO-HD", v: "Ultrapure Water" },
                                { k: "UFR", v: "Gentle Fluid Pull" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-indigo-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-indigo-600">
                                    <p className="text-4xl font-black text-indigo-600 mb-2 font-heading italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic">
                            By utilizing superior membrane technology and pharmacological RO water, we ensure that your dialysis sessions are a bridge to wellness, not just a survival necessity.
                        </p>
                    </section>

                    {/* ── 4. Nephrology FAQs: The Clinical Deep-Dive ─────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-heading uppercase tracking-tighter text-indigo-400 text-left">
                           Renal Sciences: Specialist Clinical FAQs
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "Can Chronic Kidney Disease (CKD) be reversed?",
                                    a: "CKD is defined as permanent structural damage. While it cannot be 'reversed' to normal, it can be <strong>stabilized.</strong> With strict blood pressure control, proper diet, and avoiding nephrotoxic drugs (like certain painkillers), we can delay the need for dialysis by decades."
                                },
                                {
                                    q: "How many times a week is dialysis typically needed?",
                                    a: "The standard clinical guideline is thrice weekly (alternate days). Reducing frequency to twice a week often leads to toxin buildup and fluid overload in the heart, resulting in poor long-term outcomes and increased hospitalizations."
                                },
                                {
                                    q: "What is an AV Fistula, and why is it preferred?",
                                    a: "An Arteriovenous (AV) Fistula is a surgical connection between an artery and a vein in your arm. It is the 'Gold Standard' for dialysis access because it has the lowest risk of infection and provides the best blood flow compared to catheters."
                                },
                                {
                                    q: "Does diabetes always lead to kidney failure?",
                                    a: "Not if managed early. <strong>Diabetic Nephropathy</strong> is preventable. Regular screening for 'Microalbuminuria' (trace protein in urine) allows us to detect kidney strain years before any failure occurs."
                                },
                                {
                                    q: "Why do dialysis patients feel itchy or have bone pain?",
                                    a: "This is often due to high Phosphorus levels or the buildup of larger uremic toxins. Switching to <strong>High-Flux Dialysis</strong> and strict dietary phosphorus management (avoiding certain colas and processed foods) can significantly alleviate these symptoms."
                                },
                                {
                                    q: "Can I travel while being on regular dialysis?",
                                    a: "Yes. This is known as 'Holiday Dialysis.' You can coordinate with dialysis centers at your destination. We provide you with a comprehensive 'Dialysis Passport' containing your medical data to ensure continuity of care anywhere in the world."
                                },
                                {
                                    q: "What is the difference between Hemodialysis and Peritoneal Dialysis?",
                                    a: "Hemodialysis uses a machine to filter blood outside the body. Peritoneal Dialysis (PD) uses the lining of your own abdomen (peritoneum) as a filter. PD can often be done at home and is a great option for patients who live far from a hospital."
                                },
                                {
                                    q: "Is it safe to get the COVID vaccine or Flu shot for CKD patients?",
                                    a: "Absolutely. Kidney patients are at higher risk for severe infections. Vaccines are highly recommended and are safe for both CKD and transplant patients under direct medical supervision."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-indigo-400 transition-colors text-lg text-left">
                                        <span className="text-indigo-500 text-2xl font-serif">Q.</span>
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
                { name: "24/7 High-Flux Dialysis", link: "/doctor/near-me/treat/nephrology" },
                { name: "CRRT (ICU Dialysis Unit)", link: "/doctor/near-me/treat/nephrology" },
                { name: "Percutaneous Kidney Biopsy", link: "/doctor/near-me/treat/nephrology" },
                { name: "AV Fistula Creation Hub", link: "/doctor/near-me/treat/nephrology" },
                { name: "SLED (Slow Dialysis) Unit", link: "/doctor/near-me/treat/nephrology" },
                { name: "Transplant Workup Suite", link: "/doctor/near-me/treat/nephrology" }
            ]}
            relatedDoctors={nephrologyDoctors}
            quickFacts={quickFacts}
        />
    )
}