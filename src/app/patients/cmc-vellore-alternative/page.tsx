import { Metadata } from "next";
import Link from "next/link";
import {
    CheckCircle2, XCircle, MessageCircle, Phone, Clock, Star, Award,
    Users, Shield, ArrowRight, ChevronRight, MapPin, TrendingDown, Calendar, Plane, CreditCard, AlertCircle, Sparkles
} from "lucide-react";
import { siteConfig } from "@/config/site";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { CMC_VS_INDIRA, INTERNATIONAL_FAQS, JOURNEY_STEPS } from "@/lib/data/international-data";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { SectionContainer } from "@/components/ui/section-container";

export const metadata: Metadata = {
    title: "CMC Vellore Alternative | No Waiting List — Get Treatment...",
    description: "CMC Vellore waiting list too long? Indira Super Speciality Hospital, Vellore offers same-quality NABH quaternary care with same-week appointments, no wa...",
    keywords: [
        "CMC Vellore alternative",
        "CMC Vellore long waiting list",
        "alternatives to CMC Vellore",
        "hospital near CMC Vellore",
        "Vellore hospital appointment",
        "quaternary care Vellore",
        "international patients Vellore",
        "NABH hospital Vellore",
    ],
    openGraph: {
        title: "CMC Vellore Alternative — No Waiting List | Indira Hospital Vellore",
        description: "Same NABH quaternary care as CMC Vellore. Same-week appointments. Dedicated international patient desk. Book today.",
    },
};

const WAITING_COMPARISON = [
    { dept: "Cardiology", cmc: "2–4 months", indira: "2–5 days" },
    { dept: "Orthopaedics (Knee/Hip)", cmc: "3–6 months", indira: "Same week" },
    { dept: "Neurosurgery", cmc: "3–5 months", indira: "1–2 weeks" },
    { dept: "Oncology", cmc: "4–8 weeks", indira: "Same week" },
    { dept: "Urology / Kidney", cmc: "6–10 weeks", indira: "3–5 days" },
    { dept: "Gastroenterology", cmc: "4–8 weeks", indira: "1 week" },
    { dept: "General Surgery", cmc: "4–6 weeks", indira: "Next day" },
    { dept: "Laparoscopic Surgery", cmc: "4–6 weeks", indira: "2–3 days" },
];

const WHY_POINTS = [
    { icon: Clock, title: "Zero Waiting Lists", desc: "Appointments within 1–7 days. No 3–6 month queues. Emergencies seen same day.", color: "green" },
    { icon: Award, title: "NABH Accredited", desc: "Same accreditation standards as CMC. Equivalent quaternary care quality — not a compromise.", color: "fuchsia" },
    { icon: Users, title: "Dedicated International Desk", desc: "24/7 coordinator for visa letters, airport pickup, accommodation, and translation.", color: "blue" },
    { icon: TrendingDown, title: "Lower Costs", desc: "NABH-accredited care at 10–30% lower cost than CMC Vellore for most procedures.", color: "amber" },
    { icon: Shield, title: "Private Rooms Available", desc: "No scrambling for accommodation. International suites and attendant facilities always available.", color: "indigo" },
    { icon: MapPin, title: "Same City — Near CMC", desc: "Located in Vellore, the same medical hub. You don&apos;t need to travel to another city.", color: "red" },
];

const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Skip the CMC Queue: I saw the long waiting list and would like to book a same-week appointment at Indira Super Speciality Hospital, Vellore.")}`;
const reportsWaUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Second Opinion Request: I am sharing my medical reports for a free review by Indira Hospital specialists (Alternative to CMC waiting list).")}`;

