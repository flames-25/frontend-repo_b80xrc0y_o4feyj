import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-10 bg-orange-50/60 border-t border-orange-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Civil Engineering Graduate — Built with a playful construction theme.
        </div>
      </footer>
    </div>
  );
}

export default App;
