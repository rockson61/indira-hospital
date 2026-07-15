import { Metadata } from "next";
import Link from "next/link";
import {
 Star, MessageCircle, ChevronRight, ArrowRight,
 Quote, Globe2, Heart, Sparkles, Phone, Award, CheckCircle2
} from "lucide-react";
import { INTERNATIONAL_COUNTRIES } from "@/lib/data/international-data";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/ui/section-container";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

export const metadata: Metadata = {
 title: "Patient Testimonials — International Patients | Indira Ho...",
 description: "Real stories from international patients from Bangladesh, UAE, Nigeria, Kenya, Oman, and 50+ countries who chose Indira Super Speciality Hospital, Vello...",
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
 story: "I had been postponing my hernia surgery for 2 years because of the cost in Oman. A colleague told me about Indira Hospital. From the moment I WhatsApp'd them, everything was arranged — visa letter, airport pickup, even a Halal meal plan. The surgery took 45 minutes. I was back in my hotel the same evening. The total cost including my flight was less than the surgery alone would have cost in Muscat.",
 outcome: "Discharged same day · Flying home day 4",
 savings: "Saved ~OMR 2,800 vs local hospital",
 },
 {
 name: "Abdul Karim & Family",
 country: "Bangladesh",
 flag: "🇧🇩",
 procedure: "Cardiac Bypass Surgery (CABG)",
 rating: 5,
 story: "My father was diagnosed with triple-vessel coronary disease in Dhaka. CMC Vellore had a 3-month wait. Indira Hospital was recommended by a relative who had surgery there. Dr. Shankar's team reviewed his reports the same day and gave us a cost estimate by next morning. We flew in 5 days later. The surgery was done in 6 hours. My father walked on day 3 and we were discharged by day 10.",
 outcome: "Discharged on day 10 · Full recovery",
 savings: "Saved BDT 12+ Lakh vs Dhaka private",
 },
 {
 name: "Emmanuella Okafor",
 country: "Nigeria",
 flag: "🇳🇬",
 procedure: "Total Knee Replacement",
 rating: 5,
 story: "For 4 years I couldn't walk properly due to severe arthritis. I got quotes from hospitals in London — it was over £20,000. India had been recommended to me and I researched many hospitals. I chose Indira because they responded within hours, provided a detailed breakdown, and the coordinator called me personally. The knee replacement was done with US-made Stryker implants.",
 outcome: "Walking day 1 · Travelling day 10",
 savings: "Saved over £16,000 vs UK quote",
 },
 {
 name: "Fatima Al-Mansoori",
 country: "UAE",
 flag: "🇦🇪",
 procedure: "Laparoscopic Hysterectomy",
 rating: 5,
 story: "I had been diagnosed with uterine fibroids and was advised a hysterectomy. In Dubai the quote was AED 85,000. A friend had her gallbladder removed at Indira Hospital and strongly recommended them. The entire experience was managed so professionally — the international coordinator replied to all my queries quickly. The surgery was keyhole, very minimal pain.",
 outcome: "2-day stay · Minimal discomfort",
 savings: "Saved AED 65,000+ vs Dubai quote",
 },
 {
 name: "Dr. James Kimani",
 country: "Kenya",
 flag: "🇰🇪",
 procedure: "Spinal Disc Surgery (L4-L5)",
 rating: 5,
 story: "As a physician myself, I was cautious about where to have surgery. I evaluated multiple hospitals in India. Indira Hospital gave me direct access to the neurosurgeon to discuss the case before I even booked my flight. The facility is world-class — clean, NABH-certified, advanced imaging. The surgery was a complete success. I'm back to working full-time.",
 outcome: "Back to full work in 6 weeks",
 savings: "Saved KES 800,000 vs Nairobi private hospital",
 },
 {
 name: "Roshan Fernando",
 country: "Sri Lanka",
 flag: "🇱🇰",
 procedure: "Laser Piles Treatment",
 rating: 5,
 story: "I had grade 3 haemorrhoids for years but was afraid of surgery after hearing horror stories. Indira Hospital explained the laser procedure in detail over WhatsApp — painless, stitchless, 15-20 minutes. I flew from Colombo, had the procedure the next morning, and flew back 2 days later. No pain, no stitches, completely healed in 10 days.",
 outcome: "Same-day discharge · No stitches",
 savings: "Saved LKR 180,000 vs Colombo quote",
 },
];

const WA = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I read the international patient stories and want to enquire about treatment.")}`;

