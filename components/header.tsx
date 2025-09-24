"use client"

import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              NB
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Newbridge</h1>
              <p className="text-xs text-muted-foreground -mt-1">Lawn Services</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#testimonials" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex items-center space-x-2 bg-transparent"
              onClick={() => {
                window.location.href = 'tel:5164090940';
              }}
            >
              <Phone className="h-4 w-4" />
              <span>516-409-0940</span>
            </Button>
            <Button 
              className="hidden sm:inline-flex"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Free Quote
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
