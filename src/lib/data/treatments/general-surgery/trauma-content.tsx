import React from 'react'
import { 
    Activity, 
    Clock, 
    CheckCircle2, 
    HeartPulse, 
    Microscope, 
    Info, 
    AlertOctagon,
    Shield,
    Siren,
    Stethoscope,
    Users,
    Syringe,
    Biohazard,
    Zap,
    Navigation
} from 'lucide-react'

export const TraumaLongForm = () => {
    return (
        <div className="trauma-longform-content space-y-16 py-8">
            {/* 1. Executive Summary */}
            <section className="executive-summary">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-heading italic underline decoration-red-600/20 underline-offset-8">
                    The Critical Guide to Trauma Surgery & Emergency Care in Vellore
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                        In cases of major road traffic accidents (RTAs), industrial injuries, or severe falls, physiological collapse can happen in minutes. The "Golden Hour"—the first 60 minutes after a traumatic injury—is the most critical window for determining patient survival. During this time, expert surgical and intensive care intervention is non-negotiable.
                    </p>
                    <p className="mt-6">
                        <strong>Indira Super Speciality Hospital</strong> operates a <strong>Level-1 Capable 24/7 Trauma command center</strong> in Vellore. Led by senior general surgeons <strong>Dr. P. Shankar</strong> and <strong>Dr. Karan Shankar</strong>, alongside neurosurgeons and orthopedic specialists, our "Code Red" trauma protocol guarantees that multi-specialty intervention begins the second a patient arrives. From severe crush injuries to emergency exploratory laparotomies (ATLS Protocol), this guide details our life-saving architecture.
                    </p>
                </div>
            </section>

            {/* 2. The Golden Hour & ATLS Protocol */}
            <section className="bg-slate-50 dark:bg-slate-900/50 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] -mr-32 -mt-32" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-4 font-heading">
                    <Info className="text-red-600 w-10 h-10" />
                    Advanced Trauma Life Support (ATLS)
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Our primary survey follows the globally mandated ATLS algorithm. In a severe trauma scenario, every second wasted on disorganization costs lives. We do not skip steps.
                        </p>
                        <h4 className="font-bold text-red-900 dark:text-red-300 mt-6 font-heading text-xl uppercase italic">The Primary Survey (ABCDEs):</h4>
                        <div className="space-y-4">
                            {[
                                { t: 'Airway & Cervical Control', d: 'Securing breath pathways and rigorously immobilizing the neck to prevent spinal cord injuries.' },
                                { t: 'Breathing & Ventilation', d: 'Rapid deployment of chest tubes for resolving tension pneumothorax or hemothorax (blood in chest).' },
                                { t: 'Circulation & Hemorrhage', d: 'Massive transfusion protocols (blood bank) and applying tourniquets to stop catastrophic bleeding.' },
                                { t: 'Disability & Exposure', d: 'Neurological Glasgow Coma Scale (GCS) assessment and full body inspection to uncover hidden injuries.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all hover:border-red-200">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                    <div>
                                        <p className="font-bold text-slate-900 m-0 text-sm">{item.t}</p>
                                        <p className="text-xs text-slate-500 m-0 italic">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-red-950 p-10 rounded-[4rem] border border-white/10 text-white relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Siren className="w-24 h-24 text-red-400" />
                        </div>
                        <h4 className="font-black text-red-400 mb-6 font-heading uppercase tracking-tighter">The "Code Red" Activation</h4>
                        <p className="text-sm text-slate-400 leading-relaxed italic mb-8">
                            When an ambulance alerts us of a severe RTA, our <strong>"Code Red" system</strong> instantly mobilizes the Anesthesiologist, Senior Surgeon, Intensivist, and Blood Bank before the patient even reaches the hospital doors.
                        </p>
                        <div className="space-y-4 relative z-10">
                            {[
                                "Zero-Delay Triage System",
                                "On-Site Multi-specialty Team",
                                "Dedicated Resuscitation Bay",
                                "Immediate 3T-CT Clearance"
                            ].map((warn, i) => (
                                <div key={i} className="flex items-start gap-3 font-bold text-xs uppercase tracking-widest text-red-100/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1" /> {warn}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Surgical Damage Control */}
            <section className="tech-advantage bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-4xl relative z-10 mx-auto text-center">
                    <h2 className="text-4xl font-black mb-10 text-red-400 font-heading italic uppercase tracking-tighter shrink-0">Surgical Damage Control</h2>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold font-heading italic text-red-100 uppercase italic">Lethal Triad Intervention</h4>
                            <p className="text-slate-400 leading-relaxed italic text-sm">
                                The human body in extreme trauma enters the "Lethal Triad": Hypothermia, Acidosis, and Coagulopathy (inability to clot blood). We do not perform lengthy reconstructive surgeries during this phase. Instead, we perform <strong>Damage Control Surgery (DCS)</strong>—a hyper-fast operative approach designed only to stop bleeding and contain contamination.
                            </p>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] shadow-inner">
                                <h5 className="text-red-400 font-black text-xs uppercase tracking-[0.2em] mb-4">Common Emergency Procedures:</h5>
                                <ul className="space-y-3 text-xs font-bold italic text-white/70">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Exploratory Laparotomy for internal bleeding</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Splenectomy (removing a ruptured spleen)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Bowel resection for perforations</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Emergency Tracheostomy for airway</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 flex flex-col justify-center group/card">
                             <h4 className="text-red-400 font-bold mb-4 font-heading text-xl uppercase italic underline decoration-white/10 underline-offset-8 text-center shrink-0">FAST Scan Integration</h4>
                             <p className="text-slate-400 text-xs leading-relaxed mb-8 italic text-center">
                                We utilize <strong>eFAST (Extended Focused Assessment with Sonography for Trauma)</strong> within the first 3 minutes of arrival. This bedside ultrasound instantly detects internal cardiac and abdominal bleeding, allowing us to bypass the CT scanner and head straight to the Operating Theater if necessary.
                             </p>
                             <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                 <div className="w-[100%] h-full bg-red-500 shadow-[0_0_15px_#ef4444] animate-pulse" />
                             </div>
                             <p className="text-[10px] text-slate-500 mt-2 uppercase font-black tracking-widest text-right italic leading-tight">Diagnostic Speed Metric</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. The ICU & High Dependency Continuity */}
            <section className="bg-white dark:bg-slate-900 rounded-[4rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 font-heading italic uppercase tracking-widest text-center">Intensive Care & Rehabilitation</h2>
                <p className="text-center text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 italic">
                    Surviving the initial surgery is the first hurdle. The second fight happens in our Advanced Poly-Trauma ICU, where we stabilize physiological parameters and fight off systemic infection.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                     {[
                        { title: "Ventilator Support", desc: "Advanced AI-driven mechanical ventilation for patients suffering from lung contusions or rib flails.", icon: <Activity /> },
                        { title: "Sepsis Management", desc: "Aggressive broad-spectrum antibiotic deployment and hemodialysis (CRRT) for multi-organ failure protection.", icon: <Biohazard /> },
                        { title: "Definitive Reconstruction", desc: "Once stabilized (usually 24-48 hours later), orthopedic and plastic surgeons take over for final fracture fixations.", icon: <Shield /> }
                     ].map((item, i) => (
                        <div key={i} className="p-10 border border-slate-100 dark:border-slate-800 bg-red-50 dark:bg-slate-950 rounded-[3rem] text-center hover:shadow-2xl transition-all group">
                            <div className="w-16 h-16 rounded-3xl bg-white dark:bg-red-950/30 text-red-600 shadow-sm flex items-center justify-center mb-10 mx-auto group-hover:rotate-12 transition-transform">
                                {item.icon}
                            </div>
                            <h5 className="font-black text-slate-900 dark:text-white mb-3 font-heading uppercase tracking-tight italic">{item.title}</h5>
                            <p className="text-xs text-slate-500 leading-relaxed italic opacity-80">{item.desc}</p>
                        </div>
                     ))}
                </div>
            </section>

            {/* 5. Comprehensive Pricing, MLC, & TPA */}
            <section className="pricing-transparency">
                <div className="bg-slate-950 p-16 rounded-[5rem] text-white relative overflow-hidden group">
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-red-400 font-heading italic uppercase tracking-tighter m-0">Medicolegal Transparency</h2>
                            <p className="text-slate-400 leading-relaxed italic">
                                In severe RTAs or assaults, police reporting (MLC) is mandatory. We handle the <strong>Medicolegal Case (MLC) documentation</strong> smoothly, ensuring doctors focus purely on saving the patient's life while our rapid-response admin handles legalities and insurance.
                            </p>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem]">
                                <h4 className="text-red-400 font-bold mb-4 font-heading text-lg flex items-center gap-3">
                                    <Shield className="w-5 h-5" /> Emergency TPA Coverage
                                </h4>
                                <p className="text-xs text-slate-400 italic mb-4">Cashless approval teams work 24/7 for critical cases:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Chief Minister Scheme', 'Ayushman Bharat', 'Star Health', 'HDFC Ergo', 'Traffic Victim Fund'].map((ins, i) => (
                                        <div key={i} className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-red-100">{ins}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-10 bg-red-600 rounded-[4rem] shadow-2xl relative group-hover:scale-105 transition-transform duration-500 overflow-hidden text-center">
                                <div className="absolute top-0 right-0 p-8 opacity-20">
                                    <HeartPulse className="w-16 h-16" />
                                </div>
                                <h4 className="text-2xl font-black mb-2 font-heading italic">"Cure First, Cash Later"</h4>
                                <p className="text-3xl font-black tracking-tighter mb-4 italic text-balance">Life-Saving Priority</p>
                                <p className="text-xs font-medium text-white/90 leading-relaxed italic">
                                    As mandated by the Supreme Court of India and our own hospital ethics, <strong>no emergency stabilization is ever delayed for financial clearance</strong>. Our primary duty is physiological stability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Comprehensive FAQ */}
            <section className="pt-20 border-t border-slate-100 dark:border-slate-800">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 font-heading italic uppercase tracking-widest text-center underline underline-offset-8 decoration-red-600/20">Trauma & Emergency FAQ</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        { q: "What should bystanders do before the ambulance arrives?", a: "Do not move the patient unless they are in immediate danger of fire or drowning. If they are bleeding heavily, apply firm, continuous pressure to the wound with a clean cloth. Do not give them water to drink." },
                        { q: "Does the hospital have a Blood Bank?", a: "Yes. Our facility is tied up with immediate 24/7 blood bank services, capable of initiating Massive Transfusion Protocols (MTP) within minutes for severe hemorrhagic shock." },
                        { q: "Do you handle pediatric (child) trauma?", a: "Yes. We have specialized pediatric surgeons and pediatric ICU ventilators to handle traumatic injuries specific to children." },
                        { q: "What is an MLC?", a: "Medicolegal Case. For road accidents, burns, or assaults, it is a legal requirement to inform the police. Our team files the MLC within the hospital premises so the family doesn't have to run to the station initially." },
                        { q: "Is a surgeon always available at night?", a: "Standard hospitals rely on 'on-call' doctors who travel from home. Indira Hospital maintains an on-site 'in-house' senior surgical team 24/7/365." },
                        { q: "What if the patient has a severe head injury?", a: "Our General Surgeons immediately secure the airway and blood pressure, while our on-site Neurosurgeon takes over for emergency craniotomies (brain surgery) after an immediate CT scan." }
                    ].map((faq, i) => (
                        <div key={i} className="space-y-4 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-slate-900 dark:text-white italic text-lg leading-snug flex items-start gap-3">
                                <Info className="w-5 h-5 text-red-600 mt-1 shrink-0" />
                                {faq.q}
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed italic">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Final CTA */}
            <section className="bg-red-950 rounded-[4rem] p-20 text-center text-white relative overflow-hidden group/cta">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] animate-pulse" />
                <h2 className="text-5xl font-black mb-6 font-heading italic uppercase tracking-tighter shrink-0 italic">Every Second Counts</h2>
                <p className="text-red-100/60 mb-12 max-w-2xl mx-auto italic text-xl leading-relaxed font-light italic">
                    If you or a loved one has suffered a severe injury, bypass standard clinics. Head straight to Vellore's elite Level-1 capable Trauma Hub.
                </p>
                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                    <button className="px-14 py-6 bg-red-600 hover:bg-red-700 text-white font-black rounded-3xl transition-all shadow-2xl shadow-red-600/30 uppercase tracking-widest italic group-hover/cta:scale-110 active:scale-95 animate-pulse">Call 24/7 Red Hotline</button>
                    <button className="px-14 py-6 bg-white/10 hover:bg-white/20 text-white font-black rounded-3xl transition-all border border-white/10 uppercase tracking-widest italic flex items-center gap-3">
                        <Navigation className="w-5 h-5" /> Get Ambulance Directions Location
                    </button>
                </div>
            </section>
        </div>
    )
}
