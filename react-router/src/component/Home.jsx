import React from 'react'

function Home() {
  return (
    <>
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
    <div className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h2 className="text-5xl font-bold mb-6">
        Build Amazing Websites
      </h2>

      <p className="text-lg mb-8 max-w-2xl mx-auto">
        This is a modern homepage template built using Tailwind CSS.
        Customize it however you like.
      </p>

      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
        Get Started
      </button>
    </div>
  </section>
  <section className="max-w-7xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold text-center mb-12">
      Our Features
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="text-5xl mb-4">🚀</div>
        <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
        <p className="text-gray-600">
          Optimized for speed and user experience across all devices.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="text-5xl mb-4">🎨</div>
        <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
        <p className="text-gray-600">
          Beautiful UI components created using Tailwind CSS.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <div className="text-5xl mb-4">📱</div>
        <h3 className="text-xl font-semibold mb-3">Responsive</h3>
        <p className="text-gray-600">
          Looks great on desktop, tablet, and mobile devices.
        </p>
      </div>

    </div>
  </section>
    </>
  )
}

export default Home