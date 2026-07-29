import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
function ProtectedRoute() {
    let token = localStorage.getItem("token")
  return (
    token ? <Outlet /> : <Navigate to ='/' />
  )
}

export default ProtectedRoute