export default function InternationalTestimonialsPage() {
 return (
 <main className="min-h-screen bg-white dark:bg-slate-950">
 {/* ELITE CINEMATIC HERO */}
 <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"/>
 <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none animate-pulse"/>
 
 <SectionContainer className="relative z-10">
 <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
 <nav className="flex items-center justify-center lg:justify-start text-sm text-subtle-on-light mb-8 gap-1 flex-wrap">
 <Link href="/"className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4"/>
 <Link href="/patients/international"className="hover:text-white transition-colors">International</Link>
 <ChevronRight className="w-4 h-4"/>
 <span className="text-fuchsia-400 font-medium">Patient Stories</span>
 </nav>

 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg shadow-fuchsia-500/20">
 <Heart className="w-4 h-4 text-fuchsia-400"/> Real Stories · Verified Patients
 </span>
 
 <h1 className="elite-hero-title mb-8">
 International <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Success Stories.</span>
 </h1>
 
 <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light mb-10">
 Over 15,000 global patients have transformed their lives at Indira Hospital. Read their journeys in their own words.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
 <a href={WA} target="_blank"rel="noopener noreferrer"
 className="elite-button-primary">
 <MessageCircle className="w-5 h-5"/> Start Your Journey
 </a>
 <Link href="/patients/international/cost-estimator"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-white font-bold rounded-2xl hover:bg-white dark:bg-slate-900 transition-all">
 View Cost Guide <ArrowRight className="w-4 h-4 text-fuchsia-400"/>
 </Link>
 </div>
 </div>
 </SectionContainer>
 </section>

 {/* QUICK STATS BAR */}
 <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
 <SectionContainer className="py-8 flex flex-wrap justify-between gap-8 text-center sm:text-left">
 {[
 { v: "4.9★", l: "Average Rating"},
 { v: "50+", l: "Countries Served"},
 { v: "15,000+", l: "Lives Impacted"},
 { v: "100%", l: "Verified Stories"},
 ].map((stat, i) => (
 <div key={i} className="flex-1 min-w-[150px]">
 <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{stat.v}</div>
 <div className="text-xs font-bold text-subtle-on-light uppercase tracking-widest">{stat.l}</div>
 </div>
 ))}
 </SectionContainer>
 </div>

 <SectionContainer className="py-24 max-w-7xl mx-auto space-y-24">
 
 {/* TESTIMONIALS GRID ELITE */}
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {TESTIMONIALS.map((t, i) => (
 <div key={i} className="group relative bg-white dark:bg-slate-900 rounded-[3rem] p-8 border border-slate-100 dark:border-slate-800 hover:border-fuchsia-200 hover:shadow-2xl transition-all duration-500 flex flex-col">
 <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-50 dark:bg-fuchsia-900/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1/2 translate-x-1/2 pointer-events-none"/>
 
 <div className="flex items-start justify-between mb-8">
 <div className="flex items-center gap-4">
 <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-3xl shadow-inner border border-slate-100 dark:border-slate-700">
 {t.flag}
 </div>
 <div>
 <h3 className="font-black text-slate-900 dark:text-white text-base leading-tight uppercase tracking-tight">{t.name}</h3>
 <p className="text-xs font-bold text-subtle-on-light uppercase tracking-widest mt-1 flex items-center gap-1">
 <Globe2 className="w-3 h-3 text-fuchsia-500"/> {t.country}
 </p>
 </div>
 </div>
 <div className="flex gap-0.5">
 {[...Array(5)].map((_, idx) => (
 <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400"/>
 ))}
 </div>
 </div>

 <div className="mb-8 relative flex-1">
 <Quote className="w-8 h-8 text-fuchsia-500/10 absolute -top-4 -left-2"/>
 <p className="text-slate-600 dark:text-subtle-on-light font-medium leading-relaxed text-sm relative z-10 line-clamp-6">
 {t.story}
 </p>
 </div>

 <div className="pt-6 border-t border-slate-50 dark:border-slate-800 space-y-3">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-black uppercase tracking-widest border border-slate-100 dark:border-slate-700">
 🏥 {t.procedure}
 </div>
 <div className="flex flex-col gap-1.5 pl-1">
 <div className="flex items-center gap-2 text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">
 <CheckCircle2 className="w-3 h-3"/> {t.outcome}
 </div>
 <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
 <Award className="w-3 h-3"/> {t.savings}
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* COUNTRY HUB LINKS */}
 <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden text-center lg:text-left">
 <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(232,121,249,0.1),transparent_50%)] pointer-events-none"/>
 
 <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
 <div>
 <h2 className="elite-section-title text-white mb-6 uppercase">Find Your <br /><span className="text-fuchsia-400">Country Hub.</span></h2>
 <p className="text-subtle-on-light font-medium mb-10 leading-relaxed text-lg">Detailed travel guides, visa requirements, and specific success stories tailored for your home nation.</p>
 </div>

 <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
 {INTERNATIONAL_COUNTRIES.slice(0, 16).map((c, i) => (
 <Link key={i} href={`/patients/international/${c.slug}`} className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold hover:bg-white dark:bg-slate-900 transition-all flex items-center gap-2 group">
 <span>{c.flag}</span> {c.name}
 <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"/>
 </Link>
 ))}
 <Link href="/patients/international"className="px-5 py-2.5 bg-fuchsia-500 text-white rounded-xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-all">
 All 50+ Countries
 </Link>
 </div>
 </div>
 </div>

 {/* TRUST SIGNALS */}
 <section className="pt-24 border-t border-slate-100 dark:border-slate-800">
 <div className="grid lg:grid-cols-2 gap-16">
 <EntityFAQs 
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="testimonials"
 title="Global Services FAQs"
 description="Understanding the international patient journey."
 />
 <EntityReviews 
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="testimonials"
 title="More Patient Reviews"
 description="Verified Google & hospital feedback from around the world."
 />
 </div>
 </section>
 </SectionContainer>

 {/* CTA BAND ELITE */}
 <section className="bg-slate-900 rounded-t-[5rem] py-24 sm:py-32 relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.1),transparent_70%)] pointer-events-none"/>
 <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
 <h2 className="elite-section-title text-white mb-10 uppercase">Join Our <br /><span className="text-fuchsia-500">Success Stories.</span></h2>
 <p className="text-xl text-subtle-on-light font-light mb-16 max-w-2xl mx-auto leading-relaxed">Your journey to world-class health begins with a single conversation. Our international desk is ready to assist you.</p>
 
 <div className="flex flex-wrap justify-center gap-6">
 <a href={WA} target="_blank"rel="noopener noreferrer"
 className="elite-button-primary text-base">
 <MessageCircle className="w-6 h-6"/> WhatsApp Us Now
 </a>
 <Link href="/patients/international/cost-estimator"
 className="inline-flex items-center gap-4 px-12 py-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-white font-black rounded-[2.5rem] hover:bg-white dark:bg-slate-900 text-xl transition-all">
 View Price Guide
 </Link>
 </div>
 </div>
 </section>
 </main>
 );
}
