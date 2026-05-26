import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
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
 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/[0.03] dark:bg-fuchsia-600/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu -translate-y-1/2 translate-x-1/2 pointer-events-none" />
 <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-400/[0.02] dark:bg-fuchsia-400/5 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu translate-y-1/2 -translate-x-1/2 pointer-events-none" />

 <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
 <div className="flex justify-between items-end mb-12">
 <SectionHeader
 title="Advanced Minimally Invasive & Day-Care Surgeries"
 subtitle="Precision Meets Rapid Recovery"
 description="Experience the benefits of world-class laparoscopic and laser treatments. By utilizing keyhole techniques, we minimize scarring, significantly reduce pain, and ensure you return to the life you love—often on the exact same day."
 className="mb-0 text-left items-start"
 align="left"
 />
 <div className="hidden sm:flex items-center gap-6">
 <Link
 href="/doctor/near-me/treat"
 className="inline-flex items-center font-bold text-slate-500 hover:text-fuchsia-600 transition-colors"
 >
 View All Treatments <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 <a
 href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I want to know more about the signature treatments at Indira Super Speciality Hospital.")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="elite-button-primary rounded-full"
 >
 Enquire via WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
 </a>
 </div>
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
