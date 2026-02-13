'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ServicePeopleAlsoSearchForProps {
  serviceName: string
  className?: string
}

export function ServicePeopleAlsoSearchFor({ 
  serviceName, 
  className = "" 
}: ServicePeopleAlsoSearchForProps) {
  const [showMore, setShowMore] = useState(false)

  // Comprehensive dental service search queries
  const searchQueries = [
    { text: 'Root Canal Treatment', link: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Dental Implants', link: '/services/dental-implants', category: 'Implantology' },
    { text: 'Teeth Whitening', link: '/services/cosmetic-dentistry/teeth-whitening', category: 'Cosmetic' },
    { text: 'Orthodontic Braces', link: '/services/orthodontics', category: 'Orthodontics' },
    { text: 'Invisalign Clear Aligners', link: '/services/orthodontics/invisalign', category: 'Orthodontics' },
    { text: 'Dental Veneers', link: '/services/cosmetic-dentistry/veneers', category: 'Cosmetic' },
    { text: 'Gum Disease Treatment', link: '/services/periodontics', category: 'Periodontics' },
    { text: 'Wisdom Teeth Removal', link: '/services/oral-surgery/wisdom-teeth-removal', category: 'Surgery' },
    { text: 'Dental Crowns', link: '/services/prosthodontics/dental-crowns', category: 'Prosthodontics' },
    { text: 'Dental Bridges', link: '/services/prosthodontics/dental-bridges', category: 'Prosthodontics' },
    { text: 'Dentures', link: '/services/prosthodontics/dentures', category: 'Prosthodontics' },
    { text: 'Tooth Extraction', link: '/services/oral-surgery/tooth-extraction', category: 'Surgery' },
    { text: 'Teeth Cleaning', link: '/services/general-dentistry/teeth-cleaning', category: 'Preventive' },
    { text: 'Pediatric Dentistry', link: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Emergency Dental Care', link: '/services/emergency-dentistry', category: 'Emergency' },
    { text: 'Cosmetic Smile Makeover', link: '/services/cosmetic-dentistry/smile-makeover', category: 'Cosmetic' },
    { text: 'All-on-4 Dental Implants', link: '/services/dental-implants/all-on-4-implants', category: 'Implantology' },
    { text: 'Bone Grafting', link: '/services/dental-implants/bone-graft', category: 'Surgery' },
    { text: 'Sinus Lift', link: '/services/dental-implants/sinus-lift', category: 'Surgery' },
    { text: 'Full Mouth Rehabilitation', link: '/services/prosthodontics/full-mouth-rehabilitation', category: 'Prosthodontics' },
    { text: 'Gum Contouring', link: '/services/cosmetic-dentistry/gum-contouring', category: 'Cosmetic' },
    { text: 'Dental Bonding', link: '/services/cosmetic-dentistry/bonding', category: 'Cosmetic' },
    { text: 'Teeth Straightening', link: '/services/orthodontics', category: 'Orthodontics' },
    { text: 'Clear Braces', link: '/services/orthodontics/ceramic-braces', category: 'Orthodontics' },
    { text: 'Lingual Braces', link: '/services/orthodontics/lingual-braces', category: 'Orthodontics' },
    { text: 'Tooth Fillings', link: '/services/restorative-dentistry/dental-fillings', category: 'Restorative' },
    { text: 'Root Canal Specialist', link: '/services/root-canal-treatment', category: 'Endodontics' },
    { text: 'Dental Implant Specialist', link: '/services/dental-implants', category: 'Implantology' },
    { text: 'Cosmetic Dentist', link: '/services/cosmetic-dentistry', category: 'Cosmetic' },
    { text: 'Orthodontist', link: '/services/orthodontics', category: 'Orthodontics' },
    { text: 'Periodontist', link: '/services/periodontics', category: 'Periodontics' },
    { text: 'Oral Surgeon', link: '/services/oral-surgery', category: 'Surgery' },
    { text: 'Prosthodontist', link: '/services/prosthodontics', category: 'Prosthodontics' },
    { text: 'Pediatric Dentist', link: '/services/pediatric-dentistry', category: 'Pediatric' },
    { text: 'Sedation Dentistry', link: '/services/sedation-dentistry', category: 'Advanced' },
    { text: 'Laser Dentistry', link: '/services/specialized-services/laser-dentistry', category: 'Advanced' },
    { text: 'Sleep Apnea Treatment', link: '/services/specialized-services/sleep-apnea-treatment', category: 'Advanced' },
    { text: 'TMJ Treatment', link: '/services/tmj-treatment', category: 'Advanced' },
    { text: 'Dental Cleaning & Polishing', link: '/services/periodontics/scaling-polishing', category: 'Preventive' },
    { text: 'Fluoride Treatment', link: '/services/preventive-dentistry/fluoride-treatment', category: 'Preventive' },
    { text: 'Dental Sealants', link: '/services/preventive-dentistry/dental-sealants', category: 'Preventive' },
    { text: 'Mouthguards', link: '/services/preventive-dentistry/mouthguards', category: 'Preventive' },
    { text: 'Teeth Sensitivity Treatment', link: '/services/sensitive-teeth-treatment', category: 'General' },
    { text: 'Bad Breath Treatment', link: '/services/bad-breath-treatment', category: 'General' },
    { text: 'Dental X-Rays', link: '/services/diagnostic/dental-x-rays', category: 'Diagnostic' },
    { text: 'Digital Smile Design', link: '/services/cosmetic-dentistry/digital-smile-design', category: 'Cosmetic' },
    { text: 'Porcelain Veneers', link: '/services/cosmetic-dentistry/veneers/porcelain-veneers', category: 'Cosmetic' },
    { text: 'Composite Veneers', link: '/services/cosmetic-dentistry/veneers/composite-veneers', category: 'Cosmetic' },
    { text: 'Lumineers', link: '/services/cosmetic-dentistry/veneers/lumineers', category: 'Cosmetic' },
    { text: 'Professional Teeth Whitening', link: '/services/cosmetic-dentistry/teeth-whitening/professional-whitening', category: 'Cosmetic' },
    { text: 'Zoom Whitening', link: '/services/cosmetic-dentistry/teeth-whitening/zoom-whitening', category: 'Cosmetic' },
    { text: 'Laser Teeth Whitening', link: '/services/cosmetic-dentistry/teeth-whitening/laser-whitening', category: 'Cosmetic' },
    { text: 'Metal Braces', link: '/services/orthodontics/metal-braces', category: 'Orthodontics' },
    { text: 'Ceramic Braces', link: '/services/orthodontics/ceramic-braces', category: 'Orthodontics' },
    { text: 'Self-Ligating Braces', link: '/services/orthodontics/self-ligating-braces', category: 'Orthodontics' },
    { text: 'Single-Tooth Implant', link: '/services/dental-implants/single-tooth', category: 'Implantology' },
    { text: 'Multiple Teeth Implants', link: '/services/dental-implants/multiple-teeth', category: 'Implantology' },
    { text: 'Full Arch Implants', link: '/services/dental-implants/full-arch', category: 'Implantology' },
    { text: 'Implant-Supported Dentures', link: '/services/dental-implants/implant-supported-dentures', category: 'Implantology' },
    { text: 'Zygomatic Implants', link: '/services/dental-implants/zygomatic-implants', category: 'Implantology' },
    { text: 'Immediate Load Implants', link: '/services/dental-implants/immediate-load', category: 'Implantology' },
    { text: 'Mini Dental Implants', link: '/services/dental-implants/mini-implants', category: 'Implantology' },
    { text: 'Single Sitting RCT', link: '/services/root-canal-treatment/single-sitting-rct', category: 'Endodontics' },
    { text: 'Molar RCT', link: '/services/root-canal-treatment/molar-rct', category: 'Endodontics' },
    { text: 'Front Tooth RCT', link: '/services/root-canal-treatment/anterior-rct', category: 'Endodontics' },
    { text: 'Root Canal Retreatment', link: '/services/root-canal-treatment/re-rct', category: 'Endodontics' },
    { text: 'Root Canal with Crown', link: '/services/root-canal-treatment/rct-with-crown', category: 'Endodontics' },
    { text: 'Gum Recession Treatment', link: '/services/periodontics/gum-recession-treatment', category: 'Periodontics' },
    { text: 'Gum Grafting', link: '/services/periodontics/gum-grafting', category: 'Periodontics' },
    { text: 'Deep Cleaning', link: '/services/periodontics/deep-cleaning', category: 'Periodontics' },
    { text: 'Scaling & Root Planing', link: '/services/periodontics/scaling-root-planing', category: 'Periodontics' },
    { text: 'Periodontal Maintenance', link: '/services/periodontics/periodontal-maintenance', category: 'Periodontics' },
    { text: 'Gum Disease Surgery', link: '/services/periodontics/gum-surgery', category: 'Periodontics' },
    { text: 'Zirconia Crown', link: '/services/prosthodontics/dental-crowns/zirconia-crown', category: 'Prosthodontics' },
    { text: 'Porcelain Crown', link: '/services/prosthodontics/dental-crowns/porcelain-crown', category: 'Prosthodontics' },
    { text: 'Metal Crown', link: '/services/prosthodontics/dental-crowns/metal-crown', category: 'Prosthodontics' },
    { text: 'PFM Crown', link: '/services/prosthodontics/dental-crowns/pfm-crown', category: 'Prosthodontics' },
    { text: 'E-Max Crown', link: '/services/prosthodontics/dental-crowns/emax-crown', category: 'Prosthodontics' },
    { text: 'Temporary Crown', link: '/services/prosthodontics/dental-crowns/temporary-crown', category: 'Prosthodontics' },
    { text: 'Fixed Bridge', link: '/services/prosthodontics/dental-bridges/fixed-bridge', category: 'Prosthodontics' },
    { text: 'Cantilever Bridge', link: '/services/prosthodontics/dental-bridges/cantilever-bridge', category: 'Prosthodontics' },
    { text: 'Maryland Bridge', link: '/services/prosthodontics/dental-bridges/maryland-bridge', category: 'Prosthodontics' },
    { text: 'Implant-Supported Bridge', link: '/services/prosthodontics/dental-bridges/implant-bridge', category: 'Prosthodontics' },
    { text: 'Complete Dentures', link: '/services/prosthodontics/dentures/complete-dentures', category: 'Prosthodontics' },
    { text: 'Partial Dentures', link: '/services/prosthodontics/dentures/partial-dentures', category: 'Prosthodontics' },
    { text: 'Flexible Dentures', link: '/services/prosthodontics/dentures/flexible-dentures', category: 'Prosthodontics' },
    { text: 'Acrylic Dentures', link: '/services/prosthodontics/dentures/acrylic-dentures', category: 'Prosthodontics' },
    { text: 'Cast Partial Dentures', link: '/services/prosthodontics/dentures/cast-partial', category: 'Prosthodontics' },
    { text: 'Immediate Dentures', link: '/services/prosthodontics/dentures/immediate-dentures', category: 'Prosthodontics' },
    { text: 'Overdentures', link: '/services/prosthodontics/dentures/overdentures', category: 'Prosthodontics' },
    { text: 'Simple Extraction', link: '/services/oral-surgery/tooth-extraction/simple-extraction', category: 'Surgery' },
    { text: 'Surgical Extraction', link: '/services/oral-surgery/tooth-extraction/surgical-extraction', category: 'Surgery' },
    { text: 'Impacted Wisdom Tooth Removal', link: '/services/oral-surgery/wisdom-teeth-removal/impacted', category: 'Surgery' },
    { text: 'Alveoloplasty', link: '/services/oral-surgery/alveoloplasty', category: 'Surgery' },
    { text: 'Frenectomy', link: '/services/oral-surgery/frenectomy', category: 'Surgery' },
    { text: 'Jaw Surgery', link: '/services/oral-surgery/orthognathic-surgery', category: 'Surgery' },
    { text: 'Oral Biopsy', link: '/services/oral-surgery/oral-biopsy', category: 'Surgery' },
    { text: 'Children Dental Care', link: '/services/pediatric-dentistry/preventive-care', category: 'Pediatric' },
    { text: 'Kids Tooth Fillings', link: '/services/pediatric-dentistry/fillings', category: 'Pediatric' },
    { text: 'Pulpotomy', link: '/services/pediatric-dentistry/pulpotomy', category: 'Pediatric' },
    { text: 'Space Maintainers', link: '/services/pediatric-dentistry/space-maintainers', category: 'Pediatric' },
    { text: 'Fluoride for Kids', link: '/services/pediatric-dentistry/fluoride', category: 'Pediatric' },
    { text: 'Emergency Toothache Relief', link: '/services/emergency-dentistry/toothache', category: 'Emergency' },
    { text: 'Broken Tooth Repair', link: '/services/emergency-dentistry/broken-tooth', category: 'Emergency' },
    { text: 'Knocked-Out Tooth', link: '/services/emergency-dentistry/knocked-out-tooth', category: 'Emergency' },
    { text: 'Dental Abscess Treatment', link: '/services/emergency-dentistry/abscess', category: 'Emergency' },
    { text: 'Lost Filling or Crown', link: '/services/emergency-dentistry/lost-restoration', category: 'Emergency' },
    { text: 'Jaw Pain Treatment', link: '/services/tmj-treatment/jaw-pain-relief', category: 'Advanced' },
    { text: 'TMJ Splints', link: '/services/tmj-treatment/tmj-splints', category: 'Advanced' },
    { text: 'Night Guards', link: '/services/tmj-treatment/night-guards', category: 'Advanced' },
    { text: 'Snoring Solutions', link: '/services/specialized-services/snoring-solutions', category: 'Advanced' },
    { text: 'Oral Conscious Sedation', link: '/services/sedation-dentistry/oral-sedation', category: 'Advanced' },
    { text: 'IV Sedation', link: '/services/sedation-dentistry/iv-sedation', category: 'Advanced' },
    { text: 'Nitrous Oxide Sedation', link: '/services/sedation-dentistry/nitrous-oxide-sedation', category: 'Advanced' },
    { text: 'General Anesthesia', link: '/services/sedation-dentistry/general-anesthesia', category: 'Advanced' },
    { text: 'Inlays & Onlays', link: '/services/restorative-dentistry/inlays-onlays', category: 'Restorative' },
    { text: 'Composite Fillings', link: '/services/restorative-dentistry/dental-fillings/composite', category: 'Restorative' },
    { text: 'Amalgam Fillings', link: '/services/restorative-dentistry/dental-fillings/amalgam', category: 'Restorative' },
    { text: 'Glass Ionomer Fillings', link: '/services/restorative-dentistry/dental-fillings/glass-ionomer', category: 'Restorative' },
    { text: 'CEREC Same-Day Crowns', link: '/services/restorative-dentistry/cerec-restorations', category: 'Restorative' },
    { text: 'Tooth-Colored Fillings', link: '/services/restorative-dentistry/dental-fillings/tooth-colored', category: 'Restorative' },
  ];

  const displayedQueries = showMore ? searchQueries : searchQueries.slice(0, 12);

  return (
    <ModernCard className={`mb-8 ${className}`}>
      <ModernCardHeader>
        <ModernCardTitle className="flex items-center gap-2">
          <Search className="w-6 h-6 text-teal-600" />
          People Also Search For in India
        </ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedQueries.map((query, index) => (
            <Link
              key={`${query.link}-${index}`}
              href={query.link}
              className="flex items-center gap-2 p-3 bg-muted rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors group"
            >
              <ArrowRight className="w-4 h-4 text-blue-500 group-hover:text-blue-700 flex-shrink-0" />
              <span className="text-sm font-medium text-foreground/90 group-hover:text-blue-700 flex-1">
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
          Explore comprehensive dental services across India at Indira Dental Clinic. 
          Find expert solutions for all your dental needs with advanced technology and personalized care.
        </p>
      </ModernCardContent>
    </ModernCard>
  );
}

