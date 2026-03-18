import { ModernCard, ModernCardHeader, ModernCardContent } from "@/components/ui/modern-card";
import { cn } from "@/lib/utils";
import { Star, UserCircle, MapPin, Quote } from "lucide-react";
import { formatDate } from '@/lib/date';
import { getReviewsByEntity } from "@/lib/api";
import { Testimonial } from "@/lib/schema";

interface EntityReviewsProps {
    entityType: 'doctor' | 'department' | 'service' | 'diagnostic' | 'location' | 'blog' | 'technology' | 'hospital';
    entityName: string;
    entitySlug: string;
    title?: string;
    description?: string;
    className?: string;
}

export default async function EntityReviews({
    entityType,
    entityName,
    entitySlug,
    title = "Patient Reviews & Experiences",
    description = "Read what our patients have to say about their experience.",
    className
}: EntityReviewsProps) {
    let reviews = [];
    try {
        reviews = await getReviewsByEntity(entityType, entityName, entitySlug);
    } catch (error: any) {
        // Only log real errors, not just "not found"
        if (error.response?.status !== 404) {
            console.error(`[EntityReviews] Error fetching reviews for ${entityType} "${entityName}":`, {
                message: error.message,
                status: error.response?.status
            });
        }
        return null;
    }

    if (!reviews || reviews.length === 0) {
        return null; // Don't show the section if no reviews found
    }

    // Calculate average rating
    const totalRating = reviews.reduce((acc: number, rev: any) => acc + (rev.rating || 5), 0);
    const avgRating = (totalRating / reviews.length).toFixed(1);

    // Determine Schema @type based on entityType
    let schemaType = "MedicalOrganization";
    if (entityType === 'doctor') schemaType = "Physician";
    if (entityType === 'service' || entityType === 'diagnostic') schemaType = "Service";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": schemaType,
        "@id": `https://www.indirasuperspecialityhospital.com/${entityType}/${entitySlug}#${entityType}`,
        "name": entityName,
        "description": description,
        "provider": {
            "@type": "MedicalOrganization",
            "name": "Indira Super Speciality Hospital"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": avgRating.toString(),
            "reviewCount": reviews.length.toString(),
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": reviews.map((review: any) => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.patient_name
            },
            "datePublished": review.date_of_visit || "2024-01-01",
            "reviewBody": review.content,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating?.toString() || "5"
            }
        }))
    };

    return (
        <section className={cn("py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700 dark:border-slate-800", className)}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">{title}</h2>
                        <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
                            {description}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 bg-primary/5 dark:bg-primary/10 p-4 rounded-2xl border border-primary/10 dark:border-primary/20">
                        <div className="text-center">
                            <div className="flex items-center gap-1 text-amber-500 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="font-bold text-slate-900 dark:text-white">Rated {avgRating}/5</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Based on {reviews.length} reviews</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review: any) => (
                        <ModernCard key={review.id} variant="default" hover className="flex flex-col h-full bg-slate-50/50 dark:bg-slate-800/50 border-none shadow-none hover:shadow-xl transition-all duration-500">
                            <ModernCardHeader className="p-8 pb-4">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-fuchsia-500/10 dark:bg-fuchsia-500/20 p-3 rounded-xl text-fuchsia-600 dark:text-fuchsia-400">
                                        <Quote className="w-6 h-6 fill-current" />
                                    </div>
                                    <div className="flex gap-0.5">
                                        {[...Array(review.rating || 5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed text-lg mb-6">
                                    &quot;{review.content}&quot;
                                </p>
                            </ModernCardHeader>
                            <ModernCardContent className="p-8 pt-0 mt-auto">
                                <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-6">
                                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
                                        <UserCircle className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{review.patient_name}</h4>
                                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                            {review.treatment_received && (
                                                <>
                                                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded uppercase font-medium">
                                                        {review.treatment_received}
                                                    </span>
                                                    <span>•</span>
                                                </>
                                            )}
                                            <span>{review.date_of_visit ? formatDate(review.date_of_visit) : 'Recently Verified'}</span>
                                        </div>
                                    </div>
                                </div>
                            </ModernCardContent>
                        </ModernCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
