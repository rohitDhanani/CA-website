import React from 'react'
import { TRADEMARK_REGISTRATIONS } from '../../constants'
import Card from './Card'

const TradeMark = () => {
  return (
    <div className='flex justify-around items-center flex-col p-2 bg-[#F0F9FF] py-5'>
            <h1 className='text-4xl text-center m-2 p-2'>Trademark Registrations</h1>
            <div className='flex gap-6 flex-wrap items-center justify-center'>
                {TRADEMARK_REGISTRATIONS.map(({ icon, title, description, bg }) => {
                    return <Card icon={icon} title={title} description={description} bg={bg}/>
                })}
            </div>

        </div>
  )
}

export default TradeMark