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
      title: 'Quick chat and short brief',
      duration: 'Day 1',
      description:
        'A quick call to understand your business, what you need, and how we can help. No jargon, just a friendly conversation.',
      deliverable: 'Clear understanding of your needs',
    },
    {
      number: '02',
      title: 'Homepage layout and key content',
      duration: 'Day 2–4',
      description:
        "We design your homepage and agree the key content and structure. You'll see how it looks before we build the rest.",
      deliverable: 'Homepage design for approval',
    },
    {
      number: '03',
      title: 'Build and test',
      duration: 'Day 5–10',
      description:
        'We build the full site, test it on phones and desktops, and make sure everything works smoothly.',
      deliverable: 'Working site on a test URL',
    },
    {
      number: '04',
      title: 'Launch and tidy-up',
      duration: 'Day 11–14',
      description:
        'Your site goes live. We handle the technical bits, walk you through how it works, and tidy up any final details.',
      deliverable: 'Live website ready for customers',
    },
  ];

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
            Our process<span className="text-lime">.</span>
          </h2>
          <p className="text-xl text-slate max-w-4xl mx-auto">
            Straightforward steps, no surprises. Most sites are delivered in 1–2 weeks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:items-stretch">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="relative h-full"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-lime/30 z-0" />
              )}

              <div className="relative z-10 h-full flex flex-col">
                <div className="bg-lime text-navy w-16 h-16 rounded-full flex items-center justify-center font-heading font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                  {step.title}
                </h3>
                <div className="text-sm font-semibold text-lime mb-3">
                  {step.duration}
                </div>
                <p className="text-slate mb-4 leading-relaxed flex-grow">
                  {step.description}
                </p>
                <div className="bg-navy/5 border-l-4 border-navy rounded-lg p-4 mt-auto">
                  <div className="text-xs font-bold text-navy/60 uppercase tracking-wider mb-2">
                    Deliverable
                  </div>
                  <div className="text-sm font-semibold text-navy min-h-[2.5rem]">{step.deliverable}</div>
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
            Timeline may vary based on package and complexity. We'll provide a detailed schedule during discovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
