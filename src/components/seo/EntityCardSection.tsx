import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServices, getDoctors, getDepartments } from "@/lib/api";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { SectionContainer } from "@/components/ui/section-container";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { ServiceCard } from "@/components/entities/ServiceCard";
import { DepartmentCard } from "@/components/entities/DepartmentCard";
import { LocationCard } from "@/components/entities/LocationCard";

interface EntityCardSectionProps {
 type: "services" | "doctors" | "departments" | "locations";
 title?: string;
 subtitle?: string;
 limit?: number;
 excludeSlug?: string;
 className?: string;
}

const DEFAULTS: Record<string, { title: string; subtitle: string; href: string }> = {
 services: { title: "Explore Our Treatments", subtitle: "Popular Services", href: "/services" },
 doctors: { title: "Meet Our Specialists", subtitle: "Expert Doctors", href: "/doctors" },
 departments: { title: "Our Medical Departments", subtitle: "Our Medical Departments", href: "/departments" },
 locations: { title: "We Serve Your Area", subtitle: "Our Locations", href: "/doctor/near-me" },
};

export async function EntityCardSection({
 type,
 title,
 subtitle,
 limit = 6,
 excludeSlug,
 className="",
}: EntityCardSectionProps) {
 const defaults = DEFAULTS[type];
 const displayTitle = title || defaults.title;
 const displaySubtitle = subtitle || defaults.subtitle;

 let items: any[] = [];
 try {
 if (type === "services") {
 const data = await getServices().catch(() => []);
 items = data.filter((s: any) => s.slug !== excludeSlug).slice(0, limit);
 } else if (type === "doctors") {
 const data = await getDoctors().catch(() => []);
 items = data.filter((d: any) => d.slug !== excludeSlug).slice(0, limit);
 } else if (type === "departments") {
 const data = await getDepartments().catch(() => []);
 items = data.filter((d: any) => d.slug !== excludeSlug).slice(0, limit);
 } else if (type === "locations") {
 items = tamilNaduLocations.filter(l => l.slug !== excludeSlug).slice(0, limit);
 }
 } catch {
 return null;
 }

 if (!items.length) return null;

 return (
 <section className={`py-20 ${className}`}>
 <SectionContainer>
 <div className="text-center mb-14">
 <span className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-600 mb-3 block">
 {displaySubtitle}
 </span>
 <h2 className="elite-section-title text-slate-900 dark:text-white">
 {displayTitle}
 </h2>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
 {items.map((item: any) => {
 if (type === "services") return <ServiceCard key={item.slug || item.id} service={item} variant="detail" />;
 if (type === "doctors") return <DoctorCard key={item.slug || item.id} doctor={item} variant="grid" />;
 if (type === "departments") return <DepartmentCard key={item.slug || item.id} department={item} variant="grid" />;
 if (type === "locations") return <LocationCard key={item.slug} location={item} variant="card" />;
 return null;
 })}
 </div>

 <div className="mt-12 text-center">
 <Link
 href={defaults.href}
 prefetch={false}
 className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:bg-fuchsia-700 dark:hover:bg-fuchsia-200 hover:scale-[1.02] transition-all shadow-clay text-sm"
 >
 View All {displaySubtitle}
 <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </SectionContainer>
 </section>
 );
}
