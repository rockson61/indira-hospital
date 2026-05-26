"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EliteImage } from '@/components/ui/elite-image';
import { X, ZoomIn, Sparkles } from 'lucide-react';

interface Photo {
 id: number;
 src: string;
 alt: string;
 category: string;
}

interface GalleryClientProps {
 images: Photo[];
}

export default function GalleryClient({ images }: GalleryClientProps) {
 const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
 const [filter, setFilter] = useState("All");

 const categories = ["All", ...Array.from(new Set(images.map(p => p.category)))];

 const filteredPhotos = filter === "All" ? images : images.filter(p => p.category === filter);

 return (
 <div className="relative">
 {/* Filter Pills */}
 <div className="flex flex-wrap items-center justify-center gap-3 mb-16 px-4">
 {categories.map(cat => (
 <button
 key={cat}
 onClick={() => setFilter(cat)}
 className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
 filter === cat 
 ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-2xl shadow-indigo-500/20 scale-105' 
 : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105'
 }`}
 >
 {cat}
 </button>
 ))}
 </div>

 {/* Masonry-Style Grid */}
 <motion.div 
 layout 
 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px]"
 >
 <AnimatePresence mode="popLayout">
 {filteredPhotos.map((photo, index) => (
 <motion.div
 layout
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.9 }}
 transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
 key={photo.src}
 onClick={() => setSelectedImage(photo)}
 className={`group relative overflow-hidden rounded-[3.5rem] cursor-pointer shadow-lg hover:shadow-[0_40px_100px_-20px_rgba(99,102,241,0.2)] transition-all duration-700 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 ${
 index === 0 && filter === "All" ? 'sm:col-span-2 sm:row-span-2' : ''
 }`}
 >
 <EliteImage
 src={photo.src}
 alt={photo.alt}
 fill
 className="object-cover transition-transform duration-1000 group-hover:scale-110"
 />
 
 {/* Overlay */}
 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform">
 <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-3">
 {photo.category}
 </span>
 <h3 className="text-white font-black text-2xl tracking-tight leading-tight mb-2 uppercase italic">
 {photo.alt}
 </h3>
 <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-fuchsia-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100 rounded-full" />
 </div>

 {/* Always-visible category chip */}
 <div className="absolute top-8 left-8 z-20">
 <span className="inline-flex items-center px-5 py-2 rounded-full bg-black/40 text-white text-[10px] font-black uppercase tracking-[0.2em] border border-slate-200 dark:border-slate-800 shadow-2xl">
 {photo.category}
 </span>
 </div>

 <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
 <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-white shadow-2xl">
 <Sparkles className="w-5 h-5" />
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
 className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 lg:p-20 bg-slate-950/98 "
 onClick={() => setSelectedImage(null)}
 >
 <motion.button 
 className="absolute top-8 right-8 w-14 h-14 bg-white dark:bg-slate-900 hover:bg-white dark:bg-slate-900 hover:scale-110 active:scale-90 transition-all rounded-full flex items-center justify-center text-white z-[110] border border-slate-200 dark:border-slate-800"
 onClick={() => setSelectedImage(null)}
 >
 <X className="w-8 h-8" />
 </motion.button>
 
 <motion.div
 initial={{ scale: 0.9, y: 40, opacity: 0 }}
 animate={{ scale: 1, y: 0, opacity: 1 }}
 exit={{ scale: 0.9, y: 40, opacity: 0 }}
 transition={{ type: "spring", damping: 30, stiffness: 200 }}
 className="relative w-full h-full max-w-7xl rounded-[4rem] overflow-hidden shadow-[0_0_150px_-30px_rgba(99,102,241,0.4)] border border-slate-200 dark:border-slate-800"
 onClick={e => e.stopPropagation()}
 >
 <EliteImage
 src={selectedImage.src}
 alt={selectedImage.alt}
 fill
 className="object-contain bg-slate-950/50"
 quality={100}
 priority
 />
 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-12 lg:p-20">
 <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-4 block">
 {selectedImage.category}
 </span>
 <h2 className="elite-section-title text-white er mb-6 uppercase italic">
 {selectedImage.alt}
 </h2>
 <div className="h-2 w-32 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full" />
 </div>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
}
