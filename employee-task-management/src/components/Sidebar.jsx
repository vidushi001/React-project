import React from 'react'
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white hidden md:block">
    
            <div className="p-6 text-2xl font-bold border-b border-blue-700">
              Task Portal
            </div>
    
            <nav className="mt-6">
    
              <ul className="space-y-2">
    
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                    `block px-6 py-3 rounded ${
                        isActive
                        ? "bg-blue-700 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                    }
                >
                    Dashboard
                </NavLink>
                </li>
    
                <li>
                  <NavLink
                    to="/tasks"
                    className={({ isActive }) =>
                    `block px-6 py-3 rounded ${
                        isActive
                        ? "bg-blue-700 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                    }
                >
                    Tasks
                </NavLink>
                </li>
    
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                    `block px-6 py-3 rounded ${
                        isActive
                        ? "bg-blue-700 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                    }
                >
                    Profile
                </NavLink>
                </li>
    
               <li>
                  <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                    `block px-6 py-3 rounded ${
                        isActive
                        ? "bg-blue-700 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                    }
                >
                    Logout
                </NavLink>
                </li>
    
              </ul>
    
            </nav>
    
          </aside>
  )
}

export default Sidebar