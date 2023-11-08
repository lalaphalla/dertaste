import React from "react";
import imgGrab from "../assets/fastfood-grabchicken.png";
import iconPrice from "../assets/icons/icon-price.png";
import iconDollar from "../assets/icons/icon-dollar.png";

export default function CategoryViewCard() {
  return (
    <div className="bg-[#F9FBE7]">
      <img src={imgGrab} alt="" />
      <div className="mt-2 ml-4 pb-4">
        <p>Grab Chicken</p>
        <div className="flex justify-between">
          <div className="flex text-left items-center">
            <img src={iconPrice} alt=".." className="w-4 inline-block mr-2" />
            Price
            <span className="ml-2">
              <img src={iconDollar} alt=".." className="w-4 h-4 inline-block" />
              <img src={iconDollar} alt=".." className="w-4 h-4 inline-block" />
            </span>
          </div>
          <div class="flex items-center space-x-1 mr-4">
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
