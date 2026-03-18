import { Metadata } from "next";
import Image from "next/image";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { Images } from "lucide-react";
import Link from "next/link";

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
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Cinematic Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none animate-pulse" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-bold tracking-[0.2em] uppercase mb-10">
                        <Images className="w-4 h-4" /> Visual Tour
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-white tracking-tight leading-[0.95] mb-6">
                        Experience Our <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">World-Class Facilities.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Take a visual tour of our advanced operation theaters, diagnostic suites, and premium patient rooms designed for absolute comfort.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20 relative z-20 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
                    {GALLERY_IMAGES.map((image, index) => (
                        <Link
                            key={image.id}
                            href="/photo-gallery"
                            className={`group relative overflow-hidden rounded-[2.5rem] cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-500 bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-2">
                                    {image.category}
                                </span>
                                <h3 className="text-white font-bold text-lg leading-tight">{image.alt}</h3>
                            </div>
                            {/* Always-visible category chip */}
                            <div className="absolute top-5 left-5">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                                    {image.category}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/photo-gallery"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-colors shadow-xl text-lg"
                    >
                        <Images className="w-5 h-5" />
                        View Full Interactive Gallery
                    </Link>
                </div>
            </section>

            <div className="border-t border-slate-200 dark:border-slate-800 mt-32 pt-20">
                <InternalLinkGrid type="services" title="Clinical Excellence in Action" subtitle="Our Treatments" limit={12} className="bg-white dark:bg-slate-950 rounded-[4rem] border" />
                <InternalLinkGrid type="departments" title="Centres of Excellence" subtitle="Hospital Infrastructure" limit={8} className="bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] border mt-12" />
            </div>
        </main>
    );
}


