import React from 'react'
import { NavLink } from 'react-router-dom'
import HeroSec from './HeroSec'
import AboutSec from './AboutSec'
import BusinessRegistrations from './BusinessRegistrations'
import NgoRegistrations from './NgoRegistrations'
import TradeMark from './TradeMark'
import AuditAndTaxManagement from './AuditAndTaxManagement'

const Home = () => {
  return (
    <>
      <HeroSec />
      <AboutSec/>
      <BusinessRegistrations/>
      <NgoRegistrations/>
      <TradeMark/>
      <AuditAndTaxManagement/>

    </>
  )
}

export default Home