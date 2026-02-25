'use client'

import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Shield, Clock, Award, Heart, Zap, Users, CheckCircle, Star } from "lucide-react"
import { motion } from "framer-motion"

// Static data moved outside component to prevent recreation on each render
const FEATURES = [
  {
    icon: Shield,
    title: "Advanced Diagnostic Suite",
    description:
      "Fully equipped with 3T MRI, 128-Slice CT, and Digital X-rays. Precision reports within hours for rapid diagnosis.",
    color: "text-[#54CAD3]",
  },
  {
    icon: Clock,
    title: "24/7 Emergency & Trauma",
    description:
      "24/7 Emergency care with trauma specialists and ICU support. Rapid response teams for cardiac and neuro emergencies.",
    color: "text-red-500",
  },
  {
    icon: Award,
    title: "Super Speciality Experts",
    description:
      "Multidisciplinary team of specialists across Cardiology, Neurology, Orthopaedics, and General Surgery.",
    color: "text-[#005f73]",
  },
  {
    icon: Heart,
    title: "Patient-Centric Care",
    description:
      "Compassionate care with a 98% satisfaction rate. Dedicated patient care coordinators for a seamless hospital experience.",
    color: "text-pink-500",
  },
  {
    icon: Zap,
    title: "Minimally Invasive Surgery",
    description:
      "Advanced laparoscopic and laser surgeries with faster recovery and minimal scarring. Most procedures are day-care.",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    title: "Comprehensive Family Care",
    description:
      "Specialized care for all ages from Pediatric to Geriatric departments. Empaneled with major health insurance providers.",
    color: "text-green-500",
  },
] as const

const GUARANTEES = [
  "NABH Standards of Patient Safety",
  "Transperant Pricing & Billing",
  "24/7 Advanced ICU & Life Support",
  "Cashless Treatment with 50+ TPAs",
  "Precision Diagnostics & Pharmacy",
  "Comprehensive Post-Op Care",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Choose Indira Super Speciality Hospital?</h2>
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
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
                "The team at Indira Super Speciality Hospital provided exceptional care. The facility is modern,
                clean, and the staff is incredibly professional. I highly recommend them for any medical needs."
              </blockquote>
              <div className="text-[#54CAD3] font-semibold">- Priya Sharma, Gandhi Nagar, Vellore</div>
            </div>
          </GlassCard>
        </motion.div>
      </SectionContainer>
    </section>
  )
}
