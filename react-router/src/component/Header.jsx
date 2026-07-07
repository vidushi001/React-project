import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'


function Header() {
  return (
     <>
      <nav className="bg-slate-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">MyWebsite</h1>

          <div className="flex gap-6">
            <NavLink
              to="/" className ={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-600 hover:text-blue-600"}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className ={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-600 hover:text-blue-600"}
            >
              About
            </NavLink>

            <NavLink
              to="/store"
              className ={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-600 hover:text-blue-600"}
            >
              Store
            </NavLink>
             <NavLink
              to="/settings"
              className ={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-600 hover:text-blue-600"}
            >
              Settings
            </NavLink>
          </div>
        </div>
      </nav>
<Outlet />
      
    </>
  )
}

export default Header