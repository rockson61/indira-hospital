'use client'

import React from 'react'
import { SectionContainer } from '@/components/ui/section-container'
import { Button } from '@/components/ui/button'
import { 
 Clock, 
 ShieldCheck, 
 MapPin, 
 MessageCircle, 
 Phone, 
 AlertCircle, 
 CheckCircle2, 
 Home, 
 Beaker, 
 Microscope, 
 Zap, 
 Activity,
 ChevronRight,
 Search,
 Star,
 Award
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import EntityReviews from '@/components/trust/EntityReviews'
import { JsonLdSchema } from '@/components/seo/JsonLdSchema'
import { InternalLinkGrid } from '@/components/seo/InternalLinkGrid'

interface DiagnosticTemplateProps {
 title: string
 slug: string
 category: string
 description: React.ReactNode
 quickFacts: { label: string; value: string; icon: any }[]
 reportTime: string
 homeCollection: boolean
 fastingRequired: boolean
 sampleType?: string
 parametersCount?: number
 fullDescription: React.ReactNode
 price?: string
}

export function DiagnosticTemplate({
 title,
 slug,
 category,
 description,
 quickFacts,
 reportTime,
 homeCollection,
 fastingRequired,
 sampleType,
 parametersCount,
 fullDescription,
 price = "Request Pricing"
}: DiagnosticTemplateProps) {
 const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I want to book a ${title} at Indira Diagnostics.`)}`

 return (
 <main className="min-h-screen pb-20 selection:bg-fuchsia-100 selection:text-fuchsia-900">
 {/* Unified Semantic Knowledge & AEO Infrastructure */}
 <JsonLdSchema 
 type="diagnostic" 
 name={`${title} in Vellore`}
 description={String(description).slice(0, 300)}
 category={category}
 preparation={`Report in: ${reportTime}. ${homeCollection ? 'Home collection available.' : ''} ${fastingRequired ? 'Fasting required.' : ''}`}
 isNabl={true} // All diagnostics in this template are NABL accredited per UI
 items={[
 { name: "Home", url: "/" },
 { name: "Diagnostics", url: "/diagnostics" },
 { name: title, url: `/diagnostics/${slug}` }
 ]}
 />

 {/* 1. Elite Diagnostic Hero */}
 <div className="relative bg-slate-50 dark:bg-slate-900 py-16 md:py-24 border-b overflow-hidden">
 <div className="absolute top-0 right-0 w-1/3 h-full bg-fuchsia-500/5 blur-[120px] -z-10" />
 <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-500/5 blur-[100px] -z-10" />
 
 <SectionContainer>
 <div className="grid lg:grid-cols-12 gap-12 items-start">
 <div className="lg:col-span-8 space-y-8">
 <div>
 <div className="flex items-center gap-2 mb-4">
 <span className="px-3 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/40 text-fuchsia-700 dark:text-fuchsia-300 text-[10px] font-black uppercase tracking-widest rounded-full border border-fuchsia-200 dark:border-fuchsia-800">
 NABL Accredited Laboratory
 </span>
 <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-200 dark:border-slate-700">
 {category}
 </span>
 </div>
 <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight font-heading uppercase italic">
 {title} <br />
 <span className="text-fuchsia-600">Diagnostics in Vellore</span>
 </h1>
 <div className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed font-medium antialiased">
 {description}
 </div>
 </div>

 {/* Quick Stats Grid */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {quickFacts.map((fact, i) => (
 <div key={i} className="p-4 rounded-2xl bg-white dark:bg-slate-800 border shadow-sm group hover:border-fuchsia-500 transition-all">
 <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-600 mb-3 group-hover:scale-110 transition-transform">
 {typeof fact.icon === 'string' ? <Activity className="w-5 h-5" /> : <fact.icon className="w-5 h-5" />}
 </div>
 <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{fact.label}</div>
 <div className="text-sm font-bold text-slate-900 dark:text-white truncate">{fact.value}</div>
 </div>
 ))}
 </div>
 </div>

 {/* Booking Card */}
 <div className="lg:col-span-4 sticky top-24">
 <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border shadow-clay-dark shadow-fuchsia-500/10 relative overflow-hidden">
 <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-3xl -z-10" />
 <div className="flex justify-between items-start mb-6">
 <div>
 <div className="text-[10px] font-black uppercase tracking-widest text-fuchsia-600 mb-1">Estimated Cost</div>
 <div className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter italic">{price}</div>
 </div>
 <div className="bg-green-50 dark:bg-green-950/40 p-2 rounded-xl text-green-700 dark:text-green-400">
 <ShieldCheck className="w-6 h-6" />
 </div>
 </div>

 <div className="space-y-4 mb-8">
 <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50">
 <Clock className="w-4 h-4 text-fuchsia-500" />
 <span className="text-xs font-bold uppercase tracking-wide">Report in: {reportTime}</span>
 </div>
 {homeCollection && (
 <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 text-blue-700 dark:text-blue-300">
 <Home className="w-4 h-4" />
 <span className="text-xs font-bold uppercase tracking-wide">Home Collection Available</span>
 </div>
 )}
 {fastingRequired && (
 <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/50 text-amber-700 dark:text-amber-300">
 <AlertCircle className="w-4 h-4" />
 <span className="text-xs font-bold uppercase tracking-wide">Fasting Required</span>
 </div>
 )}
 </div>

 <div className="space-y-3">
 <Button className="w-full h-14 rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-clay shadow-fuchsia-500/20 text-md font-bold uppercase tracking-wider" asChild>
 <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
 <MessageCircle className="w-5 h-5 mr-2" />
 Book via WhatsApp
 </a>
 </Button>
 <Button variant="outline" className="w-full h-12 rounded-2xl border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-widest" asChild>
 <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}>
 <Phone className="w-4 h-4 mr-2" />
 Call Health Desk
 </a>
 </Button>
 </div>
 
 <p className="text-[9px] text-center mt-6 text-slate-400 font-medium leading-relaxed italic">
 Prices include digital reports & GST. <br /> Our labs are NABL certified.
 </p>
 </div>
 </div>
 </div>
 </SectionContainer>
 </div>

 {/* 2. Elite Content Body */}
 <SectionContainer className="py-20">
 <div className="grid lg:grid-cols-12 gap-16">
 <div className="lg:col-span-8">
 <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter prose-p:leading-[1.8] prose-p:text-slate-600 dark:prose-p:text-slate-400">
 {fullDescription}
 </div>

 {/* Reviews Section */}
 <div className="mt-20 border-t pt-20">
 <EntityReviews
 entityType="diagnostic"
 entityName={title}
 entitySlug={slug}
 title={`Patient Trust Score for ${title}`}
 description="Real feedback from patients who completed their diagnostic pathway at Indira Hospital."
 />
 </div>
 </div>

 {/* Sidebar Trust Column */}
 <div className="lg:col-span-4 space-y-10">
 {/* Quality Grid */}
 <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 to-transparent -z-10" />
 <h3 className="text-xl font-bold mb-6 italic font-heading uppercase tracking-widest text-fuchsia-300">Indira Quality Audit</h3>
 <div className="space-y-6">
 {[
 { title: "NABL Accredited", desc: "Highest diagnostic standard in India.", icon: Award },
 { title: "Latest Tech", desc: "1.5T MRI & 128-Slice CT automation.", icon: Microscope },
 { title: "Expert Validated", desc: "Every report is double-verified.", icon: ShieldCheck }
 ].map((item, i) => (
 <div key={i} className="flex gap-4">
 <item.icon className="w-6 h-6 text-fuchsia-400 flex-shrink-0" />
 <div>
 <h4 className="font-bold text-sm mb-1">{item.title}</h4>
 <p className="text-[10px] text-slate-400 font-medium italic">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Internal Navigation */}
 <div className="space-y-4">
 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 px-4">Other Diagnostic Hubs</h3>
 <div className="grid grid-cols-1 gap-2">
 {[
 { name: "MRI Scan Excellence", href: "/diagnostics/mri-scan" },
 { name: "CT Scan Rapid Diagnostics", href: "/diagnostics/ct-scan" },
 { name: "Executive Health Packages", href: "/health-packages" },
 { name: "Pathology Home Collect", href: "/diagnostics/complete-blood-count" }
 ].map((link, i) => (
 <a 
 key={i} 
 href={link.href}
 className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border hover:border-fuchsia-500 transition-all group"
 >
 <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{link.name}</span>
 <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-fuchsia-500 transition-colors" />
 </a>
 ))}
 </div>
 </div>
 </div>
 </div>
 </SectionContainer>

 {/* Bottom SEO Grids */}
 <InternalLinkGrid
 type="diagnostics"
 title="Full Diagnostic Spectrum"
 subtitle="NABL Accredited Lab"
 limit={12}
 excludeSlug={slug}
 className="bg-slate-50 dark:bg-slate-900 border-t"
 />
 </main>
 )
}
