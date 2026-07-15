import Link from "next/link";
import { ArrowRight, MapPin, Users, Layers } from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import { getServices, getDoctors, getDepartments } from "@/lib/api";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { SectionContainer } from "@/components/ui/section-container";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { ServiceCard } from "@/components/entities/ServiceCard";
import { DepartmentCard } from "@/components/entities/DepartmentCard";
import { LocationCard } from "@/components/entities/LocationCard";

interface UnifiedEntitySectionProps {
 type: "services" | "doctors" | "departments" | "locations" | "treatments";
 title?: string;
 subtitle?: string;
 featuredLimit?: number; // How many large rich cards to show (e.g. 4 or 6)
 linkLimit?: number; // How many small links to show after the cards (e.g. 12 or 24)
 excludeSlug?: string;
 parentSlug?: string; // specifically for 'treatments' type
 className?: string;
 city?: string; // Pass when rendered on a location hub page
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

const DEFAULTS: Record<string, { title: string; subtitle: string; href: string }> = {
 services: { title: "Explore Our Treatments", subtitle: "Popular Services", href: "/doctor/near-me/treat" },
 treatments: { title: "Specific Procedures", subtitle: "Available Surgeries", href: "/doctor/near-me/treat" },
 doctors: { title: "Meet Our Specialists", subtitle: "Expert Doctors", href: "/doctors" },
 departments: { title: "Our Medical Departments", subtitle: "Our Departments", href: "/departments" },
 locations: { title: "We Serve Your Area", subtitle: "Our Locations", href: "/doctor/near-me" },
};

export async function UnifiedEntitySection({
 type,
 title,
 subtitle,
 featuredLimit = 6,
 linkLimit = 16,
 excludeSlug,
 parentSlug,
 className="",
 city,
}: UnifiedEntitySectionProps) {
 const defaults = DEFAULTS[type];
 const displayTitle = title || defaults.title;
 const displaySubtitle = subtitle || defaults.subtitle;
 const Icon = ICONS[type];
 const colors = COLORS[type];

 let allItems: any[] = [];

 // 1. Fetch Master Data
 try {
 if (type === "services") {
 const data = await getServices().catch(() => []);
 allItems = data.filter((s: any) => s.slug !== excludeSlug);
 } else if (type === "treatments" && parentSlug) {
 const data = (await import("@/lib/data/treatment-data")).getAllTreatments();
 allItems = data.filter(t => t.parentServiceSlug === parentSlug && t.slug !== excludeSlug);
 } else if (type === "doctors") {
 const data = await getDoctors().catch(() => []);
 allItems = data.filter((d: any) => d.slug !== excludeSlug);
 } else if (type === "departments") {
 const data = await getDepartments().catch(() => []);
 allItems = data.filter((d: any) => d.slug !== excludeSlug);
 } else if (type === "locations") {
 allItems = tamilNaduLocations.filter(l => l.slug !== excludeSlug);
 }
 } catch {
 return null;
 }

 if (!allItems.length) return null;

 // 2. Split Data: Featured Cards vs. Remaining Links
 // Note: 'treatments' type doesn't have a large UI card variant historically, so we treat it all as links if needed, 
 // or just pass 0 to featuredLimit when calling it.
 const featuredItems = allItems.slice(0, featuredLimit);
 const linkItems = allItems.slice(featuredLimit, featuredLimit + linkLimit).map((item: any) => {
 const name = item.title || item.name;
 let url = "";

 if (type === "services") {
 url = city ? `/doctor/near-me/${city}/${item.slug}` : `/doctor/near-me/treat/${item.slug}`;
 }
 else if (type === "treatments") {
 // Treatments stay in /treat/ hierarchy but could be simplified if needed.
 url = `/doctor/near-me/treat/${item.parentServiceSlug}/${item.slug}`;
 }
 else if (type === "doctors") {
 if (city) {
 url = `/doctor/near-me/${city}/${item.slug}`;
 } else {
 const dept = typeof item.department === 'string' ? item.department : item.department?.name || item.specialty || 'specialist';
 const specialtySlug = dept.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '');
 url = `/doctor/${specialtySlug}/${item.slug}`;
 }
 }
 else if (type === "departments") {
 url = city ? `/doctor/near-me/${city}/${item.slug}` : `/departments/${item.slug}`;
 }
 else if (type === "locations") url = `/doctor/near-me/${item.slug}`;

 return { name, slug: item.slug, url };
 });

 let FeaturedContent: React.ReactNode = null;

 // 3. Render Large Cards
 if (featuredItems.length > 0) {
 if (type === "services") {
 FeaturedContent = (
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
 {featuredItems.map((s: any) => <ServiceCard key={s.slug || s.id} service={s} variant="detail" />)}
 </div>
 );
 } else if (type === "doctors") {
 FeaturedContent = (
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
 {featuredItems.map((d: any) => <DoctorCard key={d.slug || d.id} doctor={d} variant="grid" city={city} />)}
 </div>
 );
 } else if (type === "departments") {
 FeaturedContent = (
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
 {featuredItems.map((d: any) => <DepartmentCard key={d.slug || d.id} department={d} variant="grid" city={city} />)}
 </div>
 );
 } else if (type === "locations") {
 FeaturedContent = (
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
 {featuredItems.map((l: any) => <LocationCard key={l.slug} location={l} variant="card" />)}
 </div>
 );
 }
 }

 // 4. Render Layout
 return (
 <section className={`py-20 ${className}`}>
 <SectionContainer>
 {/* Unified Header */}
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
 <div>
 <span className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-400 mb-3 flex items-center gap-2">
 <Icon className="w-4 h-4" /> {displaySubtitle}
 </span>
 <h2 className="elite-section-title text-slate-900 dark:text-white">
 {displayTitle}
 </h2>
 </div>
 <Link
 href={defaults.href}
 className="group flex items-center gap-2 text-sm font-black text-fuchsia-600 hover:text-fuchsia-700 dark:text-fuchsia-400 dark:hover:text-fuchsia-300 uppercase tracking-widest transition-colors"
 >
 View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>

 {/* Top: Rich Cards */}
 {FeaturedContent}

 {/* Bottom: SEO Link Grid (Only if remaining items exist) */}
 {linkItems.length > 0 && (
 <div className="mt-8">
 <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-6 flex items-center gap-2">
 <ArrowRight className="w-4 h-4" /> Also Explore {displayTitle}
 </h3>
 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
 {linkItems.map((item) => (
 <Link
 key={item.slug}
 href={item.url}
 className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-clay-sm ${colors}`}
 >
 <Icon className="w-4 h-4 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
 <span className="truncate text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{item.name}</span>
 </Link>
 ))}
 </div>
 </div>
 )}
 </SectionContainer>
 </section>
 );
}
