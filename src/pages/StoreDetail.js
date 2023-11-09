import React from 'react'
import StorePreview from '../components/StorePreview' 
import DeliveryCard from '../components/DeliveryCard'
import DetailCard from '../components/DetailCard'
import LocationCard from '../components/LocationCard'

export default function StoreDetail() {
  return (
    <section>
        <StorePreview />
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 mt-2'>
            <DeliveryCard /> 
            <DetailCard />
            <LocationCard />
        </div>
    </section>
  )
}
