"use client";
import { useState } from "react";

import { Button, Input } from "@/components";

interface Form {
  email: string;
  title: string;
  firstName: string;
  lastName: string;
}

export function NewsletterForm() {
  const [form, setForm] = useState<Form>({
    email: "",
    title: "",
    firstName: "",
    lastName: "",
  });

  const keys = Object.keys(form) as Array<keyof Form>;

  const isDisabled = !form.email || !emailRegex.test(form.email);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-100 mt-30 mb-20 py-12 px-14 w-full">
      <div className="mx-auto max-w-md">
        <h2 className="font-display text-center text-gray-1000 text-3xl tracking-wider">
          Stay informed with Sotheby’s top stories, videos, events & news.
        </h2>
        <p className="mt-6 text-center text-gray-1000">
          Receive the best from Sotheby’s delivered to your inbox.
        </p>
      </div>
      <form className="mt-12" onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-4 gap-x-4 gap-y-10">
          {keys.map((key) => (
            <Input
              key={key}
              containerClassName={inputContainerClassName[key]}
              isRequired={key === "email"}
              name={key}
              onChange={handleInputChange}
              placeholder={placeholder[key]}
              value={form[key]}
            />
          ))}
        </div>

        <p className="font-display mt-8 mb-4 text-gray-1000">
          By subscribing you are agreeing to{" "}
          <a
            className="font-semibold underline"
            href="https://www.sothebys.com/en/privacy-policy"
            target="_blank"
          >
            Sotheby’s Privacy Policy
          </a>
          . You can unsubscribe from Sotheby’s emails at any time by clicking
          the “Manage your Subscriptions” link in any of your emails.
        </p>
        <Button
          disabled={isDisabled}
          fullWidth
          type="submit"
          variant="tertiary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const inputContainerClassName = {
  email: "col-span-3",
  title: "col-span-1",
  firstName: "col-span-2",
  lastName: "col-span-2",
};

const placeholder = {
  email: "Email Address",
  title: "Title",
  firstName: "First Name",
  lastName: "Last Name",
};
