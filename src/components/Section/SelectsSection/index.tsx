import { SectionHeader, SelectSwiper } from "@/components";

import { SLIDES } from "./utils";

export function SelectsSection() {
  return (
    <section className="mt-10 mb-20">
      <SectionHeader
        title="Sotheby's Selects"
        viewAllLink="https://www.sothebys.com/en/all-stories-videos"
      />
      <div className="px-8">
        <SelectSwiper slides={SLIDES} />
      </div>
    </section>
  );
}
