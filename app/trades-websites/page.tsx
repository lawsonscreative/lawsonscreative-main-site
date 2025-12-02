import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { tradesWebsiteSchema, localBusinessSchema, tradesWebsiteFaqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Websites for Tradespeople | Plumbers, Electricians, Builders | Lawsons Creative',
  description: 'Professional websites for UK trades businesses. We help plumbers, electricians, builders, and other tradespeople get more local enquiries with modern, phone-friendly websites.',
};

export default function TradesWebsitesPage() {
  return (
    <div className="bg-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tradesWebsiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tradesWebsiteFaqSchema) }}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="container-custom text-center">
          <div className="inline-block bg-lime/20 text-lime px-4 py-2 rounded-full font-semibold text-sm mb-6">
            Websites for Trades
          </div>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 text-white text-balance">
            Get more local work with a website that works as hard as you do<span className="text-lime">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We build professional, phone-friendly websites for plumbers, electricians, builders, and other trades. No jargon, no nonsense — just a site that brings in enquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact" className="btn-primary">
              Book a free consultation
            </Link>
            <Link href="/contact" className="text-white font-semibold hover:text-lime transition-colors flex items-center justify-center gap-2">
              Or email us your details
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-5xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-8 text-center">
            Sound familiar<span className="text-lime">?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <p className="text-slate leading-relaxed">
                "I've got a Facebook page but customers keep asking for a proper website."
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <p className="text-slate leading-relaxed">
                "My nephew built me a site years ago. It looks dated and I don't know how to update it."
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <p className="text-slate leading-relaxed">
                "I'm getting work through word of mouth, but I want to grow and need to be found online."
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
                </svg>
              </div>
              <p className="text-slate leading-relaxed">
                "I spent hours trying to build something on Wix but gave up — it just looked rubbish."
              </p>
            </div>
          </div>
          <p className="text-center text-xl text-navy font-semibold mt-8">
            If any of this sounds like you, we can help.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4 text-center">
            Websites built for trades<span className="text-lime">.</span>
          </h2>
          <p className="text-xl text-slate text-center mb-12 max-w-3xl mx-auto">
            We understand what trades businesses need — a clean, professional site that shows what you do, where you work, and how to get in touch. Nothing fancy, just effective.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:text-center">
              <div className="flex items-center gap-3 mb-2 md:block">
                <div className="w-16 h-16 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-4">
                  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-navy md:mb-2">Phone-Friendly</h3>
              </div>
              <p className="text-slate">
                Most customers find you on their phone. Your site needs to work perfectly on mobile.
              </p>
            </div>
            <div className="md:text-center">
              <div className="flex items-center gap-3 mb-2 md:block">
                <div className="w-16 h-16 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-4">
                  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-navy md:mb-2">Local Focus</h3>
              </div>
              <p className="text-slate">
                Clear service area info and local SEO so customers in your patch can find you.
              </p>
            </div>
            <div className="md:text-center">
              <div className="flex items-center gap-3 mb-2 md:block">
                <div className="w-16 h-16 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-4">
                  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-navy md:mb-2">Easy Contact</h3>
              </div>
              <p className="text-slate">
                Click-to-call buttons and simple contact forms — so customers can reach you without fuss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-lime text-navy px-4 py-2 rounded-full font-semibold text-sm mb-4">
                Case Study
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
                The Flooring and Resin Company
              </h2>
              <p className="text-slate leading-relaxed mb-6">
                Family-run flooring specialists in Kent. They had a Facebook page but needed a proper website to showcase their work and separate their specialist resin services.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-slate">
                  <svg className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Modern, professional design
                </li>
                <li className="flex items-start text-slate">
                  <svg className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Clear service breakdown
                </li>
                <li className="flex items-start text-slate">
                  <svg className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  More focused enquiries
                </li>
              </ul>
              <Link href="/portfolio" className="inline-flex items-center text-navy font-semibold hover:text-lime transition-colors">
                See the full case study
                <svg className="w-4 h-4 ml-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/portfolio/tfrco-new-site.webp"
                  alt="The Flooring and Resin Company website"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom max-w-4xl text-center">
          <svg className="w-12 h-12 text-lime mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-heading leading-relaxed mb-6">
            "Lawsons Creative transformed our brand and online presence. The team were collaborative, responsive and delivered everything on time. We could not be happier with the result."
          </blockquote>
          <p className="text-lime font-semibold">— Katie Townsend, The Flooring and Resin Company</p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-8 text-center">
            Trades we work with<span className="text-lime">.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Plumbers',
              'Electricians',
              'Builders',
              'Roofers',
              'Landscapers',
              'Cleaners',
              'Handymen',
              'Decorators',
              'Flooring specialists',
              'Plasterers',
              'Tilers',
              'Kitchen fitters',
            ].map((trade) => (
              <div key={trade} className="bg-lightgrey rounded-lg p-4 text-center">
                <span className="text-navy font-semibold">{trade}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate mt-8">
            Don't see your trade? <Link href="/contact" className="text-lime font-semibold hover:underline">Get in touch</Link> — we work with all kinds of trades businesses.
          </p>
        </div>
      </section>

      {/* Areas we serve */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
            Areas we serve<span className="text-lime">.</span>
          </h2>
          <p className="text-xl text-slate mb-8">
            Based in Kent, working with tradespeople across the UK.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Kent', 'London', 'Sussex', 'Surrey', 'Essex', 'UK-wide'].map((area) => (
              <span
                key={area}
                className="bg-navy text-white px-5 py-2.5 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
            Simple, fair pricing<span className="text-lime">.</span>
          </h2>
          <p className="text-xl text-slate mb-8">
            Most trades websites cost between £1,295 and £1,795. You'll get a fixed quote before we start — no surprises.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-heading font-bold text-2xl text-navy mb-2">What's typically included</h3>
            <p className="text-slate mb-6">For a complete, professional trades website</p>
            <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
              {[
                'Mobile-friendly design',
                'Up to 5 pages',
                'Contact form with email notifications',
                'Click-to-call buttons',
                'Google Maps integration',
                'Basic SEO setup',
                '2–3 week turnaround',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/services" className="text-navy font-semibold hover:text-lime transition-colors">
              See all services and pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-8 text-center">
            Common questions<span className="text-lime">.</span>
          </h2>
          <div className="space-y-4">
            <div className="bg-lightgrey rounded-xl p-6">
              <h3 className="font-semibold text-lg text-navy mb-2">
                Do you only work with trades in Kent?
              </h3>
              <p className="text-slate leading-relaxed">
                No — we're based in Kent but work with tradespeople across the UK. Most of our communication happens over email and video calls, so location isn't a barrier.
              </p>
            </div>
            <div className="bg-lightgrey rounded-xl p-6">
              <h3 className="font-semibold text-lg text-navy mb-2">
                Can you work with my existing domain and email?
              </h3>
              <p className="text-slate leading-relaxed">
                Absolutely. If you already have a domain name and email setup, we can build your new site to work with them. We'll handle the technical side of connecting everything.
              </p>
            </div>
            <div className="bg-lightgrey rounded-xl p-6">
              <h3 className="font-semibold text-lg text-navy mb-2">
                What do you need from me to get started?
              </h3>
              <p className="text-slate leading-relaxed">
                Just some basic info about your business — what services you offer, where you work, and any photos of your work. Don't worry if you don't have much; we'll guide you through it.
              </p>
            </div>
            <div className="bg-lightgrey rounded-xl p-6">
              <h3 className="font-semibold text-lg text-navy mb-2">
                I'm not very tech-savvy — is that a problem?
              </h3>
              <p className="text-slate leading-relaxed">
                Not at all. We handle all the technical stuff and explain everything in plain English. You focus on your trade; we'll sort the website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready to get started<span className="text-lime">?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Book a free 15-minute chat to talk about your business and what you need. No pressure, no jargon — just a straightforward conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-primary">
              Book a free consultation
            </Link>
            <span className="text-gray-400">or</span>
            <Link href="/contact" className="text-white font-semibold hover:text-lime transition-colors">
              Email us your project details →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
