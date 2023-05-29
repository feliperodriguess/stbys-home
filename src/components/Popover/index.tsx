"use client";
import { Fragment, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";

interface PopoverMenuProps {
  children?: React.ReactNode;
  className?: string;
  label: string;
}

const TIMEOUT_DURATION = 120;

export function PopoverMenu({ children, className, label }: PopoverMenuProps) {
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
    <Popover className={`relative ${className}`}>
      {({ open }) => (
        <div
          onMouseEnter={() => handleEnter(open)}
          onMouseLeave={() => handleLeave(open)}
        >
          {/*@ts-ignore*/}
          <Popover.Button ref={triggerRef}>{label}</Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            {/* left-1/2 z-50 mt-3 -translate-x-1/2 transform */}
            <Popover.Panel className="absolute mt-3 px-4 z-50">
              <div className="bg-gray-100 p-8 pb-12 w-screen">{children}</div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}
