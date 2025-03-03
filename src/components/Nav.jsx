import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaWhatsapp } from "react-icons/fa";
import { AUDIT_AND_TAX_MANAGEMENT, BUSINESS_REGISTRATIONS, NGO_REGISTRATIONS, TRADEMARK_REGISTRATIONS } from '../constants';
import Menu from './Menu';



const LayoutComp = ({ title, data, }) => {
    return (
        <div className="w-fit p-4 flex gap-8">
            <div className={`space-y-3 w-64`}>
                <h3 className="font-semibold">{title}</h3>

                {data.map((item, index) => <NavLink key={index} to="/contact" className="block text-sm hover:underline">{item.title}</NavLink>)}

            </div>

        </div>
    )
}

const NavLinks = ({ navTitle, comp: Comp, data, innerTitle }) => {
    return (<>
        <div className='group relative cursor-pointer' >{navTitle}
            <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-center scale-x-0 group-hover:scale-x-100 rounded-full bg-white transition-transform duration-300 ease-out"
            />
            <div className='absolute scale-x-0 group-hover:scale-x-100 bg-primary h-fit w-fit top-12 transition-transform duration-300 ease-in-out -translate-x-28 rounded-md'>
                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                <div className={`absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary `} />
                <div className=' flex flex-col gap-4 flex-wrap p-2'>

                    <Comp title={innerTitle} data={data} />




                </div>
            </div>
        </div>

    </>)
}

const Nav = () => {

    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='w-fit'>

            <div className='hidden justify-end gap-4 sm:flex'>

                <NavLinks navTitle={"Start Business"} innerTitle={"BUSINESS REGISTRATIONS"} comp={LayoutComp} data={BUSINESS_REGISTRATIONS} />
                <NavLinks navTitle={"NGO Registrations"} innerTitle={"NGO REGISTRATIONS"} comp={LayoutComp} data={NGO_REGISTRATIONS} />
                <NavLinks navTitle={"Trademark"} innerTitle={"TRADEMARK REGISTRATIONS"} comp={LayoutComp} data={TRADEMARK_REGISTRATIONS} />
                <NavLinks navTitle={"Audit & Tax"} innerTitle={"AUDIT AND TAX MANAGEMENT"} comp={LayoutComp} data={AUDIT_AND_TAX_MANAGEMENT} />

            </div>
            <div className='flex justify-end gap-4 sm:hidden' >
                <FaBars onClick={() => setShowMenu(!showMenu)} />
                {<div className={`absolute top-12 right-0 bg-primary -6 w-screen min-h-screen max-h-screen overflow-y-auto flex flex-col  items-center text-xl 
    transition-transform duration-500 ease-in-out transform ${showMenu ? "translate-x-0" : "translate-x-full"
                    }`}>
                    <div className='hide-scrollbar py-12 min-h-screen max-h-screen overflow-y-auto flex flex-col justify-between'>

                        <div>
                            <Menu menuName={"Start Business"} menuData={BUSINESS_REGISTRATIONS} setShowMenu={setShowMenu} />
                            <Menu menuName={"NGO Registrations"} menuData={NGO_REGISTRATIONS} setShowMenu={setShowMenu} />
                            <Menu menuName={"Trademark"} menuData={TRADEMARK_REGISTRATIONS} setShowMenu={setShowMenu} />
                            <Menu menuName={"Audit & Tax"} menuData={AUDIT_AND_TAX_MANAGEMENT} setShowMenu={setShowMenu} />

                        </div>
                        <div>

                            <NavLink target="_blank" to="https://wa.me/919904236784?text=Hello" className=' align-bottom flex items-center justify-center gap-1 border rounded-md px-1 py-2 cursor-pointer bg-green-500 transition-all duration-300 ease-out mb-7'>
                                <span className="order-2 hover:order-1">91-9904236784</span>
                                <span className=' text-lg order-1 hover:order-2'>
                                    <FaWhatsapp />
                                </span>
                            </NavLink>
                        </div>
                    </div>

                </div>}
            </div>
        </nav>
    )
}

export default Nav