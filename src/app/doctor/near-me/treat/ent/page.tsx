import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { 
    Ear, 
    Shield, 
    Zap, 
    Award, 
    Clock, 
    Users, 
    Microscope, 
    Wind, 
    HelpCircle, 
    Activity,
    Search,
    ChevronRight,
    ArrowRightCircle,
    ShieldCheck,
    Eye,
    Info,
    Move,
    Radiation,
    Navigation,
    ThermometerSnowflake,
    PlayCircle,
    Target,
    Headphones,
    Volume2
} from "lucide-react"

export default function ENTDepartmentPage() {
    const entDoctors = [
        {
            name: "Dr. Gayathri",
            specialty: "Consultant – ENT, Head & Neck Surgery",
            image: "/images/doctors/dr-gayathri.png",
            slug: "dr-gayathri"
        }
    ]

    const quickFacts = [
        { label: 'Technique', value: 'Coblation Surgery', icon: 'Zap' },
        { label: 'Visualization', value: '4K Endoscopy', icon: 'Eye' },
        { label: 'Care Type', value: 'Microscopic', icon: 'Shield' },
        { label: 'Experience', value: 'Regional Hub', icon: 'Award' },
    ]

    return (
        <DepartmentTemplate
            title="ENT, Head & Neck Micro-Surgery Hub in Vellore, Tamil Nadu"
            slug="ent"
            shortDescription="Advanced Otorhinolaryngology in Vellore. Regional Center for FESS, Micro-Ear Surgery, and Pediatric Coblation procedures led by Dr. Gayathri."
            fullDescription={(
                <div className="space-y-20 text-left">
                    {/* ── 1. The Auditory & Respiratory Vision ────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic border-l-8 border-emerald-600 pl-6 mb-8 uppercase tracking-tight text-left">
                            The Ear, Nose &amp; Throat Authority: Precision Micro-Surgery
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <p>
                                The <strong>Department of ENT (Otorhinolaryngology)</strong> at Indira Super Speciality Hospital is a regional leader in the diagnosis and surgical management of complex head and neck disorders. We combine the latest in <strong>Microsurgical Instrumentation</strong> with advanced <strong>Coblation Technology</strong> to treat everything from chronic sinusitis to profound hearing loss.
                            </p>
                            <p className="mt-4">
                                Led by <strong>Dr. Gayathri</strong>, our facility is equipped with high-definition nasal endoscopes, operative microscopes, and a dedicated audiology-speech therapy wing. Whether you are seeking a permanent solution for snoring or a bloodless tonsillectomy for your child, our clinical pathways are designed for <strong>Functional Restoration</strong> and <strong>Minimal Pain.</strong>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
                            <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-emerald-900 dark:text-emerald-200 mb-4 flex items-center gap-2 italic uppercase tracking-tighter">
                                    <Target className="w-6 h-6" />
                                    Advanced FESS Sinus Surgery
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    Breathe clearly again. Our <strong>4K FESS</strong> protocols allow for the clearing of chronic sinus blockages with extreme precision, avoiding external cuts and ensuring rapid nasal restoration.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-emerald-100 dark:border-emerald-700 font-heading">4K IMAGE MAPPING</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-emerald-100 dark:border-emerald-700 font-heading">ZERO-SCAR RECOVERY</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-emerald-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-emerald-300 mb-4 italic uppercase tracking-tighter flex items-center gap-2">
                                    <Zap className="w-6 h-6" />
                                    Coblation-Assisted Surgery
                                </h4>
                                <p className="text-emerald-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    The "Bloodless" Evolution. We utilize cold-plasma Coblation to remove tonsils and adenoids, resulting in 70% less post-operative pain and significantly faster return to normal diet.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-emerald-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> PEDIATRIC FOCUS</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-emerald-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> TISSUE-SPARING PRECISION</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialized ENT Center of Excellence ────────────────────────── */}
                    <section className="ent-specialization bg-emerald-600 text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-10">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[150px] -mr-48 -mt-48"></div>
                        <div className="relative z-10 max-w-4xl space-y-8 text-left">
                            <span className="inline-block px-6 py-2 bg-white text-emerald-600 text-xs font-black rounded-full uppercase tracking-widest italic shadow-lg">Micro-Ear Surgery Hub</span>
                            <h2 className="text-5xl font-black leading-tight italic tracking-tighter">Microscopic Hearing Restoration led by <span className="text-emerald-100">Dr. Gayathri</span></h2>
                            <div className="text-emerald-50 text-2xl leading-relaxed italic font-medium">
                                <p>We specialize in sub-millimeter precision for eardrum repairs (Tympanoplasty) and Ossicular Chain Reconstruction (OCR).</p>
                            </div>
                            <p className="text-emerald-100/80 text-lg leading-relaxed">
                                By utilizing high-end surgical microscopes, we can restore hearing thresholds and permanently dry up chronic middle-ear discharge, ensuring our patients in Vellore regain their auditory freedom safely.
                            </p>
                        </div>
                    </section>

                    {/* ── 3. Educational Deep-Dive: Sinusitis ────────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-slate-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-emerald-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-emerald-900 dark:text-emerald-400 font-black uppercase text-3xl tracking-tighter not-italic font-heading italic text-left">Clinical Insight: The Endoscopic Sinus Revolution</h3>
                        <p>
                            Chronic Sinusitis is more than just a "bad cold." It involves the persistent inflammation of the sinus linings, blocking the natural drainage pathways (ostia). Traditional surgery was invasive, but <strong>FESS</strong> changed the paradigm by allowing surgeons to visualize and clear blockages using 4K cameras inside the nose.
                        </p>
                        <p className="mt-4">
                            At Indira Hospital, our <strong>Endo-Sinus Protocol</strong> ensures:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "4K-View", v: "Clarity Beyond HD" },
                                { k: "Zero-Cut", v: "No Facial Scars" },
                                { k: "Fast-Drain", v: "Immediate Airflow" },
                                { k: "Precision", v: "Nerve-Safe Paths" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-emerald-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-emerald-600">
                                    <p className="text-4xl font-black text-emerald-600 mb-2 font-heading italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic border-l-4 border-emerald-500 pl-6">
                            By restoring the "Function" of the sinuses rather than just removing tissue, we ensure that your natural immune defense of the airways is preserved.
                        </p>
                    </section>

                    {/* ── 4. ENT Hub FAQs ─────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-heading uppercase tracking-tighter text-emerald-400 text-left">
                           ENT Specialist: Clinical Hub FAQs
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "What is Coblation-assisted tonsillectomy?",
                                    a: "Traditional surgery uses heat (300°C+) which damages tissue. Coblation uses low-temperature plasma (60°C) to dissolve tissue without burning. This leads to near-zero bleeding and children are back to eating within 24-48 hours."
                                },
                                {
                                    q: "Can Vertigo (dizziness) be treated by an ENT?",
                                    a: "Yes. Most dizziness is caused by 'BPPV'—crystals loosened in the inner ear. At Indira Hospital, we use specialized 'Canalith Repositioning Maneuvers' to instantly fix vertigo without surgery or long-term medication."
                                },
                                {
                                    q: "Is Tinnitus (ringing in the ears) curable?",
                                    a: "While Tinnitus doesn't always have a single 'cure,' it is often a symptom of underlying hearing loss or wax. We use high-resolution audiometry to find the cause and offer masking therapies to reclaim your peace of mind."
                                },
                                {
                                    q: "How safe are grommet tubes for a child's ear?",
                                    a: "Extremely safe. For children with persistent 'Glue Ear' (fluid buildup), grommets are a 15-minute daycare procedure that prevents recurrent infections and ensures hearing development stays on track."
                                },
                                {
                                    q: "Does snoring always require sinus surgery?",
                                    a: "Not always. Snoring can be caused by the soft palate, enlarged tonsils, or a deviated septum. We perform a 'Sleep Endoscopy' to identify the exact narrowing point before recommending laser or coblation correction."
                                },
                                {
                                    q: "Why do I have persistent hoarseness of voice?",
                                    a: "Hoarseness lasting more than 2 weeks must be examined by a specialist. It could be due to vocal cord nodules, polyps, or early-stage malignancies. We use flexible fiber-optic laryngoscopy for zero-delay diagnosis."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-emerald-400 transition-colors text-lg text-left">
                                        <span className="text-emerald-500 text-2xl font-serif">Q.</span>
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
                { name: "Coblation Tonsillectomy", link: "/doctor/near-me/treat/ent" },
                { name: "Micro-Ear Surgery (Tympanoplasty)", link: "/doctor/near-me/treat/ent/tympanoplasty-and-mastoidectomy" },
                { name: "FESS Sinus Surgery", link: "/doctor/near-me/treat/ent" },
                { name: "Septoplasty & Nasal Repair", link: "/doctor/near-me/treat/ent" },
                { name: "Thyroid Micro-Surgery Hub", link: "/doctor/near-me/treat/ent" },
                { name: "Voice & Laryngeal Therapy", link: "/doctor/near-me/treat/ent" }
            ]}
            relatedDoctors={entDoctors}
            quickFacts={quickFacts}
        />
    )
}
