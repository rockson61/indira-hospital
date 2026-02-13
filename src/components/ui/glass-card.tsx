import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const glassCardVariants = cva("rounded-2xl backdrop-blur-sm border transition-all duration-300", {
  variants: {
    variant: {
      default: "bg-card/70 dark:bg-gray-800/70 border-border/50 dark:border-gray-700/50 hover:shadow-lg",
      accent:
        "bg-teal-50/70 dark:bg-teal-900/20 border-teal-200/50 dark:border-teal-700/50 hover:shadow-teal-500/20 hover:shadow-lg",
      secondary:
        "bg-blue-50/70 dark:bg-blue-900/20 border-blue-200/50 dark:border-blue-700/50 hover:shadow-blue-500/20 hover:shadow-lg",
      ghost: "bg-transparent border-border/50 dark:border-gray-700/50 hover:bg-card/50 dark:hover:bg-gray-800/50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof glassCardVariants> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(({ className, variant, ...props }, ref) => {
  return <div ref={ref} className={cn(glassCardVariants({ variant }), className)} {...props} />
})
GlassCard.displayName = "GlassCard"

export { GlassCard, glassCardVariants }
