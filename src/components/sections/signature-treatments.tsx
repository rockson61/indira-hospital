import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { MessageCircle } from "lucide-react";
import { getServices } from "@/lib/api";
import { SEED_DATA } from "@/lib/data/seed-data";

const WHATSAPP_NUMBER = "917010650063";

// Color assignments by index for visual variety
const cardStyles = [
    { color: "from-rose-500 to-pink-600", shadow: "shadow-rose-500/25" },
    { color: "from-blue-500 to-indigo-600", shadow: "shadow-blue-500/25" },
    { color: "from-red-500 to-rose-600", shadow: "shadow-red-500/25" },
    { color: "from-teal-500 to-emerald-600", shadow: "shadow-teal-500/25" },
    { color: "from-amber-500 to-orange-600", shadow: "shadow-amber-500/25" },
    { color: "from-cyan-500 to-blue-600", shadow: "shadow-cyan-500/25" },
    { color: "from-pink-500 to-fuchsia-600", shadow: "shadow-pink-500/25" },
    { color: "from-violet-500 to-purple-600", shadow: "shadow-violet-500/25" },
];

export async function SignatureTreatments() {
    let services: any[] = [];

    try {
        services = await getServices().catch(() => []);
    } catch {
        services = [];
    }

    // Fallback to seed data
    if (!services.length) {
        services = SEED_DATA.services.map((s) => ({
            title: s.title,
            slug: s.slug,
            short_description: s.short_description,
        }));
    }

    // Limit to 8 for homepage
    const featured = services.slice(0, 8);

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    title="Signature Treatments"
                    subtitle="What We're Known For"
                    description="Advanced medical procedures with proven outcomes and compassionate care."
                />

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featured.map((service: any, index: number) => {
                        const style = cardStyles[index % cardStyles.length];
                        const desc = (service.short_description || "").replace(/<[^>]*>?/gm, "").substring(0, 120);
                        const whatsappMsg = `Hi, I need information about ${service.title} at Indira Hospital.`;

                        return (
                            <div
                                key={service.slug}
                                className={`group relative rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-2xl ${style.shadow} transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.color}`} />

                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${style.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-white font-bold text-lg">{service.title?.charAt(0) || "S"}</span>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600 mb-5 leading-relaxed">{desc}{desc.length >= 120 ? "..." : ""}</p>

                                <div className="flex flex-col gap-2">
                                    <a
                                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 px-4 transition-colors"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        Book on WhatsApp
                                    </a>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center justify-center text-sm font-medium text-brand-700 hover:text-brand-900 py-1 transition-colors"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
