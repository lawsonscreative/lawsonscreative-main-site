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
      price: '£500 - £800',
      description: 'Perfect for new businesses getting online',
      popular: false,
    },
    {
      name: 'Professional',
      price: '£1,200 - £2,000',
      description: 'For established businesses ready to grow',
      popular: true,
    },
    {
      name: 'Premium',
      price: '£2,500 - £4,000',
      description: 'Custom solutions for complex needs',
      popular: false,
    },
  ];

  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32 bg-lightgrey" ref={ref}>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow relative ${
                pkg.popular ? 'ring-2 ring-lime' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-lime text-navy px-4 py-1 rounded-full font-semibold text-sm">
                  Most popular
                </div>
              )}

              <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                {pkg.name}
              </h3>
              <div className="text-3xl font-bold text-slate mb-4">{pkg.price}</div>
              <p className="text-slate mb-6 leading-relaxed">{pkg.description}</p>

              <div className="space-y-3">
                <Link
                  href="/services"
                  className={`block text-center font-semibold px-6 py-3 rounded-lg transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-lime text-navy hover:scale-105'
                      : 'bg-navy text-white hover:scale-105'
                  }`}
                >
                  Book a free consultation
                </Link>
                <Link
                  href="/services"
                  className="block text-center text-navy hover:text-lime transition-colors text-sm"
                >
                  See full {pkg.name} package details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
