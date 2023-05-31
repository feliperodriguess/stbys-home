"use client";
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
              className="flex flex-col justify-end relative bg-auto bg-no-repeat bg-center h-[550px] lg:h-[685px] w-full"
              style={{
                backgroundImage: `url(${image})`,
                objectFit: "contain",
              }}
            >
              <a href={linkHref} target="_blank">
                <div
                  className={`bg-cyan-1000 bg-opacity-90 mx-auto mb-9 max-w-[90%] p-8 w-full 
                  lg:mb-0 lg:max-w-md lg:absolute bottom-8 ${
                    left ? "left-6" : "right-6"
                  }`}
                >
                  <h2 className="font-display font-semibold mb-2 text-white text-3xl">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="hidden font-display mb-4 text-white lg:block">
                      {subtitle}
                    </p>
                  )}
                  <span className="text-yellow-1000 uppercase hover:underline">
                    {linkLabel}
                  </span>
                </div>
              </a>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
