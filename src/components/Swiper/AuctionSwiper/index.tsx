"use client";
import { SwiperSlide } from "swiper/react";

import { AuctionCard, AuctionCardProps, BaseSwiper } from "@/components";

interface AuctionSwiperProps {
  items: AuctionCardProps[];
}

export function AuctionSwiper({ items }: AuctionSwiperProps) {
  return (
    <BaseSwiper>
      {items.map((auction) => (
        <SwiperSlide key={auction.title}>
          <AuctionCard {...auction} />
        </SwiperSlide>
      ))}
    </BaseSwiper>
  );
}
