import "./globals.css";
import { Playfair_Display, Source_Sans_Pro } from "next/font/google";

import { Header } from "@/components";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
    <html lang="en">
      <body className={sourceSansPro.className}>
        <Header />
        <main className="bg-zinc-800 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
