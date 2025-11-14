export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lawsons Creative',
    description: 'Professional website design and development for small service businesses in the UK',
    url: 'https://lawsonscreative.co.uk',
    telephone: '',
    email: 'hello@lawsonscreative.co.uk',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressRegion: 'Greater London',
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    priceRange: '££',
    serviceType: ['Web Design', 'Website Development', 'Website Redesign', 'Website Maintenance'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
