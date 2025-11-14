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
            Built by a small business owner, for small business owners
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Hi, I&apos;m Andrew. I started Lawsons Creative because too many great small businesses were stuck with expensive agencies or cheap, ineffective websites. There had to be a better way.
          </p>
        </div>
      </section>

      {/* Photo + Micro Bio */}
      <section className="pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-navy to-blue-900 flex items-center justify-center text-white shadow-xl ring-4 ring-lime/20">
                {/* Placeholder - replace with actual photo when available */}
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">AL</div>
                  <div className="text-sm text-gray-300">Andrew Lawson</div>
                </div>
              </div>
            </div>

            {/* Micro Bio */}
            <div className="md:col-span-2">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
                About Andrew
              </h2>
              <div className="text-lg text-slate leading-relaxed space-y-3">
                <p>
                  I'm Andrew, the person behind Lawsons Creative. I build websites for small service businesses who need results, not just pretty designs.
                </p>
                <p>
                  Based in Kent, I've helped businesses across the UK transform their online presence and generate more enquiries. Every website is built with strategy first, design second — because beautiful sites that don't convert are just expensive art projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pt-12 md:pt-16 pb-20 md:pb-28 lg:pb-32">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Good Fit */}
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
                Who I work best with
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="text-lime text-2xl flex-shrink-0">✅</div>
                  <p className="text-slate text-lg">Want results, not just pretty websites</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-lime text-2xl flex-shrink-0">✅</div>
                  <p className="text-slate text-lg">Value speed and efficiency</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-lime text-2xl flex-shrink-0">✅</div>
                  <p className="text-slate text-lg">Appreciate transparency</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-lime text-2xl flex-shrink-0">✅</div>
                  <p className="text-slate text-lg">Ready to invest properly</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-lime text-2xl flex-shrink-0">✅</div>
                  <p className="text-slate text-lg">Know what they do</p>
                </div>
              </div>
            </div>

            {/* Not a Good Fit */}
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
                Not a good fit?
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-red-500 text-2xl flex-shrink-0">❌</div>
                  <p className="text-slate text-lg">Need a £200 basic site → Try Fiverr</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-red-500 text-2xl flex-shrink-0">❌</div>
                  <p className="text-slate text-lg">Need £50k enterprise platform → Contact an agency</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-lime text-2xl flex-shrink-0">✅</div>
                  <p className="text-slate text-lg font-semibold">Need quality without overpaying → You're in the right place</p>
                </div>
              </div>
              <p className="text-slate leading-relaxed">
                <Link href="/contact" className="text-lime hover:underline font-semibold">Book a free consultation</Link> and let's talk about your project.
              </p>
            </div>
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
