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
    AlertCircle,
    Crosshair,
    Users,
    ClipboardCheck,
    Stethoscope,
    Layers,
    Sparkles,
    Scale
} from 'lucide-react'

export const GeneralSurgeryPillarLongForm = () => {
    return (
        <div className="general-surgery-pillar-content space-y-16 py-8">
            {/* 1. Deep Dive Intro */}
            <section className="intro-deep-dive">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-primary italic underline decoration-[#005f73]/20 underline-offset-8">
                    The Ultimate Guide to General & Laparoscopic Surgery in Vellore
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                        In the rapidly evolving landscape of modern medicine, <strong>General Surgery</strong> has undergone a profound transformation. What was once defined by large incisions and weeks of hospital recovery is now characterized by <strong>sub-millimeter precision</strong>, high-definition visualization, and rapid same-day rehabilitation. At <strong>Indira Super Speciality Hospital, Vellore</strong>, we represent the vanguard of this surgical revolution.
                    </p>
                    <p className="mt-6">
                        Under the clinical leadership of <strong>Dr. P. Shankar (Chairman)</strong> and <strong>Dr. Karan Shankar (Lead Surgeon)</strong>, our department has established itself as the premier destination for abdominal, endocrine, and laser surgical interventions in South India. This comprehensive guide details our clinical philosophy, the advanced 4K laparoscopic technologies we employ, and why our department remains the trusted choice for patients across Tamil Nadu and beyond.
                    </p>
                </div>
            </section>

            {/* 2. Clinical Philosophy Section */}
            <section className="bg-slate-50 dark:bg-slate-900/50 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#005f73]/5 blur-[100px] -mr-32 -mt-32" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-4 font-primary">
                    <Award className="text-[#005f73] w-10 h-10" />
                    Clinical Blueprint: The Indira Surgical Standard
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                            "Our approach to general surgery is built on a simple yet rigorous foundation: <strong>Minimize Trauma, Maximize Outcome.</strong> Every surgical plan we design is tailored to the patient's unique anatomy, lifestyle, and recovery goals."
                        </p>
                        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <h4 className="font-bold text-[#005f73] dark:text-fuchsia-400 mb-4 flex items-center gap-2">
                                <Stethoscope className="w-5 h-5" /> Evidence-Based Precision
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                We utilize international surgical protocols (ERAS - Enhanced Recovery After Surgery) to ensure that every step, from pre-operative nutrition to intra-operative nerve mapping, is optimized for clinical excellence.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { title: 'Sphincter Preservation', desc: 'Expert techniques to protect functional anatomy in colorectal cases.', icon: Crosshair },
                            { title: 'Nerve-Sparing Dissection', desc: 'Protecting vital laryngeal and pelvic nerves during thyroid and deep abdominal work.', icon: Activity },
                            { title: 'Harmonic Vessel Sealing', desc: 'Using ultrasound energy for bloodless, stitch-less closure of tissues.', icon: Zap },
                            { title: 'ERAS Protocol', desc: 'Standardized recovery for same-day discharge in over 70% of cases.', icon: Clock }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group hover:shadow-lg transition-transform hover:-translate-y-1">
                                <div className="p-3 rounded-xl bg-[#005f73]/10 text-[#005f73] group-hover:bg-[#005f73] group-hover:text-white transition-colors">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 dark:text-white text-sm m-0">{item.title}</h5>
                                    <p className="text-xs text-slate-500 m-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Technology & Infrastructure Section */}
            <section className="tech-infrastructure space-y-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 font-primary uppercase tracking-tighter italic">
                        The Infrastructure of Precision
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 italic">
                        General surgery at Indira Hospital is powered by the world's most advanced surgical platforms, ensuring that our surgeons have 20x magnification and 4K clarity for every move.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-10 bg-slate-950 rounded-[3rem] text-white border border-white/5 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                            <Microscope className="w-24 h-24 text-fuchsia-500" />
                        </div>
                        <h4 className="text-xl font-black mb-4 font-primary tracking-tight italic text-fuchsia-400">4K UHD Laparoscopy</h4>
                        <p className="text-xs text-slate-400 leading-relaxed italic opacity-80">
                            Our 4K imaging stacks provide ultra-high definition visualization of the surgical field, allowing for safer dissection around vital blood vessels and nerves.
                        </p>
                    </div>
                    <div className="p-10 bg-slate-950 rounded-[3rem] text-white border border-white/5 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                            <Zap className="w-24 h-24 text-fuchsia-500" />
                        </div>
                        <h4 className="text-xl font-black mb-4 font-primary tracking-tight italic text-fuchsia-400">Harmonic Scalpel (Ultrasonic)</h4>
                        <p className="text-xs text-slate-400 leading-relaxed italic opacity-80">
                            Using ultrasonic vibration to cut and seal vessels simultaneously, reducing surgical time and eliminating the need for cautery-based thermal tissue damage.
                        </p>
                    </div>
                    <div className="p-10 bg-slate-950 rounded-[3rem] text-white border border-white/5 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                            <Layers className="w-24 h-24 text-fuchsia-500" />
                        </div>
                        <h4 className="text-xl font-black mb-4 font-primary tracking-tight italic text-fuchsia-400">German Laser Platform</h4>
                        <p className="text-xs text-slate-400 leading-relaxed italic opacity-80">
                            Dedicated 1470nm diode lasers for proctology and varicose vein treatments, providing the most painless surgical experience in South India.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Core Procedure Clusters */}
            <section className="procedure-clusters">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 font-primary italic underline decoration-[#005f73]/20 underline-offset-8 uppercase tracking-widest text-center">
                    Clinical Specialization Silos
                </h2>
                <div className="space-y-12">
                    {/* Laparoscopic Cluster */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-[#005f73] flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#005f73]/10 rounded-2xl flex items-center justify-center">
                                    <Microscope className="w-6 h-6" />
                                </div>
                                Advanced Laparoscopic Surgery (Keyhole)
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Our center specializes in <strong>Advanced Minimally Invasive Surgery (MIS)</strong>. Unlike traditional open surgery, keyhole surgery uses incisions smaller than a centimetre, ensuring minimal pain and rapid recovery.
                            </p>
                            <ul className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Lap. Hernia (3D Mesh)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Lap. Gallbladder</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Lap. Appendectomy</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Diagnostic Laparoscopy</li>
                            </ul>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-700">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-4">The Keyhole Advantage:</h4>
                            <div className="space-y-4">
                                <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl">
                                    <p className="text-xs font-black uppercase text-fuchsia-600 tracking-widest mb-1">Pain Metric</p>
                                    <p className="text-sm font-medium text-slate-600">85% lower post-op pain compared to open surgery.</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl">
                                    <p className="text-xs font-black uppercase text-fuchsia-600 tracking-widest mb-1">Recovery Speed</p>
                                    <p className="text-sm font-medium text-slate-600">Immediate mobilization with 24-hour discharge.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Laser Proctology Cluster */}
                    <div className="grid md:grid-cols-2 gap-12 items-center flex-row-reverse">
                        <div className="bg-fuchsia-50 dark:bg-fuchsia-950/20 p-8 rounded-[3rem] border border-fuchsia-100 dark:border-fuchsia-900/30 md:order-2">
                            <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-400 mb-4">Laser Innovation:</h4>
                            <p className="text-sm text-fuchsia-900/70 dark:text-fuchsia-400/70 italic leading-relaxed">
                                "Our Laser Proctology unit is one of India's highest-volume centers. By removing the need for scalpels, we have eliminated the fear of surgery for conditions like Piles and Fistula."
                            </p>
                            <div className="mt-8 pt-8 border-t border-fuchsia-200 dark:border-fuchsia-900/30 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/50 flex items-center justify-center text-fuchsia-600">
                                    <Zap />
                                </div>
                                <p className="text-[10px] font-black uppercase text-fuchsia-700 tracking-[0.2em]">Pain-Free Surgical Standard</p>
                            </div>
                        </div>
                        <div className="space-y-6 md:order-1">
                            <h3 className="text-2xl font-bold text-fuchsia-700 flex items-center gap-3">
                                <div className="w-12 h-12 bg-fuchsia-100 rounded-2xl flex items-center justify-center">
                                    <Zap className="w-6 h-6" />
                                </div>
                                Pioneer Laser Proctology Center
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                We are globally recognized for <strong>Laser Hemorrhoidopexy (LHP)</strong> and <strong>FiLaC (Fistula Laser Closure)</strong>. Our proctology services are non-invasive, requiring no stitches and zero blood loss.
                            </p>
                            <ul className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Piles (Laser Hemorrhoid)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Fistula (Radial Fiber)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Anal Fissure</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Pilonidal Sinus (Laser)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Emergency & Trauma Section */}
            <section className="bg-slate-900 p-16 rounded-[4rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-4xl relative z-10">
                    <h2 className="text-4xl font-black mb-8 text-red-500 font-primary italic uppercase tracking-tighter">24/7 Surgical Emergency Readiness</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-slate-400 leading-relaxed italic text-sm">
                                Surgical emergencies like acute appendicitis, bowel obstruction, or polytrauma don't happen by appointment. Our hospital maintains 3 fully equipped emergency operation theaters (OT) and a dedicated anaesthesia team on-site 24/7.
                            </p>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                <h5 className="text-red-400 font-black text-xs uppercase tracking-[0.2em] mb-4">Emergency Specializations:</h5>
                                <ul className="space-y-3 text-xs font-bold italic">
                                    <li className="flex items-center gap-3"><AlertCircle className="w-4 h-4 text-red-500" /> Acute Appendicitis (Emergency Lap)</li>
                                    <li className="flex items-center gap-3"><AlertCircle className="w-4 h-4 text-red-500" /> Intestinal Perforation Repair</li>
                                    <li className="flex items-center gap-3"><AlertCircle className="w-4 h-4 text-red-500" /> Blunt Trauma (Splenic/Liver Injury)</li>
                                    <li className="flex items-center gap-3"><AlertCircle className="w-4 h-4 text-red-500" /> Strangulated Hernia Reduction</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="p-8 bg-red-600 rounded-[3rem] shadow-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-500">
                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                    <Clock className="w-16 h-16" />
                                </div>
                                <h4 className="text-xl font-black mb-2 font-primary italic">Emergency Hotline:</h4>
                                <p className="text-3xl font-black tracking-tighter mb-4">+91 416 2261644</p>
                                <p className="text-xs font-medium text-white/80 leading-relaxed italic">
                                    Connected directly to our ER Triage. Immediate ambulance dispatch and surgical team mobilization.
                                </p>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-6 uppercase font-black tracking-widest text-center italic">NABH Accredited Emergency Infrastructure</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Professional Credentials & Leadership */}
            <section className="leadership-section">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-primary italic m-0 tracking-tighter uppercase italic">The Surgical Architects</h2>
                        <div className="prose prose-lg dark:prose-invert">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                The reputation of our General Surgery department is built on the expertise of <strong>Dr. P. Shankar (M.S., FIAGES)</strong> and <strong>Dr. Karan Shankar (M.S.)</strong>. With certificates from world-renowned institutes and decades of combined experience, they are widely recognized as the best surgeons in Vellore and Tamil Nadu.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
                                <div className="text-3xl font-black text-[#005f73] mb-1 italic">30+</div>
                                <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">Years Mastery</div>
                            </div>
                            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
                                <div className="text-3xl font-black text-[#005f73] mb-1 italic">30k+</div>
                                <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">Success Outcomes</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-900 p-12 rounded-[5rem] relative overflow-hidden text-white group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#005f73]/10 rounded-full blur-[80px]" />
                        <div className="relative z-10">
                            <h4 className="text-2xl font-black text-[#005f73] mb-6 font-primary italic uppercase italic underline decoration-white/5 underline-offset-8">A Trusted Legacy</h4>
                            <p className="text-sm text-slate-400 leading-relaxed mb-8 italic">
                                "Our mission was never just about performing surgery; it was about defining the right surgery. We ensure that our patients understand their options—from medication to laser—guaranteeing they walk out with health and confidence."
                            </p>
                            <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#005f73] p-0.5 group-hover:scale-110 transition-transform">
                                    <img src="/images/doctors/dr-shankar.jpg" alt="Dr P Shankar" className="rounded-full grayscale" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase text-[#005f73] tracking-widest italic leading-tight">Dr. P. Shankar</div>
                                    <div className="text-[9px] text-white/40 uppercase font-medium">Chairman / Senior Surgeon</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Comprehensive FAQ (Pillar Level) */}
            <section className="bg-white dark:bg-slate-900 rounded-[4rem] p-12 md:p-20 border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#005f73]/5 rounded-full blur-[120px]" />
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-12 font-primary italic uppercase tracking-widest text-center underline underline-offset-8 decoration-[#005f73]/20">
                    Surgical FAQ
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        { q: "What is the difference between open and laparoscopic surgery?", a: "Open surgery uses a single large incision (5-10 inches) to access organs, while laparoscopic surgery uses 3 or 4 tiny incisions (5-10 mm) and a camera. This leads to 90% less scarring and much faster recovery." },
                        { q: "Is general surgery always safe?", a: "While every procedure carries risks, our hospital maintains international safety standards. With pre-surgical optimization (PAC), 4K precision, and senior clinical oversight, our complication rate is under 0.1% for elective cases." },
                        { q: "When should I consider laser for Piles over traditional surgery?", a: "Laser is recommended for grade 2, 3, and 4 hemorrhoids where the patient wants zero blood loss, minimal post-op pain, and a return to work within 48 hours. Traditional surgery is now reserved only for exceptionally complex cases." },
                        { q: "Does the hospital accept insurance for surgeries?", a: "Yes, we are empanelled with all major government and private insurance providers, including Star Health, HDFC Ergo, Oriental Insurance, and the TN Chief Minister's Health Insurance Scheme (CMCHIS)." },
                        { q: "How long is the recovery for a Laparoscopic Hernia repair?", a: "Most patients are discharged within 24 hours. You can resume desk work in 3-5 days and return to full physical exercise/gym in 3 weeks, compared to 6 weeks for open surgery." },
                        { q: "Why is Dr. Shankar considered the best surgeon in Vellore?", a: "With over 30 years of clinical mastery, a specialization in advanced laparoscopy and laser proctology, and a track record of handling high-risk cases that other centers refer out, his expertise is at the top 1% level in the state." }
                    ].map((faq, i) => (
                        <div key={i} className="space-y-4 p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all">
                            <h4 className="font-bold text-slate-900 dark:text-white italic text-lg leading-snug flex items-start gap-3">
                                <Info className="w-5 h-5 text-[#005f73] mt-1 shrink-0" />
                                {faq.q}
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed italic">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. Final Silo Transition CTA */}
            <section className="bg-gradient-to-br from-[#005f73] to-slate-900 rounded-[4rem] p-20 text-center text-white relative overflow-hidden group/cta">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[100px] animate-pulse" />
                <h2 className="text-5xl font-black mb-6 font-primary italic uppercase tracking-tighter">Your Health is Our Legacy</h2>
                <p className="text-white/60 mb-12 max-w-2xl mx-auto italic text-xl leading-relaxed font-light italic">
                    Whether it's a routine gallbladder removal or a complex emergency, trust the region's surgical architects for world-class precision.
                </p>
                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                    <button className="px-14 py-6 bg-white text-[#005f73] font-black rounded-3xl transition-all shadow-2xl uppercase tracking-widest italic hover:scale-110 active:scale-95">Book Operation Consult</button>
                    <button className="px-14 py-6 bg-white/10 hover:bg-white/20 text-white font-black rounded-3xl transition-all border border-white/10 uppercase tracking-widest italic">Emergency Helpline</button>
                </div>
            </section>
        </div>
    )
}
