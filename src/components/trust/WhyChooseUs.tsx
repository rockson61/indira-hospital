'use client'

import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Shield, Clock, Award, Heart, Zap, Users, CheckCircle, Star } from "lucide-react"
import { motion } from "framer-motion"

// Static data moved outside component to prevent recreation on each render
const FEATURES = [
  {
    icon: Shield,
    title: "3D CBCT & Digital Imaging",
    description:
      "In-house CBCT scanner, digital X-rays (90% less radiation), and intraoral cameras. Diagnosis results in 10 minutes, not days.",
    color: "text-[#54CAD3]",
  },
  {
    icon: Clock,
    title: "Same-Day Emergency Care",
    description:
      "WhatsApp +91-7010650063 for emergencies. Most cases treated within 2 hours. Open Monday–Saturday 10AM–8PM, Sunday 10AM–1:30PM.",
    color: "text-red-500",
  },
  {
    icon: Award,
    title: "Dr. Rockson Samuel: 15+ Years",
    description:
      "BDS, PgDM, BDM with 1,000+ successful implants, 5,000+ root canals. Former consultant at CMC Vellore. 95%+ success rate.",
    color: "text-[#005f73]",
  },
  {
    icon: Heart,
    title: "Painless Treatment (2/10 Rating)",
    description:
      "Patients rate pain as 2/10 on average. Local anaesthesia for all procedures. IV sedation available for anxious patients (₹3,000 extra).",
    color: "text-pink-500",
  },
  {
    icon: Zap,
    title: "Single-Visit Root Canal",
    description:
      "45–60 minute RCT. Same-day crowns available. 50% faster than multi-visit protocols with equal success rates.",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    title: "All Ages: 2 Years to 80+",
    description:
      "Pediatric sealants (₹500), geriatric dentures (₹10,000+), orthodontics for teens and adults. Family discount: 10% for 3+ members.",
    color: "text-green-500",
  },
] as const

const GUARANTEES = [
  "Hospital-Grade Sterilization (Class B Autoclave)",
  "All-Inclusive Pricing – No Hidden Costs",
  "Lifetime Warranty on Dental Implants",
  "0% EMI via Bajaj Finserv, HDFC, ICICI",
  "Insurance Claims Assistance (All Major Insurers)",
  "Free WhatsApp Follow-up for 30 Days",
] as const

export function WhyChooseUs() {

  return (
    <section className="py-20 bg-gradient-to-br from-[#005f73] via-[#0a3d47] to-[#002b36] transition-colors duration-300">
      <SectionContainer>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Choose Indira Dental Clinic?</h2>
          <p className="text-xl text-teal-100/80 max-w-3xl mx-auto">
            <strong>4.9/5 Google Rating</strong> • 500+ Reviews • 50% Lower Than Chennai/Bangalore Prices
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#54CAD3] to-white mx-auto rounded-full"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {FEATURES.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 text-center hover:scale-105 transition-all duration-300 group h-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="space-y-4">
                    <div
                      className={`inline-flex p-4 rounded-full bg-white/20 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#54CAD3] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-teal-100/80 leading-relaxed">{feature.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <GlassCard className="p-6 text-center bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-4xl font-bold text-[#54CAD3] mb-2">5,000+</div>
            <div className="text-teal-100/80">Patients Treated</div>
          </GlassCard>
          <GlassCard className="p-6 text-center bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-teal-100/80">Years Experience</div>
          </GlassCard>
          <GlassCard className="p-6 text-center bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-4xl font-bold text-[#54CAD3] mb-2">4.9★</div>
            <div className="text-teal-100/80">Google Rating (500+)</div>
          </GlassCard>
          <GlassCard className="p-6 text-center bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">95%+</div>
            <div className="text-teal-100/80">Success Rate</div>
          </GlassCard>
        </motion.div>

        {/* Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8 bg-gradient-to-r from-white/15 to-[#54CAD3]/20 backdrop-blur-sm border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Our Guarantees</h3>
              <p className="text-teal-100/80">We stand behind our work with these commitments to you</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {GUARANTEES.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/10 rounded-lg border border-white/10">
                  <CheckCircle className="h-6 w-6 text-[#54CAD3] flex-shrink-0" />
                  <span className="font-medium text-white/90">{guarantee}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Patient Testimonial Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <GlassCard className="p-8 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="space-y-6">
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium text-white/90 italic">
                "Dr. Rockson and his team at Indira Dental Clinic provided exceptional care. The clinic is modern,
                clean, and the staff is incredibly professional. I highly recommend them for any dental needs."
              </blockquote>
              <div className="text-[#54CAD3] font-semibold">- Priya Sharma, Gandhi Nagar, Vellore</div>
            </div>
          </GlassCard>
        </motion.div>
      </SectionContainer>
    </section>
  )
}
