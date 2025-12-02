import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services & Pricing – Lawsons Creative | Website Design for Small Businesses',
  description: 'Starter websites from £500, full multi-page sites from £1,295. Website rescue, new business sites, and ongoing support for small UK service businesses.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="container-custom text-center">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 text-white text-balance">
            Simple services, clear pricing<span className="text-lime">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Whether you need to rescue an old site, build a new one, or keep things running smoothly — we've got you covered with honest, transparent pricing.
          </p>
        </div>
      </section>

      {/* Starter Website */}
      <section id="starter-website" className="section-padding bg-white scroll-mt-8">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Service Info */}
            <div>
              <div className="w-16 h-16 bg-lime/20 text-lime rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
                Starter Website<span className="text-lime">.</span>
              </h2>
              <p className="text-lime font-semibold text-lg mb-4">
                A simple one-page site to get you online
              </p>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Just starting out or need somewhere to send people? A clean, professional one-page website that covers the essentials — who you are, what you do, and how to get in touch.
              </p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-navy mb-2">From £500</div>
                <p className="text-sm text-slate italic">*Prices exclude VAT</p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading font-bold text-xl text-navy mb-4">
                  What's included
                </h3>
                <ul className="space-y-3">
                  {[
                    'A clean, single-page scrolling website',
                    'Mobile-friendly, responsive layout',
                    'Clear sections for who you are, what you offer and how to contact you',
                    'Basic contact details and call-to-action',
                    'Basic SEO setup',
                    '1–2 week turnaround',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-lime mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn-primary inline-block">
                Book a free consultation
              </Link>
            </div>

            {/* Right column - ideal for */}
            <div className="space-y-6">
              <div className="bg-lightgrey rounded-xl p-6">
                <h3 className="font-heading font-bold text-xl text-navy mb-4">
                  Perfect if you...
                </h3>
                <ul className="space-y-3 text-slate">
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    You're just starting out and need a simple online presence
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    You mostly rely on word of mouth but want somewhere to send people
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    You don't need a full multi-page site yet
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    You want to test the waters before investing more
                  </li>
                </ul>
              </div>

              <div className="bg-navy text-white rounded-xl p-6">
                <h3 className="font-heading font-bold text-xl mb-4">
                  Ready for something bigger?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  When you're ready for a larger site, our multi-page Website Rescue and New Business Website packages start from £1,295.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Rescue */}
      <section id="website-rescue" className="section-padding bg-lightgrey scroll-mt-8">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Service Info */}
            <div>
              <div className="w-16 h-16 bg-lime/20 text-lime rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
                Website Rescue<span className="text-lime">.</span>
              </h2>
              <p className="text-lime font-semibold text-lg mb-4">
                Modernise your old or DIY site
              </p>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Got a website that's looking tired, awkward on phones, or just not bringing in enquiries? We take what you've got and turn it into something you're actually proud to share.
              </p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-navy mb-2">From £1,295</div>
                <p className="text-sm text-slate italic">*Prices exclude VAT</p>
                <p className="text-sm text-slate mt-2">
                  This is for full multi-page rebuilds of existing sites. Simple one-page starter sites are available from £500.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading font-bold text-xl text-navy mb-4">
                  What's included
                </h3>
                <ul className="space-y-3">
                  {[
                    'Complete redesign for modern devices',
                    'Phone-friendly, fast-loading pages',
                    'Clear calls-to-action that generate enquiries',
                    'Content review and restructure',
                    'Basic SEO setup',
                    'Contact form integration',
                    '2–3 week turnaround',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-lime mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn-primary inline-block">
                Book a free consultation
              </Link>
            </div>

            {/* Right column - ideal for */}
            <div className="space-y-6">
              <div className="bg-lightgrey rounded-xl p-6">
                <h3 className="font-heading font-bold text-xl text-navy mb-4">
                  Perfect if you...
                </h3>
                <ul className="space-y-3 text-slate">
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    Built your site yourself years ago and it's showing its age
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    Had it made by someone who's now unreachable
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    Keep meaning to update it but never get round to it
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    Feel embarrassed sending people to your current site
                  </li>
                </ul>
              </div>

              <div className="bg-navy text-white rounded-xl p-6">
                <h3 className="font-heading font-bold text-xl mb-4">
                  What happens to my old site?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We'll review what you have, keep anything that's working, and rebuild the rest from scratch. You keep your domain, your content gets refreshed, and you end up with something that actually works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Business Website */}
      <section id="new-website" className="section-padding bg-white scroll-mt-8">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Service Info */}
            <div>
              <div className="w-16 h-16 bg-lime/20 text-lime rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
                New Business Website<span className="text-lime">.</span>
              </h2>
              <p className="text-lime font-semibold text-lg mb-4">
                A proper first site for your business
              </p>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Starting out or upgrading from a free template? Get a clean, professional website that makes the right first impression — without the agency price tag.
              </p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-navy mb-2">From £1,295</div>
                <p className="text-sm text-slate italic">*Prices exclude VAT</p>
                <p className="text-sm text-slate mt-2">
                  This is for full multi-page sites (typically up to 5 pages). For a simple one-page starter, see our £500 Starter Website option.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading font-bold text-xl text-navy mb-4">
                  What's included
                </h3>
                <ul className="space-y-3">
                  {[
                    'Custom design tailored to your business',
                    'Mobile-first, responsive layout',
                    'Up to 5 pages (Home, About, Services, Portfolio, Contact)',
                    'Contact form with email notifications',
                    'Google Maps integration',
                    'Basic SEO setup',
                    '2–3 week turnaround',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-lime mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn-primary inline-block">
                Book a free consultation
              </Link>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <div className="bg-lightgrey rounded-xl p-6">
                <h3 className="font-heading font-bold text-xl text-navy mb-4">
                  Perfect if you...
                </h3>
                <ul className="space-y-3 text-slate">
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    Just started your business and need an online presence
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    Currently rely on social media or word of mouth only
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    Want something simple but professional
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">•</span>
                    Need a site you can point customers to with confidence
                  </li>
                </ul>
              </div>

              <div className="bg-navy text-white rounded-xl p-6">
                <h3 className="font-heading font-bold text-xl mb-4">
                  What if I don't have content?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  No problem. Rachel can help with copywriting and content creation as an add-on service. We'll guide you through what's needed and can write it for you if required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Support */}
      <section id="ongoing-support" className="section-padding bg-lightgrey scroll-mt-8">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Service Info */}
            <div>
              <div className="w-16 h-16 bg-lime/20 text-lime rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
                Ongoing Support<span className="text-lime">.</span>
              </h2>
              <p className="text-lime font-semibold text-lg mb-4">
                Keep your site secure and current
              </p>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Your website needs looking after. Updates, security patches, backups, and the occasional tweak — we handle the tech so you can focus on running your business.
              </p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-navy mb-2">From £30/month</div>
                <p className="text-sm text-slate italic">*Prices exclude VAT</p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading font-bold text-xl text-navy mb-4">
                  What's included
                </h3>
                <ul className="space-y-3">
                  {[
                    'Regular security updates and patches',
                    'Automated daily backups',
                    'Performance monitoring',
                    'Small content changes (text, images)',
                    'Priority email support',
                    'Uptime monitoring',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-lime mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn-primary inline-block">
                Book a free consultation
              </Link>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-heading font-bold text-xl text-navy mb-4">
                  Support tiers
                </h3>
                <div className="space-y-4">
                  <div className="bg-lightgrey rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-navy">Essential</span>
                      <span className="text-lime font-bold">£30/month</span>
                    </div>
                    <p className="text-slate text-sm">Security updates, backups, and monitoring. Perfect for simple sites.</p>
                  </div>
                  <div className="bg-lightgrey rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-navy">Standard</span>
                      <span className="text-lime font-bold">£75/month</span>
                    </div>
                    <p className="text-slate text-sm">Everything in Essential, plus 1 hour of content updates per month.</p>
                  </div>
                  <div className="bg-lightgrey rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-navy">Premium</span>
                      <span className="text-lime font-bold">£150/month</span>
                    </div>
                    <p className="text-slate text-sm">Everything in Standard, plus 3 hours of updates and priority support.</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy text-white rounded-xl p-6">
                <h3 className="font-heading font-bold text-xl mb-4">
                  What if we didn't build your site?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  No problem. We're happy to take over maintenance of existing sites. We'll review what you have, let you know if there are any issues, and quote accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section id="add-ons" className="section-padding bg-white scroll-mt-8">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
              Add-on services<span className="text-lime">.</span>
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Need help with content, print materials, or getting found online? Rachel handles the words and design, while we sort the technical SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Copywriting */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-lime/20 text-lime rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                Copywriting
              </h3>
              <p className="text-lime font-semibold text-sm mb-4">
                From £300 per page
              </p>
              <p className="text-slate leading-relaxed mb-4">
                Rachel writes website copy that sounds like you — clear, confident, and professional. No jargon, no fluff.
              </p>
              <ul className="space-y-2 text-slate text-sm">
                <li className="flex items-start">
                  <span className="text-lime mr-2">✓</span>
                  Homepage and key pages
                </li>
                <li className="flex items-start">
                  <span className="text-lime mr-2">✓</span>
                  Service descriptions
                </li>
                <li className="flex items-start">
                  <span className="text-lime mr-2">✓</span>
                  About page content
                </li>
              </ul>
            </div>

            {/* Print & Branding */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-lime/20 text-lime rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                Print & Branding
              </h3>
              <p className="text-lime font-semibold text-sm mb-4">
                Custom pricing
              </p>
              <p className="text-slate leading-relaxed mb-4">
                Matching materials to go with your new site — business cards, flyers, simple logos, and social media graphics.
              </p>
              <ul className="space-y-2 text-slate text-sm">
                <li className="flex items-start">
                  <span className="text-lime mr-2">✓</span>
                  Business cards and stationery
                </li>
                <li className="flex items-start">
                  <span className="text-lime mr-2">✓</span>
                  Flyers and leaflets
                </li>
                <li className="flex items-start">
                  <span className="text-lime mr-2">✓</span>
                  Logo design or refresh
                </li>
              </ul>
            </div>

            {/* Local SEO */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-lime/20 text-lime rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                Local SEO
              </h3>
              <p className="text-lime font-semibold text-sm mb-4">
                From £150/month
              </p>
              <p className="text-slate leading-relaxed mb-4">
                Help your business show up when people search for services in your area. We focus on practical, sustainable improvements.
              </p>
              <ul className="space-y-2 text-slate text-sm">
                <li className="flex items-start">
                  <span className="text-lime mr-2">✓</span>
                  Google Business Profile setup
                </li>
                <li className="flex items-start">
                  <span className="text-lime mr-2">✓</span>
                  Local keyword optimisation
                </li>
                <li className="flex items-start">
                  <span className="text-lime mr-2">✓</span>
                  Monthly reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-12 text-center">
            Common questions<span className="text-lime">.</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-xl text-navy mb-3">
                What affects the final price?
              </h3>
              <p className="text-slate leading-relaxed">
                The main factors are the number of pages, complexity of design, and how much content you already have. We'll give you a fixed quote after our initial chat — no surprises.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-xl text-navy mb-3">
                How long does a project take?
              </h3>
              <p className="text-slate leading-relaxed">
                Most projects take 2–3 weeks from brief to launch. Larger sites or those needing copywriting help may take a bit longer. We'll give you a realistic timeline upfront.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-xl text-navy mb-3">
                What's NOT included?
              </h3>
              <p className="text-slate leading-relaxed mb-3">
                Our build prices cover design and development. Separate costs may include:
              </p>
              <ul className="text-slate space-y-1 ml-4 list-disc list-inside marker:text-lime">
                <li className="pl-2">Domain name (typically £10-15/year)</li>
                <li className="pl-2">Stock photography if needed</li>
                <li className="pl-2">Copywriting if you need help with content</li>
                <li className="pl-2">Ongoing hosting and maintenance (see support packages)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-xl text-navy mb-3">
                Do you offer payment plans?
              </h3>
              <p className="text-slate leading-relaxed">
                Yes. We typically take 50% upfront and 50% on completion. For larger projects, we can discuss alternative arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready to talk<span className="text-lime">?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Book a free 15-minute consultation to discuss your project. No pressure, no obligation — just an honest conversation about what you need.
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
