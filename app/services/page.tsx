import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services & Packages | Lawsons Creative',
  description: 'Flexible website design packages for small businesses. From £500 starter sites to premium custom solutions.',
};

export default function ServicesPage() {
  const packages = [
    {
      name: 'Starter',
      price: '£500 - £800',
      bestFor: 'New businesses or single-service providers',
      included: [
        'Single-page website (homepage only)',
        'Mobile-responsive design',
        'Contact form integration',
        'Google Maps integration',
        'Basic SEO setup',
        'Fast loading (< 2s)',
        '1 round of revisions',
        '1 week delivery',
      ],
      notIncluded: [
        'Multiple pages',
        'Advanced features',
        'E-commerce',
        'Custom functionality',
      ],
      ideal: [
        'Sole traders just starting out',
        'Single-service businesses',
        'Landing pages for specific campaigns',
        'Simple portfolio showcases',
      ],
    },
    {
      name: 'Professional',
      price: '£1,200 - £2,000',
      bestFor: 'Established businesses ready to grow',
      included: [
        'Multi-page website (up to 5 pages)',
        'Everything in Starter, plus:',
        'Photo gallery or portfolio section',
        'Testimonials showcase',
        'Service/product pages with detailed info',
        'Blog setup (optional)',
        'Advanced SEO optimization',
        'Integration with booking systems (Calendly, etc.)',
        '2 rounds of revisions',
        '1-2 week delivery',
      ],
      notIncluded: [
        'E-commerce (6+ products)',
        'Custom calculators',
        'Member areas',
        'Advanced booking systems',
      ],
      ideal: [
        'Service businesses with multiple offerings',
        'Local businesses building their reputation',
        'Companies needing portfolio/gallery showcases',
        'Businesses ready to invest in growth',
      ],
    },
    {
      name: 'Premium',
      price: '£2,500 - £4,000',
      bestFor: 'Businesses needing custom features',
      included: [
        'Everything in Professional, plus:',
        'Custom functionality (calculators, advanced booking)',
        'Advanced animations and interactions',
        'E-commerce integration (up to 50 products)',
        'Member/client portal areas',
        'Priority support',
        'Comprehensive analytics setup',
        '3 rounds of revisions',
        '2 week delivery',
        '30-day post-launch support',
      ],
      notIncluded: [
        'Large-scale e-commerce (50+ products)',
        'Complex web applications',
        'Multi-language sites',
        'Advanced integrations beyond standard tools',
      ],
      ideal: [
        'Established businesses with specific needs',
        'E-commerce businesses',
        'Companies needing custom tools',
        'Businesses scaling rapidly',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="container-custom text-center">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6">
            Websites Built to Fit Your Business and Budget
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            No cookie-cutter templates. No overpriced agency fees. Just honest pricing for quality websites that drive results.
          </p>
        </div>
      </section>

      {/* Package Details */}
      {packages.map((pkg, index) => (
        <section
          key={pkg.name}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-lightgrey'}`}
        >
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Package Info */}
              <div>
                <div className="inline-block bg-lime text-navy px-4 py-2 rounded-full font-semibold text-sm mb-4">
                  {pkg.bestFor}
                </div>
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
                  {pkg.name}
                </h2>
                <div className="text-4xl font-bold text-slate mb-6">{pkg.price}</div>

                <div className="mb-8">
                  <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.included.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-lime mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-slate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="btn-primary inline-block">
                  Get Started with {pkg.name}
                </Link>
              </div>

              {/* Additional Details */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-heading font-bold text-xl text-navy mb-4">
                    Ideal For
                  </h3>
                  <ul className="space-y-2">
                    {pkg.ideal.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-lime mr-2">•</span>
                        <span className="text-slate text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-heading font-bold text-xl text-navy mb-4">
                    Not Included
                  </h3>
                  <ul className="space-y-2">
                    {pkg.notIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-400 mr-2">×</span>
                        <span className="text-slate text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate mt-4 italic">
                    Need something not included? Let's discuss a custom solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Add-On Services */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Add-On Services
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Keep your website running smoothly with our ongoing support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="font-heading font-bold text-2xl mb-3">
                Website Maintenance
              </h3>
              <div className="text-3xl font-bold text-lime mb-4">£50-£150/mo</div>
              <ul className="space-y-2 text-gray-200">
                <li>• Regular updates & security patches</li>
                <li>• Automated backups</li>
                <li>• Small content changes</li>
                <li>• Performance monitoring</li>
                <li>• Priority email support</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="font-heading font-bold text-2xl mb-3">
                Content Updates
              </h3>
              <div className="text-3xl font-bold text-lime mb-4">£40/hour</div>
              <ul className="space-y-2 text-gray-200">
                <li>• New page creation</li>
                <li>• Copy changes & edits</li>
                <li>• Image updates & optimization</li>
                <li>• Adding new features</li>
                <li>• Layout adjustments</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="font-heading font-bold text-2xl mb-3">
                SEO Services
              </h3>
              <div className="text-3xl font-bold text-lime mb-4">Custom Quote</div>
              <ul className="space-y-2 text-gray-200">
                <li>• Keyword research & strategy</li>
                <li>• On-page optimization</li>
                <li>• Content strategy & creation</li>
                <li>• Local SEO optimization</li>
                <li>• Monthly reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-12 text-center">
            Pricing Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-xl text-navy mb-3">
                What affects the final cost?
              </h3>
              <p className="text-slate leading-relaxed">
                The final price depends on the number of pages, complexity of features, amount of custom design work, and how much content you provide. We'll give you a detailed quote after our discovery call so there are no surprises.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Why do prices vary within packages?
              </h3>
              <p className="text-slate leading-relaxed">
                Every business is unique. A 5-page site with simple layouts costs less than a 5-page site with custom features and extensive content. We price based on actual work required, not arbitrary numbers. You'll always know the exact price before we start.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-xl text-navy mb-3">
                What's NOT included in any package?
              </h3>
              <p className="text-slate leading-relaxed mb-3">
                Our packages cover design and development. Separate costs include:
              </p>
              <ul className="text-slate space-y-1 ml-4">
                <li>• Domain name (£10-15/year)</li>
                <li>• Hosting (often free, or £5-20/month)</li>
                <li>• Stock photography (if needed, £10-50)</li>
                <li>• Professional copywriting (if needed, custom quote)</li>
                <li>• Ongoing maintenance (optional, see add-ons)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Can I upgrade later?
              </h3>
              <p className="text-slate leading-relaxed">
                Absolutely. Start with a Starter package and upgrade to Professional or Premium as your business grows. We'll credit what you've already paid toward the upgrade cost.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Do you offer discounts?
              </h3>
              <p className="text-slate leading-relaxed">
                We occasionally offer discounts for charities, multiple projects, or referrals. Our prices are already fair and transparent—we don't inflate them to offer fake discounts later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-6">
            Not Sure Which Package Is Right for You?
          </h2>
          <p className="text-xl text-slate mb-8 max-w-3xl mx-auto">
            Book a free consultation and we'll help you choose the perfect package for your business goals and budget.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
