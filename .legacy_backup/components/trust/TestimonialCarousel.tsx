"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  treatment?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  interval?: number
}

export function TestimonialCarousel({ testimonials = [], autoPlay = true, interval = 5000 }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      {testimonials && testimonials.length > 0 ? (
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none shadow-md">
          <CardContent className="p-8">
            <div className="flex justify-center mb-6">
              <Quote className="h-12 w-12 text-primary/30" />
            </div>

            <div className="text-center mb-6">
              <p className="text-lg text-foreground italic mb-6">"{testimonials[currentIndex].text}"</p>

              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[currentIndex].rating ? "text-accent fill-current" : "text-muted"
                    }`}
                  />
                ))}
              </div>

              <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
              <p className="text-muted-foreground text-sm">
                from {testimonials[currentIndex].location}
                {testimonials[currentIndex].treatment && <> • {testimonials[currentIndex].treatment}</>}
              </p>
            </div>

            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div>No testimonials available</div>
      )}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
        onClick={goToPrevious}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
