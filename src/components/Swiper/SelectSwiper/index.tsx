"use client";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import { AuctionCardProps, BaseSwiper } from "@/components";
import { useMediaQuery } from "@/hooks";

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
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");

  return (
    <BaseSwiper slidesPerGroup={3} slidesPerView={3}>
      {slides.map(({ items }) => (
        <SwiperSlide
          key={items[0]?.title}
          className={`flex flex-col justify-between max-lg:gap-1 lg:h-[516px] max-lg:max-w-[90%]`}
          style={
            isSmallScreen
              ? {}
              : {
                  minWidth: `${items[0].imageWidth}px`,
                  maxWidth: `${items[0].imageWidth}px`,
                }
          }
        >
          {items.map((item) => (
            <a key={item.href} href={item.href} target="_blank">
              <Image
                alt={item.title}
                className="object-cover w-full"
                height={item.imageHeight}
                style={{
                  maxHeight: `${item.imageHeight}px`,
                }}
                src={item.imageSrc}
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
              <p
                className={`font-display font-medium text-gray-1000 text-xl
                ${items?.length > 1 ? "max-lg:line-clamp-1" : ""}`}
              >
                {item.subtitle}
              </p>
            </a>
          ))}
        </SwiperSlide>
      ))}
    </BaseSwiper>
  );
}
