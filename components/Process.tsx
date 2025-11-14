'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      duration: 'Day 1-2',
      description:
        'We start by understanding your business, goals, and customers. What makes you different? Who are you trying to reach? What actions do you want visitors to take?',
      deliverable: 'Strategic brief and sitemap',
    },
    {
      number: '02',
      title: 'Design',
      duration: 'Day 3-5',
      description:
        "We design a modern, mobile-friendly website that reflects your brand and speaks to your customers. You&apos;ll see mockups and provide feedback before we build anything.",
      deliverable: 'Visual designs for approval',
    },
    {
      number: '03',
      title: 'Build',
      duration: 'Day 6-10',
      description:
        'We build your site using modern, fast technology. Every page is optimised for mobile, tested for speed, and built to convert visitors into customers.',
      deliverable: 'Fully-functional website on staging URL',
    },
    {
      number: '04',
      title: 'Launch',
      duration: 'Day 11-14',
      description:
        "After your final approval, we launch your site, set up analytics, and walk you through how everything works. You'll know exactly how to track performance and request future updates.",
      deliverable: 'Live website + walkthrough',
    },
  ];

  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32 bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            Simple process. Outstanding results.
          </h2>
          <p className="text-xl text-slate max-w-6xl mx-auto">
            We've streamlined our workflow to deliver quality websites fast, without sacrificing strategy or design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="relative"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-lime/30 z-0" />
              )}

              <div className="relative z-10">
                <div className="bg-lime text-navy w-16 h-16 rounded-full flex items-center justify-center font-heading font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                  {step.title}
                </h3>
                <div className="text-sm font-semibold text-lime mb-3">
                  {step.duration}
                </div>
                <p className="text-slate mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="bg-navy/5 border-l-4 border-navy rounded-lg p-4 mt-6">
                  <div className="text-xs font-bold text-navy/60 uppercase tracking-wider mb-2">
                    Deliverable
                  </div>
                  <div className="text-sm font-semibold text-navy">{step.deliverable}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate text-sm">
            Timeline may vary based on package and complexity. We&apos;ll provide a detailed schedule during discovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
