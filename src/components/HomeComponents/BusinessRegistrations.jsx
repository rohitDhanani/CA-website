import React from 'react'
import Card from './Card'
import { BUSINESS_REGISTRATIONS } from '../../constants'
const BusinessRegistrations = () => {
    return (
        <div className='flex justify-around items-center flex-col p-2'>
            <h1 className='text-4xl text-center m-2 p-2 text-[#1E3A8A]'>Business Registrations</h1>
            <div className='flex gap-6 flex-wrap items-center justify-center'>
            {/* <div className='grid grid-cols-4 gap-4'> */}
                {BUSINESS_REGISTRATIONS.map(({ icon, title, description }) => {
                    return <Card key={title} icon={icon} title={title} description={description} />
                })}
            </div>

        </div>
    )
}

export default BusinessRegistrations