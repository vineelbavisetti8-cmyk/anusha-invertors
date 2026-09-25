import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, PRODUCTS } from '@/data/products';
import { BUSINESS } from '@/data/business';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.shortDescription} — Available at ${BUSINESS.name} in Eluru. Call ${BUSINESS.contact.phone}.`,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${product.name} | ${BUSINESS.name}`,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main>
      {/* Breadcrumb */}
      <div
        className="pt-24 pb-4"
        style={{ background: '#050c19' }}
        aria-label="Breadcrumb"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs" style={{ color: '#3d5068' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span aria-hidden>/</span>
            <span aria-current="page" style={{ color: '#93c0fb' }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product detail */}
      <section
        className="section-pad"
        style={{ background: '#050c19' }}
        aria-labelledby="product-name"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Image */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: '#0a1628', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-contain p-10"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-label text-blue-400 mb-2">
                {product.category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </p>
              <h1 id="product-name" className="text-display-lg text-white mb-4">
                {product.name}
              </h1>
              <p className="text-body-lg mb-6" style={{ color: '#9fb3ca' }}>
                {product.description}
              </p>

              {/* Application tags */}
              {product.application.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.application.map((app) => (
                    <span
                      key={app}
                      className="px-3 py-1 text-xs rounded-full font-medium"
                      style={{
                        background: 'rgba(29,107,219,0.12)',
                        color: '#93c0fb',
                        border: '1px solid rgba(29,107,219,0.2)',
                      }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              )}

              {/* Specs — only verified */}
              {product.specs.length > 0 && (
                <div
                  className="rounded-xl p-5 mb-8"
                  style={{ background: '#0a1628', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <h2 className="text-sm font-semibold text-white mb-4">Specifications</h2>
                  <div className="flex flex-col gap-3">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between items-center pb-3"
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                      >
                        <span className="text-sm" style={{ color: '#7391af' }}>{spec.label}</span>
                        <span className="text-sm font-medium text-white">{spec.value}</span>
                      </div>
                    ))}
                    <p className="text-xs mt-1" style={{ color: '#3d5068' }}>
                      Full specifications available in-store or on request.
                    </p>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS.contact.phoneTel}`}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-white rounded-lg hover:opacity-90 transition-all"
                  style={{ background: 'linear-gradient(135deg, #1558c8, #3480ef)' }}
                >
                  Call to Enquire
                </a>
                <Link
                  href={`/contact?product=${product.slug}`}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 font-medium border border-white/20 text-neutral-200 rounded-lg hover:border-white/40 transition-all"
                >
                  Send Enquiry
                </Link>
              </div>

              <p className="text-xs mt-4" style={{ color: '#3d5068' }}>
                Prices and exact models confirmed in-store or by phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="py-10" style={{ background: '#050c19' }}>
        <div className="container-site">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: '#5fa0f7' }}
          >
            ← Back to All Products
          </Link>
        </div>
      </div>
    </main>
  );
}
