import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { petCareWebsiteSchema, localBusinessSchema, petCareWebsiteFaqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Websites for Pet Care Businesses | Dog Walkers, Groomers, Pet Sitters | Lawsons Creative',
  description: 'Professional websites for UK pet care businesses. We help dog walkers, groomers, pet sitters, and trainers build trust and get more bookings with modern, friendly websites.',
};

export default function PetCareWebsitesPage() {
  return (
    <div className="bg-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(petCareWebsiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(petCareWebsiteFaqSchema) }}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="container-custom text-center">
          <div className="inline-block bg-lime/20 text-lime px-4 py-2 rounded-full font-semibold text-sm mb-6">
            Websites for Pet Care
          </div>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 text-white text-balance">
            Websites that help pet owners trust you with their furry friends<span className="text-lime">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We build warm, professional websites for dog walkers, groomers, pet sitters, and trainers. Because pet owners need to know their pets are in safe hands.
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
                  <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <p className="text-slate leading-relaxed">
                "I'm getting enquiries through Instagram and word of mouth, but I need somewhere to send people with proper info."
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <p className="text-slate leading-relaxed">
                "My current site looks dated. It doesn't show how caring and professional we really are."
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <p className="text-slate leading-relaxed">
                "Pet owners need to trust me with their animals. My website doesn't build that trust at all."
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <p className="text-slate leading-relaxed">
                "I'm too busy with the animals to figure out websites. I just need someone to sort it for me."
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
            Websites that build trust<span className="text-lime">.</span>
          </h2>
          <p className="text-xl text-slate text-center mb-12 max-w-3xl mx-auto">
            Pet owners are trusting you with family members. Your website needs to show you're professional, caring, and experienced. We design sites that do exactly that.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:text-center">
              <div className="flex items-center gap-3 mb-2 md:block">
                <div className="w-16 h-16 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-4">
                  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-navy md:mb-2">Warm & Friendly</h3>
              </div>
              <p className="text-slate">
                Professional but approachable design that shows you genuinely care about the animals.
              </p>
            </div>
            <div className="md:text-center">
              <div className="flex items-center gap-3 mb-2 md:block">
                <div className="w-16 h-16 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-4">
                  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-navy md:mb-2">Trust Signals</h3>
              </div>
              <p className="text-slate">
                Qualifications, insurance details, testimonials, and about sections that build confidence.
              </p>
            </div>
            <div className="md:text-center">
              <div className="flex items-center gap-3 mb-2 md:block">
                <div className="w-16 h-16 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-4">
                  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-navy md:mb-2">Easy Booking</h3>
              </div>
              <p className="text-slate">
                Simple contact forms, booking integrations, and clear service info to convert visitors to clients.
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
                Graceful Pet Care
              </h2>
              <p className="text-slate leading-relaxed mb-6">
                Local pet care service offering dog walking, pet sitting, and home visits. Their old website wasn't converting visitors into bookings and didn't reflect their caring, professional service.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-slate">
                  <svg className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Significant increase in enquiries
                </li>
                <li className="flex items-start text-slate">
                  <svg className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Better mobile experience
                </li>
                <li className="flex items-start text-slate">
                  <svg className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Professional, trustworthy appearance
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
                  src="/images/portfolio/graceful-petcare-after.png"
                  alt="Graceful Pet Care website"
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
            "Working with Lawsons Creative was effortless. They took our dated website and transformed it into something that truly represents our business. We've seen a significant increase in enquiries since launch."
          </blockquote>
          <p className="text-lime font-semibold">— Grace Williams, Graceful Pet Care</p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-8 text-center">
            Pet care businesses we work with<span className="text-lime">.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Dog walkers',
              'Pet sitters',
              'Groomers',
              'Dog trainers',
              'Kennels & catteries',
              'Pet photographers',
              'Mobile groomers',
              'Puppy classes',
            ].map((business) => (
              <div key={business} className="bg-lightgrey rounded-lg p-4 text-center">
                <span className="text-navy font-semibold">{business}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate mt-8">
            Don't see your business type? <Link href="/contact" className="text-lime font-semibold hover:underline">Get in touch</Link> — we work with all kinds of pet care businesses.
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
            Based in Kent, working with pet care businesses across the UK.
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
            Most pet care websites cost between £1,295 and £1,795. You'll get a fixed quote before we start — no surprises.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-heading font-bold text-2xl text-navy mb-2">What's typically included</h3>
            <p className="text-slate mb-6">For a complete, professional pet care website</p>
            <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
              {[
                'Warm, friendly design',
                'Up to 5 pages',
                'Service descriptions and pricing',
                'Contact form with email notifications',
                'Testimonials section',
                'Gallery for pet photos',
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
                Can you show my qualifications and insurance clearly?
              </h3>
              <p className="text-slate leading-relaxed">
                Absolutely. We'll create a dedicated section for your qualifications, insurance, and any certifications. Pet owners want to see you're properly trained and insured — we make that easy to find.
              </p>
            </div>
            <div className="bg-lightgrey rounded-xl p-6">
              <h3 className="font-semibold text-lg text-navy mb-2">
                Can you integrate my existing booking system?
              </h3>
              <p className="text-slate leading-relaxed">
                Yes. If you use a booking tool like Time To Pet, PetSitter Plus, or similar, we can link to it or embed booking widgets. We'll work with whatever system you're already comfortable with.
              </p>
            </div>
            <div className="bg-lightgrey rounded-xl p-6">
              <h3 className="font-semibold text-lg text-navy mb-2">
                Can I update photos and prices myself?
              </h3>
              <p className="text-slate leading-relaxed">
                If you'd like to manage updates yourself, we can set that up. Otherwise, small changes are included in our support packages — just email us and we'll sort it.
              </p>
            </div>
            <div className="bg-lightgrey rounded-xl p-6">
              <h3 className="font-semibold text-lg text-navy mb-2">
                Do you only work with pet care businesses in Kent?
              </h3>
              <p className="text-slate leading-relaxed">
                No — we're based in Kent but work with pet care businesses across the UK. Most of our communication is by email and video call, so distance isn't an issue.
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
            Book a free 15-minute chat to talk about your business and what you need. No pressure, no jargon — just a friendly conversation.
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
