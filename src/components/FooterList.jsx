import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterList = ({title,list}) => {
  return (
    <div className='text-white'>
        <div>
        <h1 className='font-semibold text-lg p-2'>{title}</h1>

        </div>
        <div>
            {list.map((item,index)=><NavLink to={"/contact"} className='block p-2 hover:underline cursor-pointer' key={index}>{item.title}</NavLink>)}
        </div>

    </div>
  )
}

export default FooterList