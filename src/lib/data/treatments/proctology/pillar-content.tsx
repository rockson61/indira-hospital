import React from 'react'
import { Zap, Shield, HeartPulse, Clock, Award, CheckCircle2, Siren, Microscope, Users, Globe, ArrowRight, MessageCircle } from 'lucide-react'

export const ProctologyPillarLongForm = () => {
    return (
        <article className="prose prose-lg max-w-none prose-slate dark:prose-invert space-y-16">
            
            {/* 1. Introduction: The Authority on Advanced Proctology */}
            <section className="relative p-12 bg-slate-900 rounded-[3rem] text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold mb-6 text-fuchsia-100 font-heading">The Ultimate Guide to Advanced Proctology in Vellore</h2>
                    <p className="text-xl text-fuchsia-100/70 leading-relaxed mb-8">
                        Welcome to the most comprehensive resource on modern colorectal health. At <strong>Indira Super Speciality Hospital</strong>, we don&apos;t just treat conditions; we restore quality of life. As India&apos;s premier center for <strong>Laser Proctology</strong>, we have redefined the patient experience from painful surgery to precision, bloodless healing.
                    </p>
                    <p className="text-lg text-fuchsia-100/60 leading-relaxed">
                        Whether you are suffering from Piles (Hemorrhoids), Anal Fissures, Complex Fistulas, or Rectal Prolapse, this guide will provide you with the clinical clarity, technological insights, and localized context needed to make an informed decision about your health.
                    </p>
                </div>
            </section>

            {/* 2. What is Proctology? (Medical Definition) */}
            <section>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3 font-heading uppercase tracking-tight">
                            <Shield className="text-fuchsia-600 w-8 h-8" />
                            Clinical Science of Proctology
                        </h2>
                        <p className="text-lg leading-relaxed text-slate-700">
                            Proctology, professionally known as <strong>Colorectal Surgery</strong>, is the surgical sub-specialty focused on the anatomy, physiology, and pathology of the colon, rectum, and anus. It involves a delicate balance of maintaining digestive motility, structural integrity, and the highly complex mechanisms of the anal sphincter—the muscles responsible for bowel control.
                        </p>
                        <div className="mt-8 space-y-4">
                            <h4 className="font-bold text-slate-900 font-heading">Our Core Clinical Focus:</h4>
                            <ul className="space-y-3">
                                {[
                                    "Functional Anorectal Disorders (Constipation, Incontinence)",
                                    "Benign Anorectal Pathology (Piles, Fissure, Fistula)",
                                    "Emergency Sepsis Management (Abscesses)",
                                    "Pelvic Floor Reconstruction (Prolapse)",
                                    "Malignancy Screening (Colorectal Cancer)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-600">
                                        <CheckCircle2 className="w-5 h-5 text-fuchsia-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-fuchsia-50 p-10 rounded-[4rem] border border-fuchsia-100">
                        <h4 className="text-2xl font-bold text-fuchsia-900 mb-6 italic">Why Specialized Proctology Matters</h4>
                        <p className="text-slate-700 leading-relaxed">
                            "The anal region is one of the most nerve-rich areas of the body. A standard general surgery approach can often lead to 'collateral damage'—loss of sensation or sphincter control. Specialist proctologists use micro-surgical tools and laser energy to target the disease while leaving the surrounding healthy nerves 100% intact."
                        </p>
                        <p className="mt-6 text-sm font-bold text-fuchsia-600 uppercase tracking-widest">— Dr. P. Shankar, Chairman & Senior Lead</p>
                    </div>
                </div>
            </section>

            {/* 3. The 7 Pillars of Proctology at Indira Hospital */}
            <section className="bg-slate-50 py-16 px-8 rounded-[4rem]">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-heading">The 7 Pillars of Expertise</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { 
                            title: "Laser Piles Treatment", 
                            desc: "Non-invasive Laser Hemorrhoidopexy (LHP). No cuts, no blood, 4-hour recovery.",
                            link: "/doctor/near-me/treat/proctology/laser-piles-treatment"
                        },
                        { 
                            title: "Fistula closure (FiLaC)", 
                            desc: "Advanced laser fiber closure (FiLaC) that preserves the sphincter and prevents recurrence.",
                            link: "/doctor/near-me/treat/proctology/fistula-surgery-treatment"
                        },
                        { 
                            title: "Anal Fissure Management", 
                            desc: "Precision laser sphincterotomy and holistic healing for painful chronic tears.",
                            link: "/doctor/near-me/treat/proctology/laser-fissure-treatment"
                        },
                        { 
                            title: "Pilonidal Sinus Laser", 
                            desc: "SiLaC technique for deep pit debridement and closure without large open wounds.",
                            link: "/doctor/near-me/treat/proctology/laser-pilonidal-sinus-surgery"
                        },
                        { 
                            title: "Emergency Abscess Care", 
                            desc: "24/7 incision and drainage (I&D) for perianal abscesses to prevent sepsis.",
                            link: "/doctor/near-me/treat/proctology/anal-abscess-treatment"
                        },
                        { 
                            title: "IBS & Gut Motility", 
                            desc: "Scientific management of constipation and chronic bloating through motility mapping.",
                            link: "/doctor/near-me/treat/proctology/ibs-and-constipation-management"
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
                            <h4 className="text-xl font-bold text-slate-900 group-hover:text-fuchsia-600 mb-3">{item.title}</h4>
                            <p className="text-sm text-slate-500 mb-6 leading-relaxed">{item.desc}</p>
                            <a href={item.link} className="inline-flex items-center text-fuchsia-600 font-bold text-sm">
                                View Full Guide <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    ))}
                    <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-center">
                        <h4 className="text-xl font-bold text-fuchsia-400 mb-3">Rectal Prolapse</h4>
                        <p className="text-sm text-fuchsia-100/60 mb-6 leading-relaxed">Advanced Laparoscopic Ventral Mesh Rectopexy (LVMR) for anatomical restoration.</p>
                        <a href="/doctor/near-me/treat/proctology/rectal-prolapse-surgery" className="inline-flex items-center text-white font-bold text-sm underline underline-offset-8">
                            View Specialist Guide <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* 4. The Laser Revolution: Why It Matters */}
            <section>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">The Laser Revolution in Vellore</h2>
                    <p className="text-slate-500 italic mt-4">Precision 1470nm Diode Energy: The Gold Standard in Colorectal Care.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 prose prose-lg prose-slate dark:prose-invert">
                        <p className="text-lg leading-relaxed">
                            For decades, proctology was associated with "painful open surgeries" and weeks of bed rest. The introduction of <strong>1470nm Diode Laser Technology</strong> changed everything. At Indira Hospital, our laser fibers deliver energy with micron-level precision, allowing us to treat the diseased tissue without impacting the surrounding healthy nerves.
                        </p>
                        
                        <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-[2.5rem] border border-blue-100 dark:border-blue-800 not-prose">
                            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-4 flex items-center gap-2 italic">
                                <Zap className="w-6 h-6 text-blue-600" />
                                The Physics of 1470nm Wavelength
                            </h4>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                                Unlike older lasers, the 1470nm wavelength targets <strong>Water Absorption</strong> specifically. Since human tissue is 70% water, this allows the laser to ablate tissue with zero "thermal spread"—meaning the heat doesn&apos;t leak into the sensitive anal sphincter muscles. This is why our patients report 90% less post-op pain.
                            </p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-[10px] font-black border border-blue-100 dark:border-blue-700 uppercase">Zero Bleeding</span>
                                <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-[10px] font-black border border-blue-100 dark:border-blue-700 uppercase">Safe for Diabetics</span>
                            </div>
                        </div>

                        <p>
                            We utilize <strong>Dual Ring Radial Fibers</strong>. Traditional fibers shoot light forward; our radial fibers emit light in a 360-degree circle. In Fistula treatment (FiLaC), this ensures the entire tract is collapsed evenly, virtually eliminating the risk of recurrence.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-fuchsia-500/20 blur-[100px] rounded-full -z-10" />
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 font-heading italic border-b pb-4 border-slate-100 dark:border-slate-800">Clinical Impact Comparison</h3>
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                                        <span>Post-Op Pain (Laser)</span>
                                        <span className="text-blue-600">Miniscule</span>
                                    </div>
                                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full w-[10%] bg-blue-600 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                                        <span>Post-Op Pain (Traditional)</span>
                                        <span className="text-rose-600">EXTREME</span>
                                    </div>
                                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full w-[95%] bg-rose-600 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="p-4 rounded-3xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
                                        <p className="text-[10px] font-black uppercase text-emerald-600 mb-1 tracking-tighter">Laser Recovery</p>
                                        <p className="text-xl font-black text-slate-900 dark:text-white tracking-tighter italic">24-48 Hours</p>
                                    </div>
                                    <div className="p-4 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                                        <p className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-tighter">Open Surgery</p>
                                        <p className="text-xl font-black text-slate-900 dark:text-white tracking-tighter italic whitespace-nowrap text-slate-400 line-through">21-30 Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: Complex Fistula & VAAFT */}
            <section className="bg-white dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -mr-32 -mt-32"></div>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <span className="px-4 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] font-black rounded-full uppercase tracking-widest italic border border-fuchsia-200 dark:border-fuchsia-800">Advanced Complex Care</span>
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic leading-tight">Complex Fistula Management: Beyond the Simple Tract</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic">
                            A complex fistula (multi-branched or high transcystic) is one of the most challenging conditions in colorectal surgery. Traditional "cutting" often leads to fecal incontinence—the inability to control bowel movements.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            At Indira Hospital, we utilize <strong>VAAFT (Video-Assisted Anal Fistula Treatment)</strong>. We insert a microscopic camera directly into the fistula tract to see the internal opening from the "inside-out." 
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { title: "Sphincter Sparing", desc: "No muscle cutting involved.", icon: Shield },
                                { title: "Visual Guided", desc: "100% visualization of branches.", icon: Microscope }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 dark:bg-slate-900">
                                    <item.icon className="w-6 h-6 text-fuchsia-600 shrink-0" />
                                    <div>
                                        <p className="text-xs font-black uppercase text-slate-900 dark:text-white mb-1 tracking-tighter">{item.title}</p>
                                        <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-900 rounded-3xl p-8 text-white space-y-6 shadow-2xl border border-slate-800 italic font-serif">
                        <p className="text-xl leading-relaxed text-blue-100">
                            "The internal opening is the 'factory' of the fistula. If you don&apos;t find the internal opening, the fistula will return. VAAFT allows us to find and close that factory with precision laser closure (FiLaC) without damaging a single fiber of the sphincter muscle."
                        </p>
                        <hr className="border-white/10" />
                        <div className="flex items-center gap-4 not-italic font-heading">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-black">KS</div>
                            <div>
                                <p className="font-bold text-sm">Dr. Karan Shankar</p>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Colorectal Surgeon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Diagnostic Precision: The Foundation of Success */}
            <section className="bg-slate-900 rounded-[4rem] p-16 text-white text-center group transition-colors hover:bg-slate-800">
                <h2 className="text-4xl font-black mb-6 font-heading italic uppercase tracking-tighter">Precision Diagnostics Hub</h2>
                <p className="text-fuchsia-100/60 text-xl mb-16 max-w-3xl mx-auto italic font-medium leading-relaxed">
                    A proctology procedure is only as good as the diagnostic roadmap. At Indira, we utilize the world&apos;s most advanced imaging to map your digestive tract before we ever initiate treatment.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group-hover:border-fuchsia-500/30 transition-all">
                        <div className="w-20 h-20 bg-fuchsia-500/20 rounded-[2rem] flex items-center justify-center text-fuchsia-400 mb-8 mx-auto group-hover:scale-110 transition-transform">
                            <Microscope className="w-10 h-10" />
                        </div>
                        <h4 className="font-black text-2xl mb-4 italic tracking-tight">High-Def Anoscopy</h4>
                        <p className="text-sm text-fuchsia-100/40 leading-relaxed font-medium antialiased px-4">Visualizing the lower rectal canal in 4K resolution to detect early-stage fissures and grade 1 piles that are missed by standard digital examinations.</p>
                    </div>
                    <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group-hover:border-fuchsia-500/30 transition-all scale-105 shadow-2xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fuchsia-600 text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest italic">Superior Imaging</div>
                        <div className="w-20 h-20 bg-blue-500/20 rounded-[2rem] flex items-center justify-center text-blue-400 mb-8 mx-auto group-hover:rotate-12 transition-transform">
                            <HeartPulse className="w-10 h-10" />
                        </div>
                        <h4 className="font-black text-2xl mb-4 italic tracking-tight uppercase">MRI Defecography</h4>
                        <p className="text-sm text-fuchsia-100/40 leading-relaxed font-medium antialiased px-4 italic">Dynamic MRI that visualizes the 'live physics' of your bowel movement, identifying pelvic floor descents and internal prolapses invisible to the naked eye.</p>
                    </div>
                    <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group-hover:border-fuchsia-500/30 transition-all">
                        <div className="w-20 h-20 bg-emerald-500/20 rounded-[2rem] flex items-center justify-center text-emerald-400 mb-8 mx-auto group-hover:-rotate-6 transition-transform">
                            <Zap className="w-10 h-10" />
                        </div>
                        <h4 className="font-black text-2xl mb-4 italic tracking-tight">Anorectal Manometry</h4>
                        <p className="text-sm text-fuchsia-100/40 leading-relaxed font-medium antialiased px-4">Measuring the exact pressure of your sphincter muscles to ensure any corrective procedure prevents post-operative incontinence.</p>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: Post-Op Nutri-Rehab */}
            <section className="bg-emerald-50 dark:bg-emerald-950/20 p-12 md:p-20 rounded-[4rem] border border-emerald-100 dark:border-emerald-800/50 shadow-sm relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[120px] -ml-32 -mb-32"></div>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/3">
                        <div className="relative p-8 bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border-4 border-emerald-100 dark:border-emerald-800 rotate-2">
                             <h4 className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mb-4 font-heading italic">The Indira Nutri-Rehab™</h4>
                             <p className="text-sm text-slate-500 leading-relaxed mb-6 italic">"Surgery is only 50% of the solution. The remaining 50% is how you fuel your digestive recovery."</p>
                             <ul className="space-y-4">
                                {["Liquid Gold Phase (Day 1)", "Soft-Fiber Transition (Day 3-7)", "Probiotic Bulk Protocol", "Hydration Mapping"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-xs font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                                    </li>
                                ))}
                             </ul>
                        </div>
                    </div>
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic leading-tight">Advanced Post-Surgical Rehabilitation</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            Our Procto-Rehab protocols are designed to ensure that you never have to visit a proctologist again. It&apos;s not just about healing the wound; it&apos;s about changing the <strong>Digestive Mechanics</strong> that caused the Piles or Fissure in the first place.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <h5 className="font-black text-xs uppercase tracking-widest text-emerald-600 italic">Fiber Engineering</h5>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">Customized soluble vs insoluble fiber ratios to ensure stool consistency without straining.</p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="font-black text-xs uppercase tracking-widest text-emerald-600 italic">Pelvic Floor Yoga</h5>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">Gentle abdominal and pelvic exercises to restore natural bowel motility and reduce chronic constipation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Medical Tourism & Regional Hub (Vellore Context) */}
            <section>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8 font-heading uppercase tracking-tighter italic border-l-8 border-fuchsia-600 pl-8">Vellore: India&apos;s Colorectal Destination</h2>
                        <div className="prose prose-lg prose-slate dark:prose-invert">
                            <p>
                                Patients from across <strong>Tamil Nadu, Andhra Pradesh, and Karnataka</strong> travel to Indira Hospital in Vellore for laser treatment. Why Vellore? It is the intersection of clinical excellence, specialized laser infrastructure, and affordable, high-tech healthcare. 
                            </p>
                            <p className="mt-4">
                                We support our outstation and international patients (from the Middle East, Africa, and beyond) with a comprehensive <strong>Surgical Travel Gateway</strong>:
                            </p>
                        </div>
                        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Fast-track clinical triage: Consultation to Discharge in 24 hours.",
                                "Post-Op remote monitoring via our Digital Care Portal for 90 days.",
                                "Hassle-free insurance coordination for 80+ TPAs including Star Health & Medicare.",
                                "International concierge support for visas, local travel, and translation."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm group hover:border-fuchsia-500 transition-colors">
                                    <Globe className="text-fuchsia-600 w-6 h-6 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white dark:bg-slate-900 border-8 border-slate-50 dark:border-slate-800 p-8 rounded-[4rem] shadow-2xl relative group overflow-hidden">
                            <div className="absolute inset-0 bg-blue-500/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                            <div className="absolute -top-4 -right-4 bg-fuchsia-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse italic">
                                Global Elite Hub
                            </div>
                            <h4 className="text-center font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest italic">International Support</h4>
                            <p className="text-sm text-center text-slate-500 leading-relaxed font-serif italic mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
                                "Our dedicated international patient desk ensures that your surgical journey in Vellore is as comfortable as being at home. We manage everything from your visa documentation to your post-op recovery diet, ensuring zero friction in your healing process."
                            </p>
                            <div className="text-center relative z-10">
                                <p className="text-3xl font-black text-slate-900 dark:text-white italic tracking-tighter">+91 97914 84151</p>
                                <p className="text-[10px] font-bold text-fuchsia-600 uppercase tracking-widest mt-2 flex items-center justify-center gap-2">
                                    <MessageCircle className="w-4 h-4" /> 24/7 Global Liaison Helpline
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ Cluster */}
            <section className="pt-20 border-t border-slate-100 dark:border-slate-800">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 font-heading uppercase tracking-tighter italic">Expert Answers: Clinical FAQ</h2>
                    <p className="text-slate-500 italic">Clarifying your doubts with clinical precision and medical authority.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                    {[
                        { q: "Is piles treatment possible without any form of surgery?", a: "In early grades (1 & 2), yes. We use a combination of lifestyle medicine and bulk-forming agents. However, for persistent symptoms, Laser LHP isn&apos;t traditional 'surgery'—it&apos;s a 15-minute non-invasive intervention that solves the problem permanently." },
                        { q: "What is the cost of laser piles surgery in Vellore vs Metro cities?", a: "Laser procedures are highly cost-effective at Indira Hospital. We offer all-inclusive transparent packages that are typically 40% more affordable than Chennai or Bangalore, despite using superior 1470nm Dual Ring technology." },
                        { q: "How long is the actual hospital stay for laser proctology?", a: "Virtually all our laser procedures are 'Day-Care.' Patients are admitted at 8:00 AM, the procedure takes 20 minutes, and they are typically back at home for lunch by 1:30 PM." },
                        { q: "Can severe complex fistulas return even after laser treatment?", a: "Fistula recurrence is the biggest challenge in proctology. While 'simple' tracts have near-zero recurrence with FiLaC, complex tracts require VAAFT (Video-Assisted) mapping. Our success rate for complex cases is among the highest in North Tamil Nadu (approx 92%)." },
                        { q: "When can I resume a normal diet and exercise after laser surgery?", a: "You can consume a normal (high-fiber) diet the same evening. Light walking is encouraged within 4 hours. Heavy lifting or intense gym workouts should typically wait for 10-14 days to ensure total tissue stabilization." },
                        { q: "Is the procedure covered under Government and Corporate Insurance?", a: "Yes. Laser proctology is a medically recognized surgical intervention. We are empaneled with major TN Govt. schemes like CMCHIS and all major corporate TPAs like Star Health, United Healthcare, and Heritage." }
                    ].map((faq, i) => (
                        <div key={i} className="group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/50 border border-slate-50 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-black text-slate-900 dark:text-white text-lg leading-snug mb-4 italic group-hover:text-fuchsia-600 transition-colors">
                                <span className="inline-block text-fuchsia-600 mr-2">Q.</span>
                                {faq.q}
                            </h4>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium border-l-2 border-slate-100 dark:border-slate-800 pl-6">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* final cta */}
            <section className="bg-fuchsia-950 dark:bg-black rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(112,26,117,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/30 to-blue-600/10 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fuchsia-500/10 blur-[150px] -mt-[300px]"></div>
                
                <h2 className="text-5xl font-black mb-8 font-heading italic tracking-tighter">Start Your Pain-Free Journey Today</h2>
                <p className="text-fuchsia-100/60 mb-12 max-w-2xl mx-auto text-xl leading-relaxed italic font-medium">
                    Don&apos;t let embarrassment or fear of pain hold you back from a high-quality life. Join 10,000+ patients who have found permanent relief at India&apos;s leading Laser Proctology Center.
                </p>
                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                    <button className="px-14 py-6 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-black rounded-3xl transition-all shadow-2xl shadow-fuchsia-600/40 text-lg uppercase tracking-widest italic hover:scale-105 active:scale-95">Book Painless Consultation</button>
                    <button className="px-14 py-6 bg-white/10 hover:bg-white/20 text-white font-black rounded-3xl transition-all border border-white/10 flex items-center gap-3 text-lg uppercase tracking-widest italic">
                        <MessageCircle className="w-6 h-6" /> WhatsApp Specialists
                    </button>
                </div>
                <div className="mt-16 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-12 grayscale opacity-40">
                    <span className="font-black italic tracking-tighter text-2xl">NABH ACCREDITED</span>
                    <span className="font-black italic tracking-tighter text-2xl">ISO 9001:2015</span>
                    <span className="font-black italic tracking-tighter text-2xl">CGHS APPROVED</span>
                </div>
            </section>
        </article>
    )
}
