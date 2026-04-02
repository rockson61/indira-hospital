import React from 'react'
import { Microscope, HelpCircle, ShieldCheck, Zap, Activity, MapPin, Target, IndianRupee, Scissors, HeartPulse } from 'lucide-react'

export const RectalProlapseLongForm = () => {
    return (
        <div className="space-y-12">
            {/* Section 1: Comprehensive Introduction */}
            <section id="introduction">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Expert Rectal Prolapse Surgery in Vellore: Restoring Function and Comfort</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                    <p>
                        Rectal Prolapse is a complex condition where the rectum (the last part of the large intestine) loses its internal attachments and turns inside out, protruding through the anal opening. For many patients in Vellore and across Tamil Nadu, this condition is not only physically debilitating but also emotionally distressing, often leading to fecal incontinence and severe lifestyle restrictions.
                    </p>
                    <p>
                        At <strong>Indira Super Speciality Hospital, Vellore</strong>, we specialize in the most advanced surgical solutions for rectal prolapse. Under the surgical leadership of <strong>Dr. Karan Shankar</strong>, we offer <strong>Laparoscopic Rectopexy</strong>, the global gold standard for permanent prolapse repair. This minimally invasive approach ensures high success rates, minimal recurrence, and a rapid return to normal activities.
                    </p>
                    <p>
                        This guide is designed to help you understand the causes of rectal prolapse, identify the stages of the condition, and learn why specialized surgical intervention at our Vellore center is critical for long-term health and pelvic floor restoration.
                    </p>
                </div>
            </section>

            {/* Section 2: What is Rectal Prolapse? Pathophysiology */}
            <section id="what-is-prolapse">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading italic underline decoration-fuchsia-200">Understanding Rectal Prolapse: Anatomy of the Descent</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                    <p>
                        The rectum is normally held in place by strong ligaments and muscles. When these supports weaken due to age, chronic straining, or multiple childbirths, the rectum can slide out of place. Rectal prolapse is categorized into three stages at Indira Hospital:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 pt-4">
                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-3">
                            <h4 className="font-bold text-slate-900 text-lg">Internal Prolapse</h4>
                            <p className="text-sm text-slate-500 italic font-medium">Internal Intussusception: The rectum starts to slide but doesn't yet protrude through the anus.</p>
                        </div>
                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-3">
                            <h4 className="font-bold text-slate-900 text-lg">Mucosal Prolapse</h4>
                            <p className="text-sm text-slate-500 italic font-medium">Only the lining of the rectum slides out of the anus. Often mistaken for large hemorrhoids.</p>
                        </div>
                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-3">
                            <h4 className="font-bold text-slate-900 text-lg">Full-Thickness Prolapse</h4>
                            <p className="text-sm text-slate-500 italic font-medium">The entire wall of the rectum protrudes through the anus, often appearing as concentric rings of tissue.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Symptoms & Identify the Condition */}
            <section id="symptoms">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Symptoms: How to Identify Rectal Prolapse</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                    <ul className="space-y-4">
                        <li className="flex gap-4">
                            <Zap className="w-6 h-6 text-fuchsia-600 shrink-0 mt-1" />
                            <div>
                                <strong>Manual Reduction:</strong> A mass poking out of the anus during or after a bowel movement that you may need to push back in with your hand.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <Zap className="w-6 h-6 text-fuchsia-600 shrink-0 mt-1" />
                            <div>
                                <strong>Fecal Incontinence:</strong> Leaking stool or mucus as the anal sphincter muscles are stretched and weakened by the prolapse.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <Zap className="w-6 h-6 text-fuchsia-600 shrink-0 mt-1" />
                            <div>
                                <strong>Mucus or Blood Discharge:</strong> Irritated rectal tissue can lead to constant discharge, staining undergarments.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <Zap className="w-6 h-6 text-fuchsia-600 shrink-0 mt-1" />
                            <div>
                                <strong>Chronic Constipation:</strong> Paradoxically, the mass can act as a blockage, making it difficult to empty the bowel fully.
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

             {/* Section 4: Why Prolapse is Not Piles: The Difference */}
            <section id="prolapse-vs-piles" className="bg-slate-900 rounded-[3rem] p-12 text-white">
                <h2 className="text-3xl font-bold mb-8 text-center italic font-heading text-fuchsia-300">Prolapse vs. Hemorrhoids: Don't Confuse the Two</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <h4 className="font-bold text-xl text-red-400">Piles (Hemorrhoids)</h4>
                        <p className="text-sm text-white/70 leading-relaxed">Appear as separate, grape-like lumps around the anus. They are swollen blood vessels.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-xl text-emerald-400">Rectal Prolapse</h4>
                        <p className="text-sm text-white/70 leading-relaxed">Appears as a circular, ring-like mass. It is a structural failure of the entire intestinal wall.</p>
                    </div>
                </div>
                <div className="mt-8 p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                    <p className="text-sm text-white/50 italic">Misdiagnosis is common. At Indira Hospital, we use Video Defecography to confirm structural prolapse with 100% accuracy.</p>
                </div>
            </section>

            {/* Section 5: Robotic-Assisted & Laparoscopic Rectopexy */}
            <section id="the-fix">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading italic underline decoration-fuchsia-200">The Modern Solution: Laparoscopic Ventral Mesh Rectopexy</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                    <p>
                        At our Vellore center, we avoid traditional perineal cuts which have high recurrence rates. Instead, we perform <strong>Laparoscopic Rectopexy</strong>. Through tiny 5-10mm incisions in the abdomen, we use a specialize biological or synthetic mesh to anchor the rectum back to its natural position.
                    </p>
                    <ul className="space-y-3 mt-6">
                        <li className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-soft">
                             <ShieldCheck className="w-8 h-8 text-emerald-500 shrink-0" />
                             <div>
                                <strong>Nerve-Sparing Protocol:</strong> Our surgeons isolate and protect the nerves responsible for bowel and sexual function.
                             </div>
                        </li>
                        <li className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-soft">
                             <Zap className="w-8 h-8 text-fuchsia-600 shrink-0" />
                             <div>
                                <strong>Minimal Recurrence:</strong> Abdominal-approach surgery has a significantly lower long-term recurrence rate compared to perineal surgery.
                             </div>
                        </li>
                    </ul>
                </div>
            </section>

             {/* Section 6: Recovery Path at Indira Hospital */}
            <section id="recovery">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 italic">Post-Operative Recovery and Pelvic Floor Wellness</h2>
                <div className="p-8 bg-fuchsia-50 rounded-[3rem] border border-fuchsia-100 space-y-6">
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                        Repairing the prolapse is only step one. At Indira Super Speciality Hospital, we ensure a comprehensive recovery path:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <h4 className="font-bold text-slate-900 border-b border-fuchsia-200 pb-2">Hospital Stay</h4>
                            <p className="text-sm text-slate-500 italic">Duration: 2-3 Days. You'll be walking and on a liquid-to-soft diet within 24 hours of laparoscopic surgery.</p>
                        </div>
                        <div className="space-y-3">
                             <h4 className="font-bold text-slate-900 border-b border-fuchsia-200 pb-2">Pelvic Floor Rehab</h4>
                             <p className="text-sm text-slate-500 italic">We provide specialized exercises (Kegels) and motility mapping to ensure your bowel movements are regular and strain-free.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Specialist Focus - Dr. Karan Shankar */}
            <section id="our-experts">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-8 border-fuchsia-600 pl-6 underline decoration-fuchsia-100">Laparoscopic Surgeon: Dr. Karan Shankar</h2>
                <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-10 rounded-[4rem] border border-slate-50 shadow-soft">
                    <div className="w-56 h-56 bg-slate-200 rounded-3xl overflow-hidden shadow-xl shrink-0">
                        <div className="w-full h-full bg-gradient-to-tr from-fuchsia-100 to-slate-200" />
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Rectal prolapse is a major pelvic floor reconstructed surgery. <strong>Dr. Karan Shankar</strong> specializes in advanced laparoscopic and robotic-assisted rectopexy. His technical mastery of pelvic spaces ensures that the rectum is anchored with precision, preserving all functional nerves and providing the highest quality of life restoration for his patients in Vellore.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-black uppercase text-fuchsia-600 flex items-center gap-2">
                                <HeartPulse className="w-4 h-4 text-emerald-500 font-black" /> Laparoscopic Specialist
                            </span>
                            <span className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-black uppercase text-fuchsia-600 flex items-center gap-2">
                                <Activity className="w-4 h-4 text-emerald-500 font-black" /> Prolapse Expert
                            </span>
                        </div>
                    </div>
                </div>
            </section>

             {/* Section 8: Cost in Vellore & Support */}
            <section id="cost">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <IndianRupee className="w-8 h-8 text-fuchsia-600" />
                    Rectal Prolapse Surgery Cost in Vellore
                </h2>
                <div className="p-8 bg-fuchsia-50 rounded-[3rem] border border-fuchsia-100 space-y-6">
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                        Laparoscopic Rectopexy is a high-technology procedure. At Indira Hospital, Vellore, the total cost typically ranges between <strong>₹80,000 to ₹1,20,000</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white rounded-2xl shadow-sm border border-fuchsia-200 text-center">
                            <span className="text-sm font-bold text-fuchsia-600 block">Cashless Insurance</span>
                            <span className="text-xs text-slate-400 font-bold uppercase italic">Full Pre-Auth Support</span>
                        </div>
                        <div className="p-4 bg-white rounded-2xl shadow-sm border border-fuchsia-200 text-center">
                            <span className="text-sm font-bold text-fuchsia-600 block">EMI Options</span>
                            <span className="text-xs text-slate-400 font-bold uppercase italic">For Non-Insured Cases</span>
                        </div>
                    </div>
                    <p className="text-sm text-slate-400 italic font-medium">Includes high-grade imported mesh (if applicable), hospital admission, surgical fees, and multi-disciplinary care team assessment.</p>
                </div>
            </section>

            {/* Section 9: FAQ Section */}
            <section id="faqs" className="pt-12 border-t border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3 italic">
                    <HelpCircle className="w-10 h-10 text-fuchsia-600" />
                    Frequently Asked Questions (Rectal Prolapse)
                </h2>
                <div className="space-y-6">
                    {[
                        { q: "Is rectal prolapse dangerous?", a: "While not immediate life-threatening, it can lead to complications like ulceration, bleeding, and incarceration (where the bowel is stuck outside). It also severely impacts quality of life through incontinence." },
                        { q: "Can exercises cure rectal prolapse?", a: "While Kegel exercises can strengthen the pelvic floor, they cannot 'pull' a prolapsed rectum back into position permanently. Surgery is the only definitive cure for full-thickness prolapse." },
                        { q: "What is the Tamil name for Rectal Prolapse?", a: "It is often referred to as 'ஆசனவாய் வெளியே தள்ளுதல்' (Aasanavaai veliye thalluthal) in common Tamil parlance." },
                        { q: "Is laparoscopic rectopexy better than perineal surgery?", a: "Yes. Laparoscopic surgery has a much lower recurrence rate (under 5%) compared to perineal procedures (which can have up to 20% recurrence)." },
                        { q: "How long after surgery can I lift weights?", a: "We recommend avoiding heavy lifting (more than 5kg) for at least 6-8 weeks to allow the mesh and internal sutures to heal correctly." },
                        { q: "Will my bowel movements return to normal?", a: "Yes, most patients see a significant improvement in both constipation and incontinence within 3 months of surgery as the rectum's structural anatomy is restored." }
                    ].map((faq, index) => (
                        <div key={index} className="bg-slate-50 p-6 rounded-2xl space-y-2">
                           <h4 className="text-lg font-bold text-slate-900 flex gap-2">
                                <span className="text-fuchsia-600">Q.</span> {faq.q}
                            </h4>
                            <p className="text-slate-600 pl-6 text-sm italic font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

             {/* Section 10: Final Clinical Summary */}
            <section className="bg-slate-50 p-12 rounded-[3.5rem] text-center border-2 border-dashed border-slate-200">
                 <div className="max-w-3xl mx-auto space-y-6">
                    <div className="inline-flex p-4 rounded-full bg-white shadow-soft">
                        <Target className="w-10 h-10 text-fuchsia-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 italic font-heading">Restore Your Pelvic Foundation</h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium italic">
                        Don't let prolapse limit your world. Discover the precision of laparoscopic restoration at Vellore's most advanced proctological center.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 pt-4">
                        <span className="flex items-center gap-2 text-sm text-slate-400 font-bold"><ShieldCheck className="w-4 h-4 text-emerald-500 font-bold" /> NABH Standards</span>
                        <span className="flex items-center gap-2 text-sm text-slate-400 font-bold"><MapPin className="w-4 h-4" /> Near Vellore New Bus Stand</span>
                    </div>
                 </div>
            </section>
        </div>
    )
}
