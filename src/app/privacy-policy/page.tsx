import type { Metadata } from 'next';
import { BUSINESS } from '@/data/business';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-20" style={{ background: '#050c19' }}>
      <div className="container-site max-w-3xl">
        <h1 className="text-display-lg text-white mb-8">Privacy Policy</h1>
        <div className="prose-invert flex flex-col gap-6 text-body" style={{ color: '#9fb3ca' }}>
          <p>
            This website is operated by {BUSINESS.name}, located at {BUSINESS.address.full}.
          </p>
          <h2 className="text-heading text-white">Information We Collect</h2>
          <p>
            When you use the enquiry form on this site, we may collect your name, phone number,
            and any additional information you choose to provide. This information is used solely
            to respond to your enquiry.
          </p>
          <h2 className="text-heading text-white">How We Use Your Information</h2>
          <p>
            We use the contact information you provide only to respond to your enquiry about our
            products. We do not share your personal information with third parties.
          </p>
          <h2 className="text-heading text-white">Cookies</h2>
          <p>
            This website does not use tracking cookies. We may use functional cookies that are
            strictly necessary for the operation of the website.
          </p>
          <h2 className="text-heading text-white">Contact</h2>
          <p>
            For any privacy concerns, contact us at {BUSINESS.contact.phone}.
          </p>
        </div>
      </div>
    </main>
  );
}
