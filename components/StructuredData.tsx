/**
 * Structured Data (JSON-LD) for SEO
 * Implements LocalBusiness schema for better local search visibility
 */

export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nolapoolsolutions.com';
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    "name": "NOLA Pool Solutions",
    "image": `${siteUrl}/logo.png`,
    "logo": `${siteUrl}/logo.png`,
    "url": siteUrl,
    "telephone": "(504) 450-3496",
    "email": "nolapoolsolutions@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Orleans",
      "addressRegion": "LA",
      "addressCountry": "US",
      "addressArea": "Greater New Orleans Area"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.9511",
      "longitude": "-90.0715"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "New Orleans"
      },
      {
        "@type": "City",
        "name": "Metairie"
      },
      {
        "@type": "City",
        "name": "Kenner"
      },
      {
        "@type": "City",
        "name": "Covington"
      },
      {
        "@type": "City",
        "name": "Mandeville"
      }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "17:00",
        "validFrom": "2025-01-01",
        "validThrough": "2025-12-31"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "29.9511",
        "longitude": "-90.0715"
      },
      "geoRadius": {
        "@type": "Distance",
        "value": "50",
        "unitCode": "MI"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pool Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pool Maintenance",
            "description": "Weekly or bi-weekly pool maintenance including chemistry testing, cleaning, and equipment inspection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment Repair",
            "description": "Professional pool equipment repair and diagnostics for pumps, filters, heaters, and automation systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pool Renovation",
            "description": "Expert guidance and consultation for pool renovation projects including resurfacing, tile replacement, and upgrades"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NOLA Pool Solutions",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(504) 450-3496",
      "contactType": "Customer Service",
      "email": "nolapoolsolutions@gmail.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      // Add your social media profiles here when available
      // "https://www.facebook.com/nolapoolsolutions",
      // "https://www.instagram.com/nolapoolsolutions",
      // "https://www.linkedin.com/company/nola-pool-solutions"
    ]
  };

  // Review schema for testimonials
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "NOLA Pool Solutions"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "James R."
    },
    "reviewBody": "They've been maintaining our pool for 2 years. Never had an issue, always on time, always professional.",
    "datePublished": "2025-01-01"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}

