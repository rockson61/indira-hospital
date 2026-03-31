import React from 'react'
import { Zap, Shield, HeartPulse, Clock, Award, CheckCircle2, Siren, Microscope, Users, Globe, ArrowRight, MessageCircle } from 'lucide-react'

export const ProctologyPillarLongForm = () => {
    return (
        <article className="prose prose-lg max-w-none prose-slate dark:prose-invert space-y-16">
            
            {/* 1. Introduction: The Authority on Advanced Proctology */}
            <section className="relative p-12 bg-slate-900 rounded-[3rem] text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold mb-6 text-fuchsia-100 font-primary">The Ultimate Guide to Advanced Proctology in Vellore</h2>
                    <p className="text-xl text-fuchsia-100/70 leading-relaxed mb-8">
                        Welcome to the most comprehensive resource on modern colorectal health. At <strong>Indira Super Speciality Hospital</strong>, we don't just treat conditions; we restore quality of life. As India's premier center for <strong>Laser Proctology</strong>, we have redefined the patient experience from painful surgery to precision, bloodless healing.
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3 font-primary uppercase tracking-tight">
                            <Shield className="text-fuchsia-600 w-8 h-8" />
                            Clinical Science of Proctology
                        </h2>
                        <p className="text-lg leading-relaxed text-slate-700">
                            Proctology, professionally known as <strong>Colorectal Surgery</strong>, is the surgical sub-specialty focused on the anatomy, physiology, and pathology of the colon, rectum, and anus. It involves a delicate balance of maintaining digestive motility, structural integrity, and the highly complex mechanisms of the anal sphincter—the muscles responsible for bowel control.
                        </p>
                        <div className="mt-8 space-y-4">
                            <h4 className="font-bold text-slate-900 font-primary">Our Core Clinical Focus:</h4>
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
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-primary">The 7 Pillars of Expertise</h2>
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
                            link: "/doctor/near-me/treat/proctology/laser-fistula-surgery-filac"
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
                <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center font-primary uppercase tracking-tight">The Laser Revolution in Vellore</h2>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed text-slate-700">
                            For decades, proctology was associated with "painful open surgeries" and weeks of bed rest. The introduction of <strong>1470nm Diode Laser Technology</strong> changed everything. 
                        </p>
                        <p className="text-slate-700">
                            At Indira Hospital, our laser fibers deliver energy with micron-level precision. This energy works by:
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="p-3 rounded-xl bg-orange-100 text-orange-600 shrink-0">
                                    <Zap />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Instant Coagulation</h4>
                                    <p className="text-sm text-slate-500">Sealing blood vessels instantly as the treatment occurs, leading to a bloodless procedure.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                                    <Shield />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Non-Invasive Shrinkage</h4>
                                    <p className="text-sm text-slate-500">Shrinking piles and tracts from the inside out without removing healthy outer skin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-fuchsia-500/20 blur-[100px] rounded-full -z-10" />
                        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-2xl relative">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-primary">Comparison Chart</h3>
                            <div className="space-y-8">
                                <div className="flex justify-between items-center text-sm font-bold border-b pb-4">
                                    <span className="text-slate-500">METRIC</span>
                                    <span className="text-fuchsia-600">ELITE LASER</span>
                                    <span className="text-slate-400">TRADITIONAL</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-medium border-b pb-4">
                                    <span>Pain Score (1-10)</span>
                                    <span className="text-fuchsia-600 font-bold">1</span>
                                    <span className="text-slate-500">9</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-medium border-b pb-4">
                                    <span>Hospital Stay</span>
                                    <span className="text-fuchsia-600 font-bold">Daycare</span>
                                    <span className="text-slate-500">3 Days</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-medium">
                                    <span>Return to Work</span>
                                    <span className="text-fuchsia-600 font-bold">48 Hours</span>
                                    <span className="text-slate-500">2 Weeks</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Diagnostic Precision: The Foundation of Success */}
            <section className="bg-slate-900 rounded-[4rem] p-16 text-white text-center">
                <h2 className="text-3xl font-bold mb-6 font-primary">Precision Diagnostics Hub</h2>
                <p className="text-fuchsia-100/60 text-lg mb-16 max-w-2xl mx-auto">
                    A proctology procedure is only as good as the diagnosis. We utilize the world's most advanced imaging to map your digestive tract before we ever begin treatment.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10 group">
                        <div className="w-16 h-16 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center text-fuchsia-400 mb-6 mx-auto group-hover:bg-fuchsia-500 group-hover:text-white transition-all">
                            <Microscope />
                        </div>
                        <h4 className="font-bold text-xl mb-2">High-Def Anoscopy</h4>
                        <p className="text-sm text-fuchsia-100/40 leading-relaxed">Visualizing the lower rectal canal in ultra-HD to detect early-stage fissures and grade 1 piles.</p>
                    </div>
                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10 group">
                        <div className="w-16 h-16 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center text-fuchsia-400 mb-6 mx-auto group-hover:bg-fuchsia-500 group-hover:text-white transition-all">
                            <HeartPulse />
                        </div>
                        <h4 className="font-bold text-xl mb-2">MRI Defecography</h4>
                        <p className="text-sm text-fuchsia-100/40 leading-relaxed">Dynamic imaging to visualize the actual "physics" of your bowel movement and pelvic floor function.</p>
                    </div>
                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10 group">
                        <div className="w-16 h-16 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center text-fuchsia-400 mb-6 mx-auto group-hover:bg-fuchsia-500 group-hover:text-white transition-all">
                            <Zap />
                        </div>
                        <h4 className="font-bold text-xl mb-2">Manometry Hub</h4>
                        <p className="text-sm text-fuchsia-100/40 leading-relaxed">Measuring sphincter pressure to ensure any procedure we perform maintains total bowel control.</p>
                    </div>
                </div>
            </section>

            {/* 6. Medical Tourism & Regional Hub (Vellore Context) */}
            <section>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-primary uppercase tracking-tight">Vellore: India's Proctology Destination</h2>
                        <p className="text-lg leading-relaxed text-slate-700">
                            Patients from across <strong>Tamil Nadu, Andhra Pradesh, and Karnataka</strong> travel to Indira Hospital in Vellore for laser treatment. Why Vellore? It is the intersection of clinical excellence and affordable, high-tech healthcare. 
                        </p>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            We support our outstation and international patients (from the Middle East, Africa, and beyond) with:
                        </p>
                        <ul className="mt-8 space-y-4">
                            {[
                                "Fast-track clinical triage (Consultation to Discharge in 24h).",
                                "Post-Op remote monitoring via our digital care portal.",
                                "Hassle-free insurance coordination for 80+ TPAs.",
                                "International concierge support for travel and stay."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-900 font-bold">
                                    <Globe className="text-fuchsia-600 w-5 h-5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white border-8 border-slate-50 p-8 rounded-[4rem] shadow-2xl relative">
                            <div className="absolute -top-4 -right-4 bg-fuchsia-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
                                Elite Hub
                            </div>
                            <h4 className="text-center font-bold text-slate-900 mb-4">International Support</h4>
                            <p className="text-xs text-center text-slate-500 leading-relaxed italic">
                                "Our dedicated international patient desk ensures that your surgical journey in Vellore is as comfortable as being at home. We manage everything from your visa documentation to your post-op recovery diet."
                            </p>
                            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                                <p className="text-2xl font-black text-slate-900">+91 97914 84151</p>
                                <p className="text-[10px] font-bold text-fuchsia-600 uppercase tracking-widest mt-1">24/7 Global Helpline</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ Cluster */}
            <section className="pt-20 border-t border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-primary uppercase tracking-tight">Expert Answers: Proctology FAQ</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {[
                        { q: "Is piles treatment possible without surgery?", a: "In grades 1 and 2, diet and lifestyle can often manage symptoms. Laser isn't traditional 'surgery'—it's a 15-minute non-invasive intervention." },
                        { q: "What is the cost of laser surgery in Vellore?", a: "Laser procedures are highly cost-effective at Indira Hospital. We offer all-inclusive packages that are typically 30% more affordable than metro cities." },
                        { q: "How long is the hospital stay?", a: "Almost all our laser proctology procedures are 'Day-Care.' You arrive at 8 AM and are discharged by 2 PM for lunch at home." },
                        { q: "Does insurance cover laser treatment?", a: "Yes. Most major insurers like Star Health, HDFC Ergo, and Govt. schemes like CMCHIS cover laser proctology." },
                        { q: "Can fistulas return after laser?", a: "Recurrence in fistula depends on the tract complexity. Our FiLaC technique has a 90% success rate for simple tracts—much higher than traditional cutting." },
                        { q: "Is high fiber diet essential after surgery?", a: "Yes. Fiber acts as a natural cleaner. We provide every patient with a 30-day customized Nutri-Rehab plan after discharge." }
                    ].map((faq, i) => (
                        <div key={i} className="space-y-3">
                            <h4 className="font-bold text-slate-900 text-lg leading-snug">{faq.q}</h4>
                            <p className="text-slate-500 leading-relaxed text-sm">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* final cta */}
            <section className="bg-fuchsia-950 rounded-[4rem] p-16 text-center text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 to-transparent pointer-events-none" />
                <h2 className="text-4xl font-bold mb-6 font-primary">Start Your Pain-Free Journey Today</h2>
                <p className="text-fuchsia-100/60 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                    Don't let embarrassment or fear of pain hold you back. Join thousands of patients from across the globe who have found relief at Indira Laser Proctology Center.
                </p>
                <div className="flex flex-wrap justify-center gap-6 relative z-10">
                    <button className="px-12 py-5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-fuchsia-600/30 text-lg">Book Immediate Consult</button>
                    <button className="px-12 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all border border-white/10 flex items-center gap-2 text-lg">
                        <MessageCircle /> WhatsApp Experts
                    </button>
                </div>
            </section>
        </article>
    )
}
