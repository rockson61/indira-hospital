'use client'

import { SectionContainer } from "@/components/ui/section-container"
import { Star, Quote, CheckCircle, MapPin } from "lucide-react"
import Image from "next/image"
import { useTestimonials } from "@/hooks/useTestimonials"
import Link from "next/link"

const REVIEW_PLATFORMS = [
 { rating: "4.9", platform: "Google Reviews", color: "text-blue-500" },
 { rating: "4.8", platform: "JustDial", color: "text-orange-500" },
 { rating: "4.9", platform: "Practo", color: "text-primary" },
 { rating: "5.0", platform: "Facebook", color: "text-blue-600" },
];

export function TestimonialsSection() {
 const allTestimonials = useTestimonials();
 const testimonials = allTestimonials.slice(0, 6);

 return (
 <section className="py-32 bg-slate-50 dark:bg-slate-950">
 <SectionContainer>
 {/* Section Header */}
 <div className="text-center mb-20">
 <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950/30 border border-fuchsia-100 dark:border-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-400 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
 <Quote className="w-4 h-4" /> Patient Views
 </span>
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-6">
 What Our Patients{" "}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
 Say About Us
 </span>
 </h2>
 <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
 Real experiences from our verified patients across Vellore
 </p>
 </div>

 {/* Aggregate Rating Block */}
 <div className="flex justify-center mb-24">
 <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] p-10 shadow-float flex flex-col items-center gap-4">
 <div className="text-7xl font-black text-slate-900 dark:text-white tracking-tighter">4.9</div>
 <div className="flex">
 {[1,2,3,4,5].map(s => (
 <Star key={s} className="w-7 h-7 text-amber-400 fill-amber-400" />
 ))}
 </div>
 <div className="text-center">
 <div className="text-lg font-black text-slate-700 dark:text-slate-300">Based on 2,000+ Reviews</div>
 <div className="text-sm text-slate-400 font-medium">Google · JustDial · Practo · Facebook</div>
 </div>
 </div>
 </div>

 {/* Testimonials Grid */}
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
 {testimonials.map((testimonial, index) => (
 <div
 key={index}
 className="group relative bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-clay-sm hover:shadow-clay-dark hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
 >
 <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/5 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

 <div className="absolute top-6 right-6 w-10 h-10 bg-fuchsia-50 dark:bg-fuchsia-950/30 rounded-[1.2rem] flex items-center justify-center flex-shrink-0">
 <Quote className="w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" />
 </div>

 <div className="flex items-center gap-1 mb-5">
 {[1,2,3,4,5].map(s => (
 <Star key={s} className={`w-5 h-5 ${s <= testimonial.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 dark:text-slate-700"}`} />
 ))}
 </div>

 <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-5 flex-grow">
 &ldquo;{testimonial.text}&rdquo;
 </p>

 <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-fuchsia-50 dark:bg-fuchsia-950/30 rounded-xl mb-6">
 <span className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400">{testimonial.treatment}</span>
 </div>

 <div className="flex items-center gap-4 pt-5 border-t border-slate-100 dark:border-slate-800">
 <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-slate-100 dark:border-slate-700 flex-shrink-0">
 <Image
 src={testimonial.image || "/images/hospital/Hospital.webp"}
 alt={testimonial.name}
 fill
 loading="lazy"
 className="object-cover"
 />
 </div>
 <div className="flex-1 min-w-0">
 <div className="flex items-center gap-2 mb-0.5">
 <h4 className="font-black text-slate-900 dark:text-white text-sm truncate">{testimonial.name}{(testimonial as any).age ? `, ${(testimonial as any).age}` : ""}</h4>
 <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
 </div>
 <div className="flex items-center gap-1 text-xs text-slate-400">
 <MapPin className="w-3 h-3 flex-shrink-0" />
 <span className="truncate">{testimonial.location}</span>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Platform Ratings */}
 <div className="text-center">
 <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Find Us On</p>
 <div className="flex flex-wrap justify-center gap-6">
 {REVIEW_PLATFORMS.map((p, i) => (
 <div key={i} className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-8 py-5 text-center hover:shadow-clay-sm hover:-translate-y-1 transition-all duration-300">
 <div className={`text-2xl font-black ${p.color} mb-1`}>{p.rating}★</div>
 <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{p.platform}</div>
 </div>
 ))}
 </div>
 </div>
 </SectionContainer>
 </section>
 )
}
