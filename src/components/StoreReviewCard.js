import React from "react";

export default function StoreReviewCard() {
  return (
    <div className="bg-[#F9FBE7] p-4 text-left w-full md:w-2/5 mt-2 md:ml-4">
      <h3 className="text-xl mb-2">Rating & Review</h3>
      <div className="flex">
        <p>4.0</p>
        <div class="flex items-center space-x-1 mr-4 ml-6">
          <i class="fa-solid fa-star text-yellow-300"></i>
          <i class="fa-solid fa-star text-yellow-300"></i>
          <i class="fa-solid fa-star text-yellow-300"></i>
          <i class="fa-solid fa-star text-yellow-300"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <p className="ml-4"> 250 reviews</p>
      </div>
      <h4 className="font-bold">Excellent Serivce</h4>
      <p>
        {" "}
        Excellent service from p’Airry and p’Mammy I got my birthday dinner here
        and i’m impresed with food in terms of taste and quality. So let have
        dinner here{" "}
      </p>

      <h6 className="mt-4">Ratings </h6>

      <div className="flex">
        {/* text */}
        <div className="ml-4">
          <p>Food</p>
          <p>Service</p>
          <p>Value</p>
          <p>Atmostphere</p>
        </div>
        
        {/* star */}
        <div className="ml-8">
          <div class="flex items-center space-x-1 mb-2">
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="flex items-center space-x-1 mb-2">
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star"></i>
          </div>  
          <div class="flex items-center space-x-1 mb-2">
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star text-yellow-300"></i>
            <i class="fa-solid fa-star"></i>
          </div>  
          <div class="flex items-center space-x-1 mb-2">
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
