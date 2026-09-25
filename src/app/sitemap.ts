import type { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';
import { BUSINESS } from '@/data/business';

const BASE = BUSINESS.seo.canonicalUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const productEntries = PRODUCTS.map((p) => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...productEntries,
  ];
}
