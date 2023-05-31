import Image from "next/image";

import { Button, Heading, ProductSwiper, SectionHeader } from "@/components";

import { COLLECTIBLES } from "./utils";

export function CollectiblesSection() {
  return (
    <section className="mt-10 mb-20">
      <div className="bg-gray-100 flex flex-wrap items-center justify-between w-full">
        <div className="flex flex-col mx-auto justify-center p-4 lg:ml-[120px] lg:p-0">
          <Heading className="!ml-0"> {"Sell with Sotheby's"}</Heading>
          <p className="font-display">
            Curious to know if your item is suitable for one of our upcoming
            sales?
          </p>
          <p className="font-display my-10">
            Provide information and share images to request an online estimate
            now.
          </p>
          <Button className="max-lg:min-w-full">
            <a href="https://www.sothebys.com/en/sell?locale=en">
              Start Selling
            </a>
          </Button>
        </div>
        <Image
          alt=""
          className="mx-auto"
          height={520}
          src="https://sothebys-com.brightspotcdn.com/dims4/default/8d39ab8/2147483647/strip/true/crop/1420x1040+0+0/resize/710x520!/format/webp/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Ff3%2Fb2%2F960d317e43a78f46b41a198ab1c9%2F21693106-sell-with-sothebys-webbanners-1420x1040-banner2.jpg"
          width={710}
        />
      </div>
      <div className="mt-20">
        <SectionHeader
          title="Luxury Collectibles Available for Immediate Purchase"
          viewAllLink="https://www.sothebys.com/en/buy/luxury/collectibles"
        />
        <div className="px-4 lg:px-8">
          <ProductSwiper items={COLLECTIBLES} />
        </div>
      </div>
    </section>
  );
}
