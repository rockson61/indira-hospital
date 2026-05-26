"use client";

import React from "react";
import Image from "next/image";
import { Quote, Award, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";

export function LeadershipMessage() {
 return (
 <SectionContainer className="pt-16 sm:pt-24 pb-24 sm:pb-32 relative z-20 overflow-hidden bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
 
 {/* Left: Photos & Badge */}
 <div className="relative flex justify-center lg:justify-start pt-10 sm:pt-16 lg:pt-0 pb-20 sm:pb-24 lg:pb-12">
 {/* Dramatic background glow */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-gradient-to-tr from-fuchsia-500/5 to-blue-500/5 dark:from-fuchsia-500/10 dark:to-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
 
 <div className="relative w-full max-w-md mx-auto lg:mx-0">
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="flex justify-center -space-x-12 sm:-space-x-16"
 >
 {/* Dr. P. Shankar */}
 <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[6px] border-white dark:border-slate-900 shadow-2xl overflow-hidden z-20">
 <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
 <Image 
 src="/images/doctors/dr-shankar.jpg" 
 alt="Dr. P. Shankar - Chairman" 
 fill 
 className="object-cover object-top"
 sizes="(max-width: 768px) 192px, 256px"
 priority
 />
 </div>
 {/* Dr. Karan Shankar */}
 <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[6px] border-white dark:border-slate-900 shadow-2xl overflow-hidden z-10 translate-y-12 sm:translate-y-16">
 <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
 <Image 
 src="/images/doctors/dr-karan-shankar.png" 
 alt="Dr. Karan Shankar - Executive Director" 
 fill 
 className="object-cover object-top" 
 sizes="(max-width: 768px) 192px, 256px"
 priority
 />
 </div>
 </motion.div>

 {/* Floating Badge */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
 className="absolute -bottom-16 sm:-bottom-20 -right-4 sm:-right-8 z-30 elite-card p-5 sm:p-6 rounded-3xl max-w-[280px] sm:max-w-[320px] shadow-2xl"
 >
 <div className="flex items-center gap-4 mb-3">
 <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
 <Award className="w-6 h-6 text-white" />
 </div>
 <p className="font-black text-slate-900 dark:text-white leading-tight text-sm sm:text-base">
 Top Leading Proctology Center
 </p>
 </div>
 <div className="flex items-center gap-2 pl-[4.5rem]">
 <Sparkles className="w-4 h-4 text-amber-500" />
 <p className="text-xs sm:text-sm font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest">
 India & Tamil Nadu
 </p>
 </div>
 </motion.div>
 </div>
 </div>

 {/* Right: Message */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
 className="relative mt-8 sm:mt-16 lg:mt-0"
 >
 <Quote className="absolute -top-12 -left-8 w-24 h-24 text-slate-100 dark:text-slate-800/50 -rotate-12" />
 
 <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 dark:bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-black tracking-[0.2em] uppercase shadow-sm mb-8 relative z-10">
 Chairman&apos;s Message
 </div>

 <h2 className="elite-section-title text-slate-900 dark:text-white mb-8 relative z-10">
 A Legacy of <br />
 <span className="elite-gradient-text">Clinical Prowess.</span>
 </h2>
 
 <div className="space-y-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed relative z-10">
 <p>
 &quot;At Indira Super Speciality Hospital, our primary mission has always been to bring world-class, advanced surgical care to the heart of Vellore. We firmly believe that elite-tier medical interventions should not be restricted to metropolitan cities.&quot;
 </p>
 <p>
 &quot;Through our dedicated focus on <strong className="font-bold text-slate-900 dark:text-white">Advanced Laser Proctology and Laparoscopy</strong>, we have introduced painless, minimally invasive techniques that ensure rapid recovery and definitive cures. Our promise is simple: unwavering clinical excellence delivered with deep-rooted compassion.&quot;
 </p>
 </div>
 
 <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-8">
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-md">
 <Image src="/images/doctors/dr-shankar.jpg" alt="Dr P Shankar" fill className="object-cover" sizes="48px" />
 </div>
 <div>
 <h4 className="font-black text-slate-900 dark:text-white text-base">Dr. P. Shankar</h4>
 <p className="text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400 tracking-widest uppercase mt-0.5">Chairman</p>
 </div>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-md bg-slate-100">
 <Image src="/images/doctors/dr-karan-shankar.png" alt="Dr Karan Shankar" fill className="object-cover object-top" sizes="48px" />
 </div>
 <div>
 <h4 className="font-black text-slate-900 dark:text-white text-base">Dr. Karan Shankar</h4>
 <p className="text-[10px] font-bold text-fuchsia-600 dark:text-fuchsia-400 tracking-widest uppercase mt-0.5">Exec. Director</p>
 </div>
 </div>
 </div>
 </motion.div>

 </div>
 </div>
 </SectionContainer>
 );
}
