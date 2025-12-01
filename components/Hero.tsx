'use client';

import Link from 'next/link';
import { useTypewriter } from '@/hooks/useTypewriter';

// Phrases to cycle through (UK spelling)
const HERO_PHRASES = [
  'drive more enquiries',
  'showcase your work',
  'demonstrate credibility',
  'simply work',
  'win you business',
  'win you customers',
];

export default function Hero() {
  const { displayText, isAnimating } = useTypewriter({
    phrases: HERO_PHRASES,
  });

  return (
    <section className="relative bg-gradient-to-br from-navy via-navy to-blue-900 text-white overflow-hidden">
      <div className="container-custom pt-8 pb-12 md:pt-10 md:pb-14 lg:pt-12 lg:pb-16">
        {/* Typing headline - left aligned, fixed height, independent of layout below */}
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-10 leading-tight text-white text-left">
          <span className="block">Bespoke websites that</span>
          <span className="block min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem]">
            <span
              aria-live="polite"
              className="will-change-contents text-lime"
            >
              {displayText}
            </span>
            <span className="text-white">.</span>
            {isAnimating && (
              <span
                className="typewriter-caret"
                aria-hidden="true"
              />
            )}
          </span>
        </h1>

        {/* Two-column layout: content left, mockup right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-200 font-semibold">
              Modern, fast-loading websites for UK service businesses — designed to build trust and generate enquiries. Typically delivered in 1–2 weeks, without the agency price tag.
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              You're great at what you do, and your website should show that. We build strategy-led sites that turn visitors into bookings, not just &quot;pretty&quot; homepages.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-primary text-center text-lg px-10 py-4 shadow-xl"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.plausible) {
                    window.plausible('CTA Click', { props: { location: 'Hero', button: 'Book Consultation' } });
                  }
                }}
              >
                Book a free consultation
              </Link>
              <Link
                href="/portfolio"
                className="btn-tertiary text-center"
              >
                View our work
              </Link>
            </div>
          </div>

          {/* Right Column - Browser Mockup (sized to align with content from subheading to CTAs) */}
          <div className="relative hidden lg:flex justify-center items-start">
            <div className="w-full max-w-sm">
              {/* Browser mockup - sized to span from subheading to CTA buttons */}
              <div className="bg-white rounded-lg shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-3">
                  {/* Logo/icon placeholder */}
                  <div className="flex items-start mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-lime to-lime/60 rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-24 bg-lime/20 rounded mt-4"></div>
                  <div className="flex gap-2 mt-3">
                    <div className="h-8 bg-navy/20 rounded flex-1"></div>
                    <div className="h-8 bg-navy/10 rounded flex-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - animated arrow prompting users to scroll down and explore more content */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-96 h-96 bg-lime rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
