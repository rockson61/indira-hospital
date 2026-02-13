'use client'

import Image from "next/image"
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Clock, CheckCircle, Star, MapPin, Phone, Mail } from "lucide-react"

// Centralized Data Imports
import { doctors, specializations, clinicStats } from "@/lib/data/team-data"
import { testimonials } from "@/lib/data/testimonials-data"
import { invisalignFaqs } from "@/lib/data/faq-data"

const doctor = doctors[0]; // Primary doctor
const specialties = specializations.slice(0, 4); // Use first 4 or specific ones

const recommendations = [
  { category: "General Dentistry", count: 45, color: "rgb(0, 255, 255)" },
  { category: "RCT & Implants", count: 35, color: "rgb(255, 99, 132)" },
  { category: "Orthodontics", count: 25, color: "rgb(54, 162, 235)" },
  { category: "Other", count: 31, color: "rgb(201, 203, 207)" },
]

const navigationTabs = ["Expertise", "About", "Procedures", "Location", "Reviews", "Videos", "Articles", "FAQ"]

export function DoctorProfile() {
  return (
    <Card className="p-6">
      <div className="grid md:grid-cols-[200px_1fr_300px] gap-6 lg:gap-10">
        <div className="space-y-4">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-[#002B6B]">{doctor.name}</h1>
            <p className="text-lg text-muted-foreground">{doctor.title}</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-base">Trusted Network</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-base">{doctor.experience} experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-base">Verified Practitioner</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <Badge key={specialty} variant="secondary" className="text-sm py-1 px-3">
                {specialty}
              </Badge>
            ))}
            <Badge variant="outline" className="text-sm py-1 px-3">
              +8
            </Badge>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h2 className="text-lg font-bold text-[#002B6B] mb-4">PATIENT TRUST SCORE</h2>
          <div className="space-y-4">
            <div>
              <div className="text-6xl font-bold text-[#002B6B] mb-2">{clinicStats.trustScore}</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#00ffff] text-[#00ffff]" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-[#002B6B]">{clinicStats.totalReviews}</span>
                <Link href="/testimonials" className="text-primary hover:underline">
                  patient reviews
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-[#002B6B]">{clinicStats.skillEndorsements}</span>
                <Link href="/skill-endorsements" className="text-primary hover:underline">
                  skill endorsements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-[#002B6B] font-bold mb-4">136 RECOMMENDATIONS FOR:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {recommendations.map((rec) => (
            <div
              key={rec.category}
              className="p-3 rounded-lg transition-all hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: rec.color + "20" }}
            >
              <div className="text-sm font-medium" style={{ color: rec.color }}>
                {rec.category} ({rec.count})
              </div>
            </div>
          ))}
        </div>

        <Tabs defaultValue="expertise" className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto">
            {navigationTabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className="text-muted-foreground data-[state=active]:text-primary"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="expertise" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Areas of Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Invisalign Specialist in Vellore</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Certified Invisalign Provider since 2008</li>
                  <li>Over 500 successful Invisalign cases in Vellore</li>
                  <li>Advanced training in complex Invisalign treatments</li>
                  <li>Expertise in Invisalign for teens and adults</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Clear Braces and Orthodontics</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Proficient in various clear braces systems</li>
                  <li>Customized orthodontic treatment plans for Vellore patients</li>
                  <li>Specialized in treating complex malocclusions</li>
                  <li>Advanced digital orthodontic planning techniques</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="about" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">About {doctor.name}</h3>
            {doctor.bio.map((paragraph, idx) => (
              <p key={idx} className="mb-4">
                {paragraph}
              </p>
            ))}
          </TabsContent>
          <TabsContent value="procedures" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Orthodontic Procedures</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Invisalign Treatment in Vellore</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Custom-made clear aligners for discreet teeth straightening</li>
                  <li>Invisalign First for young children</li>
                  <li>Invisalign Teen for adolescents</li>
                  <li>Invisalign for adults with complex cases</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Clear Braces and Other Orthodontic Solutions</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ceramic braces for a more discreet alternative to metal braces</li>
                  <li>Lingual braces placed behind the teeth</li>
                  <li>Traditional metal braces for complex cases</li>
                  <li>Orthodontic retainers for post-treatment maintenance</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="location" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-semibold">Indira Dental Clinic</p>
                <p>3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar</p>
                <p>Vellore, Tamil Nadu 632006</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+917010650063" className="text-primary hover:underline">
                +91 70106 50063
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:rockson68@hotmail.com" className="text-primary hover:underline">
                rockson68@hotmail.com
              </a>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Patient Reviews</h3>
            <div className="space-y-4">
              {testimonials.slice(0, 3).map((testimonial, idx) => (
                <div key={idx} className="bg-muted p-4 rounded-lg">
                  <p className="italic mb-2">"{testimonial.text}"</p>
                  <p className="text-sm text-muted-foreground">- {testimonial.name}, {testimonial.location}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="videos" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Educational Videos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Invisalign Treatment Process</h4>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/D3FBU7UyZJA"
                    title="Invisalign Treatment Process"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Clear Braces vs Traditional Braces</h4>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/8TT22hOIqi8"
                    title="Clear Braces vs Traditional Braces"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="articles" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Articles by Dr. Rockson Samuel</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  <Link href="/blog/invisalign-vs-traditional-braces" className="text-primary hover:underline">
                    Invisalign vs Traditional Braces: Which is Right for You?
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Learn about the pros and cons of Invisalign and traditional braces to make an informed decision for
                  your orthodontic treatment in Vellore.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  <Link href="/blog/clear-braces-adult-orthodontics" className="text-primary hover:underline">
                    Clear Braces for Adults: A Guide to Discreet Orthodontic Treatment
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Discover how clear braces are revolutionizing adult orthodontics in Vellore, offering a discreet way
                  to achieve a perfect smile.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  <Link href="/blog/invisalign-teen-vellore" className="text-primary hover:underline">
                    Invisalign for Teens in Vellore: What Parents Need to Know
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Everything parents in Vellore should know about Invisalign treatment for their teenagers, including
                  benefits, care, and expected outcomes.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faq" className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {invisalignFaqs.slice(0, 4).map((faq, idx) => (
                <div key={idx}>
                  <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}
