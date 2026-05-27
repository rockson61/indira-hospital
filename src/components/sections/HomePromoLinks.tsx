import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home as HomeIcon, Video, MapPin, Calculator, CreditCard } from "lucide-react";
import { HeartCardiogram, Stethoscope } from "healthicons-react/outline";
import { SectionContainer } from "@/components/ui/section-container";

export function HomePromoLinks() {
 return (
 <section className="py-16 bg-slate-50 dark:bg-slate-950">
 <SectionContainer>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

 {/* Promo 1: Heart Screening */}
 <div className="lg:col-span-1 relative rounded-[2rem] overflow-hidden group border border-slate-200/60 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none flex flex-col h-full bg-white dark:bg-slate-900">
 <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
 <div className="relative aspect-[16/9] w-full overflow-hidden">
 <Image
 src="/images/heart_screening.png"
 alt="Heart Screening Promo"
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 />
 </div>
 <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10">
 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Be True to Your Heart</h3>
 <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
 Schedule your affordable comprehensive heart screening package today. Early detection saves lives.
 </p>
 <Link href="/doctor/near-me/treat/cardiology" className="inline-flex items-center text-fuchsia-600 font-bold group/link">
 Schedule a Screening
 <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>

 {/* Promo 2: Home Visit */}
 <div className="lg:col-span-1 relative rounded-[2rem] overflow-hidden group border border-slate-200/60 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none flex flex-col h-full bg-white dark:bg-slate-900">
 <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 text-slate-900 dark:text-white h-full">
 <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
 <HomeIcon className="w-8 h-8 text-blue-600 dark:text-blue-300" />
 </div>
 <h3 className="text-2xl font-black mb-4">DispatchHealth & Indira Hospital</h3>
 <p className="text-slate-600 dark:text-blue-100/80 mb-8 flex-grow">
 Teaming up to bring world-class healthcare services directly to your home. Expert care, zero travel.
 </p>
 <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-colors font-bold group/link mt-auto text-blue-700 dark:text-white shadow-sm dark:shadow-none">
 Request a Home Visit
 <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>

 {/* Quick Links List */}
 <div className="lg:col-span-1 rounded-[2rem] bg-white dark:bg-slate-900 p-8 md:p-10 border border-slate-200/60 dark:border-slate-800 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
 <span className="w-2 h-8 bg-fuchsia-500 rounded-full" />
 Quick Links
 </h3>
 <div className="space-y-4 flex-grow flex flex-col justify-between">
 <Link href="/doctors" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group">
 <div className="p-2 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-2xl text-fuchsia-600 group-hover:scale-110 transition-transform">
 <Stethoscope className="w-5 h-5" />
 </div>
 <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-fuchsia-600 transition-colors">Find a Doctor</span>
 </Link>

 <Link href="/doctor/near-me" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group">
 <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
 <MapPin className="w-5 h-5" />
 </div>
 <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-fuchsia-600 transition-colors">Find a Location</span>
 </Link>

 <Link href="/health-packages" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group">
 <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 group-hover:scale-110 transition-transform">
 <Calculator className="w-5 h-5" />
 </div>
 <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-fuchsia-600 transition-colors">Estimate Your Cost</span>
 </Link>

 <Link href="/pay-bill" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group">
 <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-2xl text-amber-600 group-hover:scale-110 transition-transform">
 <CreditCard className="w-5 h-5" />
 </div>
 <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-fuchsia-600 transition-colors">Pay a bill</span>
 </Link>

 <Link href="/blog" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group">
 <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-2xl text-violet-600 group-hover:scale-110 transition-transform">
 <Video className="w-5 h-5" />
 </div>
 <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-fuchsia-600 transition-colors">Watch Videos</span>
 </Link>
 </div>
 </div>

 </div>
 </SectionContainer>
 </section>
 );
}
