"use client"

import Image from "next/image"
import Link from 'next/link'
import { Award, GraduationCap, Calendar, Users, ArrowRight, Star } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

// Use centralized data
import { achievements, specializations } from "@/lib/data/team-data"

export function DoctorSection() {
  return (
    <section className="py-24 bg-card dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <GlassCard variant="default" className="p-6 bg-card/80 dark:bg-gray-800/80">
              <div className="relative h-[600px] rounded-xl overflow-hidden">
                <Image
                  src="/Dentist-near-you-Dr-Rockson-Samuel.jpg"
                  alt="Dr. Rockson Samuel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Rating Badge */}
                <div className="absolute top-6 right-6">
                  <GlassCard variant="accent" className="p-3 bg-card/95 dark:bg-gray-800/95">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-lg text-foreground dark:text-white">4.9/5</span>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-muted-foreground/70 mt-1">500+ Reviews</p>
                  </GlassCard>
                </div>

                {/* Achievement Badges */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                  <GlassCard variant="default" className="p-3 bg-card/95 dark:bg-gray-800/95">
                    <div className="text-2xl font-bold text-teal-600">15+</div>
                    <div className="text-xs text-muted-foreground dark:text-muted-foreground/70">Years Experience</div>
                  </GlassCard>
                  <GlassCard variant="default" className="p-3 bg-card/95 dark:bg-gray-800/95">
                    <div className="text-2xl font-bold text-teal-600">5000+</div>
                    <div className="text-xs text-muted-foreground dark:text-muted-foreground/70">Happy Patients</div>
                  </GlassCard>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 mb-4">
                <Award className="h-4 w-4" />
                Meet Our Expert
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">Dr. Rockson Samuel</h2>
              <p className="text-xl text-foreground/80 dark:text-muted-foreground/70 mb-6 font-semibold">BDS, General Dentist</p>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground/70 leading-relaxed">
                With over <strong>15 years of experience</strong> in comprehensive dental care, Dr. Rockson Samuel is
                dedicated to providing <strong>exceptional dental services</strong> with a gentle touch and modern
                techniques. His commitment to continuing education ensures that patients receive the most advanced
                treatments available.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <GlassCard
                    key={index}
                    variant="default"
                    className="p-4 group hover:scale-105 transition-transform bg-card dark:bg-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground dark:text-muted-foreground/70">{achievement.label}</div>
                        <div className="font-bold text-foreground dark:text-white text-sm">{achievement.value}</div>
                      </div>
                    </div>
                  </GlassCard>
                )
              })}
            </div>

            {/* Specializations */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground dark:text-white">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg font-semibold"
                asChild
              >
                <Link href="/about-us/dr-rockson-samuel">
                  Learn More About Dr. Samuel
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 text-foreground dark:border-white dark:text-white hover:bg-muted dark:hover:bg-card/10 bg-transparent font-semibold"
                asChild
              >
                <a href="tel:7010650063">Book Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
