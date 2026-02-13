import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    slug: string;
    className?: string;
}

export function ServiceCard({
    title,
    description,
    icon,
    slug,
    className,
}: ServiceCardProps) {
    return (
        <Card className={cn("group hover:shadow-lg transition-all duration-300 border-gray-100 h-full flex flex-col", className)}>
            <CardHeader className="pb-4">
                <div className="mb-4 h-12 w-12 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    {icon || <div className="h-6 w-6 rounded-full bg-current opacity-20" />}
                </div>
                <CardTitle className="text-xl group-hover:text-brand-600 transition-colors">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-gray-500 line-clamp-3 text-sm leading-relaxed">
                    {description}
                </p>
            </CardContent>
            <CardFooter className="pt-4 border-t border-gray-50">
                <Link
                    href={`/departments/${slug}`}
                    className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardFooter>
        </Card>
    );
}
