"use client"

import {
  Phone,
  Globe,
  Navigation,
  MessageCircle,
  Star,
  Clock,
  MapPin,
  Car,
  Train,
  Bus,
  ParkingCircle,
  Map,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ClinicInfoCardProps {
  showDirections?: boolean
  showMap?: boolean
  className?: string
}

export function ClinicInfoCard({ showDirections = true, showMap = true, className }: ClinicInfoCardProps) {
  const clinicInfo = {
    name: "Indira Dental Clinic | Dr Rockson Samuel | Top Dentist in Vellore for RCT, Braces, Implants, & Dental Fillings",
    rating: 5.0,
    reviewCount: 119,
    address: "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006",
    phone: "7010650063",
    whatsapp: "917010650063",
    website: "https://www.velloredental.com",
    directionsUrl: "https://maps.app.goo.gl/7NrdTAXtqLrAoC5U8",
    hours: [
      { day: "Monday", hours: "10 am–8 pm" },
      { day: "Tuesday", hours: "10 am–8 pm" },
      { day: "Wednesday", hours: "10 am–8 pm" },
      { day: "Thursday", hours: "10 am–8 pm" },
      { day: "Friday", hours: "10 am–8 pm" },
      { day: "Saturday", hours: "10 am–8 pm" },
      { day: "Sunday", hours: "10 am–1:30 pm" },
    ],
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Business Profile Card */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardTitle className="text-2xl">{clinicInfo.name}</CardTitle>
          <CardDescription className="text-white/90 flex items-center gap-2 text-lg">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold">{clinicInfo.rating}</span>
            <span>({clinicInfo.reviewCount} Google reviews)</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Address:</p>
              <p className="text-muted-foreground">{clinicInfo.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-medium">Phone:</p>
              <a href={`tel:${clinicInfo.phone}`} className="text-blue-600 hover:underline">
                {clinicInfo.phone}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-medium mb-2">Hours:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {clinicInfo.hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
            <Button asChild variant="outline" className="w-full bg-transparent">
              <a href={clinicInfo.website} target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4 mr-2" />
                Website
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <a href={clinicInfo.directionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-4 h-4 mr-2" />
                Directions
              </a>
            </Button>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
              <a href={`tel:${clinicInfo.phone}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
            </Button>
            <Button asChild className="w-full bg-[#25D366] hover:bg-[#20BA5A]">
              <a href={`https://wa.me/${clinicInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* How to Reach Section */}
      {showDirections && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">How to reach the dental office</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="car" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="car" className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  <span className="hidden sm:inline">Car</span>
                </TabsTrigger>
                <TabsTrigger value="train" className="flex items-center gap-2">
                  <Train className="w-4 h-4" />
                  <span className="hidden sm:inline">Train</span>
                </TabsTrigger>
                <TabsTrigger value="bus" className="flex items-center gap-2">
                  <Bus className="w-4 h-4" />
                  <span className="hidden sm:inline">Bus</span>
                </TabsTrigger>
                <TabsTrigger value="parking" className="flex items-center gap-2">
                  <ParkingCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Parking</span>
                </TabsTrigger>
                <TabsTrigger value="location" className="flex items-center gap-2">
                  <Map className="w-4 h-4" />
                  <span className="hidden sm:inline">Location</span>
                </TabsTrigger>
                <TabsTrigger value="vicinity" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Vicinity</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="car" className="space-y-4 mt-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    From Katpadi (North)
                  </h3>
                  <p className="text-muted-foreground">
                    Head south on Katpadi Main Road, continue straight past CMC Hospital. The clinic will be on your
                    right side at Gandhi Nagar, near Shell Petrol Pump. Travel time: approximately 10 minutes.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    From VIT University (South)
                  </h3>
                  <p className="text-muted-foreground">
                    Take the main road heading north towards Katpadi. After passing Sathuvachari, continue straight on
                    Katpadi Main Road. The clinic will be on your left at Gandhi Nagar. Travel time: approximately 15
                    minutes.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    From Chennai
                  </h3>
                  <p className="text-muted-foreground">
                    Take NH48 towards Vellore. After entering Vellore city, follow signs to Katpadi Main Road. The
                    clinic is located at Gandhi Nagar on Katpadi Main Road. Total travel time: approximately 2.5-3
                    hours.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="train" className="space-y-4 mt-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Train className="w-5 h-5" />
                    From Katpadi Railway Station
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Katpadi Junction is the main railway station serving Vellore. The clinic is just 2 km from the
                    station.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Exit Katpadi Railway Station and head towards the main road</li>
                    <li>Take an auto-rickshaw or taxi (₹50-80, 5-10 minutes)</li>
                    <li>Ask the driver to take you to "Indira Dental Clinic, Gandhi Nagar, Katpadi Main Road"</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Train className="w-5 h-5" />
                    From Vellore Cantonment Railway Station
                  </h3>
                  <p className="text-muted-foreground">
                    Distance: 5 km from the clinic. Take an auto-rickshaw or taxi (₹100-150, 15 minutes). The clinic is
                    located on Katpadi Main Road at Gandhi Nagar.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="bus" className="space-y-4 mt-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Bus className="w-5 h-5" />
                    From Vellore Bus Stand
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    The main bus stand (Old Bus Stand) is approximately 3 km from the clinic.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Take any bus heading towards Katpadi on Katpadi Main Road</li>
                    <li>Get down at Gandhi Nagar stop (near Shell Petrol Pump)</li>
                    <li>The clinic is on the 3rd floor of the building at 54, Katpadi Main Road</li>
                    <li>Travel time: 10-15 minutes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Bus className="w-5 h-5" />
                    Local Bus Routes
                  </h3>
                  <p className="text-muted-foreground">
                    Bus routes 1, 2, 5, and 12 pass through Katpadi Main Road and stop near Gandhi Nagar. Ask the
                    conductor for "Gandhi Nagar" or "Shell Petrol Pump" stop.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="parking" className="space-y-4 mt-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <ParkingCircle className="w-5 h-5" />
                    Parking Facilities
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Street Parking:</strong> Available on Katpadi Main Road in front of the building
                    </li>
                    <li>
                      <strong>Building Parking:</strong> Limited parking spaces available at the building premises
                    </li>
                    <li>
                      <strong>Two-Wheeler Parking:</strong> Dedicated space for motorcycles and scooters
                    </li>
                    <li>
                      <strong>Nearby Options:</strong> Additional parking available at Shell Petrol Pump (50 meters
                      away)
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    <strong>Note:</strong> Parking is free for patients. Please inform the reception if you need
                    assistance with parking.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="location" className="space-y-4 mt-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Map className="w-5 h-5" />
                    Exact Location
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong>Building:</strong> 54, Katpadi Main Road
                    </p>
                    <p>
                      <strong>Floor:</strong> 3rd Floor
                    </p>
                    <p>
                      <strong>Area:</strong> Suthanthira Ponvizha Nagar, Gandhi Nagar
                    </p>
                    <p>
                      <strong>Landmark:</strong> Near Shell Petrol Pump, Opposite to Krishna Sweets
                    </p>
                    <p>
                      <strong>Postal Code:</strong> 632006
                    </p>
                    <p>
                      <strong>GPS Coordinates:</strong> 12.9540278°N, 79.1369615°E
                    </p>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900 mb-2">How to Find Us:</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                      <li>Look for the Shell Petrol Pump on Katpadi Main Road</li>
                      <li>The clinic building is right next to the petrol pump</li>
                      <li>Take the elevator or stairs to the 3rd floor</li>
                      <li>You'll see our signboard at the entrance</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vicinity" className="space-y-4 mt-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    In the Vicinity
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Nearby Landmarks:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Shell Petrol Pump (adjacent)</li>
                        <li>Krishna Sweets (across the road)</li>
                        <li>CMC Hospital (1.5 km)</li>
                        <li>VIT University (2 km)</li>
                        <li>Katpadi Railway Station (2 km)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Facilities Nearby:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Restaurants and cafes within 500m</li>
                        <li>Pharmacies within 200m</li>
                        <li>ATMs and banks within 300m</li>
                        <li>Shopping centers within 1 km</li>
                        <li>Hotels and lodges within 1 km</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-900 mb-2">Area Highlights:</p>
                    <p className="text-green-800 text-sm">
                      Gandhi Nagar is a well-connected residential and commercial area in Vellore. The location offers
                      easy access to major parts of the city and is well-served by public transportation. The area is
                      safe, clean, and has all essential amenities within walking distance.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {/* Google Maps Embed */}
      {showMap && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Find Us on Map</CardTitle>
            <CardDescription>Navigate easily to our clinic location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2784186240674!2d79.1369615!3d12.9540278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad394e9843620f%3A0xc7a4b2fb0991e086!2sIndira%20Dental%20Clinic%20%7C%20Dr%20Rockson%20Samuel%20%7C%20Top%20Dentist%20in%20Vellore%20for%20RCT%2C%20Braces%2C%20Implants%2C%20%26%20Dental%20Fillings!5e0!3m2!1sen!2sin!4v1760065009950!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Indira Dental Clinic Location"
              />
            </div>
            <div className="mt-4 text-center">
              <Button asChild size="lg" className="w-full md:w-auto">
                <a href={clinicInfo.directionsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions on Google Maps
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@id": "https://www.velloredental.com",
            "@type": "LocalBusiness",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
              addressLocality: "Vellore",
              addressRegion: "IN",
              postalCode: "632006",
              streetAddress: "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              bestRating: "5",
              ratingCount: "119",
              ratingValue: "5.0",
            },
            description:
              "Indira Dental Clinic, led by the top dentist Dr. Rockson Samuel in Vellore, Tamil Nadu, offers comprehensive dental care tailored to meet all your oral health needs.",
            hasMap: "https://maps.google.com/maps?cid=14385819900995297414",
            image:
              "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
            name: clinicInfo.name,
            openingHoursSpecification: clinicInfo.hours.map((schedule, index) => ({
              "@type": "OpeningHoursSpecification",
              closes: schedule.hours.split("–")[1].trim(),
              dayOfWeek: schedule.day.toUpperCase(),
              opens: schedule.hours.split("–")[0].trim(),
            })),
            telephone: `+91 ${clinicInfo.phone}`,
            url: clinicInfo.website,
          }),
        }}
      />
    </div>
  )
}
