import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'
export default function TympanoplastyPage() {
    return (
        <SubServiceTemplate
            title="Elite Tympanoplasty & Mastoidectomy"
            slug="tympanoplasty-and-mastoidectomy"
            parentServiceSlug="ent"
            departmentName="Indira Elite ENT Hub"
            description={
                <article>
                    <p className="text-lg leading-relaxed">
                        <strong>Elite Tympanoplasty & Mastoidectomy</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
                    </p>
                </article>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="60-90 Minutes"
            hospitalStay="24 Hours"
            recoveryTime="3-4 Weeks"
            anesthesia="General Anesthesia"
            reviews={{
                entityType: 'service',
                entityName: 'Tympanoplasty & Mastoidectomy',
                entitySlug: 'tympanoplasty-and-mastoidectomy'
            }}
            fullDescription={
                <div className="space-y-16">
                {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
                <AioKnowledgeBlock 
                    title="Quick Facts: Elite Tympanoplasty & Mastoidectomy in Vellore"
                    items={[
                        { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
                        { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
                        { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
                        { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
                    ]}
                />

                <article className="space-y-12">
                    {/* Mechanism: Microsurgical Ear Restoration */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-3xl -z-10" />
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4 font-heading">
                            Mechanism: Tympanic Membrane & Ossicular Grafting
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert text-left">
                                <p className="text-lg leading-relaxed">
                                    A perforation in the eardrum disrupts the "Impedance Matching" mechanism of the middle ear, causing conductive hearing loss. **Tympanoplasty** involves meticulously cleaning the ear canal and using your own tissue—usually temporal fascia or tragal cartilage—as a natural graft to close the opening.
                                </p>
                                <p className="mt-4">
                                    When the infection involves the tiny ossicles (hearing bones), we perform **Ossicular Chain Reconstruction (OCR)**. We use microscopic titanium or biocompatible implants to replace damaged bones like the incus or stapes, restoring the physical path of sound into the inner ear.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Microscopic Cleansing</strong>: Removal of infected skin (cholesteatoma) that can erode the skull.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Water-proof Integrity</strong>: Ensuring the middle ear is permanently protected from external water and bacteria.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-xl flex flex-col justify-center">
                                <Volume2 className="w-16 h-16 text-emerald-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">The "Dry Ear" Lifecycle</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-heading">
                                    Following surgery, we monitor for the **Success Indicators**: a dry middle ear space, a healthy vascularized graft, and a measurable gain in the decibel threshold of hearing.
                                </p>
                                <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Auditory Pathway Assurance
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Ear Condition Categories */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4">Common Ear Surgery Indications</h3>
                            <p className="text-slate-600 dark:text-slate-400">Our ENT Hub is equipped for both pediatric and adult ear microsurgery.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { title: "Eardrum Perforation", desc: "A persistent hole in the eardrum usually caused by repeated infections or injury." },
                                { title: "Cholesteatoma", desc: "A destructive skin-filled cyst that can erode hearing bones and the skull base." },
                                { title: "CSOM Discharge", desc: "Chronic foul-smelling ear discharge that does not respond to medical drops." },
                                { title: "Otosclerosis", desc: "Hardening of the hearing bones that requires stapedotomy for sound restoration." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:bg-emerald-50/20 transition-all border-b-4 border-emerald-500">
                                    <h4 className="font-bold mb-2 text-emerald-600 font-heading italic tracking-tighter uppercase">{item.title}</h4>
                                    <p className="text-[10px] text-slate-500 leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Integrated Ear Hub Section */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-transparent shadow-2xl" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
                            <div className="space-y-6">
                                <h3 className="font-heading text-3xl font-bold italic font-heading text-emerald-300">Mastoidectomy: Cleansing the Temporal Bone</h3>
                                <p className="text-slate-400 leading-relaxed italic">
                                    When infection invades the honeycomb-like mastoid bone behind the ear, a simple tympanoplasty is not enough. We perform **Mastoidectomy** using high-speed micro-drills to clear every cell of infection, preventing serious brain complications.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                                    <p className="text-xs text-emerald-300 font-bold uppercase tracking-widest mb-1 font-heading italic">Microscope</p>
                                    <p className="font-heading text-3xl font-bold text-white">Zeiss</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                                    <p className="text-xs text-emerald-300 font-bold uppercase tracking-widest mb-1 font-heading italic">Precision</p>
                                    <p className="font-heading text-3xl font-bold text-white">Sub-mm</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-emerald-500" />
                            Elite Clinical FAQs: Tympanoplasty & Mastoidectomy
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Can I shower normally after ear surgery?",
                                    a: "No. It is critical to keep the ear completely dry for 4-6 weeks until the graft is fully integrated. We recommend using a large cotton ball soaked in petroleum jelly to block the ear canal during baths."
                                },
                                {
                                    q: "How soon will my hearing improve?",
                                    a: "Hearing is often muffled for the first 3 weeks due to internal packing and ointments. You will notice a significant improvement once the surgeon removes the pack during the follow-up visit."
                                },
                                {
                                    q: "What is the difference between simple and radical mastoidectomy?",
                                    a: "A simple mastoidectomy clears infection but keeps the canal intact. A radical or 'canal-wall-down' procedure is for complex infections like cholesteatoma to ensure the ear is permanently safe from recurrence."
                                },
                                {
                                    q: "Does ear surgery require a large cut?",
                                    a: "Most micro-ear surgeries are performed through a 4cm incision behind the ear that is hidden by the hair and ear fold. In some cases, we can even perform it entirely through the ear canal (endaural)."
                                },
                                {
                                    q: "Can I travel by air after surgery?",
                                    a: "We recommend avoiding air travel for at least 4-6 weeks post-surgery. Pressure changes in the cabin can 'pop' the new graft before it has successfully fused with your natural tissue."
                                },
                                {
                                    q: "What graft material is the best?",
                                    a: "Temporal fascia (from your own temple) is the gold standard due to its strength and low rejection risk. Cartilage is used when the eardrum needs more 'structural' support against retraction."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group text-left">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 antialiased italic">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </article>
                </div>
            }
        />
    )
}