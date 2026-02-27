import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileText, Phone, CheckCircle, ArrowRight, HeartPulse } from "lucide-react";
import Link from "next/link";
import { clinicConfig } from "@/lib/data/clinic-config";

export const metadata = {
    title: "Insurance & TPA Partners",
    description: "Indira Super Speciality Hospital accepts all major insurance providers and TPA partners. Cashless treatment available.",
};

const insurancePartners = [
    "Star Health Insurance",
    "New India Assurance",
    "United India Insurance",
    "ICICI Lombard",
    "HDFC Ergo",
    "Bajaj Allianz",
    "Max Bupa",
    "Religare Health",
    "Manipal Cigna",
    "Care Health (formerly Religare)",
    "Niva Bupa (formerly Max Bupa)",
    "Cholamandalam MS",
    "Tata AIG",
    "SBI General",
    "Oriental Insurance",
    "National Insurance",
    "MedSave Healthcare TPA",
    "Paramount Health Services TPA",
    "Vidal Health TPA",
    "Heritage Health TPA",
];

const benefits = [
    { title: "Cashless Treatment", description: "Get treated without upfront payment at our hospital.", icon: ShieldCheck },
    { title: "Quick Pre-Authorization", description: "Fast insurance approval process — usually within 2-4 hours.", icon: FileText },
    { title: "Dedicated Insurance Desk", description: "Our team handles all paperwork and claim processing.", icon: Phone },
    { title: "Wide Network", description: "We are empanelled with 30+ insurance companies and TPAs.", icon: CheckCircle },
];

export default function InsurancePage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-24">
            {/* ELITE INSURANCE HERO */}
            <section className="bg-slate-900 pt-48 pb-32 lg:pt-60 lg:pb-40 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

                <SectionContainer className="relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                            <HeartPulse className="w-4 h-4" /> Financial Peace of Mind
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
                            Insurance & <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">TPA Partners.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
                            We accept all major health insurance policies. Enjoy rapid, hassle-free cashless treatment at Indira Super Speciality Hospital.
                        </p>
                    </div>
                </SectionContainer>
            </section>

            {/* PREMIER BENEFITS BENTO */}
            <SectionContainer className="relative z-20 -mt-20 max-w-7xl mx-auto px-4 mb-24">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 hover:shadow-2xl hover:shadow-fuchsia-900/5 transition-shadow duration-700 bg-white/40 p-2 sm:p-4 rounded-[3rem] backdrop-blur-3xl border border-white">
                    {benefits.map((b) => (
                        <div key={b.title} className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(20,184,166,0.12)] hover:border-fuchsia-200 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-fuchsia-50 text-fuchsia-600 group-hover:scale-110 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-fuchsia-500/10">
                                    <b.icon className="h-8 w-8" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{b.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{b.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* INTERACTIVE PARTNER GRID */}
            <SectionContainer className="py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Our Empanelled Network</h2>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                        We are officially allied with the following leading insurance companies and Third-Party Administrators (TPAs) to ensure your care is universally covered.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-5xl mx-auto">
                    {insurancePartners.map((name) => (
                        <div
                            key={name}
                            className="group flex items-center justify-center px-6 py-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-[0_8px_30px_rgba(20,184,166,0.15)] hover:border-fuchsia-300 hover:-translate-y-1 transition-all duration-300 cursor-default"
                        >
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-slate-400 group-hover:text-fuchsia-500 transition-colors" />
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:text-white transition-colors">{name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* ASSISTANCE BENTO CTA */}
            <SectionContainer className="py-24">
                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-fuchsia-950 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl relative group/cta flex flex-col items-center text-center p-12 sm:p-20">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[80px] group-hover/cta:bg-fuchsia-500/20 transition-colors duration-700" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px]" />

                    <div className="relative z-10 w-full max-w-3xl">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
                            <Phone className="w-8 h-8 text-fuchsia-300" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                            Need Help with <br /> <span className="text-fuchsia-400">Insurance Claims?</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Our dedicated insurance desk is available to transparently assist you with pre-authorization, claim submission, and navigating technical queries.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
                            <Link href="/contact" className="group/btn relative flex items-center justify-center w-full sm:w-auto px-8 py-5 bg-fuchsia-500 text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-fuchsia-500/25 overflow-hidden">
                                <span className="relative z-10">Contact Insurance Desk</span>
                                <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </Link>

                            <a href={`tel:${clinicConfig.phone}`} className="flex items-center justify-center w-full sm:w-auto px-8 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-colors">
                                <Phone className="w-5 h-5 mr-3 text-fuchsia-400" />
                                Call Support
                            </a>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}
