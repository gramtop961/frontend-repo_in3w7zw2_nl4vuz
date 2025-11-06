import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-sky-950 via-sky-900 to-slate-950 text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (they don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-950/70 via-sky-900/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center sm:pt-28 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md">
          <Star className="h-3.5 w-3.5 text-amber-300" />
          <span className="text-amber-100/90">New</span>
          <span className="text-white/80">Ocean-calming AI visuals</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-sky-100 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Create soothing AI images & videos
          <br /> inspired by the ocean
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-sky-100/80 sm:text-lg">
          Drift into focus with our relaxation-first AI studio. Generate tranquil visuals, loops, and cinematic clips with a single prompt.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <Rocket className="h-4 w-4" />
            Start generating
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            Explore features
          </a>
        </div>

        {/* Floating stats */}
        <div className="mt-12 grid w-full max-w-3xl grid-cols-3 gap-3 text-left text-xs text-white/80 sm:text-sm">
          {[
            { label: 'Render time', value: '≤ 10s' },
            { label: 'Styles & moods', value: '120+' },
            { label: 'Resolution', value: '4K ready' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <div className="text-white/60">{s.label}</div>
              <div className="mt-1 text-lg font-semibold text-white">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
