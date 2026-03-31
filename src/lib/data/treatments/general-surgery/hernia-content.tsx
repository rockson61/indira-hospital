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
    Minimize2
} from 'lucide-react'

export const HerniaLongForm = () => {
    return (
        <div className="hernia-longform-content space-y-16 py-8">
            {/* 1. Executive Summary */}
            <section className="executive-summary">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-primary italic underline decoration-indigo-600/20 underline-offset-8">
                    Comprehensive Guide to Laparoscopic Hernia Repair in Vellore
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                        A hernia is more than just a visible bulge; it is a mechanical defect in the abdominal wall that, if left untreated, can progress from a minor discomfort to a life-threatening clinical emergency. At <strong>Indira Super Speciality Hospital, Vellore</strong>, we have redefined hernia care through <strong>Advanced Laparoscopic Mesh Repair</strong>.
                    </p>
                    <p className="mt-6">
                        This guide provides an exhaustive look at how we diagnose and treat various types of hernias—Inguinal, Umbilical, and Incisional—using <strong>3D anatomical meshes</strong> and high-definition keyhole techniques. Led by <strong>Dr. P. Shankar</strong>, our surgical team focuses on tension-free repairs that guarantee minimal recurrence and a rapid return to your active lifestyle.
                    </p>
                </div>
            </section>

            {/* 2. Understanding the Pathology */}
            <section className="bg-slate-50 dark:bg-slate-900/50 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] -mr-32 -mt-32" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-4 font-primary">
                    <Info className="text-indigo-600 w-10 h-10" />
                    What is a Hernia? Types & Symptoms
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            An abdominal wall hernia occurs when internal organs (most commonly the intestine) or fatty tissue push through a weak spot or opening in the muscle wall. Think of it as a "hole in a tire" where the inner tube bulges out through the outer casing.
                        </p>
                        <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mt-6 font-primary text-xl uppercase italic">Common Types of Hernia:</h4>
                        <div className="space-y-4">
                            {[
                                { t: 'Inguinal Hernia', d: 'The most common type, occurring in the groin canal. Predominantly affects men.' },
                                { t: 'Umbilical Hernia', d: 'Occurs around the belly button; common in infants and women after childbirth.' },
                                { t: 'Incisional Hernia', d: 'Happens through the scar of a previous abdominal surgery where the muscle has weakened.' },
                                { t: 'Femoral Hernia', d: 'Occurs in the upper thigh/groin area; more common in women and carries a higher risk of strangulation.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group transition-all hover:border-indigo-200">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                                    <div>
                                        <p className="font-bold text-slate-900 m-0 text-sm">{item.t}</p>
                                        <p className="text-xs text-slate-500 m-0 italic">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/20 p-10 rounded-[4rem] border border-red-100 dark:border-red-900/30 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <AlertOctagon className="text-red-600 w-12 h-12 animate-pulse" />
                            <h4 className="font-black text-red-900 dark:text-red-400 font-primary uppercase tracking-tighter">Emergency Warning: Strangulation</h4>
                        </div>
                        <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed italic mb-8 font-medium">
                            If your hernia bulge becomes hard, red, or excruciatingly painful, it may be <strong>strangulated</strong>. This means the blood supply to the intestine is cut off. Seek immediate surgical intervention if you experience:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-red-600 font-bold text-xs uppercase tracking-widest"><div className="w-2 h-2 rounded-full bg-red-600" /> Sudden, worsening pain</li>
                            <li className="flex items-center gap-3 text-red-600 font-bold text-xs uppercase tracking-widest"><div className="w-2 h-2 rounded-full bg-red-600" /> Nausea and projectile vomiting</li>
                            <li className="flex items-center gap-3 text-red-600 font-bold text-xs uppercase tracking-widest"><div className="w-2 h-2 rounded-full bg-red-600" /> Inability to pass gas or bowel movements</li>
                            <li className="flex items-center gap-3 text-red-600 font-bold text-xs uppercase tracking-widest"><div className="w-2 h-2 rounded-full bg-red-600" /> Fever and heart palpitations</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. The Laparoscopic Advantage */}
            <section className="tech-advantage bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-4xl relative z-10 mx-auto text-center">
                    <h2 className="text-4xl font-black mb-10 text-indigo-400 font-primary italic uppercase tracking-tighter shrink-0">Laparoscopic vs. Open Surgery</h2>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold font-primary italic text-indigo-100 uppercase italic">Keyhole Precision (TAPP / TEP)</h4>
                            <p className="text-slate-400 leading-relaxed italic text-sm">
                                At Indira Hospital, we specialize in the **Transabdominal Preperitoneal (TAPP)** and **Totally Extraperitoneal (TEP)** laparoscopic techniques. Instead of a 4-inch incision, we use three 5mm ports. This allows the surgeon to place the mesh <strong>behind</strong> the defect, using the natural internal pressure of the abdomen to keep the mesh secured.
                            </p>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] shadow-inner">
                                <h5 className="text-indigo-400 font-black text-xs uppercase tracking-[0.2em] mb-4">Clinical Benefits:</h5>
                                <ul className="space-y-3 text-xs font-bold italic text-white/70">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Minimal post-operative pain</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Practically invisible 'keyhole' scars</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 24-hour hospital stay (Day Care in some cases)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Return to work in 48-72 hours</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 flex flex-col justify-center group/card">
                             <h3 className="text-fuchsia-400 text-6xl font-black mb-4 font-primary tracking-tighter transition-transform group-hover/card:scale-110">0.5%</h3>
                             <p className="text-indigo-200 font-black uppercase tracking-widest text-xs mb-6">Recurrence Rate at Indira</p>
                             <p className="text-slate-400 text-xs leading-relaxed italic mb-8 opacity-80">
                                Our mastery of 3D-Mesh positioning has reduced the recurrence rate to the lowest in the region. Traditional open surgery often carries a 5-10% recurrence depending on the technique.
                             </p>
                             <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                 <div className="w-[99.5%] h-full bg-indigo-500 shadow-[0_0_15px_#6366f1]" />
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. The 3D Mesh Technology */}
            <section className="mesh-tech py-12">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2 space-y-8">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-primary italic m-0 tracking-tighter uppercase italic">The 3D Anatomical Mesh</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic text-lg opacity-80 font-light">
                            Traditional meshes are flat, requiring extensive suturing or stapling to stay in place. We use <strong>anatomically contoured 3D meshes</strong> that match the direct curvature of the abdominal wall.
                        </p>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { t: 'Tension-Free Repair', d: 'The mesh distributes pressure evenly, preventing the "pulling" sensation common in legacy repairs.', i: Scale },
                                { t: 'Bio-Compatibility', d: 'Made from premium monofilament polypropylene that integrates permanently with your muscle wall.', i: Microscope },
                                { t: 'Reduced Nerve Pain', d: 'Because less stapling is required, the risk of chronic post-surgical nerve pain is virtually eliminated.', i: Zap }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl">
                                    <div className="p-4 rounded-2xl bg-indigo-100 text-indigo-600 shrink-0">
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
                    <div className="md:w-1/2 bg-indigo-50 dark:bg-indigo-950/30 p-12 rounded-[5rem] border border-indigo-100 dark:border-indigo-900/30 shadow-2xl relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/5 rounded-full blur-[80px]" />
                         <h4 className="text-2xl font-black text-indigo-900 dark:text-indigo-400 mb-6 font-primary italic uppercase italic underline decoration-indigo-600/10 underline-offset-8">Consultations & Diagnosis</h4>
                         <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic mb-8">
                            A hernia diagnosis starts with a physical exam, but at Indira, we use <strong>Dynamic Ultrasound</strong> (viewing the hernia whilst the patient coughs) to map the exact size of the defect. This ensures we order the perfect mesh size before you even enter the OT.
                         </p>
                         <div className="flex items-center gap-4 border-t border-indigo-200 dark:border-indigo-900/40 pt-8">
                             <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-600 p-0.5 group-hover:scale-110 transition-transform">
                                <img src="/images/doctors/dr-shankar.jpg" alt="Dr P Shankar" className="rounded-full grayscale" />
                             </div>
                             <div className="text-[10px] font-black uppercase text-indigo-900 dark:text-indigo-400 tracking-widest italic leading-tight">Expert Surgical Mapping <br/> <span className="text-slate-400 font-normal">Indira Super Speciality Hospital</span></div>
                         </div>
                    </div>
                </div>
            </section>

            {/* 5. Custom Recovery Path */}
            <section className="bg-slate-50 dark:bg-slate-900/50 p-10 md:p-16 rounded-[4rem] border border-slate-100 dark:border-slate-800">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 font-primary italic uppercase tracking-widest text-center">Accelerated Recovery Protocol</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { day: 'Day 0', title: 'Ambulation', desc: 'You will be encouraged to walk within 4-6 hours of waking from surgery.' },
                        { day: 'Day 1', title: 'Discharge', desc: 'Most patients return home within 24 hours of their procedure.' },
                        { day: 'Day 4', title: 'Desk Work', desc: 'Light office work and driving can be resumed for most keyhole patients.' },
                        { day: 'Week 3', title: 'Full Power', desc: 'Resumption of gym, sports, and heavy lifting after specialist clearance.' }
                    ].map((step, i) => (
                        <div key={i} className="p-8 bg-white dark:bg-slate-950 rounded-[3rem] border border-slate-100 dark:border-slate-800 text-center group hover:shadow-2xl transition-all">
                            <div className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-4 italic">{step.day}</div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-primary">{step.title}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed italic">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Pricing & Insurance Transparency */}
            <section className="pricing-transparency">
                <div className="bg-slate-950 p-16 rounded-[5rem] text-white relative overflow-hidden group">
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-indigo-400 font-primary italic uppercase tracking-tighter m-0">Economic Transparency</h2>
                            <p className="text-slate-400 leading-relaxed italic">
                                We believe in <strong>No Hidden Costs</strong>. Our surgical packages in Vellore are comprehensive, covering everything from the 3D-Mesh cost to the anaesthesia and hospital stay.
                            </p>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem]">
                                <h4 className="text-fuchsia-400 font-bold mb-4 font-primary text-lg flex items-center gap-3">
                                    <Shield className="w-5 h-5" /> Insurance Empanelment
                                </h4>
                                <p className="text-xs text-slate-400 italic mb-4">We are partnered with all leading providers:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Star Health', 'HDFC Ergo', 'Apollo Munich', 'TPA CMCHIS', 'Oriental Ins.'].map((ins, i) => (
                                        <div key={i} className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-indigo-100">{ins}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-10 bg-indigo-600 rounded-[4rem] shadow-2xl relative group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-20">
                                    <Zap className="w-16 h-16" />
                                </div>
                                <h4 className="text-2xl font-black mb-2 font-primary italic">Estimated Cost in Vellore:</h4>
                                <p className="text-5xl font-black tracking-tighter mb-4 italic">₹45k - ₹85k</p>
                                <p className="text-xs font-medium text-white/70 leading-relaxed italic">
                                    *Price varies based on hernia type (Inguinal vs Incisional) and choice of mesh (Flat vs 3D). Contact us for a precise quote.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Comprehensive FAQ */}
            <section className="pt-20 border-t border-slate-100 dark:border-slate-800">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 font-primary italic uppercase tracking-widest text-center underline underline-offset-8 decoration-indigo-600/20">Hernia Care FAQ</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        { q: "Can a hernia heal on its own without surgery?", a: "No. A hernia is a structural defect (a hole) in the muscle wall. It will never heal on its own and will typically get larger and more difficult to repair over time." },
                        { q: "How long is the surgery for an Inguinal hernia?", a: "Laparoscopic repair for a single-sided inguinal hernia typically takes 45 to 60 minutes. Bilateral hernias take approximately 90 minutes." },
                        { q: "Is the mesh safe? Will my body reject it?", a: "Modern surgical meshes are made of inert materials used in millions of patients worldwide. Rejection is extremely rare (under 0.1%). Infection risk is also minimal in our sterile OT environments." },
                        { q: "When can I resume heavy lifting or gym?", a: "We recommend avoiding heavy lifting (over 5kg) for at least 3 weeks. After that, you can gradually resume your gym routine under specialist guidance." },
                        { q: "What happens if I delay treatment?", a: "Delaying treatment increases the risk of strangulation and bowel obstruction. It also allows the hernia to grow larger, requiring a larger mesh and a more complex surgical path." },
                        { q: "Will there be significant scarring from keyhole surgery?", a: "No. We use three incisions of 5mm-10mm. Within 4-6 months, these fade into tiny, practically invisible marks, similar to a small beauty spot." }
                    ].map((faq, i) => (
                        <div key={i} className="space-y-4 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-slate-900 dark:text-white italic text-lg leading-snug flex items-start gap-3">
                                <Info className="w-5 h-5 text-indigo-600 mt-1 shrink-0" />
                                {faq.q}
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed italic">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. Final Silo Transition CTA */}
            <section className="bg-indigo-950 rounded-[4rem] p-20 text-center text-white relative overflow-hidden group/cta">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" />
                <h2 className="text-5xl font-black mb-6 font-primary italic uppercase tracking-tighter">Don't Wait for an Emergency</h2>
                <p className="text-indigo-100/60 mb-12 max-w-2xl mx-auto italic text-xl leading-relaxed font-light italic">
                    Fix the gap permanently with 4K Laparoscopy and 3D-Mesh technology. Consult Vellore's leading surgical team today.
                </p>
                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                    <button className="px-14 py-6 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-3xl transition-all shadow-2xl shadow-indigo-600/30 uppercase tracking-widest italic group-hover/cta:scale-110 active:scale-95">Book Priority Consult</button>
                    <button className="px-14 py-6 bg-white/10 hover:bg-white/20 text-white font-black rounded-3xl transition-all border border-white/10 uppercase tracking-widest italic">WhatsApp Diagnostic Team</button>
                </div>
            </section>
        </div>
    )
}
