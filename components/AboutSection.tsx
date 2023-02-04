import React from "react";
import Image from "next/image";

const skills = [
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "PostgreSQL" },
  { skill: "Jest" },
  { skill: "Cypress" },
  { skill: "Supertest" },
  { skill: "React Testing Library" },
  { skill: "REST API" },
];

const learning = [
  { skill: "Python" },
  { skill: "MongoDB" },
  { skill: "GraphQL" },
  { skill: "AWS" },
  { skill: "Firebase" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Emilia, but you can call me Milly. I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" team-oriented"}</span> full stack
              JavaScript developer.
            </p>
            <br />
            <p>
              As a teen during the web 1.0 era, I made endless terrible websites
              using table layouts and inline CSS. I was fascinated by the
              possibilities of the internet.
            </p>
            <br />
            <p>
              Fifteen years later, I decided to quit my parliamentary casework
              job and pursue my passion for technology. I enrolled in a 16-week
              intensive coding bootcamp at{" "}
              <a
                href="https://www.schoolofcode.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-teal-500 hover:text-teal-700"
              >
                School of Code
              </a>{" "}
              and have loved every second!
            </p>
            <br />
            <p>
              I am currently looking for my first junior developer role and am
              excited to start my career in tech.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-1 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <h1 className="mt-8 text-2xl font-bold mb-6">Currently learning</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {learning.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-1 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
