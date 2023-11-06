import React from 'react'
import imgFastFood from '../assets/categoires/fast-food.png'
import imgBeverage from '../assets/categoires/bubble-tea.png'
import imgDessert from '../assets/categoires/ice-cream1.png'
import imgBakery from '../assets/categoires/skewer.png'


export default function CategoryPreview() {
    let Categories = [
        {
            title: 'FastFood', image: imgFastFood, icon: 'fastfood'
        },
        {
            title: 'Beverage', image: imgBeverage
        }, {
            title: 'Dessert', image: imgDessert
        },
        {
            title: 'Bakery', image: imgBakery
        },]
    return (
        <section className="mb-4 px-4">
            <h2 className="text-3xl font-bold my-4">Category</h2>
            <p className="text-gray-400 mb-4">Choose variety of food category</p> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    Categories.map(cat => (
                        <div className=" bg-[#FEDEB4] rounded-xl">
                            <div className="w-full bg-[#FFFCF3] h-[220px]">
                                <img src={cat.image} alt="..."
                                    className="w-[210px] m-auto md:h-40 pt-6 cursor-pointer" />
                            </div>
                            <h3 className="text-center text-xl py-2">{cat.title}</h3>
                        </div>
                    ))
                } 
            </div>
        </section>
    )
}
