// @ts-nocheck
import { getHealthPackages } from "@/lib/api"
import { HealthPackage } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Heart, Activity, User, ShieldCheck, Zap, Phone, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Health Checkup Packages — Indira Super Speciality Hospital Vellore',
    description: 'Comprehensive health screening packages at Indira Hospital Vellore. Master Health Checkup, Cardiac, Diabetic, and Executive packages starting from ₹999.',
}

const WHATSAPP_NUMBER = "917010650063";

export default async function HealthPackagesPage() {
    let packages: HealthPackage[] = [];

    try {
        packages = (await getHealthPackages()) as HealthPackage[];
    } catch (e) {
        console.error('Failed to fetch packages', e);
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-24">
            {/* ELITE HEALTHCARE HERO */}
            <section className="bg-slate-900 pt-48 pb-48 lg:pt-60 lg:pb-64 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

                <SectionContainer className="relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                            <Activity className="w-4 h-4" /> Preventive Care
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
                            Complete Health <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Screening Packages.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light mb-10">
                            Early detection is the best protection. Choose from our specially curated health screening packages for you and your family.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 text-slate-200">
                                <ShieldCheck className="w-5 h-5 text-fuchsia-400" />
                                <span className="text-sm font-bold tracking-wide">NABL Accredited Lab</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 text-slate-200">
                                < Zap className="w-5 h-5 text-indigo-400" />
                                <span className="text-sm font-bold tracking-wide">Same Day Reports</span>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* PREMIUM PRICING GRID */}
            <SectionContainer className="relative z-20 -mt-24 sm:-mt-32 max-w-7xl mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div key={pkg.slug} className={`group bg-white dark:bg-slate-900 rounded-[2.5rem] border ${pkg.is_featured ? 'border-fuchsia-400 shadow-[0_0_40px_-10px_rgba(20,184,166,0.3)]' : 'border-slate-200 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'} hover:shadow-[0_20px_40px_rgba(20,184,166,0.15)] hover:border-fuchsia-300 hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden bg-clip-padding`}>
                            {/* Elevated Highlight Background */}
                            {pkg.is_featured && (
                                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-fuchsia-400" />
                            )}

                            <div className="p-8 sm:p-10 pb-0 relative z-10">
                                {pkg.is_featured && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-black rounded-full mb-6 uppercase tracking-widest shadow-lg shadow-orange-500/30 w-fit">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-900 animate-pulse"></div>
                                        Best Choice
                                    </span>
                                )}
                                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-fuchsia-700 transition-colors">{pkg.title}</h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2 font-medium leading-relaxed">
                                    {pkg.short_description || `Comprehensive screening with ${pkg.tests_included}.`}
                                </p>

                                <div className="flex items-baseline gap-3 mb-8">
                                    <span className="text-4xl font-black text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-600 group-hover:to-pink-500 transition-all">₹{pkg.price}</span>
                                    {pkg.original_price && (
                                        <span className="text-slate-400 line-through text-lg font-bold decoration-slate-300">₹{pkg.original_price}</span>
                                    )}
                                </div>

                                <div className="space-y-4 mb-10">
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span className="h-px w-6 bg-slate-200 dark:bg-slate-700"></span> Includes <span className="h-px w-6 bg-slate-200 dark:bg-slate-700"></span>
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {pkg.tests_included.split(',').slice(0, 5).map((test, i) => (
                                            <span key={i} className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-3 py-1.5 rounded-xl group-hover:border-fuchsia-100 group-hover:bg-fuchsia-50 dark:bg-fuchsia-950 shadow-sm transition-colors">
                                                <Check className="w-3.5 h-3.5 text-fuchsia-500" />
                                                {test.trim()}
                                            </span>
                                        ))}
                                        {pkg.tests_included.split(',').length > 5 && (
                                            <span className="text-xs font-bold text-slate-400 py-1.5 px-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">+{pkg.tests_included.split(',').length - 5} more</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto p-8 sm:p-10 pt-0 space-y-3 relative z-10 w-full">
                                <Link href={`/health-packages/${pkg.slug}`} className="group/btn relative flex items-center justify-center w-full px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:scale-[1.02] transition-all shadow-xl overflow-hidden">
                                    <span className="relative z-10">View Full Details</span>
                                    <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                                </Link>
                                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in booking the ${pkg.title} package.`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-6 py-4 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 font-bold rounded-2xl hover:bg-fuchsia-600 hover:text-white transition-all duration-300">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Book via WhatsApp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {packages.length === 0 && (
                    <div className="text-center py-24 bg-white/50 backdrop-blur-xl rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-700 mt-12">
                        <div className="w-24 h-24 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                            <Activity className="w-10 h-10 text-slate-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Packages Coming Soon</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8">
                            We are currently engineering our next-generation preventive screening paths. Please contact us directly for current options.
                        </p>
                        <Link href="/contact" className="inline-flex px-8 py-4 bg-fuchsia-600 text-white font-bold rounded-2xl hover:bg-fuchsia-700 transition-all">
                            Contact Us
                        </Link>
                    </div>
                )}
            </SectionContainer>

            {/* WHY DIAGNOSTIC BENTO */}
            <SectionContainer className="pb-24">
                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-fuchsia-950 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl relative group/cta">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[80px] group-hover/cta:bg-fuchsia-500/20 transition-colors duration-700" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px]" />

                    <div className="grid lg:grid-cols-2 relative z-10">
                        <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-6 w-fit">
                                Clinical Excellence
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-10 text-white tracking-tight leading-[1.1]">
                                Why Health Checkups at <br className="hidden sm:block" /> <span className="text-fuchsia-400">Indira Hospital?</span>
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-fuchsia-500 transition-colors duration-300">
                                        <Zap className="w-6 h-6 text-fuchsia-300 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Advanced Radiologists</h4>
                                        <p className="text-slate-400 leading-relaxed font-light">Precision diagnostics driven by specialized doctors utilizing our 3T MRI and advanced imaging suites.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-fuchsia-500 transition-colors duration-300">
                                        <Heart className="w-6 h-6 text-fuchsia-300 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Patient Caring</h4>
                                        <p className="text-slate-400 leading-relaxed font-light">We don't merely provide reports; our clinical team provides a structured path to ongoing wellness and recovery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block relative min-h-[400px] border-l border-white/10 rounded-r-[4rem] overflow-hidden bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
