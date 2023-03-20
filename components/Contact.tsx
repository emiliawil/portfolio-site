import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center mb-24 max-w-4xl mx-auto"
    >
      <img src="/images/contact.svg" alt="toolbox" className="my-24" />
      <div className="flex flex-row items-center justify-center  gap-10">
        <img
          src="/images/stickers.svg"
          alt="tool icons"
          width="804px"
          height="320px"
        />
        <div>
          <p>
            I am currently looking for my first tech role and would love to hear
            from you if you have any questions, feedback or opportunities.
          </p>
          <Link
            href="mailto:emiliawilliamson@pm.me"
            className="font-bold underline text-primary-pink"
          >
            emiliawilliamson@pm.me
          </Link>
          <div className="flex flex-row gap-2 mt-4">
            <Link
              href="https://linkedin.com/in/emiliawil"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline text-primary-blue"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </Link>{" "}
            <Link
              href="https://github.com/emiliawil"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline text-primary-red"
            >
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
