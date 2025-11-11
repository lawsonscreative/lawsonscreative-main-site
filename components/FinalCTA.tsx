'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FinalCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openCalendly = () => {
    window.open('https://calendly.com/andy-lawsonsenterprises/30min', '_blank');
  };

  return (
    <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to grow your business?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Book a free 30-minute consultation to discuss your project. No pressure, no obligation—just a conversation about your business and how a website can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={openCalendly}
              className="bg-lime text-navy font-semibold px-8 py-4 rounded-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-200 text-base"
            >
              Book your free consultation
            </button>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-navy transition-all duration-200 text-base text-center"
            >
              Or get a quote by email
            </Link>
          </div>

          <div className="flex items-center justify-center text-gray-300">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-sm">
              Free consultation. No obligation. Typical response time: &lt; 24 hours.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
