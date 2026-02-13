import { ModernCard, ModernCardContent } from "@/components/ui/modern-card"
import { CheckCircle2, Award, Users, Stethoscope } from "lucide-react"

const achievements = [
  {
    title: "Root Canal Treatments",
    count: "3000+",
    icon: Stethoscope,
    description: "Successful RCT procedures with 97.5% accuracy",
  },
  {
    title: "Dental Implants",
    count: "3000+",
    icon: Award,
    description: "Permanent tooth replacement solutions",
  },
  {
    title: "Invisible Aligners",
    count: "600+",
    icon: Users,
    description: "Smile transformation success stories",
  },
]

const trustFactors = [
  {
    category: "Expert Care",
    points: [
      "Ensure every bit to save your natural teeth",
      "Conduct Root Canal Treatments with 97.5% accuracy",
      "Expert Doctors in their field",
      "Work passionately with every single patient",
    ],
  },
  {
    category: "Advanced Technology",
    points: [
      "Use advanced Dental Instruments & Materials",
      "Follow 4-tier Sterilization of Dental Instruments",
      "Association with the best labs in India",
      "Regular equipment upgrades",
    ],
  },
  {
    category: "Patient Experience",
    points: [
      "There's no waiting time for patients",
      "Educate patients during the treatment",
      "Ensure regular follow-ups with Patients",
      "Treat patients from around the globe",
    ],
  },
]

export function ClinicUSP() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading gradient-text">Why Choose Indira Dental Clinic?</h2>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Successful Dental Treatments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <ModernCard key={index} className="group border-none shadow-lg bg-background/50 dark:bg-default-50/5 backdrop-blur-md">
                <ModernCardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <achievement.icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-5xl font-bold text-primary mb-3 font-heading tabular-nums">{achievement.count}</h4>
                  <p className="text-xl font-bold mb-2 text-foreground">{achievement.title}</p>
                  <p className="text-default-500">{achievement.description}</p>
                </ModernCardContent>
              </ModernCard>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">Why Our Patients Trust Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustFactors.map((factor, index) => (
              <ModernCard key={index} className="group hover:-translate-y-1 transition-transform duration-300">
                <ModernCardContent className="p-8">
                  <h4 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors border-b border-default-100 dark:border-default-50/10 pb-4">
                    {factor.category}
                  </h4>
                  <div className="space-y-4">
                    {factor.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-default-600 dark:text-default-400 font-medium leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </ModernCardContent>
              </ModernCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