export default function CMCVelloreAlternativePage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <JsonLdSchema type="hospital" />

            {/* ELITE GLOBAL HERO */}
            <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] opacity-50 pointer-events-none" />

                <SectionContainer className="relative z-10">
                    <div className="max-w-4xl">
                        <nav className="flex items-center text-sm text-slate-400 mb-8 gap-1 flex-wrap">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/patients" className="hover:text-white transition-colors">Patient Resources</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-fuchsia-400 font-medium">CMC Alternative</span>
                        </nav>

                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-amber-500/20">
                            ⚡ No Waiting Lists — Same-Week Appointments
                        </span>
                        
                        <h1 className="elite-hero-title mb-8">
                            CMC Waiting List <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Too Long? Come to Indira.</span>
                        </h1>
                        
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light mb-10">
                            Indira Super Speciality Hospital is located in <strong className="text-white">the same city as CMC Vellore</strong>. Equivalent NABH quaternary care with <strong className="text-white">immediate availability</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={waUrl} target="_blank" rel="noopener noreferrer"
                                className="elite-button-primary">
                                <MessageCircle className="w-4 h-4" /> Book Same-Week Appointment
                            </a>
                            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                                <Phone className="w-4 h-4 text-emerald-400" /> WhatsApp Coordinator
                            </a>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* QUICK STATS */}
            <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-between gap-8">
                    {[
                        { v: "15,000+", l: "Surgeries Done", color: "text-fuchsia-500" },
                        { v: "NABH", l: "Accredited Quality", color: "text-indigo-500" },
                        { v: "SAME WEEK", l: "Appointments", color: "text-amber-500" },
                        { v: "50+", l: "Specialties", color: "text-emerald-500" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center sm:items-start">
                            <div className={`text-3xl font-black ${stat.color} tracking-tight`}>{stat.v}</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.l}</div>
                        </div>
                    ))}
                </div>
            </div>

            <SectionContainer className="py-24 max-w-7xl mx-auto space-y-24">
                
                {/* WAITING TIME BENTO */}
                <section>
                    <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
                        <div>
                            <h2 className="elite-section-title text-slate-900 dark:text-white uppercase">Wait Time <br /><span className="text-fuchsia-600">Comparison</span></h2>
                            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg font-medium italic">Why wait months when you can be treated this week?</p>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-200 dark:border-slate-700">
                            <Clock className="w-8 h-8" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 overflow-hidden rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                            <table className="w-full text-left">
                                <thead className="bg-slate-900 text-white">
                                    <tr>
                                        <th className="py-6 px-8 font-black uppercase tracking-widest text-xs">Specialty</th>
                                        <th className="py-6 px-8 font-black uppercase tracking-widest text-xs text-center text-red-400">CMC Wait</th>
                                        <th className="py-6 px-8 font-black uppercase tracking-widest text-xs text-center text-emerald-400">Indira Wait</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                    {WAITING_COMPARISON.map((row) => (
                                        <tr key={row.dept} className="hover:bg-fuchsia-50/30 dark:hover:bg-fuchsia-900/10 transition-colors group">
                                            <td className="py-5 px-8 font-black text-slate-700 dark:text-slate-300 uppercase tracking-tight text-sm group-hover:text-fuchsia-600 transition-colors">{row.dept}</td>
                                            <td className="py-5 px-8 text-center">
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-black uppercase tracking-widest border border-red-100 dark:border-red-900/30">
                                                    <XCircle className="w-3 h-3" /> {row.cmc}
                                                </span>
                                            </td>
                                            <td className="py-5 px-8 text-center text-emerald-600 dark:text-emerald-400 font-black text-sm uppercase tracking-tight">
                                                {row.indira}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-slate-900 rounded-[3rem] p-10 text-white border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-[40px] pointer-events-none" />
                            <div className="relative z-10">
                                <h3 className="elite-section-title mb-6 uppercase">Same City. <br /><span className="text-fuchsia-400 italic">No Waiting.</span></h3>
                                <p className="text-slate-400 font-medium mb-8 leading-relaxed">Indira Hospital is located in Gandhi Nagar, Vellore — just minutes away from CMC. You get the same medical hub benefits without the long queues.</p>
                                
                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-emerald-400">
                                        <CheckCircle2 className="w-5 h-5" /> Appointments in 2-5 Days
                                    </div>
                                    <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-emerald-400">
                                        <CheckCircle2 className="w-5 h-5" /> Direct Specialist Access
                                    </div>
                                    <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-emerald-400">
                                        <CheckCircle2 className="w-5 h-5" /> Private Suite Availability
                                    </div>
                                </div>

                                <a href={waUrl} className="flex items-center justify-center gap-2 px-8 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-fuchsia-50 transition-all uppercase tracking-widest text-xs">
                                    Skip the Wait - WhatsApp <ArrowRight className="w-4 h-4 text-fuchsia-600" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE INDIRA GRID */}
                <section>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="elite-section-title text-slate-900 dark:text-white mb-6 uppercase">Why Choose Indira <br /><span className="text-fuchsia-600">Over a 3-Month Wait?</span></h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium italic">NABH-accredited care doesn&apos;t have to be a queue.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHY_POINTS.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="group bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 shadow-inner group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-500 mb-8">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight group-hover:text-fuchsia-600 transition-colors">{title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* COMPARISON TABLE ELITE */}
                <section className="bg-slate-900 rounded-[3.5rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1),transparent_50%)] pointer-events-none" />
                    
                    <div className="relative z-10">
                        <h2 className="elite-section-title text-white mb-12 uppercase text-center lg:text-left">Full Comparison: <br /><small className="text-fuchsia-400 opacity-80 text-2xl lowercase italic">no compromises, just faster care.</small></h2>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/10 uppercase tracking-[0.2em] text-[10px] font-black text-slate-500">
                                        <th className="py-6 pr-8">Factor</th>
                                        <th className="py-6 px-8 text-center">CMC Vellore</th>
                                        <th className="py-6 pl-8 text-center text-white">Indira Hospital ✅</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {CMC_VS_INDIRA.map((row) => (
                                        <tr key={row.factor} className="group hover:bg-white/5 transition-colors">
                                            <td className="py-6 pr-8 font-black text-slate-400 group-hover:text-fuchsia-400 transition-colors uppercase tracking-tight text-sm">{row.factor}</td>
                                            <td className={`py-6 px-8 text-center text-sm font-medium ${row.winner === "cmc" ? "text-emerald-400" : row.winner === "tie" ? "text-slate-500" : "text-red-400/70"}`}>{row.cmc}</td>
                                            <td className={`py-6 pl-8 text-center text-sm font-black uppercase tracking-tight ${row.winner === "indira" ? "text-emerald-400" : "text-white"}`}>{row.indira}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* JOURNEY BENTO */}
                <section>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 text-xs font-black tracking-widest uppercase mb-6 border border-emerald-100">
                                <TrendingDown className="w-4 h-4" /> Fast-Track Process
                            </div>
                            <h2 className="elite-section-title text-slate-900 dark:text-white mb-8 uppercase">From CMC Rejection to <br /><span className="text-emerald-600">Immediate Care.</span></h2>
                            
                            <div className="space-y-4">
                                {JOURNEY_STEPS.map((step) => (
                                    <div key={step.step} className="group flex items-start gap-6 p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-2xl group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-500">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm mb-1">{step.title}</h3>
                                            <p className="text-slate-500 dark:text-slate-400 font-medium italic text-xs leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-100 dark:bg-slate-900 rounded-[3.5rem] p-10 md:p-16 border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center">
                            <div className="w-20 h-20 rounded-[2rem] bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 mb-10 mx-auto shadow-inner border border-indigo-100 dark:border-indigo-800 animate-bounce">
                                <Sparkles className="w-10 h-10" />
                            </div>
                            <h3 className="elite-section-title text-slate-900 dark:text-white mb-6 uppercase">Get a Second Opinion <br /><span className="text-indigo-600 italic">Free of Cost.</span></h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium italic mb-10 px-4 leading-relaxed">Send your existing reports and CMC diagnosis. Our senior specialists will review them and provide a complete treatment plan within 24 hours.</p>
                            
                            <a href={reportsWaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-2xl">
                                <MessageCircle className="w-6 h-6 text-emerald-400" /> WhatsApp My Reports
                            </a>
                        </div>
                    </div>
                </section>

                {/* TRUST SIGNALS */}
                <section className="pt-24 border-t border-slate-100 dark:border-slate-800">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <EntityFAQs 
                            entityType="hospital"
                            entityName="Indira Hospital"
                            entitySlug="cmc-alternative"
                            title="CMC Alternative FAQs"
                            description="Direct answers for patients seeking immediate care in Vellore."
                        />
                        <EntityReviews 
                            entityType="hospital"
                            entityName="Indira Hospital"
                            entitySlug="cmc-alternative"
                            title="Fast-Track Success Stories"
                            description="How patients received same-quality care without the waiting list."
                        />
                    </div>
                </section>
            </SectionContainer>

            {/* CALL TO ACTION ELITE */}
            <section className="bg-slate-900 rounded-t-[5rem] py-24 sm:py-32 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h2 className="elite-section-title text-white mb-10 uppercase">Your Health <br /><span className="text-fuchsia-500 italic">Can&apos;t Wait Months.</span></h2>
                    <p className="text-xl text-slate-400 font-light mb-16 max-w-2xl mx-auto italic leading-relaxed">NABH Quality care at Indira Hospital starts this week. Join 50,000+ satisfied patients today.</p>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href={waUrl} target="_blank" rel="noopener noreferrer"
                            className="elite-button-primary text-base">
                            <MessageCircle className="w-6 h-6" /> WhatsApp Appointment
                        </a>
                        <Link href="/book-appointment"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black rounded-[2rem] hover:bg-white/10 text-xl transition-all">
                            Book Online Now
                        </Link>
                    </div>
                </div>
            </section>

            <EntityCardSection type="doctors" title="Expert Specialists" subtitle="Elite Medical Units" limit={6} className="bg-white dark:bg-slate-950 border-t" />
            <InternalLinkGrid type="health-packages" title="Wellness Screening" subtitle="Preventive Health" limit={8} className="bg-slate-50 dark:bg-slate-900/50 border-y" />
            <InternalLinkGrid type="diagnostics" title="NABL Accredited Lab" subtitle="Accurate Results" limit={12} className="bg-white dark:bg-slate-950 border-b" />
        </main>
    );
}
