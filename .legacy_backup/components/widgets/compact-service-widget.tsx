'use client'

import React, { memo } from "react"
import Link from 'next/link'
import { Button } from "@heroui/react"
import { ModernCard } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Star,
  Clock,
  Shield,
  Phone,
  Calendar,
  MapPin
} from "lucide-react"

interface CompactServiceWidgetProps {
  title: string
  description: string
  services: Array<{
    name: string
    slug: string
    price?: string
    duration?: string
  }>
  ctaText?: string
  ctaLink?: string
  showPricing?: boolean
  showLocation?: boolean
}

export function CompactServiceWidget({
  title,
  description,
  services,
  ctaText = "Learn More",
  ctaLink = "/services",
  showPricing = true,
  showLocation = true
}: CompactServiceWidgetProps) {
  return (
    <ModernCard className="compact-service-widget border">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-default-600 dark:text-default-400 text-sm leading-relaxed">{description}</p>
          </div>
          <Badge variant="outline" className="border-teal-600 text-teal-700 dark:text-teal-400 text-xs">
            <Star className="w-3 h-3 mr-1" />
            4.9/5
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {services.slice(0, 4).map((service, index) => (
            <div key={index} className="service-item-card flex items-center justify-between p-3 rounded-lg border shadow-sm">
              <div className="flex-1">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-semibold text-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {service.name}
                </Link>
                {service.duration && (
                  <div className="flex items-center text-xs text-default-500 mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    {service.duration}
                  </div>
                )}
              </div>
              {showPricing && service.price && (
                <div className="text-right">
                  <div className="text-sm font-bold text-teal-600 dark:text-teal-400">{service.price}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            size="sm"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold"
            as={Link}
            href={ctaLink}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          <Button
            size="sm"
            variant="bordered"
            className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 dark:text-teal-400 dark:border-teal-400 font-semibold"
            as={Link}
            href="/contact"
          >
            <Phone className="w-4 h-4 mr-1" />
            Book Now
          </Button>
        </div>

        {showLocation && (
          <div className="mt-4 pt-4 border-t border-border dark:border-default-200">
            <div className="flex items-center justify-center text-xs text-default-500">
              <MapPin className="w-3 h-3 mr-1" />
              <span>Conveniently located in Gandhi Nagar, Vellore</span>
            </div>
          </div>
        )}
      </div>
    </ModernCard>
  )
}

export default memo(CompactServiceWidget)
