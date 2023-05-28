import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components";

import { ITEMS, TOP_ITEMS } from "./utils";

export function Header() {
  return (
    <header className="bg-white">
      <nav className="border-b-[1px] border-zinc-200 flex justify-end py-3 px-12 w-full">
        <div className="flex gap-16 items-center">
          {TOP_ITEMS.map(({ label }) => (
            <div key={label} className="">
              <Link
                className="text-sm text-zinc-500 uppercase hover:text-blue-900 hover:font-semibold"
                href="/"
              >
                {label}
              </Link>
            </div>
          ))}
        </div>
      </nav>

      <nav className="flex items-center justify-between px-8 py-5">
        <Image alt="Sotheby's" height={33} src="/images/logo.svg" width={160} />

        <div className="flex gap-16">
          {ITEMS.map(({ href, label }) => (
            <Link key={href} className="text-zinc-800 uppercase" href={href}>
              {label}
            </Link>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <Input icon="/icons/search.svg" placeholder="Search Sotheby's" />
          <Image
            alt="View Shopping Bag"
            height={24}
            src="/icons/bag.svg"
            width={24}
          />
        </div>
      </nav>
    </header>
  );
}
