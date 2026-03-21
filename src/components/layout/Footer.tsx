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
                        <h3 className="elite-section-title !text-sm !leading-tight mb-5 !italic">Services</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.medicalServices.slice(0, 10).map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight italic">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Procedures Column */}
                    <div>
                        <h3 className="elite-section-title !text-sm !leading-tight mb-5 !italic">Key Procedures</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.procedures.slice(0, 10).map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight italic">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links + Legal */}
                    <div>
                        <h3 className="elite-section-title !text-sm !leading-tight mb-5 !italic">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.quickLinks.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight italic">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <h3 className="elite-section-title !text-sm !leading-tight mb-4 mt-8 !italic">Patient Care</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.patientCare.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-bold uppercase tracking-tight italic">{item.name}</Link>
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
                                        <Link key={loc.name} href={loc.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-medium">
                                            {loc.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-300 font-medium">
                        &copy; {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="text-sm text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-300 transition-colors font-medium">Privacy</Link>
                        <Link href="/terms" className="text-sm text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-300 transition-colors font-medium">Terms</Link>
                        <Link href="/sitemap.xml" className="text-sm text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-300 transition-colors font-medium">Sitemap</Link>
                    </div>
                </div>

                {/* Bottom SEO & Legal Text */}
                <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col gap-4 text-xs text-slate-500 dark:text-slate-400 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 font-bold text-slate-600 dark:text-slate-300">
                        <Link href="/" className="hover:text-fuchsia-600 transition-colors">Best Hospital in Vellore</Link>
                        <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
                        <Link href="/doctor/near-me" className="hover:text-fuchsia-600 transition-colors">Hospital near me</Link>
                        <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
                        <Link href="/doctors" className="hover:text-fuchsia-600 transition-colors">Find best Doctors in Vellore</Link>
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
