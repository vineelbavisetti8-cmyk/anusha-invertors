import { BUSINESS } from '@/data/business';

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.seo.canonicalUrl}/#business`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BUSINESS.seo.canonicalUrl,
    telephone: BUSINESS.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Approximate lat/lon for Powerpet, Eluru
      latitude: 16.7107,
      longitude: 81.0952,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating.score,
      reviewCount: BUSINESS.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    image: `${BUSINESS.seo.canonicalUrl}${BUSINESS.seo.ogImage}`,
    logo: `${BUSINESS.seo.canonicalUrl}/assets/brand/brand-logo.webp`,
    priceRange: '₹₹',
    paymentAccepted: 'Cash',
    areaServed: {
      '@type': 'City',
      name: 'Eluru',
    },
    hasMap: BUSINESS.maps.directionsUrl,
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
