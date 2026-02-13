import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, MessageCircle } from "lucide-react"

interface ServiceDetailModalProps {
  service: {
    title: string
    description: string
    conditions: string[]
    treatments: string[]
    oralHygiene?: string[]
    anatomy?: string[]
  }
}

export function ServiceDetailModal({ service }: ServiceDetailModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full text-sm md:text-base">
          Learn More
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">{service.title}</DialogTitle>
          <DialogDescription className="text-sm md:text-base text-muted-foreground">
            {service.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">Conditions We Treat:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {service.conditions.map((condition, index) => (
                <li key={index} className="text-xs md:text-sm text-muted-foreground">
                  {condition}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">Our Treatments:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {service.treatments.map((treatment, index) => (
                <li key={index} className="text-xs md:text-sm text-muted-foreground">
                  {treatment}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {service.oralHygiene && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-sm md:text-base">Oral Hygiene Practices:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {service.oralHygiene.map((practice, index) => (
                <li key={index} className="text-xs md:text-sm text-muted-foreground">
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        )}
        {service.anatomy && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-sm md:text-base">Dental Anatomy:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {service.anatomy.map((item, index) => (
                <li key={index} className="text-xs md:text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button className="flex-1 text-sm md:text-base" asChild>
            <a href="tel:07010650063">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
          <Button className="flex-1 text-sm md:text-base" variant="secondary" asChild>
            <a href="https://maps.google.com/?q=Indira+Dental+Clinic+Vellore" target="_blank" rel="noopener noreferrer">
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </a>
          </Button>
          <Button className="flex-1 text-sm md:text-base" variant="outline" asChild>
            <a href="https://wa.me/917010650063" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
