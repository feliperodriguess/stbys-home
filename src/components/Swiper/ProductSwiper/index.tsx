"use client";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import { BaseSwiper } from "@/components";

interface Product {
  href: string;
  imageSrc: string;
  imageHeight?: number;
  imageWidth?: number;
  title?: string;
  subtitle?: string;
  price?: number;
}

interface ProductSwiperProps {
  items: Product[];
}

export function ProductSwiper({ items }: ProductSwiperProps) {
  return (
    <BaseSwiper>
      {items.map((item) => (
        <SwiperSlide key={item.href}>
          <a href={item.href} target="_blank">
            <Image
              alt={(item?.title || item?.subtitle)!}
              className="object-contain"
              height={item?.imageHeight || 330}
              src={item.imageSrc}
              style={{
                minHeight: `${item.imageHeight || 330}px`,
                maxHeight: `${item.imageHeight || 330}px`,
              }}
              width={item?.imageWidth || 330}
            />
            <div className="mt-4 max-w-[330px]">
              {item?.title && (
                <p className="font-display mb-1 text-gray-1000 text-2xl uppercase">
                  {item.title}
                </p>
              )}
              {item?.subtitle && (
                <p className="text-gray-1000 text-lg">{item.subtitle}</p>
              )}
              {item?.price && (
                <span className="font-light mt-4 text-black">
                  {item.price.toLocaleString("en-US")} USD
                </span>
              )}
            </div>
          </a>
        </SwiperSlide>
      ))}
    </BaseSwiper>
  );
}
