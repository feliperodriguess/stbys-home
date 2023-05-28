"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button, Heading } from "@/components";
import { useHover } from "@/hooks";

import { COLLECTIBLES, GIFTS } from "./utils";

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

function ProductSwiper({ items }: ProductSwiperProps) {
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
      >
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
      </Swiper>
    </div>
  );
}

export function HomePageProductsSection() {
  return (
    <section className="relative mt-10 mb-20">
      <div className="my-20 px-8">
        <Heading>Gifts for the Graduate</Heading>
        <a
          className="absolute top-8 right-36 text-blue-900 uppercase"
          href="https://www.sothebys.com/en/buy/gifts-for-the-graduate"
          target="_blank"
        >
          View all
        </a>
        <ProductSwiper items={GIFTS.JEWELRY} />
      </div>

      <div className="bg-gray-100 flex items-center justify-between w-full">
        <div className="flex flex-col ml-[120px] justify-center">
          <Heading className="!ml-0"> {"Sell with Sotheby's"}</Heading>
          {/* Update font family - two p(s) */}
          <p>
            Curious to know if your item is suitable for one of our upcoming
            sales?
          </p>
          <p className="my-10">
            Provide information and share images to request an online estimate
            now.
          </p>
          <Button>Start Selling</Button>
        </div>
        <Image
          alt=""
          height={520}
          src="https://sothebys-com.brightspotcdn.com/dims4/default/8d39ab8/2147483647/strip/true/crop/1420x1040+0+0/resize/710x520!/format/webp/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Ff3%2Fb2%2F960d317e43a78f46b41a198ab1c9%2F21693106-sell-with-sothebys-webbanners-1420x1040-banner2.jpg"
          width={710}
        />
      </div>

      <div className="mt-20 px-8">
        <Heading>Luxury Collectibles Available for Immediate Purchase</Heading>
        <a
          className="absolute top-8 right-36 text-blue-900 uppercase"
          href="https://www.sothebys.com/en/buy/luxury/collectibles"
          target="_blank"
        >
          View all
        </a>
        <ProductSwiper items={COLLECTIBLES} />
      </div>
    </section>
  );
}
