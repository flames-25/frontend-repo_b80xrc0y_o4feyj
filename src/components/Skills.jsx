import React from 'react';

const skills = [
  { name: 'Structural Analysis', level: 'ETABS, SAP2000, STAAD', color: 'from-orange-500 to-amber-400' },
  { name: 'AutoCAD & Drafting', level: '2D/3D Plans, Detailing', color: 'from-amber-500 to-yellow-400' },
  { name: 'Site Management', level: 'Scheduling, QA/QC, Safety', color: 'from-orange-400 to-orange-600' },
  { name: 'Sustainability', level: 'Materials, Water, Energy', color: 'from-yellow-500 to-lime-400' },
];

export default function Skills() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Core Skills</h2>
        <p className="mt-2 text-gray-600">A playful stack of capabilities ready for real-world builds.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="group rounded-2xl border border-orange-100 bg-gradient-to-br from-white to-orange-50 p-5 hover:shadow-lg transition">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${s.color} shadow-md`} />
              <h3 className="mt-4 font-bold text-gray-900">{s.name}</h3>
              <p className="text-sm text-gray-600">{s.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
