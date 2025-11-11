'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy via-navy to-blue-900 text-white overflow-hidden">
      <div className="container-custom py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Websites That Grow Your Business
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-200 font-semibold">
              Modern, fast, effective websites for small service businesses. Built in 1-2 weeks, not months.
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              You're great at what you do. Your website should show it. We build professional sites that attract customers, build trust, and drive bookings—without the agency price tag.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="bg-lime text-navy font-semibold px-8 py-4 rounded-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-200 text-base text-center"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-navy transition-all duration-200 text-base text-center"
              >
                Get Your Free Quote
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

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-lime text-navy px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                ⚡ Fast Delivery
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-navy px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                📱 Mobile-First
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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
