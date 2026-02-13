import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    description?: string;
    align?: "left" | "center" | "right";
}

export function SectionHeader({
    title,
    subtitle,
    description,
    align = "center",
    className,
    ...props
}: SectionHeaderProps) {
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
                <span className="text-secondary-600 font-semibold tracking-wide uppercase text-sm">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">
                    {description}
                </p>
            )}
            <div className={cn("h-1 w-20 bg-brand-500 rounded-full mt-4", {
                "mx-auto": align === "center",
            })} />
        </div>
    );
}
