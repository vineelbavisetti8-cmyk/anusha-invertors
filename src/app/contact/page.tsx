import type { Metadata } from 'next';
import { BUSINESS } from '@/data/business';
import EnquirySection from '@/components/sections/EnquirySection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact Anusha Batteries & Inverters in Eluru, Andhra Pradesh. Call ${BUSINESS.contact.phone} or visit us at ${BUSINESS.address.full}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section
        className="pt-32 pb-8"
        style={{ background: '#050c19' }}
        aria-labelledby="contact-heading"
      >
        <div className="container-site">
          <p className="text-label text-blue-400 mb-3">Reach Us</p>
          <h1 id="contact-heading" className="text-display-xl text-white mb-5">
            Contact Us
          </h1>
          <p className="text-body-lg max-w-xl" style={{ color: '#9fb3ca' }}>
            Call us directly for the fastest response, or fill in the form below and we will get
            back to you.
          </p>
        </div>
      </section>

      {/* Enquiry form + info */}
      <EnquirySection />
    </main>
  );
}
