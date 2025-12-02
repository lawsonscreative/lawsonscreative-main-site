'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const STORAGE_KEY = 'mobileStickyBarDismissed';
const SCROLL_THRESHOLD = 400;

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if already dismissed this session
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, 'true');
  };

  // Don't render if not mounted, dismissed, or not visible yet
  if (!mounted || isDismissed || !isVisible) {
    return null;
  }

  const mailtoLink = `mailto:hello@lawsonscreative.co.uk?subject=${encodeURIComponent('Website enquiry from Lawsons Creative website')}`;

  const bar = (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="complementary"
      aria-label="Contact prompt"
    >
      <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-navy text-sm font-medium flex-1">
            Ready to talk about your website?
          </p>
          <a
            href={mailtoLink}
            className="bg-lime text-navy px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap hover:bg-lime/90 transition-colors"
          >
            Email us
          </a>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1"
            aria-label="Dismiss contact bar"
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  // Use portal to render at document body level, avoiding parent container issues
  return createPortal(bar, document.body);
}
