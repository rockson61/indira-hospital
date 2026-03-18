import { SectionContainer } from "@/components/ui/section-container";
import { insurancePartners, insurancePlans } from "@/lib/data/clinic-config";
import { ShieldCheck, CheckCircle2, Info, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const metadata: Metadata = {
    title: "Insurance Partners | Cashless Treatment at Indira Hospital",
    description: "Indira Super Speciality Hospital is empanelled with major TPAs, private insurance providers, and government health schemes like TN CMCHIS. Explore our cashless treatment options.",
};

export default function InsurancePage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
            <JsonLdSchema type="hospital" />
            {/* Hero Section */}
            <SectionContainer className="mb-12">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1]">
                        Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Cashless Therapy</span> & Insurance
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
                        We are committed to making quality healthcare accessible. Indira Hospital partners with all major health insurance providers and government schemes to ensure you focus on recovery, not paperwork.
                    </p>
                </div>
            </SectionContainer>

            {/* Government Schemes */}
            <SectionContainer className="mb-16">
                <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-fuchsia-100 dark:bg-fuchsia-950 flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-fuchsia-600" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">Government Health Schemes</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Chief Minister Comprehensive Health Insurance Scheme (CMCHIS)",
                            "Employee Health Insurance Scheme",
                            "Pensioners Health Insurance Scheme",
                            "Co-Operative Society Health Insurance Scheme"
                        ].map((scheme) => (
                            <div key={scheme} className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-fuchsia-500 mt-1 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-200">{scheme}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionContainer>

            {/* Private Insurance Partners Grid */}
            <SectionContainer className="mb-16">
                <div className="mb-10">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Our TPA & Private Partners</h2>
                    <p className="text-slate-500 font-medium">Over 40+ insurance companies and Third Party Administrators (TPAs) trust Indira Hospital for cashless treatments.</p>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">Health Insurance Companies</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {insurancePartners.filter(p => !p.includes("Scheme") && !p.includes("TPA") && !p.includes("Assist") && !p.includes("Ayushman") && !p.includes("ESI")).map((partner) => (
                        <div key={partner} className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800 hover:border-fuchsia-400 dark:hover:border-fuchsia-600 hover:shadow-lg hover:-translate-y-1 transition-all group flex items-center pr-2">
                            <span className="w-2 h-2 rounded-full bg-fuchsia-400 mr-3 shrink-0"></span>
                            <p className="font-bold text-slate-700 dark:text-slate-300 text-sm group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors w-full break-words">{partner}</p>
                        </div>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">Third Party Administrators (TPAs)</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {insurancePartners.filter(p => p.includes("TPA") || p.includes("Assist") || p.includes("Paramount")).map((partner) => (
                        <div key={partner} className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200/60 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all group flex items-center pr-2">
                            <span className="w-2 h-2 rounded-full bg-blue-400 mr-3 shrink-0"></span>
                            <p className="font-bold text-slate-700 dark:text-slate-300 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors w-full break-words">{partner}</p>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* In-depth SEO Content Section */}
            <SectionContainer className="mb-16">
                <div className="bg-fuchsia-50 dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-fuchsia-100 dark:border-slate-800">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6">Cashless Hospitalization in Vellore</h2>
                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                        <p>
                            Medical emergencies and planned surgeries shouldn't be a financial burden. At <strong>Indira Super Speciality Hospital, Vellore</strong>, we bridge the gap between world-class healthcare and financial peace of mind through our extensive network of cashless insurance tie-ups.
                        </p>
                        <p>
                            We understand that navigating health insurance (Mediclaim) can be complex. That is why our dedicated TPA (Third Party Administrator) desk assists you comprehensively—from initial pre-authorization during admission to ultimate claim settlement at discharge.
                        </p>
                        <h3>Why Choose Cashless Treatment at Indira Hospital?</h3>
                        <ul>
                            <li><strong>Zero Out-of-Pocket Expenses:</strong> Approved treatments are directly settled with your insurance provider or TPA, up to your sum insured.</li>
                            <li><strong>Rapid Authorization:</strong> Dedicated coordinators ensure swift approval processing, often within 2 to 4 hours for planned surgeries like Laparoscopy, Laser Piles, and Orthopaedic procedures.</li>
                            <li><strong>Comprehensive Coverage:</strong> Acceptance of all major national insurance policies and Tamil Nadu state government schemes (CMCHIS).</li>
                            <li><strong>Transparent Billing:</strong> No hidden charges. Complete clarity on what is covered and what non-medical expenses (if any) apply.</li>
                        </ul>
                    </div>
                </div>
            </SectionContainer>

            {/* Important Information */}
            {/* TRUST SIGNALS */}
            <SectionContainer className="max-w-7xl mx-auto py-24 border-t border-slate-100 dark:border-slate-800">
                <div className="grid lg:grid-cols-2 gap-16">
                    <EntityFAQs
                        entityType="service"
                        entityName="Insurance"
                        entitySlug="insurance"
                        title="Insurance & Billing FAQs"
                        description="Common questions about cashless treatment, documentation, and CMCHIS at Indira Hospital."
                    />
                    <EntityReviews
                        entityType="service"
                        entityName="Insurance"
                        entitySlug="insurance"
                        title="Billing & Insurance Stories"
                        description="Hear from patients who utilized our cashless facilities and insurance assistance for their treatment."
                    />
                </div>
            </SectionContainer>

            <SectionContainer>
                <div className="bg-slate-900 text-white rounded-[3rem] p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <Info className="w-4 h-4 text-fuchsia-400" /> Essential Guide
                            </div>
                            <h2 className="text-4xl font-black mb-6">How to avail Cashless Treatment?</h2>
                            <ul className="space-y-4">
                                {[
                                    "Present your valid Insurance ID card and Govt ID at the TPA desk.",
                                    "Our team will coordinate with your insurance provider for pre-authorization.",
                                    "Initial approval is usually received within 4-6 hours.",
                                    "Final approval and claim settlement happens at the time of discharge."
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 font-black text-fuchsia-400">{i + 1}</div>
                                        <p className="text-slate-300 font-medium">{step}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10">
                            <h3 className="text-xl font-bold mb-4">Any queries?</h3>
                            <p className="text-slate-400 mb-8">Visit our TPA desk located in the main lobby or call our helpdesk for assistance with documents and eligibility.</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center w-full py-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-black rounded-xl transition-all group"
                            >
                                Contact TPA Desk
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}
