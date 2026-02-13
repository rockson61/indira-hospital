'use client'

import Image from "next/image"
import { ModernCard } from "@/components/ui/modern-card"
import { Button, Chip } from "@heroui/react"
import { Award, Calendar, Star, User, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import Link from 'next/link'


interface DentistProfileProps {
  name?: string
  qualification?: string
  experience?: string
  specializations?: string[]
  imageUrl?: string
  rating?: number
  reviewCount?: number
  email?: string
  phone?: string
  locationName?: string
}

export function DentistProfileWidget({
  name = "Dr. Rockson Samuel",
  qualification = "BDS, PgDM, BDM | General Dentist & Community Leader",
  experience = "15",
  specializations = ["General Dentistry", "Implants", "Root Canal Treatment", "Orthodontics"],
  imageUrl = "/Dentist-near-you-Dr-Rockson-Samuel.jpg",
  rating = 5,
  reviewCount = 39,
  email = "rockson68@hotmail.com",
  phone = "07010650063",
  locationName
}: DentistProfileProps) {

  return (
    <ModernCard className="overflow-hidden border-none shadow-xl bg-background dark:bg-default-50/5">
      <div className="grid md:grid-cols-3 gap-0">
        <div className="md:col-span-1 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-transparent dark:from-primary/20 dark:to-background border-r border-default-100 dark:border-default-50/10">
          <div className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary mb-6 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background relative">
              <Image
                src={imageUrl || "/dental-clinic-vellore.jpg"}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center font-heading text-foreground mb-1">{name}</h3>
          <p className="text-primary font-medium text-center text-sm mb-3 px-4">{qualification}</p>

          <div className="flex items-center justify-center mb-6 gap-2 bg-background/50 dark:bg-default-100/10 px-4 py-2 rounded-full border border-default-200 dark:border-default-50/20">
            <div className="flex text-warning">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-current" : ""}`} />
              ))}
            </div>
            <span className="text-sm font-bold text-default-700 dark:text-default-300">
              {rating} ({reviewCount}+)
            </span>
          </div>

          <div className="w-full space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Button as={Link} href={`tel:${phone}`} color="primary" variant="solid" className="font-bold w-full" startContent={<Phone className="w-4 h-4" />}>Call Now</Button>
              <Button as={Link} href={`mailto:${email}`} color="secondary" variant="flat" className="font-bold w-full" startContent={<Mail className="w-4 h-4" />}>Email</Button>
            </div>
            <Button as={Link} href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69" target="_blank" variant="bordered" className="w-full" startContent={<MapPin className="w-4 h-4 text-danger" />}>
              Get Directions
            </Button>
          </div>
        </div>

        <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
          <div className="mb-8">
            <Chip size="sm" color="secondary" variant="dot" className="mb-4">Head Dentist</Chip>
            <h4 className="text-2xl font-bold mb-4 flex items-center gap-2 font-heading">
              <User className="h-6 w-6 text-primary" />
              About Dr. Rockson
            </h4>
            <p className="text-default-500 leading-relaxed text-lg">
              With over {experience} years of experience, Dr. Rockson Samuel is dedicated to providing painless, patient-centric dental care. His expertise covers a wide range of treatments, ensuring your smile is in the best hands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-default-50 dark:bg-default-50/5 border border-default-100 dark:border-default-50/10 hover:border-primary/50 transition-colors">
              <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h5 className="font-bold text-foreground">Qualifications</h5>
                <p className="text-sm text-default-500 mt-1">{qualification}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-default-50 dark:bg-default-50/5 border border-default-100 dark:border-default-50/10 hover:border-success/50 transition-colors">
              <div className="p-3 bg-success/10 text-success rounded-lg">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h5 className="font-bold text-foreground">Experience</h5>
                <p className="text-sm text-default-500 mt-1">{experience} Years</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Specializations</h4>
            <div className="flex flex-wrap gap-2">
              {specializations.map((specialization, index) => (
                <Chip key={index} variant="flat" color="primary" size="lg" className="font-medium">
                  {specialization}
                </Chip>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Button as={Link} href="/about/doctors" size="lg" variant="ghost" color="primary" className="font-bold" endContent={<CheckCircle2 className="w-4 h-4" />}>
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </ModernCard>
  )
}
