'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const FLOW_STEPS = [
  {
    id: 'grid',
    label: 'Power Grid',
    description: 'AC power from the electricity supply enters your premises',
    icon: '⚡',
    color: '#5fa0f7',
  },
  {
    id: 'inverter',
    label: 'Inverter',
    description: 'Converts grid AC to DC for charging, and DC back to AC during outage',
    icon: '◻',
    color: '#3480ef',
  },
  {
    id: 'battery',
    label: 'Battery',
    description: 'Stores energy during normal supply — delivers it instantly when power fails',
    icon: '▪',
    color: '#1d6bdb',
  },
  {
    id: 'home',
    label: 'Your Home or Office',
    description: 'Clean, uninterrupted power to your appliances and devices',
    icon: '🏠',
    color: '#93c0fb',
  },
];

export default function PowerFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intervalRef.current = setInterval(() => {
            setActiveStep((s) => (s + 1) % FLOW_STEPS.length);
          }, 1800);
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => {
      obs.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="power-flow-heading"
      className="section-pad relative overflow-hidden"
      style={{ background: '#0a1628' }}
    >
      {/* Background image with heavy dark overlay */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <Image
          src="/assets/sections/power-flow.webp"
          alt=""
          fill
          className="object-cover object-center"
          loading="lazy"
          sizes="100vw"
        />
      </div>

      <div className="container-site relative z-10">
        <div className="text-center mb-16">
          <p className="text-label text-blue-400 mb-3">How It Works</p>
          <h2 id="power-flow-heading" className="text-display-lg text-white mb-4">
            Your Power, Always On
          </h2>
          <p className="text-body-lg max-w-xl mx-auto" style={{ color: '#9fb3ca' }}>
            When grid power fails, your inverter and battery system switches over in milliseconds —
            keeping your lights, fans, and appliances running without interruption.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="max-w-4xl mx-auto">
          {/* Desktop: horizontal */}
          <div className="hidden md:flex items-start gap-0" role="list" aria-label="Power flow steps">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.id} className="flex-1 flex items-start" role="listitem">
                {/* Step */}
                <div className="flex-1 text-center">
                  <button
                    className="w-full group cursor-default"
                    onClick={() => setActiveStep(i)}
                    aria-current={activeStep === i ? 'step' : undefined}
                    aria-label={`Step ${i + 1}: ${step.label}`}
                  >
                    {/* Circle indicator */}
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-500 border-2"
                      style={{
                        borderColor: activeStep === i ? step.color : 'rgba(255,255,255,0.1)',
                        background:
                          activeStep === i
                            ? `radial-gradient(circle, ${step.color}22, ${step.color}08)`
                            : 'rgba(255,255,255,0.03)',
                        boxShadow:
                          activeStep === i ? `0 0 24px 4px ${step.color}40` : 'none',
                      }}
                    >
                      <span
                        className="text-xl transition-colors duration-300"
                        style={{ color: activeStep === i ? step.color : '#516d8e' }}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                    </div>

                    <h3
                      className="text-heading mb-2 transition-colors duration-300"
                      style={{ color: activeStep === i ? '#f0f4f8' : '#7391af' }}
                    >
                      {step.label}
                    </h3>
                    <p
                      className="text-sm transition-opacity duration-300"
                      style={{
                        color: '#7391af',
                        opacity: activeStep === i ? 1 : 0.5,
                      }}
                    >
                      {step.description}
                    </p>
                  </button>
                </div>

                {/* Connector arrow */}
                {i < FLOW_STEPS.length - 1 && (
                  <div
                    className="flex-shrink-0 mt-7 w-8 relative"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 32 16" className="w-full h-4 overflow-visible">
                      <line
                        x1="0"
                        y1="8"
                        x2="28"
                        y2="8"
                        stroke="rgba(52,128,239,0.35)"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      {/* Animated dot */}
                      <circle r="3" fill="#3480ef" opacity={activeStep > i ? 1 : 0.2}>
                        {activeStep > i && (
                          <animateMotion
                            dur="1.2s"
                            repeatCount="indefinite"
                            path="M 0 8 L 28 8"
                          />
                        )}
                      </circle>
                      <polygon
                        points="28,5 32,8 28,11"
                        fill="rgba(52,128,239,0.5)"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden flex flex-col gap-6" role="list" aria-label="Power flow steps">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.id} role="listitem">
                <div
                  className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    border: `1px solid ${activeStep === i ? step.color + '40' : 'rgba(255,255,255,0.06)'}`,
                    background: activeStep === i ? `${step.color}08` : 'transparent',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold border transition-all duration-300"
                    style={{
                      borderColor: activeStep === i ? step.color : 'rgba(255,255,255,0.15)',
                      color: activeStep === i ? step.color : '#516d8e',
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-heading text-white mb-1">{step.label}</h3>
                    <p className="text-sm" style={{ color: '#7391af' }}>{step.description}</p>
                  </div>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <div className="ml-9 mt-1 h-5 flex items-center" aria-hidden="true">
                    <div
                      className="w-px h-full ml-4"
                      style={{ background: 'linear-gradient(to bottom, rgba(52,128,239,0.4), rgba(52,128,239,0.1))' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Callout */}
          <div
            className="mt-14 p-6 rounded-xl text-center border"
            style={{
              border: '1px solid rgba(52,128,239,0.2)',
              background: 'rgba(21,88,200,0.08)',
            }}
          >
            <p className="text-heading text-white mb-2">
              Switchover happens in milliseconds
            </p>
            <p className="text-body" style={{ color: '#9fb3ca' }}>
              A properly matched inverter and battery combination means your appliances experience
              no noticeable interruption during a power cut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
