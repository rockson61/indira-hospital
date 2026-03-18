import { SectionContainer } from "@/components/ui/section-container";
import { Metadata } from "next";
import { User, FileText, Calendar, ArrowRight, Shield, Lock } from "lucide-react";
import Link from "next/link";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";

export const metadata: Metadata = {
    title: "Patient Portal | Secure Health Records | Indira Hospital",
    description: "Access your medical records, lab results, and manage appointments securely via Indira Hospital's online patient portal.",
};

export default function PatientPortalPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Cinematic Hero */}
            <section className="relative pt-48 pb-40 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase mb-10">
                        <Lock className="w-4 h-4" /> Secure Portal
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-white tracking-tight leading-[0.95] mb-6">
                        Your Health Records, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">One Tap Away.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Securely access lab results, discharge summaries, and manage your appointments from anywhere.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Login Form */}
                    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[3rem] p-10 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center text-cyan-600">
                                <User className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Sign In to Portal</h2>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="patient-id" className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">Patient ID / Email</label>
                                <input
                                    type="text"
                                    id="patient-id"
                                    placeholder="Enter your Patient ID or Email"
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label htmlFor="password" className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">Password</label>
                                    <a href="#" className="text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700">Forgot?</a>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all text-slate-900 dark:text-white"
                                />
                            </div>
                            <button type="button" className="w-full py-5 mt-2 bg-cyan-600 text-white font-black rounded-2xl hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 text-base">
                                <User className="w-5 h-5" /> Sign In to Portal
                            </button>
                        </form>

                        <p className="mt-8 text-center text-slate-500 text-sm">
                            New patient? <a href="#" className="font-black text-cyan-600 dark:text-cyan-400 hover:underline">Create an account</a>
                        </p>
                        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                            <Link href="/pay-bill" className="inline-flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 font-bold hover:text-cyan-700 transition-colors">
                                Pay a bill without logging in <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Feature bullets */}
                    <div className="flex flex-col gap-6 justify-center">
                        {[
                            { icon: <FileText className="w-6 h-6" />, color: "bg-fuchsia-50 dark:bg-fuchsia-950/30 text-fuchsia-600", title: "My Health Records", desc: "View your complete health history, lab results, discharge summaries, and radiology reports instantly." },
                            { icon: <Calendar className="w-6 h-6" />, color: "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600", title: "Manage Appointments", desc: "Book new consultations, reschedule active appointments, and view your upcoming hospital visits." },
                            { icon: <Shield className="w-6 h-6" />, color: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600", title: "100% Secure & Private", desc: "Protected with HIPAA-compliant, bank-level encryption. Visible only to you and your authorized doctors." },
                        ].map((f, i) => (
                            <div key={i} className="group flex gap-6 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center flex-shrink-0`}>{f.icon}</div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{f.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="border-t border-slate-200 dark:border-slate-800 mt-24 pt-20">
                <InternalLinkGrid type="departments" title="Book a Consultation" subtitle="Our Specialities" limit={8} className="bg-white dark:bg-slate-950 rounded-[4rem] border" />
            </div>
        </main>
    );
}
