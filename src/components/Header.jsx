import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import { FaWhatsapp } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { PERSONAL_INFO } from '../constants'


const Header = () => {
  return (
    <header className='bg-primary text-white sticky top-0 z-20 mx-auto flex w-full items-center justify-between p-2 flex-wrap h-15'>
      <Logo />
      <Nav />
      <NavLink target="_blank" to="https://wa.me/9904236784?text=Hello" className='hidden md:flex items-center justify-center gap-1 border rounded-md px-3 py-2 cursor-pointer hover:bg-green-500 transition-all duration-300 ease-out'>
        <span className="order-2 hover:order-1">91-{PERSONAL_INFO.phone}</span>
        <div className=' text-lg order-1 hover:order-2'>
          <FaWhatsapp />
        </div>
      </NavLink>
    </header>
  )
}

export default Header