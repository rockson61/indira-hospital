import { Metadata } from "next";
import Link from "next/link";
import {
    FileText, CheckCircle2, Clock, Globe2, MessageCircle, Phone,
    ChevronRight, ArrowRight, Shield, AlertCircle
} from "lucide-react";
import { clinicConfig } from "@/lib/data/clinic-config";
import { INTERNATIONAL_COUNTRIES } from "@/lib/data/international-data";

const WA_NUMBER = "917010650063";

export const metadata: Metadata = {
    title: "Medical Visa for India — Complete Guide for International Patients | Indira Hospital Vellore",
    description: "Complete guide to getting an Indian Medical Visa (M-Visa) for treatment in Vellore. Indira Hospital issues official invitation letters within 24 hours. Visa help for Bangladesh, UAE, Nigeria, Kenya, UK & 45+ countries.",
    keywords: [
        "medical visa India", "M-Visa India", "Indian medical visa", "visa for treatment India",
        "hospital invitation letter India", "medical visa Vellore", "international patients India visa",
    ],
};

const STEPS = [
    { icon: "📋", title: "Get the Hospital Invitation Letter", desc: "Request the official invitation letter from Indira Hospital by WhatsApp or email. We issue it within 24 hours of your appointment confirmation. This is a mandatory document for the visa." },
    { icon: "📄", title: "Prepare Your Documents", desc: "Gather: valid passport (6+ months), passport-size photos, completed visa application form, hospital invitation letter, medical records/reports, and proof of financial means (bank statement)." },
    { icon: "🌐", title: "Apply Online or at the Embassy", desc: "Apply via the Indian Visa Online portal (indianvisaonline.gov.in) for an e-Medical Visa (available for 150+ countries), or visit the nearest Indian Embassy/High Commission in your country." },
    { icon: "✅", title: "Receive Your Visa", desc: "M-Visa is typically issued within 3–7 business days for most countries. The e-Medical Visa is valid for 60 days with double entry. Extend in India via FRRO if needed." },
    { icon: "✈️", title: "Travel to Vellore", desc: "Fly to Chennai International Airport (MAA). Indira Hospital arranges complimentary pickup from Chennai Airport. The hospital is 2.5 hours from the airport." },
];

const DOCS_CHECKLIST = [
    "Valid passport (at least 6 months remaining)",
    "Completed Indian Medical Visa (M-Visa) Application Form",
    "2 recent passport-size photographs (white background)",
    "Official Hospital Invitation Letter from Indira Hospital (we provide within 24 hrs)",
    "Medical reports, diagnosis documents, prescriptions",
    "Proof of financial capacity (bank statement / sponsor letter)",
    "Travel insurance documents (recommended)",
    "Confirmed return flight ticket (recommended for visa approval)",
    "Accommodation confirmation in India",
];

const TIPS = [
    { tip: "Apply for M-Visa specifically", detail: "Do NOT apply for a Tourist Visa. Medical Visa (M-Visa) allows longer stays and treatment. Applying for the wrong visa type can cause problems at immigration." },
    { tip: "Request the letter ASAP", detail: "The hospital invitation letter is a mandatory requirement. Contact us first — we issue it within 24 hours, so you can then apply for the visa immediately." },
    { tip: "Bring all medical records", detail: "Bring physical and digital copies of all your reports, scans, and diagnosis documents. Our specialists need these to plan your treatment." },
    { tip: "Extension is possible", detail: "If you need to stay longer for treatment or recovery, you can extend your M-Visa in India via the FRRO (Foreigners Regional Registration Office). We help with the extension letter." },
    { tip: "Add your attendant", detail: "Attendants (companions) can also apply for an attendant visa (same M-Visa category). They are allowed to accompany you throughout your stay." },
];

const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I need a hospital invitation letter for my Indian Medical Visa. Please help.")}`;

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get a Medical Visa for India",
    description: "Step-by-step guide for international patients applying for an Indian Medical Visa (M-Visa) to receive treatment at Indira Hospital, Vellore.",
    step: STEPS.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.desc,
    })),
};

