import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Portfolio | Lawsons Creative',
  description: 'View our portfolio of stunning, effective websites for small service businesses across the UK.',
};

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="container-custom text-center">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6">
            Our work speaks for itself
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Real websites for real businesses. See how we've helped small service businesses grow with modern, effective web design.
          </p>
        </div>
      </section>

      {/* Case Study - Graceful Pet Care */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Project Header */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-block bg-lime text-navy px-4 py-2 rounded-full font-semibold text-sm">
                  Pet Care Services
                </span>
                <span className="text-slate text-sm">·</span>
                <span className="inline-block bg-navy/5 text-navy px-4 py-2 rounded-full font-semibold text-sm">
                  Full Website Redesign
                </span>
              </div>
              <h2 className="font-heading font-bold text-5xl md:text-6xl text-navy mb-4">
                Graceful Pet Care
              </h2>
              <p className="text-xl text-slate">
                Transforming an outdated website into a modern, trust-focused platform that converts visitors into bookings.
              </p>
            </div>

            {/* Before/After Comparison */}
            <div className="bg-lightgrey rounded-2xl p-8 mb-12">
              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                  Before & After
                </h3>
                <p className="text-slate">See the transformation</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="relative mb-6">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/portfolio/graceful-petcare-before.png"
                      alt="Graceful Pet Care website before redesign"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="inline-block bg-red-100 text-red-700 px-5 py-2 rounded-full text-base font-bold shadow-lg">
                      Before
                    </span>
                  </div>
                </div>
                {/* After */}
                <div className="relative mb-6">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg ring-2 ring-lime">
                    <Image
                      src="/images/portfolio/graceful-petcare-after.png"
                      alt="Graceful Pet Care website after redesign"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="inline-block bg-lime text-navy px-5 py-2 rounded-full text-base font-bold shadow-lg">
                      After
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Left Column */}
              <div>
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-2xl text-navy mb-3">
                    Project overview
                  </h3>
                  <div className="space-y-2 text-slate">
                    <div><strong className="text-navy">Client:</strong> Graceful Pet Care</div>
                    <div><strong className="text-navy">Industry:</strong> Pet Care Services</div>
                    <div><strong className="text-navy">Project Type:</strong> Full Website Redesign</div>
                    <div><strong className="text-navy">Timeline:</strong> 2 weeks</div>
                    <div><strong className="text-navy">Package:</strong> Professional</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-heading font-bold text-2xl text-navy mb-3">
                    The challenge
                  </h3>
                  <p className="text-slate leading-relaxed">
                    Graceful Pet Care had an outdated website that wasn't converting visitors into bookings. The design felt dated, trust signals were weak, and the mobile experience was poor. Pet owners couldn't easily find information or get in touch, resulting in lost business opportunities.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl text-navy mb-3">
                    Our solution
                  </h3>
                  <p className="text-slate leading-relaxed mb-4">
                    We redesigned the website with a mobile-friendly approach, focusing on building trust through emotional imagery, clear service descriptions, and prominent testimonials. We made it effortless for pet owners to understand the services and book consultations.
                  </p>
                  <p className="text-slate leading-relaxed">
                    The new design uses warm, professional colors and features real pet photos to create an emotional connection. Every page guides visitors toward taking action, with multiple clear CTAs throughout.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-2xl text-navy mb-3">
                    Key features
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Mobile-friendly responsive design',
                      'Emotional pet imagery throughout',
                      'Clear service breakdown with pricing guidance',
                      'Testimonials carousel with client stories',
                      'Easy-to-use contact form',
                      'Google Maps integration for service area',
                      'Fast loading speed (< 2s)',
                      'SEO optimisation for local searches',
                    ].map((feature, idx) => (
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
                        <span className="text-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-lightgrey rounded-xl p-6">
                  <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                    The results
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-lime mb-1">35%</div>
                      <div className="text-slate">Increase in enquiries in first month</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-lime mb-1">80%</div>
                      <div className="text-slate">Increase in mobile bookings</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-lime mb-1">2x better</div>
                      <div className="text-slate">Professional, trustworthy appearance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-navy text-white rounded-2xl p-8 md:p-12 mb-12">
              <div className="flex items-start mb-6">
                <svg
                  className="w-12 h-12 text-lime flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-xl italic leading-relaxed mb-6">
                "Working with Lawsons Creative was effortless. They took our dated website and transformed it into something that truly represents our business. We've seen a significant increase in enquiries since launch, and customers regularly compliment how professional we look online."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center text-navy font-bold text-xl mr-4">
                  G
                </div>
                <div>
                  <div className="font-semibold">Grace Williams</div>
                  <div className="text-gray-300 text-sm">Founder, Graceful Pet Care</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://gracefulpetcare.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center btn-primary mb-6"
              >
                View live site
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More projects coming soon */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
            More projects coming soon
          </h2>
          <p className="text-xl text-slate mb-8 max-w-3xl mx-auto">
            We&apos;re currently building stunning, effective websites across industries. From fitness coaches to wedding photographers, car detailers to accountants. Check back soon to see more transformations.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Start your project
          </Link>
        </div>
      </section>
    </div>
  );
}
