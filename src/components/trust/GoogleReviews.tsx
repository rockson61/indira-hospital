// ... previous imports remain the same
import { Alert } from "@/components/ui/alert"

export function EnhancedReviews() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Patient Reviews & Testimonials in Vellore</h2>

        <Alert variant="success" className="max-w-2xl mx-auto mb-12">
          Over 3000+ successful dental procedures completed with 97.5% patient satisfaction rate
        </Alert>

        {/* ... rest of the component remains the same */}
      </div>
    </section>
  )
}
