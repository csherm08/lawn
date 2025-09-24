import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Garden City, NY",
    rating: 5,
    text: "Newbridge transformed our backyard into an amazing outdoor living space. The patio and outdoor kitchen exceeded our expectations. Professional, reliable, and reasonably priced!",
  },
  {
    name: "Mike Chen",
    location: "Westbury, NY",
    rating: 5,
    text: "Been using their lawn service for 3 years now. Always on time, great communication, and my lawn has never looked better. Highly recommend!",
  },
  {
    name: "Lisa Rodriguez",
    location: "Hicksville, NY",
    rating: 5,
    text: "The walkway and landscaping they installed completely changed our curb appeal. Neighbors constantly ask who did the work. Quality craftsmanship at its finest.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what homeowners across Nassau County are saying about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9/5 average rating from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
