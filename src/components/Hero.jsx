import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100/60 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-700 px-3 py-1 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Cartoon Construction Vibes
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Civil Engineering Graduate
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                Building Tomorrow, Playfully
              </span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              I’m a fresh civil engineer who loves turning ideas into strong, safe, and sustainable structures.
              This profile is a cheerful snapshot of my skills, projects, and aspirations—set on a friendly, cartoon job site.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 font-semibold shadow-md shadow-orange-200 transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white hover:bg-gray-50 text-gray-900 px-5 py-3 font-semibold border border-gray-200 transition">
                Contact Me
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[520px] rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 ring-1 ring-orange-200/60 overflow-hidden">
              <Spline
                scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/90 to-transparent" />
            </div>
          </div>
        </div>

        {/* Decorative site tape */}
        <div className="mt-10 select-none">
          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,theme(colors.orange.400),theme(colors.orange.400)_14px,theme(colors.yellow.300)_14px,theme(colors.yellow.300)_28px)] opacity-30" />
            <div className="relative backdrop-blur-sm bg-white/50 border border-orange-200 text-orange-700 px-4 py-2 text-sm font-semibold">
              Safety First: Hard hats on. Creativity engaged.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
