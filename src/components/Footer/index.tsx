import Image from "next/image";

import { ITEMS, SOCIAL_MEDIA } from "./utils";

export function Footer() {
  return (
    <footer>
      <div className="bg-gray-100 w-full">
        <ul className="flex items-center justify-between max-w-5xl mx-auto px-8 py-6">
          <li>
            <strong className="font-display font-semibold text-gray-1000 text-4xl">
              Follow Us
            </strong>
          </li>
          {SOCIAL_MEDIA.map(({ href, icon, iconHeight, iconWidth }) => (
            <li key={href}>
              <a href={href} target="_blank">
                <Image
                  alt=""
                  height={iconHeight || 30}
                  src={`/icons/${icon}`}
                  width={iconWidth || 30}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className="flex justify-between max-w-3xl mx-auto p-8">
        {ITEMS.map(({ title, links }) => (
          <ul className="flex flex-col gap-4" key={title}>
            <h2 className="font-bold text-gray-800 uppercase">{title}</h2>
            {links.map(({ href, label }) => (
              <li className="font-light text-gray-800" key={href}>
                <a className="hover:underline" href={href} target="_blank">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </nav>

      <div className="flex justify-between mb-8 mt-4 px-2">
        <label className="font-light text-xs text-gray-900">
          {"(C) 2023 Sotheby's"}
        </label>
        <small className="font-light italic text-xs text-gray-900">
          {`All alcoholic beverage sales in New York are made solely by Sotheby's
          Wine (NEW L1046028)`}
        </small>
      </div>
    </footer>
  );
}
