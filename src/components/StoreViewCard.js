import React from "react";
import imgAmazon from "../assets/coffee-amazon.png";
import iconPrice from "../assets/icons/icon-price.png";
import iconDollar from "../assets/icons/icon-dollar.png";
import iconCoffee from "../assets/icons/icon-coffee.png";
import { Link } from "react-router-dom";

export default function StoreViewCard({ image }) {
  const img = image ? image : imgAmazon;

  return (
    <div className="bg-[#F9FBE7]">
      <Link to="/store/:1">
        <img src={img} alt="" />
      </Link>
      <div className="flex ml-4 mt-4">
        <img src={iconCoffee} alt=".." className="w-4 inline-block mr-2" />
        <div class="flex items-center space-x-1 mr-4">
          <i class="fa-solid fa-star text-yellow-300"></i>
          <i class="fa-solid fa-star text-yellow-300"></i>
          <i class="fa-solid fa-star text-yellow-300"></i>
          <i class="fa-solid fa-star text-yellow-300"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
      <div className="mt-2 ml-4 pb-4">
        <p>Amazon Coffee</p>
        <div className="flex justify-between">
          <div className="flex text-left items-center">
            <img src={iconPrice} alt=".." className="w-4 inline-block mr-2" />
            Price
            <span className="ml-2">
              <img src={iconDollar} alt=".." className="w-4 h-4 inline-block" />
              <img src={iconDollar} alt=".." className="w-4 h-4 inline-block" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
