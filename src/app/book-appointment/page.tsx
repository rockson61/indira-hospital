import BookingFunnel from "@/components/interactive/BookingFunnel";
import { Clock, ShieldCheck, Sparkles } from "lucide-react";
import { Suspense } from "react";

export const metadata = {
    title: "Elite Booking Hub | Instant Pricing & Priority Consultation",
    description: "Book your Elite surgical consultation with instant pricing estimates. Direct priority access to senior specialists at Indira Hospital.",
};

export default function AppointmentPage() {
    return (
        <main className="min-h-screen bg-slate-950 selection:bg-emerald-500/30 pb-24 overflow-hidden">
            {/* ELITE CINEMATIC HERO */}
            <section className="relative pt-48 pb-64 lg:pt-60 lg:pb-80 overflow-hidden bg-black rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
                
                {/* Immersive Orbs */}
                <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[150px] animate-pulse" />
                <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 text-emerald-400 text-[10px] font-black tracking-[0.4em] uppercase mb-12 shadow-2xl">
                        <ShieldCheck className="w-4 h-4" /> Institutional Priority
                    </div>
                    
                    <h1 className="elite-hero-title text-white mb-8">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-emerald-200">Elite Booking</span> <br /> 
                        Experience.
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed mb-8 italic">
                        Transparent pricing. Direct specialist mapping. No waitlists. <br className="hidden md:block" />
                        Experience the gold standard of surgical coordination.
                    </p>

                    <div className="flex justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all cursor-crosshair">
                       <div className="flex items-center gap-2">
                           <Clock className="w-5 h-5 text-emerald-400" />
                           <span className="text-xs font-black uppercase tracking-widest text-white italic">Same-Week Surgery</span>
                       </div>
                       <div className="w-px h-6 bg-white/10" />
                       <div className="flex items-center gap-2">
                           <Sparkles className="w-5 h-5 text-indigo-400" />
                           <span className="text-xs font-black uppercase tracking-widest text-white italic">Fixed Cost Estimates</span>
                       </div>
                    </div>
                </div>

                {/* Perspective Backdrop Text */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.02] tracking-tighter select-none pointer-events-none uppercase italic">
                   PRIORITY
                </div>
            </section>

            {/* INTEGRATED BOOKING FUNNEL */}
            <section className="relative z-20 -mt-32 md:-mt-48 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <Suspense fallback={<div className="h-[600px] w-full animate-pulse bg-white/5 rounded-[4rem] border border-white/10" />}>
                    <BookingFunnel />
                </Suspense>
            </section>

            {/* LOWER TRUST BANNER */}
            <section className="mt-24 max-w-5xl mx-auto px-6 text-center">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] mb-10">Trusted by 15,000+ Annual Surgical Patients</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-opacity duration-1000">
                    <div className="flex flex-col items-center gap-3">
                        <div className="h-0.5 w-12 bg-white/10" />
                        <span className="text-[9px] font-bold text-white uppercase tracking-widest italic leading-relaxed text-center">USFDA Approved <br /> Technology</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="h-0.5 w-12 bg-white/10" />
                        <span className="text-[9px] font-bold text-white uppercase tracking-widest italic leading-relaxed text-center">NABH Safety <br /> Standards</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="h-0.5 w-12 bg-white/10" />
                        <span className="text-[9px] font-bold text-white uppercase tracking-widest italic leading-relaxed text-center">NABL Certified <br /> Diagnostics</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="h-0.5 w-12 bg-white/10" />
                        <span className="text-[9px] font-bold text-white uppercase tracking-widest italic leading-relaxed text-center">World-Class <br /> TPA Support</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
