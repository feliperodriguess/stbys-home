import { Heading, SelectSwiper } from "@/components";

import { SLIDES } from "./utils";

export function SelectsSection() {
  return (
    <section className="relative mt-10 mb-20">
      <Heading>{"Sotheby's Selects"}</Heading>
      <a
        className="absolute top-8 right-36 text-blue-900 uppercase"
        href="https://www.sothebys.com/en/all-stories-videos"
        target="_blank"
      >
        View all
      </a>
      <div className="px-8">
        <SelectSwiper slides={SLIDES} />
      </div>
    </section>
  );
}
