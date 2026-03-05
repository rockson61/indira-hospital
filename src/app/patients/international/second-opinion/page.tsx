import { Metadata } from "next";
import Link from "next/link";
import {
    FileText, MessageCircle, Phone, CheckCircle2, ChevronRight,
    Clock, ArrowRight, Star, Shield, Stethoscope
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { INTERNATIONAL_COUNTRIES } from "@/lib/data/international-data";

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
    { step: 1, icon: "📋", title: "Send Your Reports", desc: "WhatsApp or email your diagnosis, imaging reports (MRI/CT/X-ray), blood tests, and current doctor's treatment plan." },
    { step: 2, icon: "💬", title: "Our Specialist Reviews", desc: "A senior specialist from our medical board reviews your case and medical history — at no charge." },
    { step: 3, icon: "⏱️", title: "Response in 24 Hours", desc: "You receive a detailed written second opinion in 24 hours — agreeing, refining, or proposing a different plan." },
    { step: 4, icon: "📞", title: "Optional Video Consultation", desc: "If needed, we schedule a video consultation with the specialist for a deeper discussion of your case and treatment options." },
    { step: 5, icon: "✈️", title: "Travel to India (Optional)", desc: "If you choose to proceed with treatment, we coordinate your visa, airport pickup, and hospital admission — all in one step." },
];

const WHY_POINTS = [
    "Senior specialists with 15–35 years of experience",
    "Access to NABH-accredited facility and diagnostics",
    "Independent opinion — we are not affiliated with your current hospital",
    "Trusted by patients who came after consulting CMC Vellore",
    "Written opinion document you can share with your current doctor",
    "No obligation to travel — opinion is yours to keep",
];

