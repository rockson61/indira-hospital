import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceDetailModal } from "./ServiceDetailModal"
import { SmileIcon as Tooth, Smile, Syringe, Scissors, Brain, Bone, Wrench } from "lucide-react"

const servicesData = {
  orthodontics: {
    icon: Smile,
    title: "Orthodontics",
    description:
      "Specialized treatments for <a href='https://en.wikipedia.org/wiki/Teeth_alignment' target='_blank' rel='noopener noreferrer'>teeth alignment</a> and <a href='https://www.nidcr.nih.gov/health-info/orthodontics' target='_blank' rel='noopener noreferrer'>jaw corrections</a>",
    conditions: [
      "3rd Molar Causing Crowding",
      "Early Loss of Primary Teeth",
      "Intrusion of Maxillary Centrals",
      "Maxillary Excess Reduction",
      "Malocclusion (Class I, Class II Skeletal View, Class II, Class III)",
      "Teeth Crowding Issues",
      "Misaligned Teeth",
      "Receding Gums with Braces",
    ],
    treatments: [
      "Invisalign Clear Aligners",
      "Serial Extraction",
      "Space Maintainer",
      "Thumb Sucking Appliance",
      "Maxillary Molar Intrusion with Implants",
      "Molar Uprighting with Implants",
      "Root Tipping for Implant",
      "Lower Teeth Crowding Treatment",
      "Invisalign for Severely Crowded Teeth",
      "Braces for Overcrowding",
      "Veneers for Overlapping Teeth",
      "Braces with Crowns and Bridges",
    ],
    oralHygiene: [
      "Brushing Techniques (Bass Modified, Bass Technique, Roll Technique)",
      "Flossing Techniques (Floss Aid for Bridge, Standard Floss, Stiff End Floss)",
      "Interdental Brushing (for Braces, Severe Bone Loss)",
      "Other Hygiene Practices (Rubber Tip, Tongue Brushing)",
    ],
    anatomy: ["Tooth Anatomy", "Tooth Eruption Timeline"],
  },
  periodontics: {
    icon: Scissors,
    title: "Periodontics",
    description:
      "Treatments for <a href='https://www.perio.org/for-patients/periodontal-disease/' target='_blank' rel='noopener noreferrer'>gum diseases</a> and maintaining gum health",
    conditions: [
      "Periodontal Disease (Bone View, Gum View, Pocket Formation with Calculus)",
      "Gingivitis Infection",
      "Periodontal Pocket Symptoms",
      "Periodontal Abscess",
      "Bleeding Gums After Quitting Smoking",
      "Periodontitis Stages",
      "Bone Loss in Teeth",
    ],
    treatments: [
      "Connective Tissue Graft (CTG) for Root Coverage",
      "Guided Tissue Regeneration (GTR) for Mandibular Molar Defect",
      "Lateral Pedicle Graft for Lower Premolar",
      "Management of Advanced Gingival (MAG) Treatments",
      "Preventive Care (Prophylaxis, Deep Gum Pockets Treatment, Scaling and Root Planing, Pocket Reduction Surgery, Periodontal Cleaning)",
    ],
  },
  surgicalProcedures: {
    icon: Syringe,
    title: "Surgical Procedures",
    description: "Advanced surgical treatments for various dental conditions",
    conditions: ["Jaw Atrophy", "Mandibular Posterior Atrophy", "Full Jaw Atrophy"],
    treatments: [
      "Block Graft for Single Tooth Atrophy",
      "Chin Advancement",
      "Chin Autograft for Mandibular Posterior",
      "Chin Implant",
      "Distraction Osteogenesis",
      "Nerve Repositioning",
      "Root Tip in Sinus Retraction",
      "Sinus Atrophy Post-Extraction",
      "Sinus Lift & Implant Placement",
      "Gum Flap Surgery",
    ],
  },
  endodontics: {
    icon: Brain,
    title: "Endodontics",
    description: "Specialized treatments for tooth pulp and root canal procedures",
    conditions: [
      "Tooth Pain & Sensitivity",
      "Soothe Tooth Pain",
      "Jaw Pain",
      "Toothache Only at Night",
      "Tooth Decay Smell",
      "Tooth Decay & Cavities",
      "Cavities in Baby Teeth",
      "Tooth Decay from Smoking",
      "Do Cavity Fillings Hurt?",
      "Pediatric Conditions (Loose Baby Tooth with Crown, Baby Tooth Infection, Missing Baby Teeth)",
    ],
    treatments: ["Antibiotics & Root Canal Treatment (RCT)", "Manual RCT", "Mechanical RCT"],
  },
  prosthodontics: {
    icon: Tooth,
    title: "Prosthodontics",
    description: "Dental prosthetics for replacing missing teeth and restoring oral function",
    conditions: ["Drifting Teeth (Premolar)"],
    treatments: [
      "Complete Lower Denture",
      "Fixed-Detachable Implant (Mandible, Maxillary)",
      "Lower Bridge with Eight Implants",
      "Upper Denture",
      "Removable Partial Denture (RPD) for Lower Posterior",
      "Anterior Teeth Splaying",
      "Ball Clasp for Provisional Single Tooth",
    ],
  },
  implantology: {
    icon: Bone,
    title: "Implantology",
    description: "Dental implant procedures for replacing missing teeth",
    conditions: ["Loss of First Lower Molar Causing Drifting", "Loss of Posterior Occlusion"],
    treatments: [
      "Bar & Clip Retained Implants",
      "Bridges vs. Implants",
      "Flapless Multiple Implants",
      "Dental Implant Procedure",
      "Bone Grafting for Dental Implants",
      "All-On-4 Dental Implants",
      "Implant Types (Two-Stage, Attached to Teeth, Occlusal Access, Post & Core, Mini Dental Implants, Short Implants)",
      "Sinus Lift with Implant Placement",
      "Upper Jaw Multiple Implants",
    ],
  },
  restorativeDentistry: {
    icon: Wrench,
    title: "Restorative Dentistry",
    description: "Procedures to repair and restore damaged teeth",
    conditions: ["Tooth Damage & Trauma", "Fractured Teeth", "Repairing a Chipped Crown with Exposed Metal"],
    treatments: [
      "Oral Hygiene & Maintenance (For Elderly with No Teeth, With Braces, Severe Plaque on Teeth)",
      "Teaching Dental Hygiene to Preschoolers",
      "Fluoride Treatments for Children's Teeth",
      "Baby Bottle Tooth Decay",
      "Composite Bonding for Missing Tooth",
      "Silver Fillings vs. White Fillings",
      "Porcelain Fillings",
      "Crown Staining",
      "Placing a Crown on a Cracked Tooth",
      "Dental Bridge for One Tooth",
      "Gummy Smile Correction",
    ],
  },
  oralSurgery: {
    icon: Syringe,
    title: "Oral Surgery & Post-Surgical Care",
    description: "Surgical procedures and post-operative care for various oral conditions",
    conditions: [
      "Oral Infections, Abscesses & Lesions (Dental Abscess, Gum Abscess, Periapical Abscess, Pocket of Pus in Gums)",
    ],
    treatments: [
      "Gum Flap Surgery",
      "Tooth Extraction Complications",
      "Post-Dental Implant Care",
      "Temporary Crown Fell Off After Root Canal",
      "Temporary Crown Overview",
      "Temporary Dental Bridge for Front Teeth",
    ],
  },
}

