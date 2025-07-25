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
  { name: "سياسة الخصوصية", href: "/privacy" },
  // { name: "التبرع", href: "/donation" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-secondary-50 to-secondary-100 shadow-soft sticky top-0 z-50 backdrop-blur-lg">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">Mostaqem</span>
            <img
              alt=""
              src={logo}
              className="h-10 w-auto min-w-[3rem] min-h-[3rem] transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-primary-700 hover:bg-primary-100 transition-colors duration-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="relative text-lg font-semibold leading-6 text-primary-800 hover:text-primary-500 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/50"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <div className="flex gap-3">
            <a 
              href="https://github.com/Mostaqem"
              className="p-2 rounded-full bg-white/70 hover:bg-white shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="text-xl text-primary-700 hover:text-primary-500" />
            </a>
            <a 
              href="https://www.facebook.com/mostaqemapp"
              className="p-2 rounded-full bg-white/70 hover:bg-white shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110"
            >
              <FaFacebook className="text-xl text-primary-700 hover:text-primary-500" />
            </a>
            <a 
              href="https://x.com/mostaqemapp"
              className="p-2 rounded-full bg-white/70 hover:bg-white shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110"
            >
              <FaXTwitter className="text-xl text-primary-700 hover:text-primary-500" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Enhanced Design */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-b from-secondary-50 to-secondary-100 px-6 py-6 sm:max-w-sm backdrop-blur-xl border-l border-white/20">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Mostaqem</span>
              <img
                alt=""
                src={logo}
                className="h-10 w-auto min-w-[3rem] min-h-[3rem]"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-xl p-2.5 text-primary-700 hover:bg-white/50 transition-colors duration-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-primary-200/30">
              <div className="space-y-3 py-6">
                {navigation.map((item) => (
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    key={item.name}
                    to={item.href}
                    className="block rounded-xl px-4 py-3 text-lg font-semibold leading-7 text-primary-800 hover:bg-white/50 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="py-6">
                <div className="flex gap-4 justify-center">
                  <a 
                    href="https://github.com/Mostaqem"
                    className="p-3 rounded-full bg-white/70 hover:bg-white shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <FaGithub className="text-xl text-primary-700" />
                  </a>
                  <a 
                    href="https://www.facebook.com/mostaqemapp"
                    className="p-3 rounded-full bg-white/70 hover:bg-white shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <FaFacebook className="text-xl text-primary-700" />
                  </a>
                  <a 
                    href="https://x.com/mostaqemapp"
                    className="p-3 rounded-full bg-white/70 hover:bg-white shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <FaXTwitter className="text-xl text-primary-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
