import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sam Franklin",
    review: "Highly recommend Dr. Rockson Samuel for affordable and quality dental care near VIT University.",
    rating: 5,
  },
  {
    name: "Rajendiran",
    review: "Treatment by Dr. Rockson is very good. He listens to patients well and explains everything clearly.",
    rating: 5,
  },
  {
    name: "John D.",
    review: "Great service from Dr. Rockson, he explained to me everything he did in detail.",
    rating: 4,
  },
]

export function Reviews() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Patient Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <CardTitle className="text-lg mb-2">{review.name}</CardTitle>
                <CardContent className="text-muted-foreground p-0">{review.review}</CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
