'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer:
        "Most projects take 1-2 weeks from kickoff to launch, depending on the package and complexity. We&apos;ll give you a detailed timeline during the discovery call.",
    },
    {
      question: 'Do you offer payment plans?',
      answer:
        'Yes. We typically split payment into two: 50% upfront to start, 50% on launch. For larger projects, we can discuss custom payment schedules.',
    },
    {
      question: 'What if I need changes after launch?',
      answer:
        'All packages include revisions during the build process. After launch, small tweaks are usually included for the first 30 days (Premium package). Larger changes can be quoted separately or covered under a maintenance plan.',
    },
    {
      question: 'Can I update the website myself?',
      answer:
        "Yes. We provide training on how to make common updates (text, images, basic content). For more complex changes, we&apos;re always available to help.",
    },
    {
      question: 'Do you provide hosting?',
      answer:
        "We build your site and deploy it to professional hosting (Vercel/Netlify). Hosting costs are minimal (often free for small sites) and we can manage this for you or hand over access—your choice.",
    },
    {
      question: "What if I don&apos;t have content (photos, text)?",
      answer:
        "No problem. We can help with copywriting, source stock images, or work with what you have. We&apos;ll discuss your content needs during discovery.",
    },
    {
      question: 'Do you do e-commerce websites?',
      answer:
        'Yes, but this falls under our Premium package as it requires additional complexity. We can integrate payment systems, product catalogues, and shopping carts.',
    },
    {
      question: 'How do I know if a website will actually help my business?',
      answer:
        "Great question. If you're getting enquiries but losing them because your site looks dated or unprofessional, a new website can help. If you're not showing up in Google searches, or your site doesn&apos;t work well on mobile, you're losing potential customers. We&apos;ll discuss whether a website is the right investment during your free consultation.",
    },
    {
      question: 'What makes you different from Wix, Squarespace, or Fiverr?',
      answer:
        "DIY builders are great if you have time and design skills, but most small business owners don&apos;t. Cheap Fiverr gigs often deliver templated, low-quality work. We offer the best of both: custom, strategic design at a fair price, delivered fast.",
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
            Common questions
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
              >
                <h3 className="font-semibold text-lg text-navy pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
