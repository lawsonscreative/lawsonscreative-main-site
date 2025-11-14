export default function StructuredData() {
  // LocalBusiness schema
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lawsons Creative',
    legalName: 'Lawsons Enterprises Ltd',
    description: 'Professional website design and development for small service businesses in the UK',
    url: 'https://www.lawsonscreative.co.uk',
    logo: 'https://www.lawsonscreative.co.uk/images/logo.png',
    image: 'https://www.lawsonscreative.co.uk/images/logo-full.png',
    telephone: '',
    email: 'hello@lawsonscreative.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'London',
      addressRegion: 'Greater London',
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    priceRange: '££',
    serviceType: ['Web Design', 'Website Development', 'Website Redesign', 'Website Maintenance', 'SEO Optimisation'],
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
            name: 'Starter Package',
            description: 'Perfect for solopreneurs and new businesses needing a simple online presence',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Professional Package',
            description: 'For established small businesses ready to stand out and win more customers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Premium Package',
            description: 'For ambitious businesses who want a standout website with advanced features',
          },
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
        name: 'How long does it take to build a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most projects take 1–2 weeks from kickoff to launch, depending on the package and complexity. Starter packages typically take 1 week. Professional packages take 1–2 weeks. Premium packages take 2 weeks. The main factors that affect timeline are: how quickly you can provide content (photos, copy, testimonials), how many rounds of revisions you need, and whether you need custom integrations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer payment plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer flexible payment options for all packages: Option 1: 50% deposit to start, 50% on launch. Option 2: Three monthly payments (for Professional and Premium packages). All payment terms are agreed upfront before we start work.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I need changes after launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every package includes post-launch revisions: Starter: 1 round of revisions, Professional: 2 rounds of revisions, Premium: 3 rounds of revisions + 30 days priority support. After launch, you have several options for ongoing changes: DIY (I\'ll train you on how to make basic content updates yourself), Maintenance package (£50–£150/month for regular updates, security, backups, and small changes), or Pay-as-you-go (£75/hour for one-off content updates or new pages).',
        },
      },
      {
        '@type': 'Question',
        name: 'What about hosting? Do I need to arrange that?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, you don\'t need to worry about hosting — I\'ll handle everything. What\'s included: Fast, secure hosting on modern platforms (Vercel or Netlify), Free SSL certificate, Automatic backups, 99.9% uptime guarantee, Your custom domain setup. First year hosting is included in your build cost. After year 1, you have two options: Self-managed hosting (£5-20/month) or Managed hosting + maintenance (£50-150/month) which includes hosting, security updates, backups, content updates, and priority support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I update the website myself after it\'s built?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For non-technical clients, your website is built with modern, high-performance technology (not a drag-and-drop builder). For most updates (changing text, adding images, updating prices), you simply email me what needs changing. I\'ll handle it and typically turn it around same-day or next-day. For clients with in-house developers, your site is built with Next.js and hosted on Vercel/Netlify, so developers can take over the codebase and make updates directly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why shouldn\'t I just use Wix or Squarespace?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DIY builders like Wix and Squarespace are cheap upfront (£10–30/month) and give you full control, but they take 20–40 hours of your time to learn and build, often look templated, have slower loading speeds (affects Google rankings), and have limited customisation. Working with Lawsons Creative gives you a professional, custom design that stands out, optimised for speed and Google rankings, done in 1–2 weeks, with strategy included.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you do e-commerce websites?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, but with some caveats. Simple e-commerce (1–10 products) fits within the Premium package. Medium e-commerce (10–50 products) requires a custom quote (£3,000–£6,000) depending on complexity. Large e-commerce (50+ products) may be better suited to a specialist e-commerce agency or platform like Shopify Plus.',
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
