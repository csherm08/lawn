import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get your free consultation and quote today. We're here to bring your landscaping vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe 
                  src="/contact-form.html" 
                  className="w-full h-[600px] border-0 rounded-lg"
                  title="Contact Form"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">516-409-0940</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@newbridgelawn.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Service Area</div>
                    <div className="text-muted-foreground">Nassau County, NY</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-muted-foreground">
                      Mon-Fri: 7AM-6PM
                      <br />
                      Sat: 8AM-4PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3">Special Offer!</h4>
                <p className="mb-4">
                  Get 10% off your first service when you mention this website. Limited time offer for new customers
                  only.
                </p>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Patios & Decks</li>
                  <li>• Walkways</li>
                  <li>• Outdoor Kitchens</li>
                  <li>• Sprinkler Systems</li>
                  <li>• Planting Beds</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
