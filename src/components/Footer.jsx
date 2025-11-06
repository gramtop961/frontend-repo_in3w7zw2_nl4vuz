import React from 'react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-lg font-semibold">CalmOcean AI</div>
          <p className="mt-1 text-sm text-sky-100/70">Relaxation-first image & video generation</p>
        </div>
        <nav className="flex items-center gap-5 text-sm text-sky-100/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#showcase" className="hover:text-white">Showcase</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </nav>
      </div>
      <div className="mx-auto mt-6 max-w-6xl px-6 text-center text-xs text-sky-100/60">
        © {new Date().getFullYear()} CalmOcean AI. All rights reserved.
      </div>
    </footer>
  );
}
