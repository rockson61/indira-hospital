"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Clock, Zap, Target, Search } from "lucide-react";

export function Hero() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
            {/* VIDEO BACKGROUND OVERLAY */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-40 scale-105"
                    poster="/hero-hospital.png"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-surgeons-performing-a-surgery-in-an-operating-room-41315-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-32 lg:px-8 w-full">
                <div className="max-w-3xl">
                    {/* Trust Batch */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">Indira Super Speciality Hospital</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
                        Precision <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Healthcare.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium">
                        Vellore's premier destination for advanced surgery, interventional cardiology,
                        and 24/7 trauma excellence. Proven expertise with human compassion.
                    </p>

                    {/* HERO ACTION BAR - NEW UI */}
                    <div className="flex flex-col md:flex-row gap-4 mb-16">
                        <Link
                            href="/book-appointment"
                            className="px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-purple-500/20 flex items-center justify-center gap-3 active:scale-95"
                        >
                            <Target className="w-6 h-6" /> Book Appointment
                        </Link>
                        <a
                            href="https://wa.me/917010650063"
                            className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white rounded-2xl font-black text-lg border border-white/20 transition-all flex items-center justify-center gap-3 active:scale-95"
                        >
                            <MessageCircle className="w-6 h-6 text-green-400" /> WhatsApp Direct
                        </a>
                    </div>

                    {/* HERO QUICK FIND */}
                    <div className="relative max-w-xl group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 group-focus-within:opacity-100 transition duration-1000 group-focus-within:duration-200" />
                        <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl p-2">
                            <Search className="w-6 h-6 text-slate-400 ml-4" />
                            <input
                                type="text"
                                placeholder="Search Doctors, Diseases or Departments..."
                                className="w-full bg-transparent border-none outline-none px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 font-medium"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <Link
                                    href={`/doctors?q=${searchTerm}`}
                                    className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all"
                                >
                                    Find
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* STATS STRIP */}
                <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-6">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 min-w-[200px]">
                        <p className="text-3xl font-black text-white">25+</p>
                        <p className="text-slate-400 font-bold text-sm uppercase">Expert Specialists</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 min-w-[200px]">
                        <p className="text-3xl font-black text-white">24/7</p>
                        <p className="text-slate-400 font-bold text-sm uppercase">Emergency Care</p>
                    </div>
                </div>
            </div>

            {/* DECORATIVE MESH */}
            <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-20">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-500">
                    <path fill="currentColor" d="M45.7,-77.6C58.3,-69.1,67.1,-54.2,74.1,-39.1C81.1,-24.1,86.2,-8.8,84.7,6.1C83.2,21,75.1,35.5,65,48.2C54.8,60.9,42.7,71.8,28.7,77.1C14.7,82.4,-1.2,82.2,-16.7,78.5C-32.2,74.9,-47.4,67.7,-60.1,57C-72.8,46.3,-83,32,-87.3,16.2C-91.5,0.4,-89.9,-16.8,-82.7,-31.4C-75.5,-46.1,-62.7,-58.2,-48.3,-66C-33.8,-73.8,-17.7,-77.4,-0.4,-76.8C16.9,-76.1,33.1,-86.1,45.7,-77.6Z" transform="translate(100 100)" />
                </svg>
            </div>
        </section>
    );
}
