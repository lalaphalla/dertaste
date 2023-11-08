import React from "react";
import CategoryViewCard from "./CategoryViewCard";

export default function CategoryView() {
  return (
    <section className="text-left  max-w-screen-xl mx-auto mt-10">
      <h2>Bite Fast and Furious</h2>
      <h2>Fast Food</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CategoryViewCard />
        <CategoryViewCard />
        <CategoryViewCard />
        <CategoryViewCard />
      </div>
    </section>
  );
}
