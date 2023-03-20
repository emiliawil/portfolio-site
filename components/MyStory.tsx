import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const MyStory = () => {
  return (
    <section id="about" className="flex flex-col items-center mb-24">
      <Image
        src="/images/myStory.svg"
        width={542}
        height={111}
        alt="my story"
        className="my-24"
      />
      <div className="column text-justify">
        <p>
          I’m Emilia, an{" "}
          <span className="text-primary-darkblue font-bold">avid puzzler</span>,{" "}
          <span className="text-primary-darkpink font-bold">
            JavaScript fangirl
          </span>
          , and{" "}
          <span className="text-primary-darkred font-bold">
            lover of design
          </span>
          .
        </p>
        <p>
          When I was younger, I was fascinated by magazine covers and page
          layouts, making my own ‘newsletters’ using stickers and cuttings from
          the girls’ magazines my mom bought me.
        </p>
        <p>
          As a teenager, that translated into a love of web design. I would
          spend hours on my old chunky laptop, carefully erasing backgrounds
          from pictures of flowers and anime characters, constructing elaborate
          banners in Corel Paint Shop Pro and slotting them into HTML table
          layouts. It’s an era of the web I miss, and I always try to
          incorporate the essence of what excited me about those websites into
          my current work.
        </p>
        <p>
          I didn’t know what I wanted to do after high school, and I never
          considered that my weird hobby could be turned into a career. A lover
          of the humanities, I did an English degree and then converted to Law,
          before realising that world was not for me. I worked in advice and
          guidance roles for years, still dabbling with coding in my free time,
          before deciding to take the plunge and change my life by quitting my
          job and committing to a career change.
        </p>
        <p>
          I was fortunately accepted into{" "}
          <Link
            href="https://schoolofcode.co.uk"
            target="_blank"
            rel="noreferrer"
            className="highlight font-bold underline"
          >
            School of Code
          </Link>
          , an intensive 16-week web development bootcamp. It was life-changing.
          We were taught how to learn, work on a dev team, think computationally
          and solve problems creatively, and I have loved every second of it.
        </p>
      </div>
      {/* <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
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
            </div> */}
    </section>
  );
};

export default MyStory;
