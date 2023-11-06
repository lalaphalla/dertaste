import React from 'react'
import imgReview from '../assets/review1.png'
export default function ReviewCard({ userName, comment, }) {
    return (
        <>
            <div class="bg-white rounded-2xl w-auto h-[210px] flex">
                <div class="mt-10 mx-2">
                    <img src={imgReview} alt="" />
                    <p>{userName}</p>
                </div>
                <div class="text-gray-600 mx-4">
                    <h4 class="text-black font-medium mt-6 mb-2">Tube Coffee</h4>

                    <div class="flex">
                        <p>
                            <div class="flex items-center space-x-1 mr-4">
                                <i class="fa-solid fa-star text-yellow-300"></i>
                                <i class="fa-solid fa-star text-yellow-300"></i>
                                <i class="fa-solid fa-star text-yellow-300"></i>
                                <i class="fa-solid fa-star text-yellow-300"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </p>

                        <p>100</p>
                    </div>
                    <div>
                        <p class="font-medium"><i class="fa-solid fa-mug-hot"></i> Coffee</p>
                        <p class="font-medium">Price: $$</p>
                    </div>
                    <p>{comment} </p>
                </div>
            </div>
        </>
    )
}
