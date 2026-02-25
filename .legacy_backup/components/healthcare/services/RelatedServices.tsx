'use client'

import React, { useMemo, memo } from 'react'
import Link from 'next/link'

export interface SimpleServiceItem {
  title: string
  href: string
}

export interface RelatedServicesProps {
  serviceSlug: string
  heading?: string
  related?: SimpleServiceItem[]
  alternatives?: SimpleServiceItem[]
}

// Comprehensive fallback services that apply to medical services
const DEFAULT_RELATED: SimpleServiceItem[] = [
  { title: 'Emergency Care 24/7', href: '/contact' },
  { title: 'Health Checkup Packages', href: '/diagnostics' },
  { title: 'Specialist Consultation', href: '/doctors' },
  { title: 'Diagnostic Lab Services', href: '/diagnostics' },
]

const DEFAULT_ALTERNATIVES: SimpleServiceItem[] = [
  { title: 'Critical Care Unit', href: '/' },
  { title: 'Pharmacy Services', href: '/' },
  { title: 'Home Care Nursing', href: '/' },
  { title: 'Physiotherapy Center', href: '/' },
]

const FALLBACK_MAP: Record<string, { related: SimpleServiceItem[]; alternatives: SimpleServiceItem[] }> = {
  'kidney-stone': {
    related: [
      { title: 'RIRS Surgery', href: '/services/urology/kidney-stone-laser-surgery' },
      { title: 'PCNL Surgery', href: '/services/urology' },
      { title: 'Dialysis Center', href: '/services/nephrology/dialysis' },
    ],
    alternatives: [
      { title: 'ESWL Treatment', href: '/services/urology' },
      { title: 'Medical Management', href: '/services/urology' },
    ],
  },
  'heart-care': {
    related: [
      { title: 'Angioplasty', href: '/services/cardiology/heart-angioplasty-procedure' },
      { title: 'Heart Valve Surgery', href: '/services/cardiology/heart-valve-replacement-surgery' },
      { title: 'ECG & Echo Test', href: '/services/cardiology' },
    ],
    alternatives: [
      { title: 'Pacemaker Surgery', href: '/services/cardiology/pacemaker-implantation-steps' },
      { title: 'Cardiac Rehab', href: '/services/cardiology' },
    ],
  },
  'general-surgery': {
    related: [
      { title: 'Laser Piles Treatment', href: '/services/general-surgery/laser-piles-treatment-cost' },
      { title: 'Laparoscopic Hernia', href: '/services/general-surgery/laparoscopic-hernia-repair' },
      { title: 'Gallbladder Surgery', href: '/services/general-surgery/gallbladder-stone-surgery' },
    ],
    alternatives: [
      { title: 'Appendix Surgery', href: '/services/general-surgery/appendix-surgery-steps' },
      { title: 'Fissure Laser Care', href: '/services/general-surgery' },
    ],
  }
}

export function RelatedServices({ serviceSlug, heading = 'Related & Alternative Services', related, alternatives }: RelatedServicesProps) {
  // Find a matching fallback key based on partial slug match
  const fallbackKey = Object.keys(FALLBACK_MAP).find(key =>
    serviceSlug.toLowerCase().includes(key.toLowerCase())
  )

  const data = (fallbackKey ? FALLBACK_MAP[fallbackKey] : null) || { related: [], alternatives: [] }
  const relatedList = related && related.length > 0 ? related : (data.related.length > 0 ? data.related : DEFAULT_RELATED)
  const altList = alternatives && alternatives.length > 0 ? alternatives : (data.alternatives.length > 0 ? data.alternatives : DEFAULT_ALTERNATIVES)

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Related Services */}
      <div className="glassmorphism-card dark:bg-slate-900/80 rounded-3xl p-8 border border-teal-200/50 dark:border-teal-600/30 shadow-xl">
        <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-6 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 text-white text-sm">✓</span>
          Related Services
        </h3>
        <ul className="space-y-3">
          {relatedList.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-white/80 to-teal-50/50 dark:from-slate-800/60 dark:to-teal-900/40 border border-teal-200 dark:border-teal-700/40 transition-all hover:shadow-md hover:scale-[1.02] hover:border-teal-500 dark:hover:border-teal-500"
              >
                <span className="text-teal-500 dark:text-teal-400">→</span>
                <span className="font-medium text-foreground/80 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300">{s.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Alternative Services */}
      <div className="glassmorphism-card dark:bg-slate-900/80 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-600/30 shadow-xl">
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent mb-6 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 text-white text-sm">⭐</span>
          Alternative Options
        </h3>
        <ul className="space-y-3">
          {altList.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-white/80 to-blue-50/50 dark:from-slate-800/60 dark:to-blue-900/40 border border-blue-200 dark:border-blue-700/40 transition-all hover:shadow-md hover:scale-[1.02] hover:border-blue-500 dark:hover:border-blue-500"
              >
                <span className="text-blue-500 dark:text-blue-400">→</span>
                <span className="font-medium text-foreground/80 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300">{s.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default memo(RelatedServices)
