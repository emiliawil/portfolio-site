"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";

interface NavItem {
  label: string;
  section: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "work",
    section: "#work",
  },
  {
    label: "about",
    section: "#about",
  },
  {
    label: "contact",
    section: "#contact",
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
            <Link href="/">
              <div className="container flex items-center">
                
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={90}
                  height={80}
                />
               
              </div>
            </Link>
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

        <nav>
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
                  <Link 
                    key={idx}
                    href={item.section}
                    className={
                      "block lg:inline-block cursor-pointer text-neutral-900 highlight"
                    }
                    aria-label={item.label}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/blog"
                className={
                  "block lg:inline-block cursor-pointer text-neutral-900 highlight"
                }
                aria-label="blog"
              >
                blog
              </Link>
              <Link
                href="/Emilia_Williamson_CV.pdf"
                target="_blank"
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
        </nav>
      </div>
    </header>
  );
}