export default function MedicalVisaIndiaPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* HERO */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-16 lg:pt-52 lg:pb-20 relative z-10">
                    <nav className="flex items-center text-sm text-blue-300 mb-6 gap-1 flex-wrap">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/patients/international" className="hover:text-white">International</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">Medical Visa Guide</span>
                    </nav>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-bold mb-6">
                        <FileText className="w-4 h-4" /> Complete M-Visa Guide for 45+ Countries
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                        Getting an Indian Medical<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-300">
                            Visa — Complete Guide
                        </span>
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
                        Indira Hospital issues an official invitation letter within <strong className="text-white">24 hours</strong> to help you get your Indian Medical Visa. This guide covers everything you need — documents, steps, tips, and country-specific information.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href={waUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl shadow-lg transition-all">
                            <MessageCircle className="w-5 h-5" /> Request Invitation Letter — Free
                        </a>
                        <a href={`tel:${clinicConfig.phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20">
                            <Phone className="w-5 h-5" /> Call Us
                        </a>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
                <div className="grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-12">

                        {/* Important notice */}
                        <div className="flex items-start gap-4 p-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 rounded-2xl">
                            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-amber-800 dark:text-amber-200 text-sm">Important: Apply for Medical Visa (M-Visa), NOT Tourist Visa</p>
                                <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">The M-Visa is specifically for medical treatment. It allows a longer stay and is the correct visa type for hospital treatment in India. Tourist Visas are not suitable and may cause issues at immigration.</p>
                            </div>
                        </div>

                        {/* Step by Step */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                                Step-by-Step: How to Get Your Indian Medical Visa
                            </h2>
                            <div className="space-y-5">
                                {STEPS.map((step, i) => (
                                    <div key={i} className="flex gap-5 p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-500 flex items-center justify-center text-white font-black text-base shadow-md">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xl">{step.icon}</span>
                                                <h3 className="font-bold text-gray-900 dark:text-white">{step.title}</h3>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Documents Checklist */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                📋 Documents Checklist
                            </h2>
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 space-y-3">
                                {DOCS_CHECKLIST.map((doc, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{doc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Key Tips */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                💡 Key Tips for a Smooth Visa Process
                            </h2>
                            <div className="space-y-4">
                                {TIPS.map(({ tip, detail }) => (
                                    <div key={tip} className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">{tip}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{detail}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Country-specific links */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Country-Specific Visa Guides
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {INTERNATIONAL_COUNTRIES.filter(c => c.flag).slice(0, 20).map((c) => (
                                    <Link key={c.slug} href={`/patients/international/${c.slug}`}
                                        className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-fuchsia-200 hover:shadow-sm transition-all group">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl">{c.flag}</span>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-fuchsia-700">{c.name}</p>
                                                <p className="text-xs text-gray-400">{c.visa_info.split(".")[0]}</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-fuchsia-600" />
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-4 text-center">
                                <Link href="/patients/international" className="inline-flex items-center gap-2 text-fuchsia-600 hover:text-fuchsia-700 font-bold">
                                    View all 45+ countries <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* SIDEBAR */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="lg:sticky lg:top-24 space-y-5">
                            <div className="bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 rounded-2xl p-6 text-white shadow-xl">
                                <h3 className="font-black text-lg mb-2">Get Your Invitation Letter</h3>
                                <p className="text-slate-300 text-sm mb-5">We issue it within 24 hours. No cost. Required for M-Visa application.</p>
                                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl mb-3 transition-all">
                                    <MessageCircle className="w-4 h-4" /> WhatsApp Now
                                </a>
                                <a href={`tel:${clinicConfig.phone.replace(/\s+/g, "")}`}
                                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all text-sm">
                                    <Phone className="w-4 h-4" /> {clinicConfig.phone}
                                </a>
                            </div>
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <Globe2 className="w-4 h-4 text-fuchsia-500" /> Visa Quick Facts
                                </h3>
                                <div className="space-y-2 text-sm">
                                    {[
                                        { l: "Visa Type", v: "Medical Visa (M-Visa)" },
                                        { l: "Processing Time", v: "3–7 business days" },
                                        { l: "e-Visa Valid For", v: "60 days (double entry)" },
                                        { l: "Invitation Letter", v: "Issued in 24 hours" },
                                        { l: "Portal", v: "indianvisaonline.gov.in" },
                                        { l: "Extension", v: "Via FRRO in India" },
                                    ].map(({ l, v }) => (
                                        <div key={l} className="flex justify-between">
                                            <span className="text-gray-500">{l}</span>
                                            <span className="font-semibold text-gray-900 dark:text-white text-right max-w-[55%]">{v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Useful Links</h3>
                                <div className="space-y-2">
                                    {[
                                        { href: "/patients/international", label: "International Patient Hub" },
                                        { href: "/patients/cmc-vellore-alternative", label: "CMC Vellore Alternative" },
                                        { href: "/patients/lodging", label: "Accommodation Guide" },
                                        { href: "/patients/transportation", label: "Transport — Airport to Hospital" },
                                        { href: "/contact", label: "Contact International Desk" },
                                    ].map(({ href, label }) => (
                                        <Link key={href} href={href}
                                            className="flex items-center justify-between p-3 rounded-xl hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/40 transition-colors text-sm group">
                                            <span className="text-gray-600 dark:text-gray-400 group-hover:text-fuchsia-700">{label}</span>
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-fuchsia-600" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
