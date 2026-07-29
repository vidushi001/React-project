import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
function PublicRoute() {
    let token = localStorage.getItem("token")
  return (
    token ? <Navigate to ='/dashboard' /> : <Outlet />
  )
}

export default PublicRoute