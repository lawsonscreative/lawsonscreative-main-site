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
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-12">
            Add-on services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Website Maintenance */}
            <div className="group relative bg-gradient-to-br from-white via-white to-lime/5 rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,230,118,0.3)] transition-all duration-500 border border-gray-100 hover:border-lime/50 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lime/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-lime to-lime/60 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-lime/20 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <svg className="w-8 h-8 text-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-xl text-navy mb-3">Website maintenance</h4>
                <div className="text-3xl font-bold bg-gradient-to-r from-lime to-lime/60 bg-clip-text text-transparent mb-1">£50-£150</div>
                <p className="text-xs font-semibold text-slate uppercase tracking-wide mb-4">per month</p>
                <p className="text-slate text-sm leading-relaxed">
                  Updates, security, backups, small changes
                </p>
              </div>
            </div>

            {/* Content Updates */}
            <div className="group relative bg-gradient-to-br from-white via-white to-navy/5 rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(10,37,64,0.3)] transition-all duration-500 border border-gray-100 hover:border-navy/50 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-navy/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy/60 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-navy/20 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <svg className="w-8 h-8 text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-xl text-navy mb-3">Content updates</h4>
                <div className="text-3xl font-bold bg-gradient-to-r from-navy to-navy/60 bg-clip-text text-transparent mb-1">£40</div>
                <p className="text-xs font-semibold text-slate uppercase tracking-wide mb-4">per hour</p>
                <p className="text-slate text-sm leading-relaxed">
                  New pages, copy changes, image updates
                </p>
              </div>
            </div>

            {/* SEO Services */}
            <div className="group relative bg-gradient-to-br from-white via-white to-lime/5 rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,230,118,0.3)] transition-all duration-500 border border-gray-100 hover:border-lime/50 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lime/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-lime to-lime/60 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-lime/20 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <svg className="w-8 h-8 text-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-xl text-navy mb-3">SEO services</h4>
                <div className="text-3xl font-bold bg-gradient-to-r from-lime to-lime/60 bg-clip-text text-transparent mb-1">Custom</div>
                <p className="text-xs font-semibold text-slate uppercase tracking-wide mb-4">pricing based on scope</p>
                <p className="text-slate text-sm leading-relaxed">
                  Keyword research, optimization, content strategy
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
