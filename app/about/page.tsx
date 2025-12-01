import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X } from 'lucide-react';

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
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
            Built by a small business owner, for small business owners<span className="text-lime">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Hi, I'm Andy. With over 30 years in IT, I launched Lawsons Creative to give small businesses a better choice — high-quality, effective websites without the agency price tag or the "cheap and broken" alternative.
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
                  <div className="text-sm text-gray-300">Andy Lawson</div>
                </div>
              </div>
            </div>

            {/* Micro Bio */}
            <div className="md:col-span-2">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
                About Andy
              </h2>
              <div className="text-lg text-slate leading-relaxed space-y-3">
                <p>
                  We build websites for businesses that need measurable results, not just pretty designs.
                </p>
                <p>
                  Based in Kent, we've helped organisations across the UK transform their online presence and generate more enquiries. Every site is proudly strategy first and design second — because attractive sites that don't convert are just expensive art projects.
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
            Why we started Lawsons Creative
          </h2>
          <div className="prose prose-lg max-w-none text-slate space-y-4 leading-relaxed">
            <p>
              I've always loved building things — whether that's websites, apps, or businesses. But talking with small business owners, the same frustrations kept coming up:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Agencies quoting £10k+ and taking six months</li>
              <li>Freelancers delivering work that looked cheap</li>
              <li>DIY website builders that were overwhelming and time-consuming</li>
              <li>Existing sites labelled "good enough" when they clearly weren't</li>
            </ul>
            <p>
              There was a clear gap: quality, strategy-led websites delivered quickly and fairly priced. That's why we started Lawsons Creative.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32 bg-lightgrey">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl text-navy mb-12 text-center">
            Our approach
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                Business First, Design Second
              </h3>
              <p className="text-slate leading-relaxed">
                We don't just make websites look pretty (though they should). We think about: Who are your customers and what do they need to see? What actions do you want visitors to take? How can design build trust quickly? What's the fastest path from visitor to customer?
              </p>
              <p className="text-slate leading-relaxed mt-3">
                Beautiful design matters, but only if it drives results. <Link href="/portfolio" className="text-lime hover:underline font-semibold">See how this translates into real client results</Link>.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                Fast Doesn't Mean Rushed
              </h3>
              <p className="text-slate leading-relaxed">
                Using modern tools and efficient processes, we deliver in 1–2 weeks without cutting corners. You get strategy, quality design, and websites built to last — just without the agency overhead.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                Transparent and Honest
              </h3>
              <p className="text-slate leading-relaxed">
                No jargon, no upselling, no hidden fees. We tell you exactly what you need (and what you don't). Fair pricing, clear timelines, honest communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work best with */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Good Fit */}
            <div className="card bg-white border-2 border-lime/30">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
                Who we work best with
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-lime flex-shrink-0 mt-0.5">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <p className="text-slate text-base leading-relaxed">Want results, not just pretty websites</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-lime flex-shrink-0 mt-0.5">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <p className="text-slate text-base leading-relaxed">Value speed and efficiency</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-lime flex-shrink-0 mt-0.5">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <p className="text-slate text-base leading-relaxed">Appreciate transparency</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-lime flex-shrink-0 mt-0.5">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <p className="text-slate text-base leading-relaxed">Ready to invest properly</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-lime flex-shrink-0 mt-0.5">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <p className="text-slate text-base leading-relaxed">Know what they do</p>
                </div>
              </div>
            </div>

            {/* Not a Good Fit */}
            <div className="card bg-white">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
                Not a good fit?
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="text-red-500 flex-shrink-0 mt-0.5">
                    <X size={24} strokeWidth={3} />
                  </div>
                  <p className="text-slate text-base leading-relaxed">Need a £200 basic site → Try Fiverr</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-red-500 flex-shrink-0 mt-0.5">
                    <X size={24} strokeWidth={3} />
                  </div>
                  <p className="text-slate text-base leading-relaxed">Need £50k enterprise platform → Contact an agency</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-lime/10 rounded-lg border-2 border-lime/30">
                  <div className="text-lime flex-shrink-0 mt-0.5">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <p className="text-navy text-base font-semibold leading-relaxed">Need quality without overpaying → You're in the right place</p>
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
      <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32 bg-white">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-navy">
            Want to work together?
          </h2>
          <p className="text-xl text-slate mb-8 max-w-3xl mx-auto">
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
