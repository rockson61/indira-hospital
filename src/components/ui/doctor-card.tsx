import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
    name: string;
    designation: string;
    image?: string;
    department?: string;
    slug: string;
    className?: string;
}

export function DoctorCard({
    name,
    designation,
    image,
    department,
    slug,
    className,
}: DoctorCardProps) {
    return (
        <Card className={cn("overflow-hidden group hover:shadow-lg transition-all duration-300 border-none ring-1 ring-gray-200", className)}>
            <div className="relative h-64 overflow-hidden bg-gray-100">
                {/* Placeholder for actual image if missing */}
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                        <span className="text-4xl font-light">👨‍⚕️</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button size="sm" variant="secondary" className="gap-2" asChild>
                        <Link href={`/doctors/${slug}`}>
                            View Profile <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
            <CardHeader className="p-4 pb-2 text-center">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-600 transition-colors">
                    <Link href={`/doctors/${slug}`}>
                        {name}
                    </Link>
                </h3>
                <p className="text-secondary-600 text-sm font-medium uppercase tracking-wide">
                    {designation}
                </p>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-center">
                {department && (
                    <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                        {department}
                    </span>
                )}
            </CardContent>
            <CardFooter className="p-4 pt-2 border-t border-gray-50 flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Available Today</span>
                </div>
                <Link href="/contact" className="text-brand-600 font-semibold text-xs hover:underline">
                    Book Now
                </Link>
            </CardFooter>
        </Card>
    );
}
