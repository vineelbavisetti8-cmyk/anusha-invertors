'use client';

import { useState } from 'react';
import { BUSINESS } from '@/data/business';

type FormData = {
  name: string;
  phone: string;
  requirement: string;
  message: string;
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const REQUIREMENT_OPTIONS = [
  { value: '', label: 'Select your requirement' },
  { value: 'tubular-battery', label: 'Tubular Battery' },
  { value: 'flat-plate-battery', label: 'Flat Plate Battery' },
  { value: 'inverter', label: 'Inverter' },
  { value: 'combo', label: 'Inverter + Battery Combo' },
  { value: 'ups', label: 'UPS System' },
  { value: 'service', label: 'Service / Other' },
];

export default function EnquirySection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    requirement: '',
    message: '',
  });
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^[+\d][\d\s\-()]{7,}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number';
    if (!form.requirement) errs.requirement = 'Please select a requirement';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setState('submitting');

    // Static site: compose a mailto link for now.
    // TODO: replace with a real form submission endpoint when backend is set up.
    const subject = encodeURIComponent(
      `Enquiry — ${REQUIREMENT_OPTIONS.find((o) => o.value === form.requirement)?.label ?? form.requirement}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nRequirement: ${form.requirement}\nMessage: ${form.message}`
    );

    // Open mailto — works as a fallback without a server
    if (typeof window !== 'undefined') {
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    }

    setState('success');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormData]) {
      setErrors((er) => ({ ...er, [e.target.name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-lg text-sm text-white placeholder-neutral-500 transition-all border outline-none focus:ring-2 focus:ring-blue-500 ${
      errors[field]
        ? 'border-red-500/60 bg-red-500/[0.05]'
        : 'border-white/10 bg-white/[0.04] focus:border-blue-500/60 focus:bg-white/[0.06]'
    }`;

  if (state === 'success') {
    return (
      <section id="enquiry" className="section-pad" style={{ background: '#0a1628' }}>
        <div className="container-site">
          <div className="max-w-lg mx-auto text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(21,88,200,0.15)', border: '1px solid rgba(52,128,239,0.3)' }}
            >
              <CheckIcon className="w-8 h-8" style={{ color: '#5fa0f7' }} />
            </div>
            <h2 className="text-display-md text-white mb-3">Enquiry Sent</h2>
            <p className="text-body mb-8" style={{ color: '#9fb3ca' }}>
              Thank you for your interest. You can also call us directly for a faster response.
            </p>
            <a
              href={`tel:${BUSINESS.contact.phoneTel}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white rounded-lg"
              style={{ background: 'linear-gradient(135deg, #1558c8, #3480ef)' }}
            >
              Call {BUSINESS.contact.phone}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="enquiry"
      aria-labelledby="enquiry-heading"
      className="section-pad"
      style={{ background: '#0a1628' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — info */}
          <div>
            <p className="text-label text-blue-400 mb-3">Get in Touch</p>
            <h2 id="enquiry-heading" className="text-display-lg text-white mb-5">
              Enquire About a Product
            </h2>
            <p className="text-body-lg mb-8" style={{ color: '#9fb3ca' }}>
              Fill in the form and we will get back to you. Or call us directly —
              that is often the fastest way to get a recommendation.
            </p>

            {/* Direct contact */}
            <div
              className="rounded-xl p-6"
              style={{
                background: '#0f2039',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h3 className="text-heading text-white mb-5">Direct Contact</h3>
              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${BUSINESS.contact.phoneTel}`}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(21,88,200,0.15)', border: '1px solid rgba(52,128,239,0.2)' }}
                  >
                    <PhoneIcon className="w-4 h-4" style={{ color: '#5fa0f7' }} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: '#516d8e' }}>Call Us</p>
                    <p className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {BUSINESS.contact.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(21,88,200,0.15)', border: '1px solid rgba(52,128,239,0.2)' }}
                  >
                    <MapPinIcon className="w-4 h-4" style={{ color: '#5fa0f7' }} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: '#516d8e' }}>Visit Us</p>
                    <p className="text-sm text-white leading-relaxed">
                      {BUSINESS.address.full}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: '#0f2039',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <form onSubmit={handleSubmit} noValidate aria-label="Product enquiry form">
              <div className="flex flex-col gap-5">

                {/* Name */}
                <div>
                  <label htmlFor="enq-name" className="text-sm font-medium text-neutral-200 block mb-1.5">
                    Full Name <span className="text-red-400" aria-hidden>*</span>
                  </label>
                  <input
                    id="enq-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-describedby={errors.name ? 'enq-name-error' : undefined}
                    aria-invalid={!!errors.name}
                    className={inputClass('name')}
                  />
                  {errors.name && (
                    <p id="enq-name-error" className="text-xs text-red-400 mt-1" role="alert">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="enq-phone" className="text-sm font-medium text-neutral-200 block mb-1.5">
                    Phone Number <span className="text-red-400" aria-hidden>*</span>
                  </label>
                  <input
                    id="enq-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your mobile number"
                    autoComplete="tel"
                    required
                    aria-required="true"
                    aria-describedby={errors.phone ? 'enq-phone-error' : undefined}
                    aria-invalid={!!errors.phone}
                    className={inputClass('phone')}
                  />
                  {errors.phone && (
                    <p id="enq-phone-error" className="text-xs text-red-400 mt-1" role="alert">{errors.phone}</p>
                  )}
                </div>

                {/* Requirement */}
                <div>
                  <label htmlFor="enq-requirement" className="text-sm font-medium text-neutral-200 block mb-1.5">
                    What do you need? <span className="text-red-400" aria-hidden>*</span>
                  </label>
                  <select
                    id="enq-requirement"
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-describedby={errors.requirement ? 'enq-req-error' : undefined}
                    aria-invalid={!!errors.requirement}
                    className={`${inputClass('requirement')} cursor-pointer`}
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%237391af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px', paddingRight: '36px', appearance: 'none' }}
                  >
                    {REQUIREMENT_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value} className="bg-[#0f2039]">
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {errors.requirement && (
                    <p id="enq-req-error" className="text-xs text-red-400 mt-1" role="alert">{errors.requirement}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="enq-message" className="text-sm font-medium text-neutral-200 block mb-1.5">
                    Additional Details
                    <span className="ml-1 text-xs" style={{ color: '#516d8e' }}>(optional)</span>
                  </label>
                  <textarea
                    id="enq-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="E.g. required backup hours, number of rooms, existing setup..."
                    rows={3}
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="enquiry-submit-btn"
                  disabled={state === 'submitting'}
                  aria-busy={state === 'submitting'}
                  className="w-full py-3.5 text-base font-semibold text-white rounded-lg transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #1558c8, #3480ef)' }}
                >
                  {state === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                </button>

                <p className="text-xs text-center" style={{ color: '#516d8e' }}>
                  Or call us directly: <a href={`tel:${BUSINESS.contact.phoneTel}`} className="hover:text-blue-300 transition-colors">{BUSINESS.contact.phone}</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icons
function CheckIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
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
function MapPinIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}
