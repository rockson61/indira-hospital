"use client";

import { useState } from "react";
import { CreditCard, FileText, Shield, CheckCircle2, ArrowRight, Lock } from "lucide-react";
import { submitBillingPayment } from "@/app/actions/billing-actions";
import { SectionContainer } from "@/components/ui/section-container";
import Link from "next/link";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";

export default function PayBillPage() {
    const [formData, setFormData] = useState({
        patient_id: "",
        invoice_number: "",
        amount: 0
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const result = await submitBillingPayment({
                ...formData,
                status: 'success'
            });
            if (result.success) {
                setIsSuccess(true);
            } else {
                setError(result.error || "Payment processing failed.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id === 'patient-id' ? 'patient_id' : id === 'invoice-number' ? 'invoice_number' : 'amount']: id === 'amount' ? parseFloat(value) : value
        }));
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-6">
                <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 text-center max-w-2xl shadow-xl">
                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Payment Successful!</h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 mb-10">
                        Thank you. Your payment of <span className="font-bold text-slate-900 dark:text-white">{formData.amount}</span> has been processed. A confirmation has been sent to your registered mobile/email.
                    </p>
                    <Link href="/">
                        <button className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center gap-3 mx-auto">
                            Go to Homepage <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Cinematic Hero */}
            <section className="relative pt-48 pb-40 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-[0.2em] uppercase mb-10">
                        <Lock className="w-4 h-4" /> Secure Payment
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-white tracking-tight leading-[0.95] mb-6">
                        Pay Your Bill <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Online, Instantly.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Secure online bill payment via UPI, credit card, or net banking — in 60 seconds.
                    </p>
                </div>
            </section>

            {/* Form Card */}
            <section className="max-w-3xl mx-auto px-6 lg:px-8 -mt-20 relative z-20">

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

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-500 text-sm font-bold">
                                        {error}
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <label htmlFor="patient-id" className="text-sm font-bold text-slate-700 dark:text-slate-300">Patient ID / MRN *</label>
                                    <input
                                        type="text"
                                        id="patient-id"
                                        required
                                        value={formData.patient_id}
                                        onChange={handleChange}
                                        placeholder="e.g. IND-123456"
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="invoice-number" className="text-sm font-bold text-slate-700 dark:text-slate-300">Invoice Number (Optional)</label>
                                    <input
                                        type="text"
                                        id="invoice-number"
                                        value={formData.invoice_number}
                                        onChange={handleChange}
                                        placeholder="e.g. INV-2026-001"
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="amount" className="text-sm font-bold text-slate-700 dark:text-slate-300">Amount *</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <span className="text-slate-400 font-bold">Amt</span>
                                        </div>
                                        <input
                                            type="number"
                                            id="amount"
                                            required
                                            min="1"
                                            value={formData.amount || ""}
                                            onChange={handleChange}
                                            placeholder="0.00"
                                            className="w-full pl-10 pr-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all text-slate-900 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full py-5 mt-4 bg-fuchsia-600 text-white font-black rounded-2xl hover:bg-fuchsia-700 transition-all shadow-lg shadow-fuchsia-500/25 flex items-center justify-center gap-2 disabled:bg-slate-300"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <CreditCard className="w-5 h-5" />
                                            Proceed to Payment
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl">
                                <FileText className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0" />
                                <p>If you don&apos;t know your Patient ID or Invoice Number, please contact our billing department at <span className="font-bold text-slate-700 dark:text-slate-300">080 4716 1616</span>.</p>
                            </div>
                        </div>
            </section>

            {/* TRUST SIGNALS */}
            <SectionContainer className="max-w-3xl mx-auto pb-24">
                <EntityFAQs
                    entityType="hospital"
                    entityName="Indira Hospital"
                    entitySlug="insurance"
                    title="Payment & Billing FAQs"
                    description="Questions about UPI, credit cards, and online payment security."
                />
            </SectionContainer>
        </main>
    );
}
