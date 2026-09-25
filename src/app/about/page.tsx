import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS } from '@/data/business';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about Anusha Batteries & Inverters — a local battery and inverter store in Powerpet, Eluru, Andhra Pradesh. Call ${BUSINESS.contact.phone}.`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main>
      {/* Page header */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: '#050c19' }}
        aria-labelledby="about-heading"
      >
        <div className="container-site">
          <p className="text-label text-blue-400 mb-3">Our Story</p>
          <h1 id="about-heading" className="text-display-xl text-white mb-5">
            About {BUSINESS.name}
          </h1>
          <p className="text-body-lg max-w-2xl" style={{ color: '#9fb3ca' }}>
            A local battery and inverter store serving homes and businesses in Eluru,
            Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad" style={{ background: '#0a1628' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-display-md text-white mb-6">Who We Are</h2>
              <div className="flex flex-col gap-4 text-body" style={{ color: '#9fb3ca' }}>
                <p>
                  Anusha Batteries &amp; Inverters is a physical retail store located on
                  Alluri Sitharama Raju Stadium Road, Powerpet, Eluru, Andhra Pradesh. We
                  stock batteries and inverters for residential and commercial applications.
                </p>
                <p>
                  Our focus is on providing reliable power backup solutions suited to the
                  requirements of homes, offices, and small businesses in the Eluru region.
                </p>
                <p>
                  We are a walk-in store — visit us to browse our selection, ask questions,
                  and get a recommendation for your specific setup. You can also call us
                  directly for enquiries.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`tel:${BUSINESS.contact.phoneTel}`}
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #1558c8, #3480ef)' }}
                >
                  Call Us
                </a>
                <a
                  href={BUSINESS.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-medium border border-white/20 text-neutral-200 rounded-lg hover:border-white/40 transition-all"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/business/showroom-interior.webp"
                  alt="Inside the Anusha Batteries & Inverters showroom in Eluru"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Address info */}
          <div
            className="mt-16 rounded-xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
            style={{ background: '#0f2039', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div>
              <h3 className="text-xs font-semibold mb-2" style={{ color: '#5fa0f7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Address</h3>
              <p className="text-body text-white">{BUSINESS.address.street}</p>
              <p className="text-sm" style={{ color: '#7391af' }}>
                {BUSINESS.address.area}, {BUSINESS.address.city},<br />
                {BUSINESS.address.state} {BUSINESS.address.pincode}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold mb-2" style={{ color: '#5fa0f7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone</h3>
              <a
                href={`tel:${BUSINESS.contact.phoneTel}`}
                className="text-body text-white hover:text-blue-300 transition-colors"
              >
                {BUSINESS.contact.phone}
              </a>
            </div>
            <div>
              <h3 className="text-xs font-semibold mb-2" style={{ color: '#5fa0f7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Rating</h3>
              <p className="text-body text-white">{BUSINESS.rating.score} / 5 ★</p>
              <p className="text-sm" style={{ color: '#7391af' }}>{BUSINESS.rating.count} reviews on Google</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
