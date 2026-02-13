'use client'

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Award, GraduationCap, Users, Clock, Star, Phone, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'

export function DentistProfile() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "BDS Degree",
      description: "Bachelor of Dental Surgery from prestigious dental college",
    },
    {
      icon: Clock,
      title: "15+ Years Experience",
      description: "Extensive experience in all dental procedures",
    },
    {
      icon: Users,
      title: "1000+ Happy Patients",
      description: "Successfully treated thousands of patients",
    },
    {
      icon: Award,
      title: "Excellence Awards",
      description: "Recognized for outstanding dental care",
    },
  ]

  const specializations = [
    "Root Canal Treatment (Endodontics)",
    "Dental Implants & Oral Surgery",
    "Cosmetic Dentistry & Smile Design",
    "Orthodontics & Braces",
    "Periodontics & Gum Treatment",
    "Pediatric Dentistry",
    "Emergency Dental Care",
    "Preventive Dentistry",
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#54CAD3]/5 to-white dark:from-slate-900/50 dark:to-background transition-colors duration-300">
      <SectionContainer>
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#005f73]">Meet Dr. Rockson Samuel</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted dental care partner with 15+ years of experience in comprehensive dentistry
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#54CAD3] to-[#005f73] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Doctor Image & Quick Info */}
          <div className="space-y-8">
            <GlassCard className="p-8">
              <div className="text-center space-y-6">
                {/* Doctor Image */}
                <div className="relative w-64 h-64 mx-auto">
                  <Image
                    src="/Dentist-near-you-Dr-Rockson-Samuel.jpg"
                    alt="Dr Rockson Samuel - Best Dentist in Vellore"
                    fill
                    className="rounded-full object-cover border-4 border-[#54CAD3]/20"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#54CAD3] text-white p-3 rounded-full">
                    <Award className="h-8 w-8" />
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-[#005f73]">Dr. Rockson Samuel</h3>
                  <p className="text-xl text-[#54CAD3] font-semibold">General Dentist</p>
                  <p className="text-muted-foreground">BDS, 15+ Years Experience</p>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-muted-foreground">(4.9/5 from 126 reviews)</span>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    className="bg-gradient-to-r from-[#54CAD3] to-[#005f73] hover:shadow-lg transition-all"
                    asChild
                  >
                    <Link href="/contact">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#54CAD3] text-[#54CAD3] hover:bg-[#54CAD3]/10 bg-transparent"
                    asChild
                  >
                    <a href="tel:7010650063">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </GlassCard>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <GlassCard key={index} className="p-4 text-center hover:scale-105 transition-transform">
                    <IconComponent className="h-8 w-8 text-[#54CAD3] mx-auto mb-2" />
                    <h4 className="font-bold text-[#005f73] text-sm">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                  </GlassCard>
                )
              })}
            </div>
          </div>

          {/* Right - About & Specializations */}
          <div className="space-y-8">
            {/* About Section */}
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-[#005f73] mb-6">About Dr. Rockson</h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Dr. Rockson Samuel is a highly experienced general dentist with over 15 years of practice in
                  comprehensive dental care. He is dedicated to providing the highest quality dental treatment in a
                  comfortable and caring environment.
                </p>
                <p>
                  With expertise in advanced dental procedures including root canal treatment, dental implants, cosmetic
                  dentistry, and orthodontics, Dr. Rockson has successfully treated thousands of patients across Vellore
                  and surrounding areas.
                </p>
                <p>
                  His patient-centered approach focuses on preventive care, patient education, and using the latest
                  dental technology to ensure optimal treatment outcomes. Dr. Rockson believes in making dental care
                  accessible and comfortable for patients of all ages.
                </p>
              </div>
            </GlassCard>

            {/* Specializations */}
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-[#005f73] mb-6">Specializations</h3>
              <div className="grid grid-cols-1 gap-3">
                {specializations.map((specialization, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#54CAD3] flex-shrink-0" />
                    <span className="text-foreground/80">{specialization}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Professional Commitment */}
            <GlassCard className="p-8 bg-gradient-to-r from-[#54CAD3]/10 to-[#005f73]/10">
              <h3 className="text-2xl font-bold text-[#005f73] mb-4">Our Commitment</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#54CAD3]" />
                  <span className="font-semibold">Painless Treatment Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#54CAD3]" />
                  <span className="font-semibold">State-of-the-art Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#54CAD3]" />
                  <span className="font-semibold">Sterilization & Safety Protocols</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#54CAD3]" />
                  <span className="font-semibold">Affordable Treatment Plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#54CAD3]" />
                  <span className="font-semibold">24/7 Emergency Support</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <GlassCard className="p-8 bg-gradient-to-r from-[#005f73] to-[#54CAD3] text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Smile?</h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule a consultation with Dr. Rockson Samuel today and experience world-class dental care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-card text-[#005f73] hover:bg-muted font-bold" asChild>
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-card/10 bg-transparent"
                asChild
              >
                <Link href="/about-us/dr-rockson-samuel">Learn More About Dr. Rockson</Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </SectionContainer>
    </section>
  )
}
