import { Metadata } from "next";
import Image from "next/image";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { Images, Sparkles, Camera, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

export const metadata: Metadata = {
    title: "Photo Gallery | Indira Super Speciality Hospital",
    description: "Explore the modern facilities, advanced technology, and patient-centric environments at Indira Super Speciality Hospital, Vellore.",
};

const GALLERY_IMAGES = [
    { id: 1, src: "/images/hospital/Hospital view.webp", alt: "Hospital Exterior View", category: "Infrastructure" },
    { id: 2, src: "/images/hospital/Reception.webp", alt: "Modern Reception Desk", category: "Facilities" },
    { id: 3, src: "/images/hospital/OT.webp", alt: "Advanced Operating Theatre", category: "Clinical" },
    { id: 4, src: "/images/hospital/CT.webp", alt: "128-Slice CT Scanner", category: "Diagnostics" },
    { id: 5, src: "/images/hospital/Diagnostic.webp", alt: "Diagnostic Laboratory", category: "Diagnostics" },
    { id: 6, src: "/images/hospital/Consultation.webp", alt: "Specialist Consultation Room", category: "Departments" },
    { id: 7, src: "/images/hospital/ER.webp", alt: "24/7 Emergency Room", category: "Clinical" },
    { id: 8, src: "/images/hospital/Private room.webp", alt: "Premium Private Suite", category: "Facilities" },
    { id: 9, src: "/images/hospital/Hospital view 2.webp", alt: "Main Hospital Campus", category: "Infrastructure" },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 selection:bg-fuchsia-200 selection:text-fuchsia-900">
            {/* ELITE CINEMATIC HERO */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[4rem] sm:rounded-b-[6rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
                
                {/* Ambient Glows */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] will-change-transform transform-gpu opacity-60 animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[100px] will-change-transform transform-gpu opacity-40" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-300 text-sm font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_40px_-5px_rgba(99,102,241,0.3)]">
                        <Camera className="w-4 h-4" /> Visual Hospital Tour
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-black text-white tracking-tighter leading-[0.9] mb-8">
                        Experience Our <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-fuchsia-400">World-Class Mastery.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-4">
                        Step inside our state-of-the-art operation theaters, diagnostic suites, and premium patient environments designed for absolute healing.
                    </p>
                </div>
            </section>

            {/* ENHANCED GALLERY GRID */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-24 sm:-mt-32 relative z-20 pt-4 mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
                    {GALLERY_IMAGES.map((image, index) => (
                        <div
                            key={image.id}
                            className={`group relative overflow-hidden rounded-[3rem] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-700 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            
                            {/* Elite Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-3">
                                    {image.category}
                                </span>
                                <h3 className="text-white font-black text-2xl tracking-tight leading-tight mb-2 uppercase italic">{image.alt}</h3>
                                <div className="h-1 w-12 bg-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                            </div>

                            {/* Always-visible category chip (Premium Version) */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xl text-white text-[10px] font-black uppercase tracking-widest border border-white/10 shadow-xl">
                                    {image.category}
                                </span>
                            </div>

                            <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Link
                        href="/virtual-tour"
                        className="group/btn inline-flex items-center gap-4 px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-[2.5rem] hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-xl overflow-hidden relative"
                    >
                        <span className="relative z-10 uppercase tracking-widest italic">Enter 360° Virtual Tour</span>
                        <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    </Link>
                </div>
            </section>

            {/* TRUST & FAQ SECTIONS */}
            <SectionContainer className="py-24 border-t border-slate-100 dark:border-slate-800">
                <div className="grid lg:grid-cols-2 gap-16 px-6 lg:px-8">
                    <EntityFAQs 
                        entityType="hospital" 
                        entityName="Indira Hospital" 
                        entitySlug="gallery" 
                        title="Infrastructure Queries"
                        description="Learn more about our clinical environments and safety standards."
                    />
                    <EntityReviews 
                        entityType="hospital" 
                        entityName="Indira Hospital" 
                        entitySlug="facility-reviews" 
                        title="What Patients Observe"
                        description="Honest feedback on our facilities and patient-centric infrastructure."
                    />
                </div>
            </SectionContainer>

            <div className="mt-12">
                <InternalLinkGrid type="services" title="Clinical Excellence" subtitle="Our Treatments" limit={12} className="bg-white dark:bg-slate-950 rounded-[4rem] border" />
                <InternalLinkGrid type="departments" title="Centres of Excellence" subtitle="Hospital Infrastructure" limit={8} className="bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] border mt-12" />
            </div>
        </main>
    );
}


