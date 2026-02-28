import Link from "next/link";
import { ArrowRight, Stethoscope, MapPin, Users, Layers } from "lucide-react";
import { getServices, getDoctors, getDepartments } from "@/lib/api";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { SectionContainer } from "@/components/ui/section-container";

interface InternalLinkGridProps {
    type: "services" | "doctors" | "departments" | "locations" | "treatments";
    title?: string;
    subtitle?: string;
    limit?: number;
    excludeSlug?: string;
    parentSlug?: string;
    className?: string;
}

const ICONS = {
    services: Stethoscope,
    treatments: Stethoscope,
    doctors: Users,
    departments: Layers,
    locations: MapPin,
};

const COLORS = {
    services: "text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-950/30 border-fuchsia-100 dark:border-fuchsia-900/50 hover:border-fuchsia-300 dark:hover:border-fuchsia-700",
    treatments: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-700",
    doctors: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700",
    departments: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900/50 hover:border-violet-300 dark:hover:border-violet-700",
    locations: "text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/50 hover:border-amber-300 dark:hover:border-amber-700",
};

const DEFAULTS = {
    services: { title: "Explore Our Treatments", subtitle: "Popular Services", href: "/services" },
    treatments: { title: "Specific Procedures", subtitle: "Available Surgeries", href: "/doctor/near-me/treat" },
    doctors: { title: "Meet Our Specialists", subtitle: "Expert Doctors", href: "/doctors" },
    departments: { title: "Centres of Excellence", subtitle: "Departments", href: "/departments" },
    locations: { title: "We Serve Your Area", subtitle: "Our Locations", href: "/doctor/near-me" },
};

export async function InternalLinkGrid({
    type,
    title,
    subtitle,
    limit = 12,
    excludeSlug,
    parentSlug,
    className = "",
}: InternalLinkGridProps) {
    let items: { name: string; slug: string; url: string }[] = [];

    try {
        if (type === "services") {
            const data = await getServices().catch(() => []);
            items = data
                .filter((s: any) => s.slug !== excludeSlug)
                .slice(0, limit)
                .map((s: any) => ({ name: s.title || s.name, slug: s.slug, url: `/doctor/near-me/treat/${s.slug}` }));
        } else if (type === "treatments" && parentSlug) {
            const data = (await import("@/lib/data/treatment-data")).getAllTreatments();
            items = data
                .filter(t => t.parentServiceSlug === parentSlug && t.slug !== excludeSlug)
                .slice(0, limit)
                .map(t => ({ name: t.title, slug: t.slug, url: `/doctor/near-me/treat/${t.parentServiceSlug}/${t.slug}` }));
        } else if (type === "doctors") {
            const data = await getDoctors().catch(() => []);
            items = data
                .filter((d: any) => d.slug !== excludeSlug)
                .slice(0, limit)
                .map((d: any) => {
                    const dept = typeof d.department === 'string' ? d.department : d.department?.name || d.specialty || 'specialist';
                    const specialtySlug = dept.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return { name: d.name, slug: d.slug, url: `/doctor/${specialtySlug}/${d.slug}` };
                });
        } else if (type === "departments") {
            const data = await getDepartments().catch(() => []);
            items = data
                .filter((d: any) => d.slug !== excludeSlug)
                .slice(0, limit)
                .map((d: any) => ({ name: d.title || d.name, slug: d.slug, url: `/departments/${d.slug}` }));
        } else if (type === "locations") {
            items = tamilNaduLocations
                .filter(l => l.slug !== excludeSlug)
                .slice(0, limit)
                .map(l => ({ name: l.name, slug: l.slug, url: `/doctor/near-me/${l.slug}` }));
        }
    } catch {
        return null;
    }

    if (!items.length) return null;

    const Icon = ICONS[type];
    const colors = COLORS[type];
    const defaults = DEFAULTS[type];
    const displayTitle = title || defaults.title;
    const displaySubtitle = subtitle || defaults.subtitle;

    return (
        <section className={`py-20 ${className}`}>
            <SectionContainer>
                <div className="text-center mb-12">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block">
                        {displaySubtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        {displayTitle}
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {items.map((item) => (
                        <Link
                            key={item.slug}
                            href={item.url}
                            className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-md ${colors}`}
                        >
                            <Icon className="w-4 h-4 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                            <span className="truncate text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{item.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href={defaults.href}
                        className="inline-flex items-center gap-2 text-sm font-black text-fuchsia-600 hover:text-fuchsia-700 uppercase tracking-widest transition-colors"
                    >
                        View All {displaySubtitle}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </SectionContainer>
        </section>
    );
}
