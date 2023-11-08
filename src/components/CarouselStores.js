import { Carousel } from 'flowbite'
import slidePong from '../assets/slide-pong.jpg'
import slideDq from '../assets/slide-dq.jpg'
import slideAmazon from '../assets/slide-amzaon.png'
import React from 'react'

export default function CarouselStores() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={slidePong} alt="..." />
        <img src={slideDq} alt="..." />
        <img src={slideAmazon} alt="..." />
        
      </Carousel>
    </div>
  )
}
