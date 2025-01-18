import React from 'react'
import { ABOUT_TEXT, ABOUT_TEXT2 } from '../../constants'
import { NavLink } from 'react-router-dom'
const AboutSec = () => {
  return (
    <div className='bg-[#F0F9FF] flex justify-center items-center flex-col gap-1 p-8'>
        <h1 className='text-4xl tracking-wider leading-loose text-[#1E3A8A]'>CA in Porbandar</h1>
        <p className='tracking-wider leading-loose px-8 py-1 text-[#1F2937]'>{ABOUT_TEXT}</p>
        <p className='tracking-wider leading-loose px-8 py-1 text-[#1F2937]'>{ABOUT_TEXT2}</p>
        <div className='bg-button hover:bg-buttonHover flex flex-col justify-center items-center text-white border rounded p-1 px-2 mt-5'>
        <NavLink to="/about">Read More</NavLink>
        </div>

    </div>
  )
}

export default AboutSec