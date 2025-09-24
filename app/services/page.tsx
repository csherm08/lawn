import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Leaf, Hammer, Droplets, TreePine, CheckCircle, ArrowRight, Phone } from "lucide-react"

const services = [
  {
    id: "landscaping",
    title: "Landscaping",
    description: "Complete landscaping solutions to transform your outdoor space",
    icon: Leaf,
    image: "/professional-lawn-maintenance-with-green-grass.jpg",
    services: [
      "Lawn Maintenance",
      "Spring Cleanup",
      "Shrub Control",
      "Chinch Bug and Grub Control",
      "Fertilizer Applications",
    ],
  },
  {
    id: "hardscaping",
    title: "Fencing, Paving, Masonry & Grading",
    description: "Professional hardscaping and structural outdoor improvements",
    icon: Hammer,
    image: "/brick-paver-patio-with-retaining-wall.jpg",
    services: [
      "Brick Pavers",
      "Retaining Walls",
      "Cement / Concrete",
      "Masonry Work",
      "Driveways",
      "Installation of Fencing",
    ],
  },
  {
    id: "irrigation",
    title: "Sprinklers & Irrigation Systems",
    description: "Complete irrigation solutions for optimal lawn and garden health",
    icon: Droplets,
    image: "/sprinkler-system-watering-green-lawn.jpg",
    services: ["Installation", "Maintenance", "Repair"],
  },
  {
    id: "materials",
    title: "Landscape Material Installation & Removal",
    description: "Professional installation and removal of all landscape materials",
    icon: TreePine,
    image: "/landscaped-garden-with-trees-shrubs-and-flowers.jpg",
    services: ["Trees", "Shrubs", "Flowers", "Mulch", "Topsoil", "River Rock", "Stump Removal"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Professional Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Comprehensive Lawn & Landscape Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              From routine maintenance to complete landscape transformations, we provide expert services to keep your
              outdoor space beautiful year-round.
            </p>
            <Button size="lg" className="gap-2">
              <Phone className="h-5 w-5" />
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="overflow-hidden">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                    <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Services Include:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.services.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="w-fit gap-2 bg-transparent">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Contact us today for a free consultation and estimate. Let our experienced team bring your landscape vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-5 w-5" />
              Call (516) 409-0940
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Request Quote Online
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
