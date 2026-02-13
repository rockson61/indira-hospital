
import Link from 'next/link'
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    variant?: 'light' | 'dark' | 'auto'
}

export function Logo({ className, variant = 'auto' }: LogoProps) {
    return (
        <Link href="/" className={cn("flex items-center space-x-3 group", className)}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <span className="text-white font-bold text-lg md:text-xl">IDC</span>
            </div>
            <div>
                <div className={cn(
                    "font-bold text-lg md:text-xl transition-colors",
                    variant === 'light' ? "text-white" :
                        variant === 'dark' ? "text-foreground" :
                            "text-foreground dark:text-white"
                )}>
                    Indira Dental Clinic
                </div>
                <div className={cn(
                    "text-[10px] md:text-xs",
                    variant === 'light' ? "text-muted-foreground/50" :
                        variant === 'dark' ? "text-muted-foreground" :
                            "text-muted-foreground dark:text-muted-foreground/70"
                )}>
                    Dr. Rockson Samuel | Vellore
                </div>
            </div>
        </Link>
    )
}
