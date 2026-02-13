'use client'
import * as React from "react"
import { useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Users, Award, Clock, Heart, Star, Trophy, type LucideIcon } from "lucide-react"
import { motion, useInView, useSpring, useMotionValue } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// --- Components ---

interface CounterProps {
  value: number
  suffix?: string
}

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix
      }
    })
  }, [springValue, suffix])

  // If value is static (like 4.9), just render it directly to avoid complex spring logic for decimals
  // Or handle decimals in logic. For now, matching original logic.
  if (value % 1 !== 0) {
    return <span>{value}{suffix}</span>
  }

  return <span ref={ref} />
}

const statsCardVariants = cva(
  "h-full transition-all duration-300 hover:shadow-lg border-slate-100 dark:border-slate-800",
  {
    variants: {
      variant: {
        default: "bg-card",
        highlight: "bg-teal-50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface StatItem {
  icon: LucideIcon
  value: number
  suffix: string
  label: string
  description: string
}

const STATS: StatItem[] = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Happy Patients",
    description: "Satisfied customers across Vellore",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Proven expertise in dental care",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Emergency Care",
    description: "Round-the-clock dental support",
  },
  {
    icon: Heart,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Successful treatment outcomes",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Patient Rating",
    description: "Excellent patient satisfaction",
  },
  {
    icon: Trophy,
    value: 50,
    suffix: "+",
    label: "Awards Won",
    description: "Recognition for excellence",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by Thousands in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Vellore</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our commitment to excellence has made us the most trusted dental clinic in Vellore. Here are the numbers
            that speak for our quality care.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={cn(statsCardVariants())}>
                <div className="flex flex-col items-center justify-center p-4 text-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4 p-3 rounded-full bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/30 dark:to-blue-900/30"
                  >
                    <stat.icon className="w-8 h-8 text-teal-600" aria-hidden="true" />
                  </motion.div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 hidden md:block">{stat.description}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
