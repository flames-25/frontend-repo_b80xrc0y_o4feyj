import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-white to-orange-50 p-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
          <p className="mt-2 text-gray-600">Have an opportunity or collaboration in mind? I’d love to hear about it.</p>

          <form className="mt-6 grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="email" placeholder="Email address" className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Subject" className="sm:col-span-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <textarea placeholder="Message" rows="4" className="sm:col-span-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-sm text-gray-500">I usually respond within 24 hours.</p>
              <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 font-semibold shadow-md shadow-orange-200 transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
