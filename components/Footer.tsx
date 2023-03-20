import React from "react";
import Image from "next/image";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="mx-auto my-10 max-w-3xl px-4 text-center sm:px-6 md:max-w-5xl flex flex-col items-center"
    >
      <Image
        src="/images/wave.svg"
        alt="wavy rule"
        width={200}
        height={200}
        className="mb-10"
      />
      <p className="font-bold ">
        designed and built with{" "}
        <span className="text-primary-red">&hearts;</span> and{" "}
        <span className="text-primary-pink">next.js</span> by Emilia "Milly"
        Williamson.
      </p>
      <p>© {new Date().getFullYear() + " "} all rights reserved</p>
    </footer>
  );
};

export default Footer;
