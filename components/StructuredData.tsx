export default function StructuredData() {
  // LocalBusiness schema
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lawsons Creative',
    legalName: 'Lawsons Enterprises Ltd',
    description: 'Small web studio helping UK service businesses modernise their websites. Starter sites from £500, full multi-page sites from £1,295.',
    url: 'https://www.lawsonscreative.co.uk',
    logo: 'https://www.lawsonscreative.co.uk/images/logo.png',
    image: 'https://www.lawsonscreative.co.uk/images/logo-full.png',
    telephone: '',
    email: 'hello@lawsonscreative.co.uk',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kent',
      addressRegion: 'Kent',
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    priceRange: '££',
    serviceType: ['Starter Website', 'Website Rescue', 'New Business Website', 'Ongoing Support', 'Local SEO'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
  };

  // Service schema
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Lawsons Creative',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Website Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Starter Website',
            description: 'A clean, professional one-page website covering the essentials — who you are, what you do, and how to get in touch.',
          },
          price: '500',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Rescue',
            description: 'We rebuild tired, awkward or broken websites into clean, phone-friendly multi-page sites that generate enquiries.',
          },
          price: '1295',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'New Business Website',
            description: 'Custom design for new or early-stage businesses. Typically up to 5 pages — everything you need to look professional online.',
          },
          price: '1295',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ongoing Support',
            description: 'Updates, security, minor tweaks and content changes. We handle the tech so you can focus on your business.',
          },
          price: '30',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local SEO',
            description: 'Get found by customers searching in your area. Google Business Profile setup, local citations, and ongoing optimisation.',
          },
          price: '150',
          priceCurrency: 'GBP',
        },
      ],
    },
  };

  // FAQPage schema
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What affects the final price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The main factors are the number of pages, complexity of design, and how much content you already have. We\'ll give you a fixed quote after our initial chat — no surprises.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a project take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most projects take 2–3 weeks from brief to launch. Larger sites or those needing copywriting help may take a bit longer. We\'ll give you a realistic timeline upfront.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s NOT included in the price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our build prices cover design and development. Separate costs may include: Domain name (typically £10-15/year), stock photography if needed, copywriting if you need help with content, and ongoing hosting and maintenance (see support packages).',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer payment plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We typically take 50% upfront and 50% on completion. For larger projects, we can discuss alternative arrangements.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
