import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone, MapPin, ArrowRight, Calendar } from "lucide-react";


import { siteConfig } from "@/config/site";

export function CTASection() {
 return (
 <section className="relative overflow-hidden">
 {/* Emergency banner strip */}
 <div className="bg-red-600 py-3">
 <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center gap-3 text-white text-sm font-semibold">
 <span className="relative flex h-2 w-2">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
 <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
 </span>
 24/7 Emergency Available — Call{" "}
 <a href={`tel:${siteConfig.contact.emergencyPhone.replace(/\s+/g, '')}`} className="underline underline-offset-2 hover:no-underline">{siteConfig.contact.emergencyPhone}</a>{" "}
 for immediate assistance
 </div>
 </div>

 {/* Main CTA area */}
 <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-fuchsia-900 py-16 sm:py-24 relative">
 {/* Decorative */}
 <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
 <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl" />

 <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="elite-section-title text-white mb-4">
 Ready to Prioritize Your Health?
 </h2>
 <p className="text-lg text-white/70 max-w-2xl mx-auto">
 Book an appointment with our specialists today. Choose the method that's most convenient for you.
 </p>
 </div>

 {/* Split booking cards */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
 {/* WhatsApp card */}
 <a
 href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hello Indira Hospital, I would like to book a clinical consultation at the Super Speciality Hospital.")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="group rounded-2xl bg-green-500 hover:bg-green-600 p-8 text-center transition-all duration-300 hover:shadow-clay-dark hover:shadow-green-500/30 hover:-translate-y-1"
 >
 <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
 <MessageCircle className="w-8 h-8 text-green-600" />
 </div>
 <h3 className="text-xl font-bold text-white mb-2">WhatsApp Booking</h3>
 <p className="text-green-100 text-sm mb-4">Fastest way to book. Get instant confirmation and cost estimates.</p>
 <span className="inline-flex items-center gap-2 text-white font-semibold">
 Book Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </span>
 </a>

 {/* Phone card */}
 <a
 href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
 className="group rounded-2xl bg-white/10 hover:bg-white/20 ring-1 ring-white/20 p-8 text-center transition-all duration-300 hover:shadow-clay-dark hover:-translate-y-1"
 >
 <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
 <Phone className="w-8 h-8 text-white" />
 </div>
 <h3 className="text-xl font-bold text-white mb-2">Call to Book</h3>
 <p className="text-white/70 text-sm mb-4">Speak directly with our reception team for appointment booking.</p>
 <span className="inline-flex items-center gap-2 text-white font-semibold">
 {siteConfig.contact.phone} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </span>
 </a>
 </div>

 {/* Location + quick links */}
 <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
 <div className="flex items-center gap-2">
 <MapPin className="w-4 h-4" />
 Katpadi Road, Vellore, Tamil Nadu 632004
 </div>
 <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
 <Link href="/departments" className="text-white/80 hover:text-white font-medium transition-colors">
 View Departments
 </Link>
 <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
 <Link href="/doctors" className="text-white/80 hover:text-white font-medium transition-colors">
 Find a Doctor
 </Link>
 </div>
 </div>
 </div>
 </section>
 );
}
