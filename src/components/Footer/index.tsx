"use client";
import Link from "next/link";

import { ITEMS, SOCIAL_MEDIA_LINKS } from "./utils";

export function Footer() {
  return (
    <footer>
      <div className="bg-neutral-200 w-full">
        <ul className="flex items-center justify-between max-w-4xl mx-auto px-8 py-6">
          <li>
            {/* Update font family */}
            <strong className="text-zinc-800 text-4xl">Follow Us</strong>
          </li>

          {SOCIAL_MEDIA_LINKS.map(({ href, Icon }) => (
            <li key={href}>
              <Link href={href}>
                <Icon
                  className="h-10 w-10 text-zinc-900 hover:text-yellow-500 transition-colors"
                  key={href}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <nav className="flex justify-between max-w-2xl mx-auto p-8">
        {ITEMS.map(({ title, links }) => (
          <ul className="flex flex-col gap-4" key={title}>
            <h2 className="font-bold text-zinc-600 uppercase">{title}</h2>
            {links.map(({ href, label }) => (
              <li className="font-light text-zinc-500" key={href}>
                <Link className="hover:underline" href={href} target="_blank">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </nav>

      <div className="flex justify-between my-4 px-4">
        <label className="font-light text-xs text-zinc-400">
          {"(C) 2023 Sotheby's"}
        </label>
        <small className="font-light italic text-xs text-zinc-400">
          {`All alcoholic beverage sales in New York are made solely by Sotheby's
          Wine (NEW L1046028)`}
        </small>
      </div>
    </footer>
  );
}
