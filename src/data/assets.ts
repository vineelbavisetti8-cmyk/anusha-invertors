/**
 * Internal Visual Asset Registry & Mapping for ANUSHA BATTERIES & INVERTERS
 * 
 * Strict Ingestion Rules:
 * 1. Supplied assets only — zero AI image generation / placeholders.
 * 2. Explicit semantic mapping per website section.
 * 3. Dedicated unique image per purpose (no cross-section duplication).
 * 4. Aspect ratio preservation (object-fit: cover/contain, correct aspect ratio tokens).
 * 5. Responsive image delivery (desktop + mobile picture/srcset support).
 * 6. High priority for critical LCP hero asset; lazy loading + decoding async for secondary visuals.
 * 7. Factual vs. conceptual labeling: conceptual showcase imagery marked accordingly.
 * 8. Authentic brand logo preservation across header, footer & navigation.
 */

export interface AssetDefinition {
  id: string;
  src: string;
  fallbackSrc?: string;
  width: number;
  height: number;
  aspectRatio: string;
  alt: string;
  title: string;
  purpose: string;
  loading: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  objectFit: 'contain' | 'cover' | 'scale-down';
  objectPosition?: string;
  section: 'brand' | 'hero' | 'products' | 'sections' | 'business' | 'misc';
  isConceptual?: boolean;
}

