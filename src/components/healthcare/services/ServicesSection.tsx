"use client"

import { useState } from "react"
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Clock, IndianRupee, Sparkles } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { servicesData } from "@/lib/data/services-data"
import { motion } from "framer-motion"

// Services are now loaded from lib/data/services-data.tsx
const services = servicesData.map(service => ({
 ...service,
 link: service.href // Map href to link for compatibility
}));

export function ServicesSection() {
 const [activeService, setActiveService] = useState(0)

 return (
 <section className="py-24 bg-[#030712] relative overflow-hidden">
 {/* Cinematic Background Elements */}
 <div className="absolute inset-0 bg-[url(/images/hospital/Hospital.webp)] opacity-[0.03] mix-blend-overlay pointer-events-none" />
 <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none will-change-transform transform-gpu" />
 <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none will-change-transform transform-gpu" />
 
 <div className="container mx-auto px-4 relative z-10">
 {/* Section Header */}
 <div className="max-w-4xl mb-16">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-bold uppercase tracking-widest mb-6"
 >
 <Sparkles className="w-3 h-3" />
 Specialized Care
 </motion.div>
 <h2 className="elite-section-title text-white mb-6">
 Advanced Clinical <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Elite Medical Units</span>
 </h2>
 <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
 Indira Hospital brings world-class medical expertise and state-of-the-art technology under one roof, providing comprehensive healing for every member of your family.
 </p>
 </div>

 {/* Services Tabs/Grid */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
 {/* Navigation Sidebar */}
 <div className="lg:col-span-4 space-y-3">
 {services.map((service, index) => {
 const IconComponent = service.icon
 const isActive = activeService === index

 return (
 <button
 key={index}
 onClick={() => setActiveService(index)}
 className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
 isActive 
 ? "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xl" 
 : "bg-transparent border-transparent hover:bg-white dark:bg-slate-900"
 } border`}
 >
 {isActive && (
 <motion.div 
 layoutId="activeTab"
 className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/10 to-transparent"
 />
 )}
 <div className={`p-3 rounded-xl transition-colors shrink-0 relative z-10 ${
 isActive ? "bg-fuchsia-500 text-white" : "bg-white dark:bg-slate-900 text-gray-500 group-hover:text-slate-900 dark:text-white"
 }`}>
 <IconComponent className="w-6 h-6" />
 </div>
 <div className="text-left relative z-10">
 <h3 className={`font-bold transition-colors ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
 {service.title}
 </h3>
 </div>
 <ArrowRight className={`ml-auto w-4 h-4 transition-all duration-500 ${
 isActive ? "text-fuchsia-400 opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
 }`} />
 </button>
 )
 })}
 </div>

 {/* Featured View */}
 <div className="lg:col-span-8 h-full">
 <motion.div
 key={activeService}
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5 }}
 className="h-full"
 >
 <GlassCard className="p-8 lg:p-12 h-full border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:border-slate-800 transition-colors group">
 <div className="flex flex-col h-full">
 <div className="flex items-start justify-between mb-8">
 <div className="p-4 rounded-2xl bg-fuchsia-500/10 text-fuchsia-400">
 {(() => {
 const Icon = services[activeService].icon;
 return <Icon className="w-10 h-10" />;
 })()}
 </div>
 <div className="flex gap-2">
 <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-gray-400">95% Success Rate</span>
 <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-gray-400">NABH Accredited</span>
 </div>
 </div>

 <h3 className="elite-section-title text-white mb-6">
 {services[activeService].title}
 </h3>
 <p className="text-xl text-gray-400 mb-8 leading-relaxed">
 {services[activeService].description}
 </p>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
 {(services[activeService].features || []).map((feature, idx) => (
 <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-slate-200 dark:border-slate-800 transition-colors">
 <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" />
 <span className="text-gray-200 font-medium">{feature}</span>
 </div>
 ))}
 </div>

 <div className="mt-auto flex flex-wrap items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
 <div className="flex items-center gap-3">
 <div className="flex -space-x-2">
 {[1,2,3].map(i => (
 <div key={i} className="w-8 h-8 rounded-full border-2 border-[#030712] bg-gray-800" />
 ))}
 </div>
 <span className="text-sm text-gray-400 font-medium">15k+ Surgeries Done</span>
 </div>
 
 <div className="ml-auto flex gap-4">
 <Link
 href={services[activeService].href}
 className="inline-flex items-center h-12 px-8 rounded-xl bg-white text-black font-bold hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
 >
 Explore Center
 <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 <Link
 href="/book-appointment"
 className="inline-flex items-center h-12 px-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:bg-white dark:bg-slate-900 transition-all duration-300"
 >
 Book Appointment
 </Link>
 </div>
 </div>
 </div>
 </GlassCard>
 </motion.div>
 </div>
 </div>

 {/* Global CTA */}
 <motion.div 
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-r from-fuchsia-600 to-indigo-600 relative overflow-hidden group shadow-2xl shadow-fuchsia-500/20"
 >
 <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white dark:bg-slate-900 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
 
 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
 <div>
 <h4 className="text-3xl md:text-4xl font-black text-white mb-2">Can&apos;t find what you&apos;re looking for?</h4>
 <p className="text-white/80 font-medium text-lg">Browse our full clinical directory of over 200+ specialized treatments.</p>
 </div>
 <Link
 href="/doctor/near-me/treat"
 className="inline-flex items-center px-10 py-5 bg-white text-fuchsia-600 rounded-2xl font-black text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95"
 >
 View Full Directory
 <ArrowRight className="ml-3 w-6 h-6" />
 </Link>
 </div>
 </motion.div>
 </div>
 </section>
 )
}
