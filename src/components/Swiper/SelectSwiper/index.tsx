"use client";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import { AuctionCardProps, BaseSwiper } from "@/components";

interface SelectCard extends Omit<AuctionCardProps, "type"> {
  imageHeight: number;
  imageWidth: number;
  type?: "article" | "video";
}

export interface SelectSlide {
  items: SelectCard[];
}

interface SelectSwiperProps {
  slides: SelectSlide[];
}

export function SelectSwiper({ slides }: SelectSwiperProps) {
  return (
    <BaseSwiper slidesPerGroup={3} slidesPerView={3}>
      {slides.map(({ items }) => (
        <SwiperSlide
          key={items[0]?.title}
          className={`flex flex-col justify-between h-[516px] !w-[${items[0]?.imageWidth}px]`}
          style={{
            minWidth: `${items[0]?.imageWidth}px`,
            maxWidth: `${items[0]?.imageWidth}px`,
          }}
        >
          {items.map((item) => (
            <a key={item.href} href={item.href} target="_blank">
              <Image
                alt={item.title}
                height={item.imageHeight}
                src={item.imageSrc}
                style={{
                  maxHeight: `${item.imageHeight}px`,
                  objectFit: "cover",
                }}
                width={item.imageWidth}
              />
              {item.title && (
                <div className="flex gap-2 items-center my-1.5">
                  <Image
                    alt=""
                    height={24}
                    src={`/icons/${
                      item.type === "article" ? "article" : "video"
                    }.svg`}
                    width={item.type === "article" ? 28 : 24}
                  />
                  <span className="text-sm text-gray-1000 uppercase">
                    {item.title}
                  </span>
                </div>
              )}
              <p className="font-display font-medium text-gray-1000 text-xl">
                {item.subtitle}
              </p>
            </a>
          ))}
        </SwiperSlide>
      ))}
    </BaseSwiper>
  );
}
