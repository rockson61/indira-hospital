'use client'

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { clinicTimings } from "@/lib/data/clinic-config"

interface ClinicInfoProps {
  variant?: "full" | "compact"
  showHours?: boolean
  showEmail?: boolean
  className?: string
}



export function ClinicInfo({ variant = "full", showHours = true, showEmail = true, className = "" }: ClinicInfoProps) {
  const hours = clinicTimings;

  return (
    <div className={`clinic-info ${className}`}>
      {variant === "full" && <h3 className="text-xl font-bold mb-3">Indira Super Speciality Hospital</h3>}

      <div className="flex items-start gap-2 mb-2">
        <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />
        <address className="not-italic">
          Vellore, Tamil Nadu
        </address>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <Phone className="h-5 w-5 flex-shrink-0 text-blue-600" />
        <a href="tel:7010650063" className="hover:underline">
          7010650063
        </a>
      </div>

      {showEmail && (
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <a href="mailto:rockson68@hotmail.com" className="hover:underline">
            rockson68@hotmail.com
          </a>
        </div>
      )}

      {showHours && (
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 flex-shrink-0 text-blue-600" />
            <span className="font-medium">Opening Hours</span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 ml-7">
            {hours.map((item) => (
              <li key={item.day} className="flex justify-between">
                <span>{item.day}</span>
                <span>{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {variant === "full" && (
        <div className="mt-4 ml-7">
          <p className="font-medium">Specialist Doctors</p>
          <p className="text-sm text-muted-foreground mt-1">
            Advanced Care, Compassionate Touch
          </p>
        </div>
      )}
    </div>
  )
}
