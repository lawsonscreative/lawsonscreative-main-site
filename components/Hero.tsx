'use client';

import Link from 'next/link';
import { useTypewriter } from '@/hooks/useTypewriter';

// Phrases to cycle through (UK spelling)
const HERO_PHRASES = [
  'drive more enquiries',
  'showcase your work',
  'build credibility',
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
            {/* Trust strip - location and specialism */}
            <div className="flex flex-wrap items-center gap-2 mb-6 text-sm text-gray-300">
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-1 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Based in Kent
              </span>
              <span className="text-gray-500">•</span>
              <span>Working with trades, pet care and local services across the UK</span>
            </div>

            {/* Typing headline - left aligned, fixed height */}
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-10 leading-tight text-white text-left">
              <span className="block">Modern, phone-friendly websites that</span>
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
              We take your tired, awkward or DIY website and turn it into something you're proud of — fast, clear and easy for your customers to use.
            </h2>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
                href="/contact"
                className="btn-tertiary text-center"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.plausible) {
                    window.plausible('CTA Click', { props: { location: 'Hero', button: 'Email Quote' } });
                  }
                }}
              >
                Get a quote by email
              </Link>
            </div>

            {/* Benefit tiles - key promises */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-lime mb-1">1–2</div>
                <div className="text-xs md:text-sm text-gray-300">weeks to launch</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-lime mb-1">£500</div>
                <div className="text-xs md:text-sm text-gray-300">starter sites from</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-lime mb-1">100%</div>
                <div className="text-xs md:text-sm text-gray-300">focused on you</div>
              </div>
            </div>
          </div>

          {/* Right - Browser Mockup (absolutely positioned, vertically centered from h1 to CTAs) */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-[27.8rem]">
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

      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-96 h-96 bg-lime rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
