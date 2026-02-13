import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBoxProps {
    icon: LucideIcon;
    title?: string;
    description?: string;
    className?: string;
    iconClassName?: string;
    variant?: "simple" | "card" | "circle";
}

export function IconBox({
    icon: Icon,
    title,
    description,
    className,
    iconClassName,
    variant = "simple",
}: IconBoxProps) {
    if (variant === "card") {
        return (
            <div className={cn("bg-background dark:bg-default-50/5 p-6 rounded-xl shadow-sm border border-default-100 dark:border-default-50/10 transition-colors", className)}>
                <div className={cn("w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary", iconClassName)}>
                    <Icon className="w-6 h-6" />
                </div>
                {title && <h3 className="font-bold text-lg mb-2 text-foreground font-heading">{title}</h3>}
                {description && <p className="text-default-500 leading-relaxed">{description}</p>}
            </div>
        );
    }

    if (variant === "circle") {
        return (
            <div className={cn("text-center", className)}>
                <div className={cn("w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary", iconClassName)}>
                    <Icon className="w-8 h-8" />
                </div>
                {title && <h3 className="font-bold text-lg mb-1 text-foreground font-heading">{title}</h3>}
                {description && <p className="text-sm text-default-500">{description}</p>}
            </div>
        );
    }

    return (
        <div className={cn("flex gap-4", className)}>
            <div className={cn("shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary", iconClassName)}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                {title && <h3 className="font-semibold text-foreground mb-1">{title}</h3>}
                {description && <p className="text-sm text-default-500 leading-relaxed">{description}</p>}
            </div>
        </div>
    );
}
