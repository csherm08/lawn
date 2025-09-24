import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/beautiful-landscaped-backyard-with-stone-patio--lu.jpg"
          alt="Beautiful landscaped outdoor space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm">Trusted by 500+ homeowners</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Transform Your Outdoor Space Into an Oasis
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
            Professional landscaping services that bring your vision to life. From lawn maintenance to complete outdoor
            living spaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-3 text-lg"
            >
              View Our Work
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
