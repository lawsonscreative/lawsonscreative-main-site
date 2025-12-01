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
        {/* Main content wrapper - relative for mockup positioning */}
        <div className="relative">
          {/* Left Column - All text content (constrained width on large screens) */}
          <div className="lg:max-w-[55%]">
            {/* Typing headline - left aligned, fixed height */}
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

            <h2 className="text-xl md:text-2xl mb-6 text-gray-200 font-semibold text-balance">
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

          {/* Right - Browser Mockup (absolutely positioned, vertically centered from h1 to CTAs, 25% larger) */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-[28rem]">
              {/* Browser mockup - angled */}
              <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  {/* Logo/icon placeholder */}
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-lime to-lime/60 rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-32 bg-lime/20 rounded mt-5"></div>
                  <div className="flex gap-3 mt-4">
                    <div className="h-10 bg-navy/20 rounded flex-1"></div>
                    <div className="h-10 bg-navy/10 rounded flex-1"></div>
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
