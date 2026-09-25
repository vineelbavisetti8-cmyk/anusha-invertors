/**
 * ANUSHA BATTERIES & INVERTERS — Product Data Architecture
 *
 * IMPORTANT DATA INTEGRITY RULE:
 * - Never populate brand, model, price, spec, or warranty with invented data.
 * - Fields marked with PLACEHOLDER must be filled by the client.
 * - The data structure is CMS-ready — update content without touching components.
 */

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  imageAlt: string;
  shortDescription: string;
  description: string;
  brand: string | null;       // null = unverified, do not display
  model: string | null;       // null = unverified
  specs: ProductSpec[];       // Only verified specs
  application: string[];
  warranty: string | null;    // null = unverified
  inStock: boolean | null;    // null = unknown
  enquiryEnabled: boolean;
  featured: boolean;
}

export type ProductCategory =
  | 'tubular-battery'
  | 'flat-plate-battery'
  | 'inverter'
  | 'inverter-battery-combo'
  | 'ups';

export const PRODUCT_CATEGORIES: Record<ProductCategory, {
  label: string;
  description: string;
  image: string;
}> = {
  'tubular-battery': {
    label: 'Tubular Batteries',
    description: 'Long-lasting tubular batteries designed for heavy-duty inverter backup.',
    image: '/assets/products/battery-product.webp',
  },
  'flat-plate-battery': {
    label: 'Flat Plate Batteries',
    description: 'Cost-effective flat plate batteries suited for moderate backup needs.',
    image: '/assets/products/battery-product.webp',
  },
  'inverter': {
    label: 'Inverters',
    description: 'Pure sine wave and modified sine wave inverters for home and office.',
    image: '/assets/products/inverter-product.webp',
  },
  'inverter-battery-combo': {
    label: 'Inverter + Battery Combos',
    description: 'Complete ready-to-install power backup packages.',
    image: '/assets/products/battery-inverter-combo.webp',
  },
  'ups': {
    label: 'UPS Systems',
    description: 'Uninterruptible power supply systems for computers and sensitive equipment.',
    image: '/assets/products/inverter-product.webp',
  },
};

/**
 * Product catalog.
 * PLACEHOLDER items indicate real products that exist in the store
 * but whose exact specifications have not yet been provided by the client.
 * Replace placeholder values with verified data when available.
 */
export const PRODUCTS: Product[] = [
  {
    id: 'tubular-battery-1',
    slug: 'tubular-inverter-battery',
    name: 'Tubular Inverter Battery',
    category: 'tubular-battery',
    image: '/assets/products/battery-product.webp',
    imageAlt: 'Heavy-duty tubular inverter battery with terminal caps',
    shortDescription:
      'Heavy-duty tubular battery engineered for extended backup cycles and deep discharge recovery.',
    description:
      'Tubular batteries are the preferred choice for homes and businesses that experience frequent or prolonged power cuts. Their tubular plate construction delivers superior charge acceptance, low water loss, and long service life compared to flat plate alternatives. Ideal for inverter installations requiring deep-cycle performance.',
    brand: null,     // PLACEHOLDER — confirm brand with client
    model: null,     // PLACEHOLDER — confirm model with client
    specs: [
      // PLACEHOLDER — fill with verified specifications
      { label: 'Technology', value: 'Tubular Plate' },
      { label: 'Application', value: 'Home & Commercial Inverter' },
      { label: 'Electrolyte', value: 'Lead Acid' },
    ],
    application: ['Home Backup', 'Office Backup', 'Small Commercial'],
    warranty: null,  // PLACEHOLDER — confirm with client
    inStock: null,
    enquiryEnabled: true,
    featured: true,
  },
  {
    id: 'inverter-1',
    slug: 'pure-sine-wave-inverter',
    name: 'Pure Sine Wave Inverter',
    category: 'inverter',
    image: '/assets/products/inverter-product.webp',
    imageAlt: 'Pure sine wave inverter with LED status panel and power button',
    shortDescription:
      'Pure sine wave output for safe, stable power to all appliances including sensitive electronics.',
    description:
      'Pure sine wave inverters produce clean AC power identical to grid supply, making them safe for sensitive equipment such as computers, medical devices, and modern appliances with variable speed motors. Suitable for both home and office installations.',
    brand: null,
    model: null,
    specs: [
      { label: 'Output Waveform', value: 'Pure Sine Wave' },
      { label: 'Application', value: 'Home, Office, Commercial' },
    ],
    application: ['Home Backup', 'Office Backup', 'Computer UPS'],
    warranty: null,
    inStock: null,
    enquiryEnabled: true,
    featured: true,
  },
  {
    id: 'combo-1',
    slug: 'inverter-battery-combo',
    name: 'Inverter + Battery Combo',
    category: 'inverter-battery-combo',
    image: '/assets/products/battery-inverter-combo.webp',
    imageAlt: 'Complete inverter and battery combo pack ready for installation',
    shortDescription:
      'Complete, ready-to-install backup system — inverter and matched battery bundled together.',
    description:
      'Our combo packages include a compatible inverter and battery pair, optimised to work together for maximum efficiency and lifespan. Ideal for customers setting up a new backup system or upgrading existing equipment. Installation support available — enquire for details.',
    brand: null,
    model: null,
    specs: [
      { label: 'Package Includes', value: 'Inverter + Battery' },
      { label: 'Application', value: 'Home & Office' },
    ],
    application: ['Home Backup', 'Office Backup'],
    warranty: null,
    inStock: null,
    enquiryEnabled: true,
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
