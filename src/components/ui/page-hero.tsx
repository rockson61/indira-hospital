import { cn } from "@/lib/utils";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface PageHeroProps {
 title: string;
 subtitle?: string;
 description?: string;
 backgroundImage?: string;
 className?: string;
 descriptionClassName?: string;
}

export function PageHero({
 title,
 subtitle,
 description,
 backgroundImage,
 className,
 descriptionClassName,
}: PageHeroProps) {
 return (
 <section className={cn("relative pt-48 pb-24 lg:pt-60 lg:pb-40 overflow-hidden bg-slate-900", className)}>
 {/* Background Image / Overlay */}
 <div className="absolute inset-0 z-0">
 {backgroundImage ? (
 <>
 <Image
 src={backgroundImage}
 alt={title}
 fill
 className="object-cover opacity-20 scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
 </>
 ) : (
 <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
 )}
 
 {/* Cinematic Ambient Glows */}
 <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[150px] opacity-70 pointer-events-none animate-pulse" />
 <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] opacity-50 pointer-events-none" />
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
 </div>

 {/* Content */}
 <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
 {subtitle && (
 <div className="elite-tag animate-in fade-in slide-in-from-bottom-4 duration-700">
 <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" /> {subtitle}
 </div>
 )}

 <h1 className="elite-hero-title mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
 {title}
 </h1>

 {description && (
 <p className={cn(
 "text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 opacity-80 italic",
 descriptionClassName
 )}>
 {description}
 </p>
 )}
 </div>
 </section>
 );
}
