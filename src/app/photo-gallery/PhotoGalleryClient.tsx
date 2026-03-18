"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const PHOTOS = [
    { src: "/images/hospital/Hospital.webp", alt: "Indira Hospital Exterior", category: "Infrastructure" },
    { src: "/images/hospital/Hospital view.webp", alt: "Hospital View", category: "Infrastructure" },
    { src: "/images/hospital/Hospital view 2.webp", alt: "Hospital Front View", category: "Infrastructure" },
    { src: "/images/hospital/Reception.webp", alt: "Premium Reception Area", category: "Facilities" },
    { src: "/images/hospital/Consultation.webp", alt: "Specialist Consultation Room", category: "Facilities" },
    { src: "/images/hospital/Diagnostic.webp", alt: "Advanced Diagnostic Suite", category: "Technology" },
    { src: "/images/hospital/CT.webp", alt: "128-Slice CT Scanner", category: "Technology" },
    { src: "/images/hospital/OT.webp", alt: "Modular Operation Theatre (OT)", category: "Clinical" },
    { src: "/images/hospital/ER.webp", alt: "24/7 Emergency Room (ER)", category: "Clinical" },
    { src: "/images/hospital/Private room.webp", alt: "Deluxe Private Patient Room", category: "Facilities" },
    { src: "/images/hospital/Founder.webp", alt: "Hospital Founders", category: "Management" }
];

export default function PhotoGalleryClient() {
    const [selectedImage, setSelectedImage] = useState<typeof PHOTOS[0] | null>(null);
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...Array.from(new Set(PHOTOS.map(p => p.category)))];

    const filteredPhotos = filter === "All" ? PHOTOS : PHOTOS.filter(p => p.category === filter);

    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-3xl rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] border border-white/50 dark:border-slate-800 p-8 sm:p-12 relative">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${
                            filter === cat 
                            ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-lg shadow-fuchsia-500/30' 
                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-fuchsia-300 dark:hover:border-fuchsia-700 hover:text-fuchsia-600 dark:hover:text-fuchsia-400'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Masonry-Style Grid */}
            <motion.div 
                layout 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
            >
                <AnimatePresence>
                    {filteredPhotos.map((photo, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={photo.src}
                            onClick={() => setSelectedImage(photo)}
                            className={`group relative overflow-hidden rounded-[2rem] cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-500 bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 ${
                                index === 0 ? 'sm:col-span-2 sm:row-span-2' : '' // Make first item prominent
                            }`}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-xs font-black text-fuchsia-400 uppercase tracking-widest mb-1 block">
                                        {photo.category}
                                    </span>
                                    <h3 className="text-white font-bold text-lg leading-tight flex items-center gap-2">
                                        {photo.alt}
                                        <ZoomIn className="w-4 h-4 text-white/50" />
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Immersive Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-slate-900/95 backdrop-blur-xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button 
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 hover:scale-110 transition-all rounded-full flex items-center justify-center text-white z-50 backdrop-blur-md border border-white/20"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6" />
                        </motion.button>
                        
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl aspect-[4/3] sm:aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-fuchsia-900/50 ring-1 ring-white/20"
                            onClick={e => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain bg-black/50"
                                quality={100}
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 sm:p-10">
                                <span className="text-xs font-black text-fuchsia-400 uppercase tracking-widest mb-2 block">
                                    {selectedImage.category}
                                </span>
                                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                                    {selectedImage.alt}
                                </h2>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
