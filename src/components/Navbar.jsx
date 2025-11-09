import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-white/70 border-b border-orange-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 shadow-md" />
          <span className="font-extrabold text-gray-900 tracking-tight">Civil Grad</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-semibold text-gray-700">
          <a href="#projects" className="hover:text-orange-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
          <a href="mailto:hello@civilgrad.site" className="inline-flex items-center rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 transition">
            Email Me
          </a>
        </nav>
      </div>
    </header>
  );
}
