import React from 'react';

const samples = [
  {
    title: 'Coastal dusk stills',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Gentle surf loop',
    url: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Moonlit bay',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-gradient-to-b from-slate-950 to-sky-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">See the calm</h2>
          <p className="mt-3 text-sky-100/80">A glimpse of the soothing imagery and loops you can craft in seconds.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {samples.map((s) => (
            <figure key={s.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={s.url}
                alt={s.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="p-4 text-sm text-sky-100/80">{s.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
