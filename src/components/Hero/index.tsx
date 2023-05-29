"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SWIPER_ITEMS } from "./utils";

export function Hero() {
  return (
    <Swiper
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      loop
      modules={[Autoplay, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
    >
      {SWIPER_ITEMS.map(
        ({ title, subtitle, image, linkHref, linkLabel, left }) => (
          <SwiperSlide key={`${title} ${subtitle}`}>
            <div
              className="relative bg-auto bg-no-repeat bg-center h-[82vh] w-full"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <Link href={linkHref} target="_blank">
                <div
                  className={`absolute bottom-6 bg-cyan-1000 bg-opacity-90 max-w-md p-8 w-full ${
                    left ? "left-6" : "right-6"
                  }`}
                >
                  {/* Update font family (title and subtitle) */}
                  <h2 className="mb-2 text-white text-3xl">{title}</h2>
                  {subtitle && <p className="mb-4 text-white">{subtitle}</p>}
                  <span className="text-yellow-1000 uppercase hover:underline">
                    {linkLabel}
                  </span>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
