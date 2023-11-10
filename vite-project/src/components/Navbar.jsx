import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
 <div className='bg-teal-50 grid grid-cols-3 py-6'>
        <div className=''>
            <Link to={"/"}>
          <h2 className='font-bold px-2'>MERN-Blog Application</h2>
          </Link>
        </div>

        <div className='flex gap-6 font-semibold'>
          <Link to={"/"} className='hover:text-teal-500'><h3>Home</h3></Link>
          <Link to={"/login"} className='hover:text-teal-500'><h3>Login</h3></Link>
          <Link to={"/register"} className='hover:text-teal-500'><h3>Register</h3></Link>
          <Link to={"/addblog"} className='hover:text-teal-500'><h3>Addblog</h3></Link>
          <Link to={"/profile"} className='hover:text-teal-500'><h3>Profile</h3></Link>
        
        </div>
        <div className='flex justify-end items-end px-4 font-bold'>
            <h3>Logout</h3>
          </div>
      </div>
 </>
  )
}
