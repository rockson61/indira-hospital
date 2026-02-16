import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { MessageCircle, ArrowRight, Clock } from "lucide-react";
import { ServiceCard } from "@/components/entities/ServiceCard";
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
        <section className="py-32 bg-slate-900 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <SectionHeader
                        title="Signature Treatments"
                        subtitle="Advanced Clinical Excellence"
                        description="We define the standards of healthcare in the region through specialized procedures and surgical precision."
                        className="text-white mb-0 text-left items-start"
                        align="left"
                    />
                    <Link
                        href="/services"
                        className="hidden sm:inline-flex items-center font-bold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        View All Treatments <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featured.map((service: any, index: number) => {
                        const style = cardStyles[index % cardStyles.length];
                        const desc = (service.short_description || "").replace(/<[^>]*>?/gm, "").substring(0, 100);
                        const whatsappMsg = `Hi, I need information about ${service.title} at Indira Hospital.`;

                        return (
                            <ServiceCard
                                key={service.slug}
                                service={service}
                                variant="poster"
                                className="group"
                                cardClassName="bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/10"
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
