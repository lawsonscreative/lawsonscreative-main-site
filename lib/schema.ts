// JSON-LD Structured Data Schemas for Lawsons Creative

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Local SEO",
    "description": "Get found by customers searching in your area. Google Business Profile setup, local citations, and ongoing optimisation.",
    "provider": {
      "@id": "https://lawsonscreative.co.uk/#business"
    },
    "offers": {
      "@type": "Offer",
      "price": "150",
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "150",
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

// Vertical/sector-specific service schemas
export const tradesWebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Trades Website Design",
  "alternateName": "Websites for Tradespeople",
  "description": "Professional website design for plumbers, electricians, builders, roofers, landscapers, cleaners, and other trades. Get more local work with a website that works as hard as you do.",
  "url": "https://lawsonscreative.co.uk/trades-websites",
  "provider": {
    "@id": "https://lawsonscreative.co.uk/#business"
  },
  "serviceType": "Web Design",
  "audience": {
    "@type": "Audience",
    "audienceType": "Tradespeople and Trade Businesses"
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "1295",
    "highPrice": "1795",
    "priceCurrency": "GBP",
    "offerCount": "3"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Kent" },
    { "@type": "AdministrativeArea", "name": "London" },
    { "@type": "AdministrativeArea", "name": "Sussex" },
    { "@type": "AdministrativeArea", "name": "Surrey" },
    { "@type": "AdministrativeArea", "name": "Essex" },
    { "@type": "Country", "name": "United Kingdom" }
  ]
};

export const petCareWebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Pet Care Website Design",
  "alternateName": "Websites for Pet Care Businesses",
  "description": "Professional website design for dog walkers, pet sitters, groomers, trainers, kennels, catteries, and pet photographers. Websites that help pet owners trust you with their furry friends.",
  "url": "https://lawsonscreative.co.uk/pet-care-websites",
  "provider": {
    "@id": "https://lawsonscreative.co.uk/#business"
  },
  "serviceType": "Web Design",
  "audience": {
    "@type": "Audience",
    "audienceType": "Pet Care Professionals and Businesses"
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "1295",
    "highPrice": "1795",
    "priceCurrency": "GBP",
    "offerCount": "3"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Kent" },
    { "@type": "AdministrativeArea", "name": "London" },
    { "@type": "AdministrativeArea", "name": "Sussex" },
    { "@type": "AdministrativeArea", "name": "Surrey" },
    { "@type": "AdministrativeArea", "name": "Essex" },
    { "@type": "Country", "name": "United Kingdom" }
  ]
};

// Trades website FAQ schema
export const tradesWebsiteFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you only work with trades in Kent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — we're based in Kent but work with tradespeople across the UK. Most of our communication happens over email and video calls, so location isn't a barrier."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with my existing domain and email?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. If you already have a domain name and email setup, we can build your new site to work with them. We'll handle the technical side of connecting everything."
      }
    },
    {
      "@type": "Question",
      "name": "What do you need from me to get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Just some basic info about your business — what services you offer, where you work, and any photos of your work. Don't worry if you don't have much; we'll guide you through it."
      }
    },
    {
      "@type": "Question",
      "name": "I'm not very tech-savvy — is that a problem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at all. We handle all the technical stuff and explain everything in plain English. You focus on your trade; we'll sort the website."
      }
    }
  ]
};

// Pet care website FAQ schema
export const petCareWebsiteFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you show my qualifications and insurance clearly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We'll create a dedicated section for your qualifications, insurance, and any certifications. Pet owners want to see you're properly trained and insured — we make that easy to find."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate my existing booking system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If you use a booking tool like Time To Pet, PetSitter Plus, or similar, we can link to it or embed booking widgets. We'll work with whatever system you're already comfortable with."
      }
    },
    {
      "@type": "Question",
      "name": "Can I update photos and prices myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you'd like to manage updates yourself, we can set that up. Otherwise, small changes are included in our support packages — just email us and we'll sort it."
      }
    },
    {
      "@type": "Question",
      "name": "Do you only work with pet care businesses in Kent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — we're based in Kent but work with pet care businesses across the UK. Most of our communication is by email and video call, so distance isn't an issue."
      }
    }
  ]
};

// General services FAQ schema
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
