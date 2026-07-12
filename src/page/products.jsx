import React, { useState } from "react";
import { products } from "../api";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function ProductBody() {
  // State to track the currently selected category filter
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const { addToCart } = useOutletContext();

  // Filter products based on selected category button
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Men") return product.category === "Man";
    return product.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans text-slate-900 antialiased">
      {/* Category Filter Buttons */}
      <div className="flex gap-3 mb-4 overflow-x-auto pb-2 scrollbar-none">
        {["All", "Men", "Women", "Accessory"].map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap shadow-xs
                ${
                  isActive
                    ? "bg-slate-950 text-white border-slate-950"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
            >
              {category === "Accessory" ? "Accessories" : category}
            </button>
          );
        })}
      </div>

      {/* Item Counter */}
      <p className="text-sm text-slate-500 mb-8">
        Showing {filteredProducts.length} items{" "}
        {selectedCategory !== "All" &&
          `in ${selectedCategory === "Accessory" ? "Accessories" : selectedCategory}`}
      </p>

      {/* Main Product Grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-xs flex flex-col hover:shadow-md transition-shadow"
          >
            {/* Image Box */}
            <div className="relative w-full aspect-4/5 bg-slate-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-2xs">
                {product.category}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-5 flex flex-col grow justify-between">
              <h3 className="text-base font-semibold text-slate-800 line-clamp-2 mb-4 group-hover:text-black transition-colors">
                {product.name}
              </h3>

              <div className="mt-auto space-y-4">
                <span className="text-lg font-bold text-slate-900">
                  ${product.price}.00
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="h-10 rounded-md bg-slate-950 px-3 text-xs font-semibold text-white transition hover:bg-slate-800 active:scale-95"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="h-10 rounded-md border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 active:scale-95"
                  >
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
