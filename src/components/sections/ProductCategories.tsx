import Image from 'next/image';
import Link from 'next/link';
import { PRODUCT_CATEGORIES } from '@/data/products';

const CATEGORY_ITEMS = [
  { key: 'tubular-battery' as const, image: '/assets/products/battery-product.webp', imageAlt: 'Tubular inverter battery' },
  { key: 'inverter' as const, image: '/assets/products/inverter-product.webp', imageAlt: 'Pure sine wave inverter' },
  { key: 'inverter-battery-combo' as const, image: '/assets/products/battery-inverter-combo.webp', imageAlt: 'Inverter and battery combination pack' },
];

export default function ProductCategories() {
  return (
    <section
      id="product-categories"
      aria-labelledby="categories-heading"
      className="section-pad"
      style={{ background: '#050c19' }}
    >
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-label text-blue-400 mb-3">What We Stock</p>
            <h2 id="categories-heading" className="text-display-lg text-white">
              Products We Carry
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-1.5 shrink-0"
          >
            Browse All Products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>

        {/* Category cards — asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORY_ITEMS.map(({ key, image, imageAlt }, i) => {
            const cat = PRODUCT_CATEGORIES[key];
            return (
              <Link
                key={key}
                href={`/products?category=${key}`}
                className={`group relative rounded-xl overflow-hidden card-hover block ${
                  i === 0 ? 'md:col-span-1 md:row-span-1' : ''
                }`}
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: '#0a1628',
                }}
                aria-label={`Explore ${cat.label}`}
              >
                {/* Image */}
                <div className={`relative ${i === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden`}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.04] p-4"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  {/* Dark gradient overlay at bottom */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(10,22,40,0.98) 0%, rgba(10,22,40,0.3) 50%, transparent 100%)',
                    }}
                  />
                </div>

                {/* Text content */}
                <div className="p-5">
                  <h3 className="text-heading text-white mb-1.5">{cat.label}</h3>
                  <p className="text-sm mb-3" style={{ color: '#7391af' }}>{cat.description}</p>
                  <span
                    className="text-xs font-semibold tracking-wider uppercase transition-colors"
                    style={{ color: '#5fa0f7' }}
                  >
                    Enquire →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
