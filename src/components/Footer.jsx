import React from 'react'
import FooterList from './FooterList'
import { BUSINESS_REGISTRATIONS ,LICENSES, AUDIT_AND_TAX_MANAGEMENT,TRADEMARK_REGISTRATIONS } from '../constants'
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='bg-primary flex flex-col justify-between px-4 py-3 sm:flex-row'>
      <FooterList title={"Business Registrations"} list={BUSINESS_REGISTRATIONS.slice(0,4)}/>
      <FooterList title={"LICENSES"} list={LICENSES.slice(0,4)}/>
      <FooterList title={"Audit & Tax"} list={AUDIT_AND_TAX_MANAGEMENT.slice(0,4)}/>
      <FooterList title={"TradeMark Registrations"} list={TRADEMARK_REGISTRATIONS.slice(0,4)}/>
      </div>


      <div className='bg-white flex items-center justify-between flex-wrap'>
        <p>Copyright © 2025 Bardai And Associates. All Rights Reserved</p>
        <div className='flex gap-4'>
          <NavLink to={""} className="hover:text-blue-500"><FaLinkedin/></NavLink>
          <NavLink to={""} className="hover:text-pink-800"><RiInstagramFill/></NavLink>
          <NavLink to={""} className="hover:text-blue-800"><FaSquareFacebook/></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer