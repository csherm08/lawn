export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Newbridge Lawn Services",
    "description": "Professional landscaping and outdoor living services including lawn maintenance, patio installation, walkway design, outdoor kitchens, and sprinkler systems.",
    "url": "https://your-domain.netlify.app", // Update this when you get your domain
    "logo": "https://your-domain.netlify.app/placeholder-logo.png", // Update this when you get your domain
    "image": [
      "https://your-domain.netlify.app/professional-lawn-maintenance-with-green-grass.jpg",
      "https://your-domain.netlify.app/beautiful-landscaped-backyard-with-stone-patio--lu.jpg",
      "https://your-domain.netlify.app/luxury-outdoor-kitchen-with-grill-and-countertops.jpg"
    ],
    "telephone": "+1-XXX-XXX-XXXX", // Add your actual phone number
    "email": "info@newbridgelawnservices.com", // Add your actual email
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address", // Add your actual address
      "addressLocality": "Your City", // Add your actual city
      "addressRegion": "Your State", // Add your actual state
      "postalCode": "XXXXX", // Add your actual ZIP
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128", // Add your actual coordinates
      "longitude": "-74.0060" // Add your actual coordinates
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128", // Add your actual coordinates
        "longitude": "-74.0060" // Add your actual coordinates
      },
      "geoRadius": "50000" // 50km radius - adjust as needed
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Landscaping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lawn Maintenance",
            "description": "Professional lawn care and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Patio Installation",
            "description": "Custom patio design and installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Walkway Design",
            "description": "Beautiful stone walkway installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outdoor Kitchen",
            "description": "Luxury outdoor kitchen design and installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sprinkler Systems",
            "description": "Automatic sprinkler system installation and maintenance"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
