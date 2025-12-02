import type { Metadata } from 'next';
import Link from 'next/link';
import { localBusinessSchema, serviceSchemas, faqSchema } from '@/lib/schema';
import MobileStickyBar from '@/components/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Services & Pricing – Lawsons Creative | Website Design for Small Businesses',
  description: 'Starter websites from £500, full multi-page sites from £1,295. Website rescue, new business sites, and ongoing support for small UK service businesses.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Service Schemas */}
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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

      {/* Package Cards Grid */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Starter Website Card */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-4 md:block">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mb-6">
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-navy md:mb-2">
                    Starter Website
                  </h2>
                  <p className="text-slate text-sm md:hidden">
                    A simple one-page site to get you online
                  </p>
                </div>
              </div>
              <p className="text-slate text-sm mb-4 hidden md:block">
                A simple one-page site to get you online
              </p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-navy">From £500</div>
                <p className="text-xs text-slate italic">*Prices exclude VAT</p>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {[
                  'Single-page scrolling website',
                  'Mobile-friendly layout',
                  'Contact details & CTA',
                  'Basic SEO setup',
                  '1–2 week turnaround',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg className="w-4 h-4 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-center w-full">
                Get started
              </Link>
            </div>

            {/* Website Rescue Card - Highlighted */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-lime flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-lime text-navy px-4 py-1 rounded-full text-sm font-bold">
                  Most popular
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4 md:block">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mb-6">
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-navy md:mb-2">
                    Website Rescue
                  </h2>
                  <p className="text-slate text-sm md:hidden">
                    Modernise your old or DIY site
                  </p>
                </div>
              </div>
              <p className="text-slate text-sm mb-4 hidden md:block">
                Modernise your old or DIY site
              </p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-navy">From £1,295</div>
                <p className="text-xs text-slate italic">*Prices exclude VAT</p>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {[
                  'Complete redesign for modern devices',
                  'Phone-friendly, fast-loading',
                  'Clear calls-to-action',
                  'Content review & restructure',
                  'Contact form integration',
                  '2–3 week turnaround',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg className="w-4 h-4 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-center w-full">
                Get started
              </Link>
            </div>

            {/* New Business Website Card */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-4 md:block">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mb-6">
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-navy md:mb-2">
                    New Business Website
                  </h2>
                  <p className="text-slate text-sm md:hidden">
                    A proper first site for your business
                  </p>
                </div>
              </div>
              <p className="text-slate text-sm mb-4 hidden md:block">
                A proper first site for your business
              </p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-navy">From £1,295</div>
                <p className="text-xs text-slate italic">*Prices exclude VAT</p>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {[
                  'Custom design for your business',
                  'Mobile-first, responsive',
                  'Up to 5 pages',
                  'Contact form & Google Maps',
                  'Basic SEO setup',
                  '2–3 week turnaround',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg className="w-4 h-4 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-center w-full">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details - Expandable sections */}
      <section id="starter-website" className="section-padding bg-white scroll-mt-8">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
              Package details<span className="text-lime">.</span>
            </h2>
            <p className="text-xl text-slate">
              Everything you need to know about each service
            </p>
          </div>

          {/* Starter Website Details */}
          <div className="bg-lightgrey rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-navy">Starter Website</h3>
                <p className="text-lime font-semibold">From £500</p>
              </div>
            </div>
            <p className="text-slate leading-relaxed mb-6">
              Just starting out or need somewhere to send people? A clean, professional one-page website that covers the essentials — who you are, what you do, and how to get in touch.
            </p>
            <h4 className="font-bold text-navy mb-3">Perfect if you...</h4>
            <ul className="space-y-2 text-slate text-sm mb-6">
              <li className="flex items-start"><span className="text-lime mr-2">•</span>You're just starting out and need a simple online presence</li>
              <li className="flex items-start"><span className="text-lime mr-2">•</span>You mostly rely on word of mouth but want somewhere to send people</li>
              <li className="flex items-start"><span className="text-lime mr-2">•</span>You don't need a full multi-page site yet</li>
              <li className="flex items-start"><span className="text-lime mr-2">•</span>You want to test the waters before investing more</li>
            </ul>
            <p className="text-slate text-sm flex items-start">
              <svg className="w-4 h-4 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
              Ready for something bigger? Our multi-page packages start from £1,295.
            </p>
          </div>

          {/* Website Rescue Details */}
          <div id="website-rescue" className="bg-lightgrey rounded-2xl p-8 mb-8 scroll-mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-navy">Website Rescue</h3>
                <p className="text-lime font-semibold">From £1,295</p>
              </div>
            </div>
            <p className="text-slate leading-relaxed mb-6">
              Got a website that's looking tired, awkward on phones, or just not bringing in enquiries? We take what you've got and turn it into something you're actually proud to share.
            </p>
            <h4 className="font-bold text-navy mb-3">Perfect if you...</h4>
            <ul className="space-y-2 text-slate text-sm mb-6">
              <li className="flex items-start"><span className="text-lime mr-2">•</span>Built your site yourself years ago and it's showing its age</li>
              <li className="flex items-start"><span className="text-lime mr-2">•</span>Had it made by someone who's now unreachable</li>
              <li className="flex items-start"><span className="text-lime mr-2">•</span>Keep meaning to update it but never get round to it</li>
              <li className="flex items-start"><span className="text-lime mr-2">•</span>Feel embarrassed sending people to your current site</li>
            </ul>
            <p className="text-slate text-sm flex items-start">
              <svg className="w-4 h-4 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              We keep what's working and rebuild the rest. Your domain stays, your content gets refreshed.
            </p>
          </div>

          {/* New Business Website Details */}
          <div id="new-website" className="bg-lightgrey rounded-2xl p-8 scroll-mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-lime/20 text-lime rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-navy">New Business Website</h3>
                <p className="text-lime font-semibold">From £1,295</p>
              </div>
            </div>
            <p className="text-slate leading-relaxed mb-6">
              Starting out or upgrading from a free template? Get a clean, professional website that makes the right first impression — without the agency price tag.
            </p>
            <h4 className="font-bold text-navy mb-3">Perfect if you...</h4>
            <ul className="space-y-2 text-slate text-sm mb-6">
              <li className="flex items-start"><span className="text-lime mr-2">•</span>Just started your business and need an online presence</li>
              <li className="flex items-start"><span className="text-lime mr-2">•</span>Currently rely on social media or word of mouth only</li>
              <li className="flex items-start"><span className="text-lime mr-2">•</span>Want something simple but professional</li>
              <li className="flex items-start"><span className="text-lime mr-2">•</span>Need a site you can point customers to with confidence</li>
            </ul>
            <p className="text-slate text-sm flex items-start">
              <svg className="w-4 h-4 text-lime mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
              Don't have content? Rachel can help with copywriting as an add-on.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Support */}
      <section id="ongoing-support" className="section-padding bg-lightgrey scroll-mt-8">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-lime/20 text-lime rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="font-heading font-bold text-3xl text-navy">Ongoing Support</h2>
                  <p className="text-lime font-semibold">Keep your site secure and current</p>
                </div>
              </div>
            </div>

            <p className="text-slate text-lg leading-relaxed mb-8">
              Your website needs looking after. Updates, security patches, backups, and the occasional tweak — we handle the tech so you can focus on running your business.
            </p>

            {/* Support Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-lightgrey rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-bold text-navy text-lg">Essential</span>
                  <span className="text-lime font-bold text-xl">£30<span className="text-sm font-normal text-slate">/mo</span></span>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-4">Security updates, backups, and monitoring. Perfect for simple sites.</p>
                <ul className="space-y-1 text-xs text-slate">
                  <li className="flex items-center"><span className="text-lime mr-2">✓</span>Security updates</li>
                  <li className="flex items-center"><span className="text-lime mr-2">✓</span>Daily backups</li>
                  <li className="flex items-center"><span className="text-lime mr-2">✓</span>Uptime monitoring</li>
                </ul>
              </div>
              <div className="bg-lightgrey rounded-xl p-6 ring-2 ring-lime relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-lime text-navy px-3 py-1 rounded-full text-xs font-bold">Most popular</span>
                </div>
                <div className="flex justify-between items-start mb-3">
                  <span className="font-bold text-navy text-lg">Standard</span>
                  <span className="text-lime font-bold text-xl">£75<span className="text-sm font-normal text-slate">/mo</span></span>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-4">Everything in Essential, plus 1 hour of content updates per month.</p>
                <ul className="space-y-1 text-xs text-slate">
                  <li className="flex items-center"><span className="text-lime mr-2">✓</span>Everything in Essential</li>
                  <li className="flex items-center"><span className="text-lime mr-2">✓</span>1 hour content updates</li>
                  <li className="flex items-center"><span className="text-lime mr-2">✓</span>Performance monitoring</li>
                </ul>
              </div>
              <div className="bg-lightgrey rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-bold text-navy text-lg">Premium</span>
                  <span className="text-lime font-bold text-xl">£150<span className="text-sm font-normal text-slate">/mo</span></span>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-4">Everything in Standard, plus 3 hours of updates and priority support.</p>
                <ul className="space-y-1 text-xs text-slate">
                  <li className="flex items-center"><span className="text-lime mr-2">✓</span>Everything in Standard</li>
                  <li className="flex items-center"><span className="text-lime mr-2">✓</span>3 hours content updates</li>
                  <li className="flex items-center"><span className="text-lime mr-2">✓</span>Priority support</li>
                </ul>
              </div>
            </div>

            <p className="text-slate text-sm text-center mt-6 flex items-center justify-center">
              <svg className="w-4 h-4 text-lime mr-2 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              We didn't build your site? No problem — we're happy to take over maintenance. <Link href="/contact" className="text-lime hover:underline font-semibold ml-1">Get in touch</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section id="add-ons" className="section-padding bg-white scroll-mt-8">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
              Add-on services<span className="text-lime">.</span>
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Need help with content, print materials, or getting found online? Rachel handles the words and design, while we sort the technical SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Copywriting */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-lime/50 transition-all">
              <div className="flex items-center gap-3 mb-3 md:block">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-navy md:mb-1">
                    Copywriting
                  </h3>
                  <p className="text-lime font-semibold text-sm md:hidden">
                    From £300 per page
                  </p>
                </div>
              </div>
              <p className="text-lime font-semibold text-sm mb-3 hidden md:block">
                From £300 per page
              </p>
              <p className="text-slate text-sm leading-relaxed mb-4">
                Rachel writes website copy that sounds like you — clear, confident, and professional. No jargon, no fluff.
              </p>
              <ul className="space-y-1 text-slate text-xs">
                <li className="flex items-center"><span className="text-lime mr-2">✓</span>Homepage and key pages</li>
                <li className="flex items-center"><span className="text-lime mr-2">✓</span>Service descriptions</li>
                <li className="flex items-center"><span className="text-lime mr-2">✓</span>About page content</li>
              </ul>
            </div>

            {/* Print & Branding */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-lime/50 transition-all">
              <div className="flex items-center gap-3 mb-3 md:block">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-navy md:mb-1">
                    Print & Branding
                  </h3>
                  <p className="text-lime font-semibold text-sm md:hidden">
                    Custom pricing
                  </p>
                </div>
              </div>
              <p className="text-lime font-semibold text-sm mb-3 hidden md:block">
                Custom pricing
              </p>
              <p className="text-slate text-sm leading-relaxed mb-4">
                Matching materials to go with your new site — business cards, flyers, simple logos, and social media graphics.
              </p>
              <ul className="space-y-1 text-slate text-xs">
                <li className="flex items-center"><span className="text-lime mr-2">✓</span>Business cards & stationery</li>
                <li className="flex items-center"><span className="text-lime mr-2">✓</span>Flyers and leaflets</li>
                <li className="flex items-center"><span className="text-lime mr-2">✓</span>Logo design or refresh</li>
              </ul>
            </div>

            {/* Local SEO */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-lime/50 transition-all">
              <div className="flex items-center gap-3 mb-3 md:block">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-lime/20 text-lime rounded-xl flex items-center justify-center flex-shrink-0 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-navy md:mb-1">
                    Local SEO
                  </h3>
                  <p className="text-lime font-semibold text-sm md:hidden">
                    From £150/month
                  </p>
                </div>
              </div>
              <p className="text-lime font-semibold text-sm mb-3 hidden md:block">
                From £150/month
              </p>
              <p className="text-slate text-sm leading-relaxed mb-4">
                Help your business show up when people search for services in your area. Practical, sustainable improvements.
              </p>
              <ul className="space-y-1 text-slate text-xs">
                <li className="flex items-center"><span className="text-lime mr-2">✓</span>Google Business Profile</li>
                <li className="flex items-center"><span className="text-lime mr-2">✓</span>Local keyword optimisation</li>
                <li className="flex items-center"><span className="text-lime mr-2">✓</span>Monthly reporting</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="btn-secondary inline-block">
              Discuss add-ons
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-12 text-center">
            Common questions<span className="text-lime">.</span>
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-navy mb-2">
                What affects the final price?
              </h3>
              <p className="text-slate leading-relaxed">
                The main factors are the number of pages, complexity of design, and how much content you already have. We'll give you a fixed quote after our initial chat — no surprises.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-navy mb-2">
                How long does a project take?
              </h3>
              <p className="text-slate leading-relaxed">
                Most projects take 2–3 weeks from brief to launch. Larger sites or those needing copywriting help may take a bit longer. We'll give you a realistic timeline upfront.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-navy mb-2">
                What's NOT included?
              </h3>
              <p className="text-slate leading-relaxed mb-3">
                Our build prices cover design and development. Separate costs may include:
              </p>
              <ul className="text-slate space-y-1 ml-4 list-disc list-inside marker:text-lime text-sm">
                <li className="pl-2">Domain name (typically £10-15/year)</li>
                <li className="pl-2">Stock photography if needed</li>
                <li className="pl-2">Copywriting if you need help with content</li>
                <li className="pl-2">Ongoing hosting and maintenance (see support packages)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-navy mb-2">
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
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-white">
            Ready to talk<span className="text-lime">?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Book a free 15-minute consultation to discuss your project. No pressure, no obligation — just an honest conversation about what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-primary">
              Book a free consultation
            </Link>
            <Link href="/contact" className="btn-tertiary">
              Get a quote by email
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile sticky bar */}
      <MobileStickyBar />
    </div>
  );
}
