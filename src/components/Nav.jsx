import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AUDIT_AND_TAX_MANAGEMENT, BUSINESS_REGISTRATIONS, NGO_REGISTRATIONS, TRADEMARK_REGISTRATIONS } from '../constants';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Menu from './Menu';

const PricingContent = () => {
    return (
        <div className="w-64 bg-primary p-6 shadow-xl ">
            <div className="mb-3 space-y-3">
                <h3 className="font-semibold">For Individuals</h3>
                <a href="#" className="block text-sm hover:underline">
                    Introduction
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Pay as you go
                </a>
            </div>
            <div className="mb-6 space-y-3">
                <h3 className="font-semibold">For Companies</h3>
                <a href="#" className="block text-sm hover:underline">
                    Startups
                </a>
                <a href="#" className="block text-sm hover:underline">
                    SMBs
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Enterprise
                </a>
            </div>
            <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
                Contact sales
            </button>
        </div>
    );
};

const StartBusiness = ({ title, data, title2 = "", data2 = "", title3 = "", data3 = "", width = "64" }) => {
    return (
        <div className="w-fit p-4 flex gap-8">
            <div className={`space-y-3 w-${width}`}>
                <h3 className="font-semibold">{title}</h3>

                {data.map((item, index) => <NavLink key={index} to="/contact" className="block text-sm hover:underline">{item.title}</NavLink>)}

            </div>
            {title2 && <div className="mb-6 space-y-3 w-64">
                <h3 className="font-semibold text-wrap">For Companies</h3>
                <a href="#" className="block text-sm hover:underline">
                    Startups
                </a>
                <a href="#" className="block text-sm hover:underline">
                    SMBs
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Enterprise
                </a>
            </div>}
            {title3 && <div className="mb-6 space-y-3 w-64">
                <h3 className="font-semibold">For Companies</h3>
                <a href="#" className="block text-sm hover:underline">
                    Startups
                </a>
                <a href="#" className="block text-sm hover:underline">
                    SMBs
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Enterprise
                </a>
            </div>}
            {/* <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
            Contact sales
        </button> */}
        </div>
    )
}

const NavLinks = ({ navTitle, comp: Comp, data, innerTitle, width, left = "1/2" }) => {
    return (<>
        <NavLink className='group relative ' to="/home">{navTitle}
            <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-center scale-x-0 group-hover:scale-x-100 rounded-full bg-white transition-transform duration-300 ease-out"
            />
            <div className='absolute scale-x-0 group-hover:scale-x-100 bg-primary h-fit w-fit top-12 transition-transform duration-300 ease-in-out -translate-x-28 rounded-md'>
                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                <div className={`absolute left-${left} top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary `} />
                <div className=' flex flex-col gap-4 flex-wrap p-2'>

                    <Comp title={innerTitle} data={data} width={width} />




                </div>
            </div>
        </NavLink>
        {/* <NavLink className='group relative' to="/services">Services
            <div className='absolute hidden group-hover:block bg-primary h-fit w-fit top-12 transition-transform duration-500 ease-in-out -translate-x-28 '>
                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary" />
                <ul className='p-2 flex flex-col gap-4'>
                    <li>dfg</li>
                    <li>dfg</li>
                    <li>fgd</li>
                    <PricingContent />
                </ul>
            </div></NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink> */}
    </>)
}

const Nav = () => {

    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='w-fit'>

            <div className='hidden justify-end gap-4 sm:flex'>

                <NavLinks navTitle={"Start Business"} innerTitle={"BUSINESS REGISTRATIONS"} comp={StartBusiness} data={BUSINESS_REGISTRATIONS} />
                <NavLinks navTitle={"NGO Registrations"} innerTitle={"NGO REGISTRATIONS"} comp={StartBusiness} data={NGO_REGISTRATIONS} />
                <NavLinks navTitle={"Trademark"} innerTitle={"TRADEMARK REGISTRATIONS"} comp={StartBusiness} data={TRADEMARK_REGISTRATIONS} />
                <NavLinks navTitle={"Audit & Tax"} innerTitle={"AUDIT AND TAX MANAGEMENT"} comp={StartBusiness} data={AUDIT_AND_TAX_MANAGEMENT} width={"64"} left='1/2' />

            </div>
            <div className='flex justify-end gap-4 sm:hidden' >
                <FaBars  onClick={() => setShowMenu(!showMenu)}/>
                {<div className={`absolute top-12 right-0 bg-primary -6 w-screen min-h-screen max-h-screen overflow-y-auto flex flex-col  items-center text-xl 
    transition-transform duration-500 ease-in-out transform ${showMenu ? "translate-x-0" : "translate-x-full"
                    }`}>
                        <div className='py-12 min-h-screen max-h-screen overflow-y-auto'>

                    <Menu menuName={"Start Business"} menuData={BUSINESS_REGISTRATIONS} setShowMenu={setShowMenu} />
                    <Menu menuName={"NGO Registrations"} menuData={NGO_REGISTRATIONS} setShowMenu={setShowMenu} />
                    <Menu menuName={"Trademark"} menuData={TRADEMARK_REGISTRATIONS} setShowMenu={setShowMenu} />
                    <Menu menuName={"Audit & Tax"} menuData={AUDIT_AND_TAX_MANAGEMENT} setShowMenu={setShowMenu} />
                        </div>
                    {/* <NavLink to="/contact">Contact</NavLink>
                    
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink> */}
                </div>}
            </div>
        </nav>
    )
}

export default Nav