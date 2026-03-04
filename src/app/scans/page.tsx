import { SectionContainer } from "@/components/ui/section-container"
import { Scan, Activity, Clock, FileText, CheckCircle2, ShieldCheck, ArrowRight, Zap, Target } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Advanced Scans & Imaging in Vellore | 3T MRI & CT — Indira Hospital',
    description: 'High-precision scans with 3T MRI, 128-Slice CT, and Digital X-Rays. Ultra-fast <12 hour turnaround time for critical reports.',
}

const WHATSAPP_NUMBER = "917010650063";

export default function ScansPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-24">
            {/* Bold Asymmetrical Deep Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-sm font-bold tracking-widest uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-blue-500/30">
                        <Scan className="w-4 h-4" /> Next-Gen Imaging Center
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto">
                        See Clearly. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Diagnose Accurately.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-16">
                        State-of-the-art 3T MRI, 128-Slice CT, and advanced Ultrasound scans delivering ultra-clear images for swift clinical decisions.
                    </p>

                    {/* Integrated Glassmorphic Hero Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative z-20">
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500 transition-colors">
                                <Activity className="w-6 h-6 text-blue-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1 tabular-nums">3T</p>
                            <p className="text-xs font-black text-blue-300 uppercase tracking-widest">MRI System</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-indigo-500 transition-colors">
                                <Target className="w-6 h-6 text-indigo-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1">128</p>
                            <p className="text-xs font-black text-indigo-300 uppercase tracking-widest">Slice CT</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-violet-500 transition-colors">
                                <Clock className="w-6 h-6 text-violet-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1">&lt; 12h</p>
                            <p className="text-xs font-black text-violet-300 uppercase tracking-widest">Report TAT</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group col-span-2 lg:col-span-1">
                            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-fuchsia-500 transition-colors">
                                <ShieldCheck className="w-6 h-6 text-fuchsia-400 group-hover:text-white" />
                            </div>
                            <p className="text-4xl font-black text-white mb-1">Low</p>
                            <p className="text-xs font-black text-fuchsia-300 uppercase tracking-widest">Radiation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Imaging Services */}
            <SectionContainer className="relative z-30 -mt-24 max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "3T MRI (Magnetic Resonance)",
                            desc: "Experience unmatched clarity for neurological, musculoskeletal, and cardiac imaging without ionizing radiation. Wider bore designed for maximum patient comfort.",
                            features: ["Silent Scan Technology", "Whole Body Diffusion", "Claustrophobia Friendly"],
                            color: "text-blue-500",
                            bg: "bg-blue-50 dark:bg-blue-950",
                            border: "border-blue-100 dark:border-blue-900"
                        },
                        {
                            title: "128-Slice CT Scan",
                            desc: "Incredibly fast multi-slice CT scanning that captures high-resolution 3D images of the heart, blood vessels, and trauma cases in seconds.",
                            features: ["Cardiac Angiography", "Low Dose Radiation", "Pediatric Fast CPG"],
                            color: "text-indigo-500",
                            bg: "bg-indigo-50 dark:bg-indigo-950",
                            border: "border-indigo-100 dark:border-indigo-900"
                        },
                        {
                            title: "4D Ultrasound & Doppler",
                            desc: "Advanced multiparametric sonography for obstetrics, vascular imaging, and focused guided biopsies providing real-time high-fidelity visuals.",
                            features: ["Fetal Imaging", "Color Doppler", "Elastography"],
                            color: "text-violet-500",
                            bg: "bg-violet-50 dark:bg-violet-950",
                            border: "border-violet-100 dark:border-violet-900"
                        },
                        {
                            title: "Digital X-Ray / Mammography",
                            desc: "Fully digital rapid radiography yielding instant images for orthopedic trauma alongside specialized, low-dose breast cancer screening arrays.",
                            features: ["Instant Results", "High Resolution Output", "Portable Units"],
                            color: "text-fuchsia-500",
                            bg: "bg-fuchsia-50 dark:bg-fuchsia-950",
                            border: "border-fuchsia-100 dark:border-fuchsia-900"
                        },
                    ].map((scan, idx) => (
                        <div key={idx} className={`bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 lg:p-12 border ${scan.border} shadow-xl hover:-translate-y-2 transition-transform duration-500 group flex flex-col`}>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 leading-tight">{scan.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-lg mb-8 flex-grow">{scan.desc}</p>
                            <div className="space-y-3">
                                {scan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-3">
                                        <CheckCircle2 className={`w-5 h-5 ${scan.color}`} />
                                        <span className="font-bold text-slate-700 dark:text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* CTA */}
            <SectionContainer className="px-4">
                <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-[4rem] p-12 sm:p-24 overflow-hidden shadow-2xl group/cta flex flex-col items-center text-center">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full hidden md:block blur-[100px] group-hover/cta:bg-blue-500/20 transition-colors duration-1000 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] opacity-40" />

                    <div className="relative z-10 w-full max-w-4xl">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 mb-10 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                            <FileText className="w-10 h-10 text-blue-300" />
                        </div>
                        <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
                            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Scan Today.</span>
                        </h2>
                        <p className="text-xl sm:text-2xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Don't wait hours for an emergency scan. Schedule your appointment instantly and get your comprehensive digital diagnostic report lightning fast.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-3xl mx-auto">
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I would like to book an appointment for a scan/imaging test.")}`}
                                target="_blank"
                                rel="noreferrer"
                                className="group/btn relative flex items-center justify-center w-full sm:w-auto px-12 py-6 bg-blue-500 text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-blue-500/25 overflow-hidden text-xl"
                            >
                                <span className="relative z-10 uppercase tracking-wider">Book Appointment</span>
                                <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
