import { cn } from "@/lib/utils";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
}

export function PageHeader({
    title,
    description,
    className,
    ...props
}: PageHeaderProps) {
    return (
        <section className={cn("relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[4rem]", className)} {...props}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px] opacity-70 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
                    {title}
                </h1>
                {description && (
                    <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
