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

// Comprehensive fallback services that apply to most dental services
const DEFAULT_RELATED: SimpleServiceItem[] = [
  { title: 'Dental Implants', href: '/services/dental-implants' },
  { title: 'Root Canal Treatment', href: '/services/root-canal-treatment' },
  { title: 'Dental Crowns', href: '/services/restorative-dentistry/dental-crowns' },
  { title: 'Teeth Whitening', href: '/services/cosmetic-dentistry/teeth-whitening' },
  { title: 'Orthodontics & Braces', href: '/services/orthodontics' },
  { title: 'Dental Veneers', href: '/services/cosmetic-dentistry/dental-veneers' },
]

const DEFAULT_ALTERNATIVES: SimpleServiceItem[] = [
  { title: 'Smile Makeover', href: '/services/cosmetic-dentistry/smile-makeover' },
  { title: 'Full Mouth Rehabilitation', href: '/services/full-mouth-rehabilitation' },
  { title: 'Preventive Dentistry', href: '/services/preventive-dentistry' },
  { title: 'Emergency Dentistry', href: '/services/emergency-dentistry' },
]

const FALLBACK_MAP: Record<string, { related: SimpleServiceItem[]; alternatives: SimpleServiceItem[] }> = {
  'dental-implants': {
    related: [
      { title: 'All-on-4 Dental Implants', href: '/services/dental-implants/all-on-4' },
      { title: 'Bone Grafting', href: '/services/bone-grafting' },
      { title: 'Sinus Lift', href: '/services/dental-implants/sinus-lift' },
    ],
    alternatives: [
      { title: 'Dental Bridges', href: '/services/restorative-dentistry/dental-bridges' },
      { title: 'Dentures', href: '/services/prosthodontics/dentures' },
    ],
  },
  'dental-crowns': {
    related: [
      { title: 'Zirconia Crown', href: '/services/restorative-dentistry/dental-crowns/zirconia-crown' },
      { title: 'PFM Crown', href: '/services/restorative-dentistry/dental-crowns/pfm-crown' },
    ],
    alternatives: [
      { title: 'Porcelain Veneers', href: '/services/cosmetic-dentistry/dental-veneers' },
      { title: 'Composite Bonding', href: '/services/restorative-dentistry/composite-bonding' },
    ],
  },
  'cosmetic-dentistry': {
    related: [
      { title: 'Teeth Whitening', href: '/services/cosmetic-dentistry/teeth-whitening' },
      { title: 'Dental Veneers', href: '/services/cosmetic-dentistry/dental-veneers' },
      { title: 'Smile Makeover', href: '/services/cosmetic-dentistry/smile-makeover' },
    ],
    alternatives: [
      { title: 'Orthodontics', href: '/services/orthodontics' },
      { title: 'Dental Crowns', href: '/services/restorative-dentistry/dental-crowns' },
    ],
  },
}

export function RelatedServices({ serviceSlug, heading = 'Related & Alternative Services', related, alternatives }: RelatedServicesProps) {
  const data = FALLBACK_MAP[serviceSlug] || { related: [], alternatives: [] }
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
