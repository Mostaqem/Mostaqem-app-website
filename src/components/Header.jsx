"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/removed-bg-logo.png";

const navigation = [
  { name: "الرئيسية", href: "/" },
  { name: "سياسة الخصوصية", href: "/PrivacyPolicy" },
  // { name: "التبرع", href: "/donation" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#fceedd] shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Mostaqem</span>
            <img
              alt=""
              src={logo}
              className="h-8 w-auto min-w-[3rem] min-h-[3rem]"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-md font-semibold leading-6 text-[#725142]"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <span className="flex gap-[15px]">
            <a href="https://github.com/Mostaqem">
              <FaGithub className="text-xl cursor-pointer text-[#725142]" />
            </a>
            <a href="https://www.facebook.com/mostaqemapp">
              <FaFacebook className="text-xl cursor-pointer text-[#725142]" />
            </a>
            <a href="https://x.com/mostaqemapp">
              <FaXTwitter className="text-xl cursor-pointer text-[#725142]" />
            </a>
          </span>
        </div>
      </nav>

      {/* navBar in Mobile */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#fceedd] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Mostaqem</span>
              <img
                alt=""
                src={logo}
                className="h-8 w-auto min-w-[3rem] min-h-[3rem]"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    key={item.name}
                    to={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#725142]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <span className="flex gap-[15px]">
                  <a href="https://github.com/Mostaqem">
                    <FaGithub className="text-xl cursor-pointer text-[#725142]" />
                  </a>
                  <a href="https://www.facebook.com/mostaqemapp">
                    <FaFacebook className="text-xl cursor-pointer text-[#725142]" />
                  </a>
                  <a href="https://x.com/mostaqemapp">
                    <FaXTwitter className="text-xl cursor-pointer text-[#725142]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
