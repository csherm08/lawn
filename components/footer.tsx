import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                NB
              </div>
              <div>
                <h3 className="text-xl font-bold">Newbridge Lawn Services</h3>
                <p className="text-sm text-muted-foreground">Professional Landscaping</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Creating beautiful outdoor spaces across Nassau County for over 15 years. Licensed, insured, and committed
              to excellence.
            </p>
            <p className="text-sm text-muted-foreground">Licensed & Insured • Nassau County, NY</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lawn Maintenance</li>
              <li>Patios & Decks</li>
              <li>Walkways</li>
              <li>Outdoor Kitchens</li>
              <li>Sprinkler Systems</li>
              <li>Landscape Design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>516-409-0940</li>
              <li>info@newbridgelawn.com</li>
              <li>Nassau County, NY</li>
              <li>Mon-Fri: 7AM-6PM</li>
              <li>Sat: 8AM-4PM</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Newbridge Lawn Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
