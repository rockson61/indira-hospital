import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    description?: string;
    align?: "left" | "center" | "right";
    variant?: "light" | "dark";
}

export function SectionHeader({
    title,
    subtitle,
    description,
    align = "center",
    variant = "light",
    className,
    ...props
}: SectionHeaderProps) {
    const isDark = variant === "dark";

    return (
        <div
            className={cn(
                "flex flex-col gap-2 mb-12",
                {
                    "text-center items-center": align === "center",
                    "text-left items-start": align === "left",
                    "text-right items-end": align === "right",
                },
                className
            )}
            {...props}
        >
            {subtitle && (
                <span className={cn(
                    "font-semibold tracking-wide uppercase text-sm",
                    isDark ? "text-fuchsia-400" : "text-secondary"
                )}>
                    {subtitle}
                </span>
            )}
            <h2 className={cn(
                "font-heading text-2xl md:text-3xl font-bold tracking-tight",
                isDark ? "text-white" : "text-gray-900 dark:text-white"
            )}>
                {title}
            </h2>
            {description && (
                <p className={cn(
                    "mt-4 text-lg max-w-2xl leading-relaxed",
                    isDark ? "text-slate-300" : "text-gray-600 dark:text-gray-400"
                )}>
                    {description}
                </p>
            )}
            <div className={cn("h-1 w-20 bg-primary rounded-full mt-4", {
                "mx-auto": align === "center",
            })} />
        </div>
    );
}

