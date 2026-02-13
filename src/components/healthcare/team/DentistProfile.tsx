'use client'

import Image from "next/image"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, MapPin, Phone, Star, MessageCircle, Navigation } from "lucide-react"

export function DentistProfile() {
  const expertiseAreas = [
    { name: "General Dentistry", percentage: 25 },
    { name: "Root Canal Treatment", percentage: 20 },
    { name: "Dental Implants", percentage: 15 },
    { name: "Cosmetic Dentistry", percentage: 12 },
    { name: "Orthodontics", percentage: 10 },
    { name: "Braces", percentage: 8 },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Your Dentist</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Providing exceptional dental care in Vellore with expertise and compassion
          </p>
        </div>

        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Profile Section */}
              <div className="bg-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <Image
                      src="/dental-clinic-vellore.jpg"
                      alt="Dr. Rockson Samuel"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Dr. Rockson Samuel</h3>
                    <p className="text-muted-foreground mb-4">General Dentist & Implantologist</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Trusted Network</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>15+ Yrs experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Verified Practitioner</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-primary/5">
                        General Dentistry
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5">
                        RCT
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5">
                        Implants
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5">
                        Orthodontics
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5">
                        +8
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-3">136 RECOMMENDATIONS FOR:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">General Dentistry (45)</Badge>
                    <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20">
                      RCT & Implants (35)
                    </Badge>
                    <Badge className="bg-accent/10 text-accent hover:bg-accent/20">Orthodontics (25)</Badge>
                    <Badge className="bg-muted text-muted-foreground hover:bg-muted/80">Other (31)</Badge>
                  </div>
                </div>
              </div>

              {/* Expertise Section */}
              <div className="bg-card p-6 md:p-8 border-t md:border-t-0 md:border-l border-r-0 border-border">
                <h4 className="font-bold text-lg mb-4">Areas of expertise</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Based on patient reviews & skill endorsements by other professionals
                </p>

                <div className="space-y-4">
                  {expertiseAreas.map((area) => (
                    <div key={area.name}>
                      <div className="flex justify-between mb-1">
                        <span>{area.name}</span>
                        <span className="font-medium">{area.percentage}%</span>
                      </div>
                      <Progress value={area.percentage} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link href="/about-us/dr-rockson-samuel">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Full Profile
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Trust Score Section */}
              <div className="bg-muted/30 p-6 md:p-8">
                <div className="text-center mb-6">
                  <h4 className="font-bold text-primary text-lg mb-2">PATIENT TRUST SCORE</h4>
                  <div className="text-6xl font-bold text-primary">5.00</div>
                  <div className="flex justify-center my-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-accent" fill="currentColor" />
                    ))}
                  </div>
                  <div className="space-y-1 mt-4">
                    <div className="text-2xl font-bold text-primary">39</div>
                    <Link href="/testimonials" className="text-primary hover:underline">
                      patient reviews
                    </Link>
                  </div>
                  <div className="space-y-1 mt-4">
                    <div className="text-2xl font-bold text-primary">10</div>
                    <span className="text-primary hover:underline">skill endorsements</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-6">
                  <a href="tel:7010650063" className="col-span-1">
                    <Button variant="default" className="w-full" size="sm">
                      <Phone className="h-4 w-4 mr-2" /> Call
                    </Button>
                  </a>
                  <a
                    href="https://maps.google.com/?q=3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-1"
                  >
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      <Navigation className="h-4 w-4 mr-2" /> Directions
                    </Button>
                  </a>
                  <a href="https://wa.me/7010650063" target="_blank" rel="noopener noreferrer" className="col-span-1">
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clinic Details */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Our Location</h3>
                <p>3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar</p>
                <p>Suthanthira Ponvizha Nagar, Gandhi Nagar</p>
                <p>Vellore, Tamil Nadu 632006</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              Get Directions →
            </a>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <Clock className="h-6 w-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Clinic Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <p>Monday:</p>
                  <p>10 am–8 pm</p>
                  <p>Tuesday:</p>
                  <p>10 am–8 pm</p>
                  <p>Wednesday:</p>
                  <p>10 am–8 pm</p>
                  <p>Thursday:</p>
                  <p>10 am–8 pm</p>
                  <p>Friday:</p>
                  <p>10 am–8 pm</p>
                  <p>Saturday:</p>
                  <p>10 am–8 pm</p>
                  <p>Sunday:</p>
                  <p>10 am–1:30 pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <Phone className="h-6 w-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Contact Us</h3>
                <p className="mb-1">
                  Phone:{" "}
                  <a href="tel:7010650063" className="hover:underline">
                    7010650063
                  </a>
                </p>
                <p className="mb-1">
                  WhatsApp:{" "}
                  <a href="https://wa.me/7010650063" className="hover:underline">
                    7010650063
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:rockson68@hotmail.com" className="hover:underline">
                    rockson68@hotmail.com
                  </a>
                </p>
              </div>
            </div>
            <Link href="/contact" className="text-primary hover:underline text-sm">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
