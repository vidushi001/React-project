import { useState } from 'react'

import './App.css'
import Login from './pages/Login'
import DashboardLayout from './layouts/DashboardLayout'
import {RouterProvider } from 'react-router-dom'
import { BrowserRoute } from "./routes/BrowserRoute";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className=''>Employee Task Management System</h1> */}
      <RouterProvider router={BrowserRoute} />
      
    </>
  )
}

export default App
