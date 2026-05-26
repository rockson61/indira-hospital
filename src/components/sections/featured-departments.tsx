import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { DepartmentCard } from "@/components/entities/DepartmentCard";
import { getDepartments } from "@/lib/api";
import { getImageUrl } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";

export async function FeaturedDepartments() {
 const departments = await getDepartments().catch(() => []);

 if (!departments || departments.length === 0) return null;

 // Limit to 6 for homepage
 const featuredOnly = departments.slice(0, 6);

 return (
 <section className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
 <div className="mx-auto max-w-7xl px-6 lg:px-8">
 <div className="flex justify-between items-end mb-12">
 <SectionHeader
 title="Elite Medical Units"
 subtitle="Our Specialties"
 description="World-class medical care across a wide range of specialties, powered by clinical expertise and advanced technology."
 align="left"
 className="mb-0"
 />
 <Link
 href="/departments"
 className="hidden sm:inline-flex items-center font-bold text-fuchsia-600 hover:text-fuchsia-700 transition-colors"
 >
 View All Departments <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 </div>

 <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
 {featuredOnly.map((dept: any) => (
 <DepartmentCard
 key={dept.slug}
 department={dept}
 variant="grid"
 />
 ))}
 </div>
 </div>
 </section>
 );
}
