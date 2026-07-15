'use client'

import React from 'react'
import { motion } from 'framer-motion'
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
 Award,
 Sparkles
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import EntityReviews from '@/components/trust/EntityReviews'
import { JsonLdSchema } from '@/components/seo/JsonLdSchema'
import { InternalLinkGrid } from '@/components/seo/InternalLinkGrid'
import { HeroBackground } from './common/HeroBackground'
import { Breadcrumbs } from './common/Breadcrumbs'
import { QuickStatsGrid } from './common/QuickStatsGrid'
import { BookingSidebarCard } from './common/BookingSidebarCard'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15
    }
  }
};


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

  const isSSR = typeof window === 'undefined';

  return (
  <main className="min-h-screen pb-20 selection:bg-fuchsia-100 selection:text-fuchsia-900 bg-background text-foreground">
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

  {/* 1. Premium Diagnostic Hero */}
  <HeroBackground glowColor="indigo">
    <SectionContainer className="relative z-10 py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Diagnostics", url: "/diagnostics" },
          { name: title }
        ]}
        className="mb-10"
      />

      <motion.div 
        variants={containerVariants}
        initial={isSSR ? "visible" : "hidden"}
        animate="visible"
        className="grid lg:grid-cols-12 gap-12 items-start"
      >
        <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="elite-tag border-fuchsia-500/20 dark:border-fuchsia-500/30 text-fuchsia-600 dark:text-fuchsia-300 bg-fuchsia-50/50 dark:bg-white/5 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-500 dark:text-fuchsia-400" /> NABL Accredited Laboratory
              </span>
              <span className="elite-tag border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 backdrop-blur-sm">
                {category}
              </span>
            </div>
            <h1 className="elite-hero-title text-slate-900 dark:text-white mb-6">
              {title} <br />
              <span className="elite-gradient-text">Diagnostics in Vellore</span>
            </h1>
            <div className="text-xl text-slate-650 dark:text-slate-200 max-w-3xl leading-relaxed font-light opacity-90">
              {description}
            </div>
          </div>

          <QuickStatsGrid items={quickFacts || []} />
        </motion.div>

        {/* Booking Card */}
        <motion.div variants={itemVariants} className="lg:col-span-4 sticky top-24">
          <BookingSidebarCard
            title="Book Test"
            subtitle="Secure home sample collection & digital reports."
            price={price}
            whatsappUrl={whatsappLink}
            phoneUrl={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
            reportTime={reportTime}
            homeCollection={homeCollection}
            fastingRequired={fastingRequired}
            verifiedText="NABL Certified Partner Lab"
          />
        </motion.div>
      </motion.div>
    </SectionContainer>
  </HeroBackground>

 {/* 2. Elite Content Body */}
 <SectionContainer className="py-20">
 <div className="grid lg:grid-cols-12 gap-16">
 <div className="lg:col-span-8">
 <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:prose-headings:tracking-tighter prose-p:leading-[1.8] prose-p:text-slate-600 dark:prose-p:text-slate-400">
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
            <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-sm dark:shadow-none">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/5 dark:from-fuchsia-600/20 to-transparent -z-10" />
              <h3 className="text-xl font-bold mb-6 font-heading uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-300">Indira Quality Audit</h3>
              <div className="space-y-6">
                {[
                  { title: "NABL Accredited", desc: "Highest diagnostic standard in India.", icon: Award },
                  { title: "Latest Tech", desc: "1.5T MRI & 128-Slice CT automation.", icon: Microscope },
                  { title: "Expert Validated", desc: "Every report is double-verified.", icon: ShieldCheck }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <item.icon className="w-6 h-6 text-fuchsia-500 dark:text-fuchsia-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

  {/* Internal Navigation */}
  <div className="space-y-4">
  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 px-4">More Diagnostics Near You</h3>
  <div className="grid grid-cols-1 gap-2">
  {[
  { name: "Best MRI Scan in Vellore", href: "/diagnostics/mri-scan" },
  { name: "Top CT Scan Diagnostics", href: "/diagnostics/ct-scan" },
  { name: "Affordable Health Packages", href: "/health-packages" },
  { name: "Blood Tests – Home Collection", href: "/diagnostics/complete-blood-count" }
  ].map((link, i) => (
  <a 
  key={i} 
  href={link.href}
  className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-fuchsia-500 dark:hover:border-fuchsia-500 transition-all group"
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
