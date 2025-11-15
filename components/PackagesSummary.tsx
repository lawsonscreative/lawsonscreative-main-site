'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PackagesSummary() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const packages = [
    {
      name: 'Starter',
      price: '£500–£800',
      description: 'Perfect for new businesses getting online',
      popular: false,
    },
    {
      name: 'Professional',
      price: '£1,200–£2,000',
      description: 'For established businesses ready to grow',
      popular: true,
    },
    {
      name: 'Premium',
      price: '£2,500–£4,000',
      description: 'Custom solutions for complex needs',
      popular: false,
    },
  ];

  return (
    <section className="section-padding bg-secondary" ref={ref}>
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
            Choose a package that fits your business and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className={`${
                pkg.popular
                  ? 'card-package-highlighted md:scale-105'
                  : 'card-package'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-lime to-lime/80 text-navy px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Most popular
                </div>
              )}

              <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                {pkg.name}
              </h3>
              <div className="text-3xl font-bold text-slate mb-4">{pkg.price}</div>
              <p className="text-slate mb-6 leading-relaxed min-h-[3rem]">{pkg.description}</p>

              <div className="space-y-3 mt-auto">
                <Link
                  href="/contact"
                  className={`btn-primary block text-center ${
                    pkg.popular ? 'shadow-lg' : ''
                  }`}
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.plausible) {
                      window.plausible('CTA Click', { props: { location: 'Packages Summary', button: `${pkg.name} Consultation` } });
                    }
                  }}
                >
                  Book a free consultation
                </Link>
                <Link
                  href="/services"
                  className="block text-center text-navy hover:text-lime transition-colors text-sm font-semibold"
                >
                  See full {pkg.name} details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
