import React from 'react'
import StorePreview from '../components/StorePreview' 
import DeliveryCard from '../components/DeliveryCard'
import DetailCard from '../components/DetailCard'

export default function Store() {

  return (
    <section>
        <StorePreview />
        <div className='max-w-screen-xl mx-auto grid grid-cols-3'>
            <DeliveryCard /> 
            <DetailCard />
        </div>
    </section>
  )
}
