import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Get a Free Website Quote | Contact Lawsons Creative',
  description: 'Get in touch for your free consultation. Book a call or send us a message about your website project.',
};

export default function ContactPage() {

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="container-custom text-center">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6">
            Let's talk about your project
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Book a free 30-minute consultation or send a message. We&apos;ll respond within 24 hours (usually much faster).
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Option 1: Book a Call */}
            <div className="bg-lightgrey rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-navy"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>

              <h2 className="font-heading font-bold text-3xl text-navy mb-4">
                Book a call (recommended)
              </h2>
              <p className="text-slate mb-6 leading-relaxed">
                The best way to discuss your project is a quick call. We&apos;ll talk about your business, goals, and how a website can help. No pressure, no obligation.
              </p>

              <CalendlyButton className="btn-primary w-full text-center">
                Book your free consultation
              </CalendlyButton>

              <div className="mt-6 flex items-center text-slate text-sm">
                <svg
                  className="w-5 h-5 mr-2 text-success"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>30 minutes • No obligation • Free consultation</span>
              </div>
            </div>

            {/* Option 2: Send a message */}
            <div>
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-lime"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>

              <h2 className="font-heading font-bold text-3xl text-navy mb-4">
                Send a message
              </h2>
              <p className="text-slate mb-6 leading-relaxed">
                Prefer email? Fill out the form below and we'll get back to you within 24 hours (usually much faster) with answers to your questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="font-heading font-bold text-3xl text-navy mb-8 text-center">
              Contact form
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-navy"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-navy mb-2">Email</h3>
              <a
                href="mailto:hello@lawsonscreative.co.uk"
                className="text-slate hover:text-lime transition-colors"
              >
                hello@lawsonscreative.co.uk
              </a>
            </div>

            <div>
              <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-navy"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-navy mb-2">Location</h3>
              <p className="text-slate">Kent, UK</p>
              <p className="text-slate text-sm">Serving businesses UK-wide</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-navy"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-navy mb-2">Response Time</h3>
              <p className="text-slate">Within 24 hours</p>
              <p className="text-slate text-sm">(usually much faster)</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-heading font-bold text-2xl text-navy mb-4">
              Have questions first?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="text-lime hover:underline">
                View Packages →
              </Link>
              <Link href="/portfolio" className="text-lime hover:underline">
                See Our Work →
              </Link>
              <Link href="/process" className="text-lime hover:underline">
                Our Process →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
