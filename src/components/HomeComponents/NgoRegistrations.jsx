import React from 'react'
import { NGO_REGISTRATIONS } from '../../constants'
import Card from './Card'

const NgoRegistrations = () => {
  return (
    <div className='flex justify-around items-center flex-col p-2 mb-4'>
            <h1 className='text-4xl text-center m-2 p-2 text-[#1E3A8A]'>Ngo Registrations</h1>
            <div className='flex gap-6 flex-wrap items-center justify-center'>
                {NGO_REGISTRATIONS.map(({ icon, title, description, bg }) => {
                    return <Card icon={icon} title={title} description={description} bg={bg}/>
                })}
            </div>

        </div>
  )
}

export default NgoRegistrations