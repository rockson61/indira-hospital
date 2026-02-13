'use client'

import { ModernCard, ModernCardHeader, ModernCardContent } from "@/components/ui/modern-card"
import Link from 'next/link'
import { ArrowRight, Stethoscope, Sparkles } from "lucide-react"
import { Chip } from "@heroui/react"

const treatmentsAndConditions = [
  {
    category: "Common Dental Conditions",
    icon: Stethoscope,
    items: [
      { name: "Tooth Decay", path: "/conditions/tooth-decay" },
      { name: "Gum Disease", path: "/conditions/gum-disease" },
      { name: "Tooth Sensitivity", path: "/conditions/tooth-sensitivity" },
      { name: "Bad Breath", path: "/conditions/bad-breath" },
    ],
  },
  {
    category: "Popular Treatments",
    icon: Sparkles,
    items: [
      { name: "Teeth Whitening", path: "/services/cosmetic-dentistry/teeth-whitening" },
      { name: "Dental Implants", path: "/services/dental-implants" },
      { name: "Invisalign", path: "/services/orthodontics/invisalign" },
      { name: "Veneers", path: "/services/cosmetic-dentistry/veneers" },
    ],
  },
]

export function TreatmentsAndConditions() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">Treatments and Conditions</h2>
          <p className="text-default-500">Explore our comprehensive care options.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {treatmentsAndConditions.map((category, index) => (
            <ModernCard key={index} className="overflow-hidden border-default-200 dark:border-default-100/10">
              <ModernCardHeader className="bg-default-50 dark:bg-default-50/5 border-b border-default-100 dark:border-default-100/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground">{category.category}</h3>
                </div>
              </ModernCardHeader>
              <ModernCardContent className="p-0">
                <ul className="divide-y divide-default-100 dark:divide-default-50/10">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href={item.path} className="flex items-center justify-between p-4 hover:bg-default-50 dark:hover:bg-default-50/5 transition-colors group">
                        <span className="text-default-700 dark:text-default-300 font-medium group-hover:text-primary transition-colors">{item.name}</span>
                        <ArrowRight className="w-4 h-4 text-default-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </ModernCardContent>
            </ModernCard>
          ))}
        </div>
      </div>
    </section>
  )
}
