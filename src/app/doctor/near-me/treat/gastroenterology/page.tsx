'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { SEED_DATA } from '@/lib/data/seed-data'
import { TREATMENT_DATA } from '@/lib/data/treatment-data'
import { 
    Stethoscope, 
    Shield, 
    Target, 
    Zap, 
    Activity, 
    Heart, 
    Clock, 
    Award, 
    Star, 
    Search,
    ChevronRight,
    ArrowRightCircle,
    ShieldCheck,
    Microscope,
    Flame,
    Droplets,
    Wind,
    Eye,
    Info,
    Move,
    Radiation,
    Navigation,
    ThermometerSnowflake,
    PlayCircle
} from 'lucide-react'

export default function GastroenterologyPillarPage() {
    // Filter specialists (Using current specialist Dr. Karan Shankar)
    const specialists = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.some(s => s.toLowerCase().includes('gastro')) || 
        dr.specialties?.some(s => s.toLowerCase().includes('hepatology'))
    );

    // Filter treatments
    const treatments = TREATMENT_DATA.filter(t => t.parentServiceSlug === 'gastroenterology');

    const title = "Gastroenterology & Hepatology"
    const slug = "gastroenterology"
    const shortDescription = "Regional Center of Excellence for Digestive Health. Advanced Therapeutic Endoscopy, Liver Care, and Surgical GI solutions led by Dr. Karan Shankar."
    
    return (
        <DepartmentTemplate
            title={title}
            slug={slug}
            shortDescription={shortDescription}
            fullDescription={(
                <div className="space-y-20 text-left">
                    {/* ── 1. The Clinical Vision ────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-primary italic border-l-8 border-blue-600 pl-6 mb-8 uppercase tracking-tight text-left">
                            Regional Center of Excellence for Digestive Health
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <p>
                                The <strong>Department of Gastroenterology &amp; Hepatology</strong> at Indira Super Speciality Hospital is a high-volume clinical hub dedicated to the precision diagnosis and surgical management of complex gastrointestinal, biliary, and liver disorders. Led by <strong>Dr. Karan Shankar</strong>, we utilize the <strong>Olympus 190 Series HD Endoscopy</strong> to detect and treat diseases of the esophagus, stomach, and colon with sub-millimeter clinical accuracy.
                            </p>
                            <p className="mt-4">
                                Our clinical philosophy is "Detection over Intervention." By employing <strong>Narrow Band Imaging (NBI)</strong> and <strong>High-Definition Mucosal Mapping</strong>, we can identify pre-cancerous lesions (polyps) and early-stage ulcers that are often invisible under standard white-light endoscopy. This allows for immediate therapeutic intervention, preventing the need for radical surgery in later stages.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
                            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[2.5rem] border border-blue-100 dark:border-blue-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4 flex items-center gap-2 italic uppercase tracking-tighter">
                                    <Zap className="w-6 h-6" />
                                    Therapeutic Endoscopy
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    Beyond simple diagnosis, we specialize in high-complexity interventions: <strong>Band Ligation</strong> for variceal bleeding, <strong>Argon Plasma Coagulation (APC)</strong> for vascular lesions, and <strong>Endoscopic Mucosal Resection (EMR)</strong> for early tumor removal.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-blue-100 dark:border-blue-700 font-primary">Olympus 190 SERIES</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-blue-100 dark:border-blue-700 font-primary">ZERO-DELAY DIAGNOSIS</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-blue-300 mb-4 italic uppercase tracking-tighter flex items-center gap-2">
                                    <Activity className="w-6 h-6" />
                                    Advanced Hepatology Hub
                                </h4>
                                <p className="text-blue-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    The liver is the body's primary chemical processing plant. We offer specialized reversal protocols for <strong>Fatty Liver (NASH)</strong> and comprehensive management for <strong>Liver Cirrhosis</strong>, Hepatitis B/C, and Autoimmune Liver Disease.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> FIBRO-SCAN COMPATIBLE</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> CIRRHOSIS REVERSAL MODELS</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialist Leadership ────────────────────────── */}
                    <section className="specialist-focus bg-blue-600 text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-10">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[150px] -mr-48 -mt-48"></div>
                        <div className="relative z-10 max-w-4xl space-y-8 text-left">
                            <span className="inline-block px-6 py-2 bg-white text-blue-600 text-xs font-black rounded-full uppercase tracking-widest italic shadow-lg">Clinical Leadership</span>
                            <h2 className="text-5xl font-black leading-tight italic tracking-tighter">Precision GI Management led by <span className="text-blue-100">Dr. Karan Shankar</span></h2>
                            <div className="text-blue-50 text-2xl leading-relaxed italic font-medium">
                                <p>With advanced fellowships in Minimal Access Surgery (FIAGES, FMAS, DMAS), Dr. Karan Shankar specializes in the intersection of medical gastroenterology and high-precision keyhole surgery.</p>
                            </div>
                            <p className="text-blue-100/80 text-lg leading-relaxed">
                                His decade-long experience in <strong>Therapeutic Gastroenterology</strong> ensures that patients in Vellore have access to the most tissue-preserving, infection-safe protocols for gallbladder, liver, and colorectal conditions.
                            </p>
                        </div>
                    </section>

                    {/* ── 3. Educational Deep-Dive: Fatty Liver ────────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-slate-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-blue-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-blue-900 dark:text-blue-400 font-black uppercase text-3xl tracking-tighter not-italic font-primary italic text-left">Clinical Alert: The "Silent" Epidemic of Fatty Liver</h3>
                        <p>
                            Non-Alcoholic Fatty Liver Disease (NAFLD/NASH) is the leading cause of liver failure in modern urban centers. Because the liver has no pain receptors, inflammatory damage (Steatohepatitis) can progress to Cirrhosis without any visible symptoms for years.
                        </p>
                        <p className="mt-4">
                            At Indira Hospital, our <strong>Hepatology Reversal Model</strong> focuses on:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "Grade 1-2", v: "Reversible Stage" },
                                { k: "NASH Audit", v: "Cellular Mapping" },
                                { k: "Anti-Fibrosis", v: "Scar Mitigation" },
                                { k: "Diet Hub", v: "Metabolic Fix" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-blue-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-blue-600">
                                    <p className="text-4xl font-black text-blue-600 mb-2 font-primary italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic border-l-4 border-blue-500 pl-6">
                            If you have Type-2 Diabetes or High Cholesterol, your risk of silent liver damage is 60% higher than the general population. Early screening is life-saving.
                        </p>
                    </section>

                    {/* ── 4. GI Global FAQs ─────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-primary uppercase tracking-tighter text-blue-400 text-left">
                           Gastrointestinal Hub: Clinical Case FAQs
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "Is an Endoscopy painful or traumatic?",
                                    a: "No. At Indira Hospital, we use 'Conscious Sedation' or 'Painless Endoscopy.' A certified anesthesiologist ensures you are in a state of light sleep. The procedure takes 10 minutes, and you wake up with no memory of the tube insertion."
                                },
                                {
                                    q: "How safe is Laparoscopic Gallbladder surgery?",
                                    a: "Laparoscopic Cholecystectomy is a gold-standard procedure with 99% success. Most patients are discharged within 24 hours and can return to a normal diet and desk work within 3-4 days."
                                },
                                {
                                    q: "What is the best way to prevent Colon Cancer?",
                                    a: "A 'screening colonoscopy' after the age of 45 is the only way to find polyps (small growths) before they turn into cancer. Removing a polyp during colonoscopy takes minutes and effectively prevents cancer from ever developing."
                                },
                                {
                                    q: "Can GERD (Acid Reflux) cause esophageal cancer?",
                                    a: "Yes, chronic untreated acid reflux can lead to 'Barrett's Esophagus,' which is a pre-cancerous condition. If you rely on daily antacids, an Endoscopy is mandatory to check for mucosal erosion."
                                },
                                {
                                    q: "Why do I need an ERCP for jaundice?",
                                    a: "Jaundice is often caused by a blockage in the bile duct (stone or tumor). ERCP is a specialized endoscopic procedure to remove the stone or place a stent without making any external cuts on your body."
                                },
                                {
                                    q: "What is the specialized care for Crohn's and Colitis (IBD)?",
                                    a: "IBD requires 'Immunomodulator' and 'Biological' therapies. We provide advanced infusion protocols that can induce deep mucosal healing, preventing the need for radical bowel resection surgery later."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-blue-400 transition-colors text-lg text-left">
                                        <span className="text-blue-500 text-2xl font-serif">Q.</span>
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
            procedures={treatments.map(t => ({ name: t.title, link: `/doctor/near-me/treat/gastroenterology/${t.slug}` }))}
            relatedDoctors={specialists}
            relatedServices={treatments.map(t => ({
                title: t.title,
                url: `/doctor/near-me/treat/gastroenterology/${t.slug}`,
                description: t.shortDescription,
                icon: 'Stethoscope'
            }))}
            technology={[
                { name: 'Olympus 190 HD', description: 'World-standard mucosal visualization.', icon: 'Activity' },
                { name: 'Narrow Band Imaging', description: 'Early cancer/polyp detection.', icon: 'Search' },
                { name: '4K Laparoscopy Tower', description: 'Bloodless abdominal resections.', icon: 'Shield' }
            ]}
        />
    )
}
