'use client'

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'
import { servicesData } from "@/lib/data/services-data"

// Services are now loaded from lib/data/services-data.tsx
const services = servicesData.filter(s => s.id !== 'orthodontics'); // Filter out Orthodontics if it's featured separately (Invisalign is Ortho related)
// Actually, the original file had Orthodontics in the grid AND Invisalign separate. 
// I'll just map all of them or filter based on original list? 
// Original list had: General, Cosmetic, Orthodontics, Implants, RCT.
// servicesData has these plus Pediatric and Periodontics.
// I'll strip to the ones that were there, or show all? 
// Showing all is better for "Standardization". I'll show all (except maybe limiting count if needed).
// The grid handles multiple rows. I'll show all.

export function ServicesWithImages() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Premier Dental Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Invisalign Featured Card */}
          <Link href="/services/invisalign" className="group">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg"
                  alt="Invisalign Clear Aligners in Vellore"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Invisalign Clear Aligners</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-3">
                  Transform your smile with virtually invisible aligners. Comfortable, removable, and custom-made for
                  your teeth.
                </p>
                <span className="text-primary text-sm font-medium flex items-center">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Regular Service Cards */}
          {servicesData.map((service, index) => (
            <Link href={service.href} key={index} className="group">
              <Card className="overflow-hidden transition-transform duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="aspect-video relative">
                  <Image
                    src={service.image || "/dental-clinic-vellore.jpg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <span className="text-primary text-sm font-medium flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
