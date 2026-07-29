import React from 'react'
import {
  FaBell,
  FaSearch,
} from "react-icons/fa";

function Navbar({pageName}) {
  return (
    <header className="bg-white shadow px-8 py-4 flex justify-between items-center">
    
              <h1 className="text-2xl font-bold">
                {pageName}
              </h1>
    
              <div className="flex items-center gap-4">
    
                <div className="hidden md:flex items-center border rounded-lg px-3">
    
                  <FaSearch className="text-gray-500" />
    
                  <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none p-2"
                  />
    
                </div>
    
                <FaBell className="text-xl cursor-pointer" />
    
                <img
                  src="https://i.pravatar.cc/40"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
    
              </div>
    
            </header>
  )
}

export default Navbar