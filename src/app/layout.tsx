import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import { Playfair_Display, Source_Sans_Pro } from "next/font/google";

import { Footer, Header } from "@/components";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Fine Art, Jewels, Watches, Wine Auctions & Sales | Sotheby's",
  description:
    "Sotheby's is the premier destination for auctions and private sales of Contemporary, Modern & Impressionist, Old Master Paintings, Jewelry, Watches, Wine, Decorative Arts, Asian Art & more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSansPro.className} ${playfairDisplay.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
