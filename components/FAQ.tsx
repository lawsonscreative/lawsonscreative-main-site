'use client';

import { useState } from 'react';
import Link from 'next/link';
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
        "Most projects take 1–2 weeks from kickoff to launch, depending on the package and complexity. Starter packages typically take 1 week. Professional packages take 1–2 weeks. Premium packages take 2 weeks.\n\nThe main factors that affect timeline are: how quickly you can provide content (photos, copy, testimonials), how many rounds of revisions you need, and whether you need custom integrations.\n\nWe'll give you a detailed timeline with clear milestones during the discovery call, so you always know what's happening next.",
    },
    {
      question: 'Do you offer payment plans?',
      answer:
        "Yes, we offer flexible payment options for all packages:\n\nOption 1: 50% deposit to start, 50% on launch\nOption 2: Three monthly payments (for Professional and Premium packages)\n\nAll payment terms are agreed upfront before we start work. We accept bank transfer, debit card, and credit card payments.\n\nFor established businesses or repeat clients, we're happy to discuss custom payment arrangements.",
    },
    {
      question: 'What if I need changes after launch?',
      answer:
        "Every package includes post-launch revisions:\n- Starter: 1 round of revisions\n- Professional: 2 rounds of revisions\n- Premium: 3 rounds of revisions + 30 days priority support\n\nAfter launch, you have several options for ongoing changes:\n\nDIY: I'll train you on how to make basic content updates yourself (most clients find this easy)\n\nMaintenance package: £50–£150/month for regular updates, security, backups, and small changes\n\nPay-as-you-go: £75/hour for one-off content updates or new pages\n\nMost clients find they need very little help after launch, but I'm here when you need me.",
    },
    {
      question: 'Do I need to provide the content, or do you write it?',
      answer:
        "It depends on your package and preferences:\n\nYou provide content (most common): You know your business best. I'll give you a simple content template that tells you exactly what I need (text, photos, testimonials). Most clients find this straightforward.\n\nI help with content (Professional & Premium): I'll review your existing content and suggest improvements. I can restructure copy to be clearer and more compelling, though you'll still need to provide the core information about your services.\n\nFull copywriting (add-on service): If you don't have time or prefer professional copywriting, I can recommend trusted copywriters who specialise in small business websites. This typically adds £300–£800 depending on the number of pages.\n\nThe key thing: Your website will only be as good as the content. I'll help you get it right.",
    },
    {
      question: 'What about hosting? Do I need to arrange that?',
      answer:
        "No, you don't need to worry about hosting — I'll handle everything.\n\nWhat's included:\n- Fast, secure hosting on modern platforms (Vercel or Netlify)\n- Free SSL certificate (the padlock in the browser)\n- Automatic backups\n- 99.9% uptime guarantee\n- Your custom domain setup (if you have one)\n\nOngoing costs:\n\nFirst year: Included in your build cost\n\nAfter year 1, you have two options:\n\nOption 1: Self-managed hosting (£5-20/month)\nIf you or your team are comfortable managing hosting, the infrastructure cost is typically £5-20/month for small-medium sites. This is just the raw hosting - you handle security updates, backups, and technical maintenance yourself.\n\nOption 2: Managed hosting + maintenance (£50-150/month) - Recommended\nMost clients prefer this because it includes:\n- Hosting + fast CDN\n- Security updates and patches\n- Automated backups\n- Content updates (included hours vary by tier)\n- Priority support\n- You never worry about technical stuff\n\nNo technical knowledge needed — I handle all the technical stuff so you can focus on your business.",
    },
    {
      question: "Can I update the website myself after it's built?",
      answer:
        "Absolutely! Every website includes:\n\nTraining session: I'll show you how to make common updates (text changes, adding images, updating prices, adding blog posts)\n\nDocumentation: Simple step-by-step guides for common tasks\n\nCMS access: You'll have full control via a user-friendly content management system\n\nMost common updates are easy:\n- Changing text or prices: 2–3 minutes\n- Adding photos to a gallery: 5 minutes\n- Publishing a blog post: 10 minutes\n\nFor bigger changes (new pages, layout changes, new features), you can either:\n- Do it yourself if you're comfortable\n- Ask me to help (£75/hour or included in maintenance package)\n\n95% of clients feel confident making their own updates after the training session.",
    },
    {
      question: "Why shouldn't I just use Wix or Squarespace?",
      answer:
        "Great question — DIY builders are fantastic for some businesses, but they come with trade-offs:\n\nDIY builders (Wix, Squarespace, etc.):\n✅ Cheap upfront (£10–30/month)\n✅ You have full control\n❌ Takes 20–40 hours of your time to learn and build\n❌ Often look \"templated\" (your site looks like 10,000 others)\n❌ Slower loading speeds (affects Google rankings)\n❌ Limited customisation without coding knowledge\n❌ DIY usually means \"good enough\", not \"great\"\n\nWorking with Lawsons Creative:\n✅ Professional, custom design that stands out\n✅ Optimised for speed and Google rankings\n✅ Done in 1–2 weeks (not months of your evenings)\n✅ Strategy included (what pages do you actually need? What should visitors do?)\n✅ I've built dozens of sites — you benefit from that experience\n\nThe real question: What's your time worth? If you can earn £500–£2,000 in the 20–40 hours it takes to build a DIY site, hiring me makes financial sense.\n\nPlus, your website is often the first impression potential customers get. Is \"good enough\" really good enough?",
    },
    {
      question: 'Do you do e-commerce websites?',
      answer:
        "Yes, but with some caveats:\n\nSimple e-commerce (1–10 products): Absolutely. This fits within the Premium package. I can integrate payment processing, product pages, and a simple shopping cart.\n\nMedium e-commerce (10–50 products): Yes, but this typically requires a custom quote (£3,000–£6,000) depending on complexity, inventory management needs, and integrations.\n\nLarge e-commerce (50+ products, complex variants): Probably not the best fit. At this scale, you'd benefit from a specialist e-commerce agency or platform like Shopify Plus.\n\nThe key question: What are you selling, and how complex is the inventory?\n\nBook a free consultation and we'll discuss whether e-commerce is right for your needs, or if there's a simpler solution (like taking enquiries instead of payments).",
    },
    {
      question: 'What if I already have a website?',
      answer:
        "Perfect — most of my clients do. Here's how it works:\n\nRedesign (most common): I'll build your new site from scratch while your old site stays live. When the new site is ready and you're happy with it, we make the switch. Zero downtime.\n\nImprovements to existing site: If you like your current site but want specific improvements, I can work with your existing platform. However, if it's built on outdated technology, a full rebuild is often faster and cheaper than trying to fix legacy issues.\n\nWhat happens to my old site?\n- Your old site stays live until the new one launches\n- I can migrate your content (blog posts, testimonials, etc.)\n- I can set up redirects so your Google rankings aren't affected\n\nSEO concerns? Don't worry — I'll set up proper redirects and make sure your new site is even better optimised than your old one. Most clients see improved Google rankings within 2–3 months.",
    },
    {
      question: 'What makes you different from other web designers?',
      answer:
        "Fair question. Here's what makes Lawsons Creative different:\n\n1. I'm a small business owner building sites for small businesses\nI understand tight budgets, cashflow concerns, and the pressure to generate ROI quickly. Large agencies often don't.\n\n2. Speed without sacrificing quality\nI use modern tools and efficient processes to deliver in 1–2 weeks. Most agencies take 6–12 weeks for the same result.\n\n3. Strategy first, design second\nBeautiful websites that don't generate enquiries are expensive art projects. I focus on what actually drives bookings: clear messaging, trust signals, and easy next steps.\n\n4. Transparent pricing\nYou know the price before we start. No scope creep, no surprise invoices, no \"oh by the way, that'll be extra.\"\n\n5. You work directly with me\nNo account managers, no junior designers, no outsourcing. I design it, I build it, I support it.\n\n6. Built for the long term\nI use modern, maintainable technology. Your site won't be outdated in 6 months, and you won't be locked into expensive ongoing contracts.\n\nI'm not the cheapest option (there are plenty of £200 Fiverr designers), and I'm not the most expensive (£10k agencies exist). I'm the \"Goldilocks\" option for small businesses who want quality without overpaying.",
    },
  ];

  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32 bg-lightgrey" ref={ref}>
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

        <div className="max-w-6xl mx-auto space-y-4">
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
                    <div className="px-6 pb-5 text-slate leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Post-FAQ CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
              Still unsure?
            </h3>
            <p className="text-xl text-slate mb-6 leading-relaxed">
              Book a free consultation to discuss your project. No pressure, no obligation — just an honest conversation about what you need.
            </p>
            <Link
              href="/contact"
              className="btn-secondary inline-block"
            >
              Book a free consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
