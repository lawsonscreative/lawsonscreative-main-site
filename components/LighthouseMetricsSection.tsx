'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface LighthouseMetricsSectionProps {
  heading?: string;
  description?: string;
  mobileGaugesPath?: string;
  desktopGaugesPath?: string;
  mobileFullPath?: string;
  desktopFullPath?: string;
}

export default function LighthouseMetricsSection({
  heading = "Quality you can actually measure",
  description = "We hold our own site to the same standards we use for client projects. These are the latest Google Lighthouse scores for lawsonscreative.co.uk.",
  mobileGaugesPath = "/images/insights-mobile-gauges.webp",
  desktopGaugesPath = "/images/insights-desktop-gauges.webp",
  mobileFullPath = "/images/insights-mobile-full.webp",
  desktopFullPath = "/images/insights-desktop-full.webp",
}: LighthouseMetricsSectionProps) {
  const [selectedDevice, setSelectedDevice] = useState<'mobile' | 'desktop'>('mobile');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gaugesAltText = {
    mobile: "Google Lighthouse mobile scores: Performance 97, Accessibility 100, Best Practices 100, SEO 100.",
    desktop: "Google Lighthouse desktop scores: Performance 100, Accessibility 100, Best Practices 100, SEO 100.",
  };

  const fullAltText = {
    mobile: "Full Google Lighthouse mobile report for lawsonscreative.co.uk.",
    desktop: "Full Google Lighthouse desktop report for lawsonscreative.co.uk.",
  };

  const currentGaugesPath = selectedDevice === 'mobile' ? mobileGaugesPath : desktopGaugesPath;
  const currentFullPath = selectedDevice === 'mobile' ? mobileFullPath : desktopFullPath;
  const currentGaugesAlt = gaugesAltText[selectedDevice];
  const currentFullAlt = fullAltText[selectedDevice];

  // Handle modal open
  const handleGaugesClick = () => {
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-navy">
              {heading}<span className="text-lime">.</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-slate leading-relaxed mb-8">
              {description}
            </p>

            {/* Device Toggle */}
            <div
              role="tablist"
              aria-label="Device selection"
              className="flex justify-center gap-2 mb-8"
            >
              <button
                role="tab"
                aria-selected={selectedDevice === 'mobile'}
                aria-controls="lighthouse-gauges"
                onClick={() => setSelectedDevice('mobile')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedDevice === 'mobile'
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-gray-100 text-slate hover:bg-gray-200'
                }`}
              >
                Mobile
              </button>
              <button
                role="tab"
                aria-selected={selectedDevice === 'desktop'}
                aria-controls="lighthouse-gauges"
                onClick={() => setSelectedDevice('desktop')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedDevice === 'desktop'
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-gray-100 text-slate hover:bg-gray-200'
                }`}
              >
                Desktop
              </button>
            </div>

            {/* Gauges Image - Clickable */}
            <div
              id="lighthouse-gauges"
              role="tabpanel"
              className="relative group cursor-pointer mb-4"
              onClick={handleGaugesClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleGaugesClick();
                }
              }}
              tabIndex={0}
              aria-label={`View full ${selectedDevice} Lighthouse report`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-gray-100 transition-all group-hover:shadow-2xl group-hover:border-navy/20">
                <Image
                  src={currentGaugesPath}
                  alt={currentGaugesAlt}
                  width={1200}
                  height={300}
                  className="w-full h-auto"
                  priority
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-navy text-white px-6 py-3 rounded-lg font-semibold shadow-xl">
                    View full report
                  </span>
                </div>
              </div>
            </div>

            {/* Footnote */}
            <p className="text-sm text-gray-500">
              Scores from Google Lighthouse using PageSpeed Insights.
            </p>
          </div>
        </div>
      </section>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={handleCloseModal}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Lighthouse full report"
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] overflow-auto bg-white rounded-xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="sticky top-4 right-4 float-right z-10 bg-navy text-white p-2 rounded-full hover:bg-navy/90 transition-all shadow-lg"
              aria-label="Close Lighthouse report"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Full Report Image */}
            <div className="p-4">
              <Image
                src={currentFullPath}
                alt={currentFullAlt}
                width={1200}
                height={2400}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
