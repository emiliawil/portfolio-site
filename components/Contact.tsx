import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center mb-24 max-w-4xl mx-auto"
    >
      <Image
        src="/images/contact.svg"
        alt="toolbox"
        className="my-24"
        width={515}
        height={94}
      />

      <div className="flex flex-col md:flex-row-reverse gap-16 justify-center items-center">
        <div>
          <p className="max-w-[65ch]">
            I am currently looking for my first tech role and would love to hear
            from you if you have any questions, feedback or opportunities.
          </p>
          <Link
            href="mailto:emiliawilliamson@pm.me"
            className="font-bold underline"
          >
            emiliawilliamson@pm.me
          </Link>
          <div className="flex flex-row gap-2 mt-4">
            <Link
              href="https://linkedin.com/in/emiliawil"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline "
              aria-label="Open LinkedIn profile in new window"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer "
                size={36}
              />
            </Link>{" "}
            <Link
              href="https://github.com/emiliawil"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline"
              aria-label="Open GitHub profile in new window"
            >
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer"
                size={36}
              />
            </Link>
          </div>
        </div>
        <Image
          src="/images/stickers.svg"
          alt="tool icons"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default Contact;
