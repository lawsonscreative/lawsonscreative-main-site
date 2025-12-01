'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      quote:
        "Lawsons Creative transformed our brand and online presence. The new logo and bold identity reflect our female-led management in a male dominated sector, while the website finally showcases the quality of our work. Moving from a generic Outlook address to a professional @TFRCo email has elevated how customers see us and everything now looks and feels as professional as the service we deliver. The team were collaborative, responsive and delivered everything on time. We could not be happier with the result.",
      name: 'Katie Townsend',
      business: 'The Flooring and Resin Company',
      industry: 'Flooring Services',
    },
    {
      quote:
        "Working with Lawsons Creative was effortless. They took our dated website and transformed it into something that truly represents our business. We've seen a significant increase in enquiries since launch, and customers regularly compliment how professional we look online.",
      name: 'Grace Williams',
      business: 'Graceful Pet Care',
      industry: 'Pet Care Services',
    },
  ];

  useEffect(() => {
    if (isPaused || isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused, isHovered]);

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            What our clients say<span className="text-lime">.</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg cursor-default"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-start mb-6">
                <svg
                  className="w-12 h-12 text-blue-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              <p className="text-xl italic text-slate leading-relaxed mb-8 font-serif">
                {testimonials[activeIndex].quote}
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center text-navy font-bold text-xl mr-4">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy">{testimonials[activeIndex].name}</div>
                  <div className="text-slate text-sm">
                    {testimonials[activeIndex].business} • {testimonials[activeIndex].industry}
                  </div>
                </div>
              </div>

              {/* Star rating */}
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots and pause button */}
          <div className="flex justify-center items-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-lime' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="ml-2 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              aria-label={isPaused ? 'Play testimonials' : 'Pause testimonials'}
            >
              {isPaused ? (
                <svg className="w-4 h-4 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
