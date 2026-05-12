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
    id?: string;
    items?: any[];
}

export default async function EntityReviews({
    entityType,
    entityName,
    entitySlug,
    title = "Patient Reviews & Experiences",
    description = "Read what our patients have to say about their experience.",
    className,
    id,
    items
}: EntityReviewsProps) {
    let reviews = items && items.length > 0 ? items : [];
    
    if (!items || items.length === 0) {
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
        <section id={id} className={cn("py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700 dark:border-slate-800", className)}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
                        <h2 className="elite-section-title mt-2 text-slate-900 dark:text-white">{title}</h2>
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review: any) => (
                        <article key={review.id} className="group relative flex flex-col h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/50 rounded-[2rem] p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 dark:hover:shadow-fuchsia-500/10 transition-all duration-500 overflow-hidden">
                            {/* Decorative Background Blur */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none -mr-10 -mt-10" />

                            <div className="flex justify-between items-start mb-5 relative z-10">
                                    <div className="bg-fuchsia-50 dark:bg-fuchsia-950/50 p-2.5 rounded-xl text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-100 dark:border-fuchsia-900/50">
                                        <Quote className="w-5 h-5 fill-current opacity-70" />
                                    </div>
                                    <div className="flex gap-0.5 bg-amber-50 dark:bg-amber-950/30 px-2.5 py-1 rounded-full border border-amber-100 dark:border-amber-900/50">
                                        {[...Array(review.rating || 5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed text-[15px] font-medium mb-6 flex-grow relative z-10">
                                    &quot;{review.content}&quot;
                                </p>

                                <div className="flex items-center gap-3 border-t border-slate-100 dark:border-slate-800/60 pt-5 mt-auto relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0 border border-slate-200 dark:border-slate-700">
                                        <UserCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{review.patient_name}</h4>
                                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                                            {review.treatment_received && (
                                                <>
                                                    <span className="bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-100 dark:border-slate-700 truncate max-w-[120px]">
                                                        {review.treatment_received}
                                                    </span>
                                                    <span className="text-slate-300 dark:text-slate-600">•</span>
                                                </>
                                            )}
                                            <span>{review.date_of_visit ? formatDate(review.date_of_visit) : 'Verified Patient'}</span>
                                        </div>
                                    </div>
                                </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
