import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Menu = ({ menuName, menuData,setShowMenu }) => {
    const [showMenuData, setShowMenuData] = useState(false)
    return (
        <div className='w-full mb-1 mt- p-2 shadow'>

            <div className='flex items-center  w-full p-2'
                onClick={(e) => {
                    e.preventDefault()
                    setShowMenuData(!showMenuData)
                    
                }}>
                <div>
                    {showMenuData ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                </div>
                <h1 className='text-2xl p-2'>{menuName}</h1>
            </div>
            <div 
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`} 
        style={{ maxHeight: showMenuData ? '500px' : '0px' }}
    >
            <div className='mb-12 py-4'>
                {menuData.map((item) => <NavLink to="/contact" onClick={() => {
                    
                    setShowMenuData(!showMenuData)
                    setShowMenu(false)
                    
                }}  className=' underline '><p className='px-5 py-2 text-xl'>{item.title}</p></NavLink>)}
            </div>
            </div>
        </div>
    )
}

export default Menu