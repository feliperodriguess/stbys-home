"use client";
import { Fragment, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  label: string;
}

const TIMEOUT_DURATION = 15;

export function Dropdown({ className, items, label }: DropdownProps) {
  const triggerRef = useRef<HTMLButtonElement | null>();
  const timeOutRef = useRef<any>();

  const handleEnter = (isOpen: boolean) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, TIMEOUT_DURATION);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <div
          onMouseEnter={() => handleEnter(open)}
          onMouseLeave={() => handleLeave(open)}
        >
          <Menu.Button
            className="font-light text-[13px] text-gray-1000 uppercase hover:text-blue-900 hover:font-semibold"
            // @ts-ignore
            ref={triggerRef}
          >
            {label}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${className}`}
            >
              <div className="py-1">
                {items.map((item) => (
                  <Menu.Item key={item.label}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={`block px-4 py-2 text-gray-1000 text-sm ${
                          active ? "bg-gray-100  underline" : ""
                        } `}
                        target="_blank"
                      >
                        {item.label}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
}
