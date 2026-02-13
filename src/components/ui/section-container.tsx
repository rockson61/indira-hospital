import React from 'react';
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    container?: boolean;
}

export function SectionContainer({
    children,
    className,
    container = true,
    ...props
}: SectionContainerProps) {
    return (
        <section
            className={cn("py-12 md:py-16 lg:py-20", className)}
            {...props}
        >
            {container ? (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}
