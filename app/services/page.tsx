import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Design Packages & Pricing for Small Businesses | Lawsons Creative',
  description: 'Flexible website design packages for small businesses. From £500 starter sites to premium custom solutions.',
};

export default function ServicesPage() {
  const packages = [
    {
      name: 'Starter',
      price: '£500 - £800',
      bestFor: 'Ideal for new businesses or single-service providers',
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
      bestFor: 'Ideal for established businesses ready to grow',
      included: [
        'Multi-page website (up to 5 pages)',
        'Everything in Starter, plus:',
        'Photo gallery or portfolio section',
        'Testimonials showcase',
        'Service/product pages with detailed info',
        'Blog setup (optional)',
        'Advanced SEO optimisation',
        'Integration with booking systems (Calendly, etc.)',
        '2 rounds of revisions',
        '1–2 week delivery',
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
      bestFor: 'Ideal for businesses needing custom features',
      included: [
        'Everything in Professional, plus:',
        'Custom functionality (calculators, advanced booking)',
        'Advanced animations and interactions',
        'E-commerce integration (up to 50 products)',
        'Member/client portal areas',
        'Priority support',
        'Comprehensive analytics setup',
        '3 rounds of revisions',
        '2-week delivery',
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

      {/* Pricing Explainer */}
      <section className="pt-12 md:pt-16 lg:pt-20 pb-0">
        <div className="container-custom">
          <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-lg border-l-4 border-lime">
            <h3 className="font-heading font-bold text-2xl text-navy mb-4">
              How pricing works
            </h3>
            <div className="space-y-3 text-slate leading-relaxed">
              <p>
                <strong className="text-navy">Why the price ranges?</strong> Every business is slightly different. A 3-page site with simple layouts costs less than a 3-page site with custom animations and integrations.
              </p>
              <p>
                <strong className="text-navy">How it works:</strong> During our free discovery call, we&apos;ll discuss your specific needs and give you a fixed quote before we start. No surprises, no scope creep.
              </p>
              <p className="text-sm italic pt-2 border-t border-gray-200">
                <strong className="text-navy">VAT:</strong> All prices shown exclude VAT (20%). If you&apos;re VAT registered, you can reclaim this. Final invoice will include VAT where applicable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="pt-12 md:pt-16 pb-8 md:pb-12 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-navy to-blue-900 rounded-xl p-8 md:p-10 text-white shadow-xl">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-center">
              Not sure which package? Here's how to choose:
            </h3>
            <div className="space-y-4">
              <a href="#starter" className="flex items-start gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime flex items-center justify-center font-bold text-navy">
                  1
                </div>
                <div>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-lime">Just need an online presence?</strong> → Starter
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Perfect for sole traders, new businesses, or single-service providers who need a simple but professional web presence.
                  </p>
                </div>
              </a>
              <a href="#professional" className="flex items-start gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime flex items-center justify-center font-bold text-navy">
                  2
                </div>
                <div>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-lime">Ready to grow and generate leads?</strong> → Professional
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Ideal for established businesses with multiple services, portfolios to showcase, or those serious about online marketing.
                  </p>
                </div>
              </a>
              <a href="#premium" className="flex items-start gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime flex items-center justify-center font-bold text-navy">
                  3
                </div>
                <div>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-lime">Need custom features or e-commerce?</strong> → Premium
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Best for businesses with specific requirements like online booking systems, product sales, or custom functionality.
                  </p>
                </div>
              </a>
            </div>
            <p className="text-center text-sm text-gray-300 mt-6 italic">
              Still unsure? Book a free consultation and we'll help you choose the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* Package Details */}
      {packages.map((pkg, index) => (
        <section
          key={pkg.name}
          id={pkg.name.toLowerCase()}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-lightgrey'} scroll-mt-8`}
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
                <div className="mb-6">
                  <div className="text-4xl font-bold text-slate">{pkg.price}</div>
                  <p className="text-sm text-slate/70 italic mt-1">*Prices exclude VAT</p>
                </div>

                <div className="mb-8">
                  <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                    What&apos;s Included
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
                  Book a free consultation
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

      {/* Add-on services */}
      <section className="section-padding bg-lightgrey border-t-4 border-lime">
        <div className="container-custom">
          {/* Section intro */}
          <div className="text-center mb-4">
            <p className="text-lime font-semibold text-sm uppercase tracking-wide mb-2">
              Need something extra?
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-navy">
              Add-on services
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto mb-4">
              Keep your website running smoothly with our ongoing support services.
            </p>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              <strong className="text-navy">Flexible options:</strong> Add these to any package during your build, or purchase them separately after launch — even if we didn't build your original site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Website Maintenance Card */}
            <div className="group relative bg-gradient-to-br from-white via-white to-lime/5 rounded-3xl p-10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,230,118,0.3)] transition-all duration-500 border border-gray-100 hover:border-lime/50 hover:-translate-y-2">
              {/* Decorative gradient orb */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lime/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-lime to-lime/60 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-lime/20 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-navy"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-3xl mb-4 text-navy">
                  Website maintenance
                </h3>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-lime to-lime/60 bg-clip-text text-transparent">£50-£150</span>
                  </div>
                  <div className="text-sm font-semibold text-slate uppercase tracking-wide mt-1">per month</div>
                </div>

                {/* Features */}
                <ul className="space-y-4 text-slate">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Regular updates & security patches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Automated backups</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Small content changes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Priority email support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Content Updates Card */}
            <div className="group relative bg-gradient-to-br from-white via-white to-navy/5 rounded-3xl p-10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(10,37,64,0.3)] transition-all duration-500 border border-gray-100 hover:border-navy/50 hover:-translate-y-2">
              {/* Decorative gradient orb */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-navy/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy/60 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-navy/20 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-lime"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-3xl mb-4 text-navy">
                  Content updates
                </h3>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-navy to-navy/60 bg-clip-text text-transparent">£75</span>
                  </div>
                  <div className="text-sm font-semibold text-slate uppercase tracking-wide mt-1">per hour</div>
                </div>

                {/* Features */}
                <ul className="space-y-4 text-slate">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">New page creation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Copy changes & edits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Image updates and optimisation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Adding new features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Layout adjustments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SEO Services Card */}
            <div className="group relative bg-gradient-to-br from-white via-white to-lime/5 rounded-3xl p-10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,230,118,0.3)] transition-all duration-500 border border-gray-100 hover:border-lime/50 hover:-translate-y-2">
              {/* Decorative gradient orb */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lime/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-lime to-lime/60 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-lime/20 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-navy"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-3xl mb-4 text-navy">
                  SEO services
                </h3>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-lime to-lime/60 bg-clip-text text-transparent">Custom</span>
                  </div>
                  <div className="text-sm font-semibold text-slate uppercase tracking-wide mt-1">pricing based on scope</div>
                </div>

                {/* Features */}
                <ul className="space-y-4 text-slate">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Keyword research & strategy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">On-page optimisation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Content strategy & creation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Local SEO optimisation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base leading-relaxed">Monthly reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center">
            <p className="text-slate text-lg max-w-2xl mx-auto">
              All add-on services can be combined with any package or purchased independently. Get in touch to discuss your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-12 text-center">
            Pricing questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-xl text-navy mb-3">
                What affects the final cost?
              </h3>
              <p className="text-slate leading-relaxed">
                The final price depends on the number of pages, complexity of features, amount of custom design work, and how much content you provide. We&apos;ll give you a detailed quote after our discovery call so there are no surprises.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Why do prices vary within packages?
              </h3>
              <p className="text-slate leading-relaxed">
                Every business is unique. A 5-page site with simple layouts costs less than a 5-page site with custom features and extensive content. We price based on actual work required, not arbitrary numbers. You&apos;ll always know the exact price before we start.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-xl text-navy mb-3">
                What&apos;s NOT included in any package?
              </h3>
              <p className="text-slate leading-relaxed mb-3">
                Our packages cover design and development. Separate costs include:
              </p>
              <ul className="text-slate space-y-1 ml-4">
                <li>Domain name (£10-15/year)</li>
                <li>Stock photography (if needed, £10-50)</li>
                <li>Professional copywriting (if needed, custom quote)</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-slate font-semibold mb-2">Hosting & ongoing maintenance</p>
                <p className="text-slate text-sm leading-relaxed mb-2">
                  Hosting infrastructure costs £5-20/month (or free for simple static sites on Vercel/Netlify).
                </p>
                <p className="text-slate text-sm leading-relaxed mb-2">
                  However, most clients opt for a maintenance package (£50-150/month) which includes:
                </p>
                <ul className="text-slate text-sm space-y-1 ml-4">
                  <li>Hosting + fast CDN</li>
                  <li>Security updates and patches</li>
                  <li>Automated backups</li>
                  <li>Content updates (included hours vary by tier)</li>
                  <li>Priority support</li>
                </ul>
                <p className="text-slate text-sm leading-relaxed mt-2">
                  First year hosting is included in your build cost. After that, you can:
                </p>
                <ul className="text-slate text-sm space-y-1 ml-4">
                  <li>Self-manage hosting (£5-20/month) if you have technical capabilities</li>
                  <li>Use our maintenance packages (recommended for most clients)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Can I upgrade later?
              </h3>
              <p className="text-slate leading-relaxed">
                Absolutely. Start with a Starter package and upgrade to Professional or Premium as your business grows. We&apos;ll credit what you've already paid toward the upgrade cost.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Do you offer discounts?
              </h3>
              <p className="text-slate leading-relaxed">
                We occasionally offer discounts for charities, multiple projects, or referrals. Our prices are already fair and transparent. We don&apos;t inflate them to offer fake discounts later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
              Still unsure?
            </h2>
            <p className="text-xl text-slate mb-6 leading-relaxed">
              Book a free consultation to discuss your project. No pressure, no obligation — just an honest conversation about what you need and which package fits best.
            </p>
            <Link href="/contact" className="btn-secondary inline-block">
              Book a free consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
