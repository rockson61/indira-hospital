'use client'

import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
// Use hooks for translation
import { useTestimonials } from "@/hooks/useTestimonials"

export function TestimonialsSection() {
  const allTestimonials = useTestimonials();
  const testimonials = allTestimonials.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900/50 dark:to-background transition-colors duration-300">
      <SectionContainer>
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">What Our Patients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from our satisfied patients across Vellore
          </p>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div className="card-modern inline-block p-8">
            <div className="space-y-4">
              <div className="text-6xl font-bold gradient-text">4.9</div>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 text-yellow-500 fill-current" />
                ))}
              </div>
              <div className="text-muted-foreground">
                <div className="text-lg font-semibold">Based on 126+ Reviews</div>
                <div className="text-sm">Google Reviews & Patient Feedback</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-modern p-6 hover:scale-[1.02] hover:shadow-2xl transition-all duration-500">
              <div className="space-y-4">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary opacity-50" />

                {/* Rating */}
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${star <= testimonial.rating ? "text-yellow-500 fill-current" : "text-muted-foreground/50"
                        }`}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Treatment Info */}
                <div className="bg-primary/10 rounded-lg p-3">
                  <div className="text-sm font-semibold text-foreground">Treatment: {testimonial.treatment}</div>
                </div>

                {/* Patient Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="relative w-12 h-12">
                    <Image
                      src={testimonial.image || "/dental-clinic-vellore.jpg"}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}, {testimonial.age}
                    </div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Platforms */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold gradient-text mb-8">Find Us On</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="card-modern p-4 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4.9★</div>
                <div className="text-sm text-muted-foreground">Google Reviews</div>
              </div>
            </div>
            <div className="card-modern p-4 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4.8★</div>
                <div className="text-sm text-muted-foreground">JustDial</div>
              </div>
            </div>
            <div className="card-modern p-4 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4.9★</div>
                <div className="text-sm text-muted-foreground">Practo</div>
              </div>
            </div>
            <div className="card-modern p-4 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">5.0★</div>
                <div className="text-sm text-muted-foreground">Facebook</div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
