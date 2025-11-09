import React from 'react';

const projects = [
  {
    title: 'Footbridge Concept',
    desc: 'A lightweight pedestrian bridge with modular steel trusses for fast deployment.',
  },
  {
    title: 'Community Learning Center',
    desc: 'Single-story reinforced concrete building optimized for daylighting and ventilation.',
  },
  {
    title: 'Rain-Friendly Street',
    desc: 'Permeable pavements and green swales to reduce urban runoff and heat.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-orange-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Featured Projects</h2>
        <p className="mt-2 text-gray-600">Playful models, real engineering thinking.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-orange-100 bg-white p-6 hover:shadow-xl transition overflow-hidden">
              <div className="h-32 rounded-xl bg-[repeating-linear-gradient(135deg,theme(colors.orange.200),theme(colors.orange.200)_10px,theme(colors.orange.100)_10px,theme(colors.orange.100)_20px)]" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.desc}</p>
              <div className="mt-4 flex gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700">Concept</span>
                <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">Student Work</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
