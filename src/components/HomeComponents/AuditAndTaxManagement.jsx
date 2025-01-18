import React from 'react'
import { AUDIT_AND_TAX_MANAGEMENT } from '../../constants'
import Card from './Card'

const AuditAndTaxManagement = () => {
  return (
    <div className='flex justify-around items-center flex-col p-2'>
            <h1 className='text-4xl text-center m-2 p-2 text-[#1E3A8A]'>Audit & TaxManagement</h1>
            <div className='flex gap-6 flex-wrap items-center justify-center'>
                {AUDIT_AND_TAX_MANAGEMENT.map(({ icon, title, description, bg }) => {
                    return <Card icon={icon} title={title} description={description} bg={bg}/>
                })}
            </div>

        </div>
  )
}

export default AuditAndTaxManagement