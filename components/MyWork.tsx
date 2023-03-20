import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "LetChat",
    description:
      "LetChat is a communication app designed to ease the process of communication for tenants and landlords.",
    image: "/images/work/letchat.png",
    github:
      "https://github.com/SchoolOfCode/bc13_final-project_front-end-git-gud",
    link: "https://letchat.co.uk/",
  },
  {
    name: "Insight Dashboard",
    description: "A wellbeing app to help bootcampers maintain healthy habits.",
    image: "/images/work/insightDashboard.png",
    github:
      "https://github.com/SchoolOfCode/bc13_w9_project-frontend-globally-scoped",
    link: "https://insightdashboard.netlify.app/",
  },
];

const MyWork = () => {
  return (
    <section id="work" className="flex flex-col items-center mb-24">
      <img src="/images/myWork.png" alt="my work" className="my-24" />

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={700}
                        height={700}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyWork;
