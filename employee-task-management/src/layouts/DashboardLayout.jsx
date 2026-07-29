import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}

      <div className="flex-1">

        {/* Navbar */}
        <Navbar />
        

        {/* Dashboard Body */}

        {/* <main className="p-8">
            <Dashboard />
            <Task />
            <Addtask />
            <EditTask />
            <Profile />
        </main> */}
    <main className="p-6 bg-gray-100 min-h-screen">
            <Outlet />
    </main>
      </div>

    </div>
  )
}

export default DashboardLayout