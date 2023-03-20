import Image from "next/image";

const Toolbox = () => {
  return (
    <section id="work" className="flex flex-col items-center mb-24">
      <Image
        src="/images/toolbox.svg"
        alt="toolbox"
        className="my-24"
        width={448}
        height={108}
      />
      <Image
        src="/images/tools.svg"
        alt="tool icons"
        width={804}
        height={320}
      />
    </section>
  );
};

export default Toolbox;
