import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: string;
    className?: string;
}

export function PageHero({
    title,
    subtitle,
    description,
    backgroundImage,
    className,
}: PageHeroProps) {
    return (
        <section className={cn("relative pt-48 pb-24 lg:pt-60 lg:pb-32 overflow-hidden bg-slate-900", className)}>
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                {backgroundImage ? (
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover opacity-30"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                {subtitle && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="text-teal-300 text-xs font-bold tracking-widest uppercase">{subtitle}</span>
                    </div>
                )}

                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                    {title}
                </h1>

                {description && (
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
