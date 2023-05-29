"use client";
import { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";

import { useHover } from "@/hooks";

interface BaseSwiperProps extends SwiperProps {
  children: React.ReactNode;
}

export function BaseSwiper({ children, ...props }: BaseSwiperProps) {
  const containerRef = useRef(null);
  const isContainerHovered = useHover(containerRef);

  return (
    <div ref={containerRef}>
      <Swiper
        modules={[Navigation]}
        navigation={isContainerHovered}
        slidesPerGroup={4}
        slidesPerView={4}
        spaceBetween={24}
        {...props}
      >
        {children}
      </Swiper>
    </div>
  );
}
