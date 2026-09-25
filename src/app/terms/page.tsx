import type { Metadata } from 'next';
import { BUSINESS } from '@/data/business';

export const metadata: Metadata = {
  title: 'Terms of Use',
  alternates: { canonical: '/terms' },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20" style={{ background: '#050c19' }}>
      <div className="container-site max-w-3xl">
        <h1 className="text-display-lg text-white mb-8">Terms of Use</h1>
        <div className="flex flex-col gap-6 text-body" style={{ color: '#9fb3ca' }}>
          <p>
            By accessing this website, you agree to the following terms of use. This website is
            operated by {BUSINESS.name}, {BUSINESS.address.full}.
          </p>
          <h2 className="text-heading text-white">Use of This Website</h2>
          <p>
            This website is provided for informational purposes only. Product information,
            specifications, and pricing on this website may not be complete and should be
            confirmed by contacting us directly at {BUSINESS.contact.phone}.
          </p>
          <h2 className="text-heading text-white">Accuracy of Information</h2>
          <p>
            We make reasonable efforts to keep information on this website accurate, but we
            cannot guarantee that all information is complete or up to date at all times.
          </p>
          <h2 className="text-heading text-white">Contact</h2>
          <p>
            For questions, contact us at {BUSINESS.contact.phone} or visit our store at{' '}
            {BUSINESS.address.full}.
          </p>
        </div>
      </div>
    </main>
  );
}
