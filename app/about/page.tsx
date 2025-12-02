import type { Metadata } from 'next';
import Link from 'next/link';
import { localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us – Lawsons Creative | Small Web Studio in Kent',
  description: 'Meet the team behind Lawsons Creative. Andy and Rachel help small UK service businesses modernise their websites with honest, jargon-free web design.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="container-custom text-center">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 text-white text-balance">
            A small web studio that speaks your language<span className="text-lime">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We're Lawsons Creative — a husband-and-wife team in Kent helping small UK service businesses get websites they're actually proud of. No jargon, no upselling, just honest work.
          </p>
        </div>
      </section>

      {/* Who you'll work with */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-12 text-center">
            Who you'll work with<span className="text-lime">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Andy */}
            <div className="bg-lightgrey rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-navy to-blue-900 flex items-center justify-center text-white shadow-lg">
                  <span className="text-2xl font-bold">AL</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-navy">Andy Lawson</h3>
                  <p className="text-lime font-semibold">Founder & Lead Developer</p>
                </div>
              </div>
              <div className="text-slate leading-relaxed space-y-3">
                <p>
                  30+ years in IT, from enterprise systems to building websites for local businesses. Andy handles the technical side — design, development, and making sure everything works properly on phones, tablets, and desktops.
                </p>
                <p>
                  He started Lawsons Creative because he saw too many small businesses stuck with either overpriced agency work or DIY sites that weren't doing them justice.
                </p>
              </div>
            </div>

            {/* Rachel */}
            <div className="bg-lightgrey rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lime to-green-600 flex items-center justify-center text-navy shadow-lg">
                  <span className="text-2xl font-bold">RC</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-navy">Rachel Coppins</h3>
                  <p className="text-lime font-semibold">Content & Brand Lead</p>
                </div>
              </div>
              <div className="text-slate leading-relaxed space-y-3">
                <p>
                  Rachel brings years of experience in content writing, branding, and print design. She makes sure your website sounds like you — clear, confident, and professional.
                </p>
                <p>
                  Need help with copy, a logo refresh, or business cards and flyers to match your new site? Rachel handles all of that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-8 text-center">
            How we work<span className="text-lime">.</span>
          </h2>
          <div className="text-lg text-slate leading-relaxed space-y-4 text-center max-w-3xl mx-auto">
            <p>
              We're a small studio, which means you talk directly to the people doing the work. No account managers, no endless email chains, no waiting days for a reply.
            </p>
            <p>
              Most projects take 2–3 weeks from start to finish. We keep you updated throughout, show you progress as we go, and make sure you're happy before anything goes live.
            </p>
            <p>
              We charge fair, transparent prices — and we'll always tell you if something isn't worth the cost.
            </p>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4 text-center">
            Who we work with<span className="text-lime">.</span>
          </h2>
          <p className="text-xl text-slate text-center mb-12 max-w-3xl mx-auto">
            We specialise in helping small UK service businesses — the kind where the owner answers the phone and reputation matters.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">Trades</h3>
              <p className="text-slate text-sm leading-relaxed">
                Plumbers, electricians, builders, roofers, landscapers, cleaners, and handymen.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">Pet Care</h3>
              <p className="text-slate text-sm leading-relaxed">
                Dog walkers, groomers, pet sitters, trainers, and kennels.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">Local Services</h3>
              <p className="text-slate text-sm leading-relaxed">
                Salons, studios, tutors, therapists, and mobile services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">Professional Services</h3>
              <p className="text-slate text-sm leading-relaxed">
                Consultants, coaches, accountants, and small agencies.
              </p>
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
            "Andy and Rachel made the whole process so easy. No tech jargon, just clear communication and a website I'm genuinely proud to show customers."
          </blockquote>
          <p className="text-lime font-semibold">— Happy Client</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-navy">
            Ready to chat<span className="text-lime">?</span>
          </h2>
          <p className="text-xl text-slate mb-8 max-w-3xl mx-auto">
            Book a free 15-minute call to talk through your project. No pressure, no obligation — just a friendly conversation to see if we're the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Book a free consultation
            </Link>
            <span className="text-slate">or</span>
            <Link
              href="/contact"
              className="text-navy font-semibold hover:text-lime transition-colors"
            >
              Email us your project details →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
