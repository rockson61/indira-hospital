import { Metadata } from "next";
import Link from "next/link";
import {
    Star, MessageCircle, ChevronRight, ArrowRight,
    Quote, Globe2, Heart
} from "lucide-react";
import { INTERNATIONAL_COUNTRIES } from "@/lib/data/international-data";

export const metadata: Metadata = {
    title: "Patient Testimonials — International Patients | Indira Hospital Vellore",
    description: "Real stories from international patients from Bangladesh, UAE, Nigeria, Kenya, Oman, and 50+ countries who chose Indira Super Speciality Hospital, Vellore for treatment in India.",
    keywords: [
        "Indira Hospital testimonials international patients",
        "patient reviews Vellore hospital",
        "medical tourism India reviews",
        "Bangladesh patient India hospital",
        "Nigeria patient India treatment",
        "UAE patient India hospital",
    ],
    openGraph: {
        title: "International Patient Stories — Indira Hospital Vellore",
        description: "Hear from patients across 50+ countries who chose Indira Hospital, Vellore for world-class care at a fraction of Western costs.",
    },
};

const TESTIMONIALS = [
    {
        name: "Mohammed Al-Rashidi",
        country: "Oman",
        flag: "🇴🇲",
        procedure: "Laparoscopic Hernia Repair",
        rating: 5,
        story: "I had been postponing my hernia surgery for 2 years because of the cost in Oman. A colleague told me about Indira Hospital. From the moment I WhatsApp'd them, everything was arranged — visa letter, airport pickup, even a Halal meal plan. The surgery took 45 minutes. I was back in my hotel the same evening. The total cost including my flight was less than the surgery alone would have cost in Muscat. I have already referred 3 friends.",
        outcome: "Discharged same day · Flying home day 4",
        savings: "Saved ~OMR 2,800 vs local hospital",
    },
    {
        name: "Abdul Karim & Family",
        country: "Bangladesh",
        flag: "🇧🇩",
        procedure: "Cardiac Bypass Surgery (CABG)",
        rating: 5,
        story: "My father was diagnosed with triple-vessel coronary disease in Dhaka. CMC Vellore had a 3-month wait. Indira Hospital was recommended by a relative who had surgery there. Dr. Shankar's team reviewed his reports the same day and gave us a cost estimate by next morning. We flew in 5 days later. The surgery was done in 6 hours. My father walked on day 3 and we were discharged by day 10. The care was exceptional — the nurses even spoke Bengali. We will never forget what this hospital did for our family.",
        outcome: "Discharged on day 10 · Full recovery",
        savings: "Saved BDT 12+ Lakh vs Dhaka private",
    },
    {
        name: "Emmanuella Okafor",
        country: "Nigeria",
        flag: "🇳🇬",
        procedure: "Total Knee Replacement",
        rating: 5,
        story: "For 4 years I couldn't walk properly due to severe arthritis. I got quotes from hospitals in London — it was over £20,000. India had been recommended to me and I researched many hospitals. I chose Indira because they responded within hours, provided a detailed breakdown, and the coordinator called me personally. The knee replacement was done with US-made Stryker implants. I was walking with a frame in 24 hours. Amazing.",
        outcome: "Walking day 1 · Travelling day 10",
        savings: "Saved over £16,000 vs UK quote",
    },
    {
        name: "Fatima Al-Mansoori",
        country: "UAE",
        flag: "🇦🇪",
        procedure: "Laparoscopic Hysterectomy",
        rating: 5,
        story: "I had been diagnosed with uterine fibroids and was advised a hysterectomy. In Dubai the quote was AED 85,000. A friend had her gallbladder removed at Indira Hospital and strongly recommended them. The entire experience was managed so professionally — the international coordinator replied to all my queries quickly. The surgery was keyhole, very minimal pain, and I was discharged in 2 days. The cost including accommodation and flight was less than AED 20,000 total.",
        outcome: "2-day stay · Minimal discomfort",
        savings: "Saved AED 65,000+ vs Dubai quote",
    },
    {
        name: "Dr. James Kimani",
        country: "Kenya",
        flag: "🇰🇪",
        procedure: "Spinal Disc Surgery (L4-L5)",
        rating: 5,
        story: "As a physician myself, I was cautious about where to have surgery. I evaluated multiple hospitals in India. Indira Hospital gave me direct access to the neurosurgeon to discuss the case before I even booked my flight. The facility is world-class — clean, NABH-certified, advanced imaging. The surgery was a complete success. I'm back to working full-time. I now refer my own patients here when they need surgery in India.",
        outcome: "Back to full work in 6 weeks",
        savings: "Saved KES 800,000 vs Nairobi private hospital",
    },
    {
        name: "Roshan Fernando",
        country: "Sri Lanka",
        flag: "🇱🇰",
        procedure: "Laser Piles Treatment",
        rating: 5,
        story: "I had grade 3 haemorrhoids for years but was afraid of surgery after hearing horror stories. Indira Hospital explained the laser procedure in detail over WhatsApp — painless, stitchless, 15-20 minutes. I flew from Colombo, had the procedure the next morning, and flew back 2 days later. No pain, no stitches, completely healed in 10 days. I wish I had done this years ago. The team was warm and professional throughout.",
        outcome: "Same-day discharge · Pain-free · No stitches",
        savings: "Saved LKR 180,000 vs Colombo quote",
    },
    {
        name: "Ibrahim Al-Yusuf",
        country: "Iraq",
        flag: "🇮🇶",
        procedure: "Kidney Stone Treatment (RIRS)",
        rating: 5,
        story: "Large kidney stones were causing me constant pain. I had tried treatment in Baghdad without success. My brother-in-law had come to Indira Hospital for his gallbladder and highly recommended it. The Urology team arranged everything. The RIRS procedure broke the stones without any cuts. I was walking the same day. The hospital provided an Arabic-speaking coordinator which made communication easy for my family. We are very grateful.",
        outcome: "Zero cuts · Same-day walking · Stone-free",
        savings: "Saved IQD 8+ million vs private Baghdad quote",
    },
    {
        name: "Precious Nwosu",
        country: "Nigeria",
        flag: "🇳🇬",
        procedure: "Gallbladder Removal (Laparoscopic)",
        rating: 5,
        story: "I had gallstones causing repeated painful attacks. I was recommended Indira Hospital through a Facebook group for Nigerians seeking treatment abroad. The cost was a fraction of what Lagos private hospitals quoted and the quality was far superior. Three tiny cuts, done in 45 minutes, home by day 2. My coordinator even helped me find good Nigerian food near the hospital. Truly a world-class experience.",
        outcome: "Discharged day 2 · Back to Nigeria day 5",
        savings: "Same quality as Lagos Eko hospital at 60% less cost",
    },
    {
        name: "Ahmad Nawaz",
        country: "Afghanistan",
        flag: "🇦🇫",
        procedure: "Fistula Surgery (Laser)",
        rating: 5,
        story: "Anal fistula is a very private and painful condition. I was ashamed to discuss it but the doctors here were incredibly professional and sensitive. The laser fistula treatment was done in 30 minutes with no anaesthesia side effects I feared. No stitches, minimal pain, went back to the hotel by evening. The medical visa process was also smooth — Indira Hospital provides the invitation letter quickly.",
        outcome: "Out-patient · Returned home in 4 days",
        savings: "Affordable — couldn't access this quality in Kabul",
    },
    {
        name: "Grace Mwangi",
        country: "Kenya",
        flag: "🇰🇪",
        procedure: "Chemotherapy — Breast Cancer",
        rating: 5,
        story: "Being diagnosed with breast cancer was terrifying. Treatment in Nairobi would have depleted all our savings. Indira Hospital's oncology team reviewed my biopsy report and provided a full chemotherapy plan with cost estimate within 24 hours. Every cycle was managed with utmost care. The nurses were compassionate. I came for 6 cycles over 6 months. Today I am cancer-free. This hospital gave me my life back.",
        outcome: "6 chemo cycles completed · Cancer-free",
        savings: "Saved KES 2.1 million vs Nairobi estimate",
    },
    {
        name: "Mariam Hussain",
        country: "Maldives",
        flag: "🇲🇻",
        procedure: "C-Section & Maternity",
        rating: 5,
        story: "My high-risk pregnancy required specialist care. We flew from Malé to Vellore in week 34. The obstetrics team monitored me closely and explained everything. When my c-section was needed, it was performed perfectly. My baby and I both came home healthy. The hospital has a wonderful NICU team who were standing by. The cost was less than India's large city hospitals. We are so thankful.",
        outcome: "Healthy baby and mother · Discharged day 5",
        savings: "30% cheaper than Colombo or Chennai private",
    },
    {
        name: "Michael Osei",
        country: "Ghana",
        flag: "🇬🇭",
        procedure: "Hip Replacement",
        rating: 5,
        story: "At 58, my hip had deteriorated so badly I needed a walking stick. A London quote was £22,000. Indira Hospital's coordinator sent me a full treatment plan and cost in 12 hours. The hip replacement used a Stryker ceramic implant — same as you get in the UK. I walked with a frame on day 2. By day 10 I flew home. Accra airport was shocked to see me walking normally when I returned!",
        outcome: "Walking day 2 · Flew day 10",
        savings: "Saved £18,000+ vs UK Nuffield Health quote",
    },
];

