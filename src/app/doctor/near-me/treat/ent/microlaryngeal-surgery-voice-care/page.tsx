'use client'

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
    Users,
    MessageSquare,
    Music
} from 'lucide-react'

export default function VoiceSurgeryPage() {
    return (
        <SubServiceTemplate
            title="Elite Microlaryngeal Surgery & Voice Care"
            slug="microlaryngeal-surgery-voice-care"
            parentServiceSlug="ent"
            departmentName="ENT (Otolaryngology)"
            description={
                <>
                    <p>
                        Persistent hoarseness, vocal nodules, or polyps can significantly impact your professional and personal life. **Microlaryngeal Surgery (Phonosurgery)** at Indira Super Speciality Hospital is a specialized surgical procedure to remove benign or malignant lesions from the vocal cords using high-magnification microscopes. We focus on the **preservation of the delicate vocal cord mucosal layers** to ensure the best possible restoration of voice quality and clarity.
                    </p>
                    <p className="mt-4 text-fuchsia-600 dark:text-fuchsia-400 font-semibold italic">
                        "Precision phonosurgery: Restoring the natural resonance of your voice."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: 'Microscopic', icon: 'Zap' },
                { label: 'Care Type', value: 'Surgical', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="30-45 Mins"
            hospitalStay="24 Hours"
            recoveryTime="1-2 Weeks"
            anesthesia="General"
            reviews={{
                entityType: 'service',
                entityName: 'Microlaryngeal Surgery',
                entitySlug: 'microlaryngeal-surgery-voice-care'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why Microlaryngeal? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-fuchsia-50 dark:bg-fuchsia-900/50 border border-fuchsia-100 dark:border-fuchsia-800 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-200/20 blur-2xl group-hover:bg-fuchsia-300/30 transition-all opacity-50" />
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-fuchsia-800 dark:text-fuchsia-300">Advanced Phonosurgery</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Micro-dissection", text: "Removing only the polyp or nodule while sparing the deep layers of the vocal cord." },
                                { title: "Cold Instrumentation", text: "Using precision cold instruments to avoid thermal injury that could lead to scarring and permanent voice changes." },
                                { title: "Integrated Speech Therapy", text: "Comprehensive pre and post-operative voice rehabilitation for long-term vocal health." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Shield className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-fuchsia-400/20 rounded-[3rem] blur-3xl transition-all" />
                        <div className="relative p-10 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
                            <Music className="w-24 h-24 text-fuchsia-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Vocal Clarity</p>
                            <p className="text-slate-500 text-sm italic pr-4">Precision-guided microscopic ablation to resolve chronic hoarseness and restore natural tone.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Comprehensive Laryngeal (Voice) Care</h3>
                    <p>
                        The vocal cords are two flexible bands of muscle and tissue that vibrate to produce sound. Even a tiny growth like a polyp or nodule on the edge of the vocal cord can disrupt this vibration, leading to a breathy, strained, or hoarse voice. MLS is a delicate balance between surgical excision and tissue preservation.
                    </p>
                    <p>
                        At Indira Hospital, our ENT team specializes in **Microlaryngeal Surgery (MLS)** – a procedure performed through the mouth using a surgical microscope to ensure zero external scars and sub-millimeter surgical accuracy. We utilize specialized laryngoscopes and long-reach microscopic instruments to access the vocal cords with absolute precision.
                    </p>

                    <h4 className="text-[#005f73] dark:text-fuchsia-400 font-primary">Common Conditions We Treat:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Vocal Cord Polyps (often caused by vocal strain)",
                            "Vocal Cord Nodules ('Singer's Nodules')",
                            "Reinke's Edema (swelling of the vocal cords)",
                            "Laryngeal Cysts & Papillomas",
                            "Biopsy of suspicious laryngeal lesions",
                            "Vocal Cord Paralysis (medialization procedures)"
                        ].map((condition, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-fuchsia-500" />
                                <span className="text-sm font-medium">{condition}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-fuchsia-500 pl-4 py-2 italic font-serif">The Path to Voice Restoration</h3>
                    <p>
                        The focal point of the surgery is the 'Reinke's Space' – the critical layer beneath the surface of the vocal cord. By preserving this layer, we ensure that the vocal cord can vibrate naturally post-surgery. Following the procedure, most patients are placed on a strictly supervised period of **total voice rest** (no talking or whispering) for 3-7 days to allow for primary healing.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-fuchsia-400 mt-10">Holistic Voice Management:</h4>
                    <ul>
                        <li>**Stroboscopy**: In-depth diagnostic visualization of the 'mucosal wave' (vibration) of the vocal cords before surgery.</li>
                        <li>**Speech-Language Pathology**: Working with specialized speech therapists to correct underlying vocal strain patterns and ensure long-term voice health.</li>
                        <li>**Gastroenterology Collaboration**: Addressing GERD (Acid Reflux) which is a major contributor to persistent laryngeal inflammation.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden mt-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/20 to-transparent shadow-2xl" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-fuchsia-400" />
                        Voice Surgery Clinical FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Is hoarseness for 3 weeks serious?",
                                a: "Yes. Any hoarseness lasting longer than 3 weeks—especially in smokers—requires a direct or indirect laryngoscopy to rule out early laryngeal cancer. Early detection is key to curative treatment."
                            },
                            {
                                q: "Will I be awake during the voice surgery?",
                                a: "No, Microlaryngeal surgery is performed under general anesthesia through the mouth. This ensures you are completely still for the microscopic work."
                            },
                            {
                                q: "Why is whispering bad after voice surgery?",
                                a: "Whispering actually puts *more* strain on the vocal cords than normal talking. We recommend absolute silence for the first few days post-surgery."
                            },
                            {
                                q: "What is the primary risk of the surgery?",
                                a: "The main risk is 'voice fatigue' or scarring if the deep layers of the vocal cord are damaged. This is why it is essential to have this surgery performed by an experienced ENT surgeon."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-fuchsia-400 mb-4 flex items-start gap-2">
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
