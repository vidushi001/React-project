import React from 'react'

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            We are passionate about building modern, responsive, and
            user-friendly web applications that make people's lives easier.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
              alt="Team working together"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4">
              Our team is dedicated to creating high-quality software using
              modern technologies like React, Tailwind CSS, Node.js, and cloud
              platforms.
            </p>

            <p className="text-gray-600 mb-6">
              We believe in writing clean code, delivering exceptional user
              experiences, and continuously learning new technologies.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">100+</h3>
              <p className="text-gray-600 mt-2">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-600 mt-2">Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-600 mt-2">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace creativity and continuously improve our solutions.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              Honesty, transparency, and trust are at the core of everything we
              do.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive to deliver the highest quality in every project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;