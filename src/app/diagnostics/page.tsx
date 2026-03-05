// @ts-nocheck
import { getDiagnostics } from "@/lib/api"
import { Diagnostic } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Clock, ArrowRight, FileText, CheckCircle2, Sparkles, Beaker, Shield } from "lucide-react"
import { TestTubes, UltrasoundScanner, HeartCardiogram, Electricity } from "healthicons-react/outline";
import { DiagnosticCard } from "@/components/entities/DiagnosticCard"
import Link from "next/link"
import type { Metadata } from "next"
import { EntityCardSection } from "@/components/seo/EntityCardSection"
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid"

export const metadata: Metadata = {
    title: 'Get Test Reports in Under 12 Hours | Diagnostics at Indira Hospital Vellore',
    description: 'NABL accredited labs. MRI, CT Scan, Blood Tests, ECG, Echo & more. Reports in under 12 hours. Home collection available. Stop guessing — get diagnosed today.',
}

// Category icons and colors with Elite UI mappings
const categoryConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string; label: string; glow: string }> = {
    radiology: { icon: UltrasoundScanner, color: 'text-fuchsia-400', bgColor: 'bg-fuchsia-500/10 border-fuchsia-500/20', label: 'Radiology & Imaging', glow: 'group-hover:bg-fuchsia-400/20 shadow-fuchsia-500/30 text-fuchsia-300' },
    pathology: { icon: TestTubes, color: 'text-pink-400', bgColor: 'bg-pink-500/10 border-pink-500/20', label: 'Pathology & Lab', glow: 'group-hover:bg-pink-400/20 shadow-pink-500/30 text-pink-300' },
    cardiology: { icon: HeartCardiogram, color: 'text-rose-400', bgColor: 'bg-rose-500/10 border-rose-500/20', label: 'Cardiology', glow: 'group-hover:bg-rose-400/20 shadow-rose-500/30 text-rose-300' },
    other: { icon: Electricity, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10 border-indigo-500/20', label: 'Other Tests', glow: 'group-hover:bg-indigo-400/20 shadow-indigo-500/30 text-indigo-300' },
}

export default async function DiagnosticsPage() {
    let diagnostics: Diagnostic[] = [];

    try {
        diagnostics = (await getDiagnostics()) as Diagnostic[];
    } catch {
        diagnostics = [];
    }

    // Group by category
    const grouped = diagnostics.reduce((acc: Record<string, Diagnostic[]>, test: Diagnostic) => {
        const cat = test.category || 'other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(test);
        return acc;
    }, {} as Record<string, Diagnostic[]>);

    const categoryOrder = ['radiology', 'pathology', 'cardiology', 'other'];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* Bold Asymmetrical Deep Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                        <UltrasoundScanner className="w-4 h-4" /> Reports in Under 12 Hours
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto">
                        Absolute <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Certainty.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-16">
                        Stop guessing. NABL accredited labs, home collection, and reports you can trust — all in under 12 hours.
                    </p>

                    {/* Integrated Glassmorphic Hero Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative z-20">
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-fuchsia-500 transition-colors">
                                <HeartCardiogram className="w-6 h-6 text-fuchsia-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1 tabular-nums">{diagnostics.length}</p>
                            <p className="text-xs font-black text-fuchsia-300 uppercase tracking-widest">Tests Listed</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-pink-500 transition-colors">
                                <Shield className="w-6 h-6 text-pink-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1">NABL</p>
                            <p className="text-xs font-black text-pink-300 uppercase tracking-widest">Accredited</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-indigo-500 transition-colors">
                                <Clock className="w-6 h-6 text-indigo-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1">&lt; 12h</p>
                            <p className="text-xs font-black text-indigo-300 uppercase tracking-widest">Report TAT</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group col-span-2 lg:col-span-1">
                            <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-rose-500 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-rose-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1">100%</p>
                            <p className="text-xs font-black text-rose-300 uppercase tracking-widest">Precision</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Test Categories (Premium UI Loops) */}
            <div className="relative z-30 -mt-24 max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                <div className="space-y-32">
                    {categoryOrder.map((cat, idx) => {
                        const tests = grouped[cat];
                        if (!tests?.length) return null;
                        const config = categoryConfig[cat] || categoryConfig.other;
                        const Icon = config.icon;

                        return (
                            <div key={cat} className="relative">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-8 group">
                                        <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center border-2 transition-all duration-500 shadow-xl ${config.bgColor} border-white/50 group-hover:scale-110`}>
                                            <Icon className={`w-12 h-12 ${config.color}`} />
                                        </div>
                                        <div>
                                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">{config.label}</h2>
                                            <div className="flex items-center gap-3">
                                                <span className="h-1 w-8 bg-fuchsia-500 rounded-full" />
                                                <p className="text-sm font-black text-slate-400 tracking-[0.2em] uppercase">
                                                    {tests.length} Specialized Tests
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-3 text-sm font-black text-fuchsia-600 uppercase tracking-widest hover:text-fuchsia-700 transition-colors group/link"
                                    >
                                        Bulk Enquiry <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {tests.map((test: Diagnostic) => (
                                        <DiagnosticCard key={test.slug} test={test} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Fallback if no data */}
            {diagnostics.length === 0 && (
                <SectionContainer className="py-32 text-center bg-white dark:bg-slate-900 rounded-[3rem] mx-8 border border-slate-100 dark:border-slate-700 shadow-2xl">
                    <div className="w-32 h-32 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
                        <Beaker className="h-14 w-14 text-slate-300" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Inventory Syncing</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-md mx-auto">Diagnostic database is being updated with real-time pricing. Please call us for immediate assistance.</p>
                </SectionContainer>
            )}

            {/* ELITE SIGNATURE CTA: Home Collection */}
            <SectionContainer className="my-32 px-4">
                <div className="relative bg-gradient-to-br from-slate-900 via-pink-950 to-fuchsia-950 rounded-[4rem] p-12 sm:p-24 overflow-hidden shadow-2xl shadow-fuchsia-900/40 group/cta flex flex-col items-center text-center">
                    {/* Ambient Background Lights */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] group-hover/cta:bg-fuchsia-500/20 transition-colors duration-1000 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full hidden md:block blur-[100px] opacity-40" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

                    <div className="relative z-10 w-full max-w-4xl">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 mb-12 shadow-[0_0_40px_rgba(20,184,166,0.3)] group-hover/cta:scale-110 transition-transform duration-500">
                            <Sparkles className="w-12 h-12 text-fuchsia-300" />
                        </div>

                        <h2 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black text-white mb-10 tracking-tight leading-[1.05]">
                            Lab Tests At <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">
                                Your Doorstep.
                            </span>
                        </h2>

                        <p className="text-xl sm:text-2xl text-slate-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                            Experience ultimate clinical convenience. Get tested directly from the comfort of your home. Safe, sterile, and impeccably accurate.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center w-full max-w-3xl mx-auto mb-16">
                            <a
                                href="https://wa.me/917010650063?text=Hi%2C%20I%20want%20to%20book%20home%20sample%20collection"
                                target="_blank"
                                rel="noreferrer"
                                className="group/btn relative flex items-center justify-center w-full sm:w-auto px-12 py-6 bg-fuchsia-500 text-slate-900 dark:text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-fuchsia-500/25 overflow-hidden text-xl"
                            >
                                <span className="relative z-10 uppercase tracking-wider">Book Home Visit</span>
                                <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </a>

                            <Link
                                href="/health-packages"
                                className="flex items-center justify-center w-full sm:w-auto px-12 py-6 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all text-xl"
                            >
                                View Health Packages
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 opacity-40 grayscale group-hover/cta:grayscale-0 group-hover/cta:opacity-70 transition-all duration-700">
                            <div className="flex flex-col items-center gap-2">
                                <CheckCircle2 className="w-8 h-8 text-fuchsia-400" />
                                <span className="text-[10px] font-black tracking-widest uppercase text-white">Sterile Kits</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <CheckCircle2 className="w-8 h-8 text-fuchsia-400" />
                                <span className="text-[10px] font-black tracking-widest uppercase text-white">NABL Labs</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <CheckCircle2 className="w-8 h-8 text-fuchsia-400" />
                                <span className="text-[10px] font-black tracking-widest uppercase text-white">Digital Reports</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <CheckCircle2 className="w-8 h-8 text-fuchsia-400" />
                                <span className="text-[10px] font-black tracking-widest uppercase text-white">Fast TAT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* ENTITY CARD SECTIONS */}
            <EntityCardSection type="services" title="Treatments We Offer" subtitle="Our Services" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
            <EntityCardSection type="doctors" title="Our Expert Doctors" subtitle="Meet Our Specialists" limit={6} className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50" />
            <EntityCardSection type="locations" title="Hospital Near You" subtitle="Our Locations" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid type="services" title="All Treatments A-Z" subtitle="Services Directory" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />
            <InternalLinkGrid type="doctors" title="All Doctors A-Z" subtitle="Doctors Directory" limit={12} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
            <InternalLinkGrid type="locations" title="All Locations" subtitle="Location Directory" limit={16} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />

            {/* JSON-LD for MedicalTest listing */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalClinic",
                        "name": "Indira Super Speciality Hospital — Diagnostics",
                        "url": "https://www.indirasuperspecialityhospital.com/diagnostics",
                        "medicalSpecialty": "Diagnostic",
                        "availableService": diagnostics.map((t: Diagnostic) => ({
                            "@type": "MedicalTest",
                            "name": t.name,
                            "url": `https://www.indirasuperspecialityhospital.com/diagnostics/${t.slug}`,
                            "description": (t as any).seo_description || t.short_description,
                            ...(t.price && { "offers": { "@type": "Offer", "price": t.price, "priceCurrency": "INR" } }),
                        })),
                    })
                }}
            />
        </main>
    )
}
