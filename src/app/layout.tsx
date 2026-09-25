import type { Metadata } from 'next';
import { Manrope, DM_Sans } from 'next/font/google';
import './globals.css';
import { BUSINESS } from '@/data/business';
import Header from '@/components/navigation/Header';
import Footer from '@/components/footer/Footer';
import StructuredData from '@/components/seo/StructuredData';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: {
    default: BUSINESS.seo.title,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.seo.description,
  keywords: [...BUSINESS.seo.keywords],
  metadataBase: new URL(BUSINESS.seo.canonicalUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: BUSINESS.seo.title,
    description: BUSINESS.seo.description,
    url: BUSINESS.seo.canonicalUrl,
    siteName: BUSINESS.name,
    images: [
      {
        url: BUSINESS.seo.ogImage,
        width: 1600,
        height: 900,
        alt: `${BUSINESS.name} — Power Backup Solutions in Eluru`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: BUSINESS.seo.title,
    description: BUSINESS.seo.description,
    images: [BUSINESS.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/assets/brand/brand-favicon.webp',
    shortcut: '/assets/brand/brand-favicon.webp',
    apple: '/assets/brand/brand-favicon.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#050c19" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Eluru" />
      </head>
      <body className="surface-base text-neutral-50 antialiased">
        <StructuredData />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
