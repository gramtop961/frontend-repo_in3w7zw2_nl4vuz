import React from 'react';
import { Sparkles, Waves, Film, Image as ImageIcon, Clock } from 'lucide-react';

const features = [
  {
    icon: Waves,
    title: 'Ocean-calibrated styles',
    desc: 'Curated prompts and models tuned for serene, nature-forward aesthetics.'
  },
  {
    icon: Film,
    title: 'Video loops & scenes',
    desc: 'Generate seamless, meditative loops or cinematic sequences ready to share.'
  },
  {
    icon: ImageIcon,
    title: 'Ultra-clean renders',
    desc: 'High-fidelity outputs with grain control, color harmony, and depth-aware detail.'
  },
  {
    icon: Clock,
    title: 'Fast, calm by design',
    desc: 'Optimized pipeline delivers results in seconds without compromising quality.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-100/90 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            Crafted to unwind
          </div>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">A studio that feels like a breath of fresh air</h2>
          <p className="mt-3 text-sky-100/80">Everything you need to compose relaxing visuals — streamlined and distraction‑free.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 transition hover:border-white/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-sky-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
