"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/milly.jpeg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
            priority
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Milly!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Full Stack Web Developer{" "}
            </span>
            based in the Midlands, UK. I just finished{" "}
            <a
              href="https://schoolofcode.co.uk"
              className="underline underline-offset-2"
            >
              School of Code
            </a>
            , an intensive web development bootcamp.
          </p>
          <div className="flex flex-row items-center justify-center md:justify-start">
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 border-2 border-teal-600 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              View Projects
            </Link>
            <a
              href="/Emilia_Williamson_CV_Feb_2023.pdf"
              className="text-teal-700 ml-4 font-semibold px-6 py-3 bg-neutral-100 border-2 border-teal-500 rounded shadow hover:bg-neutral-200 cursor-pointer"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
