import React from 'react'

export default function StoreCard({id, title, description, category, image}) {
    return (
        <div className="max-w-xs mx-auto bg-[#FEDEB4] border border-gray-200 rounded-3xl shadow">
            <a href="#">
                <img className="rounded-t-3xl w-full lg:h-72" src={image} alt="" />
            </a>
            <div className="p-2">
                <a href="#">
                    <h5 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
                        {title}
                    </h5>
                </a> 

            </div>
        </div>
    )
}
 