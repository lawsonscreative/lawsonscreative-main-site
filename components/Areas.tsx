'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Areas() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const areas = [
    'Kent',
    'London',
    'Sussex',
    'Surrey',
    'Essex',
    'UK-wide',
  ];

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
            Areas we serve<span className="text-lime">.</span>
          </h2>
          <p className="text-xl text-slate mb-8 max-w-2xl mx-auto">
            Based in Kent, working with businesses across the UK. Most of our clients are in the South East, but we work remotely with businesses nationwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, index) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + 0.05 * index }}
                className="bg-navy text-white px-5 py-2.5 rounded-full text-sm font-medium"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
