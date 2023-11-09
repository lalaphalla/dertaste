import React from "react";
import imgMixue from "../assets/dessert-mixue.png";
import imgBubble from "../assets/categoires/bubble-tea.png";
import place1 from "../assets/place1.png";
import place2 from "../assets/place2.png";
import place3 from "../assets/place3.png";
import place4 from "../assets/place4.png";
import StoreReviewCard from "./StoreReviewCard";

export default function StorePreview() {
  return (
    <section className="flex flex-col md:flex-row max-w-screen-xl mx-auto ">
      <div className="flex w-full md:w-3/4">
        <div className="mr-2">
          <img
            className="h-auto max-w-full rounded-lg"
            src={place1}
            alt="preview 1"
          />
        </div>
        <div className="block">
          <img
            className="h-auto max-w-full rounded-lg mb-1"
            src={place2}
            alt="preview 1"
          />
          <img
            className="h-auto max-w-full rounded-lg"
            src={place3}
            alt="preview 1"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={place4}
            alt="preview 1"
          />
        </div>
      </div>
      
      <StoreReviewCard />
    </section>
  );
}
