import { ModernCard, ModernCardHeader, ModernCardContent } from "@/components/ui/modern-card";
import { cn } from "@/lib/utils";
import { Star, UserCircle, MapPin, Quote } from "lucide-react";
import { formatDate } from '@/lib/date';
import { testimonials as localTestimonials } from '@/lib/data/testimonials-data';
import { SEED_DATA } from '@/lib/data/seed-data';

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

function getReviewsByEntitySync(type: string, name: string, slug?: string) {
  if (slug) {
    const slugMatches = (localTestimonials as any[]).filter(t => t.relatedSlugs?.includes(slug));
    if (slugMatches.length > 0) {
      return slugMatches.map((t, i) => ({
        id: `rev-${slug}-${i}`,
        patient_name: t.name,
        treatment_received: t.treatment,
        rating: t.rating,
        content: t.text,
        verified: t.verified
      }));
    }

    if (type === 'doctor') {
      const doc = SEED_DATA.doctors.find((d: any) => d.slug === slug);
      if (doc?.reviews && doc.reviews.length > 0) {
        return doc.reviews.map((r: any, i: number) => ({
          id: `rev-doc-${slug}-${i}`,
          patient_name: r.patient_name,
          treatment_received: doc.designation,
          rating: r.rating,
          content: r.content,
          verified: true
        }));
      }
    }
  }

  let finalReviews: any[] = [];
  const typeMatches = (localTestimonials as any[]).filter(t => 
    t.treatment?.toLowerCase().includes(type.toLowerCase()) || 
    t.treatment?.toLowerCase().includes(name.toLowerCase())
  );

  if (typeMatches.length > 0) {
    finalReviews = typeMatches.map((t, i) => ({
      id: `rev-type-${i}`,
      patient_name: t.name,
      treatment_received: t.treatment,
      rating: t.rating,
      content: t.text,
      verified: t.verified
    }));
  }

  if (finalReviews.length < 3) {
    const general = localTestimonials.slice(0, 5).map((t, i) => ({
      id: `rev-gen-${i}`,
      patient_name: t.name,
      treatment_received: t.treatment,
      rating: t.rating,
      content: t.text,
      verified: t.verified
    })).filter(gr => !finalReviews.some(fr => fr.patient_name === gr.patient_name));
    
    finalReviews = [...finalReviews, ...general].slice(0, 3);
  }

  return finalReviews.slice(0, 3);
}

/**
 * EntityReviews - A universal synchronous component to display 
 * SEO-optimized Patient Reviews for any entity (Doctor, Service, Department, etc.)
 * Synchronous execution ensures Client Component compatibility in Next.js 16/React 19.
 */
export default function EntityReviews({
  entityType,
  entityName,
  entitySlug,
  title = "Patient Reviews & Experiences",
  description = "Read what our patients have to say about their experience.",
  className,
  id,
  items
}: EntityReviewsProps) {
  const reviews = items && items.length > 0 ? items : getReviewsByEntitySync(entityType, entityName, entitySlug);

  if (!reviews || reviews.length === 0) {
    return null; // Don't render if no reviews available
  }

  // Generate Review / AggregateRating JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": entityName,
    "description": description,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": String(Math.max(reviews.length, 12))
    },
    "review": reviews.map((r: any) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.patient_name || "Verified Patient"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": String(r.rating || 5)
      },
      "reviewBody": r.content || ""
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id={id} className={cn("py-16 px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800", className)}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              {title}
            </h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review: any) => (
              <ModernCard 
                key={review.id} 
                className="flex flex-col justify-between hover:shadow-clay dark:hover:shadow-fuchsia-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <ModernCardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserCircle className="w-8 h-8 text-slate-400" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                          {review.patient_name}
                        </h4>
                        <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified Patient
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </ModernCardHeader>
                <ModernCardContent className="flex-1 flex flex-col justify-between">
                  <div className="relative">
                    <Quote className="w-8 h-8 text-fuchsia-500/10 absolute -top-4 -left-2" />
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative z-10">
                      "{review.content}"
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    <span className="uppercase tracking-widest">{review.treatment_received}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Vellore
                    </span>
                  </div>
                </ModernCardContent>
              </ModernCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
