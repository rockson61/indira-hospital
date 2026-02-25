import { Award, Trophy, Star, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface AwardItem {
    title: string;
    year: string;
    issuer: string;
    variant?: "gold" | "silver" | "bronze" | "blue";
}

export function AwardsBadge({ title, year, issuer, variant = "gold", className }: AwardItem & { className?: string }) {
    const colorMap = {
        gold: "bg-yellow-50 text-yellow-700 border-yellow-200",
        silver: "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700",
        bronze: "bg-orange-50 text-orange-700 border-orange-200",
        blue: "bg-blue-50 text-blue-700 border-blue-200",
    };

    return (
        <div className={cn("flex items-center gap-3 p-3 rounded-lg border", colorMap[variant], className)}>
            <div className="shrink-0">
                <Trophy className="w-8 h-8 opacity-80" />
            </div>
            <div>
                <div className="font-bold text-sm">{title}</div>
                <div className="text-xs opacity-80">{issuer} • {year}</div>
            </div>
        </div>
    );
}

export function AwardsGrid({ awards }: { awards?: AwardItem[] }) {
    const defaultAwards: AwardItem[] = [
        { title: "Best Dental Clinic", year: "2024", issuer: "Vellore Healthcare", variant: "gold" },
        { title: "Excellence in Implantology", year: "2023", issuer: "Indian Dental Assoc.", variant: "blue" },
        { title: "Patient Satisfaction Award", year: "2023", issuer: "Practo", variant: "silver" },
    ];

    const items = awards || defaultAwards;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((award, i) => (
                <AwardsBadge key={i} {...award} />
            ))}
        </div>
    );
}
