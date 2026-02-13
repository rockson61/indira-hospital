'use client'

import React, { memo } from "react"
import Link from 'next/link'
import { ModernCard } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight,
  Phone,
  Calendar,
  Shield
} from "lucide-react"

interface Condition {
  name: string
  slug: string
  severity: 'mild' | 'moderate' | 'severe'
  treatment: string
  duration: string
}

interface ConditionWidgetProps {
  title: string
  description: string
  conditions: Condition[]
  showEmergency?: boolean
  showTreatment?: boolean
}

export function ConditionWidget({
  title,
  description,
  conditions,
  showEmergency = true,
  showTreatment = true
}: ConditionWidgetProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild': return 'text-green-600 bg-green-50'
      case 'moderate': return 'text-yellow-600 bg-yellow-50'
      case 'severe': return 'text-red-600 bg-red-50'
      default: return 'text-muted-foreground bg-muted'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'mild': return CheckCircle
      case 'moderate': return Clock
      case 'severe': return AlertTriangle
      default: return Clock
    }
  }

  return (
    <ModernCard className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">{description}</p>
          </div>
          <Badge variant="outline" className="border-blue-600 text-blue-700">
            <Shield className="w-4 h-4 mr-1" />
            Treatment
          </Badge>
        </div>

        <div className="space-y-3 mb-6">
          {conditions.slice(0, 3).map((condition, index) => {
            const SeverityIcon = getSeverityIcon(condition.severity)
            return (
              <div key={index} className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${getSeverityColor(condition.severity)}`}>
                    <SeverityIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <Link
                      href={`/conditions/${condition.slug}`}
                      className="text-sm font-semibold text-foreground hover:text-blue-600 transition-colors"
                    >
                      {condition.name}
                    </Link>
                    {showTreatment && (
                      <p className="text-xs text-muted-foreground">{condition.treatment}</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">{condition.duration}</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(condition.severity)}`}>
                    {condition.severity}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/conditions">
              View All Conditions
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>

          <Button asChild size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link href="/contact">
              <Phone className="w-4 h-4 mr-1" />
              Consult Now
            </Link>
          </Button>
        </div>

        {showEmergency && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center text-red-800">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Emergency Dental Care</span>
            </div>
            <p className="text-xs text-red-700 mt-1">
              For severe pain or dental emergencies, call us immediately at{" "}
              <a href="tel:7010650063" className="font-semibold underline">7010650063</a>
            </p>
          </div>
        )}
      </div>
    </ModernCard>
  )
}

export default memo(ConditionWidget)
