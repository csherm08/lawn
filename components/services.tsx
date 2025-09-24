import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, Hammer, Droplets, TreePine, ChefHat, Footprints } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Lawn Maintenance",
    description:
      "Professional mowing, edging, and seasonal lawn care to keep your grass healthy and beautiful year-round.",
    image: "/professional-lawn-mowing-and-maintenance-service.jpg",
  },
  {
    icon: Hammer,
    title: "Patios & Decks",
    description: "Custom-designed outdoor living spaces with premium materials and expert craftsmanship.",
    image: "/beautiful-stone-patio-with-outdoor-furniture.jpg",
  },
  {
    icon: Footprints,
    title: "Walkways",
    description: "Elegant pathways and walkways that enhance your property's curb appeal and functionality.",
    image: "/stone-walkway-through-landscaped-garden.jpg",
  },
  {
    icon: ChefHat,
    title: "Outdoor Kitchens",
    description: "Complete outdoor cooking spaces designed for entertaining and family gatherings.",
    image: "/luxury-outdoor-kitchen-with-grill-and-countertops.jpg",
  },
  {
    icon: Droplets,
    title: "Sprinkler Systems",
    description: "Efficient irrigation solutions to keep your landscape healthy with minimal water waste.",
    image: "/automatic-sprinkler-system-watering-lawn.jpg",
  },
  {
    icon: TreePine,
    title: "Planting & Design",
    description: "Expert plant selection and landscape design to create stunning, sustainable outdoor environments.",
    image: "/beautiful-landscaped-garden-with-flowers-and-plant.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Complete Landscaping Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From routine maintenance to complete outdoor transformations, we offer comprehensive services to meet all
            your landscaping needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="px-8"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Custom Quote for Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
