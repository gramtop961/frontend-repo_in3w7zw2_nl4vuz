import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            CalmOcean AI
          </a>
          <nav className="hidden items-center gap-6 text-sm text-sky-100/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#showcase" className="hover:text-white">Showcase</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <a
            href="#pricing"
            className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Get started
          </a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
