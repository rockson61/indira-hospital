import React from 'react';
import Link from 'next/link';
import { navigation } from '@/config/navigation';
import { enhancedVelloreLocations } from '@/lib/data/enhanced-location-data';
import { SectionContainer } from '@/components/ui/section-container';
import { Card } from '@/components/ui/card';
import { 
    MapPin, 
    Stethoscope, 
    ShieldCheck, 
    Building2, 
    Users, 
    Phone,
    ArrowRight,
    Globe,
    FileText,
    Activity
} from 'lucide-react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = constructMetadata({
    title: "Sitemap | Indira Super Speciality Hospital",
    description: "Learn more about sitemap at Indira Hospital, Vellore's leading super-speciality center for advanced clinical care.",
    path: "/sitemap"
});

export default function SitemapPage() {
    // Group locations by category for better organization
    const majorCities = enhancedVelloreLocations.filter(loc => loc.category === 'city' || loc.category === 'district_hq');
    const localTowns = enhancedVelloreLocations.filter(loc => ['major_town', 'town', 'industrial', 'historic'].includes(loc.category));

    return (
        <main className="bg-white dark:bg-slate-950 pt-32 pb-24">
            <SectionContainer>
                <div className="max-w-4xl mb-16">
                    <h1 className="elite-hero-title mb-6">
                        Website <span className="elite-gradient-text">Directory</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                        Access our complete network of multi-speciality departments, 
                        advanced surgical treatments, and local catchment areas in 
                        Tamil Nadu and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* ===== MEDICAL DEPARTMENTS ===== */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center border border-fuchsia-500/20">
                                    <Stethoscope className="w-5 h-5 text-fuchsia-600" />
                                </div>
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Medical Specialties</h2>
                            </div>
                            <ul className="space-y-3">
                                {navigation.specialtyNav.map((dept) => (
                                    <li key={dept.title} className="group">
                                        <Link href={dept.href} className="text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 transition-colors flex items-center gap-2 font-medium">
                                            <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                            {dept.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <Activity className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Key Treatments</h2>
                            </div>
                            <ul className="grid grid-cols-1 gap-3">
                                {navigation.specialtyNav.slice(0, 8).flatMap(dept => dept.subServices || []).slice(0, 15).map((sub) => (
                                    <li key={sub.title} className="group">
                                        <Link href={sub.href} className="text-slate-500 dark:text-slate-500 hover:text-blue-600 transition-colors text-sm flex items-center gap-2">
                                            {sub.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ===== LOCATIONS & REGIONS ===== */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                                    <MapPin className="w-5 h-5 text-amber-600" />
                                </div>
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Global & City Hubs</h2>
                            </div>
                            <ul className="space-y-3">
                                {majorCities.map((loc) => (
                                    <li key={loc.slug} className="group">
                                        <Link href={`/doctor/near-me/${loc.slug}`} className="text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors flex items-center gap-2 font-medium">
                                            <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                            Best Hospital in {loc.name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link href="/patients/international" className="text-fuchsia-600 font-bold flex items-center gap-2 mt-4 hover:underline">
                                        <Globe className="w-4 h-4" /> Medical Tourism India
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                    <Building2 className="w-5 h-5 text-emerald-600" />
                                </div>
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Regional Coverage</h2>
                            </div>
                            <ul className="grid grid-cols-2 gap-3">
                                {localTowns.slice(0, 20).map((loc) => (
                                    <li key={loc.slug}>
                                        <Link href={`/doctor/near-me/${loc.slug}`} className="text-slate-500 dark:text-slate-500 hover:text-emerald-600 transition-colors text-xs uppercase tracking-wider font-bold">
                                            {loc.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ===== PATIENT & CORPORATE ===== */}
                    <div className="space-y-8">
                        <Card className="p-8 bg-slate-50 dark:bg-slate-900 border-none shadow-sm rounded-[2.5rem]">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center">
                                    <Users className="w-5 h-5 text-white dark:text-slate-900" />
                                </div>
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Patient Hub</h2>
                            </div>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/doctors" className="flex items-center justify-between group">
                                        <span className="text-slate-700 dark:text-slate-300 font-bold">Expert Doctors List</span>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-fuchsia-600 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/patients/insurance" className="flex items-center justify-between group">
                                        <span className="text-slate-700 dark:text-slate-300 font-bold">Cashless Insurance</span>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-fuchsia-600 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/health-packages" className="flex items-center justify-between group">
                                        <span className="text-slate-700 dark:text-slate-300 font-bold">Health Checkup Packages</span>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-fuchsia-600 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="flex items-center justify-between group">
                                        <span className="text-slate-700 dark:text-slate-300 font-bold">Patient Help & FAQs</span>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-fuchsia-600 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </li>
                            </ul>
                        </Card>

                        <div className="pt-4">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                </div>
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Corporate</h2>
                            </div>
                            <ul className="space-y-3">
                                <li><Link href="/about" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">About Indira Hospital</Link></li>
                                <li><Link href="/about/quality-safety" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Quality & NABH Standards</Link></li>
                                <li><Link href="/careers" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Join Our Medical Team</Link></li>
                                <li><Link href="/contact" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Contact Support</Link></li>
                                <li><Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* BOTTOM CTA */}
                <Card className="mt-20 p-12 bg-gradient-to-br from-fuchsia-900 to-slate-900 border-none relative overflow-hidden rounded-[3rem]">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-black text-white mb-2">Can&apos;t find what you&apos;re looking for?</h3>
                            <p className="text-fuchsia-200/70 text-lg">Our 24/7 helpdesk is available for all medical inquiries.</p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/contact" className="elite-button-primary !bg-white !text-slate-900 border-white hover:!bg-fuchsia-50">
                                Contact Us
                            </Link>
                            <Link href="/doctors" className="elite-button-secondary !border-white/20 !text-white hover:!bg-white/10">
                                <Phone className="w-4 h-4 mr-2" /> Call Helpdesk
                            </Link>
                        </div>
                    </div>
                    {/* Decorative Blur */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-fuchsia-500/20 blur-[80px] rounded-full" />
                </Card>
            </SectionContainer>
        </main>
    );
}
