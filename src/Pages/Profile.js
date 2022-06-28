import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Profile() {
  return (
    <>
      <h1>
        This is Profile page
      </h1>

      <div className="profile-nav">
        <Link to='/profile/viewprofile' >View profile</Link>
        <Link to='/profile/editprofile' >Edit profile</Link>
      </div>
      <Outlet />
    </>
  )
}
