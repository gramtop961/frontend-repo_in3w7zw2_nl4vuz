import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Drift',
    price: '$9',
    cadence: 'month',
    features: ['100 image generations', '10 short video loops', '4K exports', 'Commercial use'],
    cta: 'Start drifting',
    popular: false,
  },
  {
    name: 'Swell',
    price: '$19',
    cadence: 'month',
    features: ['500 image generations', '50 video loops', 'Priority rendering', 'Style library access'],
    cta: 'Ride the swell',
    popular: true,
  },
  {
    name: 'Tide',
    price: '$49',
    cadence: 'month',
    features: ['Unlimited images', '200 video loops', 'Cinematic sequences', 'Team collaboration'],
    cta: 'Flow with the tide',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Simple, calm pricing</h2>
          <p className="mt-3 text-sky-100/80">No surprises. Cancel anytime. Find the flow that suits your practice.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-6 ${
                t.popular
                  ? 'border-sky-400/40 bg-gradient-to-b from-sky-400/10 to-sky-400/0'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs text-sky-200">
                  Most popular
                </div>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold">{t.price}</span>
                <span className="text-sm text-sky-100/70">/ {t.cadence}</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-sky-100/90">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-sky-300" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#home"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  t.popular
                    ? 'bg-sky-400 text-slate-950 hover:bg-sky-300'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