export function Services() {
  return (
    <section className="py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Comprehensive Dental Services</h2>
        <Tabs defaultValue="orthodontics" className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-8 overflow-x-auto">
            {Object.keys(servicesData).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="bg-primary/10 text-primary px-3 py-1 text-sm whitespace-nowrap"
              >
                {servicesData[category as keyof typeof servicesData].title}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(servicesData).map(([category, data]) => (
            <TabsContent key={category} value={category}>
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <data.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    <div>
                      <CardTitle className="text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: data.title }} />
                      <CardDescription
                        className="text-sm md:text-base"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm md:text-base">Conditions We Treat:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {data.conditions.slice(0, 5).map((condition, index) => (
                          <li key={index} className="text-xs md:text-sm text-primary/80">
                            {condition}
                          </li>
                        ))}
                      </ul>
                      {data.conditions.length > 5 && (
                        <p className="text-xs md:text-sm text-primary/80 mt-2">
                          And {data.conditions.length - 5} more...
                        </p>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm md:text-base">Our Treatments:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {data.treatments.slice(0, 5).map((treatment, index) => (
                          <li key={index} className="text-xs md:text-sm text-primary/80">
                            {treatment}
                          </li>
                        ))}
                      </ul>
                      {data.treatments.length > 5 && (
                        <p className="text-xs md:text-sm text-primary/80 mt-2">
                          And {data.treatments.length - 5} more...
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-6">
                    <ServiceDetailModal service={data} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
