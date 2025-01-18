import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { PERSONAL_INFO } from '../../constants'

const HeroSec = () => {
  const targetRef = useRef(null);
  
    useEffect(() => {
      // Scroll to the element when the component is loaded
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, []);
  return (
    <div ref={targetRef} className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('src/assets/img3.jpg')] bg-cover bg-center z-0 h-screen flex flex-col justify-center gap-10 items-center text-white">
      <div className='flex flex-col justify-center items-center gap-1 text-white'>

        <h1 className='text-5xl font-bold px-24 bg-gradient-to-r from-[#2563EB]  to-[#93C5FD] inline-block text-transparent bg-clip-text'>{PERSONAL_INFO.firm}</h1>
        <h2 className='font-bold bg-gradient-to-r from-[#809ff7]  to-[#22D3EE] inline-block text-transparent bg-clip-text'>{PERSONAL_INFO.tagLine}</h2>
      </div>

      <div className='hover:bg-buttonHover flex flex-col justify-center items-center text-white  rounded p-1 px-2 bg-button'>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  )
}

export default HeroSec