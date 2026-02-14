import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { MessageCircle, Zap, Heart, Activity, Bone, Eye, Baby, Scissors } from "lucide-react";

const WHATSAPP_NUMBER = "917010650063";

const treatments = [
    {
        title: "Laser Piles Treatment",
        description: "Painless laser surgery for piles, fissure, and fistula. Walk-in, walk-out same day. No bed rest needed.",
        icon: Zap,
        color: "from-rose-500 to-pink-600",
        shadow: "shadow-rose-500/25",
        slug: "general-surgery",
        whatsappMsg: "Hi, I need information about Laser Piles Treatment at Indira Hospital.",
        tag: "Most Popular",
    },
    {
        title: "Laparoscopic Surgery",
        description: "Minimally invasive keyhole surgery for hernia, gallbladder, appendix. Faster recovery, smaller scars.",
        icon: Scissors,
        color: "from-blue-500 to-indigo-600",
        shadow: "shadow-blue-500/25",
        slug: "general-surgery",
        whatsappMsg: "Hi, I need information about Laparoscopic Surgery at Indira Hospital.",
        tag: "Advanced",
    },
    {
        title: "Heart & Cardiac Care",
        description: "Complete cardiac care with advanced Cath Lab. Angiography, angioplasty, pacemaker, and heart failure management.",
        icon: Heart,
        color: "from-red-500 to-rose-600",
        shadow: "shadow-red-500/25",
        slug: "cardiology",
        whatsappMsg: "Hi, I need information about Cardiac Treatment at Indira Hospital.",
        tag: "Life-Saving",
    },
    {
        title: "Spine & Ortho Surgery",
        description: "Expert spine surgery, joint replacement, fracture care, and sports injury treatment by experienced surgeons.",
        icon: Bone,
        color: "from-teal-500 to-emerald-600",
        shadow: "shadow-teal-500/25",
        slug: "orthopaedics",
        whatsappMsg: "Hi, I need information about Spine/Ortho Surgery at Indira Hospital.",
        tag: "Specialist",
    },
    {
        title: "Gastroenterology",
        description: "Advanced endoscopy, liver disease management, and comprehensive digestive health care.",
        icon: Activity,
        color: "from-amber-500 to-orange-600",
        shadow: "shadow-amber-500/25",
        slug: "gastroenterology",
        whatsappMsg: "Hi, I need information about Gastroenterology treatment at Indira Hospital.",
    },
    {
        title: "Urology",
        description: "Kidney stone treatment, prostate care, urinary disorders, and minimally invasive urological procedures.",
        icon: Eye,
        color: "from-cyan-500 to-blue-600",
        shadow: "shadow-cyan-500/25",
        slug: "urology",
        whatsappMsg: "Hi, I need information about Urology treatment at Indira Hospital.",
    },
    {
        title: "Gynecology & Obstetrics",
        description: "Complete women's health care including high-risk pregnancy, laparoscopic gynecological surgery, and fertility support.",
        icon: Baby,
        color: "from-pink-500 to-fuchsia-600",
        shadow: "shadow-pink-500/25",
        slug: "gynecology",
        whatsappMsg: "Hi, I need information about Gynecology care at Indira Hospital.",
    },
    {
        title: "ICU & Emergency",
        description: "24/7 fully-equipped ICU and emergency department with trauma specialists and rapid response teams.",
        icon: Heart,
        color: "from-violet-500 to-purple-600",
        shadow: "shadow-violet-500/25",
        slug: "icu-emergency",
        whatsappMsg: "Hi, I need emergency/ICU information at Indira Hospital.",
        tag: "24/7",
    },
];

export function SignatureTreatments() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    title="Signature Treatments"
                    subtitle="What We're Known For"
                    description="Advanced medical procedures with proven outcomes and compassionate care."
                />

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {treatments.map((t) => (
                        <div
                            key={t.title}
                            className={`group relative rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-2xl ${t.shadow} transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
                        >
                            {/* Gradient accent top border */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color}`} />

                            {/* Tag */}
                            {t.tag && (
                                <span className={`inline-block text-xs font-bold text-white px-2.5 py-1 rounded-full bg-gradient-to-r ${t.color} mb-4`}>
                                    {t.tag}
                                </span>
                            )}

                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <t.icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">{t.title}</h3>
                            <p className="text-sm text-gray-600 mb-5 leading-relaxed">{t.description}</p>

                            {/* CTAs */}
                            <div className="flex flex-col gap-2">
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappMsg)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 px-4 transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Book on WhatsApp
                                </a>
                                <Link
                                    href={`/services/${t.slug}`}
                                    className="inline-flex items-center justify-center text-sm font-medium text-brand-700 hover:text-brand-900 py-1 transition-colors"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
