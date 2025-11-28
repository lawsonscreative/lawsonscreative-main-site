'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// Configurable timing constants
const TYPE_SPEED = 60; // ms per character (base)
const ERASE_SPEED = 36; // ms per character (base)
const HOLD_TIME = 5000; // 5 seconds hold after typing complete
const GAP_TIME = 400; // pause between phrases
const INITIAL_DELAY = 600; // delay before first animation starts
const VARIANCE = 15; // ±ms random variance for natural feel

// Add slight random variance for more human-like typing
const addVariance = (baseSpeed: number): number => {
  return baseSpeed + Math.floor(Math.random() * (VARIANCE * 2 + 1)) - VARIANCE;
};

interface UseTypewriterConfig {
  phrases: string[];
  typeSpeed?: number;
  eraseSpeed?: number;
  holdTime?: number;
  gapTime?: number;
  initialDelay?: number;
}

type Phase = 'idle' | 'typing' | 'holding' | 'erasing' | 'gap';

export function useTypewriter({
  phrases,
  typeSpeed = TYPE_SPEED,
  eraseSpeed = ERASE_SPEED,
  holdTime = HOLD_TIME,
  gapTime = GAP_TIME,
  initialDelay = INITIAL_DELAY,
}: UseTypewriterConfig) {
  // Start with first phrase for SSR (no hydration mismatch)
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Refs for mutable state that doesn't trigger re-renders
  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(phrases[0].length);
  const phaseRef = useRef<Phase>('idle');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isDocumentHiddenRef = useRef(false);

  // Clear any pending timeout
  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Schedule next tick of the animation
  const scheduleNext = useCallback((callback: () => void, delay: number) => {
    clearTimer();
    if (!isDocumentHiddenRef.current) {
      timeoutRef.current = setTimeout(callback, delay);
    }
  }, [clearTimer]);

  // Main animation loop
  const tick = useCallback(() => {
    if (prefersReducedMotion || isDocumentHiddenRef.current) return;

    const currentPhrase = phrases[phraseIndexRef.current];
    const phase = phaseRef.current;

    switch (phase) {
      case 'typing': {
        if (charIndexRef.current < currentPhrase.length) {
          charIndexRef.current++;
          setDisplayText(currentPhrase.slice(0, charIndexRef.current));
          // Add variance for natural feel
          scheduleNext(tick, addVariance(typeSpeed));
        } else {
          // Finished typing, hold
          phaseRef.current = 'holding';
          scheduleNext(tick, holdTime);
        }
        break;
      }

      case 'holding': {
        // Start erasing
        phaseRef.current = 'erasing';
        scheduleNext(tick, eraseSpeed);
        break;
      }

      case 'erasing': {
        if (charIndexRef.current > 0) {
          charIndexRef.current--;
          setDisplayText(currentPhrase.slice(0, charIndexRef.current));
          // Add variance for natural feel
          scheduleNext(tick, addVariance(eraseSpeed));
        } else {
          // Finished erasing, gap before next phrase
          phaseRef.current = 'gap';
          scheduleNext(tick, gapTime);
        }
        break;
      }

      case 'gap': {
        // Move to next phrase
        phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length;
        charIndexRef.current = 0;
        phaseRef.current = 'typing';
        scheduleNext(tick, typeSpeed);
        break;
      }

      default:
        break;
    }
  }, [phrases, typeSpeed, eraseSpeed, holdTime, gapTime, prefersReducedMotion, scheduleNext]);

  // Start animation after initial delay
  const startAnimation = useCallback(() => {
    if (prefersReducedMotion) return;

    // Begin by erasing the first phrase (which was shown for SSR)
    phaseRef.current = 'holding';
    charIndexRef.current = phrases[0].length;
    phraseIndexRef.current = 0;
    setIsAnimating(true);

    scheduleNext(tick, initialDelay);
  }, [phrases, initialDelay, prefersReducedMotion, scheduleNext, tick]);

  // Handle visibility change (pause when tab hidden)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isDocumentHiddenRef.current = true;
        clearTimer();
      } else {
        isDocumentHiddenRef.current = false;
        // Resume animation if it was running
        if (isAnimating && !prefersReducedMotion) {
          scheduleNext(tick, 100);
        }
      }
    };

    const handlePageHide = () => {
      isDocumentHiddenRef.current = true;
      clearTimer();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [isAnimating, prefersReducedMotion, clearTimer, scheduleNext, tick]);

  // Check reduced motion preference on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    if (!mediaQuery.matches) {
      startAnimation();
    }

    // Cleanup on unmount
    return () => {
      clearTimer();
    };
  }, [startAnimation, clearTimer]);

  return {
    displayText,
    isAnimating: isAnimating && !prefersReducedMotion,
  };
}
