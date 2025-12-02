// JSON-LD Structured Data Schemas for Lawsons Creative

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lawsonscreative.co.uk/#business",
  "name": "Lawsons Creative",
  "description": "Small web studio helping UK service businesses modernise their websites. Starter sites from £500, full multi-page sites from £1,295.",
  "url": "https://lawsonscreative.co.uk",
  "email": "hello@lawsonscreative.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Kent",
    "addressCountry": "GB"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "priceRange": "££",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  }
};

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Starter Website",
    "description": "A clean, professional one-page website covering the essentials — who you are, what you do, and how to get in touch.",
    "provider": {
      "@id": "https://lawsonscreative.co.uk/#business"
    },
    "offers": {
      "@type": "Offer",
      "price": "500",
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "500",
        "priceCurrency": "GBP",
        "valueAddedTaxIncluded": false
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Rescue",
    "description": "We rebuild tired, awkward or broken websites into clean, phone-friendly multi-page sites that generate enquiries.",
    "provider": {
      "@id": "https://lawsonscreative.co.uk/#business"
    },
    "offers": {
      "@type": "Offer",
      "price": "1295",
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "1295",
        "priceCurrency": "GBP",
        "valueAddedTaxIncluded": false
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "New Business Website",
    "description": "Custom design for new or early-stage businesses. Typically up to 5 pages — everything you need to look professional online.",
    "provider": {
      "@id": "https://lawsonscreative.co.uk/#business"
    },
    "offers": {
      "@type": "Offer",
      "price": "1295",
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "1295",
        "priceCurrency": "GBP",
        "valueAddedTaxIncluded": false
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ongoing Support",
    "description": "Updates, security, minor tweaks and content changes. We handle the tech so you can focus on your business.",
    "provider": {
      "@id": "https://lawsonscreative.co.uk/#business"
    },
    "offers": {
      "@type": "Offer",
      "price": "30",
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "30",
        "priceCurrency": "GBP",
        "valueAddedTaxIncluded": false,
        "billingDuration": "P1M"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  }
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What affects the final price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main factors are the number of pages, complexity of design, and how much content you already have. We'll give you a fixed quote after our initial chat — no surprises."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most projects take 2–3 weeks from brief to launch. Larger sites or those needing copywriting help may take a bit longer. We'll give you a realistic timeline upfront."
      }
    },
    {
      "@type": "Question",
      "name": "What's NOT included in the price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our build prices cover design and development. Separate costs may include: Domain name (typically £10-15/year), stock photography if needed, copywriting if you need help with content, and ongoing hosting and maintenance (see support packages)."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer payment plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We typically take 50% upfront and 50% on completion. For larger projects, we can discuss alternative arrangements."
      }
    }
  ]
};
