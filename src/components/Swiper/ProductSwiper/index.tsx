"use client";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

import { BaseSwiper } from "@/components";

interface ProductSwiperProps {
  items: {
    href: string;
    imageSrc: string;
    imageHeight?: number;
    imageWidth?: number;
    title?: string;
    subtitle?: string;
    price?: number;
  }[];
}

export function ProductSwiper({ items }: ProductSwiperProps) {
  return (
    <BaseSwiper>
      {items.map((item) => (
        <SwiperSlide key={item.href}>
          <Link href={item.href}>
            <Image
              alt={(item?.title || item?.subtitle)!}
              height={item?.imageHeight || 330}
              src={item.imageSrc}
              width={item?.imageWidth || 330}
            />
            <div className="mt-4 ">
              {/* Update font family - only for the title */}
              {item?.title && (
                <p className="mb-1 font-medium text-slate-900 text-2xl uppercase">
                  {item.title}
                </p>
              )}
              {item?.subtitle && (
                <p className="text-slate-900 text-lg">{item.subtitle}</p>
              )}
              {item?.price && (
                <span className="font-light mt-4 text-black">
                  {item.price.toLocaleString("en-US")} USD
                </span>
              )}
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </BaseSwiper>
  );
}
