import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FOOTER_LINKS } from "@/lib/data/footer-links";
import { LOCATION_HIERARCHY } from "@/lib/data/location-hierarchy";
import { Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Top: Brand + Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1 space-y-5">
                        <span className="text-2xl font-heading font-black tracking-tight text-slate-900 dark:text-white">{siteConfig.name}</span>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium max-w-xs">{siteConfig.description}</p>
                        <div className="space-y-3">
                            <a href={`tel:${siteConfig.contact.emergencyPhone}`} className="flex items-center gap-3 text-sm font-bold text-rose-600 dark:text-rose-400 hover:text-rose-500 dark:hover:text-rose-300 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-4 h-4" />
                                </div>
                                Emergency: {siteConfig.contact.emergencyPhone}
                            </a>
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                {siteConfig.contact.address}
                            </div>
                            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                {siteConfig.contact.email}
                            </a>
                        </div>
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
