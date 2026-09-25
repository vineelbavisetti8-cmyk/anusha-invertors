import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProducts } from '@/data/products';

export default function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section
      id="featured-products"
      aria-labelledby="featured-heading"
      className="section-pad"
      style={{ background: '#050c19' }}
    >
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-label text-blue-400 mb-3">In-Store</p>
            <h2 id="featured-heading" className="text-display-lg text-white">
              Featured Products
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium text-blue-300 hover:text-blue-200 flex items-center gap-1.5 shrink-0 transition-colors"
          >
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="group rounded-xl overflow-hidden card-hover"
              style={{
                background: '#0a1628',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Product image */}
              <div className="relative aspect-square overflow-hidden bg-[#0f2039]">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-contain object-center p-6 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs font-medium mb-2" style={{ color: '#5fa0f7' }}>
                  {product.category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                </p>
                <h3 className="text-heading text-white mb-2">{product.name}</h3>
                <p className="text-sm mb-5" style={{ color: '#7391af' }}>
                  {product.shortDescription}
                </p>

                {/* Application tags */}
                {product.application.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.application.map((app) => (
                      <span
                        key={app}
                        className="px-2.5 py-1 text-xs rounded-md"
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

                {/* CTA */}
                <Link
                  href={`/products/${product.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 border hover:bg-white/[0.05]"
                  style={{
                    color: '#93c0fb',
                    borderColor: 'rgba(29,107,219,0.3)',
                  }}
                >
                  View Details & Enquire
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Notice for missing specs */}
        <p className="text-center text-xs mt-8" style={{ color: '#516d8e' }}>
          Specific brand models, prices, and specifications are available in-store or on request.
        </p>
      </div>
    </section>
  );
}
