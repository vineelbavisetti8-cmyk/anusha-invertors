import Image from 'next/image';
import { BUSINESS } from '@/data/business';

const STATS = [
  { value: '5.0★', label: 'Google Rating' },
  { value: '2+', label: 'Happy Customers' },
  { value: '1', label: 'Trusted Store' },
];

export default function BusinessIntro() {
  return (
    <section
      id="about-intro"
      aria-labelledby="intro-heading"
      className="section-pad surface-raised border-t border-white/[0.04]"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-label text-blue-400 mb-4">
              Powerpet, Eluru · Andhra Pradesh
            </p>
            <h2 id="intro-heading" className="text-display-lg text-white mb-6">
              Your Local Power Backup Experts
            </h2>
            <p className="text-body-lg mb-4" style={{ color: '#9fb3ca' }}>
              Anusha Batteries &amp; Inverters is a battery and inverter store based in Eluru,
              Andhra Pradesh. We supply quality batteries and inverters for homes, offices, and
              commercial establishments across the region.
            </p>
            <p className="text-body mb-8" style={{ color: '#7391af' }}>
              Walk into our showroom on Alluri Sitharama Raju Stadium Road to speak with us
              directly about your power backup needs — or call us to enquire about the right
              solution for your setup.
            </p>

            {/* Action links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS.contact.phoneTel}`}
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-lg transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #1558c8, #3480ef)' }}
              >
                Call Us Now
              </a>
              <a
                href={BUSINESS.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium border border-white/20 text-neutral-200 rounded-lg hover:border-white/40 hover:bg-white/[0.04] transition-all"
              >
                Find Our Store
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/[0.08]">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-display-md font-bold"
                    style={{ color: '#5fa0f7', fontFamily: 'var(--font-display)' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-sm mt-0.5" style={{ color: '#7391af' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Store image */}
          <div className="relative">
            <div
              className="rounded-xl overflow-hidden"
              style={{ boxShadow: '0 24px 64px -16px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)' }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/business/storefront.webp"
                  alt="Anusha Batteries & Inverters store front in Powerpet, Eluru showing display of batteries and inverters"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Address badge */}
            <div
              className="absolute -bottom-4 -left-4 max-w-xs rounded-lg p-4 border border-white/[0.1]"
              style={{ background: '#0a1628' }}
            >
              <p className="text-xs font-medium mb-1" style={{ color: '#5fa0f7' }}>Our Location</p>
              <p className="text-sm text-white font-medium leading-snug">
                {BUSINESS.address.street}
              </p>
              <p className="text-xs mt-0.5" style={{ color: '#7391af' }}>
                {BUSINESS.address.area}, {BUSINESS.address.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
