import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/section-container";
import { Camera, Sparkles, Map, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "360° Virtual Tour | Experience Indira Super Speciality Hospital",
    description: "Take an immersive 360-degree virtual tour of Indira Super Speciality Hospital. Explore our advanced modular OTs, premium patient suites, and world-class diagnostic facilities.",
};

export default function VirtualTourPage() {
    return (
        <main className="min-h-screen bg-slate-900 text-white overflow-hidden selection:bg-indigo-500/30">
            {/* ELITE CINEMATIC HERO */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1e_1px,transparent_1px)] bg-[size:32px_32px]" />
                
                {/* Immersive Ambient Glows */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 text-indigo-400 text-[10px] font-black tracking-[0.4em] uppercase mb-12 shadow-2xl">
                        <Map className="w-4 h-4" /> Immersive Experience
                    </div>
                    
                    <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12 uppercase italic">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-fuchsia-400">360° Mastery</span> <br className="hidden lg:block" /> Experience.
                    </h1>

                    <p className="text-xl md:text-3xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed mb-20 italic">
                        Our immersive 360° virtual tour is undergoing a high-definition upgrade to showcase our latest clinical advancements. 
                        Experience the gold standard of healthcare infrastructure from the comfort of your home.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                        <Link
                            href="/gallery"
                            className="group/btn relative px-16 py-8 bg-white text-slate-900 font-black rounded-[2.5rem] transition-all duration-500 hover:scale-[1.05] shadow-2xl overflow-hidden"
                        >
                            <span className="relative z-10 text-xl uppercase tracking-widest italic flex items-center gap-3">
                                <ArrowLeft className="w-6 h-6 group-hover/btn:-translate-x-2 transition-transform" />
                                Return to Gallery
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-white to-fuchsia-100 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        </Link>
                        
                        <div className="px-10 py-6 rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-2xl flex items-center gap-4 group cursor-help">
                            <Sparkles className="w-6 h-6 text-fuchsia-400 animate-spin-slow" />
                            <span className="text-white font-black uppercase tracking-widest text-sm opacity-60 group-hover:opacity-100 transition-opacity italic">HD Update in Progress</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Perspective Elements */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-12 opacity-30 select-none">
                    <div className="text-[15rem] font-black tracking-tighter leading-none text-transparent border-b-8 border-white inline-block">360</div>
                </div>
            </section>
        </main>
    );
}
