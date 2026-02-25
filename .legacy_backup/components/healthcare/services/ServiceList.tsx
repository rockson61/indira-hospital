'use client'

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Bluetooth as Tooth, Smile, Zap, Shield, Heart, Baby, ArrowRight, CheckCircle } from "lucide-react"
import { useServices } from "@/hooks/useServices"
import Image from "next/image"
import Link from 'next/link'
// import { useTranslations } from 'next-intl';

export function ServicesOverview() {
  // Services are now loaded via hook which provides translations
  const services = useServices();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-slate-900/50 transition-colors">
      <SectionContainer>
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Our Premium Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive dental care including implants, orthodontics, oral surgery, and cosmetic dentistry.
          </p>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="card-modern group hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {service.popular && (
                  <div className="gradient-bg text-white text-sm font-bold px-4 py-2 text-center">
                    Most Popular
                  </div>
                )}

                <div className="p-6 space-y-4">
                  {/* Service Image */}
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/dental-clinic-vellore.jpg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                        {service.title}
                      </h3>
                      <span className="text-lg font-bold gradient-text">{service.price}</span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {(service.features || []).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        className="flex-1 btn-primary"
                        asChild
                      >
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10 bg-transparent transition-all duration-300"
                        asChild
                      >
                        <Link href="/contact">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Emergency Services Banner */}
        <div className="card-modern bg-gradient-to-r from-red-500 to-red-600 text-white p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Dental Emergency?</h3>
            <p className="text-lg opacity-90">
              We offer same-day emergency appointments for severe pain and injuries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-card text-red-600 hover:bg-muted font-bold" asChild>
                <a href="tel:7010650063">Call Emergency</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-card/10 bg-transparent"
                asChild
              >
                <Link href="/services/emergency-dentistry">Emergency Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/10 px-8 bg-transparent transition-all duration-300"
            asChild
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </SectionContainer>
    </section>
  )
}
