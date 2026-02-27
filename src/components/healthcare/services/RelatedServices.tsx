'use client'

import React, { memo } from 'react'
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

const DEFAULT_RELATED: SimpleServiceItem[] = [
  { title: 'Emergency Care 24/7', href: '/contact' },
  { title: 'Health Checkup Packages', href: '/diagnostics' },
  { title: 'Specialist Consultation', href: '/doctors' },
  { title: 'Diagnostic Lab Services', href: '/diagnostics' },
]

const DEFAULT_ALTERNATIVES: SimpleServiceItem[] = [
  { title: 'Critical Care Unit', href: '/services/critical-care' },
  { title: 'Pharmacy Services', href: '/services/pharmacy' },
  { title: 'Home Care Nursing', href: '/services/home-care' },
  { title: 'Physiotherapy Center', href: '/services/physiotherapy' },
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
  const fallbackKey = Object.keys(FALLBACK_MAP).find(key =>
    serviceSlug.toLowerCase().includes(key.toLowerCase())
  )

  const data = (fallbackKey ? FALLBACK_MAP[fallbackKey] : null) || { related: [], alternatives: [] }
  const relatedList = related && related.length > 0 ? related : (data.related.length > 0 ? data.related : DEFAULT_RELATED)
  const altList = alternatives && alternatives.length > 0 ? alternatives : (data.alternatives.length > 0 ? data.alternatives : DEFAULT_ALTERNATIVES)

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Related Services */}
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-700 shadow-soft">
        <h3 className="text-xl font-heading font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-600 text-sm font-bold">✓</span>
          Related Services
        </h3>
        <ul className="space-y-2">
          {relatedList.map((s, index) => (
            <li key={s.title || index}>
              <Link
                href={s.href}
                className="flex items-center gap-3 p-3 rounded-[1rem] bg-slate-50/50 border border-slate-100 dark:border-slate-700 transition-all hover:bg-fuchsia-50 dark:bg-fuchsia-950 hover:border-fuchsia-100 hover:-translate-x-1"
              >
                <span className="text-fuchsia-500 font-bold">→</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200 hover:text-fuchsia-700">{s.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Alternative Services */}
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-700 shadow-soft">
        <h3 className="text-xl font-heading font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-600 text-sm font-bold">⭐</span>
          Alternative Options
        </h3>
        <ul className="space-y-2">
          {altList.map((s, index) => (
            <li key={s.title || index}>
              <Link
                href={s.href}
                className="flex items-center gap-3 p-3 rounded-[1rem] bg-slate-50/50 border border-slate-100 dark:border-slate-700 transition-all hover:bg-amber-50 hover:border-amber-100 hover:-translate-x-1"
              >
                <span className="text-amber-500 font-bold">→</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200 hover:text-amber-700">{s.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default memo(RelatedServices)
