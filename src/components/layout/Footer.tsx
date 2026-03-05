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
                        <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-5 tracking-wide uppercase text-sm">Services</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.medicalServices.slice(0, 10).map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-medium">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Procedures Column */}
                    <div>
                        <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-5 tracking-wide uppercase text-sm">Key Procedures</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.procedures.slice(0, 10).map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-medium">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links + Legal */}
                    <div>
                        <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-5 tracking-wide uppercase text-sm">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.quickLinks.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-medium">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-4 mt-8 tracking-wide uppercase text-sm">Patient Care</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.patientCare.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-medium">{item.name}</Link>
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
            </div>
        </footer>
    );
}
