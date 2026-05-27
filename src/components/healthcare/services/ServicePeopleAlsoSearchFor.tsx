'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface SearchQuery {
 text: string
 link: string
 category?: string
}

const CATEGORY_QUERIES: Record<string, SearchQuery[]> = {
 Urology: [
 { text: 'Kidney Stone Treatment', link: '/services/urology/laser-kidney-stone-surgery', category: 'Laser Surgery' },
 { text: 'Best Urologist in Vellore', link: '/doctors', category: 'Expert' },
 { text: 'Laser Lithotripsy Cost', link: '/services/urology/laser-kidney-stone-surgery', category: 'Pricing' },
 { text: 'Prostate Surgery', link: '/services/urology/prostate-surgery', category: 'Surgery' },
 { text: 'Dialysis Services near me', link: '/services/nephrology/dialysis', category: 'Nephrology' },
 { text: 'UTI Treatment Specialist', link: '/services/urology', category: 'General' },
 { text: 'Bladder Stone Removal', link: '/services/urology', category: 'Surgery' }
 ],
 Cardiology: [
 { text: 'Angioplasty', link: '/services/cardiology/heart-angioplasty-procedure', category: 'Procedure' },
 { text: 'ECG & Echo', link: '/services/cardiology', category: 'Diagnostics' },
 { text: 'Heart Failure Management', link: '/services/cardiology', category: 'Critical Care' },
 { text: 'Hypertension Treatment', link: '/services/cardiology', category: 'General' }
 ],
 Orthopaedics: [
 { text: 'Knee Replacement', link: '/services/orthopaedics/total-knee-replacement-cost', category: 'Surgery' },
 { text: 'Hip Replacement', link: '/services/orthopaedics/hip-replacement-surgery-guide', category: 'Surgery' },
 { text: 'Fracture Treatment', link: '/services/orthopaedics/fracture-care-rehabilitation', category: 'Trauma' },
 { text: 'Spine Surgery', link: '/services/orthopaedics/spine-surgery-disc-prolapse', category: 'Surgery' }
 ],
 'General-surgery': [
 { text: 'Laser Piles Treatment', link: '/services/general-surgery/laser-piles-treatment-cost', category: 'Laser' },
 { text: 'Hernia Repair', link: '/services/general-surgery/laparoscopic-hernia-repair', category: 'Laparoscopic' },
 { text: 'Appendix Removal', link: '/services/general-surgery/appendix-surgery-steps', category: 'Surgery' },
 { text: 'Gallbladder Stones', link: '/services/general-surgery', category: 'Surgery' }
 ],
 Gastroenterology: [
 { text: 'Endoscopy', link: '/services/gastroenterology/endoscopy-procedure-guide', category: 'Diagnostic' },
 { text: 'Colonoscopy', link: '/services/gastroenterology/colonoscopy', category: 'Diagnostic' },
 { text: 'Liver Care', link: '/services/gastroenterology/liver-diseases', category: 'Specialized' },
 { text: 'Piles Specialist', link: '/services/general-surgery/laser-piles-treatment-cost', category: 'Surgery' }
 ]
}

interface ServicePeopleAlsoSearchForProps {
 serviceName: string
 category?: string
 className?: string
}

const DEFAULT_QUERIES: SearchQuery[] = [
 { text: 'Emergency Care', link: '/contact', category: '24/7' },
 { text: 'Health Checkup Packages', link: '/diagnostics', category: 'Health' },
 { text: 'Specialist Consultation', link: '/doctors', category: 'OPD' },
 { text: 'Advanced Diagnostics', link: '/diagnostics', category: 'Imaging' },
 { text: 'Ambulance Services', link: '/contact', category: 'Emergency' },
 { text: 'In-patient Care', link: '/', category: 'Ip-Stay' }
]

export function ServicePeopleAlsoSearchFor({
 serviceName,
 category,
 className = ""
}: ServicePeopleAlsoSearchForProps) {
 const [showMore, setShowMore] = useState(false)

 // Determine category from prop, service name or context (fallback to general)
 const categoryKey = category || Object.keys(CATEGORY_QUERIES).find(cat =>
 serviceName.toLowerCase().includes(cat.toLowerCase()) ||
 serviceName.toLowerCase().includes(cat.replace('-', ' ').toLowerCase())
 ) || 'General'

 const searchQueries = CATEGORY_QUERIES[categoryKey] || DEFAULT_QUERIES

 const displayedQueries = showMore ? searchQueries : searchQueries.slice(0, 12);

 return (
 <ModernCard className={`mb-8 ${className}`}>
 <ModernCardHeader>
 <ModernCardTitle className="flex items-center gap-2">
 <Search className="w-6 h-6 text-fuchsia-600" />
 People Also Search For in India
 </ModernCardTitle>
 </ModernCardHeader>
 <ModernCardContent>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
 {displayedQueries.map((query, index) => (
 <Link
 key={`${query.link}-${index}`}
 href={query.link}
 className="flex items-center gap-2 p-3 bg-muted rounded-2xl hover:bg-fuchsia-50 dark:bg-fuchsia-950 hover:text-fuchsia-700 transition-colors group"
 >
 <ArrowRight className="w-4 h-4 text-fuchsia-500 group-hover:text-fuchsia-700 flex-shrink-0" />
 <span className="text-sm font-medium text-foreground/90 group-hover:text-fuchsia-700 flex-1">
 Best {query.text} in India
 </span>
 {query.category && (
 <Badge variant="outline" className="ml-auto text-xs px-2 py-0.5 flex-shrink-0">
 {query.category}
 </Badge>
 )}
 </Link>
 ))}
 </div>
 {!showMore && searchQueries.length > 12 && (
 <div className="text-center mt-6">
 <Button onClick={() => setShowMore(true)} variant="outline" className="px-8">
 Show More ({searchQueries.length - 12} hidden)
 </Button>
 </div>
 )}
 {showMore && (
 <div className="text-center mt-6">
 <Button onClick={() => setShowMore(false)} variant="outline" className="px-8">
 Show Less
 </Button>
 </div>
 )}
 <p className="text-xs text-muted-foreground mt-6 text-center">
 Explore comprehensive medical and surgical services at Indira Super Speciality Hospital.
 Find expert solutions for your health needs with advanced technology and compassionate care in Vellore.
 </p>
 </ModernCardContent>
 </ModernCard>
 );
}
