

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Info, 
    Mic,
    Activity,
    CheckCircle2,
    Microscope,
    Target,
    Navigation,
    ThermometerSnowflake,
    PlayCircle,
    ArrowRightCircle,
    Eye,
    Star,
    Music,
    Users,
    MessageSquare,
    Search,
    UserCheck,
    MapPin,
    Radio,
    Flame,
    Droplets
} from 'lucide-react'

export default function VoiceSurgeryPage() {
    return (
        <SubServiceTemplate
            title="Elite Microlaryngeal Surgery & Voice Care"
            slug="microlaryngeal-surgery-voice-care"
            parentServiceSlug="ent"
            departmentName="Indira Elite ENT Hub"
            description={
                <>
                    <p>
                        Hoarseness, vocal nodules, and polyps are not just medical issues—they are barriers to communication. At Indira Super Speciality Hospital, we specialized in **Microlaryngeal Surgery (Phonosurgery)**. Using Zeiss-magnified high-precision microscopy and "Cold Instrumentation," we meticulously remove vocal cord lesions while preserving the delicate mucosal layers essential for natural resonance.
                    </p>
                    <p className="mt-4 text-fuchsia-600 dark:text-fuchsia-400 font-semibold italic border-l-4 border-fuchsia-500 pl-4 uppercase tracking-tighter">
                        "Precision phonosurgery: The clinical art of restoring the human voice."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite ENT Service', icon: 'UserCheck' },
                { label: 'Visualization', value: '20X Zeiss Micro', icon: 'Eye' },
                { label: 'Care Type', value: 'Mucosal Sparing', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="30-45 Minutes"
            hospitalStay="24 Hours"
            recoveryTime="7-14 Days"
            anesthesia="General Anesthesia"
            reviews={{
                entityType: 'service',
                entityName: 'Microlaryngeal Surgery',
                entitySlug: 'microlaryngeal-surgery-voice-care'
            }}
            fullDescription={
                <div className="space-y-16">
                    {/* Mechanism: The Anatomy of Vibration */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-fuchsia-50/50 dark:bg-fuchsia-950/20 border border-fuchsia-100 dark:border-fuchsia-900/50 text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-fuchsia-500 pl-4 font-primary uppercase tracking-tighter italic">
                            Mechanism: Micro-Dissection vs Tissue Trauma
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    The vocal folds are composed of multiple delicate layers. The outermost layer—the epithelium—must remain supple to vibrate at high frequencies. Traditional surgery often leaves scars that stiffen these layers, resulting in a permanent breathy or rough voice.
                                </p>
                                <p className="mt-4">
                                    **Elite Phonosurgery** at Indira is performed using a "Cold Steel" technique. We avoid lasers that generate heat, which can cause thermal damage to the deep Reinke's space. By using delicate microscopic shears, we preserve the healthy tissue, ensuring your voice returns with its natural tone and range.
                                </p>
                                <div className="mt-8 space-y-4 text-sm font-medium">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-fuchsia-600" />
                                        <span><strong>Zeiss Micro-Magnification</strong>: 20x zoom to identify tiny cysts and pre-cancerous nodules.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-fuchsia-600" />
                                        <span><strong>Nerve-Preserving Approach</strong>: Specialized access that eliminates pressure on the tongue and dental injury.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-fuchsia-100 dark:border-fuchsia-800 shadow-xl flex flex-col justify-center">
                                <Radio className="w-16 h-16 text-fuchsia-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">The Absolute Voice Rest (AVR)</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 italic border-l-2 border-fuchsia-100 pl-4">
                                    Post-surgery, we implement a strict 7-day AVR protocol. This allows the mucosal lining to heal primarily, preventing the formation of granulomas or structural scars.
                                </p>
                                <div className="inline-flex items-center gap-2 text-fuchsia-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Vocal Resilience Assurance
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Specialized Phonosurgery Grid */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 italic font-primary text-fuchsia-300 uppercase tracking-widest leading-none">Clinical Voice Care Spectrum</h3>
                        <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
                            {[
                                { title: "Vocal Nodules", desc: "Callus-like growths caused by chronic vocal strain or professional speaking.", icon: Mic },
                                { title: "Vocal Polyps", desc: "Fluid-filled bumps appearing after severe acute vocal trauma.", icon: Activity },
                                { title: "Reinke's Edema", desc: "Swelling caused by smoking, leading to a permanent low-pitched voice.", icon: Droplets },
                                { title: "Laryngeal Papillomas", desc: "Structural growths that can obstruct breathing if left untreated.", icon: Flame }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:border-fuchsia-500/50 transition-all">
                                    <item.icon className="w-8 h-8 text-fuchsia-400 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-[10px] text-slate-400 leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Integrated Voice Hub Section */}
                    <section className="text-left">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-tighter italic border-b-2 border-fuchsia-100 inline-block">Professional Voice Diagnostics</h3>
                            <p className="text-slate-600 dark:text-slate-400 mt-2">Stroboscopy: The diagnostic gold standard for fine-vibration flaws.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                                    Standard fiberoptic scopes can miss 30% of vocal cord pathology. At Indira, we use **High-Speed Videostroboscopy**, which mimics slow-motion video of the vocal cords vibrating in real-time. This allowing us to see "hidden" cysts and mucosal stiffness that are otherwise invisible to the naked eye.
                                </p>
                                <div className="p-6 bg-fuchsia-50 dark:bg-fuchsia-950/20 rounded-3xl border border-fuchsia-100 dark:border-fuchsia-900 shadow-sm">
                                    <h5 className="font-bold mb-2">Integrated Voice Therapy</h5>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">"Post-op surgery is only half the cure. Our specialized speech pathologists help you retrain your vocal muscles to prevent the return of nodules and polyps."</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm text-center border-b-4 border-fuchsia-500">
                                    <p className="text-3xl font-bold text-fuchsia-600 mb-1">95%+</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Recurrent Clear Rate</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm text-center border-b-4 border-fuchsia-500">
                                    <p className="text-3xl font-bold text-fuchsia-600 mb-1">20X</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Zeiss Zoom</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-fuchsia-500" />
                            Elite Clinical FAQs: Microlaryngeal Surgery (MLS)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Can hoarseness mean cancer?",
                                    a: "Yes. Any hoarseness lasting more than 3 weeks must be evaluated. While often benign, early detection of laryngeal cancer via stroboscopy can be life-saving and voice-sparing."
                                },
                                {
                                    q: "Is the surgery performed through the neck?",
                                    a: "No. Microlaryngeal surgery is performed entirely through the mouth using specialized laryngoscopes. There are no external incisions or visible scars."
                                },
                                {
                                    q: "Why can't I whisper during voice rest?",
                                    a: "Whispering actually puts *more* strain on the vocal cords than normal talking. It forces the muscles to tighten in an unnatural way, which can disrupt the delicate mucosal healing process."
                                },
                                {
                                    q: "Will my voice sound different forever?",
                                    a: "In most cases where polyps or nodules are removed, the voice returns to its natural, clear state once healing is complete. In fact, many patients report a'clearer' voice than they had for years."
                                },
                                {
                                    q: "How soon can I return to professional singing?",
                                    a: "Physical healing takes 2 weeks, but we suggest a graded return to professional singing under the supervision of a specialized speech therapist after 4-6 weeks."
                                },
                                {
                                    q: "What role does Acid Reflux (GERD) play in voice loss?",
                                    a: "Reflux can cause 'Laryngopharyngeal Reflux' (LPR), where stomach acid burns the vocal cords. We often manage reflux aggressively alongside surgery to ensure growths don't return."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-1 text-fuchsia-500 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 antialiased italic">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            }
        />
    )
}
