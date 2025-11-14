'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/how-we-work', label: 'How we work' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`bg-white border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container-custom">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-20' : 'h-24'}`}>
          {/* Logo - Without Strapline */}
          <Link href="/" className="relative">
            <Image
              src="/images/logo.png"
              alt="Lawsons Creative"
              width={260}
              height={87}
              priority
              className={`transition-all duration-300 h-auto ${isScrolled ? 'w-52 md:w-56' : 'w-56 md:w-60'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium text-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-navy'
                    : 'text-slate hover:text-navy hover:scale-105 hover:shadow-sm'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lime"></span>
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
            >
              Book a free consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-navy transition-all ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy transition-all ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium text-lg transition-colors ${
                    isActive(link.href)
                      ? 'text-navy font-semibold'
                      : 'text-slate hover:text-navy'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-1 h-4 bg-lime rounded-r"></span>
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary inline-block text-center"
                onClick={() => setIsOpen(false)}
              >
                Book a free consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
