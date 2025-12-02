'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ServicesSummary() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      name: 'Website Rescue',
      tagline: 'Modernise your old or DIY site',
      description: 'We rebuild tired, awkward or broken websites into clean, phone-friendly sites that actually generate enquiries.',
      price: 'From £1,295',
      href: '/services#website-rescue',
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      ),
    },
    {
      name: 'New Business Website',
      tagline: 'A proper first site for your business',
      description: 'Simple, clean, no-fluff design for new or early-stage businesses. Everything you need to look professional online.',
      price: 'From £1,295',
      href: '/services#new-website',
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      ),
    },
    {
      name: 'Ongoing Support',
      tagline: 'Keep your site secure and current',
      description: 'Updates, security, minor tweaks and content changes. We handle the tech so you can focus on your business.',
      price: 'From £30/month',
      href: '/services#ongoing-support',
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-lightgrey" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            What we do<span className="text-lime">.</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Three clear services to match what you need — whether that's fixing an old site, building a new one, or keeping everything running smoothly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="w-16 h-16 bg-lime/20 text-lime rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                {service.name}
              </h3>
              <p className="text-lime font-semibold text-sm mb-4">
                {service.tagline}
              </p>
              <p className="text-slate leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="mt-auto">
                <p className="text-navy font-bold text-lg mb-4">
                  {service.price}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-navy font-semibold hover:text-lime transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons mention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate text-lg">
            Need help with copy, branding or printed materials?{' '}
            <Link href="/services#add-ons" className="text-navy font-semibold hover:text-lime transition-colors">
              See our add-on services →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
