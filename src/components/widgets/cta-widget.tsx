'use client'

import React, { memo } from "react"
import Link from 'next/link'
import { Button } from "@heroui/react"
import { Phone, Calendar, MessageCircle, ArrowRight, Star, Clock, Shield, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[2.5rem] border p-8 md:p-12 transition-all duration-500 ${
        urgency 
          ? 'bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/30 shadow-2xl shadow-red-500/10' 
          : 'bg-[#0a0a0a]/80 backdrop-blur-3xl border-white/10 hover:border-white/20 shadow-2xl'
      }`}
    >
      {/* Background Cinematic Glows */}
      {!urgency && (
        <>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </>
      )}

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              {showRating && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  4.9/5 Rating
                </div>
              )}
              {showAvailability && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-green-400">
                  <Clock className="w-3 h-3" />
                  Available 24/7
                </div>
              )}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-fuchsia-400">
                <Shield className="w-3 h-3" />
                NABH Accredited
              </div>
            </div>

            <h3 className={`text-3xl md:text-5xl font-black mb-6 tracking-tight ${
              urgency ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400'
            }`}>
              {title}
            </h3>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
              {description}
            </p>

            {benefits.length > 0 && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                    <Sparkles className="w-4 h-4 text-fuchsia-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-4">
            <Button
              as={Link}
              href={primaryAction.href}
              className={`h-16 px-10 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-2xl ${
                urgency 
                  ? 'bg-white text-red-600 hover:bg-red-50 shadow-red-500/20' 
                  : 'bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white hover:shadow-fuchsia-500/30'
              }`}
            >
              <PrimaryIcon className="w-6 h-6 mr-3" />
              {primaryAction.text}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>

            {secondaryAction && (
              <Button
                as={Link}
                href={secondaryAction.href}
                variant="bordered"
                className={`h-16 px-10 rounded-2xl font-bold text-lg border-2 backdrop-blur-md transition-all duration-300 hover:bg-white/5 ${
                  urgency 
                    ? 'border-white/40 text-white' 
                    : 'border-white/10 text-white hover:border-white/20'
                }`}
              >
                <SecondaryIcon className="w-6 h-6 mr-3" />
                {secondaryAction.text}
              </Button>
            )}
          </div>
        </div>

        {urgency && (
          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-xl">⚠️</span>
                </div>
                <p className="text-gray-200 font-bold">
                  Health concerns require immediate attention. Early intervention saves lives.
                </p>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Call Helpline:</span>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-2xl font-black hover:text-fuchsia-400 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default memo(CTAWidget)
