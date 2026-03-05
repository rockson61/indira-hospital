import { PageHeader } from "@/components/ui/page-header";
import { SectionContainer } from "@/components/ui/section-container";
import { CreditCard, FileText, Shield } from "lucide-react";
;

export default function PayBillPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PageHeader
                title="Pay Your Bill Online"
                description="Securely and conveniently pay your Indira Hospital bills online. We accept all major credit cards, UPI, and net banking."
            />

            <section className="py-20">
                <SectionContainer>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-200/60 dark:border-slate-800">

                            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                                <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Secure Payment Portal</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Your details are protected with 256-bit encryption.</p>
                                </div>
                            </div>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="patient-id" className="text-sm font-bold text-slate-700 dark:text-slate-300">Patient ID / MRN *</label>
                                    <input
                                        type="text"
                                        id="patient-id"
                                        placeholder="e.g. IND-123456"
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="invoice-number" className="text-sm font-bold text-slate-700 dark:text-slate-300">Invoice Number (Optional)</label>
                                    <input
                                        type="text"
                                        id="invoice-number"
                                        placeholder="e.g. INV-2026-001"
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="amount" className="text-sm font-bold text-slate-700 dark:text-slate-300">Amount (₹) *</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <span className="text-slate-400 font-bold">₹</span>
                                        </div>
                                        <input
                                            type="number"
                                            id="amount"
                                            placeholder="0.00"
                                            className="w-full pl-10 pr-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all text-slate-900 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <button type="button" className="w-full py-4 mt-4 bg-fuchsia-600 text-white font-bold rounded-2xl hover:bg-fuchsia-700 transition-all shadow-lg shadow-fuchsia-500/25 flex items-center justify-center gap-2">
                                    <CreditCard className="w-5 h-5" />
                                    Proceed to Payment
                                </button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl">
                                <FileText className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0" />
                                <p>If you don't know your Patient ID or Invoice Number, please contact our billing department at <span className="font-bold text-slate-700 dark:text-slate-300">080 4716 1616</span>.</p>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </main>
    );
}
