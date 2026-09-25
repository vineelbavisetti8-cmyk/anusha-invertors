/**
 * ANUSHA BATTERIES & INVERTERS — Verified Business Data
 * Source of truth. Never invent information not listed here.
 */

export const BUSINESS = {
  name: 'Anusha Batteries & Inverters',
  nameShort: 'Anusha',
  tagline: 'Reliable Power. Smarter Backup.',
  description:
    'Your trusted local destination for quality batteries and inverters in Eluru. We supply reliable power backup solutions for homes and businesses across Andhra Pradesh.',

  address: {
    street: 'Alluri Sitharama Raju Stadium Road',
    area: 'Powerpet',
    city: 'Eluru',
    state: 'Andhra Pradesh',
    pincode: '534005',
    country: 'India',
    full: 'Alluri Sitharama Raju Stadium Road, Powerpet, Eluru, Andhra Pradesh 534005',
  },

  contact: {
    phone: '099948 44045',
    phoneTel: '+919994844045',
    // whatsapp: null, // Not verified — do not display until confirmed
    // email: null, // Not verified — do not display until confirmed
  },

  maps: {
    // Google Maps directions link — uses verified address coordinates
    directionsUrl:
      'https://www.google.com/maps/search/Anusha+Batteries+Inverters+Powerpet+Eluru+Andhra+Pradesh',
    embedSrc: null, // Set when embed API key is available
  },

  rating: {
    score: 5.0,
    count: 2,
    source: 'Google Business Profile',
  },

  category: 'Battery Store — Batteries & Inverters',

  // Social media — not verified, do not render
  social: {
    facebook: null,
    instagram: null,
    youtube: null,
  },

  // Business hours — not verified, use placeholder
  hours: null,

  seo: {
    title: 'Anusha Batteries & Inverters — Battery & Inverter Shop in Eluru',
    description:
      'Shop batteries and inverters in Eluru, Andhra Pradesh. Anusha Batteries & Inverters — your local source for reliable home and commercial power backup solutions. Call 099948 44045.',
    keywords: [
      'battery shop Eluru',
      'inverter shop Eluru',
      'batteries Eluru Andhra Pradesh',
      'inverters Eluru',
      'power backup Eluru',
      'Anusha Batteries Inverters',
      'tubular battery Eluru',
      'UPS inverter Eluru',
      'Powerpet battery store',
    ],
    canonicalUrl: 'https://anushabatteries.in', // Update when domain is live
    ogImage: '/assets/hero/hero-desktop.webp',
  },
} as const;

export type Business = typeof BUSINESS;
