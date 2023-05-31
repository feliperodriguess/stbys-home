"use client";
import { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";

import { useHover } from "@/hooks";

interface BaseSwiperProps extends SwiperProps {
  children: React.ReactNode;
}

export function BaseSwiper({
  children,
  slidesPerGroup,
  slidesPerView,
  ...props
}: BaseSwiperProps) {
  const containerRef = useRef(null);
  const isContainerHovered = useHover(containerRef);

  return (
    <div ref={containerRef}>
      <Swiper
        className="base-swiper"
        modules={[Navigation]}
        navigation={isContainerHovered}
        breakpoints={{
          0: {
            slidesPerView: "auto",
            slidesPerGroupAuto: true,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: slidesPerView || 4,
            slidesPerGroup: slidesPerGroup || 4,
            spaceBetween: 24,
          },
        }}
        {...props}
      >
        {children}
      </Swiper>
    </div>
  );
}
