import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/entities/ServiceCard";
import { getServices } from "@/lib/api";

export async function SignatureTreatments() {
    let services: any[] = [];

    try {
        services = await getServices().catch(() => []);
    } catch {
        services = [];
    }

    if (!services || services.length === 0) return null;

    const featured = services.slice(0, 8);

    return (
        <section className="py-28 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
            {/* Background Glows — subtle in light, visible in dark */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/[0.03] dark:bg-fuchsia-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-400/[0.02] dark:bg-fuchsia-400/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <SectionHeader
                        title="Surgeries That Get You Back to Life Faster"
                        subtitle="Same-Day Discharge Procedures"
                        description="Why spend a week recovering when you could be home tonight? Our laser & laparoscopic procedures cut recovery from weeks to hours."
                        className="mb-0 text-left items-start"
                        align="left"
                    />
                    <Link
                        href="/doctor/near-me/treat"
                        className="hidden sm:inline-flex items-center font-bold text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 transition-colors"
                    >
                        View All Treatments <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featured.map((service: any) => (
                        <ServiceCard
                            key={service.slug}
                            service={service}
                            variant="poster"
                            className="group"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
