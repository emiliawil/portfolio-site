"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "work",
    page: "work",
  },
  {
    label: "about",
    page: "about",
  },
  {
    label: "contact",
    page: "contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  return (
    <header
      id="top"
      className="w-full mx-auto p-3 md:px-8  top-0 z-50 bg-primary-light"
    >
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-1 md:py-5 md:block">
            <ScrollLink to="home">
              <div className="container flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={90}
                  height={80}
                />
              </div>
            </ScrollLink>
            <div className="md:hidden">
              <button
                className="p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div
              id="links"
              className="items-center justify-center space-y-5 md:flex md:space-x-8 md:space-y-0"
            >
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <ScrollLink
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block cursor-pointer text-neutral-900 highlight"
                    }
                    aria-label={item.label}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </ScrollLink>
                );
              })}
              <Link
                href="/Emilia_Williamson_CV.pdf"
                className={
                  "block lg:inline-block cursor-pointer text-neutral-900 highlight"
                }
                aria-label="download CV"
                download
              >
                cv
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
