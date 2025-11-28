'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Target, Smartphone, PoundSterling, Wrench, HandshakeIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }> = [
    {
      title: 'Fast delivery without rushing',
      description:
        "Using efficient tooling and proven workflows, we typically complete builds in 1–2 weeks. You'll receive a detailed timeline and milestone plan, ensuring no surprises, just results.",
      icon: Zap,
    },
    {
      title: 'Strategy first, design second',
      description:
        'Beautiful design matters only when it delivers results. We start with your business goals and build websites that turn visitors into customers.',
      icon: Target,
    },
    {
      title: 'Mobile-friendly websites',
      description:
        "Over 60% of site visitors are on mobile. We design for phones first, then scale up, not the other way around.",
      icon: Smartphone,
    },
    {
      title: 'Transparent pricing, no surprises',
      description:
        "You know exactly what you're paying before we start. No hidden fees, no scope creep, no surprise invoices.",
      icon: PoundSterling,
    },
    {
      title: 'Built to last',
      description:
        "Built on modern, future-proof technology. Fast, secure and easy to keep current, you can request simple updates anytime or choose ongoing maintenance for peace of mind.",
      icon: Wrench,
    },
    {
      title: 'Ongoing support available',
      description:
        "Keep your site secure, current and converting. Post-launch support and maintenance plans mean fewer interruptions and more time for your business.",
      icon: HandshakeIcon,
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
            Built for small businesses, by someone who gets it<span className="text-lime">.</span>
          </h2>
          <p className="text-xl text-slate max-w-6xl mx-auto">
            Large agencies charge £10k+ and take months. We deliver quality websites in 1–2 weeks at a fraction of the cost, without cutting corners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="bg-lightgrey rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-lime">
                <reason.icon size={40} strokeWidth={2} />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy mb-3">
                {reason.title}
              </h3>
              <p className="text-slate leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
