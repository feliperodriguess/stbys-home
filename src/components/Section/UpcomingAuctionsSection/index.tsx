import { AuctionSwiper, SectionHeader } from "@/components";

import { AUCTIONS } from "./utils";

export function UpcomingAuctionsSection() {
  return (
    <section className="mt-10 mb-20">
      <SectionHeader
        title="Upcoming Auctions"
        viewAllLink="https://www.sothebys.com/en/calendar"
      />
      <div className="px-8">
        <AuctionSwiper items={AUCTIONS} />
      </div>
    </section>
  );
}
