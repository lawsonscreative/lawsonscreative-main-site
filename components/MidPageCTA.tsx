'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MidPageCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-white">
            Ready to talk about your website<span className="text-lime">?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            We work with small UK service businesses — not everyone. If you need a website that builds trust and generates enquiries, let's talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary text-center text-lg px-10 py-4 shadow-xl"
              onClick={() => {
                if (typeof window !== 'undefined' && window.plausible) {
                  window.plausible('CTA Click', { props: { location: 'Mid-page CTA', button: 'Book Consultation' } });
                }
              }}
            >
              Book a free consultation
            </Link>
            <Link
              href="mailto:hello@lawsonscreative.co.uk"
              className="btn-tertiary text-center text-lg px-10 py-4"
            >
              Email your project details
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
