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
      title: 'Plain-English communication',
      description:
        "No jargon, no tech-speak. We explain everything clearly and handle the technical side so you don't have to.",
      icon: Target,
    },
    {
      title: 'Small studio, direct access',
      description:
        "You deal directly with the people doing the work — Andy and Rachel. No account managers or middlemen.",
      icon: HandshakeIcon,
    },
    {
      title: 'Clear process from brief to launch',
      description:
        "We follow a simple, proven process. You'll know exactly what's happening at every stage.",
      icon: Zap,
    },
    {
      title: 'Phone-friendly as standard',
      description:
        "Over 60% of visitors are on mobile. Every site we build works beautifully on phones, tablets and desktops.",
      icon: Smartphone,
    },
    {
      title: 'Transparent, fair pricing',
      description:
        "You know exactly what you're paying before we start. No hidden fees, no surprise invoices.",
      icon: PoundSterling,
    },
    {
      title: 'Words and print too',
      description:
        "Rachel can sharpen your website copy and create matching printed materials — flyers, business cards, brochures — so everything feels consistent.",
      icon: Wrench,
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
            Why local small businesses work with us<span className="text-lime">.</span>
          </h2>
          <p className="text-xl text-slate max-w-4xl mx-auto">
            We're a small web studio — not an agency. You get direct access to the people doing the work, plain-English communication, and websites delivered in 1–2 weeks.
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
