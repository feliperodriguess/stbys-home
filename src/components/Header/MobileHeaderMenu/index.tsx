"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

import { ITEMS, TOP_ITEMS } from "../utils";

export function MobileHeaderMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      <div className="flex gap-5">
        <button type="button">
          <Image alt="Search" height={20} src="/icons/search.svg" width={20} />
        </button>
        <button type="button">
          <Image alt="View Bag" height={20} src="/icons/bag.svg" width={20} />
        </button>
        <button onClick={toggleMobileMenu} type="button">
          <Image
            alt="View Menu"
            height={20}
            src={
              isMobileMenuOpen
                ? "/icons/close.svg"
                : "/icons/hamburger-menu.svg"
            }
            width={20}
          />
        </button>
      </div>

      <Dialog as="div" open={isMobileMenuOpen} onClose={toggleMobileMenu}>
        <Dialog.Panel className="bg-gray-100 fixed top-[60px] h-[calc(100vh-60px)] overflow-y-auto px-5 py-8 w-full z-10">
          <div className="flex flex-col gap-8">
            {ITEMS.map(({ href, label }) => (
              <a
                className="font-bold text-gray-1000 text-xl uppercase"
                key={label}
                href={href}
                target="_blank"
              >
                {label}
              </a>
            ))}
            <div className="bg-gray-900 bg-opacity-40 h-[1px] w-full" />
            <div className="flex flex-col gap-6">
              {TOP_ITEMS.map((item) => (
                <a
                  key={item.label}
                  className={`text-gray-1000 uppercase ${
                    item.label === "Log In" ? "font-semibold" : ""
                  }`}
                  href={item.href!}
                  target="_blank"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
