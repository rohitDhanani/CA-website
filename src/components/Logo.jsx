import React from 'react'
import logo from '../assets/logo2.svg'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to={'/'} className='logo h-8 w-36 flex items-center'>
        <img src={logo} alt="logo" className='text-white '/>
    </NavLink>
  )
}

export default Logo