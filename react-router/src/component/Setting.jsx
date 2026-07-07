import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

function Setting() {
  return (
    <div>
      <h2>Settings Page</h2>

      <NavLink to="profile">Profile</NavLink> |{" "}
      <NavLink to="info">Info</NavLink>

      <hr />

      <Outlet />
    </div>
  )
}

export default Setting