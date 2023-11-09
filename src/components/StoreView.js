import React from 'react' 
import StoreViewCard from './StoreViewCard'
  

export default function StoreView({title, des, image}) {
  return (
    <section className="text-left  max-w-screen-xl mx-auto mt-10">
      <h2>{title}</h2>
      <h3 className='mb-4'>{des}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
        <StoreViewCard image={image}/> 
        <StoreViewCard image={image}/> 
        <StoreViewCard image={image}/> 
        <StoreViewCard image={image}/> 
      </div>
    </section>
  )
}
