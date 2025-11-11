'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PortfolioShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            Real businesses. Real results.
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            See how we've transformed small businesses with websites that work as hard as they do.
          </p>
        </motion.div>

        {/* Featured Case Study - Graceful Pet Care */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-lightgrey rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
                Graceful Pet Care
              </h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-lg text-navy mb-2">The challenge</h4>
                  <p className="text-slate">
                    Dated website wasn't converting visitors into bookings. Needed a modern, trust-focused redesign that showcased their expertise and made it easy for pet owners to get in touch.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-navy mb-2">Our solution</h4>
                  <p className="text-slate">
                    Modern, mobile-first redesign with clear CTAs, emotional imagery, and prominent trust signals. Made booking consultations effortless.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-navy mb-2">The results</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white px-4 py-2 rounded-lg">
                      <div className="text-2xl font-bold text-lime">50%</div>
                      <div className="text-sm text-slate">More Enquiries</div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg">
                      <div className="text-2xl font-bold text-lime">200%</div>
                      <div className="text-sm text-slate">Mobile Bookings</div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg">
                      <div className="text-2xl font-bold text-lime">100%</div>
                      <div className="text-sm text-slate">Professional Trust</div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://gracefulpetcare.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-navy font-semibold hover:text-lime transition-colors"
              >
                View live site
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>

            {/* Before/After Placeholder */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-4">
                <div className="mb-2 text-center text-sm font-semibold text-slate">
                  Before / After Comparison
                </div>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-slate">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto mb-2 text-gray-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="text-sm">Portfolio images to be added</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* More projects coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-slate text-lg mb-6">
            This is just the beginning. We&apos;re building a portfolio of stunning, effective websites across industries—from fitness coaches to wedding photographers, car detailers to accountants.
          </p>
          <Link href="/portfolio" className="btn-primary inline-block">
            View full portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