export const ASSET_MAP = {
  // BRAND IDENTITY
  brandLogo: {
    id: 'brand-logo',
    src: '/assets/brand/brand-logo.webp',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    alt: 'Anusha Batteries & Inverters Official Brand Logo',
    title: 'Anusha Batteries & Inverters',
    purpose: 'Primary website header & footer branding logo',
    loading: 'eager',
    fetchPriority: 'high',
    objectFit: 'contain',
    section: 'brand',
    isConceptual: false,
  },
  brandFavicon: {
    id: 'brand-favicon',
    src: '/assets/brand/brand-favicon.webp',
    width: 1600,
    height: 900,
    aspectRatio: '1/1',
    alt: 'Anusha Batteries & Inverters Favicon',
    title: 'Anusha Icon',
    purpose: 'Browser tab favicon, app icon, bookmark badge',
    loading: 'eager',
    fetchPriority: 'auto',
    objectFit: 'contain',
    section: 'brand',
    isConceptual: false,
  },

  // HERO SECTION
  heroDesktop: {
    id: 'hero-desktop',
    src: '/assets/hero/hero-desktop.webp',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    alt: 'Advanced heavy-duty tubular battery and smart pure sine-wave inverter backup system showcase',
    title: 'Next-Gen Power Backup Systems',
    purpose: 'Desktop hero primary visual and LCP hero backdrop',
    loading: 'eager',
    fetchPriority: 'high',
    objectFit: 'cover',
    objectPosition: 'center center',
    section: 'hero',
    isConceptual: true,
  },
  heroMobile: {
    id: 'hero-mobile',
    src: '/assets/hero/hero-mobile.webp',
    width: 900,
    height: 1599,
    aspectRatio: '9/16',
    alt: 'Compact and high-performance inverter & battery backup solution for mobile screens',
    title: 'Reliable Energy Anywhere',
    purpose: 'Mobile viewport hero visual (<768px portrait displays)',
    loading: 'eager',
    fetchPriority: 'high',
    objectFit: 'cover',
    objectPosition: 'center center',
    section: 'hero',
    isConceptual: true,
  },

  // PRODUCTS CATALOGUE
  batteryProduct: {
    id: 'battery-product',
    src: '/assets/products/battery-product.webp',
    width: 1122,
    height: 1402,
    aspectRatio: '4/5',
    alt: 'High-durability deep-cycle tubular inverter battery with electrolyte level indicators',
    title: 'Heavy-Duty Tubular Battery',
    purpose: 'Dedicated battery product visual in catalog and technical comparison',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'contain',
    objectPosition: 'center center',
    section: 'products',
    isConceptual: true,
  },
  inverterProduct: {
    id: 'inverter-product',
    src: '/assets/products/inverter-product.webp',
    width: 1122,
    height: 1402,
    aspectRatio: '4/5',
    alt: 'High-efficiency digital pure sine-wave inverter with real-time status LED display panel',
    title: 'Pure Sine-Wave Inverter',
    purpose: 'Dedicated inverter product visual in catalog and product specs',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'contain',
    objectPosition: 'center center',
    section: 'products',
    isConceptual: true,
  },
  batteryInverterStacked: {
    id: 'battery-inverter-stacked',
    src: '/assets/products/battery-inverter.webp',
    width: 1122,
    height: 1402,
    aspectRatio: '4/5',
    alt: 'Complete heavy-duty inverter and battery combo mounted on heavy gauge metal trolley rack',
    title: 'Complete Integrated Combo System',
    purpose: 'Battery + inverter vertical combination unit showcase with safety rack installation',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'contain',
    objectPosition: 'center center',
    section: 'products',
    isConceptual: true,
  },
  batteryInverterCombo: {
    id: 'battery-inverter-combo',
    src: '/assets/products/battery-inverter-combo.webp',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    alt: 'Wide perspective showcase of premium home & office backup power system',
    title: 'Premium Home Energy Package',
    purpose: 'Combined product showcase banner for package deals and pricing bundles',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'cover',
    objectPosition: 'center center',
    section: 'products',
    isConceptual: true,
  },

  // DEDICATED ARCHITECTURAL / BACKUP SECTIONS
  businessBackup: {
    id: 'business-backup',
    src: '/assets/sections/business-backup.webp',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    alt: 'Modern commercial office workstation workstations running seamlessly on uninterrupted power backup',
    title: 'Commercial & Business Power Solutions',
    purpose: 'Business backup section highlighting zero-downtime reliability for IT and enterprise offices',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'cover',
    objectPosition: 'center center',
    section: 'sections',
    isConceptual: true,
  },
  homeBackup: {
    id: 'home-backup',
    src: '/assets/sections/home-backup.webp',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    alt: 'Warm, illuminated contemporary residence during blackout with battery inverter system operating silently',
    title: 'Residential 24/7 Home Power Backup',
    purpose: 'Home backup section demonstrating quiet, clean energy security for families',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'cover',
    objectPosition: 'center center',
    section: 'sections',
    isConceptual: true,
  },
  powerFlow: {
    id: 'power-flow',
    src: '/assets/sections/power-flow.webp',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    alt: 'Interactive schematic visualization of power flowing from electrical grid to inverter, battery storage, and home loads',
    title: 'How It Works: Intelligent Power Flow',
    purpose: 'Educational power-flow section explaining intelligent grid charging, storage, and instant switchover',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'cover',
    objectPosition: 'center center',
    section: 'sections',
    isConceptual: true,
  },
  whyChooseUs: {
    id: 'why-choose-us',
    src: '/assets/sections/why-choose-us.webp',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    alt: 'Architectural tech staging background with neon accents highlighting engineering reliability',
    title: 'Why Choose Anusha Batteries & Inverters',
    purpose: 'Backdrop and accent imagery for warranty, certified technician, and reliability highlights',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'cover',
    objectPosition: 'center center',
    section: 'sections',
    isConceptual: true,
  },

  // BUSINESS & STOREFRONT (AUTHENTIC LOCAL TRUST)
  showroomInterior: {
    id: 'showroom-interior',
    src: '/assets/business/showroom-interior.webp',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    alt: 'Spacious, well-organized Anusha Batteries showroom with rows of branded inverters and battery units on display',
    title: 'Experience Center & Authorized Showroom',
    purpose: 'Showroom interior display demonstrating broad in-stock selection and professional consultation',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'cover',
    objectPosition: 'center center',
    section: 'business',
    isConceptual: true,
  },
  storefront: {
    id: 'storefront',
    src: '/assets/business/storefront.webp',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    alt: 'Physical storefront of Anusha Batteries & Inverters retail outlet with live inventory and customer service counter',
    title: 'Visit Our Authorized Retail Store',
    purpose: 'Location, contact & local store credibility section showcasing physical store presence',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'cover',
    objectPosition: 'center center',
    section: 'business',
    isConceptual: true,
  },

  // CURATED UTILITY ASSETS (SPECIFIC PURPOSES ONLY)
  coverageMap: {
    id: 'coverage-map',
    src: '/assets/misc/coverage-map.webp',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    alt: 'Urban city grid map with illuminated location marker illustrating express doorstep delivery and service coverage',
    title: 'Fast Doorstep Delivery & Service Radius',
    purpose: 'Dedicated local service network and express installation coverage section',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'cover',
    objectPosition: 'center center',
    section: 'misc',
    isConceptual: true,
  },
  industrialFacility: {
    id: 'industrial-facility',
    src: '/assets/misc/industrial-facility.webp',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    alt: 'Heavy industrial power hub installation representing institutional and commercial micro-grid capacities',
    title: 'Industrial & Large-Scale Battery Solutions',
    purpose: 'Commercial high-capacity / institutional energy solutions showcase',
    loading: 'lazy',
    fetchPriority: 'auto',
    objectFit: 'cover',
    objectPosition: 'center center',
    section: 'misc',
    isConceptual: true,
  }
} as const satisfies Record<string, AssetDefinition>;

export type AssetKey = keyof typeof ASSET_MAP;
