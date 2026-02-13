import type React from "react"
import { cn } from "@/lib/utils"
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

interface AlertProps {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
  children: React.ReactNode
  className?: string
}

interface AlertTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const variants = {
  default: {
    bg: "bg-muted/50",
    text: "text-foreground",
    border: "border-border",
    icon: Info,
  },
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
    icon: Info,
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary/20",
    icon: Info,
  },
  success: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
    icon: CheckCircle,
  },
  warning: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    border: "border-destructive/20",
    icon: AlertTriangle,
  },
  danger: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    border: "border-destructive/20",
    icon: XCircle,
  },
}

export function Alert({ variant = "default", children, className }: AlertProps) {
  const style = variants[variant]
  const Icon = style.icon

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border p-4",
        "backdrop-blur-xl shadow-lg",
        style.bg,
        style.border,
        className,
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn("h-4 w-4", style.text)} />
        <div className={cn("text-sm", style.text)}>{children}</div>
      </div>
    </div>
  )
}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return <p className={cn("text-lg font-semibold", className)} {...props} />
}

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />
}
