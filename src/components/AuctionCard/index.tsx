import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";

export interface AuctionCardProps {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  type: "bid" | "preview";
}

export function AuctionCard({
  title,
  subtitle,
  href,
  imageSrc,
  type,
}: AuctionCardProps) {
  return (
    <Link href={href} target="_blank">
      <div className="relative max-w-[330px] w-full">
        <Image alt={title} height={378} src={imageSrc} width={330} />
        <span className="absolute top-4 right-4 bg-gray-200 px-6 py-4 rounded-sm shadow-sm text-blue-900 uppercase">
          Auction
        </span>
        {/* Update font family - title  */}
        <h2 className="font-semibold min-h-[85px] leading-2xl line-clamp-2 mb-4 text-gray-1000 text-[28px]">
          {title}
        </h2>
        <p className="font-light mb-2 text-gray-1000 uppercase">{subtitle}</p>
        <div className="flex items-center gap-6">
          <Button className="flex-1" variant="secondary">
            {type}
          </Button>
          <Image alt="" height={24} src="/icons/info.svg" width={24} />
        </div>
      </div>
    </Link>
  );
}
