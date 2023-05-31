import Image from "next/image";

import { Dropdown, Input } from "@/components";

import { MobileHeaderMenu } from "./MobileHeaderMenu";
import { ITEMS, TOP_ITEMS } from "./utils";

export function Header() {
  return (
    <header className="bg-white max-lg:h-[60px] shadow-xl">
      <nav className="hidden lg:block border-b-[1px] border-gray-250">
        <div className="flex justify-end max-w-[1440px] mx-auto py-2 px-12 ">
          <div className="flex gap-16 items-center">
            {TOP_ITEMS.map((item) => (
              <div key={item.label}>
                {item.isDropdown ? (
                  <Dropdown
                    className={item.className}
                    label={item.label}
                    items={item.items}
                  />
                ) : (
                  <a
                    className={`${
                      item.label === "Log In" ? "font-semibold" : "font-light"
                    } text-[13px] text-gray-1000 uppercase hover:text-blue-900 hover:font-semibold`}
                    href={item.href!}
                    target="_blank"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      <nav className="flex items-center justify-between max-w-[1440px] mx-auto p-4 lg:px-8 lg:py-5">
        <Image alt="Sotheby's" height={33} src="/images/logo.svg" width={160} />
        <MobileHeaderMenu />
        <div className="hidden lg:flex gap-16">
          {ITEMS.map(({ href, label }) => (
            <a
              className="font-semibold text-gray-1000 uppercase hover:text-blue-900 hover:font-semibold"
              key={label}
              href={href}
              target="_blank"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex gap-3 items-center">
          <Input
            className="md:w-[454px]"
            icon="/icons/search.svg"
            placeholder="Search Sotheby's"
          />
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
