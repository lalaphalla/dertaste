import React from 'react'
import foodpand from '../assets/foodpanda.jpg'
import nham24 from '../assets/nham24.png'
import grab from '../assets/grab.png'  
export default function DeliveryCard() {
  return (
    <div className='bg-primary-color mr-4 pt-4 pl-4'>
        <h4 className='text-xl text-left'>Delivery</h4>
        <div className='flex items-center pb-2'>
            <img src={foodpand} alt='..' className='w-10 h-10 rounded-full mr-4'/>
            <p>Food Panda </p>
        </div>
        <div className='flex items-center pb-2'>
            <img src={grab} alt='..' className='w-10 h-10 rounded-full mr-4'/>
            <p>Grab</p>
        </div>
        <div className='flex items-center pb-2'>
            <img src={nham24} alt='..' className='w-10 h-10 rounded-full mr-4'/>
            <p>nham24</p>
        </div>
    </div>
  )
}
