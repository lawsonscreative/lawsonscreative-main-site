'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy via-navy to-blue-900 text-white overflow-hidden">
      <div className="container-custom pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 leading-snug">
              Websites that actually win you customers
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-200 font-semibold">
              Modern, fast-loading websites for UK service businesses — designed to build trust and generate enquiries. Typically delivered in 1–2 weeks, without the agency price tag.
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              You&apos;re great at what you do. Your website should show it. I build strategy-led sites that turn visitors into bookings, not just &quot;pretty&quot; homepages.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-secondary text-center"
              >
                Book a free consultation
              </Link>
              <Link
                href="/portfolio"
                className="btn-tertiary text-center"
              >
                View our work
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Placeholder for device mockup - you can add images later */}
              <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  {/* Logo/icon placeholder in top-left */}
                  <div className="flex items-start mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-lime to-lime/60 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-32 bg-lime/20 rounded mt-6"></div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-10 bg-navy/20 rounded flex-1"></div>
                    <div className="h-10 bg-navy/10 rounded flex-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - animated arrow prompting users to scroll down and explore more content */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-96 h-96 bg-lime rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
