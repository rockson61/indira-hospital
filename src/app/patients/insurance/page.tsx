import { SectionContainer } from "@/components/ui/section-container";
import { insurancePartners } from "@/lib/data/clinic-config";
import { ShieldCheck, CheckCircle2, Info, ArrowRight, Shield, Phone, FileText, CheckCircle } from "lucide-react";
import { HeartCardiogram } from "healthicons-react/outline";
import Link from "next/link";
import { Metadata } from "next";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { siteConfig } from "@/config/site";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";

export const metadata: Metadata = {
    title: "Insurance & TPA Partners | Cashless Treatment at Indira Hospital",
    description: "Indira Super Speciality Hospital is empanelled with major TPAs, private insurance providers, and government health schemes like TN CMCHIS. Explore our cashless treatment options.",
};

const benefits = [
    { title: "Cashless Treatment", description: "Get treated without upfront payment at our hospital.", icon: Shield },
    { title: "Quick Pre-Authorization", description: "Fast insurance approval process — usually within 2-4 hours.", icon: FileText },
    { title: "Dedicated Insurance Desk", description: "Our team handles all paperwork and claim processing.", icon: Phone },
    { title: "Wide Network", description: "We are empanelled with 30+ insurance companies and TPAs.", icon: CheckCircle },
];

export default function InsurancePage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <JsonLdSchema type="hospital" />

            {/* Cinematic Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-sm font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-emerald-500/30">
                        <HeartCardiogram className="w-4 h-4 animate-pulse" /> Cashless Treatment
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-white tracking-tight leading-[0.95] mb-6">
                        Seamless <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Cashless Therapy.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        We are committed to making quality healthcare accessible. We partner with all major health insurance providers and government schemes.
                    </p>
                </div>
            </section>

             {/* PREMIER BENEFITS BENTO */}
             <SectionContainer className="relative z-20 -mt-20 max-w-7xl mx-auto px-4 mb-24">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 hover:shadow-2xl hover:shadow-emerald-900/5 transition-shadow duration-700 bg-white/40 p-2 sm:p-4 rounded-[3rem] backdrop-blur-3xl border border-white">
                    {benefits.map((b) => (
                        <div key={b.title} className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] hover:border-emerald-200 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-emerald-500/10">
                                    <b.icon className="h-8 w-8" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{b.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{b.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Government Schemes */}
            <SectionContainer className="mb-24">
                <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">Government Health Schemes</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Chief Minister Comprehensive Health Insurance Scheme (CMCHIS)",
                            "Employee Health Insurance Scheme (EHS)",
                            "Pensioners Health Insurance Scheme",
                            "Co-Operative Society Health Insurance Scheme",
                            "Ayushman Bharat (PM-JAY)",
                            "ESI (Employees' State Insurance)"
                        ].map((scheme) => (
                            <div key={scheme} className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-200">{scheme}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionContainer>

            {/* Private Insurance Partners Grid */}
            <SectionContainer className="mb-24">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Our Empanelled Network</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
                        We are officially allied with 40+ leading insurance companies and Third-Party Administrators (TPAs) to ensure your care is universally covered.
                    </p>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">Health Insurance Companies</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {insurancePartners.filter(p => !p.includes("Scheme") && !p.includes("TPA") && !p.includes("Assist") && !p.includes("Ayushman") && !p.includes("ESI") && !p.includes("Paramount")).map((partner) => (
                        <div key={partner} className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-lg hover:-translate-y-1 transition-all group flex items-center pr-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-3 shrink-0"></span>
                            <p className="font-bold text-slate-700 dark:text-slate-300 text-xs sm:text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors w-full break-words">{partner}</p>
                        </div>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">Third Party Administrators (TPAs)</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {insurancePartners.filter(p => p.includes("TPA") || p.includes("Assist") || p.includes("Paramount")).map((partner) => (
                        <div key={partner} className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200/60 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all group flex items-center pr-2">
                            <span className="w-2 h-2 rounded-full bg-blue-400 mr-3 shrink-0"></span>
                            <p className="font-bold text-slate-700 dark:text-slate-300 text-xs sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors w-full break-words">{partner}</p>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* In-depth SEO Content Section */}
            <SectionContainer className="mb-24">
                <div className="bg-emerald-50 dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-emerald-100 dark:border-slate-800">
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

            <SectionContainer className="mb-24">
                <div className="bg-slate-900 text-white rounded-[3rem] p-8 sm:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] will-change-transform transform-gpu" />
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <Info className="w-4 h-4 text-emerald-400" /> Essential Guide
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
                                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 font-black text-emerald-400">{i + 1}</div>
                                        <p className="text-slate-300 font-medium">{step}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10">
                            <h3 className="text-xl font-bold mb-4">Any queries?</h3>
                            <p className="text-slate-400 mb-8 font-medium">Visit our TPA desk located in the main lobby or call our helpdesk for assistance with documents and eligibility.</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl transition-all group"
                            >
                                Contact TPA Desk
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <EntityCardSection type="doctors" title="Specialists for Insured Patients" subtitle="Expert Care" limit={6} className="bg-white dark:bg-slate-900 border-t" />
            <InternalLinkGrid type="health-packages" title="Wellness & Checkup Packages" subtitle="Preventive Care" limit={8} className="bg-slate-50 dark:bg-slate-900/50 border-t" />
            <InternalLinkGrid type="diagnostics" title="Diagnostics & Lab Tests" subtitle="NABL Accredited" limit={12} className="bg-white dark:bg-slate-900 border-t" />
            <InternalLinkGrid type="services" title="All Treatments A-Z" subtitle="Services Directory" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t" />
        </main>
    );
}
