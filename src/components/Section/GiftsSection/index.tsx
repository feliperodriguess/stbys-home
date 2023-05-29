"use client";
import { useState } from "react";

import { ProductSwiper, SectionHeader } from "@/components";

import { GIFTS, GIFT_CATEGORIES, Gift } from "./utils";

export function GiftsSection() {
  const [selectedCategory, setSelectedCategory] = useState<Gift>("JEWELRY");

  return (
    <section className="mt-40 mb-20">
      <SectionHeader
        title="Gifts for the Graduate"
        viewAllLink="https://www.sothebys.com/en/buy/gifts-for-the-graduate"
      />
      <div className="flex items-center gap-10 mb-12 ml-[120px]">
        {GIFT_CATEGORIES.map((category: Gift) => (
          <button
            key={category}
            className={`text-lg
          ${
            category === selectedCategory
              ? "border-b-2 border-cyan-1000 py-4 text-cyan-1000"
              : "text-gray-800 hover:text-cyan-1000"
          }
       `}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="px-8">
        <ProductSwiper items={GIFTS[selectedCategory]} />
      </div>
    </section>
  );
}