const FAQs = [
    { q: "Is the second opinion completely free?", a: "Yes. The initial written second opinion based on your submitted reports is completely free of charge. A video consultation with the specialist, if needed, may have a nominal fee." },
    { q: "How do I send my reports?", a: "WhatsApp them directly to our number (+91 70106 50063) or email them to our international desk. We accept PDF scans, JPG/PNG images, and DICOM files for radiology." },
    { q: "Which doctors will review my case?", a: "Your case is assigned to the most relevant senior specialist (e.g., a cardiac surgeon for heart cases, an oncologist for cancer). All reviewers have 15+ years of specialized experience." },
    { q: "Will my privacy be protected?", a: "Absolutely. Your medical documents and personal information are handled confidentially and used only for the purpose of your second opinion. We follow strict patient data privacy protocols." },
    { q: "How is this different from an online platform?", a: "Our second opinions come directly from practicing senior specialists at a real NABH-accredited hospital — not AI tools or junior residents. The doctor who reviews your case is the same one who would operate on you." },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQs.map(faq => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
};

export default function SecondOpinionPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* HERO */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-16 lg:pt-52 lg:pb-20 relative z-10">
                    <nav className="flex items-center text-sm text-blue-300 mb-6 gap-1 flex-wrap">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/patients/international" className="hover:text-white">International</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">Free Second Opinion</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-bold mb-6">
                        ⚡ Free · No Obligation · Response in 24 Hours
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                        Get a Free Second<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-300">
                            Medical Opinion from India
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mt-4">
                        Concerned about your diagnosis? Our senior specialists review your reports and provide an <strong className="text-white">honest, independent second opinion within 24 hours</strong> — at no cost. Trusted by patients from 50+ countries.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl shadow-lg transition-all hover:scale-[1.02]">
                            <MessageCircle className="w-5 h-5" /> Send Reports via WhatsApp
                        </a>
                        <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all">
                            <Phone className="w-5 h-5" /> Call Us
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-6">
                        {["Free of Charge", "24hr Response", "Senior Specialist Review", "50+ Countries Served"].map(badge => (
                            <div key={badge} className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 space-y-12">

                {/* HOW IT WORKS */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">How It Works — 5 Simple Steps</h2>
                    <div className="relative">
                        <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-fuchsia-400 to-transparent" />
                        <div className="space-y-5">
                            {HOW_IT_WORKS.map(step => (
                                <div key={step.step} className="flex gap-6 pl-2">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-fuchsia-600 flex items-center justify-center text-white font-black shadow-lg z-10 text-sm">
                                        {step.step}
                                    </div>
                                    <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-lg">{step.icon}</span>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm">{step.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEND FORM BOX */}
                <section className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 text-white">
                    <h2 className="text-2xl font-black mb-2">Send Your Reports Now</h2>
                    <p className="text-slate-300 text-sm mb-6">Upload via WhatsApp or email — our team will assign the right specialist and respond within 24 hours.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="flex flex-col items-center gap-3 p-6 bg-green-500/20 border border-green-400/30 rounded-2xl hover:bg-green-500/30 transition-all text-center group">
                            <MessageCircle className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                            <div>
                                <p className="font-black text-lg">WhatsApp</p>
                                <p className="text-green-300 text-sm">+91 70106 50063</p>
                                <p className="text-slate-400 text-xs mt-1">Send photos, PDFs, DICOM — all accepted</p>
                            </div>
                        </a>
                        <a href={`mailto:${EMAIL}`}
                            className="flex flex-col items-center gap-3 p-6 bg-blue-500/20 border border-blue-400/30 rounded-2xl hover:bg-blue-500/30 transition-all text-center group">
                            <FileText className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                            <div>
                                <p className="font-black text-lg">Email</p>
                                <p className="text-blue-300 text-sm break-all">{EMAIL}</p>
                                <p className="text-slate-400 text-xs mt-1">Best for large radiology files</p>
                            </div>
                        </a>
                    </div>
                    <div className="mt-5 p-4 bg-white/5 rounded-xl text-sm text-slate-300">
                        <p className="font-bold text-white mb-2">What to include in your message:</p>
                        <ul className="space-y-1">
                            {[
                                "Your name, age, and country",
                                "Current diagnosis (e.g., 'Stage 2 colon cancer' or 'L4-L5 disc herniation')",
                                "All relevant reports (blood tests, imaging, biopsy, discharge summary)",
                                "Current treatment plan / what your doctor has recommended",
                            ].map(item => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5">→</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* SPECIALTIES */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">We Review Cases Across All Major Specialties</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {SPECIALTIES_FOR_SECOND_OPINION.map(({ name, desc }) => (
                            <div key={name} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center mb-3">
                                    <Stethoscope className="w-4 h-4 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{name}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHY POINTS */}
                <section className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-7 border border-slate-100 dark:border-slate-800">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-fuchsia-500" /> Why Get a Second Opinion from Indira Hospital?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {WHY_POINTS.map(pt => (
                            <div key={pt} className="flex items-start gap-3">
                                <Star className="w-4 h-4 text-fuchsia-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{pt}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {FAQs.map((faq, i) => (
                            <details key={i} className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                                <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-semibold text-gray-900 dark:text-white hover:text-blue-700 text-sm">
                                    <span className="pr-4">{faq.q}</span>
                                    <span className="text-gray-400 group-open:rotate-180 transition-transform text-xl flex-shrink-0">˅</span>
                                </summary>
                                <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-4">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* COUNTRIES */}
                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">Serving Patients from Across the World</h2>
                    <div className="flex flex-wrap gap-2">
                        {INTERNATIONAL_COUNTRIES.filter(c => c.flag).slice(0, 30).map(c => (
                            <Link key={c.slug} href={`/patients/international/${c.slug}`}
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl text-xs text-gray-700 dark:text-gray-300 hover:border-blue-200 hover:text-blue-700 transition-all font-medium">
                                <span>{c.flag}</span> {c.name}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>

            {/* CTA BAND */}
            <section className="bg-gradient-to-r from-blue-700 to-fuchsia-700 text-white py-14">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Clock className="w-10 h-10 mx-auto text-blue-200 mb-4" />
                    <h2 className="text-3xl font-black mb-3">Second Opinion Within 24 Hours — Free</h2>
                    <p className="text-blue-100 text-lg mb-8">No payment. No obligation. Just an honest specialist opinion from India's leading quaternary care hospital.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-black rounded-2xl shadow-lg text-lg transition-all">
                        <MessageCircle className="w-5 h-5" /> Send Reports — Get Opinion
                    </a>
                </div>
            </section>
        </div>
    );
}
