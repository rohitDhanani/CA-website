import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { PERSONAL_INFO } from '../constants'


const Header = () => {
  return (
    <header className='bg-primary text-white sticky top-0 z-20 mx-auto flex w-full items-center justify-between p-2 flex-wrap h-15'>
      <Logo />
      <Nav />
      <div className='hidden md:flex items-center justify-center gap-1 border rounded-md px-3 py-2 cursor-pointer hover:bg-green-500 transition-all duration-300 ease-out'>
        <span className="order-2 hover:order-1">91-{PERSONAL_INFO.phone}</span>
        <NavLink className=' text-lg order-1 hover:order-2' target="_blank" to={"https://wa.me/9904236784?text=Hello"}  rel="noopener noreferrer">
          <FaWhatsapp />
        </NavLink>
      </div>
    </header>
  )
}

export default Header