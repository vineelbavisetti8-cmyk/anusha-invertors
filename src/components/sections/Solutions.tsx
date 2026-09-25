import Image from 'next/image';
import Link from 'next/link';

const SOLUTIONS = [
  {
    id: 'home',
    title: 'Home Backup',
    description:
      'Keep your fans, lights, TVs, and essential appliances running during power cuts. A matched inverter and battery keeps your home comfortable through outages.',
    image: '/assets/sections/home-backup.webp',
    imageAlt: 'Modern home with inverter and battery backup keeping lights on during power cut',
    cta: 'Enquire for Home Solutions',
    href: '/contact?type=home',
  },
  {
    id: 'business',
    title: 'Business & Office Backup',
    description:
      'Protect your computers, billing systems, and communication equipment from downtime. Uninterrupted power keeps your business running when the grid fails.',
    image: '/assets/sections/business-backup.webp',
    imageAlt: 'Office workspace with computers and equipment powered by backup inverter system',
    cta: 'Enquire for Business Solutions',
    href: '/contact?type=business',
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="section-pad"
      style={{ background: '#0a1628' }}
    >
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="text-label text-blue-400 mb-3">Applications</p>
          <h2 id="solutions-heading" className="text-display-lg text-white mb-4">
            Power Backup for Every Need
          </h2>
          <p className="text-body-lg max-w-lg mx-auto" style={{ color: '#9fb3ca' }}>
            Whether you need backup for your home or your workplace, we can help you find the
            right solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SOLUTIONS.map((sol, i) => (
            <article
              key={sol.id}
              className="group relative rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={sol.image}
                  alt={sol.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                {/* Gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.5) 50%, rgba(10,22,40,0.1) 100%)',
                  }}
                />

                {/* Step number */}
                <div
                  className="absolute top-5 left-5 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{
                    background: 'rgba(21,88,200,0.7)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(52,128,239,0.3)',
                    color: '#93c0fb',
                  }}
                >
                  0{i + 1}
                </div>
              </div>

              {/* Content */}
              <div
                className="p-7"
                style={{ background: '#0a1628' }}
              >
                <h3 className="text-display-md text-white mb-3">{sol.title}</h3>
                <p className="text-body mb-6" style={{ color: '#7391af' }}>
                  {sol.description}
                </p>
                <Link
                  href={sol.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: '#5fa0f7' }}
                >
                  {sol.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
