import { PageHeader } from "@/components/ui/page-header";
import { SectionContainer } from "@/components/ui/section-container";
import { User, FileText, Calendar, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PatientPortalPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PageHeader
                title="Patient Portal"
                description="Securely access your medical records, test results, and manage appointments anytime."
            />

            <section className="py-20">
                <SectionContainer>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Login Form */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-200/60 dark:border-slate-800">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Sign In</h2>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="patient-id" className="text-sm font-bold text-slate-700 dark:text-slate-300">Patient ID / Email</label>
                                    <input
                                        type="text"
                                        id="patient-id"
                                        placeholder="Enter your Patient ID or Email"
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="password" className="text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
                                        <a href="#" className="text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">Forgot?</a>
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-slate-900 dark:text-white"
                                    />
                                </div>

                                <button type="button" className="w-full py-4 mt-4 bg-cyan-600 dark:bg-cyan-500 text-white font-bold rounded-2xl hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2">
                                    <User className="w-5 h-5" />
                                    Sign In to Portal
                                </button>
                            </form>

                            <div className="mt-8 text-center">
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    New patient? <a href="#" className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline">Create an account</a>
                                </p>
                            </div>
                        </div>

                        {/* Features Info */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 flex-shrink-0">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">My Health Records</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">View your detailed health history, lab results, discharge summaries, and radiology reports instantly.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Manage Appointments</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Book new consultations, reschedule active appointments, and view your upcoming hospital visits.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">100% Secure & Private</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Protected with HIPAA-compliant, bank-level encryption. Your health data is visible only to you and your authorized doctors.</p>
                                </div>
                            </div>

                            <div className="mt-4 pt-8 border-t border-slate-200/60 dark:border-slate-800">
                                <Link href="/pay-bill" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
                                    Need to pay a bill without logging in? Click here
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </main>
    );
}
