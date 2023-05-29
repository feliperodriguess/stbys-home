import {
  CollectiblesSection,
  GiftsSection,
  Hero,
  NewsletterForm,
  PrivateSalesSection,
  UpcomingAuctionsSection,
} from "@/components";
import { SelectsSection } from "@/components/Section/SelectsSection";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto w-full">
      <Hero />
      <UpcomingAuctionsSection />
      <SelectsSection />
      <PrivateSalesSection />
      <GiftsSection />
      <CollectiblesSection />
      <NewsletterForm />
    </main>
  );
}
