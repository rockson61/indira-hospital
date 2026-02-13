"use client"

import { useState } from "react"
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Clock, IndianRupee } from "lucide-react"
import { Bluetooth as Tooth, Sparkles, AlignJustify, Syringe, Stethoscope, Baby } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { servicesData } from "@/lib/data/services-data"

// Services are now loaded from lib/data/services-data.tsx
const services = servicesData.map(service => ({
  ...service,
  link: service.href // Map href to link for compatibility
}));

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Comprehensive Dental Care
          </h2>
          <p className="text-lg text-muted-foreground">
            From routine check-ups to advanced treatments, we offer a complete range of dental services to keep your
            smile healthy and beautiful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isActive = activeService === index

            return (
              <GlassCard
                key={index}
                variant={isActive ? "accent" : "default"}
                className={`group cursor-pointer transition-all duration-300 ${isActive ? "ring-2 ring-accent shadow-accent/20" : ""
                  }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`mb-4 p-3 rounded-lg w-fit transition-colors ${isActive
                      ? "bg-accent text-accent-foreground"
                      : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                      }`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {(service.features || []).slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between mb-4 pt-4 border-t border-border">
                    <div className="flex items-center text-sm">
                      <IndianRupee className="h-4 w-4 text-accent mr-1" />
                      <span className="font-semibold text-foreground">{service.price}+</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration || "Varies"}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="flex items-center justify-center w-full py-2 px-4 bg-accent/10 text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                  >
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlassCard>
            )
          })}
        </div>

        {/* Featured Service Details */}
        <GlassCard variant="accent" className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Featured: {services[activeService].title}</h3>
              <p className="text-muted-foreground mb-6">{services[activeService].description}</p>
              <div className="space-y-3 mb-6">
                {(services[activeService].features || []).map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={services[activeService].href}
                  className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
                >
                  View Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-background border border-border text-foreground rounded-lg hover:bg-accent/5 transition-colors font-medium"
                >
                  Book Appointment
                </Link>
              </div>
            </div>

            <div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden">
              {(() => {
                const IconComponent = services[activeService].icon
                return (
                  <div className="absolute inset-0 flex items-center justify-center bg-accent/5">
                    <IconComponent className="h-32 w-32 text-accent/20" />
                  </div>
                )
              })()}
            </div>
          </div>
        </GlassCard>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg shadow-lg shadow-accent/20"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
