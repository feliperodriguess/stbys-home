/* eslint-disable @next/next/no-img-element */
import { Heading } from "@/components";

import { ITEMS } from "./utils";

export function PrivateSalesSection() {
  return (
    <section className="max-w-8xl mt-16 mb-20 mx-auto w-full">
      <Heading>{"Learn More About Private Sales at Sotheby's"}</Heading>
      <div className="grid grid-rows-3 grid-cols-4 gap-6 max-h-[428px] px-6 w-full">
        {ITEMS.map(({ label, image, className, href }) => (
          <a className={className} key={label} href={href} target="_blank">
            <img
              alt={label}
              className="object-cover h-[calc(100%-28px)] w-full"
              src={image}
            />
            <p className="font-display mt-2 text-gray-1000 text-xl">{label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
