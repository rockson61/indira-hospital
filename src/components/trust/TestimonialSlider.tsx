'use client'

import Link from 'next/link';
import { Star, Quote, MapPin, Calendar, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from "@/config/site";

// Move static data outside component to prevent recreation on every render
import { testimonials } from "@/lib/data/testimonials-data"

interface ModernTestimonialsSectionProps {
 locationName?: string;
}

const TESTIMONIALS = testimonials.slice(0, 6);

const STATS = [
 { value: "50K+", label: "Patients Treated" },
 { value: "4.9/5", label: "Average Rating" },
 { value: "35+", label: "Years Expertise" },
 { value: "2K+", label: "Reviews" },
];

export function ModernTestimonialsSection({ locationName = 'Vellore' }: ModernTestimonialsSectionProps) {
 return (
 <section className="py-32 bg-slate-50 dark:bg-slate-950">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 
 {/* Section Header */}
 <div className="text-center mb-20">
 <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950/30 border border-fuchsia-100 dark:border-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-400 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
 <Quote className="w-4 h-4" /> Patient Success Stories
 </span>
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-6">
 What Our Patients{' '}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
 Say About Us
 </span>
 </h2>
 <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
 Real stories from real patients at Indira Super Speciality Hospital in {locationName}. Verified, authentic, and unedited.
 </p>
 </div>

 {/* Testimonials Grid */}
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
 {TESTIMONIALS.map((testimonial, index) => (
 <div
 key={index}
 className="group relative bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
 >
 <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/5 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

 {/* Quote icon */}
 <div className="absolute top-6 right-6 w-10 h-10 bg-fuchsia-50 dark:bg-fuchsia-950/30 rounded-2xl flex items-center justify-center">
 <Quote className="w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" />
 </div>

 {/* Rating Stars */}
 <div className="flex items-center gap-1 mb-5">
 {[...Array(testimonial.rating)].map((_, i) => (
 <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
 ))}
 </div>

 {/* Quote text */}
 <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-base mb-8 flex-grow">
 &ldquo;{testimonial.text}&rdquo;
 </p>

 {/* Patient Info */}
 <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
 <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-slate-100 dark:border-slate-700 shadow-sm flex-shrink-0">
 <Image
 src={testimonial.image}
 alt={testimonial.name}
 fill
 loading="lazy"
 className="object-cover"
 />
 </div>
 <div className="flex-1 min-w-0">
 <div className="flex items-center gap-2 mb-1">
 <h4 className="font-black text-slate-900 dark:text-white text-base truncate">{testimonial.name}</h4>
 {testimonial.verified && (
 <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
 )}
 </div>
 <p className="text-sm text-fuchsia-600 dark:text-fuchsia-400 font-bold truncate">{testimonial.treatment}</p>
 <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
 <MapPin className="w-3 h-3 flex-shrink-0" />
 <span className="truncate">{testimonial.location}</span>
 <span>•</span>
 <Calendar className="w-3 h-3 flex-shrink-0" />
 <span>{testimonial.date}</span>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Stats Band */}
 <div className="relative bg-slate-900 rounded-[4rem] p-12 lg:p-16 mb-24 overflow-hidden">
 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px] will-change-transform transform-gpu" />
 <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
 {STATS.map((stat, i) => (
 <div key={i} className="group cursor-default">
 <div className="text-5xl lg:text-6xl font-black text-white mb-3 group-hover:text-fuchsia-400 transition-colors">{stat.value}</div>
 <div className="text-sm font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>

 {/* Premium CTA */}
 <div className="relative bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-[4rem] p-12 lg:p-20 overflow-hidden text-center">
 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
 <div className="relative z-10">
 <h3 className="elite-section-title text-white mb-6">
 Ready to Join Our Happy Patients?
 </h3>
 <p className="text-fuchsia-100 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed">
 Experience the same quality care our patients rave about. Book your appointment today and start your journey.
 </p>
 <div className="flex flex-col sm:flex-row gap-5 justify-center">
 <a
 href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
 className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-fuchsia-700 font-black rounded-2xl hover:bg-slate-50 transition-colors shadow-2xl text-lg"
 >
 <Phone className="w-5 h-5" />
 {siteConfig.contact.phone}
 </a>
 <Link
 href="/book-appointment"
 className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-black rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-white dark:bg-slate-900 transition-all text-lg"
 >
 Book Appointment
 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
