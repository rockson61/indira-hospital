'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Info, 
    Ear,
    Activity,
    CheckCircle2,
    Users,
    Search,
    Volume2
} from 'lucide-react'

export default function TympanoplastyPage() {
    return (
        <SubServiceTemplate
            title="Elite Tympanoplasty & Mastoidectomy"
            slug="tympanoplasty-and-mastoidectomy"
            parentServiceSlug="ent"
            departmentName="ENT (Otolaryngology)"
            description={
                <>
                    <p>
                        Chronic ear discharge or a perforated eardrum can lead to progressive hearing loss and deep-seated infections. **Tympanoplasty** at Indira Super Speciality Hospital is a dedicated microscopic microsurgery used to repair the eardrum and reconstruct the tiny bones of hearing (ossicles). We utilize high-precision surgical microscopes and biocompatible graft materials to ensure superior hearing restoration and a life free from ear infections.
                    </p>
                    <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold italic">
                        "Restoring the integrity of hearing through microscopic precision."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: 'Microscopic', icon: 'Zap' },
                { label: 'Care Type', value: 'Surgical', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="60-90 Mins"
            hospitalStay="24 Hours"
            recoveryTime="3-4 Weeks"
            anesthesia="General"
            reviews={{
                entityType: 'service',
                entityName: 'Tympanoplasty & Mastoidectomy',
                entitySlug: 'tympanoplasty-and-mastoidectomy'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why Micro-Ear Surgery? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-900/50 border border-emerald-100 dark:border-emerald-800 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 blur-2xl group-hover:bg-emerald-300/30 transition-all opacity-50" />
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-emerald-800 dark:text-emerald-300">Microscopic Excellence</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Carl Zeiss Microscope", text: "Ultra-high magnification allows for sub-millimeter precision in ossicular reconstruction." },
                                { title: "Biocompatible Grafts", text: "Using temporal fascia or tragal cartilage for high-strength, natural-feel eardrum repair." },
                                { title: "Complete Bio-seal", text: "Ensures the middle ear is permanently protected from external water and bacterial ingress." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-emerald-400/20 rounded-[3rem] blur-3xl transition-all" />
                        <div className="relative p-10 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
                            <Volume2 className="w-24 h-24 text-emerald-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Clarity Restored</p>
                            <p className="text-slate-500 text-sm italic pr-4">Targeted microsurgery to resolve chronic discharge and boost hearing thresholds safely.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">The Science of Hearing Restoration</h3>
                    <p>
                        The middle ear is a complex acoustic chamber where three tiny bones–the malleus, incus, and stapes–amplify and transmit sound from the eardrum to the inner ear. When the eardrum is perforated by repeated infections (CSOM) or injury, sound transmission is broken, and the ear becomes vulnerable to water-borne infections.
                    </p>
                    <p>
                        At Indira Hospital, our ENT team performs **Tympanoplasty** using sophisticated surgical microscopes. Most surgeries are performed through a tiny incision behind the ear (post-aural) or through the ear canal (endaural). We take a small piece of tissue from your own temple (fascia) or ear cartilage to create a graft. This graft is then carefully positioned under the eardrum like a new skin layer.
                    </p>

                    <h4 className="text-[#005f73] dark:text-emerald-500 font-primary italic">Micro-Ear Surgery Indications:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Chronic Suppurative Otitis Media (CSOM) discharge",
                            "Tympanic Membrane perforation (Eardrum hole)",
                            "Ossicular chain disruption (broken hearing bones)",
                            "Cholesteatoma (Infected skin cyst for Mastoidectomy)",
                            "Eustachian Tube dysfunction causing non-healing holes",
                            "Congenital ear canal narrowing"
                        ].map((condition, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span className="text-sm font-medium">{condition}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-emerald-500 pl-4 py-2 italic font-serif">Mastoidectomy: When Infection Goes Deep</h3>
                    <p>
                        If the infection has spread into the honeycomb-like bone behind the ear (the mastoid), a simple tympanoplasty is not enough. We perform **Mastoidectomy** – a high-precision procedure to clear away infected bone. This 'clean sweep' is essential to ensure that the middle ear remains dry and to prevent serious brain-related complications of chronic ear disease.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-emerald-500 mt-10">Why Choose Indira for Ear Surgery?</h4>
                    <ul>
                        <li>**Advanced Carl Zeiss Microscopy**: Providing the lighting and magnification needed for ultra-fine surgical work.</li>
                        <li>**In-house Audiology**: Precise pre and post-operative hearing tests to objectively track your hearing gain.</li>
                        <li>**Specialized Nursing**: Dedicated care for post-operative ear canal management and patient education.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden mt-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-emerald-400" />
                        Micro-Ear Surgery Clinical FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "How long is the surgery?",
                                a: "A standard Tympanoplasty takes about 60-90 minutes. If a Mastoidectomy is included, it might take 2.5-3 hours to ensure total clearance of infected bone."
                            },
                            {
                                q: "When can I expect my hearing to improve?",
                                a: "Your hearing will be muffled initially due to internal packing and ointments. Hearing gain is usually noticed 4 weeks after surgery, once the ear is fully healed and cleared."
                            },
                            {
                                q: "Can I swim after ear surgery?",
                                a: "Once the graft is fully integrated (usually after 6-8 weeks), you can resume swimming with custom earplugs. We will advise you on when it is safe to do so."
                            },
                            {
                                q: "Are there any risks to the facial nerve?",
                                a: "The facial nerve runs very close to the ear bones. At Indira Hospital, our senior ENT surgeons use high-resolution microscopes and extreme caution to safeguard the nerve during all mastoid surgeries."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-emerald-400 mb-4 flex items-start gap-2">
                                    <Zap className="w-5 h-5 mt-1 shrink-0" />
                                    {faq.q}
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed antialiased pl-7">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SubServiceTemplate>
    );
}
