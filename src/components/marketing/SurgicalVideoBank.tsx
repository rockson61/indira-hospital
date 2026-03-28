"use client";
import React, { useState } from "react";
import { Play, Shield, Users, Award, ChevronRight, PlayCircle } from "lucide-react";
import { ModernCard } from "@/components/ui/modern-card";

interface VideoItem {
    id: string;
    title: string;
    duration: string;
    category: "Robotic Surgery" | "Patient Story" | "Expert Insight";
    thumbnail: string;
    previewUrl: string;
}

const VIDEO_BANK: VideoItem[] = [
    {
        id: "v1",
        title: "Robotic Laser Piles: Precision Mapping",
        duration: "1:45",
        category: "Robotic Surgery",
        thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
        previewUrl: "#"
    },
    {
        id: "v2",
        title: "Knee Replacement: The Elite Recovery Journey",
        duration: "3:20",
        category: "Patient Story",
        thumbnail: "https://images.unsplash.com/photo-1581594653786-ca9ed8370002?auto=format&fit=crop&q=80&w=800",
        previewUrl: "#"
    },
    {
        id: "v3",
        title: "Institutional Mastery: 35 Years of Indira",
        duration: "2:15",
        category: "Expert Insight",
        thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
        previewUrl: "#"
    }
];

export function SurgicalVideoBank() {
    const [selectedVideo, setSelectedVideo] = useState<VideoItem>(VIDEO_BANK[0]);

    return (
        <section className="py-12">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                        <PlayCircle className="w-8 h-8 text-fuchsia-600" />
                        Clinical Video Bank
                    </h2>
                    <p className="text-slate-500 font-medium mt-1">Witness Elite surgical precision and patient outcomes.</p>
                </div>
                <div className="hidden md:flex gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-full border border-fuchsia-100 dark:border-fuchsia-900">
                        <Shield className="w-4 h-4 text-fuchsia-600" />
                        <span className="text-xs font-bold text-fuchsia-900 dark:text-fuchsia-100 uppercase tracking-widest">Verified Outcomes</span>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Main Player Area */}
                <div className="lg:col-span-8">
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/10 group shadow-2xl">
                        <img 
                            src={selectedVideo.thumbnail} 
                            alt={selectedVideo.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-slate-950 via-transparent to-transparent">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-fuchsia-600 text-[10px] font-black text-white rounded-full uppercase tracking-tighter">
                                    {selectedVideo.category}
                                </span>
                                <span className="text-white/60 text-xs font-bold flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {selectedVideo.duration}
                                </span>
                            </div>
                            <h3 className="text-3xl font-black text-white mb-6 group-hover:text-fuchsia-400 transition-colors">
                                {selectedVideo.title}
                            </h3>
                            <button className="w-fit flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-extrabold rounded-full hover:bg-fuchsia-50 transition-all shadow-float active:scale-95">
                                <Play className="w-5 h-5 fill-current" />
                                WATCH SURGICAL INSIGHT
                            </button>
                        </div>
                    </div>
                </div>

                {/* Playlist Area */}
                <div className="lg:col-span-4 space-y-4">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-500" />
                        Featured Testimonials
                    </p>
                    {VIDEO_BANK.map(video => (
                        <button 
                            key={video.id}
                            onClick={() => setSelectedVideo(video)}
                            className={`w-full flex gap-4 p-4 rounded-3xl transition-all border text-left ${
                                selectedVideo.id === video.id 
                                ? "bg-white dark:bg-slate-900 border-fuchsia-500/50 shadow-lg ring-1 ring-fuchsia-500/20" 
                                : "bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-900/50"
                            }`}
                        >
                            <div className="relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                <img src={video.thumbnail} className="w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center">
                                    <Play className="w-4 h-4 text-white fill-current opacity-60" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center min-w-0">
                                <span className="text-[10px] font-black text-fuchsia-600 uppercase tracking-widest truncate">{video.category}</span>
                                <h4 className={`text-sm font-bold truncate ${selectedVideo.id === video.id ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}>
                                    {video.title}
                                </h4>
                            </div>
                        </button>
                    ))}

                    <ModernCard className="p-6 bg-slate-900 mt-8 border-none rounded-[2rem] overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
                        <h4 className="text-white font-black text-lg mb-2">Join Our Journey</h4>
                        <p className="text-slate-400 text-xs leading-relaxed mb-4">Subscribe to our Clinical Mastery series for weekly medical innovations and patient success stories from Vellore.</p>
                        <button className="text-fuchsia-400 text-xs font-black flex items-center gap-1 hover:gap-2 transition-all group">
                            VIEW FULL CHANNEL
                            <ChevronRight className="w-3 h-3" />
                        </button>
                    </ModernCard>
                </div>
            </div>
        </section>
    );
}

function Clock(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}
