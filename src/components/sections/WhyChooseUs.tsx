import Image from 'next/image';
import Link from 'next/link';

const REASONS = [
  {
    id: 'local',
    title: 'Locally Based in Eluru',
    body: 'We are a physical store in Powerpet, Eluru. Visit us in person to discuss your requirements directly.',
  },
  {
    id: 'selection',
    title: 'Wide Product Selection',
    body: 'Our showroom carries a range of battery and inverter options to suit different budgets and requirements.',
  },
  {
    id: 'expert',
    title: 'Knowledgeable Staff',
    body: 'Our team can help you choose the right capacity and type of battery-inverter setup for your needs.',
  },
  {
    id: 'service',
    title: 'Personal Customer Service',
    body: 'Call us directly to ask questions, get a recommendation, or arrange a visit to our store.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-heading"
      className="section-pad relative overflow-hidden"
      style={{ background: '#050c19' }}
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <Image
          src="/assets/sections/why-choose-us.webp"
          alt=""
          fill
          className="object-cover object-center"
          loading="lazy"
          sizes="100vw"
        />
      </div>

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Showroom image */}
          <div className="order-2 lg:order-1">
            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 24px 64px -16px rgba(0,0,0,0.7)',
              }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/business/showroom-interior.webp"
                  alt="Anusha Batteries & Inverters showroom interior with batteries and inverters on display shelves"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Reasons */}
          <div className="order-1 lg:order-2">
            <p className="text-label text-blue-400 mb-4">Why Anusha</p>
            <h2 id="why-heading" className="text-display-lg text-white mb-10">
              Why Choose Us?
            </h2>

            <div className="flex flex-col gap-7">
              {REASONS.map((reason, i) => (
                <div key={reason.id} className="flex gap-5">
                  {/* Number */}
                  <div
                    className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center text-sm font-bold mt-0.5"
                    style={{
                      background: 'rgba(21,88,200,0.15)',
                      border: '1px solid rgba(52,128,239,0.25)',
                      color: '#5fa0f7',
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-heading text-white mb-1.5">{reason.title}</h3>
                    <p className="text-body" style={{ color: '#7391af' }}>{reason.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-lg transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #1558c8, #3480ef)' }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
