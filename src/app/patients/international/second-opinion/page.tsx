import { Metadata } from "next";
import Link from "next/link";
import {
    FileText, MessageCircle, Phone, CheckCircle2, ChevronRight,
    Clock, ArrowRight, Star, Shield, Stethoscope, Sparkles
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { INTERNATIONAL_COUNTRIES } from "@/lib/data/international-data";
import { SectionContainer } from "@/components/ui/section-container";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

const WA = "https://wa.me/" + siteConfig.contact.phone.replace(/\+/g, '').replace(/\s/g, '') + "?text=" + encodeURIComponent("Hi, I have a diagnosis and I need a free second opinion from your specialists. Please help.");
const EMAIL = "secondopinion@" + siteConfig.url.replace(/^https?:\/\/(www\.)?/, "");

export const metadata: Metadata = {
    title: "Free Second Opinion from India | Specialist Review in 24 Hours | Indira Hospital",
    description: "Concerned about your diagnosis? Get a free second medical opinion from Indira Hospital, Vellore's top specialists. Send your reports via WhatsApp. Response within 24 hours. Trusted by patients from 50+ countries.",
    keywords: [
        "free second opinion India",
        "second medical opinion online India",
        "specialist second opinion Vellore",
        "second opinion CMS Vellore alternative",
        "international patient second opinion",
        "cancer second opinion India",
        "orthopedic second opinion India",
    ],
    openGraph: {
        title: "Free Second Medical Opinion — Indira Hospital Vellore",
        description: "Send your diagnosis to our specialists. Free second opinion within 24 hours. Trusted by patients from Bangladesh, UAE, Nigeria, UK and 50+ countries.",
    },
};

const SPECIALTIES_FOR_SECOND_OPINION = [
    { name: "Cancer / Oncology", desc: "Treatment plan review, chemo protocol, surgical options" },
    { name: "Cardiac Surgery", desc: "Bypass, valve, angioplasty — seek a second view before surgery" },
    { name: "Orthopaedics", desc: "Knee / hip replacement necessity, spine surgery decision" },
    { name: "Neurosurgery", desc: "Brain or spinal surgery second opinion before operating" },
    { name: "Kidney / Transplant", desc: "Transplant eligibility, dialysis alternatives" },
    { name: "Gynaecology", desc: "Hysterectomy necessity, fibroid treatment options" },
    { name: "Urology", desc: "Prostate, kidney stone, bladder tumor treatment review" },
    { name: "Gastroenterology", desc: "Hernia, gallbladder, IBD, liver disease second review" },
];

const HOW_IT_WORKS = [
    { step: 1, icon: "📋", title: "Send Your Reports", desc: "WhatsApp or email your diagnosis, imaging reports (MRI/CT/X-ray), and current treatment plan." },
    { step: 2, icon: "💬", title: "Specialist Review", desc: "A senior specialist from our medical board reviews your case and medical history — at no charge." },
    { step: 3, icon: "⏱️", title: "24-Hour Response", desc: "You receive a detailed written second opinion within 24 hours, outlining recommended steps." },
    { step: 4, icon: "📞", title: "Video Consultant", desc: "If needed, schedule a high-definition video call with the specialist for a deeper discussion." },
];

const WHY_POINTS = [
    "Senior specialists with 15–35 years of experience",
    "Independent opinion — not affiliated with your current hospital",
    "Trusted by patients who came after consulting CMC Vellore",
    "Written opinion document you can share with your doctor",
    "No obligation to travel — the opinion is yours to keep",
    "Zero cost for the initial written medical review",
];

export default function SecondOpinionPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            {/* ELITE CINEMATIC HERO */}
            <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none animate-pulse" />
                
                <SectionContainer className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
                        <nav className="flex items-center justify-center lg:justify-start text-sm text-slate-400 mb-8 gap-1 flex-wrap">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/patients/international" className="hover:text-white transition-colors">International</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-blue-400 font-medium">Free Second Opinion</span>
                        </nav>

                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-blue-500/20">
                            ⚡ Free · No Obligation · 24hr Response
                        </span>
                        
                        <h1 className="text-5xl sm:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
                            Get a Free Second <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400">Medical Opinion.</span>
                        </h1>
                        
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light mb-10 italic">
                            Concerned about your diagnosis? Our senior specialists review your reports and provide an honest, independent second opinion within 24 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/20">
                                <MessageCircle className="w-5 h-5" /> WhatsApp Reports Now
                            </a>
                            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                                <Phone className="w-5 h-5 text-blue-400" /> {siteConfig.contact.phone}
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* FLOATING BADGES */}
            <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <SectionContainer className="py-6 flex flex-wrap justify-between gap-6">
                    {["Free of Charge", "24hr Turnaround", "Specialist Review", "50+ Countries"].map((badge, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-blue-500" /> {badge}
                        </div>
                    ))}
                </SectionContainer>
            </div>

            <SectionContainer className="py-24 max-w-7xl mx-auto space-y-24">
                
                {/* PROCESS BENTO */}
                <section>
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight uppercase">How It <br /><span className="text-blue-600">Works</span></h2>
                            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg font-medium italic">Four simple steps to clarity and confidence in your medical journey.</p>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 border border-blue-100 dark:border-blue-800">
                            <Clock className="w-8 h-8" />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {HOW_IT_WORKS.map((step, i) => (
                            <div key={i} className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
                                <div className="absolute top-6 right-8 text-5xl font-black text-slate-100 dark:text-slate-800 group-hover:text-blue-500/10 transition-colors">0{step.step}</div>
                                <div className="relative z-10">
                                    <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{step.icon}</div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight group-hover:text-blue-600">{step.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic text-sm">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CALL TO ACTION BOX ELITE */}
                <section className="bg-slate-900 rounded-[3.5rem] p-10 md:p-16 border border-white/5 relative overflow-hidden text-center lg:text-left">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">Send Your Reports <br /><span className="text-blue-400 italic">Today.</span></h2>
                            <p className="text-slate-400 font-medium mb-10 leading-relaxed italic text-lg">Our international desk will assign your case to the right senior specialist immediately upon receipt.</p>
                            
                            <div className="space-y-4 mb-4 text-left inline-block">
                                {[
                                    "Your name, age, and country",
                                    "Current diagnosis & symptoms",
                                    "Imaging reports (MRI/CT/PET)",
                                    "Proposed treatment plan"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-blue-400">
                                        <ArrowRight className="w-4 h-4" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <a href={WA} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-8 bg-green-500/10 border border-green-500/20 rounded-[2rem] hover:bg-green-500/20 transition-all text-left">
                                <div>
                                    <p className="text-green-400 font-black uppercase tracking-widest text-[10px] mb-1">Fastest Option</p>
                                    <h4 className="text-white font-black text-2xl uppercase tracking-tighter">WhatsApp</h4>
                                    <p className="text-slate-400 text-xs font-medium italic mt-1">{siteConfig.contact.whatsapp}</p>
                                </div>
                                <MessageCircle className="w-10 h-10 text-green-500 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href={`mailto:${EMAIL}`} className="group flex items-center justify-between p-8 bg-blue-500/10 border border-blue-500/20 rounded-[2rem] hover:bg-blue-500/20 transition-all text-left">
                                <div>
                                    <p className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-1">Large Files</p>
                                    <h4 className="text-white font-black text-2xl uppercase tracking-tighter">Email</h4>
                                    <p className="text-slate-400 text-xs font-medium italic mt-1 break-all">{EMAIL}</p>
                                </div>
                                <FileText className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* SPECIALTIES GRID */}
                <section>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight uppercase leading-tight">Elite Clinical <br /><span className="text-blue-600">Review Board</span></h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium italic">We provide second opinions across all major surgical and medical specialties.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SPECIALTIES_FOR_SECOND_OPINION.map((spec, i) => (
                            <div key={i} className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 hover:shadow-xl transition-all">
                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 dark:border-slate-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Stethoscope className="w-6 h-6" />
                                </div>
                                <h3 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-tight mb-2 group-hover:text-blue-600 transition-colors">{spec.name}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed italic">{spec.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TRUST SIGNALS */}
                <section className="pt-24 border-t border-slate-100 dark:border-slate-800">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <EntityFAQs 
                            entityType="hospital"
                            entityName="Indira Hospital"
                            entitySlug="second-opinion"
                            title="Consultation FAQs"
                            description="Understanding the free second opinion process."
                        />
                        <EntityReviews 
                            entityType="hospital"
                            entityName="Indira Hospital"
                            entitySlug="second-opinion"
                            title="Patient Feedback"
                            description="Success stories from patients who sought clarity."
                        />
                    </div>
                </section>
            </SectionContainer>

            {/* CTA BAND ELITE */}
            <section className="bg-slate-900 rounded-t-[5rem] py-24 sm:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl sm:text-7xl font-black text-white mb-10 tracking-tight leading-[0.95] uppercase">Indira <br /><span className="text-blue-500 italic">Independent Review.</span></h2>
                    <p className="text-xl text-slate-400 font-light mb-16 max-w-2xl mx-auto italic leading-relaxed">No payment. No obligation. Just an honest specialist opinion from India&apos;s leading quaternary care hospital.</p>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-[2.5rem] shadow-2xl shadow-blue-500/20 text-xl transition-all hover:scale-105">
                            <MessageCircle className="w-6 h-6" /> WhatsApp for Opinion
                        </a>
                        <Link href="/patients/international/cost-estimator"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black rounded-[2.5rem] hover:bg-white/10 text-xl transition-all">
                            View Cost Guide
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
