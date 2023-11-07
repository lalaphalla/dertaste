import React from "react";
import imgReview from "../assets/review1.png";
import imgTube from "../assets/coffee-tube.png";
import iconCoffee from "../assets/icons/icon-coffee.png"
import iconPrice from "../assets/icons/icon-price.png"
import iconDollar from "../assets/icons/icon-dollar.png"

export default function ReviewCard({ userName, comment }) {
  return (
    <>
      <div className="flex font-serif bg-[#F9FBE7] rounded-lg shadow">
        <div className="pt-4 pl-2">
          <h4>Tube Coffee</h4>
          <img src={imgTube} alt=".." className="rounded-xl"/>
        </div>
        <div>
        <div className="flex items-center p-4">
          <img src={imgReview} className="w-14 h-14" alt=".." />
          <h5 className="">Heng LOEM</h5>
        </div>

        <p className="pl-4 text-left">Good coffee tests, best service, and comfort space. </p>
        <p className="pl-4 ">
          <div class="flex items-center space-x-1 mr-4">
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </p>

        <p className="text-left ml-4">
        <img src={iconCoffee} alt=".." className="w-4 inline-block"/> Coffee 
        </p>
        <div className="flex text-left ml-4 items-center">
          <img src={iconPrice} alt=".." className="w-4 inline-block mr-2" />
          Price
          <span className="ml-2">
            <img src={iconDollar} alt=".." className="w-4 h-4 inline-block" />
            <img src={iconDollar} alt=".." className="w-4 h-4 inline-block" />
          </span>
        </div>
        </div>
        
      </div>

      {/* <div class="bg-white rounded-2xl w-auto h-[210px] flex">
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
            </div> */}
    </>
  );
}
