'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    // Disable Plausible if declined
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible = () => {}; // No-op function
    }
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-heading font-bold text-lg text-navy mb-2">
              We value your privacy
            </h3>
            <p className="text-slate text-sm leading-relaxed">
              We use privacy-friendly analytics (Plausible) to understand how visitors use our site and improve your experience.
              No personal data is collected or sold. Learn more in our{' '}
              <Link href="/privacy" className="text-navy underline hover:text-lime transition-colors">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="px-6 py-3 font-semibold text-navy border-2 border-navy rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
              aria-label="Decline cookies"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="btn-primary px-6 py-3 whitespace-nowrap"
              aria-label="Accept cookies"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
