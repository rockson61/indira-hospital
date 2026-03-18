import { Metadata } from "next";
import Link from "next/link";
import {
    CheckCircle2, XCircle, MessageCircle, Phone, Clock, Star, Award,
    Users, Shield, ArrowRight, ChevronRight, MapPin, TrendingDown, Calendar, Plane, CreditCard, AlertCircle
} from "lucide-react";
import { siteConfig } from "@/config/site";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { CMC_VS_INDIRA, INTERNATIONAL_FAQS, JOURNEY_STEPS } from "@/lib/data/international-data";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const metadata: Metadata = {
    title: "CMC Vellore Alternative — Get Treatment This Week | Indira Super Speciality Hospital",
    description: "CMC Vellore waiting list too long? Indira Super Speciality Hospital, Vellore offers same-quality NABH quaternary care with same-week appointments, no waiting lists, and dedicated international patient support. Book now.",
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
    { icon: MapPin, title: "Same City — Near CMC", desc: "Located in Vellore, the same medical hub. You don't need to travel to another city.", color: "red" },
];

const FAQs = [
    { q: "Is Indira Hospital as good as CMC Vellore?", a: "Indira Super Speciality Hospital is NABH accredited — the same gold standard accreditation as CMC Vellore. Our surgeons are trained at India's top institutions and have performed 15,000+ successful procedures. While CMC is a world-renowned institution, Indira provides equivalent quaternary care for the vast majority of procedures, with the key advantage of immediate availability." },
    { q: "How much shorter is the waiting period at Indira vs CMC?", a: "CMC Vellore is known for waiting lists of 3–6 months for elective procedures and 4–8 weeks even for urgent cases. At Indira Hospital, we provide appointments within days for most specialties and same-day care for emergencies." },
    { q: "Do you treat international patients like CMC Vellore does?", a: "Yes — we have a dedicated International Patient Desk that provides visa invitation letters (within 24 hours), airport pickup, multi-lingual staff (Arabic, French, English, Hindi), dietary arrangements (Halal, vegetarian), and a 24/7 personal coordinator." },
    { q: "Is the cost similar to CMC?", a: "Indira Hospital's treatment costs are comparable to or lower than CMC Vellore for most procedures, with the added benefit of immediate availability and more personalized attention for international patients." },
    { q: "Can I get a second opinion at Indira if I've already consulted at CMC?", a: "Absolutely. Send us your CMC diagnosis and reports via WhatsApp. Our specialist will review and provide a free second opinion within hours. Many patients use this to confirm their treatment plan before proceeding." },
];

const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I was looking at CMC Vellore but the waiting list is too long. Can I get an appointment at Indira Hospital this week?")}`;

