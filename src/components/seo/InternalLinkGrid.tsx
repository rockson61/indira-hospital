import Link from "next/link";
import { ArrowRight, MapPin, Users, Layers } from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import { getServices, getDoctors, getDepartments } from "@/lib/api";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { SectionContainer } from "@/components/ui/section-container";

interface InternalLinkGridProps {
 type: "services" | "doctors" | "departments" | "locations" | "treatments" | "diagnostics" | "health-packages";
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
 diagnostics: Stethoscope,
 "health-packages": Layers,
};

const COLORS = {
 services: "text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-950/30 border-fuchsia-100 dark:border-fuchsia-900/50 hover:border-fuchsia-300 dark:hover:border-fuchsia-700",
 treatments: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-700",
 doctors: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700",
 departments: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900/50 hover:border-violet-300 dark:hover:border-violet-700",
 locations: "text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/50 hover:border-amber-300 dark:hover:border-amber-700",
 diagnostics: "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/30 border-pink-100 dark:border-pink-900/50 hover:border-pink-300 dark:hover:border-pink-700",
 "health-packages": "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900/50 hover:border-indigo-300 dark:hover:border-indigo-700",
};

const DEFAULTS = {
 services: { title: "Explore Our Treatments", subtitle: "Popular Services", href: "/doctor/near-me/treat" },
 treatments: { title: "Specific Procedures", subtitle: "Available Surgeries", href: "/doctor/near-me/treat" },
 doctors: { title: "Meet Our Specialists", subtitle: "Expert Doctors", href: "/doctors" },
 departments: { title: "Our Medical Departments", subtitle: "Departments", href: "/departments" },
 locations: { title: "We Serve Your Area", subtitle: "Our Locations", href: "/doctor/near-me" },
 diagnostics: { title: "Accurate Lab Tests", subtitle: "Indira Diagnostics", href: "/diagnostics" },
 "health-packages": { title: "Complete Health Screenings", subtitle: "Wellness Packages", href: "/health-packages" },
};

export async function InternalLinkGrid({
 type,
 title,
 subtitle,
 limit = 12,
 excludeSlug,
 parentSlug,
 className="",
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
 } else if (type === "diagnostics") {
 const data = await (await import("@/lib/api")).getDiagnostics().catch(() => []);
 items = data
 .filter((d: any) => d.slug !== excludeSlug)
 .slice(0, limit)
 .map((d: any) => ({ name: d.name, slug: d.slug, url: `/diagnostics/${d.slug}` }));
 } else if (type === "health-packages") {
 const data = await (await import("@/lib/api")).getHealthPackages().catch(() => []);
 items = data
 .filter((p: any) => p.slug !== excludeSlug)
 .slice(0, limit)
 .map((p: any) => ({ name: p.title, slug: p.slug, url: `/health-packages/${p.slug}` }));
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
 <h2 className="elite-section-title text-slate-900 dark:text-white">
 {displayTitle}
 </h2>
 </div>

 <nav aria-label={`Links to related ${displayTitle.toLowerCase()}`}>
 <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
 {items.map((item) => (
 <li key={item.slug}>
 <Link
 href={item.url}
 prefetch={false}
 className={`group flex items-center justify-between px-4 py-3 rounded-2xl border text-[13px] font-bold transition-all duration-300 hover:shadow-clay dark:hover:shadow-fuchsia-500/10 hover:-translate-y-1 ${colors} bg-white dark:bg-slate-900 relative overflow-hidden`}
 >
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent -translate-x-[150%] skew-x-[-25deg] group-hover:translate-x-[150%] transition-transform duration-1000" />
 
 <div className="flex items-center gap-3 w-[85%] relative z-10">
 <div className="p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-700/50 shadow-sm shrink-0">
 <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
 </div>
 <span className="truncate text-slate-700 dark:text-slate-300 group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-400 leading-tight block w-full">{item.name}</span>
 </div>
 <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fuchsia-600 dark:text-fuchsia-400 relative z-10 shrink-0" />
 </Link>
 </li>
 ))}
 </ul>
 </nav>

 <div className="mt-8 text-center">
 <Link
 href={defaults.href}
 prefetch={false}
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
