import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Clock } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Your Trusted Landscaping Partner</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Newbridge Lawn Services is a family-owned company that has been transforming outdoor spaces across Nassau
              County since 2008. We combine traditional craftsmanship with modern techniques to create beautiful,
              sustainable landscapes.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our services range from lawn maintenance and seasonal cleanups to complete landscape installations. We
              take pride in our attention to detail and commitment to exceeding customer expectations on every project.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">Licensed</div>
                  <div className="text-sm text-muted-foreground">& Insured</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">Award</div>
                  <div className="text-sm text-muted-foreground">Winning</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <img
              src="/professional-landscaping-team-working-on-beautiful.jpg"
              alt="Newbridge Lawn Services team at work"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
