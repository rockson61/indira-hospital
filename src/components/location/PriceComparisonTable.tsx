'use client'

import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { IndianRupee, TrendingDown, CheckCircle } from 'lucide-react'

interface PriceComparisonTableProps {
  locationName: string
  className?: string
}

export function PriceComparisonTable({ locationName, className = "" }: PriceComparisonTableProps) {
  const services = [
    {
      name: 'Root Canal Treatment',
      ourPrice: 'Standard Rate',
      marketPrice: 'Metro Pricing',
      savings: 'High Savings',
      features: ['Single sitting (45-60 min)', 'Digital X-Ray included', 'By Dr. Rockson Samuel']
    },
    {
      name: 'Dental Implants',
      ourPrice: 'Standard Rate',
      marketPrice: 'Metro Pricing',
      savings: 'High Savings',
      features: ['Titanium/Zirconia', 'Lifetime warranty', '95%+ success rate']
    },
    {
      name: 'Braces (Complete)',
      ourPrice: 'Standard Rate',
      marketPrice: 'Metro Pricing',
      savings: 'High Savings',
      features: ['Metal/Ceramic/Invisible', '12-24 months', 'Retainers included']
    },
    {
      name: 'Teeth Whitening',
      ourPrice: 'Standard Rate',
      marketPrice: 'Metro Pricing',
      savings: 'High Savings',
      features: ['Zoom/Laser whitening', '8 shades lighter', 'Results in 1 hour']
    },
    {
      name: 'Dental Crown (Zirconia)',
      ourPrice: 'Standard Rate',
      marketPrice: 'Metro Pricing',
      savings: 'High Savings',
      features: ['Metal-free', 'Same-day fitting', '10-15 year lifespan']
    },
  ];

  return (
    <ModernCard className={className}>
      <ModernCardHeader>
        <ModernCardTitle className="flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-green-600" />
          Affordable Pricing for {locationName} Patients
        </ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent>
        <p className="text-muted-foreground mb-6">
          <strong>Significantly lower than metro city prices.</strong> Compare Indira Dental Clinic, Vellore with Chennai and Bangalore rates. All services include consultation, procedure, and follow-up visits.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Treatment</th>
                <th className="text-left py-3 px-4 font-semibold text-fuchsia-600">Our Price</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Market Price</th>
                <th className="text-left py-3 px-4 font-semibold text-green-600">You Save</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-muted transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-semibold text-foreground">{service.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {service.features.map((feature, i) => (
                          <span key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-fuchsia-500" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-lg font-bold text-fuchsia-600">{service.ourPrice}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-muted-foreground line-through">{service.marketPrice}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-green-600 font-semibold">{service.savings}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Savings Highlight */}
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-fuchsia-50 dark:from-green-900/20 dark:to-fuchsia-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500 rounded-full">
              <IndianRupee className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-foreground text-lg">Massive Savings on Dental Treatments</p>
              <p className="text-sm text-muted-foreground">
                Transparent pricing • No hidden costs • 0% EMI via Bajaj Finserv, HDFC, ICICI
              </p>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <CheckCircle className="w-4 h-4 text-fuchsia-500" />
            <span>Complimentary Consultation</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <CheckCircle className="w-4 h-4 text-fuchsia-500" />
            <span>0% EMI (3-12 months)</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <CheckCircle className="w-4 h-4 text-fuchsia-500" />
            <span>Insurance Claims Assistance</span>
          </div>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}

