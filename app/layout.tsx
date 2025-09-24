import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Newbridge Lawn Services - Professional Landscaping & Outdoor Living",
  description:
    "Transform your outdoor space with professional landscaping services. Specializing in lawn maintenance, patios, walkways, outdoor kitchens, and more.",
  keywords: [
    "lawn care",
    "landscaping",
    "outdoor living",
    "patio installation",
    "walkway design",
    "outdoor kitchen",
    "sprinkler systems",
    "garden design",
    "lawn maintenance",
    "professional landscaping"
  ],
  authors: [{ name: "Newbridge Lawn Services" }],
  creator: "Newbridge Lawn Services",
  publisher: "Newbridge Lawn Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.netlify.app'), // Update this when you get your domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Newbridge Lawn Services - Professional Landscaping & Outdoor Living",
    description: "Transform your outdoor space with professional landscaping services. Specializing in lawn maintenance, patios, walkways, outdoor kitchens, and more.",
    url: 'https://your-domain.netlify.app', // Update this when you get your domain
    siteName: 'Newbridge Lawn Services',
    images: [
      {
        url: '/professional-lawn-maintenance-with-green-grass.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional lawn maintenance services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Newbridge Lawn Services - Professional Landscaping & Outdoor Living",
    description: "Transform your outdoor space with professional landscaping services. Specializing in lawn maintenance, patios, walkways, outdoor kitchens, and more.",
    images: ['/professional-lawn-maintenance-with-green-grass.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add when you set up Google Search Console
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