export default function CMCVelloreAlternativePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <JsonLdSchema
                type="hospital"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: FAQs.map((faq) => ({
                            "@type": "Question",
                            name: faq.q,
                            acceptedAnswer: { "@type": "Answer", text: faq.a },
                        })),
                    })
                }}
            />

            {/* HERO */}
            <section className="relative bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[100px] will-change-transform transform-gpu pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-16 lg:pt-52 lg:pb-20 relative z-10">
                    <nav className="flex items-center text-sm text-fuchsia-300 mb-6 gap-1 flex-wrap">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/patients/international" className="hover:text-white">International Patients</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">CMC Vellore Alternative</span>
                    </nav>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full text-amber-300 text-sm font-bold mb-6">
                        ⚡ No Waiting Lists — Same-Week Appointments Available
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                        CMC Vellore Waiting List<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">
                            Too Long? Come to Indira.
                        </span>
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
                        Indira Super Speciality Hospital is located in <strong className="text-white">the same city as CMC Vellore</strong>. We offer equivalent NABH-accredited quaternary care — with <strong className="text-white">same-week appointments</strong>, dedicated international support, and lower costs.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">
                        {[
                            { icon: Award, label: "NABH Accredited" },
                            { icon: Clock, label: "Appointments in Days" },
                            { icon: Star, label: "4.1★ Google Rated" },
                            { icon: Users, label: "24/7 Intl Desk" },
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2">
                                <Icon className="w-4 h-4 text-amber-400" />
                                <span className="text-sm font-semibold">{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href={waUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 transition-all hover:scale-[1.02]">
                            <MessageCircle className="w-5 h-5" />
                            Book Appointment This Week
                        </a>
                        <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl border border-white/20">
                            <Phone className="w-5 h-5" />
                            {siteConfig.contact.phone}
                        </a>
                    </div>
                </div>
            </section>

            {/* STATS BAR */}
            <div className="bg-fuchsia-700 text-white py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-4 text-center">
                    {[
                        { v: "15,000+", l: "Surgeries Done" },
                        { v: "NABH", l: "Accredited" },
                        { v: "Same Week", l: "Appointments" },
                        { v: "24/7", l: "Emergency Care" },
                        { v: "50+", l: "Specialties" },
                    ].map(({ v, l }) => (
                        <div key={l}>
                            <div className="text-2xl font-black">{v}</div>
                            <div className="text-fuchsia-200 text-xs font-semibold uppercase tracking-wider">{l}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 space-y-16">

                {/* WAITING TIME COMPARISON */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Waiting Time Comparison — Indira vs CMC Vellore
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">Approximate waiting times for elective procedures. Emergencies seen same day at Indira.</p>
                    <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                                <tr>
                                    <th className="py-3 px-5 text-left font-bold text-gray-700 dark:text-gray-300">Specialty / Procedure</th>
                                    <th className="py-3 px-5 text-center font-bold text-red-600 dark:text-red-400">❌ CMC Vellore Wait</th>
                                    <th className="py-3 px-5 text-center font-bold text-green-600 dark:text-green-400">✅ Indira Hospital</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-slate-800 bg-white dark:bg-slate-900/50">
                                {WAITING_COMPARISON.map((row) => (
                                    <tr key={row.dept} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="py-3 px-5 font-medium text-gray-900 dark:text-white">{row.dept}</td>
                                        <td className="py-3 px-5 text-center">
                                            <span className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 font-semibold">
                                                <XCircle className="w-4 h-4" /> {row.cmc}
                                            </span>
                                        </td>
                                        <td className="py-3 px-5 text-center">
                                            <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 font-bold">
                                                <CheckCircle2 className="w-4 h-4" /> {row.indira}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* HEAD TO HEAD */}
                <section className="bg-gradient-to-br from-slate-900 to-fuchsia-950 rounded-3xl p-8 text-white">
                    <h2 className="text-2xl font-black mb-6">Full Comparison — CMC Vellore vs Indira Hospital</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-3 pr-6 text-left text-slate-400">Factor</th>
                                    <th className="py-3 px-4 text-center text-red-400">CMC Vellore</th>
                                    <th className="py-3 pl-4 text-center text-green-400 font-bold">Indira Hospital ✅</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {CMC_VS_INDIRA.map((row) => (
                                    <tr key={row.factor}>
                                        <td className="py-3 pr-6 text-slate-300 font-medium">{row.factor}</td>
                                        <td className={`py-3 px-4 text-center text-sm ${row.winner === "cmc" ? "text-green-400" : row.winner === "tie" ? "text-slate-400" : "text-red-400"}`}>{row.cmc}</td>
                                        <td className={`py-3 pl-4 text-center text-sm font-bold ${row.winner === "indira" ? "text-green-400" : row.winner === "tie" ? "text-slate-300" : "text-slate-300"}`}>{row.indira}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all text-sm shadow-lg">
                        <MessageCircle className="w-4 h-4" /> Get Same-Week Appointment
                    </a>
                </section>

                {/* WHY POINTS */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        Why Choose Indira Hospital Instead of Waiting at CMC?
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {WHY_POINTS.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-fuchsia-200 hover:shadow-md transition-all">
                                <div className="w-11 h-11 bg-fuchsia-100 dark:bg-fuchsia-950 rounded-xl flex items-center justify-center mb-4 text-fuchsia-600">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PATIENT JOURNEY */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        From CMC Rejection to Indira Treatment — How It Works
                    </h2>
                    <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-300 via-fuchsia-400 to-transparent ml-[1px]" />
                        <div className="space-y-6">
                            {JOURNEY_STEPS.map((step) => (
                                <div key={step.step} className="relative flex gap-6 pl-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-white font-black shadow-lg z-10">
                                        {step.step}
                                    </div>
                                    <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-lg">{step.icon}</span>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm">{step.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Questions from CMC Patients About Indira Hospital
                    </h2>
                    <div className="space-y-3">
                        {FAQs.map((faq, i) => (
                            <details key={i} className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                                <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-semibold text-gray-900 dark:text-white hover:text-fuchsia-700">
                                    <span className="pr-4">{faq.q}</span>
                                    <span className="text-gray-400 group-open:rotate-180 transition-transform text-xl flex-shrink-0">˅</span>
                                </summary>
                                <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-4">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* NEARBY CMC LINK */}
                <section className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-fuchsia-500 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">We&apos;re in the Same City as CMC Vellore</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Indira Super Speciality Hospital is located in <strong>Gandhi Nagar, Vellore</strong> — in the same medical hub as CMC. You don&apos;t need to travel to Chennai or Bangalore. Same city. Better availability.
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                <strong>Address:</strong> 54, Katpadi Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore — 632006
                            </p>
                            <a href="https://maps.google.com/maps?cid=9667111072695054632" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-3 text-sm text-fuchsia-600 hover:text-fuchsia-700 font-semibold">
                                Get Directions <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* CTA BAND */}
            <section className="bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-black mb-4">
                        Don&apos;t Wait Months.<br />
                        <span className="text-fuchsia-200">Get Treated This Week at Indira.</span>
                    </h2>
                    <p className="text-fuchsia-100 text-lg mb-8">Send your reports via WhatsApp and get a free specialist opinion + same-week appointment.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href={waUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-black rounded-2xl shadow-lg text-lg transition-all">
                            <MessageCircle className="w-5 h-5" /> WhatsApp — Book Now
                        </a>
                        <Link href="/book-appointment"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-fuchsia-700 font-black rounded-2xl shadow-lg text-lg hover:scale-[1.02] transition-all">
                            Book Online
                        </Link>
                    </div>
                </div>
            </section>

            <EntityCardSection type="doctors" title="Our Specialists" subtitle="Expert Care" limit={6} className="bg-white dark:bg-slate-900" />
            <EntityCardSection type="departments" title="All Departments" subtitle="Centres of Excellence" limit={6} className="bg-slate-50 dark:bg-slate-900/50" />
            <InternalLinkGrid type="health-packages" title="Preventive Health Checkups" subtitle="Wellness Screening" limit={8} className="bg-white dark:bg-slate-900 border-t" />
            <InternalLinkGrid type="diagnostics" title="Diagnostic & Lab Support" subtitle="NABL Accredited" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t" />
            <InternalLinkGrid type="services" title="All Treatments A–Z" subtitle="Browse all services" limit={12} className="bg-white dark:bg-slate-900 border-t" />
            <InternalLinkGrid type="locations" title="Serving Patients Across Tamil Nadu" subtitle="Find a Branch" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t" />
        </div>
    );
}
