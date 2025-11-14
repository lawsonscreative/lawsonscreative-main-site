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
              <h3 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
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
                  <h4 className="font-semibold text-lg text-navy mb-4">The results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white px-4 py-4 rounded-lg shadow-md text-center">
                      <div className="text-3xl md:text-4xl font-bold text-lime mb-1">35%</div>
                      <div className="text-xs md:text-sm text-slate">More enquiries</div>
                    </div>
                    <div className="bg-white px-4 py-4 rounded-lg shadow-md text-center">
                      <div className="text-3xl md:text-4xl font-bold text-lime mb-1">80%</div>
                      <div className="text-xs md:text-sm text-slate">Mobile bookings</div>
                    </div>
                    <div className="bg-white px-4 py-4 rounded-lg shadow-md text-center">
                      <div className="text-3xl md:text-4xl font-bold text-lime mb-1">2×</div>
                      <div className="text-xs md:text-sm text-slate">Professional trust</div>
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
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Before</span>
                </div>
                {/* Screenshot */}
                <Image
                  src="/images/portfolio/graceful-petcare-before.png"
                  alt="Graceful Pet Care website before redesign"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
              {/* After */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden ring-4 ring-lime">
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs font-semibold text-lime uppercase tracking-wide">After</span>
                </div>
                {/* Screenshot */}
                <Image
                  src="/images/portfolio/graceful-petcare-after.png"
                  alt="Graceful Pet Care website after redesign"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto"
                />
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
            We&apos;re currently partnering with pet care, fitness, trades, creative and professional service businesses — with new projects launching every month. You won&apos;t be project number 312 lost in a big agency; you&apos;ll get direct attention from the person actually building your site.
          </p>
          <Link href="/portfolio" className="btn-secondary inline-block">
            View full portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
