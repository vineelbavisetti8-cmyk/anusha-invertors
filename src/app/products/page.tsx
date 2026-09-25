import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, PRODUCT_CATEGORIES, type ProductCategory } from '@/data/products';
import { BUSINESS } from '@/data/business';

export const metadata: Metadata = {
  title: 'Products — Batteries & Inverters',
  description: `Browse our range of batteries, inverters, and power backup solutions. Available at Anusha Batteries & Inverters in Eluru. Call ${BUSINESS.contact.phone}.`,
  alternates: { canonical: '/products' },
};

export default function ProductsPage() {
  const categories = Object.keys(PRODUCT_CATEGORIES) as ProductCategory[];

  return (
    <main>
      {/* Header */}
      <section
        className="pt-32 pb-16"
        style={{ background: '#050c19' }}
        aria-labelledby="products-heading"
      >
        <div className="container-site">
          <p className="text-label text-blue-400 mb-3">What We Carry</p>
          <h1 id="products-heading" className="text-display-xl text-white mb-5">
            Our Products
          </h1>
          <p className="text-body-lg max-w-2xl" style={{ color: '#9fb3ca' }}>
            We stock a range of batteries and inverters for home and commercial use.
            Contact us to check availability and get a recommendation for your needs.
          </p>
        </div>
      </section>

      {/* Category overview */}
      <section
        className="section-pad"
        style={{ background: '#0a1628' }}
        aria-labelledby="cat-heading"
      >
        <div className="container-site">
          <h2 id="cat-heading" className="text-display-md text-white mb-10">Product Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => {
              const info = PRODUCT_CATEGORIES[cat];
              return (
                <div
                  key={cat}
                  className="rounded-xl overflow-hidden card-hover"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#0f2039' }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={info.image}
                      alt={info.label}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(15,32,57,0.95) 0%, transparent 60%)',
                      }}
                    />
                  </div>
                  <div className="p-5 pt-3">
                    <h3 className="text-heading text-white mb-1.5">{info.label}</h3>
                    <p className="text-sm mb-4" style={{ color: '#7391af' }}>{info.description}</p>
                    <Link
                      href={`/contact?type=${cat}`}
                      className="text-xs font-semibold tracking-wider uppercase transition-colors"
                      style={{ color: '#5fa0f7' }}
                    >
                      Enquire →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product list */}
      <section
        className="section-pad"
        style={{ background: '#050c19' }}
        aria-labelledby="prod-list-heading"
      >
        <div className="container-site">
          <h2 id="prod-list-heading" className="text-display-md text-white mb-10">Featured Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <article
                key={product.id}
                className="rounded-xl overflow-hidden card-hover"
                style={{ background: '#0a1628', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="relative aspect-square bg-[#0f2039] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium mb-2" style={{ color: '#5fa0f7' }}>
                    {product.category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                  </p>
                  <h3 className="text-heading text-white mb-2">{product.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#7391af' }}>{product.shortDescription}</p>

                  {/* Only display verified specs */}
                  {product.specs.length > 0 && (
                    <div className="mb-4 flex flex-col gap-1.5">
                      {product.specs.map((spec) => (
                        <div key={spec.label} className="flex items-center gap-2">
                          <span className="text-xs" style={{ color: '#3d5068' }}>{spec.label}:</span>
                          <span className="text-xs text-white">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full flex items-center justify-center py-2.5 text-sm font-semibold border rounded-lg transition-all hover:bg-white/[0.04]"
                    style={{ color: '#93c0fb', borderColor: 'rgba(29,107,219,0.3)' }}
                  >
                    View & Enquire
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-xs mt-10" style={{ color: '#516d8e' }}>
            Specifications, prices, and availability are confirmed in-store or by phone.
          </p>
        </div>
      </section>

      {/* CTA bar */}
      <section
        className="py-14 text-center"
        style={{ background: 'linear-gradient(135deg, #0a1628, #0f2039)' }}
      >
        <div className="container-site">
          <h2 className="text-display-md text-white mb-4">Not sure what you need?</h2>
          <p className="text-body mb-8" style={{ color: '#9fb3ca' }}>
            Call us and we will help you choose the right battery and inverter for your setup.
          </p>
          <a
            href={`tel:${BUSINESS.contact.phoneTel}`}
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-lg hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #1558c8, #3480ef)' }}
          >
            Call {BUSINESS.contact.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
