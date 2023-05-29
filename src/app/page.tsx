import {
  CollectiblesSection,
  GiftsSection,
  Hero,
  PrivateSalesSection,
  UpcomingAuctionsSection,
} from "@/components";
import { SelectsSection } from "@/components/Section/SelectsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <UpcomingAuctionsSection />
      <SelectsSection />
      <PrivateSalesSection />
      <GiftsSection />
      <CollectiblesSection />
    </>
  );
}
