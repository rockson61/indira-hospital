import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    Plane, Globe2, Clock, MapPin, CheckCircle2, Languages, MessageCircle,
    Shield, Phone, Star, Award, ArrowRight, ChevronRight, DollarSign,
    Users, Calendar, FileText, TrendingDown, Building, Stethoscope as StethoscopeIcon,
    ChevronDown
} from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import {
    INTERNATIONAL_COUNTRIES, HOSPITAL_AMENITIES, COST_COMPARISON,
    JOURNEY_STEPS, INTERNATIONAL_FAQS, CMC_VS_INDIRA, TOP_TREATMENTS_INTL
} from "@/lib/data/international-data";
import { getDoctors } from "@/lib/api";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { getImageUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ProctologyLaparoscopyHighlight } from "@/components/specialties/ProctologyLaparoscopyHighlight";


const HOSPITAL_NAME = "Indira Super Speciality Hospital";
const HOSPITAL_ADDRESS = "54, Katpadi Road, Gandhi Nagar, Vellore — 632006";

export const dynamicParams = true;

export async function generateStaticParams() {
    return INTERNATIONAL_COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
    const { country: slug } = await params;
    const country = INTERNATIONAL_COUNTRIES.find((c) => c.slug === slug);
    if (!country) return { title: "Not Found" };

    const title = `Medical Treatment in India for Patients from ${country.name} | Indira Hospital Vellore`;
    const description = `${country.name} patients choose Indira Super Speciality Hospital, Vellore (near CMC Vellore) for cardiac, ortho, cancer, kidney, and laparoscopic surgeries. ${country.cost_savings || "Save 60-80%"}. Same-week appointments. NABH accredited.`;

    return {
        title,
        description,
        keywords: [
            `${country.name} medical tourism India`,
            `best hospital for ${country.name} patients India`,
            `Vellore hospital ${country.name}`,
            `CMC Vellore alternative`,
            `medical visa India ${country.name}`,
            ...country.common_treatments.map((t) => `${t} India ${country.name}`),
        ],
        openGraph: {
            title,
            description,
            type: "website",
            locale: "en_IN",
        },
        alternates: {
            canonical: `${siteConfig.url}/patients/international/${slug}`,
        },
    };
}

