import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Lawsons Creative – Web Design for UK Small Businesses',
  description: 'Learn about Lawsons Creative - quality website design for small businesses, built fast without the agency price tag.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32 bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
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
      <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl text-navy mb-6">
            Why I started this
          </h2>
          <div className="prose prose-lg max-w-none text-slate space-y-4 leading-relaxed">
            <p>
              I've always been drawn to building things. Websites, apps, businesses. But as I talked to small business owners, I kept hearing the same frustrations:
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
      <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32 bg-lightgrey">
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
                Using modern tools and efficient processes, I deliver in 1-2 weeks without cutting corners. You get strategy, quality design, and websites built to last, just without the agency overhead.
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
      <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl text-navy mb-6">
            How I work
          </h2>
          <div className="text-slate leading-relaxed space-y-4">
            <p>
              I&apos;m based in Kent and work with small businesses across the UK. Every project starts with a conversation about your business and goals, not a sales pitch.
            </p>
            <p>
              I handle everything from strategy to design to development to launch. You get one person who understands your business, not a team of rotating account managers.
            </p>
            <p>
              And once your site is live, I&apos;m available for support, updates, and maintenance. No need to find a new developer every time you need a change.
            </p>
          </div>
        </div>
      </section>

      {/* Who I work best with */}
      <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32 bg-lightgrey">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl text-navy mb-8">
            Who I work best with
          </h2>

          <p className="text-slate text-lg mb-6 leading-relaxed">
            Lawsons Creative is built for UK service businesses who:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-lime text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-heading font-bold text-lg text-navy mb-1">Want results, not just pretty websites</h3>
                <p className="text-slate leading-relaxed">You care about bookings, enquiries, and revenue — not just &quot;looking good online.&quot;</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-lime text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-heading font-bold text-lg text-navy mb-1">Value speed and efficiency</h3>
                <p className="text-slate leading-relaxed">You need your website done in weeks, not months. You don&apos;t have time for endless meetings and revisions.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-lime text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-heading font-bold text-lg text-navy mb-1">Appreciate transparency</h3>
                <p className="text-slate leading-relaxed">You want clear pricing, honest timelines, and straightforward communication. No jargon, no surprises.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-lime text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-heading font-bold text-lg text-navy mb-1">Are ready to invest properly</h3>
                <p className="text-slate leading-relaxed">You understand that professional websites cost more than £200, but you don&apos;t want to pay agency prices (£10k+) either.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-lime text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-heading font-bold text-lg text-navy mb-1">Know what they do (even if they can&apos;t explain it yet)</h3>
                <p className="text-slate leading-relaxed">You&apos;re established enough to know your services, your customers, and your value. I&apos;ll help you articulate it clearly.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-navy">
            <p className="text-slate leading-relaxed mb-4">
              <strong className="text-navy">Not a good fit?</strong> That&apos;s okay too. If you need a £200 basic site, there are great Fiverr designers. If you need a £50k enterprise platform, there are excellent agencies. I&apos;m the middle ground — quality without overpaying.
            </p>
            <p className="text-slate leading-relaxed">
              <strong className="text-navy">Sound like you?</strong> <Link href="/contact" className="text-lime hover:underline font-semibold">Book a free consultation</Link> and let&apos;s talk about your project.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32 bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Want to work together?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's chat about your project. No pressure, no obligation, just a conversation.
          </p>
          <Link
            href="/contact"
            className="bg-lime text-navy font-semibold px-8 py-4 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-200 inline-block"
          >
            Book a free consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
