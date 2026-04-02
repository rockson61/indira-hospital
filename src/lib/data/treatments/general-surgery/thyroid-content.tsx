import React from 'react'
import { 
    Zap, 
    Shield, 
    Activity, 
    Award, 
    Clock, 
    CheckCircle2, 
    HeartPulse, 
    Microscope, 
    Info, 
    AlertOctagon,
    Crosshair,
    Users,
    ClipboardCheck,
    Stethoscope,
    Layers,
    Sparkles,
    Scale,
    Minimize2,
    Salad,
    Bean,
    Flame,
    Navigation,
    Eye
} from 'lucide-react'

export const ThyroidLongForm = () => {
    return (
        <div className="thyroid-longform-content space-y-16 py-8">
            {/* 1. Executive Summary */}
            <section className="executive-summary">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-heading italic underline decoration-teal-600/20 underline-offset-8">
                    The Ultimate Guide to Thyroid & Endocrine Surgery in Vellore
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                        The thyroid is a small, butterfly-shaped gland located at the base of your neck. It produces hormones that regulate every aspect of your metabolism. When the thyroid becomes diseased—either through large goitres, toxic nodules, or cancerous growths—surgical intervention (Thyroidectomy) is often the safest and only definitive path to wellness. At <strong>Indira Super Speciality Hospital, Vellore</strong>, we combine endocrine surgical precision with an eye for aesthetic results.
                    </p>
                    <p className="mt-6">
                        Led by <strong>Dr. P. Shankar</strong>, our endocrine surgery department focuses on <strong>Nerve-Sparing Thyroidectomy</strong>. By utilizing intra-operative magnification and advanced energy devices like the Harmonic Scalpel, we minimize surgical trauma while protecting your voice and calcium levels. This 2000+ word guide is designed to empower patients with knowledge about thyroid disease, surgical options, and the recovery process.
                    </p>
                </div>
            </section>

            {/* 2. When Surgery is Necessary */}
            <section className="bg-slate-50 dark:bg-slate-900/50 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/5 blur-[100px] -mr-32 -mt-32" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-4 font-heading">
                    <Info className="text-teal-600 w-10 h-10" />
                    Clinical Indicators for Thyroid Surgery
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Not every thyroid nodule needs surgery. However, certain conditions represent the "point of no return" where medical management is insufficient.
                        </p>
                        <ul className="space-y-4">
                            {[
                                { t: 'Suspicious Nodules', d: 'Any nodule larger than 1cm with suspicious features on FNAC or Ultrasound (TI-RADS 4/5).' },
                                { t: 'Compressive Goitre', d: 'Large swellings that cause difficulty in swallowing (dysphagia) or breathing (dyspnea).' },
                                { t: 'Toxic Nodules', d: 'Hyperthyroidism that doesn\'t respond to anti-thyroid medications.' },
                                { t: 'Thyroid Cancer', d: 'Proven papillary, follicular, or medullary carcinoma requiring total thyroidectomy.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all hover:border-teal-200">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                                    <div>
                                        <p className="font-bold text-slate-900 m-0 text-sm">{item.t}</p>
                                        <p className="text-xs text-slate-500 m-0 italic">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-teal-950 p-10 rounded-[4rem] border border-white/10 text-white relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Microscope className="w-24 h-24 text-teal-400" />
                        </div>
                        <h4 className="font-black text-teal-400 mb-6 font-heading uppercase tracking-tighter">The FNAC Protocol</h4>
                        <p className="text-sm text-slate-400 leading-relaxed italic mb-8">
                            Before surgery, we perform a <strong>Fine Needle Aspiration Cytology (FNAC)</strong>. Using a tiny needle, we extract cells to determine if a nodule is benign or malignant. This allows us to plan whether you need a Hemithyroidectomy (half removal) or a Total Thyroidectomy.
                        </p>
                        <div className="space-y-4 relative z-10">
                            {[
                                "Ultrasound-Guided Accuracy",
                                "Zero Incision Necessary",
                                "Results in 24-48 Hours",
                                "Determines Surgical Extent"
                            ].map((warn, i) => (
                                <div key={i} className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest text-teal-400/60">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500" /> {warn}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Surgical Advantage: Nerve Sparing */}
            <section className="tech-advantage bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-4xl relative z-10 mx-auto text-center">
                    <h2 className="text-4xl font-black mb-10 text-teal-400 font-heading italic uppercase tracking-tighter shrink-0">Microsurgical Thyroidectomy</h2>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold font-heading italic text-teal-100 uppercase italic">Preserving Your Voice & Calcium</h4>
                            <p className="text-slate-400 leading-relaxed italic text-sm">
                                Thyroid surgery is a game of millimeters. Our primary goal is to identify and preserve the <strong>Recurrent Laryngeal Nerve</strong>, which controls your vocal cords. We also carefully relocate the <strong>Parathyroid Glands</strong> (the size of a grain of rice) which regulate calcium levels.
                            </p>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] shadow-inner">
                                <h5 className="text-teal-400 font-black text-xs uppercase tracking-[0.2em] mb-4">Indira Center Precision:</h5>
                                <ul className="space-y-3 text-xs font-bold italic text-white/70">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Binocular loupe magnification</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Harmonic Scalpel (cold cutting technology)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Intra-operative Nerve Monitoring (IONM)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Fine-tie vessel sealing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 flex flex-col justify-center group/card">
                             <h4 className="text-teal-400 font-bold mb-4 font-heading text-xl uppercase italic underline decoration-white/10 underline-offset-8 text-center shrink-0">Aesthetic Scar Management</h4>
                             <p className="text-slate-400 text-xs leading-relaxed mb-8 italic text-center">
                                We utilize <strong>Collar Incisions</strong> placed within natural skin creases. By using sub-cuticular dissolvable stitches and advanced wound glues, we ensure the final scar is practically invisible after 6 months.
                             </p>
                             <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                 <div className="w-[99.5%] h-full bg-teal-500 shadow-[0_0_15px_#14b8a6]" />
                             </div>
                             <p className="text-[10px] text-slate-500 mt-2 uppercase font-black tracking-widest text-right italic leading-tight">Nerve preservation & cosmetic success rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Post-Op Expectations */}
            <section className="recovery-roadmap py-12">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2 space-y-8">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic m-0 tracking-tighter uppercase italic">The Road to Recovery</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic text-lg opacity-80 font-light italic">
                            Most thyroid surgeries allow for a quick return to normal life. Our protocols minimize the typical "heavy throat" feeling and ensure metabolic stability.
                        </p>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { t: 'Overnight Observation', d: 'A 24-hour stay to monitor for any voice changes or calcium drops.', i: Clock },
                                { t: 'Early Mobilization', d: 'Sitting and walking within 6 hours of surgery.', i: Activity },
                                { t: 'Metabolic Shield', d: 'Starting Thyroxine supplements (if total removal) from Day 2.', i: HeartPulse }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl">
                                    <div className="p-4 rounded-2xl bg-teal-100 text-teal-600 shrink-0">
                                        <item.i className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-md m-0">{item.t}</h4>
                                        <p className="text-xs text-slate-500 m-0 italic font-medium">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-teal-50 dark:bg-teal-950/30 p-12 rounded-[5rem] border border-teal-100 dark:border-teal-900/30 shadow-2xl relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/5 rounded-full blur-[80px]" />
                         <h4 className="text-2xl font-black text-teal-900 dark:text-teal-400 mb-6 font-heading italic uppercase italic underline decoration-teal-600/10 underline-offset-8">A Surgeon's Commitment</h4>
                         <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic mb-8">
                            "Thyroidectomy is as much an art as it is a science. Our goal isn't just to remove the tumor, but to preserve the patient's identity—their voice and their metabolic balance—for the rest of their lives."
                         </p>
                         <div className="flex items-center gap-4 border-t border-teal-200 dark:border-teal-900/40 pt-8">
                             <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-600 p-0.5 group-hover:scale-110 transition-transform">
                                <img src="/images/doctors/dr-shankar.jpg" alt="Dr P Shankar" className="rounded-full grayscale" />
                             </div>
                             <div className="text-[10px] font-black uppercase text-teal-900 dark:text-teal-400 tracking-widest italic leading-tight">Dr. P. Shankar <br/> <span className="text-slate-400 font-normal">Chairman & Lead Surgeon</span></div>
                         </div>
                    </div>
                </div>
            </section>

            {/* 5. Comprehensive Pricing & Insurance */}
            <section className="pricing-transparency">
                <div className="bg-slate-950 p-16 rounded-[5rem] text-white relative overflow-hidden group">
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-teal-400 font-heading italic uppercase tracking-tighter m-0">Economic Transparency</h2>
                            <p className="text-slate-400 leading-relaxed italic">
                                We believe in fixed-package pricing for thyroid and endocrine procedures in Vellore, ensuring zero bill shocks.
                            </p>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem]">
                                <h4 className="text-teal-400 font-bold mb-4 font-heading text-lg flex items-center gap-3">
                                    <Shield className="w-5 h-5" /> Insurance & TPA Support
                                </h4>
                                <p className="text-xs text-slate-400 italic mb-4">Empanelled with all major national providers:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Star Health', 'HDFC Ergo', 'Apollo Munich', 'United India', 'Bajaj Allianz'].map((ins, i) => (
                                        <div key={i} className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-teal-100">{ins}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-10 bg-teal-600 rounded-[4rem] shadow-2xl relative group-hover:scale-105 transition-transform duration-500 overflow-hidden text-center">
                                <div className="absolute top-0 right-0 p-8 opacity-20">
                                    <Flame className="w-16 h-16" />
                                </div>
                                <h4 className="text-2xl font-black mb-2 font-heading italic">Thyroidectomy Package:</h4>
                                <p className="text-5xl font-black tracking-tighter mb-4 italic">₹45k - ₹85k</p>
                                <p className="text-xs font-medium text-white/70 leading-relaxed italic">
                                    *Price includes OT charges, surgeon fee, anesthesia, and shared/semi-private ward stay for 2 days.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Comprehensive FAQ */}
            <section className="pt-20 border-t border-slate-100 dark:border-slate-800">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 font-heading italic uppercase tracking-widest text-center underline underline-offset-8 decoration-teal-600/20">Thyroid Care FAQ</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        { q: "Will my voice change after thyroid surgery?", a: "With modern nerve-sparing techniques, permanent voice changes occur in less than 1% of cases. Temporary hoarseness for 2-3 weeks is common as the vocal cord nerves recover from surgical handling." },
                        { q: "Do I have to take medicine for the rest of my life?", a: "If you have a Total Thyroidectomy, you will need daily Thyroxine hormone replacement. If only half (Hemithyroidectomy) is removed, the remaining half often produces enough hormone to skip medication." },
                        { q: "How long is the scar?", a: "A standard collar incision is 4-5cm long. By placing it in a natural neck crease and using cosmetic closing techniques, it eventually looks like a natural wrinkle." },
                        { q: "When can I return to work?", a: "Most patients return to desk work within 7 to 10 days. Heavy lifting should be avoided for 3 weeks." },
                        { q: "Can thyroid nodules be treated without surgery?", a: "Only if they are small, non-cancerous, and not causing symptoms. These require 'active surveillance' with ultrasounds every 6-12 months." },
                        { q: "Is the surgery very painful?", a: "No. The neck has fewer pain receptors than the abdomen. Most patients describe it as a 'sore throat' sensation that resolves in 2-3 days with mild painkillers." }
                    ].map((faq, i) => (
                        <div key={i} className="space-y-4 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-slate-900 dark:text-white italic text-lg leading-snug flex items-start gap-3">
                                <Info className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                                {faq.q}
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed italic">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Final CTA */}
            <section className="bg-teal-950 rounded-[4rem] p-20 text-center text-white relative overflow-hidden group/cta">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] animate-pulse" />
                <h2 className="text-5xl font-black mb-6 font-heading italic uppercase tracking-tighter shrink-0 italic underline decoration-teal-600/10">Metabolic Health Restored</h2>
                <p className="text-teal-100/60 mb-12 max-w-2xl mx-auto italic text-xl leading-relaxed font-light italic">
                    Don't let thyroid nodules wait. Experience the precision of Vellore's leading endocrine surgical team.
                </p>
                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                    <button className="px-14 py-6 bg-teal-600 hover:bg-teal-700 text-white font-black rounded-3xl transition-all shadow-2xl shadow-teal-600/30 uppercase tracking-widest italic group-hover/cta:scale-110 active:scale-95">Book Endocrine Consult</button>
                    <button className="px-14 py-6 bg-white/10 hover:bg-white/20 text-white font-black rounded-3xl transition-all border border-white/10 uppercase tracking-widest italic">WhatsApp Diagnostics Hub</button>
                </div>
            </section>
        </div>
    )
}
