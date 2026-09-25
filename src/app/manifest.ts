import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Anusha Batteries & Inverters',
    short_name: 'Anusha',
    description: 'Battery & Inverter Store in Eluru, Andhra Pradesh',
    start_url: '/',
    display: 'standalone',
    background_color: '#050c19',
    theme_color: '#050c19',
    icons: [
      { src: '/assets/brand/brand-favicon.webp', sizes: '192x192', type: 'image/webp' },
      { src: '/assets/brand/brand-logo.webp', sizes: '512x512', type: 'image/webp' },
    ],
  };
}
