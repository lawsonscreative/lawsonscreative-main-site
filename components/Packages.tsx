'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Packages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const packages = [
    {
      name: 'Starter',
      price: '£500 - £800',
      bestFor: 'New businesses or single-service providers',
      features: [
        'Single-page website (homepage only)',
        'Mobile-responsive design',
        'Contact form integration',
        'Google Maps integration',
        'Basic SEO setup',
        'Fast loading (< 2s)',
        '1 round of revisions',
        '1 week delivery',
      ],
      description:
        'A professional online presence that builds trust and captures leads. Perfect for getting started without breaking the bank.',
      popular: false,
    },
    {
      name: 'Professional',
      price: '£1,200 - £2,000',
      bestFor: 'Established businesses ready to grow',
      features: [
        'Multi-page website (up to 5 pages)',
        'Everything in Starter, plus:',
        'Photo gallery or portfolio section',
        'Testimonials showcase',
        'Service/product pages with detailed info',
        'Blog setup (optional)',
        'Advanced SEO optimization',
        'Integration with booking systems',
        '2 rounds of revisions',
        '1-2 week delivery',
      ],
      description:
        'A complete website that positions you as the professional you are. Built to convert visitors into customers.',
      popular: true,
    },
    {
      name: 'Premium',
      price: '£2,500 - £4,000',
      bestFor: 'Businesses needing custom features',
      features: [
        'Everything in Professional, plus:',
        'Custom functionality (calculators, booking systems)',
        'Advanced animations and interactions',
        'E-commerce integration (if needed)',
        'Priority support',
        'Comprehensive analytics setup',
        '3 rounds of revisions',
        '2 week delivery',
        '30-day post-launch support',
      ],
      description:
        'A fully-featured website tailored to your exact needs. Built to scale as your business grows.',
      popular: false,
    },
  ];

  return (
    <section className="section-padding bg-lightgrey" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            Flexible packages for every business
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Whether you need a simple landing page or a full-featured website, we have a package that fits your business and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow relative ${
                pkg.popular ? 'ring-2 ring-lime' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-lime text-navy px-4 py-1 rounded-full font-semibold text-sm">
                  Most Popular
                </div>
              )}

              <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                {pkg.name}
              </h3>
              <div className="text-3xl font-bold text-slate mb-2">{pkg.price}</div>
              <p className="text-sm text-slate mb-6 italic">{pkg.bestFor}</p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm text-slate">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-slate mb-6 border-t pt-6">
                {pkg.description}
              </p>

              <Link
                href="/contact"
                className={`block text-center font-semibold px-6 py-3 rounded-lg transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-lime text-navy hover:scale-105'
                    : 'bg-navy text-white hover:scale-105'
                }`}
              >
                Get started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Add-on Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="font-heading font-bold text-2xl text-navy mb-6">
            Add-on services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-navy mb-2">Website maintenance</h4>
              <p className="text-slate text-sm mb-2">£50-£150/month</p>
              <p className="text-slate text-sm">
                Updates, security, backups, small changes
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-navy mb-2">Content updates</h4>
              <p className="text-slate text-sm mb-2">£40/hour</p>
              <p className="text-slate text-sm">
                New pages, copy changes, image updates
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-navy mb-2">SEO services</h4>
              <p className="text-slate text-sm mb-2">Custom quote</p>
              <p className="text-slate text-sm">
                Keyword research, optimization, content strategy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
