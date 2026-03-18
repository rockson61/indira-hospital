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

        <div className="overflow-x-auto rounded-2xl border border-slate-200/60 dark:border-slate-700/50 shadow-sm bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-200/60 dark:border-slate-700/50">
                <th className="py-4 px-5 font-black text-slate-900 dark:text-white uppercase tracking-wider text-xs">Treatment</th>
                <th className="py-4 px-5 font-black text-fuchsia-700 dark:text-fuchsia-400 uppercase tracking-wider text-xs bg-fuchsia-50/50 dark:bg-fuchsia-900/10">Indira Hospital Price</th>
                <th className="py-4 px-5 font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs">Metro City Price</th>
                <th className="py-4 px-5 font-black text-green-600 dark:text-green-500 uppercase tracking-wider text-xs">Your Benefit</th>
                <th className="py-4 px-5 font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {services.map((service, index) => (
                <tr key={index} className="group hover:bg-white dark:hover:bg-slate-800/50 transition-colors duration-300">
                  <td className="py-4 px-5">
                    <div>
                      <p className="font-bold text-[15px] text-slate-900 dark:text-white mb-1.5">{service.name}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.features.map((feature, i) => (
                          <span key={i} className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                            <CheckCircle className="w-3 h-3 text-fuchsia-500" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5 bg-fuchsia-50/30 dark:bg-fuchsia-500/5 group-hover:bg-fuchsia-50/80 dark:group-hover:bg-fuchsia-500/10 transition-colors border-x border-fuchsia-100/50 dark:border-fuchsia-900/20">
                    <span className="text-lg font-black text-fuchsia-700 dark:text-fuchsia-400 flex items-center">{service.ourPrice}</span>
                  </td>
                  <td className="py-4 px-5">
                    <span className="text-[13px] font-bold text-slate-400 dark:text-slate-500 line-through decoration-slate-300 dark:decoration-slate-600">{service.marketPrice}</span>
                  </td>
                  <td className="py-4 px-5">
                    <span className="text-[13px] font-black text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30 px-2.5 py-1 rounded-full border border-green-100 dark:border-green-900/50">{service.savings}</span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <button className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white dark:bg-fuchsia-600 dark:hover:bg-fuchsia-500 text-[12px] font-bold rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95 uppercase tracking-wider whitespace-nowrap">
                        Book Now
                    </button>
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

