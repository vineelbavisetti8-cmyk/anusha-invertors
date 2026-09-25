import Image from 'next/image';
import { BUSINESS } from '@/data/business';

export default function StoreLocation() {
  return (
    <section
      id="store-location"
      aria-labelledby="location-heading"
      className="section-pad"
      style={{ background: '#0a1628' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Store image */}
          <div>
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/business/storefront.webp"
                  alt="Anusha Batteries & Inverters store exterior showing product display and signage in Powerpet, Eluru"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Coverage map below */}
            <div
              className="mt-4 rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="relative aspect-[16/7]">
                <Image
                  src="/assets/misc/coverage-map.webp"
                  alt="Map showing location of Anusha Batteries & Inverters in Eluru, Andhra Pradesh"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(5,12,25,0.45)' }}
                />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded"
                    style={{ background: 'rgba(21,88,200,0.8)', color: '#d0e5fe' }}
                  >
                    Eluru · Andhra Pradesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-label text-blue-400 mb-4">Visit Us</p>
            <h2 id="location-heading" className="text-display-lg text-white mb-6">
              Come to Our Store
            </h2>
            <p className="text-body-lg mb-10" style={{ color: '#9fb3ca' }}>
              Our store is open to walk-in customers. Browse our selection of batteries and
              inverters, speak to our team, and get the right recommendation for your setup.
            </p>

            {/* Address card */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{
                background: '#0f2039',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h3 className="text-heading text-white mb-4">
                {BUSINESS.name}
              </h3>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#5fa0f7' }} />
                  <div>
                    <p className="text-body text-white">{BUSINESS.address.street}</p>
                    <p className="text-sm" style={{ color: '#7391af' }}>
                      {BUSINESS.address.area}, {BUSINESS.address.city},&nbsp;
                      {BUSINESS.address.state} {BUSINESS.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-4 h-4 flex-shrink-0" style={{ color: '#5fa0f7' }} />
                  <a
                    href={`tel:${BUSINESS.contact.phoneTel}`}
                    className="text-body text-white hover:text-blue-300 transition-colors"
                  >
                    {BUSINESS.contact.phone}
                  </a>
                </div>

                {BUSINESS.hours && (
                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#5fa0f7' }} />
                    <p className="text-body text-white">{BUSINESS.hours}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS.contact.phoneTel}`}
                id="location-call-cta"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 font-semibold text-white rounded-lg transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #1558c8, #3480ef)' }}
              >
                <PhoneIcon className="w-4 h-4" />
                Call {BUSINESS.contact.phone}
              </a>

              <a
                href={BUSINESS.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-directions-cta"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 font-medium border border-white/20 text-neutral-200 rounded-lg hover:border-white/40 transition-all"
              >
                <MapPinIcon className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icons
function MapPinIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}
function PhoneIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}
function ClockIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}
