import React from "react";
import imgPong from "../assets/fastfood-pong.png";
import imgBurgerking from "../assets/fastfood-burgerking.png";
import imgGrab from "../assets/fastfood-grabchicken.png"; 
import StoreView from "../components/StoreView";

import imgMixue from "../assets/dessert-mixue.png";

export default function Store() {
  const imgs = [imgPong, imgGrab, imgBurgerking];
  return (
    <section className="max-w-screen-xl mx-auto font-[Sanchez] mt-12">
      <h3 className="text-left text-2xl mb-4">The taste. can share with everyone.</h3>
      <div className="grid grid-cols-3">
        {imgs.map((img) => (
          <img src={img} className="rounded-xl" alt="" />
        ))}
      </div>
      <StoreView  title='Popular Place you want to visit' des='Good Atmostphere' />
      <StoreView title='Taste your cold' image={imgMixue}/>
      <StoreView />
    </section>
  );
}
