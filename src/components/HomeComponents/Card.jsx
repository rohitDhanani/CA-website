import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTree } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";


const Card = ({icon:Icon = FaMoneyCheckDollar,title,description,bg='bg-[#F0F9FF]',height='72',width='60'}) => {
  return (
    <div className={`${bg} p-2 rounded max-w-${width} min-w-${width} min-h-${height} shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300`}>
        <NavLink to={'/contact'}>
            <div className='flex justify-center items-center flex-col text-center p-4'>
                <div className='text-[#1E3A8A] text-2xl'><Icon/></div>
                <div><h1 className='font-bold text-xl p-1 text-[#374151]'>{title}</h1></div>
                <div className='p-1 tracking-wide leading-relaxed text-wrap text-[#1F2937]'>{description}</div>
            </div>
        </NavLink>
    </div>
  )
}

export default Card