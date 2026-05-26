import { SectionHeader } from "@/components/ui/section-header";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { getDoctors } from "@/lib/api";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function FeaturedDoctors() {
 let doctors: any[] = [];
 try {
 doctors = await getDoctors().catch(() => []);
 } catch {
 doctors = [];
 }

 if (!doctors || doctors.length === 0) return null;

 const featuredOnly = doctors.slice(0, 4);

 return (
 <section className="py-24 bg-[#FAFAFA] dark:bg-slate-950">
 <div className="mx-auto max-w-7xl px-6 lg:px-8">
 <div className="flex justify-between items-end mb-12">
 <SectionHeader
 title="Our Medical Experts"
 subtitle="Doctors"
 description="Meet our team of experienced consultants and surgeons."
 className="mb-0 text-left items-start"
 align="left"
 />
 <Link
 href="/doctors"
 className="elite-button-secondary"
 >
 View All <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </div>

 <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
 {featuredOnly.map((doc: any) => (
 <DoctorCard key={doc.slug} doctor={doc} variant="grid" />
 ))}
 </div>

 <div className="mt-12 text-center sm:hidden">
 <Link
 href="/doctors"
 className="elite-button-secondary"
 >
 View All Doctors <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </div>
 </div>
 </section>
 );
}
