'use client'

import React, { memo, useMemo } from "react"
import Link from 'next/link'
import { ModernCard } from "@/components/ui/modern-card"
import { Button } from "@heroui/react"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Calendar,
  MessageCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  CheckCircle
} from "lucide-react"

type CTAIcon = "phone" | "calendar" | "message"

const iconMap: Record<CTAIcon, React.ComponentType<any>> = {
  phone: Phone,
  calendar: Calendar,
  message: MessageCircle,
}

interface CTAWidgetProps {
  title: string
  description: string
  primaryAction: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  primaryIcon?: CTAIcon
  secondaryIcon?: CTAIcon
  benefits?: string[]
  urgency?: boolean
  showRating?: boolean
  showAvailability?: boolean
}

import { siteConfig } from "@/config/site"

export function CTAWidget({
  title,
  description,
  primaryAction,
  secondaryAction,
  primaryIcon = "phone",
  secondaryIcon = "message",
  benefits = [],
  urgency = false,
  showRating = true,
  showAvailability = true
}: CTAWidgetProps) {
  const PrimaryIcon = iconMap[primaryIcon]
  const SecondaryIcon = iconMap[secondaryIcon]

  return (
    <ModernCard className={`overflow-hidden relative ${urgency ? 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800' : 'bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-blue-950/30 border-teal-100 dark:border-teal-800'}`}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/20 dark:bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="p-8 md:p-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left space-y-4">
            <h3 className={`text-3xl md:text-4xl font-bold tracking-tight ${urgency ? 'text-red-600 dark:text-red-400' : 'bg-gradient-to-r from-teal-700 to-blue-700 dark:from-teal-300 dark:to-blue-300 bg-clip-text text-transparent'}`}>
              {title}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>

            {benefits.length > 0 && (
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col w-full md:w-auto gap-4">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button
                as={Link}
                href={primaryAction.href}
                size="lg"
                className={`${urgency ? 'bg-red-600 hover:bg-red-700 shadow-red-200 dark:shadow-red-900/20' : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 shadow-teal-200 dark:shadow-teal-900/20'} text-white font-bold shadow-lg w-full sm:w-auto px-8 py-6 text-lg transition-transform hover:-translate-y-0.5`}
              >
                <PrimaryIcon className="w-5 h-5 mr-2" />
                {primaryAction.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {secondaryAction && (
                <Button
                  as={Link}
                  href={secondaryAction.href}
                  size="lg"
                  variant="bordered"
                  className={`${urgency ? 'border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20' : 'border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-teal-500 hover:text-teal-600 dark:hover:border-teal-400 dark:hover:text-teal-300 bg-white/50 dark:bg-slate-800/50'} font-bold w-full sm:w-auto px-8 py-6 text-lg backdrop-blur-sm`}
                >
                  <SecondaryIcon className="w-5 h-5 mr-2" />
                  {secondaryAction.text}
                </Button>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
              {showRating && (
                <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800 px-3 py-1">
                  <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                  4.9/5 Rating
                </Badge>
              )}

              {showAvailability && (
                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800 px-3 py-1">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  Same Day Appointments
                </Badge>
              )}

              <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800 px-3 py-1">
                <Shield className="w-3.5 h-3.5 mr-1.5" />
                15+ Years Experience
              </Badge>
            </div>
          </div>
        </div>

        {urgency && (
          <div className="mt-8 p-4 bg-red-100/50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
              <span className="text-sm font-bold text-red-800 dark:text-red-200">
                ⚠️ Don't wait! Dental problems can worsen quickly.
              </span>
              <span className="text-sm text-red-700 dark:text-red-300">
                Call now: <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="font-black hover:underline">{siteConfig.contact.phone}</a>
              </span>
            </div>
          </div>
        )}
      </div>
    </ModernCard>
  )
}

export default memo(CTAWidget)