export default async function InternationalCountryPage({ params }: { params: Promise<{ country: string }> }) {
    const { country: slug } = await params;
    const country = INTERNATIONAL_COUNTRIES.find((c) => c.slug === slug);
    if (!country) notFound();

    const allDoctors: any[] = await getDoctors().catch(() => []);
    const featuredDoctors = allDoctors.slice(0, 4);

    const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        `Hi, I am a patient from ${country.name} and I need medical treatment at Indira Hospital. Please help.`
    )}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["MedicalOrganization", "TouristInformationCenter"],
        name: siteConfig.name,
        description: `International patient services for patients from ${country.name}`,
        url: `${siteConfig.url}/patients/international/${slug}`,
        address: {
            "@type": "PostalAddress",
            streetAddress: "54, Katpadi Road, Suthanthira Ponvizha Nagar, Gandhi Nagar",
            addressLocality: "Vellore",
            postalCode: "632006",
            addressCountry: "IN",
        },
        telephone: siteConfig.contact.phone,
        areaServed: [
            { "@type": "Country", name: country.name },
            { "@type": "Country", name: "India" },
        ],
        availableService: country.common_treatments.map((t) => ({
            "@type": "MedicalProcedure",
            name: t,
        })),
        hasMap: "https://maps.google.com/maps?cid=9667111072695054632",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.1", reviewCount: "296", bestRating: "5" },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: INTERNATIONAL_FAQS.slice(0, 8).map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <JsonLdSchema type="hospital" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* ====== HERO ====== */}
            <section className="relative bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.07]"
                    style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-16 lg:pt-52 lg:pb-24 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex flex-wrap items-center text-sm text-fuchsia-300 mb-6 gap-1">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/patients" className="hover:text-white">Patients</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/patients/international" className="hover:text-white">International</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white font-medium">{country.name}</span>
                    </nav>

                    {/* Flag + badge */}
                    <div className="flex items-center gap-3 mb-6">
                        {country.flag && <span className="text-5xl">{country.flag}</span>}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-fuchsia-200 text-sm font-bold">
                            <Globe2 className="w-4 h-4" /> {country.region} · Medical Tourism Guide
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                        Leading Medical Treatment in India for<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">
                            Patients from {country.name}
                        </span>
                    </h1>
                    <p className="mt-3 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
                        Indira Super Speciality Hospital, Vellore — India&apos;s trusted quaternary care hospital for international patients.
                        NABH Accredited · 15,000+ successful surgeries · <strong className="text-white">{country.cost_savings || "Save 60–80%"}</strong> vs home country costs.
                    </p>

                    {/* Trust band */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        {[
                            { icon: Award, label: "NABH Accredited" },
                            { icon: Star, label: "4.1★ Rated" },
                            { icon: Shield, label: "50+ Insurance Partners" },
                            { icon: Clock, label: "Same-Week Appointments" },
                            { icon: Users, label: "Dedicated Intl Desk" },
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2">
                                <Icon className="w-4 h-4 text-amber-400" />
                                <span className="text-sm font-semibold">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA row */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href={waUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 transition-all hover:scale-[1.02] text-base">
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp — Free Consultation
                        </a>
                        <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-xl border border-white/20 transition-all">
                            <Phone className="w-5 h-5" />
                            Call Us Now
                        </a>
                    </div>
                </div>
            </section>

            {/* ====== STATS BAR ====== */}
            <section className="bg-fuchsia-700 text-white py-4">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-around gap-4 text-center">
                        {[
                            { value: "15,000+", label: "Surgeries" },
                            { value: "50+", label: "Countries Served" },
                            { value: "24 hrs", label: "Visa Letter Turnaround" },
                            { value: "60–85%", label: "Cost Savings" },
                            { value: "NABH", label: "Accredited" },
                        ].map(({ value, label }) => (
                            <div key={label}>
                                <div className="text-2xl font-black">{value}</div>
                                <div className="text-fuchsia-200 text-xs font-semibold uppercase tracking-wider">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== MAIN 3-COL LAYOUT ====== */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* ====== LEFT MAIN ====== */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* 1. Travel Info */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600"><Plane className="w-5 h-5" /></span>
                                Travel & Visa for {country.name} Patients
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-5">
                                {[
                                    { icon: Clock, title: "Flight Duration", value: country.flight_duration, color: "blue" },
                                    { icon: MapPin, title: "Nearest Airport", value: country.nearest_airport || "Chennai Intl (MAA) — 2.5 hrs to Vellore", color: "green" },
                                    { icon: FileText, title: "Visa Type", value: country.visa_info, color: "amber" },
                                    { icon: Calendar, title: "Invitation Letter", value: "Issued within 24 hours of appointment confirmation — free of charge.", color: "fuchsia" },
                                ].map(({ icon: Icon, title, value, color }) => (
                                    <div key={title} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                        <div className={`w-10 h-10 mb-4 rounded-xl flex items-center justify-center bg-${color}-100 dark:bg-${color}-950 text-${color}-600`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value}</p>
                                    </div>
                                ))}
                            </div>
                            {country.languages_supported && (
                                <div className="mt-4 flex items-center gap-3 p-4 bg-fuchsia-50 dark:bg-fuchsia-950/40 rounded-2xl border border-fuchsia-100 dark:border-fuchsia-900/30">
                                    <Languages className="w-5 h-5 text-fuchsia-600 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-sm text-fuchsia-800 dark:text-fuchsia-300">Languages Spoken at our Hospital: </span>
                                        <span className="text-sm text-fuchsia-700 dark:text-fuchsia-400">{country.languages_supported.join(" · ")}</span>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* 2. Top Treatments */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="w-9 h-9 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-950 flex items-center justify-center text-fuchsia-600"><StethoscopeIcon className="w-5 h-5" /></span>
                                Top Treatments {country.name} Patients Choose
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {TOP_TREATMENTS_INTL.map((t) => (
                                    <Link href={`/doctor/near-me/treat/${t.slug}`} key={t.slug}
                                        className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl hover:border-fuchsia-300 hover:shadow-md shadow-sm transition-all group">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl">{t.icon}</span>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-fuchsia-700">{t.name}</p>
                                                <p className="text-xs text-green-600 font-bold">{t.savings}</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-fuchsia-600 flex-shrink-0" />
                                    </Link>
                                ))}
                            </div>
                            {country.common_treatments.length > 0 && (
                                <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-2xl border border-green-100 dark:border-green-900/30">
                                    <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">Most Requested by {country.name} Patients:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {country.common_treatments.map((t) => (
                                            <span key={t} className="px-3 py-1.5 bg-white dark:bg-green-950 text-green-700 dark:text-green-400 text-xs rounded-full font-semibold border border-green-200 dark:border-green-900">
                                                ✓ {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* PROCTOLOGY & LAPAROSCOPY HIGHLIGHT */}
                        <section>
                            <ProctologyLaparoscopyHighlight
                                countryName={country.name}
                                waUrl={waUrl}
                            />
                        </section>

                        {/* 3. CMC Vellore vs Indira */}
                        <section className="bg-gradient-to-br from-slate-900 to-fuchsia-950 rounded-3xl p-8 text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px] pointer-events-none" />
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full text-amber-300 text-xs font-bold mb-4 uppercase tracking-widest">
                                    🔥 CMC Vellore Alternative Guide
                                </div>
                                <h2 className="text-2xl font-black mb-2">
                                    Why {country.name} Patients Choose Indira Over CMC Vellore
                                </h2>
                                <p className="text-slate-300 text-sm mb-6 max-w-2xl">
                                    CMC Vellore is world-famous — but it has 3–6 month waiting lists, limited international support, and no same-day access. Indira Hospital offers equivalent quaternary care with immediate appointments, personalised service, and dedicated international coordination.
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left py-3 pr-4 text-slate-400 font-semibold">Factor</th>
                                                <th className="py-3 px-4 text-center text-slate-400 font-semibold">CMC Vellore</th>
                                                <th className="py-3 pl-4 text-center text-fuchsia-300 font-bold">Indira Hospital</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {CMC_VS_INDIRA.map((row) => (
                                                <tr key={row.factor}>
                                                    <td className="py-3 pr-4 text-slate-300 font-medium">{row.factor}</td>
                                                    <td className={`py-3 px-4 text-center text-sm ${row.winner === "cmc" ? "text-green-400" : row.winner === "tie" ? "text-slate-300" : "text-red-400"}`}>{row.cmc}</td>
                                                    <td className={`py-3 pl-4 text-center text-sm font-bold ${row.winner === "indira" ? "text-green-400" : row.winner === "tie" ? "text-slate-300" : "text-slate-300"}`}>{row.indira}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all text-sm">
                                    <MessageCircle className="w-4 h-4" /> Get Same-Week Appointment
                                </a>
                            </div>
                        </section>

                        {/* 4. Cost Comparison Table */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                                <span className="w-9 h-9 rounded-xl bg-green-100 dark:bg-green-950 flex items-center justify-center text-green-600"><TrendingDown className="w-5 h-5" /></span>
                                Treatment Cost Comparison
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Approximate costs — Indira Hospital vs USA / UK / UAE. Actual quotes provided free on request.</p>
                            <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                                        <tr>
                                            <th className="py-3 px-4 font-bold text-gray-700 dark:text-gray-300">Procedure</th>
                                            <th className="py-3 px-4 font-bold text-fuchsia-700 dark:text-fuchsia-400 text-center">Indira (India)</th>
                                            <th className="py-3 px-4 font-bold text-gray-500 text-center">🇺🇸 USA</th>
                                            <th className="py-3 px-4 font-bold text-gray-500 text-center">🇬🇧 UK</th>
                                            <th className="py-3 px-4 font-bold text-gray-500 text-center">🇦🇪 UAE</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800 bg-white dark:bg-slate-900/50">
                                        {COST_COMPARISON.map((row) => (
                                            <tr key={row.procedure} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{row.procedure}</td>
                                                <td className="py-3 px-4 text-center font-bold text-green-600 dark:text-green-400">{row.indira}</td>
                                                <td className="py-3 px-4 text-center text-gray-500 dark:text-gray-400">{row.usa}</td>
                                                <td className="py-3 px-4 text-center text-gray-500 dark:text-gray-400">{row.uk}</td>
                                                <td className="py-3 px-4 text-center text-gray-500 dark:text-gray-400">{row.uae}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-400 mt-3">*Costs include hospital stay, surgery, anaesthesia, and standard medicines. Send reports for a transparent, all-inclusive quote.</p>
                        </section>

                        {/* 5. Patient Journey */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                                <span className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600"><Plane className="w-5 h-5" /></span>
                                Your Step-by-Step Patient Journey
                            </h2>
                            <div className="relative">
                                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-300 via-fuchsia-400 to-transparent ml-[1px]" />
                                <div className="space-y-6">
                                    {JOURNEY_STEPS.map((step) => (
                                        <div key={step.step} className="relative flex gap-6 pl-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-white font-black text-base shadow-lg shadow-fuchsia-300/40 z-10">
                                                {step.step}
                                            </div>
                                            <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-fuchsia-200 transition-colors">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xl">{step.icon}</span>
                                                    <h3 className="font-bold text-gray-900 dark:text-white">{step.title}</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 6. Hospital Amenities */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600"><Building className="w-5 h-5" /></span>
                                International Patient Amenities
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {HOSPITAL_AMENITIES.map((a) => (
                                    <div key={a.title} className="flex items-start gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                                        <span className="text-2xl flex-shrink-0">{a.icon}</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{a.title}</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{a.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 7. Our Doctors */}
                        {featuredDoctors.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="w-9 h-9 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-950 flex items-center justify-center text-fuchsia-600"><Stethoscope className="w-5 h-5" /></span>
                                    Your Doctors at Indira Hospital
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {featuredDoctors.map((doc: any) => (
                                        <Link href={`/doctor/${doc.department?.slug || "specialist"}/${doc.slug}`} key={doc.slug}
                                            className="flex gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-fuchsia-200 hover:shadow-md transition-all group">
                                            {doc.image && (
                                                <img src={getImageUrl(doc.image)} alt={doc.name}
                                                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                                            )}
                                            <div className="min-w-0">
                                                <p className="font-bold text-gray-900 dark:text-white group-hover:text-fuchsia-700 truncate">{doc.name}</p>
                                                <p className="text-fuchsia-600 text-xs font-semibold">{doc.designation}</p>
                                                <p className="text-gray-500 text-xs mt-1">{doc.experience_years || doc.experience || 10}+ yrs experience</p>
                                                <p className="text-fuchsia-600 text-xs mt-2 flex items-center gap-1 font-semibold">Book appointment <ArrowRight className="w-3 h-3" /></p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-4 text-center">
                                    <Link href="/doctors" className="inline-flex items-center gap-2 text-fuchsia-600 hover:text-fuchsia-700 font-bold transition-colors">
                                        View all specialists <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </section>
                        )}

                        {/* 8. Why us */}
                        <section className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/40 dark:to-pink-950/40 rounded-3xl p-8 border border-fuchsia-100 dark:border-fuchsia-900/30">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Why {country.name} Trusts Indira Hospital
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 italic mb-6 text-base">&quot;{country.why_choose_us}&quot;</p>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "NABH accreditation — equivalent to JCI standards",
                                    "50+ cashless insurance partners",
                                    "Robotic surgeries, 3T MRI, advanced Cath Lab",
                                    "Same-week appointments — no 3–6 month waitlists",
                                    "Free video teleconsultation before travel",
                                    "Visa invitation letter in 24 hours",
                                    "Personal coordinator available 24/7",
                                    "Transparent, all-inclusive pricing",
                                ].map((point) => (
                                    <div key={point} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 9. FAQ & Reviews */}
                        <section className="space-y-16 pt-8">
                            <EntityFAQs
                                entityType="hospital"
                                entityName={`Indira Hospital (${country.name})`}
                                entitySlug="international"
                                title={`Frequently Asked Questions — ${country.name} Patients`}
                                description="Answers to common queries about medical travel, visas, and coordination."
                            />
                            <EntityReviews
                                entityType="hospital"
                                entityName={`Indira Hospital (${country.name})`}
                                entitySlug="international"
                                title={`Success Stories: Patients from ${country.name}`}
                                description="Real clinical outcomes and coordination experiences shared by our global guests."
                            />
                        </section>
                    </div>

                    {/* ====== RIGHT SIDEBAR ====== */}
                    <aside className="lg:col-span-1 space-y-6">
                        <div className="lg:sticky lg:top-24 space-y-6">
                            {/* Booking widget */}
                            <div className="bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 rounded-2xl p-6 text-white shadow-xl">
                                <h3 className="font-black text-lg mb-1">Free Consultation</h3>
                                <p className="text-fuchsia-300 text-xs mb-4 font-semibold uppercase tracking-wider">For {country.name} Patients</p>
                                <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                                    Send your reports and get a treatment plan + cost estimate within hours. No commitment required.
                                </p>
                                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg mb-3">
                                    <MessageCircle className="w-4 h-4" />
                                    Chat on WhatsApp
                                </a>
                                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all text-sm">
                                    <Phone className="w-4 h-4" />
                                    {siteConfig.contact.phone}
                                </a>
                                <p className="text-center text-fuchsia-300/60 text-xs mt-4">We reply in &lt; 2 hours</p>
                            </div>

                            {/* Quick facts */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-4">{country.name} Quick Facts</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Flight</span>
                                        <span className="font-semibold text-gray-900 dark:text-white text-right max-w-[60%]">{country.flight_duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Visa</span>
                                        <span className="font-semibold text-gray-900 dark:text-white text-right max-w-[60%]">{country.visa_info.split(".")[0]}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Savings</span>
                                        <span className="font-semibold text-green-600">{country.cost_savings || "60–80%"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Languages</span>
                                        <span className="font-semibold text-gray-900 dark:text-white text-right max-w-[60%]">{(country.languages_supported || ["English"]).join(", ")}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Visa Letter</span>
                                        <span className="font-semibold text-gray-900 dark:text-white">Within 24 hrs</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hospital address */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-fuchsia-500" /> Hospital Location
                                </h3>
                                <p className="text-sm font-bold text-gray-800 dark:text-white">{HOSPITAL_NAME}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{HOSPITAL_ADDRESS}</p>
                                <p className="text-xs text-gray-400 mt-1">2.5 hrs from Chennai Airport · Near CMC Vellore</p>
                                <a href="https://maps.google.com/maps?cid=9667111072695054632" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 mt-3 text-sm text-fuchsia-600 hover:text-fuchsia-700 font-semibold">
                                    Get Directions <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            </div>

                            {/* Resources */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Useful Resources</h3>
                                <div className="space-y-2 text-sm">
                                    {[
                                        { href: "/patients/international-patients", label: "International Patient Info" },
                                        { href: "/patients/insurance", label: "Insurance Partners" },
                                        { href: "/health-packages", label: "Executive Health Packages" },
                                        { href: "/patients/admissions", label: "Admission Process" },
                                        { href: "/patients/request-medical-records", label: "Get Medical Records" },
                                        { href: "/doctors", label: "All Specialist Doctors" },
                                        { href: "/contact", label: "Get Visa Invitation Letter" },
                                    ].map(({ href, label }) => (
                                        <Link key={href} href={href}
                                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/40 transition-colors group">
                                            <span className="text-gray-600 dark:text-gray-400 group-hover:text-fuchsia-700">{label}</span>
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-fuchsia-600" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Other countries */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Other Countries We Serve</h3>
                                <div className="flex flex-wrap gap-2">
                                    {INTERNATIONAL_COUNTRIES.filter((c) => c.slug !== slug && c.flag).slice(0, 12).map((c) => (
                                        <Link key={c.slug} href={`/patients/international/${c.slug}`}
                                            className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/50 text-gray-700 dark:text-gray-300 text-xs rounded-xl font-medium transition-colors">
                                            {c.flag} {c.name}
                                        </Link>
                                    ))}
                                </div>
                                <Link href="/patients/international" className="inline-flex items-center gap-1 mt-3 text-sm text-fuchsia-600 hover:text-fuchsia-700 font-semibold">
                                    View all 45+ countries <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* ====== FINAL CTA BAND ====== */}
            <section className="bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white py-16">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-black mb-4">
                        Ready to Get World-Class Care?<br />
                        <span className="text-fuchsia-200">{country.name} → Vellore → Home. Healed. ✈️</span>
                    </h2>
                    <p className="text-fuchsia-100 text-lg mb-8 max-w-2xl mx-auto">
                        Share your reports today and receive a free specialist opinion, treatment plan, and transparent cost estimate within hours.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href={waUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-black rounded-2xl shadow-lg text-lg transition-all hover:scale-[1.02]">
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp — Start Now
                        </a>
                        <a href="/book-appointment"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-fuchsia-700 font-black rounded-2xl shadow-lg text-lg hover:scale-[1.02] transition-all">
                            Book Appointment Online
                        </a>
                    </div>
                </div>
            </section>

            {/* ====== SEO ENTITY GRIDS ====== */}
            <EntityCardSection type="doctors" title="Our Expert Specialists" subtitle="Meet the Team" limit={6} className="bg-white dark:bg-slate-900" />
            <EntityCardSection type="departments" title="Departments & Services" subtitle="Centres of Excellence" limit={6} className="bg-slate-50 dark:bg-slate-900/50" />
            <InternalLinkGrid type="services" title="All Treatments A–Z" subtitle="Services Directory" limit={18} className="bg-white dark:bg-slate-900 border-t" />
            <InternalLinkGrid type="locations" title="Serving Patients Across Tamil Nadu" subtitle="Location Directory" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t" />
        </div>
    );
}
