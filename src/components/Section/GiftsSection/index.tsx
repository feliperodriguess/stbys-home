"use client";
import { Heading, ProductSwiper } from "@/components";

import { GIFTS } from "./utils";

export function GiftsSection() {
  return (
    <section className="relative my-20 px-8">
      <Heading>Gifts for the Graduate</Heading>
      <a
        className="absolute top-8 right-36 text-blue-900 uppercase"
        href="https://www.sothebys.com/en/buy/gifts-for-the-graduate"
        target="_blank"
      >
        View all
      </a>
      <ProductSwiper items={GIFTS.JEWELRY} />
    </section>
  );
}
