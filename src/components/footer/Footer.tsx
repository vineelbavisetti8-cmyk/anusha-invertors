import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS } from '@/data/business';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
];

const PRODUCT_LINKS = [
  { label: 'Tubular Batteries', href: '/products?category=tubular-battery' },
  { label: 'Flat Plate Batteries', href: '/products?category=flat-plate-battery' },
  { label: 'Inverters', href: '/products?category=inverter' },
  { label: 'Inverter + Battery Combos', href: '/products?category=inverter-battery-combo' },
  { label: 'UPS Systems', href: '/products?category=ups' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t"
      style={{ background: '#050c19', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="container-site">
        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label={`${BUSINESS.name} — Home`} className="inline-block mb-5">
              <Image
                src="/assets/brand/brand-logo.webp"
                alt={`${BUSINESS.name} logo`}
                width={160}
                height={90}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-body max-w-sm mb-6" style={{ color: '#7391af' }}>
              {BUSINESS.description}
            </p>
            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS.contact.phoneTel}`}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: '#93c0fb' }}
              >
                <PhoneIcon className="w-3.5 h-3.5" />
                {BUSINESS.contact.phone}
              </a>
              <p className="text-sm flex items-start gap-2" style={{ color: '#516d8e' }}>
                <MapPinIcon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS.address.full}</span>
              </p>
            </div>
          </div>

          {/* Products */}
          <nav aria-label="Footer product links">
            <h3 className="text-sm font-semibold text-white mb-4">Products</h3>
            <ul className="flex flex-col gap-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#516d8e' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navigation */}
          <nav aria-label="Footer navigation links">
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#516d8e' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Get directions */}
            <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <a
                href={BUSINESS.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                style={{ color: '#516d8e' }}
              >
                <MapPinIcon className="w-3.5 h-3.5" />
                Get Directions
              </a>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t"
          style={{ borderColor: 'rgba(255,255,255,0.06)', color: '#3d5068' }}
        >
          <p>
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p>
            {BUSINESS.address.city}, {BUSINESS.address.state}, India
          </p>
        </div>
      </div>
    </footer>
  );
}

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
