'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PortfolioShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20 lg:pb-24 bg-white" ref={ref}>
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
          <p className="text-xl text-slate max-w-6xl mx-auto leading-relaxed">
            See how we've transformed small businesses with websites that work as hard as they do.
          </p>
        </motion.div>

        {/* Featured Case Study - Graceful Pet Care */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-lightgrey rounded-xl shadow-lg p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
                Graceful Pet Care
              </h3>
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-lg text-navy mb-3">The challenge</h4>
                  <p className="text-slate leading-relaxed">
                    Dated website wasn't converting visitors into bookings. Needed a modern, trust-focused redesign that showcased their expertise and made it easy for pet owners to get in touch.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-navy mb-3">Our solution</h4>
                  <p className="text-slate leading-relaxed">
                    Modern, mobile-friendly redesign with clear CTAs, emotional imagery, and prominent trust signals. Made booking consultations effortless.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-navy mb-3">The results</h4>
                  <div className="flex justify-between gap-3">
                    <div className="bg-white px-4 py-3 rounded-lg flex-1 text-center">
                      <div className="text-2xl font-bold text-lime">35%</div>
                      <div className="text-sm text-slate">More enquiries</div>
                    </div>
                    <div className="bg-white px-4 py-3 rounded-lg flex-1 text-center">
                      <div className="text-2xl font-bold text-lime">80%</div>
                      <div className="text-sm text-slate">Mobile bookings</div>
                    </div>
                    <div className="bg-white px-4 py-3 rounded-lg flex-1 text-center">
                      <div className="text-2xl font-bold text-lime">2x</div>
                      <div className="text-sm text-slate">Professional trust</div>
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

            {/* Before/After Images */}
            <div className="space-y-6">
              {/* Before */}
              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <Image
                    src="/images/portfolio/graceful-petcare-before.png"
                    alt="Graceful Pet Care website before redesign"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    Before
                  </span>
                </div>
              </div>
              {/* After */}
              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden ring-2 ring-lime">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <Image
                    src="/images/portfolio/graceful-petcare-after.png"
                    alt="Graceful Pet Care website after redesign"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-lime text-navy px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    After
                  </span>
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
          className="text-center mt-16"
        >
          <p className="text-slate text-lg mb-4 leading-relaxed">
            This is just the beginning. We&apos;re building a portfolio of stunning, effective websites across industries. From fitness coaches to wedding photographers, car detailers to accountants.
          </p>
          <Link href="/portfolio" className="btn-secondary inline-block">
            View full portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
