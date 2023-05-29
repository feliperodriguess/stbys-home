import { AuctionSwiper, Heading } from "@/components";

import { AUCTIONS } from "./utils";

export function UpcomingAuctionsSection() {
  return (
    <section className="relative mt-10 mb-20">
      <Heading>Upcoming Auctions</Heading>
      <a
        className="absolute top-8 right-36 text-blue-900 uppercase"
        href="https://www.sothebys.com/en/calendar"
        target="_blank"
      >
        View all
      </a>
      <div className="px-8">
        <AuctionSwiper items={AUCTIONS} />
      </div>
    </section>
  );
}