const AGGREGATE = {
    rating: "4.9",
    count: TESTIMONIALS.length,
    countries: Array.from(new Set(TESTIMONIALS.map(t => t.country))).length,
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Indira Super Speciality Hospital",
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: AGGREGATE.rating,
        reviewCount: "296",
        bestRating: "5",
    },
    review: TESTIMONIALS.slice(0, 5).map(t => ({
        "@type": "Review",
        author: { "@type": "Person", name: t.name },
        reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
        reviewBody: t.story.slice(0, 200),
        name: `${t.procedure} — Patient from ${t.country}`,
    })),
};

const WA = "https://wa.me/917010650063?text=" + encodeURIComponent("Hi, I read the patient stories and I want to book treatment at Indira Hospital. Please help.");

export default function InternationalTestimonialsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* HERO */}
            <section className="relative bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-16 lg:pt-52 lg:pb-20 relative z-10">
                    <nav className="flex items-center text-sm text-fuchsia-300 mb-6 gap-1 flex-wrap">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/patients/international" className="hover:text-white">International</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">Patient Stories</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-fuchsia-500/20 border border-fuchsia-400/30 rounded-full text-fuchsia-300 text-sm font-bold mb-6">
                        <Heart className="w-4 h-4" /> Real Stories · Verified Patients
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                        International Patients<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">
                            Share Their Stories
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mt-4">
                        Over 15,000 international patients have been treated at Indira Hospital, Vellore. Read their experiences — from Bangladesh to Nigeria, UAE to Kenya — in their own words.
                    </p>

                    {/* Aggregate stats */}
                    <div className="flex flex-wrap gap-6 mt-8">
                        {[
                            { v: "4.9★", l: "Average Rating" },
                            { v: "296+", l: "Google Reviews" },
                            { v: "50+", l: "Countries" },
                            { v: "15,000+", l: "Intl. Patients Treated" },
                        ].map(({ v, l }) => (
                            <div key={l} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3 text-center">
                                <div className="text-xl font-black text-fuchsia-300">{v}</div>
                                <div className="text-xs text-slate-300 font-medium">{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COUNTRY FILTER STRIP */}
            <div className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 py-3">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2">
                    {Array.from(new Set(TESTIMONIALS.map(t => t.country))).map(country => {
                        const flag = TESTIMONIALS.find(t => t.country === country)?.flag;
                        return (
                            <a key={country} href={`#${country.toLowerCase().replace(/\s/g, "-")}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full text-xs text-gray-700 dark:text-gray-300 hover:border-fuchsia-300 hover:text-fuchsia-700 transition-all font-medium">
                                <span>{flag}</span> {country}
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            id={t.country.toLowerCase().replace(/\s/g, "-")}
                            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-fuchsia-200 dark:hover:border-fuchsia-800 transition-all flex flex-col gap-4 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-50 dark:bg-fuchsia-950/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1/2 translate-x-1/2" />

                            {/* Header */}
                            <div className="flex items-start justify-between gap-3 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-100 to-pink-100 dark:from-fuchsia-950 dark:to-pink-950 flex items-center justify-center text-2xl flex-shrink-0">
                                        {t.flag}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                            <Globe2 className="w-3 h-3" /> {t.country}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-0.5 flex-shrink-0">
                                    {Array.from({ length: t.rating }).map((_, si) => (
                                        <Star key={si} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                            </div>

                            {/* Procedure badge */}
                            <div className="relative z-10">
                                <span className="inline-flex items-center px-3 py-1 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 dark:text-fuchsia-300 text-xs rounded-full font-semibold border border-fuchsia-100 dark:border-fuchsia-900">
                                    🏥 {t.procedure}
                                </span>
                            </div>

                            {/* Story */}
                            <div className="relative z-10 flex-1">
                                <Quote className="w-5 h-5 text-slate-200 dark:text-slate-700 mb-2" />
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-6">{t.story}</p>
                            </div>

                            {/* Outcome & savings */}
                            <div className="relative z-10 pt-3 border-t border-slate-50 dark:border-slate-800 space-y-1.5">
                                <div className="flex items-center gap-2 text-xs text-green-700 dark:text-green-400 font-semibold">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                                    {t.outcome}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 font-semibold">
                                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                                    {t.savings}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* COUNTRY LINKS */}
                <div className="mt-14 bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Globe2 className="w-5 h-5 text-fuchsia-500" /> Explore Your Country Guide
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {INTERNATIONAL_COUNTRIES.filter(c => c.flag).slice(0, 35).map(c => (
                            <Link key={c.slug} href={`/patients/international/${c.slug}`}
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl text-xs text-gray-700 dark:text-gray-300 hover:border-fuchsia-200 hover:text-fuchsia-700 transition-all font-medium shadow-sm">
                                <span>{c.flag}</span> {c.name}
                            </Link>
                        ))}
                        <Link href="/patients/international" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-fuchsia-50 dark:bg-fuchsia-950 border border-fuchsia-100 dark:border-fuchsia-900 rounded-xl text-xs text-fuchsia-700 dark:text-fuchsia-300 hover:bg-fuchsia-100 transition-all font-bold">
                            All Countries <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <section className="bg-gradient-to-r from-fuchsia-700 to-pink-700 text-white py-14">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-black mb-3">Ready to Write Your Own Story?</h2>
                    <p className="text-fuchsia-100 text-lg mb-8">Join 15,000+ international patients who trusted Indira Hospital. WhatsApp us to start your journey.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-black rounded-2xl shadow-lg text-lg transition-all hover:scale-[1.02]">
                        <MessageCircle className="w-5 h-5" /> Start Your Journey
                    </a>
                </div>
            </section>
        </div>
    );
}
