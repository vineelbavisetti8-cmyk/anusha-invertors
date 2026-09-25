'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { BUSINESS } from '@/data/business';

// Dynamically import 3D scene — zero JS on initial render
const Hero3DScene = dynamic(() => import('./Hero3DScene'), {
  ssr: false,
  loading: () => null,
});

function detectWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function HeroSection() {
  const [webglReady, setWebglReady] = useState(false);
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [show3D, setShow3D] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Capability detection
    const hasWebGL = detectWebGL();
    const mobile = isMobile();
    const reducedMotion = prefersReducedMotion();
    const lowPerf = mobile && navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4;

    setWebglReady(hasWebGL);
    // On desktop with WebGL and no reduced motion preference: show 3D
    setShow3D(hasWebGL && !reducedMotion && !lowPerf);
  }, []);

  // Intersection observer — defer 3D mount until hero is visible
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) obs.disconnect();
      },
      { threshold: 0.1 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero — Anusha Batteries & Inverters"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050c19' }}
    >
      {/* === BACKGROUND IMAGE (poster / fallback) === */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          sceneLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      >
        {/* Desktop */}
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/assets/hero/hero-mobile.webp"
          />
          <Image
            src="/assets/hero/hero-desktop.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={85}
          />
        </picture>
        {/* Overlay gradient */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* === 3D CANVAS (desktop, WebGL capable) === */}
      {show3D && (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            sceneLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          <Hero3DScene onLoaded={() => setSceneLoaded(true)} />
          {/* Keep overlay on top of 3D for text readability */}
          <div className="absolute inset-0 hero-overlay" />
        </div>
      )}

      {/* === HERO CONTENT === */}
      <div className="container-site relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          {/* Brand label */}
          <div
            className="inline-flex items-center gap-2 mb-6 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span
              className="h-px w-8"
              style={{ background: 'linear-gradient(90deg, #3480ef, transparent)' }}
            />
            <span className="text-label text-blue-300 tracking-widest">
              Eluru, Andhra Pradesh
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-display-xl mb-4 animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            <span className="block text-white">{BUSINESS.nameShort}</span>
            <span className="block" style={{ color: '#93c0fb' }}>
              Batteries &amp; Inverters
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-display-md font-medium mb-6 animate-fade-in-up"
            style={{
              animationDelay: '0.25s',
              color: '#c8d4e4',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            {BUSINESS.tagline}
          </p>

          {/* Supporting copy */}
          <p
            className="text-body-lg mb-10 max-w-lg animate-fade-in-up"
            style={{ animationDelay: '0.35s', color: '#7391af' }}
          >
            Your trusted local source for quality batteries and inverters in Eluru.
            Walk into our store or enquire now.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 animate-fade-in-up"
            style={{ animationDelay: '0.45s' }}
          >
            <a
              href={`tel:${BUSINESS.contact.phoneTel}`}
              id="hero-call-cta"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              style={{ background: 'linear-gradient(135deg, #1558c8 0%, #3480ef 100%)' }}
            >
              <PhoneIcon className="w-4 h-4 flex-shrink-0" />
              Call {BUSINESS.contact.phone}
            </a>

            <a
              href={BUSINESS.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-directions-cta"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white border rounded-lg transition-all duration-200 hover:bg-white/[0.08] hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              style={{ borderColor: 'rgba(255,255,255,0.25)' }}
            >
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              Get Directions
            </a>

            <Link
              href="/products"
              id="hero-products-cta"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-medium rounded-lg transition-all duration-200 hover:bg-white/[0.06] hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              style={{ color: '#93c0fb' }}
            >
              View Products
              <ChevronRightIcon className="w-4 h-4 flex-shrink-0" />
            </Link>
          </div>

          {/* Trust indicator */}
          <div
            className="flex items-center gap-3 mt-10 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm text-neutral-400">
              5.0 on Google · Powerpet, Eluru
            </span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      >
        <span className="text-xs text-neutral-500 text-label tracking-widest">Scroll</span>
        <div
          className="w-px h-10 origin-top"
          style={{
            background: 'linear-gradient(to bottom, rgba(52,128,239,0.6), transparent)',
            animation: 'fadeInUp 1.5s ease infinite',
          }}
        />
      </div>
    </section>
  );
}

// Inline icons
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
function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
