import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Flooring and Resin Company Case Study | Lawsons Creative',
  description: 'How we helped a family-run flooring specialist move from a single Facebook page to a modern, trust-driven website that showcases traditional flooring and specialist resin work.',
};

export default function TFRCOCaseStudy() {
  return (
    <div className="bg-white">
      {/* Hero / Intro */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="inline-block bg-lime text-navy px-4 py-2 rounded-full font-semibold text-sm">
                Trades
              </span>
              <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full font-semibold text-sm">
                Flooring
              </span>
              <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full font-semibold text-sm">
                Resin surfaces
              </span>
              <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full font-semibold text-sm">
                Small business
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              The Flooring and Resin Company
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              A modern web presence for a family-run flooring & resin specialist
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The Flooring and Resin Company are a family-run business in Ashford, Kent, with over 50 years' experience fitting flooring and resin surfaces. They asked us to replace their single Facebook page with a professional website that reflects the quality of their work and makes it easier for customers to request a quote.
            </p>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
            Client overview
          </h2>
          <p className="text-lg text-slate leading-relaxed">
            The Flooring and Resin Company Ltd are a family-run flooring specialist based in Ashford, Kent. George has been fitting floors since the 1970s, working across homes, care settings, schools and commercial spaces. The company combines traditional flooring, such as carpet, vinyl and laminate, with bespoke resin feature surfaces.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
            The challenge
          </h2>
          <p className="text-lg text-slate leading-relaxed mb-4">
            The Flooring and Resin Company relied mainly on a <strong className="text-navy">Facebook page</strong> for their online presence.
          </p>
          <p className="text-lg text-slate leading-relaxed mb-4">
            That was fine for word-of-mouth, but it had limitations:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              'It didn\'t look as professional as their workmanship',
              'It didn\'t clearly explain the full range of flooring and resin services',
              'It made it harder for new customers to understand what they do and how to get a quote',
            ].map((point, idx) => (
              <li key={idx} className="flex items-start">
                <svg
                  className="w-6 h-6 text-navy mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className="text-slate text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Goals */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
            Goals
          </h2>
          <ul className="space-y-4">
            {[
              'Give TFRCO a professional web presence that matches the quality of their work',
              'Make it obvious who they are, what they do and where they operate within seconds',
              'Separate traditional flooring services from resin & feature surfaces, with clear paths to request a quote',
              'Build trust quickly using years of experience, family-run service and real testimonials',
              'Encourage more quote enquiries via form, phone and WhatsApp',
            ].map((goal, idx) => (
              <li key={idx} className="flex items-start">
                <svg
                  className="w-6 h-6 text-lime mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-slate text-lg">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-12 text-center">
            The solution
          </h2>

          {/* 1. Clear, local hero */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-4">
              1. Clear, local hero
            </h3>
            <p className="text-lg text-slate leading-relaxed mb-6">
              The homepage hero immediately tells visitors exactly who they're dealing with and where they work. It features:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Strong headline: "Flooring & resin specialists in Ashford, Kent"',
                'Sub-copy explaining family-run, fully insured, over 50 years\' experience',
                'Two CTAs: "Get a free, no-obligation quote" and "Browse recent projects"',
                'Trust badges underneath (50+ years\' experience, fully insured, family-run)',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate">{point}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Homepage hero</span>
              </div>
              <Image
                src="/images/portfolio/tfrco-hero.png"
                alt="TFRCO homepage hero section"
                width={1200}
                height={800}
                priority
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-slate italic mt-4 text-center">
              New homepage hero clearly explains who they are, where they work, and how to request a quote.
            </p>
          </div>

          {/* 2. Service-led layout */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-4">
              2. Service-led layout
            </h3>
            <p className="text-lg text-slate leading-relaxed mb-6">
              Four clear service tiles turn their offering into an easy-to-understand menu:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Carpet',
                'Vinyl',
                'Laminate & wood',
                'Resin & feature surfaces (marked as FEATURED)',
              ].map((service, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate">{service}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-slate leading-relaxed mb-8">
              Each tile has a simple description and a direct "Get a [service] quote" or "Explore resin surfaces" link. This turns their offering into an easy-to-understand menu where different customer types (care homes, offices, homeowners) can quickly find what they need.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Services</span>
              </div>
              <Image
                src="/images/portfolio/tfrco-four-tiles.png"
                alt="TFRCO service tiles"
                width={1200}
                height={800}
                loading="lazy"
                quality={85}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-slate italic mt-4 text-center">
              Service tiles separate carpet, vinyl, laminate and resin & feature surfaces, each with a clear quote path.
            </p>
          </div>

          {/* 3. Resin as a standout service */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-4">
              3. Resin as a standout service
            </h3>
            <p className="text-lg text-slate leading-relaxed mb-6">
              We created a dedicated page for resin feature surfaces that positions it as a premium, specialist service:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Strong hero ("Stunning resin feature surfaces")',
                '"What is resin flooring?" section',
                'Cards explaining benefits (Custom designs, Seamless & durable, Quick installation)',
                '"Where can resin be used?" section (Kitchens, Bathrooms, Commercial spaces, Feature walls)',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-slate leading-relaxed mb-8">
              Resin is now treated as a premium, specialist service instead of an afterthought. The page educates visitors and inspires them with use-cases.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Resin page</span>
              </div>
              <Image
                src="/images/portfolio/tfrco-resin-page.png"
                alt="TFRCO resin feature surfaces page"
                width={1200}
                height={800}
                loading="lazy"
                quality={85}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-slate italic mt-4 text-center">
              Dedicated resin feature surfaces page positions their resin work as a premium, specialist service.
            </p>
          </div>

          {/* 4. Trust and social proof */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-4">
              4. Trust and social proof
            </h3>
            <p className="text-lg text-slate leading-relaxed mb-6">
              We built confidence for different kinds of buyers with a "Why choose us" grid and real testimonials:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                '50+ years of expertise',
                'Family-run personal service',
                'From single rooms to full refits',
                'Creative resin work',
                'Supply & fit or fit your materials',
                'Fully insured and compliant',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-slate leading-relaxed mb-8">
              Testimonials from homeowners, commercial offices, and care home managers demonstrate real-world results and long-term experience.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Trust & testimonials</span>
              </div>
              <Image
                src="/images/portfolio/tfrco-testimonials.png"
                alt="TFRCO why choose us and testimonials"
                width={1200}
                height={800}
                loading="lazy"
                quality={85}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-slate italic mt-4 text-center">
              Trust content and testimonials highlight decades of experience and real client feedback across home, commercial and care settings.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Visuals */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-6xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-12 text-center">
            Before & after
          </h2>

          {/* Before */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-4">
              Before – a single Facebook page
            </h3>
            <p className="text-lg text-slate leading-relaxed mb-8">
              Before the new site, TFRCO's online presence was a single Facebook page. It worked for existing customers, but it didn't convey the full range of services or the professionalism of the business.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-red-200">
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">Before</span>
              </div>
              <Image
                src="/images/portfolio/tfrco-facebook-page.png"
                alt="TFRCO Facebook page before website"
                width={1200}
                height={800}
                loading="lazy"
                quality={85}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-slate italic mt-4 text-center">
              Before: TFRCO relied on a single Facebook page for enquiries and visibility.
            </p>
          </div>

          {/* After - summary of transformation */}
          <div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-4">
              After – a modern, customer-focused website
            </h3>
            <p className="text-lg text-slate leading-relaxed mb-8">
              The new website provides a professional presence that matches the quality of their work and supports both domestic and commercial projects. See the transformation above in the detailed solution sections.
            </p>
          </div>
        </div>
      </section>

      {/* Results / Early Impact */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
            Results & early impact
          </h2>
          <p className="text-lg text-slate leading-relaxed">
            Since launch, TFRCO's enquiries are more focused, and new customers arrive with a better understanding of the flooring and resin options available. The site gives them a professional presence that matches the quality of their work and supports both domestic and commercial projects.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Want a site like this for your business?
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto">
            We build modern, fast-loading sites for UK service businesses, with clear messaging and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-block"
            >
              Book a free consultation
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-navy font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get a quote by email
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
