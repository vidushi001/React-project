import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">MyWebsite</h2>
            <p className="text-sm text-gray-400 mt-2">
              Building modern web experiences.
            </p>
          </div>
          <nav className="flex gap-8 text-sm font-medium">
            <Link
              to="/career"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Career
            </Link>

            <Link
              to="/contactUs"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Contact Us
            </Link>

            <Link
              to="/about"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              About
            </Link>

            <Link
              to="/privacy"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>

        <hr className="border-slate-700 my-6" />

        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer