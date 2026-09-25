'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/data/business';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050c19]/95 backdrop-blur-md border-b border-white/[0.06] shadow-[0_2px_24px_-4px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            href="/"
            className="relative flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            aria-label={`${BUSINESS.name} — Home`}
          >
            <Image
              src="/assets/brand/brand-logo.webp"
              alt={`${BUSINESS.name} logo`}
              width={160}
              height={90}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white rounded-md transition-colors duration-150 hover:bg-white/[0.06]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white border border-white/20 rounded-md transition-all duration-150 hover:border-white/40 hover:bg-white/[0.04]"
            >
              Get Directions
            </a>
            <a
              href={`tel:${BUSINESS.contact.phoneTel}`}
              id="header-call-cta"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-md transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #1558c8 0%, #3480ef 100%)' }}
              onClick={() => {
                // Analytics hook point
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'call_click', { location: 'header' });
                }
              }}
            >
              Call Now
            </a>
          </div>

          {/* Mobile: Call + Burger */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.contact.phoneTel}`}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white rounded-md"
              style={{ background: 'linear-gradient(135deg, #1558c8 0%, #3480ef 100%)' }}
              aria-label={`Call ${BUSINESS.contact.phone}`}
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Call</span>
            </a>
            <button
              ref={menuRef as any}
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              {mobileOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#050c19]/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-[#0a1628] border-l border-white/[0.08] flex flex-col transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-1 p-6 pt-8" aria-label="Mobile navigation links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-base font-medium text-neutral-200 hover:text-white rounded-lg transition-colors hover:bg-white/[0.06]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-6 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS.contact.phoneTel}`}
              className="w-full flex items-center justify-center gap-2 py-3 font-semibold text-white rounded-lg"
              style={{ background: 'linear-gradient(135deg, #1558c8 0%, #3480ef 100%)' }}
              onClick={() => setMobileOpen(false)}
            >
              <PhoneIcon className="w-4 h-4" />
              Call {BUSINESS.contact.phone}
            </a>
            <a
              href={BUSINESS.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 font-medium text-neutral-200 border border-white/20 rounded-lg hover:border-white/40 transition-colors"
            >
              <MapPinIcon className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// Inline SVG icons — no external library
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}
