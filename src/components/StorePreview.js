import React from 'react'
import imgMixue from '../assets/dessert-mixue.png'
import imgBubble from '../assets/categoires/bubble-tea.png'

export default function StorePreview() {

    return (
        <section className='grid grid-cols-3 gap-4'>
            <div className='grid col-span-2'>
                <div className=' '>
                    <img className='h-auto max-w-full rounded-lg' src={imgMixue} alt='preview 1' />
                </div>
                <div>
                    <img className='h-auto max-w-full rounded-lg' src={imgBubble} alt='preview 1' />
                </div>
                <div>
                    <img className='h-auto max-w-full rounded-lg' src={imgMixue} alt='preview 1' />
                </div>
            </div>
        </section>
    )
}
