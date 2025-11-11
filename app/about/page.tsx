import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Lawsons Creative',
  description: 'Learn about Lawsons Creative - quality website design for small businesses, built fast without the agency price tag.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="container-custom text-center">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6">
            Built by a Small Business Owner, For Small Business Owners
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Hi, I&apos;m Andrew. I started Lawsons Creative because too many great small businesses were stuck with expensive agencies or cheap, ineffective websites. There had to be a better way.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl text-navy mb-6">
            Why I started this
          </h2>
          <div className="prose prose-lg max-w-none text-slate space-y-4 leading-relaxed">
            <p>
              I've always been drawn to building things—websites, apps, businesses. But as I talked to small business owners, I kept hearing the same frustrations:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Agencies quoted £10k+ and took 6 months</li>
              <li>Fiverr delivered cheap work that looked cheap</li>
              <li>DIY builders were overwhelming and time-consuming</li>
              <li>Existing sites were outdated but "good enough" (they weren't)</li>
            </ul>
            <p>
              I knew there was a gap: quality, strategic websites delivered fast at fair prices. That&apos;s Lawsons Creative.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl text-navy mb-12 text-center">
            My approach
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                Business First, Design Second
              </h3>
              <p className="text-slate leading-relaxed">
                I don&apos;t just make websites look pretty (though they should). I think about: Who are your customers and what do they need to see? What actions do you want visitors to take? How can design build trust quickly? What&apos;s the fastest path from visitor to customer?
              </p>
              <p className="text-slate leading-relaxed mt-3">
                Beautiful design matters, but only if it drives results.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                Fast Doesn't Mean Rushed
              </h3>
              <p className="text-slate leading-relaxed">
                Using modern tools and efficient processes, I deliver in 1-2 weeks without cutting corners. You get strategy, quality design, and websites built to last—just without the agency overhead.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                Transparent and Honest
              </h3>
              <p className="text-slate leading-relaxed">
                No jargon, no upselling, no hidden fees. I tell you exactly what you need (and what you don&apos;t). Fair pricing, clear timelines, honest communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl text-navy mb-6">
            How I work
          </h2>
          <div className="text-slate leading-relaxed space-y-4">
            <p>
              I&apos;m based in London and work with small businesses across the UK. Every project starts with a conversation about your business and goals—not a sales pitch.
            </p>
            <p>
              I handle everything from strategy to design to development to launch. You get one person who understands your business, not a team of rotating account managers.
            </p>
            <p>
              And once your site is live, I&apos;m available for support, updates, and maintenance—no need to find a new developer every time you need a change.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Want to work together?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's chat about your project. No pressure, no obligation—just a conversation.
          </p>
          <Link
            href="/contact"
            className="bg-lime text-navy font-semibold px-8 py-4 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-200 inline-block"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
