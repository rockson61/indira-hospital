import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FOOTER_LINKS } from "@/lib/data/footer-links";
import { Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Top: Brand + Contact */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1 space-y-5">
                        <span className="text-2xl font-heading font-black tracking-tight">{siteConfig.name}</span>
                        <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-xs">{siteConfig.description}</p>
                        <div className="space-y-3">
                            <a href={`tel:${siteConfig.contact.emergencyPhone}`} className="flex items-center gap-3 text-sm font-bold text-rose-400 hover:text-rose-300 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-4 h-4" />
                                </div>
                                Emergency: {siteConfig.contact.emergencyPhone}
                            </a>
                            <div className="flex items-center gap-3 text-sm text-slate-400">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                {siteConfig.contact.address}
                            </div>
                            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                {siteConfig.contact.email}
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="font-heading font-bold text-white mb-5 tracking-wide uppercase text-sm">Services</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.medicalServices.slice(0, 10).map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-400 hover:text-teal-400 transition-colors font-medium">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Procedures Column */}
                    <div>
                        <h3 className="font-heading font-bold text-white mb-5 tracking-wide uppercase text-sm">Key Procedures</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.procedures.slice(0, 10).map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-400 hover:text-teal-400 transition-colors font-medium">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links + Legal */}
                    <div>
                        <h3 className="font-heading font-bold text-white mb-5 tracking-wide uppercase text-sm">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.quickLinks.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-400 hover:text-teal-400 transition-colors font-medium">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <h3 className="font-heading font-bold text-white mb-4 mt-8 tracking-wide uppercase text-sm">Patient Care</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_LINKS.patientCare.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.url} className="text-sm text-slate-400 hover:text-teal-400 transition-colors font-medium">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Middle: Locations Strip */}
                <div className="border-t border-slate-800 py-8">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Our Locations</h4>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {FOOTER_LINKS.locations.map((loc) => (
                            <Link key={loc.name} href={loc.url} className="text-sm text-slate-400 hover:text-teal-400 transition-colors font-medium whitespace-nowrap">
                                {loc.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500 font-medium">
                        &copy; {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors font-medium">Privacy</Link>
                        <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-300 transition-colors font-medium">Terms</Link>
                        <Link href="/sitemap.xml" className="text-sm text-slate-500 hover:text-slate-300 transition-colors font-medium">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
