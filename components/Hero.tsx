"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center text-primary-dark font-jakarta mb-24"
    >
      <div className="p-3 flex flex-col h-[80vh] items-center justify-center animate-fadeIn animation-delay-2">
        <Image
          src="/images/hero.svg"
          alt="emilia williamson: ux designer and web developer"
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="work"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          aria-label="See my work"
        >
          <Image
            src="/images/lines/arrow.png"
            width={20}
            height={20}
            alt="arrow"
            className="animate-bounce"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
