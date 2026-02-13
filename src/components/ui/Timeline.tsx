'use client'

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface TimelineItemProps {
    step?: number | string;
    title: string;
    description: string;
    date?: string;
    isLast?: boolean;
}

export function Timeline({ items, className }: { items: TimelineItemProps[], className?: string }) {
    return (
        <div className={cn("space-y-0", className)}>
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    {...item}
                    step={index + 1}
                    isLast={index === items.length - 1}
                    index={index}
                />
            ))}
        </div>
    );
}

function TimelineItem({ step, title, description, date, isLast, index }: TimelineItemProps & { index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex gap-6 pb-12 last:pb-0 group"
        >
            {!isLast && (
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute top-10 left-5 -translate-x-1/2 w-0.5 bg-default-200 dark:bg-default-100/10 group-hover:bg-primary/30 transition-colors"
                />
            )}

            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 + (index * 0.1) }}
                className="relative shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold z-10 border-4 border-background shadow-md group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
            >
                {step}
            </motion.div>

            <div className="pt-2">
                <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-foreground font-heading">{title}</h3>
                    {date && (
                        <span className="text-xs font-medium px-2 py-0.5 bg-default-100 text-default-600 rounded-full dark:bg-default-50/20">
                            {date}
                        </span>
                    )}
                </div>
                <p className="text-default-500 leading-relaxed max-w-2xl">{description}</p>
            </div>
        </motion.div>
    );
}
