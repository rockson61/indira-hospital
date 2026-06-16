import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FOOTER_LINKS } from "@/lib/data/footer-links";
import { LOCATION_HIERARCHY } from "@/lib/data/location-hierarchy";
import { Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";
import { HospitalCard } from "@/components/entities/HospitalCard";

export function Footer() {
 const currentYear = new Date().getFullYear();

 return (
 <footer className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 {/* Top: Brand + Contact */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
 <div className="lg:col-span-1">
 <HospitalCard />
 </div>

 {/* Services Column */}
 <div>
 <h3 className="elite-section-title !text-sm !leading-tight mb-5 ">Services</h3>
 <ul className="space-y-2.5">
 {FOOTER_LINKS.medicalServices.slice(0, 10).map((item) => (
 <li key={item.name}>
 <Link prefetch={false} href={item.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight">{item.name}</Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Procedures Column */}
 <div>
 <h3 className="elite-section-title !text-sm !leading-tight mb-5 ">Key Procedures</h3>
 <ul className="space-y-2.5">
 {FOOTER_LINKS.procedures.slice(0, 10).map((item) => (
 <li key={item.name}>
 <Link prefetch={false} href={item.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight">{item.name}</Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Quick Links + Legal */}
 <div>
 <h3 className="elite-section-title !text-sm !leading-tight mb-5 ">Elite Network</h3>
 <ul className="space-y-2.5">
 <li><Link prefetch={false} href="/" className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight">Homepage</Link></li>
 <li><Link prefetch={false} href="/doctor/near-me/treat" className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight">All Treatments</Link></li>
 <li><Link prefetch={false} href="/doctors" className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight">Find Doctors</Link></li>
 <li><Link prefetch={false} href="/doctor/near-me" className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight">Our Locations</Link></li>
 <li><Link prefetch={false} href="/diagnostics" className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight">Diagnostics & Scans</Link></li>
 <li><Link prefetch={false} href="/patients/international" className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight">International Patients</Link></li>
 </ul>
 <h3 className="elite-section-title !text-sm !leading-tight mb-4 mt-8 ">Patient Resources</h3>
 <ul className="space-y-2.5">
 {FOOTER_LINKS.patientCare.map((item) => (
 <li key={item.name}>
 <Link prefetch={false} href={item.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight">{item.name}</Link>
 </li>
 ))}
 </ul>
 </div>
 </div>

 {/* Middle: Locations Hierarchy */}
 <div className="border-t border-slate-200 dark:border-slate-800 py-10">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
 {LOCATION_HIERARCHY.map((group) => (
 <div key={group.region}>
 <h4 className="text-[11px] font-bold text-fuchsia-600 dark:text-fuchsia-500 uppercase tracking-widest mb-4">{group.region}</h4>
 <div className="flex flex-col gap-2.5">
 {group.locations.map((loc) => (
 <Link key={loc.name} prefetch={false} href={loc.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-medium">
 {loc.name}
 </Link>
 ))}
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Our Locations Maps */}
 <div className="border-t border-slate-200 dark:border-slate-800 py-12">
 <h3 className="elite-section-title !text-sm !leading-tight mb-8 ">Visit Our Specialized Units</h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {/* Katpadi Unit */}
 <div className="group">
 <h4 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-400 mb-4 group-hover:translate-x-1 transition-transform">
 <MapPin className="w-3.5 h-3.5" strokeWidth={3} />
 Katpadi (Main Hospital)
 </h4>
 <div className="aspect-video rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-clay-dark shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-950 p-1.5 transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
 <iframe 
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33540.67112314793!2d79.07591166690614!3d12.922276485703463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47185bb9c311%3A0x86287a4d543bf128!2sIndira%20Superspeciality%20Hospital!5e1!3m2!1sen!2sin!4v1774971454932!5m2!1sen!2sin" 
 className="w-full h-full rounded-[1.75rem] border-0"
 allowFullScreen
 loading="lazy" 
 referrerPolicy="no-referrer-when-downgrade"
 />
 </div>
 </div>

 {/* Near CMC Unit */}
 <div className="group">
 <h4 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-400 mb-4 group-hover:translate-x-1 transition-transform">
 <MapPin className="w-3.5 h-3.5" strokeWidth={3} />
 Near CMC (Nursing Home)
 </h4>
 <div className="aspect-video rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-clay-dark shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-950 p-1.5 transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
 <iframe 
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4192.547340574835!2d79.1401831!3d12.9244533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3890563e2d3f%3A0xd059cd5df955c459!2sIndira%20Nursing%20Home!5e1!3m2!1sen!2sin!4v1774971373744!5m2!1sen!2sin" 
 className="w-full h-full rounded-[1.75rem] border-0"
 allowFullScreen
 loading="lazy" 
 referrerPolicy="no-referrer-when-downgrade"
 />
 </div>
 </div>

 {/* Konavattum Unit */}
 <div className="group">
 <h4 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-400 mb-4 group-hover:translate-x-1 transition-transform">
 <MapPin className="w-3.5 h-3.5" strokeWidth={3} />
 Konavattum (Nursing Home)
 </h4>
 <div className="aspect-video rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-clay-dark shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-950 p-1.5 transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
 <iframe 
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33540.67090632708!2d79.07591167910155!3d12.922278099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3900253ba9c1%3A0x5a6ce10c5c8e5f34!2sIndra%20nursing%20home!5e1!3m2!1sen!2sin!4v1774971424450!5m2!1sen!2sin" 
 className="w-full h-full rounded-[1.75rem] border-0"
 allowFullScreen
 loading="lazy" 
 referrerPolicy="no-referrer-when-downgrade"
 />
 </div>
 </div>
 </div>
 </div>


 {/* Bottom Bar */}
 <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
 <p className="text-sm text-slate-500 dark:text-slate-300 font-medium">
 &copy; {currentYear} {siteConfig.name}. All rights reserved.
 </p>
 <div className="flex items-center gap-6">
 <Link prefetch={false} href="/privacy-policy" className="text-sm text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-300 transition-colors font-medium">Privacy</Link>
 <Link prefetch={false} href="/terms" className="text-sm text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-300 transition-colors font-medium">Terms</Link>
 <Link prefetch={false} href="/sitemap" className="text-sm text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-300 transition-colors font-medium">Sitemap</Link>
 <Link prefetch={false} href="/sitemap.xml" className="text-sm text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-300 transition-colors font-medium">XML</Link>
 </div>
 </div>

 {/* Bottom SEO & Legal Text */}
 <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col gap-4 text-xs text-slate-500 dark:text-slate-400 text-center md:text-left">
 <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 font-bold text-slate-600 dark:text-slate-300">
 <Link prefetch={false} href="/" className="hover:text-fuchsia-600 transition-colors">Best Hospital in Vellore</Link>
 <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
 <Link prefetch={false} href="/doctor/near-me" className="hover:text-fuchsia-600 transition-colors">Hospital near me</Link>
 <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
 <Link prefetch={false} href="/doctors" className="hover:text-fuchsia-600 transition-colors">Find best Doctors in Vellore</Link>
 </div>
 <div className="space-y-2 max-w-5xl md:mx-0 mx-auto leading-relaxed">
 <p>
 <strong>Disclaimer:</strong> This website is for informational purposes only and is not a substitute for professional medical treatment. Please visit a doctor for treatment.
 </p>
 <p>
 All content is medically reviewed by Dr. Karan Shankar and Dr. Rockson Samuel.
 </p>
 <p className="pt-2 flex items-center justify-center md:justify-start gap-1 font-medium">
 Made with <span className="text-red-500">❤️</span> by <span className="font-bold text-slate-700 dark:text-slate-200">Dr. Rockson Samuel</span>
 </p>
 </div>
 </div>
 </div>
 </footer>
 );
}
