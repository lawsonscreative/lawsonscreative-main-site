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
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            Real businesses. Real results<span className="text-lime">.</span>
          </h2>
          <p className="text-xl text-slate max-w-6xl mx-auto leading-relaxed">
            See how we've transformed small businesses with websites that work as hard as they do.
          </p>
        </motion.div>

        {/* Featured Case Study - TFRCO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-lightgrey rounded-xl shadow-lg p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block bg-lime text-navy px-4 py-2 rounded-full font-semibold text-sm mb-4">
                Featured project
              </span>
              <h3 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
                The Flooring and Resin Company
              </h3>
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-lg text-navy mb-3">The challenge</h4>
                  <p className="text-slate leading-relaxed">
                    A family-run flooring specialist with 50+ years' experience relied solely on a Facebook page. It didn't showcase their full range of traditional flooring and specialist resin work, or make it easy for new customers to request quotes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-navy mb-3">Our solution</h4>
                  <p className="text-slate leading-relaxed">
                    Modern, service-led website with clear separation between carpet, vinyl, laminate, and premium resin feature surfaces. Dedicated resin page positions their specialist work as the standout service it deserves to be.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-navy mb-4">The impact</h4>
                  <p className="text-slate leading-relaxed">
                    Professional web presence that matches the quality of their craftsmanship. More focused enquiries from customers who understand exactly what services they offer and how to get a quote.
                  </p>
                </div>
              </div>
              <Link
                href="/portfolio/the-flooring-and-resin-company"
                className="inline-flex items-center text-navy font-semibold hover:text-lime transition-colors"
              >
                View full case study
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
            </div>

            {/* Preview Image */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden ring-4 ring-lime">
              {/* Browser Chrome */}
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs font-semibold text-lime uppercase tracking-wide">New site</span>
              </div>
              {/* Screenshot */}
              <Image
                src="/images/portfolio/tfrco-new-site.webp"
                alt="The Flooring and Resin Company website"
                width={800}
                height={600}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Second Case Study - Graceful Pet Care */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12 border-2 border-gray-100"
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
                  <h4 className="font-semibold text-lg text-navy mb-3">The results</h4>
                  <p className="text-slate leading-relaxed">
                    Significant increase in enquiries since launch. Pet owners can now easily book on mobile, and customers regularly comment on how professional and trustworthy the website feels.
                  </p>
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
                  src="/images/portfolio/graceful-petcare-before.webp"
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
                  src="/images/portfolio/graceful-petcare-after.webp"
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
            We work with all kinds of businesses including pet care, fitness, manual trades, creative and professional service businesses, and launch new projects every month. You won't be parachuted into a queue, you'll get direct, personal attention from the person who is building your site.
          </p>
          <Link href="/portfolio" className="btn-primary inline-block">
            View full portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
